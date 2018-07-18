var resultat_match = ["victoire","match-nul","defaite"];
var matchs = ["match0","match1","match2","match3"];

var alea = Math.floor(Math.random() * Math.floor(2));
console.log(alea);

var resultats = [];

for (var i = 0; i < matchs.length; i++) {
   resultats[i] = resultat_match[Math.floor(Math.random() * Math.floor(resultat_match.length))];
}
console.log(resultats);


