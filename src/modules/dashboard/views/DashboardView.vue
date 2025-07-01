<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted } from 'vue'

import IcoCalendar from '@/components/ui/icons/IcoCalendar.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'

import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import CustomButton from '@/components/ui/CustomButton.vue'

import HeaderInfo from '../components/HeaderInfo.vue'
import ChartData from '../components/ChartData.vue'
import CustomTitle from '@/components/ui/CustomTitle.vue'
import MovementsList from '@/modules/movementsDetail/components/MovementsList.vue'
import { useExpensesStore } from '../../movementsDetail/store/expenses.store'
import { useContrubutionsStore } from '../../userDetail/store/contributions.store'
import { useAuthStore } from '../../Auth/stores/auth.store'

const router = useRouter()

const expensesStore = useExpensesStore()
const contributionsStore = useContrubutionsStore()
const authStore = useAuthStore()

const expenses = computed(() => expensesStore.expenses)
const contributions = computed(() => contributionsStore.contributions)
const users = computed(() => authStore.users)

const date = computed(() => {
    const currentDate = new Date()
    const year = currentDate.getFullYear()
    const month = String(currentDate.getMonth() + 1).padStart(2, '0')
    return `${year}-${month}`
})

const dateLabel = computed(() => {
    const meses = [
        'ENERO',
        'FEBRERO',
        'MARZO',
        'ABRIL',
        'MAYO',
        'JUNIO',
        'JULIO',
        'AGOSTO',
        'SEPTIEMBRE',
        'OCTUBRE',
        'NOVIEMBRE',
        'DICIEMBRE',
    ]
    const [year, month] = date.value.split('-')
    return `${meses[parseInt(month, 10) - 1]} / ${year}`
})

const loadExpenses = async () => {
    try {
        await expensesStore.getExpenses()
    } catch (error) {
        console.error('Error al cargar los gastos:', error)
    }
}

const loadContributions = async () => {
    try {
        await contributionsStore.getContribution()
    } catch (error) {
        console.error('Error al cargar las contribuciones:', error)
    }
}

const loadUsers = async () => {
    try {
        await authStore.getUsers()
    } catch (error) {
        console.error('Error al cargar los usuarios:', error)
    }
}

onMounted(async () => {
    await loadExpenses()
    await loadContributions()
    await loadUsers()
})

// Función para obtener gastos de un usuario específico
const getExpensesByUser = (userId: number) => {
    return expenses.value.filter((expense) => expense.user_id === userId)
}

// Función para obtener contribuciones de un usuario específico
const getContributionsByUser = (userId: number) => {
    return contributions.value.filter((contribution) => contribution.user_id === userId)
}

// Función para generar avatar aleatorio basado en el ID del usuario
const getUserAvatar = (userId: number) => {
    const avatars = [
        'https://randomuser.me/api/portraits/women/44.jpg',
        'https://randomuser.me/api/portraits/men/32.jpg',
        'https://randomuser.me/api/portraits/women/68.jpg',
        'https://randomuser.me/api/portraits/men/75.jpg',
        'https://randomuser.me/api/portraits/women/23.jpg',
        'https://randomuser.me/api/portraits/men/45.jpg',
    ]
    return avatars[userId % avatars.length]
}

console.log('expensesssss', expenses.value)
console.log('contributions', contributions.value)
console.log('users', users.value)
</script>

<template>
    <div class="w-full mb-10">
        <div
            class="h-[200px] bg-[#212D4A] rounded-lg shadow-md flex justify-center items-center p-4"
        >
            <HeaderInfo />
        </div>
        <div class="flex justify-center mt-[-25px]">
            <CustomButton @click="router.push('/add-item')">
                <template #icon>
                    <IcoArrowCircle />
                </template>
                Agregar item
            </CustomButton>
        </div>
    </div>
    <div>
        <div class="flex flex-wrap justify-center gap-4">
            <ChartData
                v-for="user in users"
                :key="user.id"
                :expenses="getExpensesByUser(user.id)"
                :contributions="getContributionsByUser(user.id)"
                :userName="user.name"
                :userAvatar="getUserAvatar(user.id)"
            />
        </div>
        <div>
            <CustomTitle :title="dateLabel">
                <template #icon>
                    <IcoCalendar />
                </template>
            </CustomTitle>
        </div>
        <Suspense>
            <template #default>
                <MovementsList :date="date" />
            </template>
            <template #fallback>
                <SpinnerLoading text="Cargando movimientos..." color="#ff6767" />
            </template>
        </Suspense>
    </div>
</template>
