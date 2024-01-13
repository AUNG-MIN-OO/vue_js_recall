<template>
    <div class="card mb-3 shadow-sm" :class="{complete : project.complete}">
        <div class="card-body bg-light">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h3 class="text-primary text-capitalize fw-bold" @click="showDetails=!showDetails">
                        {{project.title}}
                    </h3>
                </div>
                <div>
                    <i class="bi bi-trash me-2 text-danger fs-4" @click="deleteProject"></i>
                    <i class="bi bi-pencil-square text-warning me-2 fs-4"></i>
                    <i class="bi bi-check-circle-fill text-success me-2 fs-4" @click="project.complete=!project.complete"></i>
                </div>
            </div>
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
            api : "http://localhost:3000/projects"
        }
    },
    methods: {
        deleteProject(){
            let deleteRoute = this.api+"/"+this.project.id;
            fetch(deleteRoute,{method : "DELETE"})
                .then(()=>{
                    this.$emit("delete",this.project.id)
                })
                .catch((err)=>{console.log(err)})
        }
    }
}
</script>

<style scoped>
    .card{
        border-width: 0 0 0 5px;
        border-color: red;
    }
    h3, i{
        cursor: pointer;
    }
    .complete{
        border-color: limegreen;
    }
</style>