var pageCounter = 1;
var animalContainer = document.getElementById('animal-info');
var btn = document.getElementById('btn');

btn.addEventListener('click', function () {
    // Create XMLHttpRequest() object to send a request to Web server
    var ourRequest = new XMLHttpRequest();

    //use GET method to receive or download data from web server
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');

    //onLoad: what should happen once the data is loaded
    ourRequest.onload = function () {

        //Json.parse: data from server is always a string, parse the data to JS object
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTMl(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter > 3){
        btn.classList.add("hide-me");
    }
});

function renderHTMl(data){
    var htmlString = '';

    for (let i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is the " + data[i].species + " that likes to eat ";

        for (let j = 0; j < data[i].foods.likes.length; j++) {
            if(j == 0){
                htmlString += data[i].foods.likes[j];
            }else{
                htmlString += " and " + data[i].foods.likes[j];
            }   
            
        }

        htmlString += " and dislikes ";

        for (let j = 0; j < data[i].foods.dislikes.length; j++) {
            if(j == 0){
                htmlString += data[i].foods.dislikes[j];
            }else{
                htmlString += " and " + data[i].foods.dislikes[j];
            }   
            
        }
        htmlString += '</p>';
    }

    //insert a text as HTML: 
    animalContainer.insertAdjacentHTML('beforeend', htmlString);

}




