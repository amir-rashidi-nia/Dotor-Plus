<template>
    <section class="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
        <div class="container mx-auto">
            <div class="-mx-4 flex flex-wrap lg:justify-between">
                <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
                    <div class="mb-12 max-w-[570px] lg:mb-0">
                        <span class="mb-4 block text-base font-semibold text-primary">
                            خبرنامه
                        </span>
                        <h2
                            class="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                            از اخبار ما مطلع باشید
                        </h2>
                        <p class="mb-9 text-base leading-relaxed text-body-color">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                        </p>

                    </div>
                </div>
                <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
                    <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                        <form>
                            <div class="mb-6">
                                <input type="email" placeholder="ایمیل شما"
                                    class="border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
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