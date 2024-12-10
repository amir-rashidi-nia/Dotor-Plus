<template>
    <NuxtLink :to="`/doctor/${doctorData.id}`" class="flex flex-col sm:flex-row gap-2">
        <div class="order-2 mt-6 sm:ml-16 sm:mt-0">
            <div class="flex gap-2 items-center">
                <BootstrapIcon name="hospital" />
                <h2>{{ doctorData.department }}</h2>
            </div>
            <p class="mt-3 space-y-6 text-sm text-gray-600 line-clamp-5">
                {{ doctorData.description }}
            </p>
        </div>

        <div class="order-1 flex items-center sm:flex-col sm:items-start flex-none">
            <img :src="doctorData.image" :alt="`${doctorData.user.name}.`" class="h-12 w-12 rounded-full" />

            <div class="ml-4 sm:ml-0 sm:mt-4">
                <p class="text-sm font-medium text-black">{{ doctorData.user.name }}</p>
            </div>
        </div>
    </NuxtLink>
</template>
<script setup>
const props = defineProps({
    doctorData: {
        type: Object,
        required: true
    }
});
</script>