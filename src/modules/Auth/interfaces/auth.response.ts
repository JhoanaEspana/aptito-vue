import type { User } from './user.interface'

export interface AuthResponse {
    token: string
    user: User
}
