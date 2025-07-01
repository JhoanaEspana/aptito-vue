<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed } from 'vue'

import IcoCalendar from '@/components/ui/icons/IcoCalendar.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'

import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import CustomButton from '@/components/ui/CustomButton.vue'

import HeaderInfo from '../components/HeaderInfo.vue'
import ChartData from '../components/ChartData.vue'
import CustomTitle from '@/components/ui/CustomTitle.vue'
import MovementsList from '@/modules/movementsDetail/components/MovementsList.vue'

const router = useRouter()

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
            <ChartData />
            <ChartData />
            <ChartData />
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
