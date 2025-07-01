export const AuthStatus = {
    Authenticated: 'Authenticated',
    Unauthenticated: 'Unauthenticated',
    Checking: 'Checking',
} as const

export type AuthStatus = (typeof AuthStatus)[keyof typeof AuthStatus]
