<template>
  <client-only>
    <aside :class="props.sidebarToggle ? 'translate-x-0' : 'translate-x-full'"
      class="absolute right-0 top-0 z-999999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0"
      v-click-outside="config">
      <!-- SIDEBAR HEADER -->
      <div class="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NuxtLink to="/" class="text-white text-3xl font-black">
          Doctotr Plus
        </NuxtLink>
      </div>
      <!-- SIDEBAR HEADER -->

      <div class="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav class="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">فهرست</h3>
            <ul class="mb-6 flex flex-col gap-1.5">
              <li>
                <NuxtLink
                  class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                  to="/book" :class="{ 'bg-graydark dark:bg-meta-4': $route.path.includes('/book') }">
                  <BootstrapIcon name="calendar-plus" />
                  گرفتن نوبت
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                  to="/panel/myappointment"
                  :class="{ 'bg-graydark dark:bg-meta-4': $route.path === '/myappointment' }">
                  <BootstrapIcon name="calendar3" />
                  نوبت های من
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 class="mb-4 ml-4 text-sm font-medium text-bodydark2">سایر</h3>
            <ul class="mb-6 flex flex-col gap-1.5">
              <li>
                <NuxtLink
                  class="group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4"
                  to="/panel/profile" :class="{ 'bg-graydark dark:bg-meta-4': $route.path === '/panel/profile' }">
                  <BootstrapIcon name="person" class="text-lg"/>
                  اطلاعات کاربری
                </NuxtLink>
              </li>
              <li>
                <AuthLogout />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  </client-only>
</template>

<script setup>
const props = defineProps(["sidebarToggle"]);
const emit = defineEmits(['showSidebarHandler']);

const config = reactive({
  handler: toggleHandler,
  isActive: !props.sidebarToggle,
  events: ["click"]
})

function toggleHandler() {
  emit('showSidebarHandler', false)
}
</script>