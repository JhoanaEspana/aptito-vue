<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

<template>
    <div class="flex items-center gap-2 mb-8 mt-8">
        <slot name="icon" />
        <span class="subtitle color-primary uppercase">{{ title }}</span>
    </div>
</template>
