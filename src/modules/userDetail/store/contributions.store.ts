import { defineStore } from 'pinia'
import type { Contribution, UpdateContribution } from '../interfaces/contributions.interface'
import { ref } from 'vue'
import {
    getContributionsAction,
    updateContributionByIdAction,
} from '../actions/get-contributions.action'

export const useContrubutionsStore = defineStore('contributions', () => {
    const contributions = ref<Contribution[]>([])
    const contribution = ref<UpdateContribution | null>(null)
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

    ///contributions/{id}

    const updateContributionById = async (id: number, contribution: UpdateContribution) => {
        try {
            loading.value = true
            error.value = null

            const response = await updateContributionByIdAction(id, contribution)

            if (response.ok) {
                console.log('Contribución actualizada:', response.data)
            } else {
                error.value = 'Error al cargar la contribución'
            }
        } catch (err) {
            console.error('Error fetching contribution by id:', err)
            error.value = 'Error de conexión'
        } finally {
            loading.value = false
        }
    }

    return {
        contributions,
        contribution,
        loading,
        error,
        getContribution,
        updateContributionById,
    }
})
