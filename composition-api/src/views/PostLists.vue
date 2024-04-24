<template>
    <div v-for="post in posts">
        <h1>{{post.title}}</h1>
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