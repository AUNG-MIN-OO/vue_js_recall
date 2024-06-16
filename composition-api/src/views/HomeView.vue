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
import PostLists from "@/views/PostLists.vue";
import getPosts from "../composables/getPosts";
export default {
    components: {PostLists},
    setup() {
        let {posts,error,load} = getPosts();
        load();
        return {posts,error};
    }
}
</script>

<style>

</style>