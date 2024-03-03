<template>
    <div>
        <h1 class="my-5">Add New Project</h1>
        <div class="card mb-3 shadow-sm border-0">
            <div class="card-body bg-light">
                <form @submit.prevent="addProject">
                    <div class="mb-3">
                        <label for="title" class="form-label">Project Title</label>
                        <input type="text" class="form-control" id="title" aria-describedby="titleHelp" v-model="title">
                    </div>
                    <div class="mb-3">
                        <label for="detail" class="form-label">Detail</label>
                        <input type="text" class="form-control" id="detail" v-model="detail">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                title : "",
                detail : "",
            }
        },
        methods:{
            addProject(){
                fetch("http://localhost:3000/projects",{
                    method : "POST",
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body : JSON.stringify({
                        title : this.title,
                        detail : this.detail,
                        complete : false
                    })
                })
                    .then(()=>{
                        this.$router.push("/");
                    })
                    .catch((err)=>console.log(err))
                // console.log(this.title, this.detail)
            }
        }
    }
</script>

<style scoped>

</style>