<template>
    <div class="card mb-3 border-0 shadow-sm" @click="showDetails=!showDetails">
        <div class="card-body bg-light">
            <h3 class="text-primary text-capitalize fw-bold">{{project.title}}</h3>
            <p v-if="showDetails">{{project.details}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props : ['project'],
    data(){
        return{
            showDetails : false,
        }
    }
}
</script>

<style scoped>
    .card{
        cursor: pointer;
    }
</style>