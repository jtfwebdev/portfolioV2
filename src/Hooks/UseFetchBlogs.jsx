import axios from 'axios';

const UseFetchBlogs = (setBlogs) => {

    axios.get(import.meta.env.VITE_WP_POSTS_URL)
    .then((res) => {
        setBlogs(res.data)
    })
    .catch((err) => console.log(err))
}

export default UseFetchBlogs;