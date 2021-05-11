let url = "http://www.omdbapi.com/?apikey=40078a35";


function start(){
    let search = $("#search").val()
   
    console.log(search)
    $.ajax({url: url+"&s="+ search,
    success: (result)=>{
        console.log(JSON.stringify(result))
    },
    error: ()=>{
        alert("The selected day is not available")
    }
    })
}