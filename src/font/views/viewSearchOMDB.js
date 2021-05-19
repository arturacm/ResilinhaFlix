// function display(obj){
//     $("#nextPg").show()
//     //obj.Search[i].title
//     if(page == 1) $("#prevPg").hide()
//     else $("#prevPg").show()

//     for(let i = 0; i < obj.Search.length; i++){
//         //console.log(obj.Search[i].Title)
//         $(".searchResult").append(`
//         <div onclick = "redirect('${obj.Search[i].Title}')" class="searchResultItem">
//         <img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">
//         <h3>${obj.Search[i].Title} </h3>
//         </div>`)
//             //obj.Search[i].Title
//     }
// }

class SearchView {
    constructor() {
        this.page = 1;
    }
    display(obj) {
        
        //limpa todos os resultados
        $(".searchResult").html("")

        //se a requisição da API trouxe filmes...
        if (obj.Response == "True") {

            //esconder o botao de próximo para quando a API trouxer menos de 10 filmes
            if(obj.Search.length<10)$("#nextPg").hide();
            else $("#nextPg").show();

            //pagina anterior mostra/esconde
            if (this.page == 1) $("#prevPg").hide()
            else $("#prevPg").show();

            //mostrar todos os filmes na pagina
            for (let i = 0; i < obj.Search.length; i++) {

                $(".searchResult").append(`
                <div onclick = "redirect('${obj.Search[i].imdbID}')" class="searchResultItem">
                <img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">
                <h3>${obj.Search[i].Title} </h3>
                </div>`)
            }
        //caso não tenha trazido filmes
        } else {
           
            if (this.page == 1) $(".searchResult").html("<h1>Nenhum resultado para essa busca. Tente novamente.</h1>")
            
            else $("#nextPg").hide()
        }
    }
}