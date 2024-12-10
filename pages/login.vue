<template>
    <div
        class="container mx-auto grid grid-cols-1 gap-9 md:grid-cols-6 lg:grid-cols-4 py-50 md:py-65 lg:py-80 min-h-screen">
        <div class="flex flex-col md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-2 gap-9">
            <div class="rounded-sm border border-stroke bg-white shadow-default ">
                <div class="border-b border-stroke py-4 px-6.5 ">
                    <h3 class="font-semibold text-black ">
                        ورود کاربر
                    </h3>
                </div>
                <form @submit.prevent="register">
                    <div class="p-6.5">
                        <BaseInput v-model="formData.phone" title="شماره تماس" :required="true"
                            placeholder="شماره تماس خود را وارد کنید..." />
                        <BaseInput v-model="formData.password" title="رمز عبور (کدملی)" :required="true"
                            placeholder="رمز عبور خود را وارد کنید..." />
                        <BaseButton :loading="loading">ورود</BaseButton>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['guest']
})
import { useToast } from 'vue-toastification';
const emit = defineEmits(['next']);
const { authUser } = useStore();

const formData = reactive({
    password: '',
    phone: '',
})

const toast = useToast();
const loading = ref(false);

async function register() {
    if ( formData.password === '' || formData.phone === '') {
        toast.error("تمام موارد فرم ورود الزامی است.")
        return;
    };

    const codePattern = /^[0-9]{10}$/;
    if (!codePattern.test(formData.password)) {
        toast.error("فرمت رمزعبور معتبر نیست")
        return;
    };

    const phonePattern = /^((\+98|0)9\d{9})$/;
    if (!phonePattern.test(formData.phone)) {
        toast.error("فرمت شماره تماس معتبر نیست")
        return;
    };

    try {
        loading.value = true;
        const response = await $fetch('api/auth/login', {
            method: 'POST',
            body: formData,
            headers: useRequestHeaders(['cookie'])
        });
        authUser.value = response.data;
        navigateTo('/panel/myappointment');
        
    } catch (error) {
        useErorr(error);
    } finally {
        loading.value = false;
    }
}
</script>