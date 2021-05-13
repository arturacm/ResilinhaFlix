$(`#botao1`).click(function() {

        $.ajax({
            url: 'https://m.media-amazon.com/images/M/MV5BMGY5MzU3MzItNDBjMC00YjQzLWEzMTUtMGMxMTEzYjhkMGNkXkEyXkFqcGdeQXVyNDE5MTU2MDE@._V1_SX300.jpg',

            success: function(result) {

            if(result.media_type == '"image"'){


                $('#info').html(result.explanation);
    
                $('#foto').html(`<img src="${result.url}">`);
    
                $('#copyright').html(result.copyright);
            }

            else{
    
                $('#info').html(result.explanation);
    
                $('#foto').html(`<iframe src="${result.url}">`)
    
                $('#copyright').html(result.copyright);
            }
            }

        })
});

    