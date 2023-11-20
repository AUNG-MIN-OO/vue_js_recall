<template>
  <div id="nav">
    <router-link :to="{name : 'Home'}">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/jobs">Jobs</router-link>
  </div>
  <router-view/>
    <button class="btn btn-primary btn-sm rounded mx-2 mt-3" @click="goForward">Go Forward</button>
    <button class="btn btn-primary btn-sm rounded mx-2 mt-3" @click="redirect">Redirect</button>
    <button class="btn btn-primary btn-sm rounded mx-2 mt-3" @click="goBack">Go Backward</button>
</template>

<script>
export default {
    methods : {
        goBack(){
            this.$router.go(-1)
        },
        goForward(){
            this.$router.go(+1)
        },
        // redirect
        redirect(){
            this.$router.push({name:'Home'});
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>