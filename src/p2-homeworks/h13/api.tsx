import axios from 'axios'

export const Api = {
    createInfo(status: boolean) {
        axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: status})
    }
}
