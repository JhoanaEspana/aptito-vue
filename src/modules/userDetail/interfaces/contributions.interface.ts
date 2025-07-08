import type { User } from '@/modules/Auth/interfaces'

export interface Contribution {
    id: number
    amount: string
    description: string
    user_id: number
    user: User
}

// Opción 1: Usando Pick para seleccionar solo ciertos campos
export type UpdateContribution = Pick<Contribution, 'amount' | 'description'>

/* // Opción 2: Usando Omit para excluir campos que no necesitas
export type CreateContribution = Omit<Contribution, 'id' | 'user_id' | 'user'>

// Opción 3: Usando Partial para hacer todos los campos opcionales
export type PartialContribution = Partial<Contribution>
 */
