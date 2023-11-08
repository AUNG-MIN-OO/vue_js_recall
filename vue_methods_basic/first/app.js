const app = Vue.createApp({
    data(){
        return{
            books : [
                {
                    title : "You don't know js",
                    author : "Aung Min Oo",
                    authorAge : 25,
                    img : "../../img/plate1.png",
                    isFavourite : true
                },
                {
                    title : "You don't know Laravel",
                    author : "Aung Min Oo",
                    authorAge : 25,
                    img : "../../img/plate2.png",
                    isFavourite : true
                },
                {
                    title : "You don't know Php",
                    author : "Aung Min Oo",
                    authorAge : 25,
                    img : "../../img/plate3.png",
                    isFavourite : true
                }
            ],
            showBook : true,
            link : "https://www.google.com",
        }
    },
    methods : {
        changeAuthorName(){
            this.author = "Sayar Aung"
        }
    },
    computed : {
        filteredBooks (){
            return this.books.filter(book=>{
                return book.isFavourite;
            })
        }
    }
});

app.mount('#app');