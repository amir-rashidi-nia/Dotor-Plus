<template>
  <body  :class="{ 'dark text-bodydark bg-boxdark-2': $colorMode.value === 'dark' }">
    <!-- ===== Page Wrapper Start ===== -->
    <div class="flex h-screen overflow-hidden">
      <PanelSidebar :sidebarToggle="showSidebar" @show-sidebar-handler="toggleHandler" />

      <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <PanelHeader :sidebarToggle="showSidebar" @show-sidebar-handler="toggleHandler" />

        <!-- ===== Main Content Start ===== -->
        <main>
          <div class="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <slot />
          </div>
        </main>
        <!-- ===== Main Content End ===== -->
      </div>
    </div>
    <!-- ===== Page Wrapper End ===== -->
  </body>
</template>

<script setup>
let showSidebar = ref(false);

function toggleHandler(newVal) {
  showSidebar.value = newVal;
}
</script>