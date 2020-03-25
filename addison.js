//create request as a function
function getItems(requestURL) {
  //request the json file
  let request = new XMLHttpRequest();
  //return it as a promise
  return new Promise(function (resolve, reject) {
    //try to get the objects
    try {
      //take the request
      request.open('GET', requestURL);
      request.responseType = 'json';
      request.send();

      //load the json file
      request.onload = function () {
        let addisonJson = request.response;
        resolve(addisonJson);
      };
    } catch (e) {
      //catch and reject any errors
      reject(e);
    }
  });
}

//call the request
getItems('https://skyflocodes.github.io/JSON/Addison.json')
  .then(function(value){
    //display the itemss
    addisonItems(value);
  })
  .catch(function(e){
    console.log(e);
  });

function addisonItems(jsonObj) {

  //declare the addison items
  let addisonItems = jsonObj.addisonItems;

  //for loop to print all the items in thejson file
  for (let i = 0; i < addisonItems.length; i++) {

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
