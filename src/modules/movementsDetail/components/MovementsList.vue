<script setup lang="ts">
import { onMounted, watch, computed } from 'vue'
import CardItem from '@/components/ui/CardItem.vue'
import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import { useExpenseFilters } from '@/composables/useExpenseFilters'
import { useExpensesStore } from '../store/expenses.store'

const expensesStore = useExpensesStore()

const props = defineProps<{
    nameFilter?: string
    categoryFilter?: string
    dateFilter?: string
    date?: string
}>()

// Usar directamente el store
const expenses = computed(() => expensesStore.expenses)
const loading = computed(() => expensesStore.loading)
const error = computed(() => expensesStore.error)

const loadExpenses = async () => {
    await expensesStore.getExpenses()
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

onMounted(async () => {
    await loadExpenses()
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
