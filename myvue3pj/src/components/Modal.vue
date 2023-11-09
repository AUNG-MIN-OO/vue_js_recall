<template>
    <div class="backdrop" @click.self="closeModal">
        <div class="modal" :class="{success:theme==='success',fail:theme==='fail'}">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
    props : ['header','content','theme'],
    methods:{
        closeModal(){
            this.$emit("closeModal");
        }
    }
}
</script>

<style scoped>
    .backdrop{
        background: rgba(0,0,0,0.5);
        min-height: 100%;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .modal{
        text-align: center;
        width: 400px;
        height: auto;
        margin: 100px auto;
        border-radius: 15px;
        background-color: white;
        padding: 20px;
    }
    .success{
        background-color: limegreen;
        color: white;
    }
    .fail{
        background-color: red;
        color: white;
    }
</style>