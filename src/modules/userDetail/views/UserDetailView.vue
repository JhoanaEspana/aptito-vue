<script setup lang="ts">
import CustomTitle from '@/components/ui/CustomTitle.vue'
import IcoAddItem from '@/components/ui/icons/IcoAddItem.vue'
import UserDetailCard from '../components/userDetailCard.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import IcoEdit from '@/components/ui/icons/IcoEdit.vue'
import CustomCard from '@/components/CustomCard.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'
</script>

<template>
    <CustomTitle title="Detalle de usuario">
        <template #icon>
            <IcoAddItem />
        </template>
    </CustomTitle>
    <UserDetailCard />
    <CustomCard class="flex flex-col mt-8">
        <div>
            <CustomButton outlined>
                <template #icon>
                    <IcoEdit />
                </template>
                Editar aporte
            </CustomButton>
        </div>

        <form class="space-y-4 sm:space-y-6 w-full mt-4">
            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Aporte</label
                >
                <div class="mt-2.5">
                    <input
                        type="text"
                        name="aporte"
                        id="aporte"
                        placeholder="Ingresa el valor del aporte"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>
            <CustomButton>
                <template #icon>
                    <IcoArrowCircle />
                </template>
                Actualizar aporte
            </CustomButton>
        </form>
    </CustomCard>
</template>
