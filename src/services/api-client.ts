import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a6ca9a40fde345bea623a3edbeffcf2d'
    }
})
