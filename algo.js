/*Écrire un algorithme qui calcule la moyenne des éléments d'un tableau d'entiers donné.

Initialiser la variable somme à 0.
Parcourir le tableau et ajouter chaque élément à la variable somme.
Diviser la somme par la taille du tableau pour obtenir la moyenne.
Afficher la moyenne.
Écrire un algorithme qui recherche la valeur minimale d'un tableau d'entiers donné.

Initialiser la variable min à la première valeur du tableau.
Parcourir le tableau et comparer chaque élément avec la variable min.
Si un élément est inférieur à la variable min, remplacer min par cet élément.
À la fin de la boucle, min contiendra la valeur minimale du tableau.
Afficher la valeur minimale.
Écrire un algorithme qui recherche la valeur maximale d'un tableau d'entiers donné.

Initialiser la variable max à la première valeur du tableau.
Parcourir le tableau et comparer chaque élément avec la variable max.
Si un élément est supérieur à la variable max, remplacer max par cet élément.
À la fin de la boucle, max contiendra la valeur maximale du tableau.
Afficher la valeur maximale.
Écrire un algorithme qui calcule la somme des carrés des n premiers entiers positifs donnés.

Initialiser la variable somme à 0.
Parcourir les n premiers entiers et ajouter le carré de chaque entier à la variable somme.
Afficher la somme.
Écrire un algorithme qui calcule le nombre de mots dans une chaîne de caractères donnée.

Initialiser la variable nombre_mots à 0.
Parcourir la chaîne de caractères et compter chaque mot.
Un mot est défini comme une suite de caractères séparés par des espaces.
Afficher le nombre de mots.
Écrire un algorithme qui vérifie si une chaîne de caractères donnée est un palindrome.

Initialiser deux variables i et j, i à 0 et j à la taille de la chaîne de caractères moins 1.
Parcourir la chaîne de caractères en comparant les caractères aux positions i et j.
Si les caractères sont différents, la chaîne n'est pas un palindrome.
Si les caractères sont les mêmes, continuer à parcourir la chaîne jusqu'à ce que i soit supérieur ou égal à j.
Si la boucle se termine sans trouver de différence, la chaîne est un palindrome.
Afficher si la chaîne est un palindrome ou non.
Écrire un algorithme qui fusionne deux tableaux d'entiers triés en un seul tableau trié.

Initialiser deux variables i et j, i à 0 et j à 0, et un nouveau tableau vide.
Parcourir les deux tableaux en comparant les éléments aux positions i et j.
Ajouter l'élément le plus petit des deux tableaux au nouveau tableau.
Avancer l'indice du tableau à partir duquel l'élément a*/


//1=========Écrire un algorithme qui calcule la moyenne des éléments d'un tableau d'entiers donné.======================================================================
/*
let tab = [2, 5, 7, 8, 20, 666, 777, 1];//tableau d'entiers donné
let sum = 0;
let i = 0;
let moyenne = 0;

for (i = 0; i < tab.length; i++) {//Parcourir le tableau et ajouter chaque élément à la variable somme.
  sum += tab[i];//somme = somme + tab[i]
}

moyenne = sum / tab.length;//Diviser la somme par la taille du tableau pour obtenir la moyenne.

console.log(moyenne);//Afficher la moyenne.

*/
//Fin1================================================================================


//2=========Écrire un algorithme qui recherche la valeur minimale d'un tableau d'entiers donné.======================================================================
/*

import { prompt } from "prompt-sync";//importer la fonction prompt

let liste = prompt("Entrez une liste de numero");//liste d'entiers donné

let tab = liste.split(" , ").map(Number);//tableau d'entiers donné

let min = tab[0];//

for (let i = 0; i < liste.length; i++);
if (tab[i] < min) {//
  min = tab[i];//
}
*/

//Fin2================================================================================

//3=========Écrire un algorithme qui recherche la valeur maximale d'un tableau d'entiers donné.======================================================================
/*

let tab = [2, 5, 7, 8, 20, 666, 777, 1];//tableau d'entiers donné
let i = 0;
let max = tab[0];//Initialiser la variable max à la première valeur du tableau.

for (let i = 0; i < tab.length; i++) {//Parcourir le tableau et comparer chaque élément avec la variable max.
  if (tab[i] > max) {//Si un élément est supérieur à la variable max, remplacer max par cet élément.
    max = tab[i];//max contiendra la valeur maximale du tableau.
  }
}
console.log(max);//Afficher la valeur maximale.
*/

