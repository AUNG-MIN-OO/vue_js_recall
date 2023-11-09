<template>
    <div>
        <h1>How fast can you catch?</h1>
        <button @click="start" :disabled="isPlaying">play</button>
        <div v-if="isPlaying">
            <Block :delay="delay" @endGame="endGame"/>
        </div>
        <div v-if="end">
            <Result :score="score"/>
        </div>
    </div>
</template>

<script>
import Block from "@/components/Block.vue";
import Result from "./components/Result.vue";
export default {
    components : {Block,Result},
    data(){
        return{
            isPlaying : false,
            delay : null,
            score : 0,
            end : false
        }
    },
    methods:{
        start(){
            this.isPlaying = true;
            this.end = false;
            this.delay = 2000 + Math.random()*8000;
        },
        endGame(score){
            this.score = score;
            this.isPlaying = false;
            this.end = true
        }
    }
}
</script>

<style>

body{
    margin: 0;
}

#app{
    width: 100%;
    height: 100%;
    text-align: center;
    padding-top: 50px;
}

</style>