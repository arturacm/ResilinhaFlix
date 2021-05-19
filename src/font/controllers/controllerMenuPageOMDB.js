class MenuPageController{
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
   
    

}

function asyncFixMenuPage(obj){
    console.log(obj);
    
    // [].view.display(obj);

}