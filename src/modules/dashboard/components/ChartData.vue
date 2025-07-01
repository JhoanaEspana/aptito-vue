<script setup lang="ts">
import { Pie } from 'vue-chartjs'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'

Chart.register(ArcElement, Tooltip, Legend)

const chartData = {
    labels: ['Consumo', 'Saldo'],
    datasets: [
        {
            data: [30, 70], // Cambia estos valores según tus datos
            backgroundColor: ['#F87171', '#38BDF8'], // Tailwind: red-400, blue-400
            borderWidth: 0,
        },
    ],
}

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
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Avatar"
            />
            <span class="heading-h2">JHOANA ESPAÑA</span>
        </div>
        <div class="flex items-center justify-between p-6">
            <div class="flex flex-col gap-4">
                <div class="flex items-center gap-2 text-base">
                    <span class="w-4 h-4 rounded-full bg-red-400 inline-block"></span>
                    <span>Consumo: {{ chartData.datasets[0].data[0] }}</span>
                </div>
                <div class="flex items-center gap-2 text-base">
                    <span class="w-4 h-4 rounded-full bg-blue-400 inline-block"></span>
                    <span>Saldo: {{ chartData.datasets[0].data[1] }}</span>
                </div>
            </div>
            <Pie :data="chartData" :options="chartOptions" :width="150" :height="150" />
        </div>
    </div>
</template>
