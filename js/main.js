var app= new Vue({
    el : '#root',
    data : {
        searchbar :'',
        searchedMovies:[]
    },
    methods : {
        searchMovie(){
            axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=a4ea26af321c4cf77360180c2fb6b66c&query='+this.searchbar)
            .then((searchedMovieList)=>{
                console.log(searchedMovieList.data.results)
                this.searchedMovies = searchedMovieList.data.results;
                console.log(this.searchedMovies)
            })
        }
    }
})