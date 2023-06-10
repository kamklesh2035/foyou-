<?php
class Personne {
	public $nom;
	public $prenom;
	public $age;
  
	public function __construct($nom, $prenom, $age) {
	  $this->nom = $nom;
	  $this->prenom = $prenom;
	  $this->age = $age;
	}
  
	public function getNom() {
	  return $this->nom;
	}
  
	public function getPrenom() {
	  return $this->prenom;
	}
  
	public function getAge() {
	  return $this->age;
	}
  }
