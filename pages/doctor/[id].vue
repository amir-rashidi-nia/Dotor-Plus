<template>
    <div class="bg-white pt-8 lg:pt-16">
        <div class="pb-16 pt-6 sm:pb-24">
            <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div v-if="doctor" class="lg:grid lg:auto-rows-min lg:grid-cols-10 lg:gap-x-8">
                    <div class="lg:col-span-5 lg:col-start-1  lg:mt-0 ">
                        <div class="flex justify-between">
                            <div class="flex flex-col gap-2">
                                <h1 class="text-xl font-bold text-black">{{ doctor?.user?.name }}</h1>
                                <div class="flex gap-2 items-center">
                                    <BootstrapIcon name="hospital"/>
                                    <h2>{{ doctor?.department }}</h2>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <BootstrapIcon name="telephone"/>
                                    <h3>{{ doctor?.user?.phone }}</h3>
                                </div>
                                <div class="flex gap-2 items-center">
                                    <BootstrapIcon name="envelope-at"/>
                                    <h3>{{ doctor?.user?.email }}</h3>
                                </div>
                            </div>
                            <img :src="doctor?.image" class="h-25 w-25 rounded-2xl" />
                        </div>
                    </div>

                    <div class="mt-8 lg:col-span-5 lg:col-start-6 lg:row-span-3 lg:row-start-1">
                        <div class="grid grid-cols-1 gap-4">
                            <MapShow :coordinate="[doctor?.lat, doctor?.lng]"/>
                            <div class="flex gap-2 items-center">
                                <BootstrapIcon name="geo-alt" />
                                <h2 class="text-sm font-bold">آدرس مطب</h2>
                                <address class="text-sm font-medium text-gray-900">{{ doctor?.address }}</address>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 lg:col-span-5 lg:col-start-1">
                        <BaseButton @click.prevent="setApoointment(doctor)">گرفتن نوبت</BaseButton>

                        <div class="mt-10">
                            <div class="flex gap-2 items-center">
                                <BootstrapIcon name="body-text" />
                                <h2 class="text-sm font-medium text-gray-900">توضیحات</h2>
                            </div>
                            <p class="prose prose-sm mt-4 text-gray-500"  >
                                {{ doctor?.description }}
                            </p>
                        </div>

                    </div>
                </div>
                <div v-else class="w-full text-center">
                    پزشکی با این دیتا وجود ندارد
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const { doctorId, departmentName } = useStore();

const { data: doctor } = await useFetch(() => '/api/global', {
    query: { url: `doctors/${route.params?.id}?_embed=user`},
})
function setApoointment(doctorData) {
    departmentName.value = doctorData.department;
    doctorId.value = doctorData.id;
    return navigateTo('/book')
}
</script>