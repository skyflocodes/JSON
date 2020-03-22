//request the json file
let requestURL = 'https://skyflocodes.github.io/JSON/Addison.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json'; 
request.send();

//load the json file
request.onload = function() {
  let addisonJson = request.response;
  addisonItems(addisonJson); 
};

function addisonItems(jsonObj) {
  
  //declare the addison items
  let addisonItems = jsonObj.addisonItems; 
  
  //for loop to print all the items in thejson file
  for(let i = 0; i < addisonItems.length; i++) { 

    //select the body of the index.html
    let body = document.querySelector('body'); 

    //add the name of item as header
    let h2 = document.createElement("h2");
    h2.textContent = addisonItems[i].name; 
    body.appendChild(h2);

    //add the produst image
    let img = document.createElement("img");
    img.setAttribute("src", 'https://skyflocodes.github.io/JSON/Bedcovers/' + addisonItems[i].image); 
    img.setAttribute("alt", addisonItems[i].image); 
    body.appendChild(img);

    //add the description and price
    let p = document.createElement("p");
    p.textContent = "Price: $" + addisonItems[i].price + "\n" + "Details: " + addisonItems[i].details;
    body.appendChild(p);
  }
 
}
