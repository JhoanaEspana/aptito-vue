import { expenseApi } from '@/api/expenseApi'
import type { ExpenseCreate } from '../interfaces/expensecreate.interface'

export const createExpenseAction = async (expense: ExpenseCreate) => {
    try {
        const response = await expenseApi.post('/expenses', expense)
        return {
            ok: true,
            data: response.data,
        }
    } catch (error) {
        console.error('Error al crear el gasto:', error)
        return {
            ok: false,
            data: null,
        }
    }
}
