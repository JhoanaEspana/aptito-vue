import { expenseApi } from '@/api/expenseApi'
import type { Expense } from '../interfaces'

export const getExpensesAction = async () => {
    try {
        const response = await expenseApi.get<{ data: Expense[] }>('/expenses')
        const expenses = response.data.data || []

        if (!Array.isArray(expenses)) {
            return {
                ok: false,
                data: [],
            }
        }

        return {
            ok: true,
            data: expenses,
        }
    } catch (error) {
        console.error('Error fetching expenses:', error)
        return {
            ok: false,
            data: [],
        }
    }
}
