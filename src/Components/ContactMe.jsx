import { useState, useRef, useEffect, useContext } from 'react'
import { motion, useAnimate } from 'framer-motion'
import '../Styles/ContactMe.css'
import emailjs from '@emailjs/browser'
import { ScreenWidthContext } from '../App'

const ContactMe = ({contactRef}) => {

    const screenWidth = useContext(ScreenWidthContext);

    return ( 
        <div id="contactMe_container" ref={contactRef}>
            {screenWidth <= 1024 && <h2>CONTACT</h2>}
            <h3>Want to discuss a project with me?</h3>
            <p>You can contact me on <a>Github</a>, <a>LinkedIn</a>, or <a>Email</a> - or send me a message here.</p>
            <ContactForm />
        </div>
     );
}
 
export default ContactMe;

function ContactForm() {

    const formRef = useRef();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [query, setQuery] = useState('');

    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSending(true);

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log("invalid email");
            return;
        }

        emailjs.sendForm('portfolio_query', 'portfolio_query_template', formRef.current, '_sXr4SluBLF-ldJB5')
            .then(() => {
                setSending(false);
                setSent(true);
                setTimeout(() => {
                    setSent(false);
                    setName('');
                    setEmail('');
                    setPhone('');
                    setQuery('');
                }, 3000);
            })
            .catch(() => {

            })
    }

    const [buttonScope, animateButton] = useAnimate();

    return (
        <div className="contactForm_container">
            <form onSubmit={handleSubmit} ref={formRef}>
                <label className="input-label" htmlFor="name">Name:</label>
                <input 
                    className="input" 
                    type="text" 
                    name="name" 
                    required
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                    />
                <label className="input-label" htmlFor="email">Email address:</label>
                <input 
                    className="input" 
                    type="email" 
                    name="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                <label className="input-label" htmlFor="phone">Contact number:</label>
                <input 
                    className="input" 
                    type="text" 
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.currentTarget.value)}
                    />
                <label className="input-label" htmlFor="query">Message:</label>
                <textarea 
                    className="input" 
                    id="messageInput" 
                    type="text"
                    name="query" 
                    required 
                    value={query}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                />
                <AnimatedButton animateButton={animateButton} buttonScope={buttonScope} sending={sending} sent={sent}/>
            </form>
        </div>
    )
}

function AnimatedButton({animateButton, buttonScope, sending, sent}) {

    const randomNumberBetween = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const flyingLetters = Array.from({ length: 20 });
    const lettersAnimation = flyingLetters.map((_, index) => [
        `.svg-envelope_${index}`,
        {
            x: randomNumberBetween(-100, 100),
            y: randomNumberBetween(-100, 100),
            scale: randomNumberBetween(1.5, 2.5),
            opacity: 1
        },
        {
            duration: 0.6,
            at: "<"
        }
    ]);

    const flyingEnvelopeFadeOut = flyingLetters.map((_, index) => [
        `.svg-envelope_${index}`,
        {
            opacity: 0,
            scale: 0
        },
        {
            duration: 0.3,
            at: index === 0 ? 0.6 : "<"
        }
    ]);


    const flyingEnvelopeReset = flyingLetters.map((_, index) => [
        `.svg-envelope_${index}`,
        {
            x: 0,
            y: 0
        },
        {
            duration: 0.000001
        }
    ]);

    useEffect(() => {
        if(sending) {
            animateButton([
                ...flyingEnvelopeReset,
                [buttonScope.current, { scale: 0.9 }, { duration: 0.1 }],
                ['.button-message_1', { x: "300%" }, { duration: 0.2, at: "<" }],
                ['.button-message_2', { x: "-50%" }, { duration: 0.2, at: "<" }],
                ['.button-message_3', { x: "-500%" }, { duration: 0.2, at: "<" }]
            ])
        }
        if(sent) {
            animateButton([
                [buttonScope.current, { scale: 1 }, { duration: 0.1 }],
                ['.button-message_2', { x: "300%" }, { duration: 0.2, at: "<" }],
                ['.button-message_3', { x: "-50%" }, { duration: 0.2, at: "<" }],
                ...lettersAnimation,
                ...flyingEnvelopeFadeOut
            ])
        }
        if(!sending && !sent) {
            animateButton([
                ['.button-message_1', { x: "-50%" }, { duration: 0.2, at: "<" }],
                ['.button-message_2', { x: "-300%" }, { duration: 0.2, at: "<" }],
                ['.button-message_3', { x: "-1000%" }, { duration: 0.2, at: "<" }]
            ])
        }
    }, [sending, sent]);

    // const handleButtonClick = () => {

    //     animateButton([
    //         ...flyingEnvelopeReset,
    //         [buttonScope.current, { scale: 0.9}, { duration: 0.1 }],
    //         ['.button-message_1', { x: "300%" }, { duration: 0.2, at: "<" }],
    //         ['.button-message_2', { x: "-50%" }, { duration: 0.2, at: "<" }],
    //         ['.button-message_3', { x: "-300%" }, { duration: 0.2, at: "<" }],
    //         ...lettersAnimation,
    //         [buttonScope.current, { scale: 1 }, { duration: 0.1 }],
    //         ...flyingEnvelopeFadeOut
    //     ])
    // }

    return (
        <div>
            <button id="animated_button" ref={buttonScope}>
                <span className="sr-only">Send message</span>
                <span id="svg_container" aria-hidden>
                    {Array.from({ length: 20 }).map((_, index) => {
                        return <svg key={index}
                            className={`svg-envelope_${index}`}
                            fill="#ffffff"
                            width="15px"
                            height="15px"
                            viewBox="0 0 22 22"
                            xmlns="http://www.w3.org/2000/svg"
                            id="memory-email">
                            <path d="M1 5H2V4H20V5H21V18H20V19H2V18H1V5M3 17H19V9H18V10H16V11H14V12H12V13H10V12H8V11H6V10H4V9H3V17M19 6H3V7H5V8H7V9H9V10H13V9H15V8H17V7H19V6Z" />
                        </svg>
                    })}
                </span>
                <div className="button_text">
                    <motion.p 
                        className="button-message_1"
                        initial={{ x: "-50%", y: "-50%" }}
                        >Send message
                    </motion.p>
                    <motion.p 
                        className="button-message_2"
                        initial={{ x: "-300%" ,y: "-50%" }}
                        >Sending...
                    </motion.p>
                    <motion.p
                        className="button-message_3"
                        initial={{ x: "-1000%", y: "-50%" }}
                    >Sent!
                    </motion.p>
                </div>
            </button>
        </div>
    )
}