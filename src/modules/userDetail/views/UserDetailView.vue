<script setup lang="ts">
import CustomTitle from '@/components/ui/CustomTitle.vue'
import IcoAddItem from '@/components/ui/icons/IcoAddItem.vue'
import UserDetailCard from '../components/userDetailCard.vue'
import CustomButton from '@/components/ui/CustomButton.vue'
import IcoEdit from '@/components/ui/icons/IcoEdit.vue'
import CustomCard from '@/components/CustomCard.vue'
import IcoArrowCircle from '@/components/ui/icons/IcoArrowCircle.vue'
import SpinnerLoading from '@/components/ui/SpinnerLoading.vue'
import { useAuthStore } from '@/modules/Auth/stores/auth.store'
import { computed, onMounted } from 'vue'
import { useContrubutionsStore } from '../store/contributions.store'
import type { UpdateContribution } from '../interfaces/contributions.interface'
import { ref } from 'vue'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const contributionsStore = useContrubutionsStore()
const toast = useToast()

const contributions = computed(() => contributionsStore.contributions)

const formData = ref<UpdateContribution & { id?: number }>({
    id: undefined,
    amount: '',
    description: '',
})

const loadUser = async () => {
    try {
        await authStore.getUser()
    } catch (error) {
        console.error('Error al cargar el usuario:', error)
    }
}

const loadContributions = async () => {
    try {
        await contributionsStore.getContribution()
        console.log('Contribuciones cargadas:', contributions.value)
    } catch (error) {
        console.error('Error al cargar las contribuciones:', error)
    }
}

const updateContribution = async () => {
    if (formData.value.amount === '' || formData.value.description === '' || !formData.value.id) {
        toast.error('Error: El aporte, la descripción y la contribución a editar son requeridos')
        return
    }

    try {
        await contributionsStore.updateContributionById(formData.value.id, {
            amount: formData.value.amount,
            description: formData.value.description,
        })
        toast.success('Contribución actualizada con éxito')
        await loadContributions()
    } catch (error) {
        console.error('Error al actualizar la contribución:', error)
    }
}

const getContributionsByUser = (userId: number) => {
    return contributions.value.filter((contribution) => contribution.user.id === userId)
}

const selectContribution = (contribution: { id: number; amount: string; description: string }) => {
    formData.value = {
        id: contribution.id,
        amount: contribution.amount,
        description: contribution.description,
    }
}

onMounted(async () => {
    await loadUser()
    await loadContributions()
})
</script>

<template>
    <CustomTitle title="Detalle de usuario">
        <template #icon>
            <IcoAddItem />
        </template>
    </CustomTitle>

    <div v-if="authStore.loadingUser" class="flex justify-center mt-8">
        <SpinnerLoading text="Cargando usuario..." color="#ff6767" />
    </div>

    <UserDetailCard
        v-else
        :user="authStore.userLogged"
        :contributions="getContributionsByUser(authStore.userLogged?.id || 0)"
    />

    <CustomCard class="flex flex-col mt-8">
        <div v-if="getContributionsByUser(authStore.userLogged?.id || 0).length">
            <div
                v-for="contribution in getContributionsByUser(authStore.userLogged?.id || 0)"
                :key="contribution.id"
                class="mb-2 flex items-center gap-2"
            >
                <CustomButton outlined small @click="selectContribution(contribution)">
                    <template #icon>
                        <IcoEdit />
                    </template>
                    Editar
                </CustomButton>
            </div>
        </div>
        <form @submit.prevent="updateContribution" class="space-y-4 sm:space-y-6 w-full mt-4">
            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Aporte</label
                >
                <div class="mt-2.5">
                    <input
                        v-model="formData.amount"
                        type="number"
                        name="amount"
                        id="amount"
                        placeholder="Ingresa el valor del aporte"
                        autocomplete="given-name"
                        class="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#608CF0]"
                    />
                </div>
            </div>
            <div>
                <label for="first-name" class="block text-sm/6 font-semibold text-gray-900"
                    >Descripción</label
                >
                <div class="mt-2.5">
                    <input
                        v-model="formData.description"
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Ingresa la descripción del aporte"
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
