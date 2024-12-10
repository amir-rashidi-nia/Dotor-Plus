<template>
    <!--for mobile-->
    <nav class="fixed z-999 w-full px-2 container left-0 right-0 mx-auto lg:hidden">
      <button @click.stop="isShown = !isShown" ref="navMenu"
        class="w-13 mx-auto fixed z-999999  mt-4 ml-auto top-0 h-13 flex items-center justify-center rounded-full flex-col bg-white shadow cursor-pointer ">
        <span class="w-7 z-99999 bg-primary h-1 rounded-full transition-all"
          :class="{ 'rotate-[135deg] translate-y-2': isShown }"></span>
        <span class="w-7 z-99999 bg-primary h-1 my-1 rounded-full transition-all"
          :class="{ 'my-0 rotate-45': isShown }"></span>
        <span class="w-7 z-99999 bg-primary h-1 rounded-full transition-all" :class="{ 'opacity-0': isShown }"></span>
      </button>

      <div class="w-12 fixed z-9999 mt-4 py-3  top-0 ml-auto h-12 rounded-full transition-transform duration-700 bg-white"
        :class="{ 'scale-[125]': isShown }">
      </div>

      <ul
        class="fixed z-99999 justify-center items-center overflow-hidden opacity-0 h-0 flex-col mt-30 delay-200 transition-all right-0 left-0 top-0 mx-auto flex"
        :class="{ 'h-auto opacity-100': isShown }">
        <li class="my-3">
          <NuxtLink class="text-black hover:font-bold text-lg" to="/"
            :class="{ 'font-bold': $route.path === '/' }">خانه</NuxtLink>
        </li>
        <li class="my-3">
          <NuxtLink class="text-black hover:font-bold text-lg" to="/about-us"
            :class="{ 'font-bold': $route.path === '/about-us' }">درباره ما</NuxtLink>
        </li>
        <li class="my-3">
          <NuxtLink class="text-black hover:font-bold text-lg" to="/contact-us"
            :class="{ 'font-bold': $route.path === '/contact-us' }">ارتباط با ما</NuxtLink>
        </li>
        <li class="my-3">
          <NuxtLink class="text-black hover:font-bold text-lg" to="/faq"
            :class="{ 'font-bold': $route.path === '/faq' }">سوالات متداول</NuxtLink>
        </li>
        <li class="my-3">
          <NuxtLink class="text-black hover:font-bold text-lg" to="/policy"
            :class="{ 'font-bold': $route.path === '/policy' }">قوانین و مقررات</NuxtLink>
        </li>

        <li v-if="!authUser" class="my-3">
          <NuxtLink to="/login"
            class="inline-flex w-full  items-center justify-center rounded bg-primary py-3 px-10 text-center font-medium text-white hover:opacity-90">
             ورود
          </NuxtLink>
        </li>
        <li v-else class="my-3">
          <NuxtLink to="/panel"
            class="inline-flex w-full  items-center justify-center rounded bg-primary py-3 px-10 text-center font-medium text-white hover:opacity-90">
             پنل کاربری
          </NuxtLink>
        </li>

      </ul>
    </nav>

    <!-- for desktop -->
    <nav dir="rtl" class="absolute top-0 container w-full mx-auto z-30 left-0 right-0 hidden lg:block">
      <div class="w-full  mx-auto flex items-center justify-between gap-20 py-3">

        <div class="flex items-center">
          <a class="text-black no-underline hover:no-underline font-bold flex items-center" href="#">
            <img src="~/assets/images/logo/logo.svg" class="w-30 h-30"/>
          </a>
        </div>

        <div class="flex items-center w-400  text-black">
          <ul class="justify-between items-center gap-8 flex">
            <li>
              <NuxtLink class="relative text-lg w-fit block after:block opacity-90 hover:opacity-100 after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/"
                :class="{ 'after:scale-x-100 opacity-100': $route.path === '/' }">خانه</NuxtLink>
            </li>
            <li>
              <NuxtLink class="relative text-lg w-fit block after:block opacity-90 hover:opacity-100 after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/about-us"
                :class="{ 'after:scale-x-100 opacity-100': $route.path === '/about-us' }">درباره ما</NuxtLink>
            </li>
            <li>
              <NuxtLink class="relative text-lg w-fit block after:block opacity-90 hover:opacity-100 after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/contact-us"
                :class="{ 'after:scale-x-100 opacity-100': $route.path === '/contact-us' }">ارتباط با ما</NuxtLink>
            </li>
            <li>
              <NuxtLink class="relative text-lg w-fit block after:block opacity-90 hover:opacity-100 after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/faq"
                :class="{ 'after:scale-x-100 opacity-100': $route.path === '/faq' }">سوالات
                متداول</NuxtLink>
            </li>
            <li>
              <NuxtLink class="relative text-lg w-fit block after:block opacity-90 hover:opacity-100 after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center" to="/policy"
                :class="{ 'after:scale-x-100 opacity-100': $route.path === '/policy' }">قوانین و مقررات</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="">
          <NuxtLink :to="authUser ? '/panel' : '/login'"
            class="flex items-center justify-center  py-3 text-center font-medium text-black opacity-90 hover:opacity-100">
            <p class="pl-4">{{ authUser ? authUser.name : "ورود" }}</p>
            <BootstrapIcon name="person-circle" class="text-4xl"/>
          </NuxtLink>
        </div>
      </div>
    </nav>
</template>
<script setup>
const { authUser } = useStore()
const navMenu = ref(null)
let isShown = ref(false)
const route = useRoute();

watch(() => route.path, () => {
  isShown.value = false;
})   
</script>
<style></style>