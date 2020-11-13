var req= new XMLHttpRequest();
req.open('GET', 'https://restcountries.eu/rest/v2/all', true);
req.send();
req.onload=function(){
    var Jesus=JSON.parse(this.response);
    console.log(Jesus);
    let arrayform=Jesus;
    for(let i=0;i<arrayform.length;i++)
    console.log(arrayform[i].flag);

}