<template>
    <div class="rounded-sm border border-stroke bg-white shadow-default">
        <div class="border-b border-stroke py-4 px-6.5">
            <h3 class="font-semibold text-black">
                لطفا فرم زیر را پر کنید.
            </h3>
        </div>
        <form @submit.prevent="send">
            <div class="p-6.5">
                <BaseInput v-model="formData.name" title="نام و نام خانوادگی" :required="true"
                    placeholder="نام و نام خانوادگی خود را وارد کنید..." />
                <BaseInput v-model="formData.code" title="کدملی" :required="true"
                    placeholder="کدملی خود را وارد کنید..." />
                <BaseInput v-model="formData.phone" title="شماره تماس" :required="true"
                    placeholder="شماره تماس خود را وارد کنید..." />
                <BaseInput v-model="formData.email" type="email" title="ایمیل" :required="true"
                    placeholder="ایمیل خود را وارد کنید..." />
                <BaseButton :loading="loading">مرحله بعد</BaseButton>
            </div>
        </form>
    </div>
</template>

<script setup>
import { useToast } from 'vue-toastification';
const emit = defineEmits(['next', 'appointment']);
const { authUser, doctorId, appointmentStep } = useStore();

onMounted(() => {
    if (doctorId.value) {
        appointmentStep.value = 3;
        return
    }
    appointmentStep.value = 1
    return
})

const formData = reactive({
    name: '',
    code: '',
    email: '',
    phone: '',
})

const toast = useToast();
const loading = ref(false);

async function send() {
    if (formData.name === '' || formData.email === '' || formData.code === '' || formData.phone === '') {
        toast.error("تمام موارد فرم ورود الزامی است.")
        return;
    };

    const codePattern = /^[0-9]{10}$/;
    if (!codePattern.test(formData.code)) {
        toast.error("فرمت کدملی معتبر نیست")
        return;
    };

    const phonePattern = /^((\+98|0)9\d{9})$/;
    if (!phonePattern.test(formData.phone)) {
        toast.error("فرمت شماره تماس معتبر نیست")
        return;
    };

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailPattern.test(formData.email)) {
        toast.error("فرمت ایمیل معتبر نیست")
        return;
    };

    try {
        loading.value = true;
        const response = await $fetch('api/auth/register', {
            method: 'POST',
            body: formData,
            headers: useRequestHeaders(['cookie'])
        });
        authUser.value = response.data;
        if (doctorId.value) {
            appointmentStep.value = 3;
            return
        }
        emit('next')

    } catch (error) {
        useErorr(error);
    } finally {
        loading.value = false;
    }
}
</script>