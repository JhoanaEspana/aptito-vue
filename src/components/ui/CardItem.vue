<script setup lang="ts">
import IcoFood from './icons/IcoFood.vue'
import IcoFun from './icons/IcoFun.vue'
import IcoServices from './icons/IcoServices.vue'
import IcoMarket from './icons/IcoMarket.vue'
import IcoNoCategory from './icons/IcoNoCategory.vue'
import { type Expense } from '../../modules/movementsDetail/interfaces/expense.interface'

defineProps<{
    expense: Expense
}>()

const formatDate = (date: string) => {
    if (!date) return 'Fecha no disponible'

    try {
        return new Date(date).toLocaleDateString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        })
    } catch (error) {
        console.error('Error formatting date:', error)
        return 'Fecha inválida'
    }
}

const getIcon = (category: string) => {
    switch (category) {
        case 'Remesa':
            return IcoMarket
        case 'Alimentación':
            return IcoFood
        case 'Entretenimiento':
            return IcoFun
        case 'Servicios':
            return IcoServices
        default:
            return IcoNoCategory
    }
}
</script>

<template>
    <div
        class="bg-white rounded-xl shadow p-0 w-[400px] mx-auto flex items-center justify-between px-6 py-4 gap-4"
    >
        <div class="flex items-center gap-4">
            <div class="flex items-center justify-center">
                <component :is="getIcon(expense?.category?.name)" :key="expense?.category?.name" />
            </div>
            <div>
                <p class="subtitle text-[#232B3A]">
                    {{ expense?.description?.toUpperCase() || 'Sin descripción' }}
                </p>
                <p class="caption text-[#7AC7B5] mt-1">
                    {{ expense?.category?.name || 'Sin categoría' }}
                </p>
            </div>
        </div>

        <div class="flex flex-col items-end gap-1">
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="avatar"
                class="w-10 h-10 rounded-full object-cover mb-1"
            />
            <span class="text-[#B0B7C3] caption">{{
                expense?.user?.name || 'Usuario no disponible'
            }}</span>
            <span class="text-[#232B3A] caption">{{ formatDate(expense?.expense_date) }}</span>
        </div>
    </div>
</template>
