<template>
    <h1>Jobs</h1>
    <div v-for="job in jobs">
        <router-link :to="{name : 'Jobdetail', params : {id : job.id}}" class="badge bg-primary">{{job.title}}</router-link>
    </div>
</template>

<script>
export default {
    name: "Jobs",
    data(){
        return{
            jobs : [
                {id : 1, title : "designer", details : "learn with me designer"},
                {id : 2, title : "developer", details : "learn with me developer"},
                {id : 3, title : "project manager", details : "learn with me project manager"},
            ]
        }
    }
}
</script>

<style scoped>

</style>