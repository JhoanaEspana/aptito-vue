<template>
    <div class="flex flex-col h-screen">
        <!-- TopBar -->
        <TopBar @toggle-sidebar="toggleSidebar" />

        <div class="flex flex-1 overflow-hidden">
            <!-- Sidebar -->
            <div
                class="fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0"
                :class="{ '-translate-x-full': !isSidebarOpen }"
            >
                <SideBar @close="toggleSidebar" />
            </div>

            <!-- Overlay -->
            <div
                v-if="isSidebarOpen"
                class="fixed inset-0 z-40 bg-black/50 lg:hidden"
                @click="toggleSidebar"
            ></div>

            <!-- Main Content -->
            <div class="flex-1 overflow-auto p-4 bg-gray-100">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SideBar from './components/SideBar.vue'
import TopBar from './components/TopBar.vue'

const isSidebarOpen = ref(false)

const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
}
</script>
