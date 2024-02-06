<template>
    <nav class="mt-5 text-center">
        <router-link to="/" class="me-3">Home</router-link>
        <router-link :to="{name : 'AddProject'}">Add Project</router-link>
    </nav>
</template>

<script setup>

</script>

<style scoped>
    a{
        text-decoration: none;
    }
    a.router-link-active{
        background: #2c3e50;
        color: white;
        padding: 5px 8px;
        border-radius: 15px;
    }
</style>