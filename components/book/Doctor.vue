<template>
    <div class="grid  grid-cols-1 gap-9 sm:grid-cols-1 ">
        <div class="flex flex-col gap-9 mx-4">
        
            <div class="rounded-sm border border-stroke bg-white shadow-default">
                <div class="border-b border-stroke py-4 px-6.5">
                    <h3 class="font-semibold text-black">
                        پزشک موردنظر خود را انتخاب فرمایید:
                    </h3>
                </div>
                <div class="p-6.5 flex justify-between flex-col ">

                    <div v-if="doctors?.length">
                        <div class="mb-6.5 flex justify-center gap-2 flex-wrap max-h-[500px] overflow-scroll">
                            <div v-for="doctor in doctors" @click="nextPageHandler(doctor.id)"
                                class="bg-primary text-gray flex justify-center rounded w-auto py-2 px-4 cursor-pointer font-medium">
                                {{ doctor.user.name }}
                            </div>
                        </div>
                    </div>

                    <div v-else role="status" class="flex py-30 justify-center">
                        <h3 class="font-semibold text-center text-black">
                            پزشکی وجود ندارد...
                        </h3>
                    </div>

                    <BaseButton @click.prevent="emit('back')">
                        مرحله قبل
                    </BaseButton>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(['next', 'back'])
const { departmentName, doctorId } = useStore();
console.log(departmentName.value)

const { data: doctors } = useFetch('/api/global', {
    method: 'get',
    query: {
        url: `doctors?_embed=user&department=${departmentName.value}`
    }
});
function nextPageHandler(id) {
    doctorId.value = id
    emit('next')
}
</script>