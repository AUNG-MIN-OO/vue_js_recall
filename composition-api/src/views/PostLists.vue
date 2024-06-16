<template>
    <div v-for="post in posts">
        <router-link :to="{name : 'details', params : {id:post.id}}">
            <h1>{{post.title}}</h1>
        </router-link>
        <h2>{{post.body}}</h2>
    </div>
</template>

<script>
    export default {
        props : ['posts']
    }
</script>

<style>

</style>