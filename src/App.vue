<script setup lang="ts">
import { useAuthStore } from './modules/Auth/stores/auth.store'
import { AuthStatus } from './modules/Auth/interfaces'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import FullScreenTemplate from './layouts/components/FullScreenTemplate.vue'

const authStore = useAuthStore()
const router = useRouter()
const route = useRoute()

// Verificar autenticación al inicializar la aplicación
onMounted(async () => {
    await authStore.checkAuth()
})

authStore.$subscribe(
    (_, state) => {
        if (state.authStatus === AuthStatus.Checking) return

        if (route.path.includes('/auth') && state.authStatus === AuthStatus.Authenticated) {
            router.replace({ name: 'dashboard' })
        }
    },
    {
        immediate: true,
    },
)
</script>

<template>
    <FullScreenTemplate v-if="authStore.isChecking" />
    <RouterView v-else />
</template>
