import { defineStore } from 'pinia'
import type { Contribution } from '../interfaces/contributions.interface'
import { ref } from 'vue'
import { getContributionsAction } from '../actions/get-contributions.action'

export const useContrubutionsStore = defineStore('contributions', () => {
    const contributions = ref<Contribution[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const getContribution = async () => {
        try {
            loading.value = true
            error.value = null

            const response = await getContributionsAction()

            if (response.ok) {
                contributions.value = response.data
            } else {
                error.value = 'Error al cargar las contribuciones'
            }
        } catch (err) {
            console.error('Error fetching contributions:', err)
            error.value = 'Error de conexión'
        } finally {
            loading.value = false
        }
    }

    return {
        contributions,
        loading,
        error,
        getContribution,
    }
})
