import type { User } from '@/modules/Auth/interfaces'

export interface Contribution {
    id: number
    amount: string
    description: string
    user_id: number
    user: User
}
