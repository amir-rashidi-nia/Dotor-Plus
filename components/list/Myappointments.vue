<template>
    <div
      class="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 class="mb-6 text-xl font-bold text-black dark:text-white">
        نوبت های گرفته شده:
      </h4>
  
      <div class="flex flex-col sm:mb-5">
        <div class="overflow-x-auto bg-gray-2 dark:bg-meta-4">
          <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center text-sm font-light">
                <thead class="border-b bg-neutral-50 font-medium dark:border-neutral-500 dark:text-neutral-800">
                  <tr>
                    <th v-for="(headerList, index) in header" :key="index" scope="col" class=" px-6 py-4">{{ headerList }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(data , index) in datas" class="border-b border-stroke dark:border-strokedark">
                    <td class="whitespace-nowrap  px-6 py-4 ">{{ useJalaliDate(data.date) }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ data.doctor.department }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">{{ data.end }} - {{ data.start }}</td>
                    <td class="whitespace-nowrap  px-6 py-4">
                      <NuxtLink :to="`/doctor/${data.doctor.id}`"
                        class="p-2 sm:px-3 sm:text-xs rounded font-medium bg-primary text-gray text-sm xsm:text-base sm:text-xsm sm:text-center  cursor-pointer">
                        اطلاعات پزشک
                      </NuxtLink>
                    </td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const prop = defineProps([
    'datas'
  ])
  const header = ref(['تاریخ','تخصص','ساعت','اطلاعات پزشک' ]);
  </script>
  
  <style scoped>
  @media (min-width: 640px) {
    table {
      display: inline-table !important;
    }
  
    thead tr:not(:first-child) {
      display: none;
    }
  }
  
  td:not(:last-child) {
    border-bottom: 0;
  }
  
  /* th:not(:last-child) {
      border-bottom: 2px solid rgba(0, 0, 0, .1);
    } */
  </style>