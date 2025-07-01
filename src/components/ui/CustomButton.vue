<template>
    <button
        :class="buttonClasses"
        class="h-[50px] px-6 rounded-full shadow-md flex justify-center items-center focus:outline-none cursor-pointer transition-all duration-300"
    >
        <span :class="textClasses" class="font-medium tracking-widest mr-2 uppercase">
            <slot />
        </span>
        <slot name="icon" />
    </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    outlined?: boolean
}>()

const buttonClasses = computed(() => ({
    'bg-[#8CAFFF] hover:bg-[#608CF0]': !props.outlined,
    'border border-[#FF6767] hover:bg-[#ff67672c]': props.outlined,
}))

const textClasses = computed(() => ({
    'text-[#212D4A]': !props.outlined,
    'text-[#FF6767]': props.outlined,
}))
</script>
