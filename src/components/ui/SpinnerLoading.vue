<script setup lang="ts">
defineProps<{
    text: string
    color?: string
}>()
</script>

<template>
    <div class="flex justify-center items-center mt-8">
        <div
            class="animate-spin rounded-full h-8 w-8 border-b-2"
            :style="{ borderColor: color }"
        ></div>
        <span class="ml-2 text-gray-600">{{ text }}</span>
    </div>
</template>
