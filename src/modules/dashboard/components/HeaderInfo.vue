<script setup lang="ts">
import IcoWallet from '../icons/IcoWallet.vue'
</script>

<template>
    <div
        class="min-w-[350px] h-[100px] bg-[#8CAFFF]/20 rounded-xl shadow-xl flex items-center justify-center border-b-[1px] border-[#8CAFFF]"
    >
        <IcoWallet />
        <div class="flex flex-col ml-4 mr-4">
            <p class="subtitle color-primary">DEUDA</p>
            <p class="body-text-small color-primary">Jhoana España</p>
        </div>
        <div class="w-[1.5px] h-[40px] bg-[#ff6767]"></div>
        <div class="flex flex-col ml-4">
            <p class="heading-h2 color-primary">$ 500.000</p>
        </div>
    </div>
</template>
