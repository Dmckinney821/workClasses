import axios from 'axios';



const instance = axios.create({
    baseURL: 'https://react-my-burger-4933f.firebaseio.com/'
})


export default instance;