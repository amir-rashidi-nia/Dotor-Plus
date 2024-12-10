export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { public: { apiBase } } = useRuntimeConfig();
    const query = getQuery(event);
    
    try {
        const data = await $fetch(`${apiBase}${query.url}`, {
            method: 'PUT',
            body: body,
            headers: {
                'Accept': 'application/json',
            }
        });

        return data;
    } catch (error) {
        return error
    }
})