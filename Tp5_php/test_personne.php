<?php
require_once 'personne.php';

$personne1 = new Personne('Dupont', 'Jean', 30);
$personne2 = new Personne('Martin', 'Pierre', 25);

echo 'Nom : ' . $personne1->getNom() . ', Prénom : ' . $personne1->getPrenom() . ', Âge : ' . $personne1->getAge() . "\n";
echo 'Nom : ' . $personne2->getNom() . ', Prénom : ' . $personne2->getPrenom() . ', Âge : ' . $personne2->getAge() . "\n";
