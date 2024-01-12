<template>
    <div>
        <h1>job id = {{id}}</h1>
        <h1>Job Title is {{job.title}}</h1>
        <h1>Job Detail is {{job.detail}}</h1>
    </div>
</template>

<script>
export default {
    props : ['id'],
    name: "JobDetail",
    data(){
        return {
            job : []
        }
    },
    mounted() {
        fetch("http://localhost:3000/jobs/"+this.id)
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                console.log(data)
                this.job = data
            })
            .catch((err)=>console.log(err))
    }
}
</script>

<style scoped>

</style>