//Fin3================================================================================


//4=========Trier un tableau d'entiers en ordre croissant :======================================================================
/*
let premier = [];

for (let i = 2; i <= 10; i++) {//Parcourir les n premiers entiers et ajouter le carré de chaque entier à la variable somme.
  let estpremier = true;//Initialiser la variable somme à 0.


  for (let j = 0; j < premier.length; j++) {
    if (i % premier[j] === 0) {
      estpremier = false;
      break;
    }

  }
  if (estpremier) {//Si un élément est inférieur à la variable min, remplacer min par cet élément.
    premier.push(i);
  }
}
console.log(premier);
*/
//Fin4================================================================================

//5=========Écrire un algorithme qui calcule le nombre de mots dans une chaîne de caractères donnée..======================================================================
/*
let chaine = "je suis un homme";//chaîne de caractères donnée
let nombre_mots = 0;//Initialiser la variable nombre_mots à 0.

for (let i = 0; i < chaine.length; i++) {//Parcourir la chaîne de caractères et compter chaque mot.
  if (chaine[i] === " ") {//Un mot est défini comme une suite de caractères séparés par des espaces.
    nombre_mots++//Afficher le nombre de mots.
  }
}
console.log(nombre_mots + 1);//Afficher le nombre de mots + 1.
*/
//Fin5================================================================================

//6=========Écrire un algorithme qui vérifie si une chaîne de caractères donnée est un palindrome.======================================================================
/*
let chaine = "kayak";//chaîne de caractères donnée
let poli = true;


for (let i = 0, j = chaine.length - 1; i < chaine.length / 2; i++, j--) {//Parcourir la chaîne de caractères en comparant les caractères aux positions i et j.
  if (chaine[i] !== chaine[j]) {
    poli = false;
    break;
  }
}
if (poli) {
  console.log("c'est un palindrome");
} else {
  console.log("ce n'est pas un palindrome");
}
*/
//Fin6================================================================================



//7=========Écrire un algorithme qui fusionne deux tableaux d'entiers triés en un seul tableau trié.======================================================================

/*Définir les deux tableaux triés T1 et T2
Initialiser les variables i et j à 0
Initialiser un nouveau tableau T3 vide

TANT QUE i < longueur de T1 ET j < longueur de T2 FAIRE :
    SI T1[i] < T2[j] ALORS
        AJOUTER T1[i] à T3
        INCREMENTER i
    SINON
        AJOUTER T2[j] à T3
        INCREMENTER j
    FIN SI
FIN TANT QUE

SI i < longueur de T1 ALORS
    AJOUTER tous les éléments restants de T1 à T3
FIN SI

SI j < longueur de T2 ALORS
    AJOUTER tous les éléments restants de T2 à T3
FIN SI

AFFICHER T3



let T1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let T2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let T3 = [];
let i = 0;
let j = 0;

while (i < T1.length && j < T2.length) {//TANT QUE i < longueur de T1 ET j < longueur de T2 FAIRE :
  if (T1[i] < T2[j]) {//    SI T1[i] < T2[j] ALORS
    T3.push(T1[i]);//        AJOUTER T1[i] à T3
    i++;//        INCREMENTER i
  } else {
    T3.push(T2[j]);//AJOUTER T2[j] à T3
    j++;//        INCREMENTER j
  }
  if (i < T1.length) {//SI i < longueur de T1 ALORS
    T3.push(T1[i]); //AJOUTER tous les éléments restants de T1 à T3
  }
  if (j < T2.length) {//SI j < longueur de T2 ALORS
    T3.push(T2[j]);//AJOUTER tous les éléments restants de T2 à T3
  }
}
console.log(T3);//AFFICHER T3*/


//Fin7================================================================================













//1=========Refaire Exos Tableau======================================================================

/*Demander à l'utilisateur de saisir la taille du tableau
Créer un tableau de la taille saisie par l'utilisateur

POUR chaque élément du tableau :
    Demander à l'utilisateur de saisir une valeur pour cet élément
    Stocker cette valeur dans le tableau

Afficher le contenu du tableau


let taille = parseInt(prompt("Saisir la taille du tableau"));
let tab = [];

for (let i = 0; i < taille; i++) {
  tab[i] = parseInt(prompt("Saisir une valeur"));
}
console.log(tab);*/



//2=========Refaire Exos Tableau======================================================================

