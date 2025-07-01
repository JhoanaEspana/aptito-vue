<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import type { Expense } from '@/modules/movementsDetail/interfaces'
import type { Contribution } from '@/modules/userDetail/interfaces/contributions.interface'
import { computed } from 'vue'

Chart.register(ArcElement, Tooltip, Legend)

interface Props {
    expenses: Expense[]
    contributions: Contribution[]
    userName?: string
    userAvatar?: string
}

const props = withDefaults(defineProps<Props>(), {
    expenses: () => [],
    contributions: () => [],
    userName: 'USUARIO',
    userAvatar: 'https://randomuser.me/api/portraits/women/44.jpg',
})

// Calcular el total de gastos
const totalExpenses = computed(() => {
    return props.expenses.reduce((total, expense) => {
        return total + parseFloat(expense.amount)
    }, 0)
})

// Calcular el total de contribuciones
const totalContributions = computed(() => {
    return props.contributions.reduce((total, contribution) => {
        return total + parseFloat(contribution.amount)
    }, 0)
})

// Calcular el saldo (contribuciones - gastos)
const balance = computed(() => {
    return totalContributions.value - totalExpenses.value
})

const chartData = computed(() => ({
    labels: ['Consumo', 'Saldo'],
    datasets: [
        {
            data: [totalExpenses.value, Math.max(balance.value, 0)], // El saldo no puede ser negativo en el gráfico
            backgroundColor: ['#F87171', '#38BDF8'], // Tailwind: red-400, blue-400
            borderWidth: 0,
        },
    ],
}))

const chartOptions = {
    responsive: false,
    plugins: {
        legend: { display: false },
    },
}
</script>

<template>
    <div class="bg-white rounded-xl shadow p-0 w-[500px] mx-auto">
        <div
            class="flex items-center bg-[#D0DAE7] rounded-t-xl border-t-2 border-[#212D4A] border-b-0 p-4"
        >
            <img
                class="w-14 h-14 rounded-full mr-4 object-cover border-2 border-white shadow"
                :src="userAvatar"
                alt="Avatar"
            />
            <span class="heading-h2 uppercase">{{ userName }}</span>
        </div>
        <div class="flex items-center justify-between p-6">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2 text-base">
                    <span class="w-4 h-4 rounded-full bg-red-400 inline-block"></span>
                    <span>Consumo: ${{ totalExpenses.toFixed(2) }}</span>
                </div>
                <div class="flex items-center gap-2 text-base">
                    <span class="w-4 h-4 rounded-full bg-blue-400 inline-block"></span>
                    <span>Saldo: ${{ balance.toFixed(2) }}</span>
                </div>
            </div>
            <Pie :data="chartData" :options="chartOptions" :width="150" :height="150" />
        </div>
    </div>
</template>
