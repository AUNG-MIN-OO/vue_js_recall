const app = Vue.createApp({
    data(){
        return{
            title : "You don't know js",
            author : "Aung Min Oo",
            authorAge : 25,
            showBook : true
        }
    },
    methods : {
        changeAuthorName(){
            this.author = "Sayar Aung"
        }
    }
});

app.mount('#app');