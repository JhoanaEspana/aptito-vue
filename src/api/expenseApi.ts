import axios from 'axios'

const expenseApi = axios.create({
    baseURL: import.meta.env.VITE_EXPENSE_API_URL,
})

expenseApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

export { expenseApi }
