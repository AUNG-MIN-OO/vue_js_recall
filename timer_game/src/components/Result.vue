<template>
    <div>
        <p>Your Score is {{score}} ms</p>
        <div v-if="score<10">
            <h3>You are God of click</h3>
        </div>
        <div v-else-if="score<100">
            <h3>You have average speed of click</h3>
        </div>
        <div v-else>
            <h3>Slow Man! You like a kid :)</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "Result",
    props : ["score"]
}
</script>

<style scoped>

</style>