import { expenseApi } from '@/api/expenseApi'
import type { Contribution } from '../interfaces/contributions.interface'

export const getContributionsAction = async () => {
    try {
        const response = await expenseApi.get<{ data: Contribution[] }>('/contributions')
        const contributions = response.data.data || []

        return {
            ok: true,
            data: contributions,
        }
    } catch (error) {
        console.error('Error fetching contributions:', error)
        return {
            ok: false,
            data: [],
        }
    }
}
