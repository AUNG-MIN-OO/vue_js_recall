<template>
    <div class="mb-3">
        <button @click="filterBy('all')" :class="{active : currentFilterValue==='all'}">all</button>
        <button @click="filterBy('ongoing')" :class="{active : currentFilterValue==='ongoing'}">ongoing</button>
        <button @click="filterBy('complete')" :class="{active : currentFilterValue==='complete'}">complete</button>
    </div>
</template>

<script>
export default {
    props : ['currentFilterValue'],
    methods: {
        filterBy(value){
            this.$emit("filterValue",value);
        }
    }
}
</script>

<style scoped>
    button{
        border: 0;
        margin-right: 10px;
        text-transform: uppercase;
        font-weight: bold;
        color: darkgray;
        background-color: #ffffff;
        font-size: 12px;
    }
    .active{
        color: #333333;
    }
</style>