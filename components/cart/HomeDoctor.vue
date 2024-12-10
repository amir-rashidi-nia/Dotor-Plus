<template>
    <div class="z-99 flex justify-center items-center">
        <div class="flex flex-col justify-center overflow-hidden sm:w-auto w-75 rounded-2xl bg-white ">
            <div class=" w-full h-50 ">
                <img :src="props.doctorData?.image" alt="image"
                    class="object-cover w-full h-full hover:scale-110 transition-transform" />
            </div>
            <div class=" flex flex-col justify-start p-2 md:p-2 xl:p-3">
                <h3>
                    <a href="javascript:void(0)"
                        class="mb-4 block text-xl  font-semibold text-black sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                        دکتر {{ props.doctorData?.user?.name }}
                    </a>
                </h3>

                <button @click.prevent="setApoointment(props.doctorData)"
                    class="flex w-full text-xs font-bold mb-2 justify-center rounded-2xl border-4 text-secondary2 border-secondary2 hover:bg-secondary2 hover:text-white p-2">
                    گرفتن نوبت
                </button>

                <NuxtLink :to="`/doctor/${props.doctorData?.id}`" type="submit"
                    class="flex w-full text-xs font-bold justify-center rounded-2xl border-4 border-secondary2 bg-secondary2 p-2 hover:bg-white hover:text-secondary2 text-gray">
                    مشاهده بیشتر ...
                </NuxtLink>
                <div class="flex items-center mt-2">
                    <BootstrapIcon name="hospital" class="stroke-2 ml-2 fill-secondary2"/>
                    <h4 class="leading-relaxed text-black text-xs font-bold">{{ props.doctorData?.department }}</h4>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    doctorData: {
        type: Object,
        required: true
    }
});
const { doctorId, departmentName } = useStore();
function setApoointment(doctorData) {
    departmentName.value = doctorData.department;
    doctorId.value = doctorData.id;
    return navigateTo('/book')
}
</script>