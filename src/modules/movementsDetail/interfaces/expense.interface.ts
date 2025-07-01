import type { User } from '@/modules/Auth/interfaces'
import type { Category } from './category.interface'

export interface Expense {
    id: number
    user_id: number
    category_id: number
    amount: string
    description: string
    expense_date: string
    category: Category
    user: User
}
