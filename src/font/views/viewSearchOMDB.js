function display(obj){
    $("#nextPg").show()
    //obj.Search[i].title
    if(page == 1) $("#prevPg").hide()
    else $("#prevPg").show()
    
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title)
        $(".searchResult").append(`
        <div onclick = "redirect('${obj.Search[i].Title}')" class="searchResultItem">
        <img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">
        <h3>${obj.Search[i].Title} </h3>
        </div>`)
            //obj.Search[i].Title
    }
}
function redirect (id){
    
    localStorage.setItem("movieID",id)
    // alert(localStorage.getItem("movieID"));
    window.location.href="./InfoDeFilme/InfoDeFilme.html" 
    
    
}

class SearchView{
    constructor(){
        this.page = 1;
    }
    display(obj){
        // alert("cheguei aqui")
        $("#nextPg").show()
        //obj.Search[i].title
        if(this.page == 1) $("#prevPg").hide()
        else $("#prevPg").show()
        
        for(let i = 0; i < obj.Search.length; i++){
            //console.log(obj.Search[i].Title)
            $(".searchResult").append(`
            <div onclick = "redirect('${obj.Search[i].Title}')" class="searchResultItem">
            <img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">
            <h3>${obj.Search[i].Title} </h3>
            </div>`)
                //obj.Search[i].Title
        }
    }
}