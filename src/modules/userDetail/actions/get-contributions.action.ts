import { expenseApi } from '@/api/expenseApi'
import type { Contribution, UpdateContribution } from '../interfaces/contributions.interface'

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

///contributions/{id} put
export const updateContributionByIdAction = async (
    id: number,
    contribution: UpdateContribution,
) => {
    try {
        const response = await expenseApi.put<Contribution>(`/contributions/${id}`, contribution)

        return {
            ok: true,
            data: response.data,
        }
    } catch (error) {
        console.error('Error updating contribution by id:', error)
        return {
            ok: false,
            data: null,
        }
    }
}
