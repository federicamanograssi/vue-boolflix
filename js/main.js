var app= new Vue({
    el : '#root',
    data : {
        apiKey : 'a4ea26af321c4cf77360180c2fb6b66c',
        searchbar :'',
        userResearchResults:[],
        starNumber : 5,
        imgMovieSrc:'https://image.tmdb.org/t/p/',
        imgMovieSize:'w342'
    },
    methods : {
        userResearch(){
            this.userResearchResults = [];
            let searchedMovies= [];
            let searchedSeries = [];

            // RICERCA TRA I MOVIES---------------------------------
            axios
            // .get('https://api.themoviedb.org/3/search/movie?api_key=a4ea26af321c4cf77360180c2fb6b66c&query='+this.searchbar)
                .get('https://api.themoviedb.org/3/search/movie',
                    {params : {
                        api_key : this.apiKey,
                        query : this.searchbar
                    }})
                .then((searchedMovieList)=>{

                    searchedMovies = searchedMovieList.data.results;
                    this.userResearchResults = this.userResearchResults.concat(searchedMovies)
                });

            // RICERCA TRA LE SERIES---------------------------
            axios
                .get('https://api.themoviedb.org/3/search/tv',
                    {params : {
                        api_key : this.apiKey,
                        query: this.searchbar
                    }})
                .then((searchedSeriesList)=>{
                    // console.log(searchedSeriesList)
                    searchedSeries = searchedSeriesList.data.results;
                    this.userResearchResults= this.userResearchResults.concat(searchedSeries)
                });
            
        },
        starVote(vote_average){
            return Math.ceil(vote_average * this.starNumber / 10)
        }
    }
})
