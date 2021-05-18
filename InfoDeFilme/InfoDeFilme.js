let btn = document.getElementById("botao1")

btn.onclick = function () {
    let input = document.getElementById("input").value
    let url = "http://www.omdbapi.com/?apikey=90a81d4f"

    axios.get(url + "&t=" + input) 
    .then(function(response) {
    console.log(response.data)
    let imagem = document.getElementById("imagem2")
    imagem.setAttribute("src", response.data.Poster)


    let title = document.getElementById("titulo")
    title.textContent = response.data.Title

    let year = document.getElementById("ano")
    year.textContent = 'lançamento: ' + response.data.Released

    let informacoes = document.querySelector("#info").firstChild
    informacoes.textContent = 'Descrição: ' + response.data.Plot

    let rated = document.getElementById("classificacao")
    rated.textContent = 'Classificação: ' + response.data.Rated

    let genre = document.getElementById("genero")
    genre.textContent = 'Gênero: ' + response.data.Genre
    
    let runtime = document.getElementById("duracao")
    runtime.textContent = 'Duração: ' + response.data.Runtime

        
})
}