let bezoeker = {
    voornaam : prompt("Wat is je naam?"),
    achternaam : prompt("Wat is je achternaam?"),
    leeftijd : prompt("Wat is je leeftijd?"),
    email : prompt("Wat is je email?"),
    woonplaats : prompt("Waar woon je?"),
};
console.log(bezoeker);
if(bezoeker.leeftijd ==16) {
    document.body.style.backgroundColor = 'orange';
}
if(bezoeker.leeftijd ==17) {
    document.body.style.backgroundColor = 'blue';
}
if(bezoeker.leeftijd ==18) {
    document.body.style.backgroundColor = 'gold';
}
if(bezoeker.leeftijd ==0) {
    document.body.style.backgroundColor = 'green';
}
document.querySelector("#voornaam").innerHTML = bezoeker.Voornaam;
document.querySelector("#achternaam").innerHTML = bezoeker.achternaam;
document.querySelector("#leeftijd").innerHTML = bezoeker.leeftijd;
document.querySelector("#woonplaats").innerHTML = bezoeker.Woonplaats;
document.querySelector("#email").innerHTML = bezoeker.Email;
