import { defineStore } from 'pinia'
import type { Expense } from '../interfaces'
import { ref } from 'vue'
import { getExpensesAction } from '../actions/get-expenses.action'

export const useExpensesStore = defineStore('expenses', () => {
    const expenses = ref<Expense[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const getExpenses = async () => {
        try {
            loading.value = true
            error.value = null

            const response = await getExpensesAction()

            if (response.ok) {
                expenses.value = response.data
            } else {
                error.value = 'Error al cargar los gastos'
            }
        } catch (err) {
            console.error('Error fetching expenses:', err)
            error.value = 'Error de conexión'
        } finally {
            loading.value = false
        }
    }

    return {
        expenses,
        loading,
        error,
        getExpenses,
    }
})
