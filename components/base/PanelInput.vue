<template>
    <div class="w-full">
        <label class="mb-3 block text-sm font-medium text-black dark:text-white">
            {{ props.title }}
        </label>
        <input 
            :disabled="props.disabled"
            class="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-medium focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:focus:border-primary"
            :class="[ disabled ? 'text-black/50 dark:text-white/50' : 'text-black dark:text-white']"
            :type="type" 
            :value="props.modelValue"
            @input="emit('update:modelValue', $event.target.value)"
            />
    </div>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        required: false
    },
    disabled: {
        default: false,
    },
    title: {
        required: false,
        type: String
    },
    type: {
        default: 'text',
    },
})
const emit = defineEmits(['update:modelValue'])
</script>