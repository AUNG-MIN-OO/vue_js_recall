<template>
    <NavBar/>
    <router-view/>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    max-width: 600px;
    margin: 0 auto;
}
</style>
<script setup>
import NavBar from "@/components/NavBar.vue";
</script>