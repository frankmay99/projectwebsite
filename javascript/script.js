function mytest() {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'https://api.coinpaprika.com/v1/coins');
    httpRequest.send();
}

function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            var coins = JSON.parse(httpRequest.responseText);
            for(i=0; i<5; i++) {
                console.log(coins[i].name)
            }
        } else {
            alert('There was a problem with the request.');
        }
    }
}

function switchToWhite(item) {
    item.style.color = "white";
}

function switchBack(item) {
    item.style.color = "black";
}

var link1 = document.getElementById("about_link");
var link2 = document.getElementById("seperate_link");
var link3 = document.getElementById("translate_link");
var link4 = document.getElementById("covid_link");
var link5 = document.getElementById("style_link");
var link6 = document.getElementById("crypto_link");
var caption1 = document.getElementById("about_caption");
var caption2 = document.getElementById("seperate_caption");
var caption3 = document.getElementById("translate_caption");
var caption4 = document.getElementById("covid_caption");
var caption5 = document.getElementById("style_caption");
var caption6 = document.getElementById("crypto_caption");

link1.addEventListener("mouseover", function() {
    switchToWhite(caption1);
});
link2.addEventListener("mouseover", function() {
    switchToWhite(caption2);
});
link3.addEventListener("mouseover", function() {
    switchToWhite(caption3);
});
link4.addEventListener("mouseover", function() {
    switchToWhite(caption4);
});
link5.addEventListener("mouseover", function() {
    switchToWhite(caption5);
});
link6.addEventListener("mouseover", function() {
    switchToWhite(caption6);
});
link1.addEventListener("mouseleave", function() {
    switchBack(caption1);
});
link2.addEventListener("mouseleave", function() {
    switchBack(caption2);
});
link3.addEventListener("mouseleave", function() {
    switchBack(caption3);
});
link4.addEventListener("mouseleave", function() {
    switchBack(caption4);
});
link5.addEventListener("mouseleave", function() {
    switchBack(caption5);
});
link6.addEventListener("mouseleave", function() {
    switchBack(caption6);
});