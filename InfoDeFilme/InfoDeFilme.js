let btn = document.getElementById("botao1")

btn.onclick = function () {
    let input = document.getElementById("input").value
    let url = "http://www.omdbapi.com/?i=tt3896198&apikey=90a81d4f"

    axios.get(url + "&t=" + input) 
    .then(function(response) {
    console.log(response.data)
    let imagem = document.getElementById("imagem2")
    imagem.setAttribute("src", response.data.Poster)

    let informacoes = document.querySelector("#info").firstChild
    //let texto = document.createTextNode(response.data.Plot)
    informacoes.textContent = response.data.Plot
        
})
}