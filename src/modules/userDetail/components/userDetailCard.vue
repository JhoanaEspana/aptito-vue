<script setup lang="ts">
import IcoAport from '@/components/ui/icons/IcoAport.vue'
</script>

<template>
    <div class="flex gap-1">
        <img
            class="w-18 h-18 rounded-full mr-4 object-cover border-2 border-white shadow"
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Avatar"
        />
        <div class="flex flex-col">
            <p class="heading-h2">Jhoana España</p>
            <div class="flex items-center gap-2">
                <IcoAport />
                <div>
                    <p class="caption text-[#8CAFFF]">Aporte</p>
                    <p class="body-text text-[#8CAFFF]">500.000</p>
                </div>
            </div>
        </div>
    </div>
</template>
