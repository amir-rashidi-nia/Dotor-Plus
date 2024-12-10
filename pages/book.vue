<template>
    <div class="container relative mx-auto grid grid-cols-1 gap-9 md:grid-cols-6 lg:grid-cols-4 items-center py-50 md:py-65 lg:py-80 min-h-screen">
        <div class="flex absolute w-full flex-col md:col-start-2 lg:col-start-2 md:col-span-4 lg:col-span-2 gap-9">
            <Transition name="fade" mode="out-in">
                <BookDepartment v-if="appointmentStep == 1" @next="appointmentStep = 2" @back="appointmentStep = 0" />
                <BookDoctor v-else-if="appointmentStep == 2" @next="appointmentStep = 3" @back="appointmentStep = 1" />
                <BookAppointment v-else-if="appointmentStep == 3" @back="appointmentStep = 2" />
                <BookForm v-else @next="appointmentStep = 1"/>
            </Transition>
        </div>
    </div>
</template>
<script setup>
const { appointmentStep } = useStore();
</script>
