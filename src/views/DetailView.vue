<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import useListStore from '../state/list';
import { Result } from './../models/request';
import { useRoute } from 'vue-router';

const route = useRoute();
const listStore = useListStore();
onBeforeMount(async ()=>{
    await listStore.fetchListbyId(route.params.id as string);
});
const detailData = computed((): Result => listStore.detailData! );
</script>

<template>
<div class="details">
    <h3>{{  detailData?.name }}</h3>
    
    <ul>
        <li> Eye Color:{{ detailData?.eye_color }}</li>

        <li>Birthday :{{ detailData?.birth_year }}</li>

        <li> Hair color: {{ detailData?.hair_color }}</li>

        <li>height: {{ detailData?.height }}</li>
    </ul>
</div>
</template>
<style lang="scss" scoped>
    .details {
        background-color: #fff;
        width: 50rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
</style>
