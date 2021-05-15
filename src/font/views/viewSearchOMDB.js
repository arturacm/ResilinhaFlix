function display(obj){
    $("#nextPg").show()
    //obj.Search[i].title
    if(page == 1) $("#prevPg").hide()
    else $("#prevPg").show()
    
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title)
        $(".searchResult").append(`<div class="searchResultItem"><img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} "><h3>${obj.Search[i].Title} </h3></div>`)
            //obj.Search[i].Title
    }
}