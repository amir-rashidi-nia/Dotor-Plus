<template>
    <section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
        <div class="container mx-auto">
            <div class=" flex flex-wrap lg:justify-between">
                <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                    <div class="mb-12 max-w-[570px] lg:mb-0">
                        <span class="mb-4 block text-base font-semibold text-primary">
                            ارتباط با ما
                        </span>
                        <h2
                            class="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                            با ما در ارتباط باشید
                        </h2>
                        <p class="mb-9 text-base leading-relaxed text-body-color">
                            برای تماس با ما، می‌توانید از روش‌های زیر استفاده کنید:
                        </p>

                        <div class="mb-8 flex w-full max-w-[370px]">
                            <div
                                class="ml-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  text-primary sm:h-[70px] sm:max-w-[70px]">
                                <BootstrapIcon name="house" class="text-2xl"/>
                            </div>
                            <div class="w-full">
                                <h4 class="mb-1 text-xl font-bold text-black">آدرس</h4>
                                <p class="text-base text-body-color">
                                    ایران-مشهد
                                </p>
                            </div>
                        </div>

                        <div class="mb-8 flex w-full max-w-[370px]">
                            <div
                                class="ml-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded text-primary sm:h-[70px] sm:max-w-[70px]">
                                <BootstrapIcon name="telephone" class="text-2xl"/>
                            </div>
                            <div class="w-full">
                                <h4 class="mb-1 text-xl font-bold text-black">شماره تماس</h4>
                                <p class="text-base text-body-color">(+62)81 414 257 9980</p>
                            </div>
                        </div>

                        <div class="mb-8 flex w-full max-w-[370px]">
                            <div
                                class="ml-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded text-primary sm:h-[70px] sm:max-w-[70px]">
                                <BootstrapIcon name="envelope-at" class="text-2xl"/>
                            </div>
                            <div class="w-full">
                                <h4 class="mb-1 text-xl font-bold text-black">
                                    ایمیل
                                </h4>
                                <p class="text-base text-body-color">info@yourdomain.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                        <form>
                            <div class="mb-6">
                                <input type="text" placeholder="نام شما"
                                    class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <input type="email" placeholder="ایمیل شما"
                                    class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <input type="text" placeholder="شماره تماس شما"
                                    class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                            </div>
                            <div class="mb-6">
                                <textarea rows="6" placeholder="پیام شما"
                                    class="border-[f0f0f0] w-full resize-none rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none"></textarea>
                            </div>
                            <div>
                                <button type="submit"
                                    class="w-full rounded border border-primary bg-primary p-3 text-white transition hover:bg-opacity-90">
                                    ارسال
                                </button>
                            </div>
                        </form>
                        <div>
                            <span class="absolute -top-10 -right-9 z-[-1]">
                                <svg width="100" height="100" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                                        fill="#3056D3" />
                                </svg>
                            </span>
                            <ShapeTwo />
                            <ShapeThree />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
const openFaq = ref(false)
</script>