// Définition de la fonction GetInteger pour lire un entier au clavier
/*
Fonction GetInteger():
    Afficher "Saisir un entier : "
    Lire entier
    Retourner entier

// Définition de la fonction InitTab pour créer et initialiser l'instance de tableau
Fonction InitTab():
    taille <- GetInteger()
    tab <- nouveau tableau de taille entière
    Retourner tab

// Définition de la fonction SaisieTab pour permettre la saisie des différents postes du tableau
Fonction SaisieTab(tab):
    Pour i allant de 0 à la longueur de tab - 1 faire :
        Afficher "Saisir la valeur de tab[", i, "] : "
        tab[i] <- GetInteger()

// Définition de la fonction AfficheTab pour afficher tous les postes du tableau
Fonction AfficheTab(tab):
    Pour i allant de 0 à la longueur de tab - 1 faire :
        Afficher "tab[", i, "] = ", tab[i]

// Définition de la fonction RechercheTab pour afficher le contenu d'un poste de tableau dont le rang est saisi au clavier
Fonction RechercheTab(tab):
    index <- GetInteger()
    Si index < 0 ou index >= longueur de tab alors :
        Afficher "Index invalide"
    Sinon :
        Afficher "tab[", index, "] = ", tab[index]

// Définition de la fonction InfoTab qui affichera le maximum et la moyenne des postes
Fonction InfoTab(tab):
    max <- tab[0]
    somme <- 0
    Pour i allant de 0 à la longueur de tab - 1 faire :
        Si tab[i] > max alors :
            max <- tab[i]
        somme <- somme + tab[i]
    moyenne <- somme / longueur de tab
    Afficher "Maximum : ", max
    Afficher "Moyenne : ", moyenne

// Programme principal
tab <- InitTab()
SaisieTab(tab)
AfficheTab(tab)
RechercheTab(tab)
InfoTab(tab)
*/
/*
// Définition de la fonction GetInteger pour lire un entier au clavier
function GetInteger() {
  let entier = parseInt(prompt("Saisir un entier"));
  return entier;
}
// Définition de la fonction InitTab pour créer et initialiser l'instance de tableau
function InitTab() {
  let taille = GetInteger()
  let tab = new Array(taille);
  return tab;
}
// Définition de la fonction SaisieTab pour permettre la saisie des différents postes du tableau
function SaisieTab(tab) {
  for (let i = 0; i < tab.lengt - 1; i++) {
    console.log("Saisir la valeur de tab[", i, "] : ");
    tab[i] = GetInteger();
  }
}
// Définition de la fonction AfficheTab pour afficher tous les postes du tableau
function AfficheTab(tab) {
  for (let i = 0; i < tab.lenght - 1; i++) {
    console.log("tab[", i, "] = ", tab[i]);
  }
}
// Définition de la fonction RechercheTab pour afficher le contenu d'un poste de tableau dont le rang est saisi au clavier
function RechercheTab(tab) {
  let i = GetInteger();
  if (i < 0 || i >= tab.lenght) {
    console.log("Index Invalide");
  } else {
    console.log("tab[", i, "] = ", tab[i]);
  }
}
// Définition de la fonction InfoTab qui affichera le maximum et la moyenne des postes
function InfoTab(tab) {
  max = tab[0];
  sum = 0;
  for (let i = 0; i < tab.lenght - 1; i++) {
    if (tab[i] > max) {
      max = tab[i];
      sum += tab[i];
    }
  }

  let moyenne = sum / tab.lenght;//moyenne = somme / longueur de tab
  console.log(`Max : ${max}`);//Afficher "Maximum : ", max
  console.log(`Moyenne : ${moyenne}`);
}

function Menu() {
  let choix = 0;
  let tab = InitTab();
  do {
    choix = parseInt(prompt("1. Saisie\n2. Affichage\n3. Recherche\n4. Info\n5. Quitter"));
    switch (choix) {
      case 1:
        SaisieTab(tab);
        break;
      case 2:
        AfficheTab(tab);
        break;
      case 3:
        RechercheTab(tab);
        break;
      case 4:
        InfoTab(tab);
        break;
      case 5:
        break;
      default:
        console.log("Choix invalide");
    }
  } while (choix != 5);
}
Menu(); 2

*/

//Fin2================================================================================

//3=========Refaire Exos Tableau======================================================================


