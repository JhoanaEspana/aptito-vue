import type { User } from '../interfaces'

interface CheckAuthResponse {
    ok: boolean
    user?: User
    message?: string
}

export const checkAuthAction = async (): Promise<CheckAuthResponse> => {
    try {
        const token = localStorage.getItem('token')
        const userId = localStorage.getItem('userId')

        if (!token || !userId) {
            return {
                ok: false,
                message: 'No hay token o userId',
            }
        }

        // Por ahora solo verificamos que existan token y userId
        // En el futuro se puede agregar una llamada al backend para validar el token
        return {
            ok: true,
            user: {
                id: userId,
                name: localStorage.getItem('userName') || 'Usuario',
                email: localStorage.getItem('userEmail') || '',
            },
        }
    } catch (error) {
        console.log('Error verificando autenticación:', error)
        return {
            ok: false,
            message: 'Error al verificar autenticación',
        }
    }
}
