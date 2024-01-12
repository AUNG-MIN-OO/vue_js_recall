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
            jobs : []
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                this.jobs = data
            })
            .catch((err)=>{console.log(err.message())})
    }
}
</script>

<style scoped>

</style>