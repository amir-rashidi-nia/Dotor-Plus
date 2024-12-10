export default defineEventHandler(async (event) => {
    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'token')
    const query = getQuery(event);

    let page = query.hasOwnProperty('page') ? `&_page=${query.page}&_per_page=8` : '';
    
    try {
        const data = await $fetch(`${apiBase}${query.url}${page}`, {
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        return data;
    } catch (error) {
        return error
    }
})