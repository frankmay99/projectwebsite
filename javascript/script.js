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

