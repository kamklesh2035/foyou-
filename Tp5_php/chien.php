<?php
require_once 'animal.php';

class Chien extends Animal
{
    private $race;
    private $nbPattes;

    public function __construct($nom, $age, $race, $nbPattes)
    {
        parent::__construct($nom, $age);
        $this->race = $race;
        $this->nbPattes = $nbPattes;
    }

    public function afficherInfos()
    {
        echo 'Nom : ' . $this->getNom() . ', Âge : ' . $this->getAge() . ', Race : ' . $this->race . ', Nombre de pattes : ' . $this->nbPattes . "\n";
    }
}
