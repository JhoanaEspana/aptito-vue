<template>
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex justify-center">
                <div class="w-32 h-32 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                        class="w-16 h-16 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                        ></path>
                    </svg>
                </div>
            </div>
            <h1 class="mt-6 text-center text-9xl font-extrabold text-red-600">404</h1>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Página no encontrada
            </h2>
            <p class="mt-2 text-center text-sm text-gray-600">
                Lo sentimos, la página que buscas no existe o ha sido movida.
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <div class="space-y-6">
                    <!-- Información adicional -->
                    <div class="text-center">
                        <p class="text-sm text-gray-500 mb-4">Puedes intentar:</p>
                        <ul class="text-sm text-gray-600 space-y-2">
                            <li class="flex items-center justify-center">
                                <svg
                                    class="w-4 h-4 text-gray-400 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                                Verificar que la URL esté escrita correctamente
                            </li>
                            <li class="flex items-center justify-center">
                                <svg
                                    class="w-4 h-4 text-gray-400 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                                Usar el menú de navegación
                            </li>
                            <li class="flex items-center justify-center">
                                <svg
                                    class="w-4 h-4 text-gray-400 mr-2"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M5 13l4 4L19 7"
                                    ></path>
                                </svg>
                                Volver a la página anterior
                            </li>
                        </ul>
                    </div>

                    <!-- Botones de acción -->
                    <div class="space-y-4">
                        <button
                            @click="goBack"
                            class="w-full flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                ></path>
                            </svg>
                            Volver atrás
                        </button>

                        <button
                            @click="goHome"
                            class="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <svg
                                class="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                            Ir al inicio
                        </button>
                    </div>

                    <!-- Búsqueda -->
                    <div class="relative">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-300" />
                        </div>
                        <div class="relative flex justify-center text-sm">
                            <span class="px-2 bg-white text-gray-500">O busca algo específico</span>
                        </div>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
                        >
                            <svg
                                class="h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                            </svg>
                        </div>
                        <input
                            v-model="searchQuery"
                            @keyup.enter="handleSearch"
                            type="text"
                            class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            placeholder="Buscar en el sitio..."
                        />
                    </div>
                </div>

                <!-- Información de contacto -->
                <div class="mt-6 text-center">
                    <p class="text-xs text-gray-500">
                        ¿Necesitas ayuda?
                        <a href="#" class="font-medium text-red-600 hover:text-red-500">
                            Contacta con soporte
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')

const goBack = () => {
    if (window.history.length > 1) {
        router.go(-1)
    } else {
        goHome()
    }
}

const goHome = () => {
    router.push({ name: 'home' })
}

const handleSearch = () => {
    if (searchQuery.value.trim()) {
        // Aquí puedes implementar la lógica de búsqueda
        console.log('Buscando:', searchQuery.value)
        // Ejemplo: router.push({ name: 'search', query: { q: searchQuery.value } })
    }
}
</script>

