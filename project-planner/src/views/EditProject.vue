<template>
    <div>
        <h1 class="my-5">Edit Project</h1>
        <div class="card mb-3 shadow-sm border-0">
            <div class="card-body bg-light">
                <form @submit.prevent="updateProject">
                    <div class="mb-3">
                        <label for="title" class="form-label">Project Title</label>
                        <input type="text" class="form-control" id="title" aria-describedby="titleHelp" v-model="title">
                    </div>
                    <div class="mb-3">
                        <label for="detail" class="form-label">Detail</label>
                        <input type="text" class="form-control" id="detail" v-model="detail">
                    </div>
                    <button type="submit" class="btn btn-primary" @click="updateProject">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import {errorMessages} from "@vue/compiler-sfc";

    export default {
        props : ['id'],
        data() {
            return{
                title : '',
                detail : '',
            }
        },
        mounted() {
            fetch('http://localhost:3000/projects/'+this.id)
                .then((res)=>{
                    return res.json();
                })
                .then((data)=>{
                    this.title = data.title;
                    this.detail = data.detail;
                })
                .catch((err)=>console.log(err))
        },
        methods: {
            updateProject(){
                fetch('http://localhost:3000/projects/'+this.id,{
                    method : "PATCH",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify(
                        {
                            title : this.title,
                            detail : this.detail
                            }
                        )
                })
                    .then(()=>{
                        this.$router.push("/");
                    })
                    .catch((err)=>console.log(err))
            }
        }
    }
</script>

<style scoped>

</style>