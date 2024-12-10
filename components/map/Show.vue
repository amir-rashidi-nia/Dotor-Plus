<template>
    <div class="m-auto w-full h-[50vh] z-10">
        <client-only>
            <l-map v-model="zoom" v-model:zoom="zoom" :center="coordinate">
                <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="coordinate">
                </l-marker>
            </l-map>
        </client-only>
    </div>
</template>
<script setup>
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";

const zoom = ref(12)
const props = defineProps({
    coordinate: {
        type: Array,
        required: true
    }
})
</script>