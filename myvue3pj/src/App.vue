<template>
    <h1 ref="greet">hello</h1>
    <div v-if="showModal1">
        <Modal :theme="theme1" @closeModal="showModal1=false">
            <h1>{{ header }}</h1>
            <p>{{ content }}</p>
        </Modal>
    </div>
    <button @click="showModal1=true">success</button>
    <div v-if="showModal2">
        <Modal :theme="theme2" @closeModal="showModal2=false">
            <h1>Something went wrong</h1>
            <p>please try again later</p>
        </Modal>
    </div>
    <button @click="showModal2=true">fail</button>
</template>

<script>
import Modal from "@/components/Modal.vue";
export default {
    components : {Modal},
    data(){
        return{
            header : "Login Success",
            content : "Welcome from my website :3",
            theme1 : "success",
            theme2: "fail",
            showModal1 : false,
            showModal2 : false,
        }
    },
    methods : {

    }
}
</script>

<style scoped>
h1{
    color: purple;
}
</style>