<template>
    <div>
        <client-only>
            <NuxtLayout name="panel">
                <NuxtPage />
            </NuxtLayout>
        </client-only>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false
})
</script>
