// function searchAPI(){
    
//     let search = $("#search").val().trim()
//     $(".searchResult").html("")
//     console.log(search)
//     $.ajax({url: url+"&s="+ search + "&page=" + page,
//     success: (result)=>{
//         console.log(result)
//         if (result.Response == "True"){
//             display(result);
//         }
//         else{
//             if(page == 1)$(".searchResult").html("<h1>Nenhum resultado para essa busca. Tente novamente.</h1>")
//             else $("#nextPg").hide()
//         }
//     },
//     error: ()=>{
//         alert("The selected day is not available")
//     }
//     })
// }

class SearchAPI{
    constructor(){
        this.resposta;
        this.page = 1;
        this.modo = "&s=";
        this.url = "http://www.omdbapi.com/?apikey=40078a35";
    }
    setSearch(search){
        this.search = search
    }
    iniciar(){
        //$(".searchResult").html("")
        let resultado = new Array();
        console.log(this.search)
        let url = this.url+ this.modo + this.search + "&page=" + this.page
        console.log(url)
        $.ajax({url: url,
        
        async: false,
        success: (result)=>{
            console.log(result)
            if (result.Response == "True"){

            //    resultado.push(...result);
            // console.log(result)

               gambiarraAsync(result)
            }
            else{
                if(page == 1)$(".searchResult").html("<h1>Nenhum resultado para essa busca. Tente novamente.</h1>")
                else $("#nextPg").hide()
            }
        },
        error: ()=>{
            alert("The selected day is not available")
        }
        })
        this.resposta = resultado 
        // console.log(this.resposta)
    }

}