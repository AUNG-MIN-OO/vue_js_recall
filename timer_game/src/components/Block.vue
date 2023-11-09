<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        <p>click here {{delay}}</p>
    </div>
</template>

<script>
export default {
    props : ['delay'],
    data(){
        return{
            showBlock : false,
            score : 0,
            timer : null,
        }
    },
    mounted() {
        setTimeout(()=>{
            this.showBlock = true;
            this.startTimer();
        },this.delay)
    },
    methods:{
        startTimer(){
            this.timer = setInterval(()=>{
                this.score += 10;
            },10)
        },
        stopTimer(){
            clearInterval(this.timer);
            this.$emit("endGame",this.score);
        }
    }
}
</script>

<style scoped>
    .block{
        text-align: center;
        width: 300px;
        height: 300px;
        margin: 20px auto;
        border-radius: 15px;
        background-color: mediumpurple;
        padding: 20px;
        color: white;
    }
</style>