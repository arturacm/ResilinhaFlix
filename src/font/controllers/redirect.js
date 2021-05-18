function redirect(id) {

    localStorage.setItem("movieID", id)
    // alert(localStorage.getItem("movieID"));
    window.location.href = "./InfoDeFilme/InfoDeFilme.html"


}