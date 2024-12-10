<template>
    <div class="-mx-4 flex flex-wrap z-99">
        <div class="w-full px-4">
            <div class=" mb-12 max-w-[510px]  lg:mb-20">
                <div class="relative">
                    <h4 class="text-lg pr-3 z-10 font-bold text-black sm:text-2xl lg:text-4xl">{{ title }}</h4>

                    <svg class=" absolute top-0 bottom-0 my-auto z-[-1] fill-secondary2" height="40px" width="40px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        <path 
                            d="M25.9,-30.3C31,-26.7,30.6,-16,31.1,-6.5C31.5,3,32.7,11.3,30.3,19.3C27.9,27.4,21.7,35.1,14.3,36.6C6.9,38,-1.7,33.3,-8.2,28.4C-14.7,23.5,-19.1,18.5,-24.3,12.6C-29.6,6.6,-35.6,-0.4,-36.5,-8.3C-37.3,-16.2,-32.9,-25.1,-26,-28.4C-19,-31.6,-9.5,-29.2,0.5,-29.8C10.4,-30.4,20.9,-33.9,25.9,-30.3Z"
                            width="100%" height="100%" transform="translate(50 50)" style="transition: all 0.3s ease 0s;"
                            stroke-width="0" stroke="url(#sw-gradient)" />
                    </svg>
                </div>
                <p class="text-base text-body-color">
                    {{ description }}
                </p>
                <NuxtLink v-if="link" :to="link" class="text-xs text-secondary2 font-bold cursor-pointer">مشاهده بیشتر ...</NuxtLink>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(["title", "description","link"])
</script>