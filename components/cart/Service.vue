<template>
    <div>
        <div
            class="mb-8 overflow-hidden shadow-4 flex w-40 h-40 hover:h-100 flex-col transition-height items-center  justify-start rounded-full  bg-gray p-2 py-10  md:px-2 xl:px-2">
            <div class="mb-12 mt-3 shrink-0 flex h-15 w-15 items-center justify-center rounded-2xl bg-secondary2">
                <BootstrapIcon :name="icon" class="text-2xl text-white font-bold"/>
            </div>

            <h4 class="mb-3 text-xl font-semibold text-dark">
                {{ props.title }}
            </h4>
            <p class="text-body-color">
                {{ props.description }}
            </p>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    title: {
        required: true,
        type: String
    },
    icon: {
        required: true,
        type: String
    },
    description: {
        required: true,
        type: String
    },
})
</script>
