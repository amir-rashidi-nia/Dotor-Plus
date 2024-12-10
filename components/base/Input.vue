<template>
    <div class="mb-4.5">
        <label class="mb-2.5 block text-black ">
            {{ props.title }}<span v-if="props.required" class="text-meta-1">*</span>
        </label>
        <input 
            :value="props.modelValue"
            @input="emit('update:modelValue', $event.target.value)" 
            :type="type" 
            :placeholder="props.placeholder"
            class="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter" />
    </div>
</template>
<script setup>
const props = defineProps({
    modelValue: {
        required: false
    },
    required: {
        default: false,
    },
    title: {
        required: false,
        type: String
    },
    type: {
        default: 'text',
    },
    placeholder: {
        required: false,
        type: String
    }
})
const emit = defineEmits(['update:modelValue'])
</script>