let dateJour = document.querySelector('.date-element');
    // Date
let today = new Date(),
    jourSemaine = today.getDay(),
    nombre = today.getDate(),
    mois = today.getMonth(),
    annee = today.getFullYear();
switch (jourSemaine) {
    case 1: dateJour.innerText = "Lundi"; break;
    case 2: dateJour.innerText = "Mardi"; break;
    case 3: dateJour.innerText = "Mercredi"; break;
    case 4: dateJour.innerText = "Jeudi"; break;
    case 5: dateJour.innerText = "Vendredi"; break;
    case 6: dateJour.innerText = "Samedi"; break;
    case 0: dateJour.innerText = "Dimanche"; break;
    default: dateJour.innerText = "Erreur";
}
dateJour.innerText += ' ' + nombre;
switch (mois) {
    case 0: dateJour.innerText += " Janvier"; break;
    case 1: dateJour.innerText += " Février"; break;
    case 2: dateJour.innerText += " Mars"; break;
    case 3: dateJour.innerText += " Avril"; break;
    case 4: dateJour.innerText += " Mai"; break;
    case 5: dateJour.innerText += " Juin"; break;
    case 6: dateJour.innerText += " Juillet"; break;
    case 7: dateJour.innerText += " Août"; break;
    case 8: dateJour.innerText += " Septembre"; break;
    case 9: dateJour.innerText += " Octobre"; break;
    case 10: dateJour.innerText += " Novembre"; break;
    case 11: dateJour.innerText += " Décembre"; break;
    default: ddateJour.innerText += " Erreur";
}
dateJour.innerText += ' ' + annee;
