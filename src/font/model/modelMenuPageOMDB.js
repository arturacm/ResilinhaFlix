var url = "https://www.omdbapi.com/?apikey=40078a35";


// Segunda parte: faz a requisição pela API e retorna o objeto
function searchAPImainPage(search, location){
    console.log(search, location)
    $.ajax({url: url+"&s="+ search,
    success: (result)=>{
        console.log(result)
        if (result.Response == "True"){
            displayMenuPage(result, location);
        }
        else{
            console.log("algo de errado nao esta certo")
        }
    },
    error: ()=>{
        alert("The selected day is not available")
    }
    })
}