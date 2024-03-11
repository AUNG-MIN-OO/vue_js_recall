<template>
    <div>
        <h1 class="mt-5 mb-4">Home</h1>
        <FilterNav @filterValue="currentFilterValue=$event" :currentFilterValue="currentFilterValue"/>
        <div v-for="project in filteredProjects" :key="project.id">
            <SingleProject :project="project" @delete="deleteProject" @complete="completeProject"/>
        </div>
    </div>
</template>

<script>
import SingleProject from "@/components/SingleProject.vue";
import FilterNav from "@/components/FilterNav.vue";

export default {
    name: "Home",
    components: {
        FilterNav,
        SingleProject
    },
    data(){
        return{
            projects : [],
            currentFilterValue : "all",
        }
    },
    methods : {
        deleteProject(id){
            this.projects = this.projects.filter(project=>{
                return project.id!==id;
            })
        },
        completeProject(id){
            let findProject = this.projects.find(project=>{
                return project.id === id;
            })
            findProject.complete =! findProject.complete
        }
    },
    computed: {
        // project completed
        filteredProjects(){
            if (this.currentFilterValue==="ongoing"){
                return this.projects.filter((project)=>{
                    return !project.complete;
                })
            }else if (this.currentFilterValue==="complete"){
                return this.projects.filter((project)=>{
                    return project.complete;
                })
            }else {
                return this.projects
            }
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