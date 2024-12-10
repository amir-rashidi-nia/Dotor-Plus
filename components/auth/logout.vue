<template>
    <a @click.prevent="logout"
        class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4">
        <BootstrapIcon name="box-arrow-left" class="text-lg"/>
        خروج
    </a>
</template>
<script setup>
import { useToast } from "vue-toastification";

const toast = useToast();
const { authUser } = useStore();

async function logout() {
    await useFetch('api/auth/logout', {
        method: 'POST',
        headers: useRequestHeaders(['cookie']),
    })
    authUser.value = null;
    toast.warning("از سیستم خارج شدید");
    return navigateTo('/')
}
</script>