//algo 1, 1,2, 1,2,3, 1,2,3,4, 1,2,3,4,5, 1,2,3,4,5,6, 1,2,3,4,5,6,7, 1,2,3,4,5,6,7,8, 1,2,3,4,5,6,7,8,9, 1,2,3,4,5,6,7,8,9,10
/**
let num = 1;
let ligne = " ";

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    ligne += num + " ";//ligne = ligne + num + " ";
    num++;
  }
  console.log(ligne);
  ligne = " ";
}

//algo "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

let alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let ligne1 = " ";

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < i; j++) {
    ligne1 += alph[j] + " ";
  }
  console.log(ligne1);
  ligne1 = " ";
}

//algo $, $$, $$$, $$$$, $$$$$, $$$$$$, $$$$$$$, $$$$$$$$, $$$$$$$$$, $$$$$$$$$$

let ligne2 = " ";

for (let i = 0; i < 10; i++) {//i=0,1,2,3,4,5,6,7,8,9
  for (let j = 0; j < i; j++) {//j=0,1,2,3,4,5,6,7,8,9
    ligne2 += "$ ";//ligne2 = ligne2 + "$ ";
  }
  console.log(ligne2);
  ligne2 = " ";
}
*/
/**Dans l'algorithme de l'exemple que vous avez donné, la boucle "for" imbriquée pour "j" est utilisée pour ajouter le contenu des éléments du tableau "num" à la variable "ligne", qui est ensuite affichée avec la fonction "console.log()".

La boucle "for" pour "i" est utilisée pour déterminer le nombre d'éléments à ajouter à chaque ligne de la pyramide. Elle itère 10 fois, car vous avez spécifié que vous voulez 10 lignes dans votre pyramide.

En remplaçant les valeurs numériques par les lettres de l'alphabet, la boucle "for" pour "j" sera utilisée pour ajouter les lettres à la variable "ligne", et la boucle "for" pour "i" déterminera le nombre de lettres à ajouter à chaque ligne de la pyramide. */
//Fin3================================================================================

//4=========Refaire Exos Tableau======================================================================

/**Initialiser le tableau des prénoms avec 20 prénoms
Afficher "Veuillez saisir le prénom à rechercher : "
Lire le prénom à rechercher (prénomRecherché)

initialiser trouvé à faux
pour i allant de 0 à 19 :
    si trouvé est vrai :
        décaler le prénom à l'index i vers l'index i-1
    sinon si tableau[i] est égal à prénomRecherché :
        mettre trouvé à vrai
        décaler le prénom à l'index i vers l'index i-1

si trouvé est vrai :
    mettre la dernière case du tableau à blanc
    Afficher "Le prénom a été trouvé et supprimé du tableau."
sinon :
    Afficher "Le prénom n'a pas été trouvé dans le tableau."




    Remplacement de tab.lenght par tab.length pour obtenir la bonne taille du tableau.
Suppression de la variable prenom car elle n'est pas utilisée.
Déplacement du bloc de code if (prenom_trouve == true) en dehors de la boucle for. Il doit être exécuté une fois après la fin de la boucle.
Utilisation de tab.pop() pour supprimer le dernier élément du tableau au lieu de le remplacer par une chaîne vide.
Inversion de l'ordre des affectations dans la boucle for pour éviter de décaler les prénoms de manière incorrecte.
 */
/**
let tab = ["Jean", "Marc", "Pierre", "Paul", "Jacques", "Robert", "Michel", "Alain", "Bernard", "Laurent", "Daniel", "David", "Eric", "François", "Philippe", "Christian", "Christophe", "Patrick", "Pascal"];
let prenom_trouve = false;
let prenom_recherche = prompt("Veuillez saisir le prénom à rechercher : ");



for (let i = 0; i < tab.length - 1; i++) {///i=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19
  if (tab[i] === prenom_recherche) {//si le prénom à l'index i est égal au prénom recherché
    prenom_trouve = true;
    for (let j = i; j < tab.length - 1; j++) {
      //mettre trouvé à vrai
      tab[j] = tab[i + j];//décaler le prénom à l'index i vers l'index i-1
    }
    tab.pop();//supprimer le dernier élément du tableau
    break;
  }
}
if (prenom_trouve) {//si le prénom a été trouvé
  console.log("Le prénom a été trouvé et supprimé du tableau.");
} else {
  console.log("Le prénom n'a pas été trouvé dans le tableau.");
}
console.log(tab);
*/

//Fin4================================================================================

//5=========Refaire Exos Tri à Bulles===========================================================================

/**Pseudo-code de l'algorithme de tri à bulles

 * fonction triBulles(tableau):
    pour i allant de 0 à taille(tableau) - 2:
        pour j allant de 0 à taille(tableau) - i - 2:
            si tableau[j] > tableau[j+1]:
                échanger tableau[j] et tableau[j+1]
 */
