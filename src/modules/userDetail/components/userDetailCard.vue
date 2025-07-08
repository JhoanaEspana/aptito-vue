<script setup lang="ts">
import IcoAport from '@/components/ui/icons/IcoAport.vue'
import type { User } from '@/modules/Auth/interfaces'
import type { Contribution } from '../interfaces/contributions.interface'
import { computed } from 'vue'

const props = defineProps<{
    user: User | undefined
    contributions: Contribution[] | undefined
}>()

console.log('Props:', props)

const userName = computed(() => props.user?.name || 'Usuario no disponible')

const totalContributions = computed(
    () =>
        props.contributions?.reduce((acc, contribution) => acc + Number(contribution.amount), 0) ||
        0,
)
</script>

<template>
    <div class="flex gap-1">
        <img
            class="w-18 h-18 rounded-full mr-4 object-cover border-2 border-white shadow"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Avatar"
        />
        <div class="flex flex-col">
            <p class="heading-h2">{{ userName }}</p>
            <div class="flex items-center gap-2">
                <IcoAport />
                <div>
                    <p class="caption text-[#8CAFFF]">Aporte</p>
                    <p class="body-text text-[#8CAFFF]">
                        {{
                            totalContributions.toLocaleString('es-CO', {
                                style: 'currency',
                                currency: 'COP',
                            })
                        }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
