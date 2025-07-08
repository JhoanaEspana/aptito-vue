import type { Category } from '@/modules/movementsDetail/interfaces'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoriesAction } from '../actions/get-categories.action'

export const useCategoriesStore = defineStore('categories', () => {
    const categories = ref<Category[]>([])
    const loading = ref(false)
    const error = ref<string | null>(null)

    const getCategories = async () => {
        try {
            loading.value = true
            error.value = null

            const response = await getCategoriesAction()

            if (response.ok) {
                categories.value = response.data
            }
        } catch (error) {
            console.error('Error fetching categories:', error)
        } finally {
            loading.value = false
        }
    }

    return {
        categories,
        loading,
        error,
        getCategories,
    }
})