/**
let tab = [5, 3, 8, 1, 4, 9, 6, 2, 7];

function TriBulles(tab) {
  for (let i = 0; i < tab.length; - 1, i++) {
    for (let j = 0; j < tab.length; - i - 1, j++) {
      if (tab[j] < tab[j + 1]) {//si tableau[j] > tableau[j+1]
        let temp = tab[j];//échanger tableau[j] et tableau[j+1]
        tab[j] = tab[j + 1];//échanger tableau[j] et tableau[j+1]
        tab[j + 1] = temp;//échanger tableau[j] et tableau[j+1]
      }
    }
  }
}
TriBulles(tab);
console.log(tab);

//Fin5================================================================================

//6=========Refaire Exos Tri par Sélection===========================================================================

/**Pseudo-code de l'algorithme de tri par sélection
 * fonction triSelection(tableau):
    pour i allant de 0 à taille(tableau) - 2:
        minIndex = i
        pour j allant de i+1 à taille(tableau) - 1:
            si tableau[j] < tableau[minIndex]:
                minIndex = j
        si minIndex != i:
            échanger tableau[i] et tableau[minIndex]
*/
/**

let array = [5, 3, 8, 1, 4, 9, 6, 2, 7];

function TriSelection(array) {

  for (let i = 0; i < array.length; - 2, i++) {//pour i allant de 0 à taille(tableau) - 2:
    let minIndex = i;//minIndex = i

    for (let j = 0; j < array.length; - i - 1, j++) {//pour j allant de i+1 à taille(tableau) - 1:
      if (array[j] < array[minIndex]) {//si tableau[j] < tableau[minIndex]:
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = array[i];//échanger tableau[i] et tableau[minIndex]
      array[i] = array[minIndex];//échanger tableau[i] et tableau[minIndex]
      array[minIndex] = temp;//échanger tableau[i] et tableau[minIndex]
    }
  }
}
TriSelection(array);
console.log(array);*/

//Fin6================================================================================

//7=========Refaire Exos Tri par Insertion===========================================================================

/**Pseudo-code de l'algorithme de tri par insertion*/

/**Multiplie chaque élément du tableau par lui-même et affiche le résultat dans la console.
 *
let tab = [5, 3, 8, 1, 4, 9, 6, 2, 7];

function TabMultiplication(tab) {
  for (let i = 1; i < tab.length; i++) {
    tab[i] *= tab[i];
    console.log(tab[i]);
  }
}
console.log(TabMultiplication(tab));*/


//Fin7================================================================================


//8====================================================================================
/**
let mot = "bonjour";
function CompterLettres(mot) {//fonction qui compte le nombre de fois qu'une lettre est présente dans un mot
  let tab = [];
  for (let i = 0; i < mot.length; i++) {
    let lettre = mot[i];//lettre = mot[0],mot[1],mot[2],mot[3],mot[4],mot[5],mot[6]
    if (tab[lettre] === undefined) {//si tab[lettre] est égal à undefined
      tab[lettre] = 1;
    } else {
      tab[lettre]++;//
    }
  }
  return tab;
}
console.log(CompterLettres(mot));
*/
//Fin8================================================================================

//9====================================================================================
/**
let array = [5, 3, 8, 1, 4, 9, 6, 2, 7];

function TriRapide(array, start, end) {
  if (start < end) {
    let pivotIndex = Partition(array, start, end);
    TriRapide(array, start, pivotIndex - 1);
    TriRapide(array, pivotIndex + 1, end);
  }
}



function Partition(array, start, end) {
  let pivot = array[end];
  let i = start - 1;
  for (let j = 0; j < end; -1, j++) {
    if (array[j] < pivot) {
      i++
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;

    }
  }

  let temp = array[i + 1];
  array[i + 1] = array[end];
  array[end] = temp;
  return i + 1;
}
console.log(TriRapide(array, 0, array.length - 1));
console.log(array);*/

