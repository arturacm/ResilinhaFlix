//Terceira parte: renderiza o resultado na tela a partir do local informado.
function displayMenuPage(obj, location){
    console.log(location)
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title)
        $(location).slick('slickAdd',`<div class="imagens-slick" ondblclick = "redirect('${obj.Search[i].imdbID}')"><img src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} "></div>`)
            //obj.Search[i].Title
    }
    console.log("got here")
}

// Primeira parte: chama as funções quando a pagina carrega. Manda o parametro de busca e o local que deve ser renderizado
document.addEventListener("DOMContentLoaded", ()=>{
    searchAPImainPage("mickey's","#mickey")
    searchAPImainPage("barbie","#Barbie")
})