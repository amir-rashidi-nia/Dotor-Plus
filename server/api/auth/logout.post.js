export default defineEventHandler(async (event) => {
    const { public: { secureItem } } = useRuntimeConfig();

    try {
        setCookie(event, 'phone', '', {
            httpOnly: true,
            secure: secureItem,
            maxAge: new Date(0),
            path: '/'
        })

        return data;
    } catch (error) {
        return error;
    }
})