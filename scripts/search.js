let url = "http://www.omdbapi.com/?apikey=40078a35";
var page = 0;

function start(){
    page = 1;
    searchAPI();
    
}
function nextPage(){
    page++;
    searchAPI();
}
function prevPage(){
    if(page>1){
        page--;
        searchAPI();
    }
}
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

function display(obj){
    $("#nextPg").show()
    //obj.Search[i].title
    if(page == 1) $("#prevPg").hide()
    else $("#prevPg").show()
    
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title)
        $(".searchResult").append(`<img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">`)
            //obj.Search[i].Title
    }
}


