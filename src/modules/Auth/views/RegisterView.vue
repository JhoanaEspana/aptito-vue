<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const formData = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
})

const showPassword = ref(false)
const acceptTerms = ref(false)
const isLoading = ref(false)

const passwordError = computed(() => {
    if (formData.password && formData.password_confirmation) {
        if (formData.password !== formData.password_confirmation) {
            return 'Las contraseñas no coinciden'
        }
        if (formData.password.length < 8) {
            return 'La contraseña debe tener al menos 8 caracteres'
        }
    }
    return ''
})

const handleRegister = async () => {
    if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.password_confirmation
    ) {
        alert('Por favor completa todos los campos')
        return
    }

    if (!acceptTerms.value) {
        alert('Debes aceptar los términos y condiciones')
        return
    }

    if (passwordError.value) {
        alert(passwordError.value)
        return
    }

    isLoading.value = true

    try {
        console.log('Datos del formulario:', {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            password_confirmation: formData.password_confirmation,
            acceptTerms: acceptTerms.value,
        })

        await new Promise((resolve) => setTimeout(resolve, 2000))

        console.log('Registro exitoso')
    } catch (error) {
        console.error('Error en el registro:', error)
        alert('Error al crear la cuenta. Por favor intenta de nuevo.')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex justify-center">
                <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                        class="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                        ></path>
                    </svg>
                </div>
            </div>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Crear cuenta</h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Completa tus datos para registrarte
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="handleRegister">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">
                            Nombre completo
                        </label>
                        <div class="mt-1">
                            <input
                                id="name"
                                v-model="formData.name"
                                name="name"
                                type="text"
                                autocomplete="name"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="Tu nombre completo"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700">
                            Correo electrónico
                        </label>
                        <div class="mt-1">
                            <input
                                id="email"
                                v-model="formData.email"
                                name="email"
                                type="email"
                                autocomplete="email"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="tu@email.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">
                            Contraseña
                        </label>
                        <div class="mt-1">
                            <input
                                id="password"
                                v-model="formData.password"
                                name="password"
                                :type="showPassword ? 'text' : 'password'"
                                autocomplete="new-password"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <div class="mt-2 flex items-center">
                            <input
                                id="show-password"
                                v-model="showPassword"
                                type="checkbox"
                                class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label for="show-password" class="ml-2 block text-sm text-gray-900">
                                Mostrar contraseña
                            </label>
                        </div>
                    </div>

                    <div>
                        <label
                            for="password_confirmation"
                            class="block text-sm font-medium text-gray-700"
                        >
                            Confirmar contraseña
                        </label>
                        <div class="mt-1">
                            <input
                                id="password_confirmation"
                                v-model="formData.password_confirmation"
                                name="password_confirmation"
                                :type="showPassword ? 'text' : 'password'"
                                autocomplete="new-password"
                                required
                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                placeholder="••••••••"
                            />
                        </div>
                        <div v-if="passwordError" class="mt-1 text-sm text-red-600">
                            {{ passwordError }}
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input
                            id="terms"
                            v-model="acceptTerms"
                            name="terms"
                            type="checkbox"
                            required
                            class="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                        <label for="terms" class="ml-2 block text-sm text-gray-900">
                            Acepto los
                            <a href="#" class="font-medium text-green-600 hover:text-green-500"
                                >términos y condiciones</a
                            >
                            y la
                            <a href="#" class="font-medium text-green-600 hover:text-green-500"
                                >política de privacidad</a
                            >
                        </label>
                    </div>

                    <div>
                        <button
                            type="submit"
                            :disabled="isLoading || !acceptTerms || !!passwordError"
                            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span
                                v-if="isLoading"
                                class="absolute left-0 inset-y-0 flex items-center pl-3"
                            >
                                <svg
                                    class="animate-spin h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        class="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        stroke-width="4"
                                    ></circle>
                                    <path
                                        class="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                </svg>
                            </span>
                            {{ isLoading ? 'Creando cuenta...' : 'Crear cuenta' }}
                        </button>
                    </div>
                </form>

                <div class="mt-6">
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">¿Ya tienes cuenta?</span>
                        </div>
                    </div>

                    <div class="mt-6">
                        <button
                            @click="router.push({ name: 'login' })"
                            type="button"
                            class="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Iniciar sesión
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
