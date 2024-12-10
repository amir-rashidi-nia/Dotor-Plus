export default defineNuxtRouteMiddleware (() => {
    const { authUser } = useStore();

    if(!authUser.value){
        return navigateTo('/login')
    }
})