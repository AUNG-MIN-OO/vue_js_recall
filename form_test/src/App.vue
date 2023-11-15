<template>
    <div>
        <h1 class="text-center my-5">Sign Up Form</h1>
        <SignUp/>
    </div>
</template>

<script>

import {defineComponent} from "vue";
import SignUp from "@/components/SignUp.vue";

export default defineComponent({
    components: {SignUp}
})
</script>

<style>

body{
    margin: 0;
}

</style>