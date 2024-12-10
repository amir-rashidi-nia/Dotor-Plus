<template>
    <div>
        <main>
            <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <h2 class="text-title-md2 font-bold text-black dark:text-white">
                        نوبت های من
                    </h2>
                </div>
                <div v-if="appointments?.data?.length<=0" class="text-center py-3 bg-danger2 border border-danger rounded text-black">اطلاعاتی وجود ندارد</div>
                <div v-else-if="pending" role="status" class="flex justify-center">
                    <svg aria-hidden="true"
                        class="w-12 h-12 mr-2 text-gray-200 animate-spin fill-primary"
                        viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor" />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
                <div v-else>
                    <div >
                        <ListMyappointments :datas="appointments?.data" />
                    </div>
                    <div class="flex justify-center mt-8">
                        <nav aria-label="Page navigation example">
                            <ul class="list-style-none flex">
                                <li v-for="(_, index) in appointments.pages" :key="index" aria-current="page" :class="{ active: page == index + 1 }">
                                    <button
                                        class="relative block rounded bg-primary-100 px-3 py-1.5 text-lg font-medium text-primary-700 transition-all duration-300"
                                        :class="{ 'dark:bg-meta-4  bg-boxdark': page == index + 1 || (!page && index == 0)  , 'bg-transparent hover:bg-meta-4  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white': page != index + 1 }"
                                        @click.prevent="paginate(index + 1)">
                                        {{
                                            index+1
                                        }}
                                        <span v-if="page == index + 1 "
                                            class="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">(current)</span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </div>
        </main>
    </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth']
})

const { authUser } = useStore();
const route = useRoute();
const router = useRouter();
const page = ref(route.query?.page || 1);

async function paginate(value) {
    page.value = value;
    router.push({ query: { ...route.query, page: value } });
}

const { data: appointments , pending } = await useFetch(() => `/api/global?page=${route.query?.page ? route.query?.page : '1'}`, {
    server: false,
    method: 'get',
    query: { url: `appointments?userId=${authUser.value.id}&_embed=doctor&_sort=-date` },
    watch: [() => route.query?.page]
})
</script>