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





