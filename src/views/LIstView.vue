<script setup lang="ts">
import { computed, onBeforeMount } from 'vue';
import useListStore from '../state/list';
import { ListRequest } from './../models/request';


const listStore = useListStore();
onBeforeMount(async ()=>{
    await listStore.fetchList();
});
const listData = computed((): ListRequest => listStore.listData! );

const routePath = (url: string): string =>`details/${url.split('/').reverse()[1]}`;

</script>

<template>
<div class="list">
<template v-for="(list,key) in listData?.results" :key="key">
   <div class="list--items">
        <h4>{{ list.name  }}</h4>
        <router-link :to="routePath(list.url)" >
        <div class="text-wrap">
          <div class="circle"></div>
          <p class="text">
            Details
          </p>
        </div>
      </router-link>
   </div>
</template>
</div>
</template>
<style lang="scss" scoped>
    .list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap:2rem;
        &--items{
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            width: 300px;
            height: 100px;
        }
    }
</style>
