let url = "http://www.omdbapi.com/?apikey=40078a35";
var page = 0;

function start(){
    page = 1;
    let search = $("#search").val().trim()
    $(".searchResult").html("")
    console.log(search)
    $.ajax({url: url+"&s="+ search,
    success: (result)=>{
        console.log(result)
        display(result);
    },
    error: ()=>{
        alert("The selected day is not available")
    }
    })
}

function display(obj){
    //obj.Search[i].title
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title)
        $(".searchResult").append(`<img src="${obj.Search[i].Poster}">`)
            //obj.Search[i].Title
    }
}

function nextPage(){

    $.ajax({url: url+"&s="+ search,
    success: (result)=>{
        console.log(result)
        display(result);
    },
    error: ()=>{
        alert("The selected day is not available")
    }
    })
}