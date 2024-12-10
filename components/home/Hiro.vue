<template>
    <div class="bg-cover home__container">
        <div
            class="relative container flex mx-auto items-center justify-between px-2 xl:px-20 lg:px-10 md:px-0 md:h-3/5 h-125 w-full md:pt-10  lg:pt-20">
            <HomeHeaderShape class=" hidden md:block" />
            <div class="flex flex-col  text-black items-center h-50">
                <h1
                    class="text-xl pb-3 hover:-translate-y-1 transition-all font-bold text-center sm:mb-4 md:w-70 lg:w-auto">
                    رزرو آنلاین نوبت پزشک
                </h1>
                <h4 class="text-lg py-3 lg:w-100 md:w-95 xl:w-auto text-center md:text-right">
                    با سهولت و سرعت نوبت خود را از بهترین پزشکان رزرو کنید. هیچ زمانی را از دست ندهید و از سلامت خود مراقبت کنید. 
                </h4>
                <div class="flex justify-center items-center gap-3 w-full">
                    <NuxtLink
                        to="/faq"
                        class="flex justify-center rounded bg-primary p-3 cursor-pointer font-medium hover:shadow-8 text-gray">
                        چطور
                        نوبت بگیرم؟
                    </NuxtLink>
                    <NuxtLink
                        to="/book"
                        class="flex justify-center rounded bg-primary p-3 cursor-pointer font-medium hover:shadow-8 text-gray">
                        گرفتن
                        نوبت
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>