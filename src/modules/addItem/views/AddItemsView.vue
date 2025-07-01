<script setup lang="ts">
import { ref } from 'vue'
import CustomTitle from '@/components/ui/CustomTitle.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import IcoAddItem from '@/components/ui/icons/IcoAddItem.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'
import CustomCard from '@/components/CustomCard.vue'

// Datos del formulario
const formData = ref({
    nombre: '',
    descripcion: '',
    categoria: '',
    prioridad: '',
})

// Función para manejar el envío del formulario
const agregarItem = () => {
    console.log('Datos del formulario:', formData.value)

    formData.value = {
        nombre: '',
        descripcion: '',
        categoria: '',
        prioridad: '',
    }
}
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
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Nombre de usuario</label
                >
                <div class="mt-2.5">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Ingresa el nombre de usuario"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Nombre item</label
                >
                <div class="mt-2.5">
                    <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="Ingresa el nombre del item"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Valor del item</label
                >
                <div class="mt-2.5">
                    <input
                        type="number"
                        name="first-name"
                        id="first-name"
                        placeholder="Ingresa el valor del item"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>

            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Tipo de item</label
                >
                <div class="relative mt-2.5">
                    <select
                        type="select"
                        name="tipo-item"
                        id="tipo-item"
                        placeholder="Selecciona el tipo de item"
                        autocomplete="given-name"
                        class="block w-full appearance-none rounded-md bg-white px-4 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    >
                        <option value="" class="placeholder:text-gray-400 text-gray-400">
                            Selecciona el tipo de item
                        </option>
                        <option value="1">Gasto</option>
                        <option value="2">Ingreso</option>
                        <option value="3">Transferencia</option>
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
