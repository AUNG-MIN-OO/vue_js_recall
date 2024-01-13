<template>
    <div>
        <h1 class="my-3">Home</h1>
        <div v-for="project in projects" :key="project.id">
            <SingleProject :project="project" @delete="deleteProject"/>
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
    methods : {
        deleteProject(id){
            this.projects = this.projects.filter(project=>{
                return project.id!=id;
            })
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