<script setup lang="ts">
import CustomTitle from '@/components/ui/CustomTitle.vue'
import IcoAddItem from '@/components/ui/icons/IcoAddItem.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import IcoEdit from '@/components/ui/icons/IcoEdit.vue'
import CustomCard from '@/components/CustomCard.vue'
import MovementsList from '../components/MovementsList.vue'
import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import { ref, onMounted } from 'vue'
import { useCategoriesStore } from '@/modules/categories/store/categories.store'

const categoriesStore = useCategoriesStore()

// Variables reactivas para los filtros
const nameFilter = ref('')
const categoryFilter = ref('')
const dateFilter = ref('')

const loadCategories = async () => {
    try {
        await categoriesStore.getCategories()
    } catch (error) {
        console.error('Error al cargar las categorías:', error)
    }
}

const clearFilters = () => {
    nameFilter.value = ''
    categoryFilter.value = ''
    dateFilter.value = ''
}

onMounted(async () => {
    await loadCategories()
})
</script>

<template>
    <div class="flex justify-between items-center">
        <CustomTitle title="Movimientos">
            <template #icon>
                <IcoAddItem />
            </template>
        </CustomTitle>
    </div>

    <CustomCard class="mt-8 flex flex-col gap-4">
        <form class="space-y-4 sm:space-y-6 w-full mt-4">
            <div>
                <label for="nombre" class="block text-sm/6 font-semibold text-gray-900"
                    >Buscar por nombre</label
                >
                <div class="mt-2.5">
                    <input
                        v-model="nameFilter"
                        type="text"
                        name="nombre"
                        id="nombre"
                        placeholder="Ingresa el nombre del item"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="categoria" class="block text-sm/6 font-semibold text-gray-900"
                    >Categoría</label
                >
                <div class="relative mt-2.5">
                    <select
                        v-model="categoryFilter"
                        name="categoria"
                        id="categoria"
                        class="block w-full appearance-none rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    >
                        <option value="" class="placeholder:text-gray-400 text-gray-400">
                            Selecciona la categoría
                        </option>
                        <option
                            v-for="category in categoriesStore.categories"
                            :key="category.id"
                            :value="category.id.toString()"
                        >
                            {{ category.name }}
                        </option>
                    </select>
                    <div
                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                    >
                        <svg
                            class="h-5 w-5 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div>
                <label for="fecha" class="block text-sm/6 font-semibold text-gray-900">Fecha</label>
                <div class="mt-2.5">
                    <input
                        v-model="dateFilter"
                        type="date"
                        name="fecha"
                        id="fecha"
                        placeholder="Selecciona la fecha"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>
        </form>
        <CustomButton outlined @click="clearFilters">
            <template #icon>
                <IcoEdit />
            </template>
            Limpiar Filtros
        </CustomButton>
    </CustomCard>

    <Suspense>
        <template #default>
            <MovementsList
                :name-filter="nameFilter"
                :category-filter="categoryFilter"
                :date-filter="dateFilter"
            />
        </template>
        <template #fallback>
            <SpinnerLoading text="Cargando movimientos..." color="#ff6767" />
        </template>
    </Suspense>
</template>
