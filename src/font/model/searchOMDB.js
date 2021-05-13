function searchAPI(){
    
    let search = $("#search").val().trim()
    $(".searchResult").html("")
    console.log(search)
    $.ajax({url: url+"&s="+ search + "&page=" + page,
    success: (result)=>{
        console.log(result)
        if (result.Response == "True"){
            display(result);
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
}