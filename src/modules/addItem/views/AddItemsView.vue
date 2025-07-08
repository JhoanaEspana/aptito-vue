<script setup lang="ts">
import { onMounted, ref } from 'vue'
import CustomTitle from '@/components/ui/CustomTitle.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import IcoAddItem from '@/components/ui/icons/IcoAddItem.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'
import CustomCard from '@/components/CustomCard.vue'
import { useCategoriesStore } from '@/modules/categories/store/categories.store'
import { createExpenseAction } from '../actions/create-expense.action'
import { useToast } from 'vue-toastification'

const toast = useToast()

const categoriesStore = useCategoriesStore()

const formData = ref({
    nombre: '',
    valor: 0,
    categoria: '',
    fecha: '',
})

const agregarItem = async () => {
    const response = await createExpenseAction({
        amount: formData.value.valor,
        description: formData.value.nombre,
        category_id: parseInt(formData.value.categoria),
        expense_date: formData.value.fecha,
    })
    if (response.ok) {
        toast.success(
            'Gasto creado correctamente, ingresa otro gasto o vuelve a la vista de movimientos',
        )
        formData.value = {
            nombre: '',
            valor: 0,
            categoria: '',
            fecha: '',
        }
    } else {
        toast.error('Error al crear el gasto')
    }
}

const loadCategories = async () => {
    try {
        await categoriesStore.getCategories()
    } catch (error) {
        console.error('Error al cargar las categorías:', error)
    }
}

onMounted(async () => {
    await loadCategories()
})
</script>

<template>
    <CustomTitle title="Agregar item">
        <template #icon>
            <IcoAddItem />
        </template>
    </CustomTitle>

    <CustomCard>
        <form @submit.prevent="agregarItem" class="space-y-4 sm:space-y-6 w-full">
            <div>
                <label for="nombre-item" class="block text-sm/6 font-semibold text-gray-900"
                    >Nombre item</label
                >
                <div class="mt-2.5">
                    <input
                        v-model="formData.nombre"
                        type="text"
                        name="nombre"
                        id="nombre-item"
                        placeholder="Ingresa el nombre del item"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="valor-item" class="block text-sm/6 font-semibold text-gray-900"
                    >Valor del item</label
                >
                <div class="mt-2.5">
                    <input
                        v-model="formData.valor"
                        type="number"
                        name="valor"
                        id="valor-item"
                        placeholder="Ingresa el valor del item"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="categoria" class="block text-sm/6 font-semibold text-gray-900"
                    >Categoria</label
                >
                <div class="relative mt-2.5">
                    <select
                        v-model="formData.categoria"
                        name="categoria"
                        id="categoria"
                        class="block w-full appearance-none rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    >
                        <option value="" class="placeholder:text-gray-400 text-gray-400">
                            Selecciona la categoria
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
                        v-model="formData.fecha"
                        type="date"
                        name="fecha"
                        id="fecha"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div class="flex justify-center mt-6 sm:mt-10">
                <CustomButton type="submit">
                    <template #icon>
                        <IcoArrowCircle />
                    </template>
                    Agregar Item
                </CustomButton>
            </div>
        </form>
    </CustomCard>
</template>
