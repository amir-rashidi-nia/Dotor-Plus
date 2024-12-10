<template>
    <main>
        <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div class="mx-auto max-w-242.5">
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 class="text-title-md2 font-bold text-black dark:text-white">
                        پروفایل
                    </h2>
                </div>
                <div class="col-span-5 xl:col-span-3">
                    <div
                        class="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div class="border-b border-stroke py-4 px-7 dark:border-strokedark">
                            <h3 class="font-medium text-black dark:text-white">
                                اطلاعات کاربر
                            </h3>
                        </div>
                        <div class="p-7">
                            <form @submit.prevent="edit">
                                <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                    <BasePanelInput title="نام و نام خانوادگی" v-model="formData.name" />
                                    <BasePanelInput :disabled="true" title="شماره تماس" v-model="formData.phone" />
                                </div>
                                <div class="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                                    <BasePanelInput title="ایمیل" v-model="formData.email" />
                                    <BasePanelInput title="کدملی" v-model="formData.code" />
                                </div>
                                <BaseButton>ویرایش</BaseButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>
<script setup>
import { useToast } from 'vue-toastification';

definePageMeta({
    middleware: ['auth']
})
const { authUser } = useStore();
const formData = reactive({
    name: '',
    code: '',
    email: '',
    phone: '',
})

onMounted(() => {
    formData.code = authUser.value?.code;
    formData.email = authUser.value?.email;
    formData.phone = authUser.value?.phone;
    formData.name = authUser.value?.name;
})

const toast = useToast();
const loading = ref(false);

async function edit() {
    if (formData.name === '' || formData.email === '' || formData.code === '' || formData.phone === '') {
        toast.error("تمام موارد فرم ورود الزامی است.")
        return;
    };

    const codePattern = /^[0-9]{10}$/;
    if (!codePattern.test(formData.code)) {
        toast.error("فرمت کدملی معتبر نیست")
        return;
    };

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailPattern.test(formData.email)) {
        toast.error("فرمت ایمیل معتبر نیست")
        return;
    };

    try {
        loading.value = true;
        const response = await $fetch('/api/global', {
            method: 'PUT',
            body: formData,
            query: {
                url: `users/${authUser.value.id}`
            }
        });
        
        authUser.value = response;
        
        toast.success('اطلاعات با موفقیت تغییر یافت')
        
    } catch (error) {
        useErorr(error);
    } finally {
        loading.value = false;
    }
}
</script>