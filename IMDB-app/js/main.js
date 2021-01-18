$(document).ready(function(){
    $("#movieForm").submit(function(event){
        event.preventDefault();
        
        var apiKey = "e5cf5977";
        var url = "http://www.omdbapi.com/?apikey=" + apiKey + "&";
        
        var result = "";
        var movie = $("#movie").val();

        $.ajax({
            method: "GET",
            url: url + "t=" + movie,
            success: function(data){
                console.log(data);

                result = `
                
                <img id="trailer" src="${data.Poster}"/>
                <h2 id="year" class="text"> Date released: ${data.Year}</h2>
                <h2 id="director" class="text"> Director: ${data.Director}</h2>
                <h2 id="genre" class="text"> Genre: ${data.Genre}</h2>
                <h2 id="runtime" class="text"> Runtime: ${data.Runtime}</h2>
                <h2 id="rating" class="text"> IMBd rating: ${data.imdbRating}</h2>

                
                
                <button id="nominateButton"onclick="nom()">Nominate</button>
                 
                

                `;
                $("#result").html(result);
            }

        })


    })/*
    $("#nominateForm").submit(function(event){
        event.preventDefault();
        var image = document.getElementById("trailer").src;
        var pic =""

        pic = ` <img id="nom" src="${image}"/> `;
        
        
        $("#photoNominate").html(pic);
        console.log(pic);


    }) 
    var button = document.getElementById("nominateForm");

    function nom(){
        
        var image = document.getElementById("trailer").src;
        var pic =""

        pic = ` <img id="nom" src="${image}"/> `;
        
        
        $("#photoNominate").html(pic);
    }
      */  

  })
/*var div = document.getElementById("photoNominate");*/
var nominees = [];
function nom(){
    
    if(nominees.length < 5){
        

        var image = document.getElementById("trailer").src;
        nominees.push(image);
        console.log(nominees);
        var output ="";

        if(nominees.length ==5){
            
            complete = `images/nominated.png`;
            nominees.push(complete);
            console.log(nominees);
        }

        $.each(nominees, function(index, value){

            

            output += ` 
            
            <div class="col-md-4">
                <div class="well text-center">
                    <img  class="nominated" src="${value}"/>
                    
                </div>


            </div>
            
            
            
            
            `;
            
            });
        

        $("#photoNominate").html(output);
    } 
          
}