//Fin9================================================================================
/**fonction triFusion(tableau):
    si taille(tableau) > 1:
        milieu = taille(tableau) / 2
        gauche = tableau[0:milieu]
        droite = tableau[milieu:]

        triFusion(gauche)
        triFusion(droite)

        i = j = k = 0

        tant que i < taille(gauche) et j < taille(droite):
            si gauche[i] < droite[j]:
                tableau[k] = gauche[i]
                i = i + 1
            sinon:
                tableau[k] = droite[j]
                j = j + 1
            k = k + 1

        tant que i < taille(gauche):
            tableau[k] = gauche[i]
            i = i + 1
            k = k + 1

        tant que j < taille(droite):
            tableau[k] = droite[j]
            j = j + 1
            k = k + 1
 


let array = [5, 3, 8, 1, 4, 9, 6, 2, 7];

let i = 0;
let j = 0;
let k = 0;
function triFusion(array) {
  if (array.length > 1) {
    let center = array.length / 2;
    let left = array.splice(0, center);
    let right = array.splice([center, array.length]);
    triFusion(left);
    triFusion(right);
    i = j = k = 0;
    while (i < length.left && j < length.right);
    if (length[i] < right[i]) {
      array[k] = left[i];
      i++;
    } else {
      k++;
    }
    while (i < length.left) {
      array[k] = left[i];
      i++;
      k++;
    }
    while (j < length.right) {
      array[k] = right[j];
      j++;
      k++;
    }

  }
}
console.log(triFusion(array));
console.log(array);
*/


//10====================================================================================

/**Initialiser chrono à 0
Initialiser intervalID à null

Fonction démarrerChrono:
  Si intervalID est null alors
    intervalID = appeler toutes les 100 millisecondes (mettreAjourChrono)

Fonction mettreAjourChrono:
  Incrementer chrono de 100 millisecondes
  Afficher la valeur actuelle de chrono

Fonction arrêterChrono:
  Si intervalID n'est pas null alors
    arrêter d'appeler mettreAjourChrono avec intervalID
    intervalID = null

Fonction réinitialiserChrono:
  Appeler arrêterChrono
  chrono = 0
  Afficher la valeur actuelle de chrono

Lorsque le bouton "Démarrer" est cliqué:
  Appeler démarrerChrono

Lorsque le bouton "Arrêter" est cliqué:
  Appeler arrêterChrono

Lorsque le bouton "Réinitialiser" est cliqué:
  Appeler réinitialiserChrono



  Initialisation : On initialise deux variables - stopwatch à 0 pour représenter le temps écoulé en millisecondes et intervalID à null pour stocker l'identifiant de l'intervalle lorsque le chronomètre est en cours d'exécution.

Fonction startStopwatch : Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Démarrer". Si intervalID est null (c'est-à-dire que le chronomètre n'est pas encore en cours d'exécution), on appelle la fonction updateStopwatch toutes les 100 millisecondes et on stocke l'identifiant de l'intervalle dans intervalID.

Fonction updateStopwatch : Cette fonction est appelée toutes les 100 millisecondes lorsque le chronomètre est en cours d'exécution. Elle incrémente la variable stopwatch de 100 millisecondes et affiche la valeur actuelle du chronomètre (vous pouvez convertir cette valeur en secondes et minutes pour un affichage plus clair).

Fonction stopStopwatch : Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Arrêter". Si intervalID n'est pas null (c'est-à-dire que le chronomètre est en cours d'exécution), on arrête d'appeler la fonction updateStopwatch en utilisant intervalID et on réinitialise intervalID à null.

Fonction resetStopwatch : Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Réinitialiser". On appelle d'abord la fonction stopStopwatch pour arrêter le chronomètre (si nécessaire), puis on réinitialise la variable stopwatch à 0 et on affiche la valeur actuelle du chronomètre (qui devrait être 0).

Gestion des événements : On associe les fonctions startStopwatch, stopStopwatch et resetStopwatch aux événements "click" des boutons "Démarrer", "Arrêter" et "Réinitialiser", respectivement. Ainsi, les fonctions correspondantes seront appelées lorsque l'utilisateur interagit avec les boutons.

Cet algorithme permet de créer un chronomètre simple avec les fonctionnalités de démarrage, d'arrêt et de réinitialisation. Vous pouvez l'utiliser comme base pour développer un chronomètre en JavaScript en utilisant les fonctions et événements appropriés.
 */


//Fin10================================================================================


//11====================================================================================Algorithmique recherche linéaire

//Recherche linéaire : Écrivez une fonction qui prend en entrée un tableau et un élément à rechercher. La fonction doit retourner l'index de l'élément recherché s'il est présent dans le tableau, sinon -1.


function lineaires(array, element) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return i;
    }
  }
  return -1;
}
let array = [5, 3, 8, 1, 4, 9, 6, 2, 7];
let element = 5;

console.log(lineaires(array, element));