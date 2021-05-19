//Terceira parte: renderiza o resultado na tela a partir do local informado.
function displayMenuPage(obj, location){
    console.log(location)
    for(let i = 0; i < obj.Search.length; i++){
        //console.log(obj.Search[i].Title) ${obj.Search[i].imdbID}
        $(location).slick('slickAdd',`
        <div class="imagens-slick" onclick = 'infoModal("${obj.Search[i].imdbID}","${obj.Search[i].Poster}")'>
        <img data-bs-toggle="modal" data-bs-target="#infoModal"src="${obj.Search[i].Poster}" alt = "${obj.Search[i].Title} ">
        </div>
        `)
            //obj.Search[i].Title
    }
    console.log("got here")
}

// Primeira parte: chama as funções quando a pagina carrega. Manda o parametro de busca e o local que deve ser renderizado
document.addEventListener("DOMContentLoaded", ()=>{
    searchAPImainPage("mickey's","#mickey")
    searchAPImainPage("barbie","#Barbie")
})

function infoModal(id, poster, title){
    //$("#modalLabel").html(id)
    $(".modal-body").html(`
    <img onclick= 'redirect("${id}")'src="${poster}" alt = "${id}">
    <button onclick= 'redirect("${id}")' class="btn-cor2"  role="button" >Mais Informações</button>
    `)
    

}