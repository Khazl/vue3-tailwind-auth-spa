import axios from 'axios';
import Cookies from 'js-cookie'

const baseDomain = process.env.NODE_ENV === 'development' ? 'http://sd.local' : 'change.me';
const baseURL = `${baseDomain}`;

const httpClient = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    setCsrf(forced = false) {
        if (Cookies.get('XSRF-TOKEN') && forced === false) {
            return true
        }
        return httpClient.get('/sanctum/csrf-cookie')
    },
    register(name, email, password, password_confirmation) {
        return httpClient.post('/register', {
            name,
            email,
            password,
            password_confirmation
        })
    },
    login(email, password, remember) {
        return httpClient.post('/login', {
            email,
            password,
            remember
        })
    },
    checkAuth() {
        return httpClient.get('/api/user')
    },
    logout() {
        return httpClient.post('/logout')
    },
    forgotPassword(email) {
        return httpClient.post('/forgot-password', {
            email
        })
    },
}