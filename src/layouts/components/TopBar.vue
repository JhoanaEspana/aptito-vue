<template>
    <div class="h-16 bg-[#212D4A] shadow-xl flex items-center justify-between px-4">
        <div class="flex items-center">
            <button
                @click="$emit('toggle-sidebar')"
                class="lg:hidden p-2 rounded-md text-white hover:bg-white/10 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                </svg>
            </button>
            <IcoLogo />
        </div>
    </div>
</template>

<script setup lang="ts">
import IcoLogo from '@/components/ui/icons/IcoLogo.vue'

defineEmits<{
    (e: 'toggle-sidebar'): void
}>()
</script>
