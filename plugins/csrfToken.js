export default defineNuxtPlugin(async (nuxtApp) => {
    const { authUser } = useStore();

    try {
        const user = await $fetch('/api/auth/me', {
            headers: useRequestHeaders(['cookie'])
        })

        authUser.value = user.data;
    } catch (error) {
        authUser.value = null;
    }
})