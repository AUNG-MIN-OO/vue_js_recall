<template>
    <div v-if="post">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
    </div>
    <div v-else>
        <h1>loading...</h1>
    </div>
</template>

<script>

    import getSinglePost from "@/composables/getSinglePost";

    export default {
        props : ['id'],
        setup(props){
            let {post,error,load} = getSinglePost(props.id);
            load();
            return {post,error}
        }
    }
</script>

<style lang="scss">

</style>