var app= new Vue({
    el : '#root',
    data : {
        apiKey : 'a4ea26af321c4cf77360180c2fb6b66c',
        searchbar :'',
        userResearchResults:[],
        starNumber : 5
    },
    methods : {
        userResearch(){
            // let searchedMovies= [];
            // let searchedSeries = [];
            // RICERCA TRA I MOVIES---------------------------------
            axios
            // .get('https://api.themoviedb.org/3/search/movie?api_key=a4ea26af321c4cf77360180c2fb6b66c&query='+this.searchbar)
                .get('https://api.themoviedb.org/3/search/movie',
                    {params : {
                        api_key : this.apiKey,
                        query : this.searchbar
                    }})
                .then((searchedMovieList)=>{
                    // console.log(searchedMovieList.data.results)
                    this.userResearchResults = searchedMovieList.data.results;
                    // console.log(this.searchedMovies)

                    // tentativo concat
                    // searchedMovies = searchedMovieList.data.results;
                    // console.log(searchedMovies)
                });

            // RICERCA TRA LE SERIES---------------------------
            axios
                .get('https://api.themoviedb.org/3/search/tv',
                    {params : {
                        api_key : this.apiKey,
                        query: this.searchbar
                    }})
                .then((searchedSeriesList)=>{
                    // console.log(searchedSeriesList);

                    // tentativo concat
                    // searchedSeries = searchedSeriesList.data.results;
                    // console.log(searchedSeries)
                });
        },
        starVote(vote_average){
            return Math.ceil(vote_average * this.starNumber / 10)
        }
    }
})

// Milestone 2:
//2.1.1 Trasformiamo il voto da 1 a 10 decimale in un numero intero da 1 a 5, così da permetterci di 
// 2.1.2 stampare a schermo un numero di stelle piene che vanno da 1 a 5, lasciando le restanti vuote (troviamo le icone in FontAwesome).
// Arrotondiamo sempre per eccesso all’unità successiva, non gestiamo icone mezze piene (o mezze vuote :P)



// 2.2 Trasformiamo poi la stringa statica della lingua in una vera e propria bandiera della nazione corrispondente, gestendo il caso in cui non abbiamo la bandiera della nazione ritornata dall’API (le flag non ci sono in FontAwesome).

// 2.3 Allarghiamo poi la ricerca anche alle serie tv. Con la stessa azione di ricerca dovremo prendere sia i film che corrispondono alla query, sia le serie tv, stando attenti ad avere alla fine dei valori simili (le serie e i film hanno campi nel JSON di risposta diversi, simili ma non sempre identici)
// Qui un esempio di chiamata per le serie tv:
// https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=it_IT&query=scrubs
