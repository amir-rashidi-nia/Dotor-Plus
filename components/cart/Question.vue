<template>
    <div class="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
        <button class="faq-btn flex w-full text-right" @click="openFaq = !openFaq">
            <div class="w-full">
                <h4 class="text-lg font-semibold text-black">
                    {{ props.question }}
                </h4>
            </div>
            <div
                class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-secondary  text-primary">
                <BootstrapIcon name="chevron-down text-xl font-bold" />
            </div>
        </button>
        <div v-show="openFaq" class="faq-content pl-[62px]">
            <p class="py-3 text-base leading-relaxed text-body-color">
                {{ props.answer }}
            </p>
        </div>
    </div>
</template>
<script setup>
const openFaq = ref(false);
const props = defineProps({
    question: {
        required: true,
        type: String
    },
    answer: {
        required: true,
        type: String
    },
})
</script>