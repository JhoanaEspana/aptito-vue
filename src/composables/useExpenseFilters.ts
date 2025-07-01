import { computed, type Ref } from 'vue'
import type { Expense } from '@/modules/movementsDetail/interfaces/expense.interface'

interface ExpenseFilters {
    nameFilter?: Ref<string | undefined>
    categoryFilter?: Ref<string | undefined>
    dateFilter?: Ref<string | undefined>
    date?: Ref<string | undefined>
}

export function useExpenseFilters(expenses: Ref<Expense[]>, filters: ExpenseFilters) {
    const filteredExpenses = computed(() => {
        let filtered = expenses.value

        // Filtro por nombre/descripción
        if (filters.nameFilter?.value && filters.nameFilter.value.trim() !== '') {
            const searchTerm = filters.nameFilter.value.toLowerCase().trim()
            filtered = filtered.filter((expense) =>
                expense.description.toLowerCase().includes(searchTerm),
            )
        }

        // Filtro por categoría
        if (filters.categoryFilter?.value && filters.categoryFilter.value !== '') {
            filtered = filtered.filter(
                (expense) => expense.category_id === parseInt(filters.categoryFilter!.value!),
            )
        }

        // Filtro por año y mes
        if (filters.date?.value && filters.date.value !== '') {
            const [year, month] = filters.date.value.split('-')
            if (year && month) {
                filtered = filtered.filter((expense) => {
                    const expenseDate = new Date(expense.expense_date)
                    return (
                        expenseDate.getFullYear() === parseInt(year) &&
                        expenseDate.getMonth() === parseInt(month) - 1
                    )
                })
            }
        }

        // Filtro por fecha específica
        if (filters.dateFilter?.value && filters.dateFilter.value !== '') {
            let filterDateObj: Date | null = null
            if (/^\d{4}-\d{2}-\d{2}$/.test(filters.dateFilter.value)) {
                // Formato YYYY-MM-DD
                filterDateObj = new Date(filters.dateFilter.value + 'T00:00:00')
            } else if (/^\d{2}\/\d{2}\/\d{4}$/.test(filters.dateFilter.value)) {
                // Formato DD/MM/YYYY
                const [day, month, year] = filters.dateFilter.value.split('/')
                filterDateObj = new Date(Number(year), Number(month) - 1, Number(day))
            }
            if (filterDateObj && !isNaN(filterDateObj.getTime())) {
                filtered = filtered.filter((expense) => {
                    const expenseDate = new Date(expense.expense_date)
                    return (
                        expenseDate.getFullYear() === filterDateObj!.getFullYear() &&
                        expenseDate.getMonth() === filterDateObj!.getMonth() &&
                        expenseDate.getDate() === filterDateObj!.getDate()
                    )
                })
            }
        }

        return filtered
    })

    return {
        filteredExpenses,
    }
}
