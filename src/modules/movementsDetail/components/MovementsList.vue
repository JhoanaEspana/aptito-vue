<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import CardItem from '@/components/ui/CardItem.vue'
import { getExpensesAction } from '../actions/get-expenses.action'
import type { Expense } from '../interfaces/expense.interface'
import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import { useExpenseFilters } from '@/composables/useExpenseFilters'

const props = defineProps<{
    nameFilter?: string
    categoryFilter?: string
    dateFilter?: string
    date?: string
}>()

const expenses = ref<Expense[]>([])
const loading = ref(true)
const error = ref(false)

const loadExpenses = async () => {
    try {
        loading.value = true
        const response = await getExpensesAction()
        console.log('response getExpensesAction', response)
        if (response.ok && Array.isArray(response.data)) {
            expenses.value = response.data
        } else {
            expenses.value = []
        }
    } catch (err) {
        console.error('Error al cargar los gastos:', err)
        expenses.value = []
        error.value = true
    } finally {
        loading.value = false
    }
}

const { filteredExpenses } = useExpenseFilters(expenses, {
    nameFilter: computed(() => props.nameFilter),
    categoryFilter: computed(() => props.categoryFilter),
    dateFilter: computed(() => props.dateFilter),
    date: computed(() => props.date),
})

watch(
    [() => props.nameFilter, () => props.categoryFilter, () => props.dateFilter, () => props.date],
    () => {},
    { deep: true },
)

onMounted(() => {
    loadExpenses()
})
</script>

<template>
    <div class="flex flex-wrap gap-4 mt-8">
        <div v-if="loading" class="w-full flex justify-center">
            <SpinnerLoading text="Cargando gastos..." color="#ff6767" />
        </div>

        <div v-else-if="error" class="w-full text-center text-red-500">
            Error al cargar los gastos
        </div>

        <div v-else-if="filteredExpenses.length === 0" class="w-full text-center text-gray-500">
            <div v-if="nameFilter || categoryFilter || dateFilter || date">
                No se encontraron gastos con los filtros aplicados
            </div>
            <div v-else>No hay gastos para mostrar</div>
        </div>

        <template v-else>
            <CardItem v-for="expense in filteredExpenses" :key="expense.id" :expense="expense" />
        </template>
    </div>
</template>
