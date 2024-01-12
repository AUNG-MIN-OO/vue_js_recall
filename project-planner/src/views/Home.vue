<template>
    <div>
        <h1 class="my-3">Home</h1>
        <div v-for="project in projects" :key="project.id">
            <SingleProject :project="project"/>
        </div>
    </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";

export default {
    name: "Home",
    components: {
        SingleProject
    },
    data(){
        return{
            projects : []
        }
    },
    mounted() {
        fetch("http://localhost:3000/projects")
            .then((response)=>{
                return response.json()
            })
            .then((data)=>{
                this.projects = data
            })
            .catch((err)=>console.log(err))
    }
}
</script>

<style scoped>

</style>