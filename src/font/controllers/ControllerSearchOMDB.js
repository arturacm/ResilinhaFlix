// let url = "http://www.omdbapi.com/?apikey=40078a35";
// var page = 0;

// function start(){
//     page = 1;
//     searchAPI();
    
// }
// function nextPage(){
//     page++;
//     searchAPI();
// }
// function prevPage(){
//     if(page>1){
//         page--;
//         searchAPI();
//     }
// }

class SearchController{
    constructor(model, view){
        this.model = model;
        this.view = view;
    }
    start(){
        this.model.setSearch($("#search").val().trim())
        this.model.page = 1;
        this.view.page = 1;
        this.model.iniciar();
        // this.view.display(this.model.resposta)
    
    }
    nextPage(){
        this.model.page++;
        this.view.page++;
        this.model.iniciar()
        // this.view.display(this.model.resposta)

    }

    prevPage(){
        if(this.model.page>1){
            this.model.page--;
            this.view.page--;
            this.model.iniciar()
            //this.view.display(this.model.resposta)
        }
    }

}

function asyncFix(obj){
    console.log(obj);
    
    searchController.view.display(obj);

}


