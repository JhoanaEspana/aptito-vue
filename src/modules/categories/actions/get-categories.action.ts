import type { Category } from '@/modules/movementsDetail/interfaces'
import { expenseApi } from '@/api/expenseApi'

export const getCategoriesAction = async () => {
    try {
        const response = await expenseApi.get<{ data: Category[] }>('/categories')
        const categories = response.data.data || []

        return {
            ok: true,
            data: categories,
        }
    } catch (error) {
        console.error('Error fetching categories:', error)
        return {
            ok: false,
            data: [],
        }
    }
}
