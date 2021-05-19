let btn = document.getElementById("botao1")

//tirando o botao e 
document.addEventListener("DOMContentLoaded", function () {
    // console.log(localStorage.getItem("movieID"))
    //let input = document.getElementById("input").value
    let input = localStorage.getItem("movieID")
    let url = "http://www.omdbapi.com/?apikey=90a81d4f"

    axios.get(url + "&i=" + input) 
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
})
