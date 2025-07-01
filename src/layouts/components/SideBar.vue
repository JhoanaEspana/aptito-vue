<template>
    <div class="h-full w-64 bg-white shadow-xl flex flex-col">
        <div class="p-4 mb-2 flex items-center justify-between">
            <button
                @click="$emit('close')"
                class="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <nav
            class="flex-1 flex flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700 overflow-y-auto"
        >
            <RouterLink
                @click="$emit('close')"
                to="/dashboard"
                class="flex items-center gap-2 mb-2 subtitle text-[#212D4A] hover:bg-[#608CF0] hover:text-white rounded-lg p-2 transition-all duration-300 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-[#608CF0] group-hover:text-white transition-colors duration-300"
                    >
                        <rect width="7" height="9" x="3" y="3" rx="1" />
                        <rect width="7" height="5" x="14" y="3" rx="1" />
                        <rect width="7" height="9" x="14" y="12" rx="1" />
                        <rect width="7" height="5" x="3" y="16" rx="1" />
                    </g>
                </svg>

                DASHBOARD
            </RouterLink>
            <RouterLink
                @click="$emit('close')"
                to="/add-item"
                class="flex items-center gap-2 mb-2 subtitle text-[#212D4A] hover:bg-[#608CF0] hover:text-white rounded-lg p-2 transition-all duration-300 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-[#608CF0] group-hover:text-white transition-colors duration-300"
                    >
                        <path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4" />
                        <path d="M14 2v4a2 2 0 0 0 2 2h4M3 15h6m-3-3v6" />
                    </g>
                </svg>

                ADD ITEM
            </RouterLink>
            <RouterLink
                @click="$emit('close')"
                to="/user-detail"
                class="flex items-center gap-2 mb-2 subtitle text-[#212D4A] hover:bg-[#608CF0] hover:text-white rounded-lg p-2 transition-all duration-300 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-[#608CF0] group-hover:text-white transition-colors duration-300"
                    >
                        <path
                            d="M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                        />
                        <circle cx="10" cy="7" r="4" />
                    </g>
                </svg>

                USER DETAIL
            </RouterLink>
            <RouterLink
                @click="$emit('close')"
                to="/movements"
                class="flex items-center gap-2 mb-2 subtitle text-[#212D4A] hover:bg-[#608CF0] hover:text-white rounded-lg p-2 transition-all duration-300 group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="text-[#608CF0] group-hover:text-white transition-colors duration-300"
                    >
                        <path
                            d="M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
                        />
                        <circle cx="10" cy="7" r="4" />
                    </g>
                </svg>

                MOVIMIENTOS
            </RouterLink>
        </nav>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'close'): void
}>()
</script>
