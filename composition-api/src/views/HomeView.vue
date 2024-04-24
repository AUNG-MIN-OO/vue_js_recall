<template>
    <div>
        <div v-if="error">
            <p>{{error}}</p>
        </div>
        <h1>Post Lists</h1>
        <div v-if="posts.length>0">
            <PostLists :posts="posts"/>
        </div>
        <div v-else>
            loading ...
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import PostLists from "@/views/PostLists.vue";
export default {
    components: {PostLists},
    setup() {
        let posts = ref([]);
        let error = ref("");

        let load = async()=>{
            try {
                let response = await fetch("http://localhost:3000/posts")
                if (response.status === 404) {
                    throw new Error("not found url");
                }
                let datas = await response.json();
                posts.value = datas
            }
            catch(err){
                error.value = err.message
            }
        }
        load()
        return {posts,error};
    }
}
</script>

<style>

</style>