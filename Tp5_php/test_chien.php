<?php
require_once 'chien.php';

$chien1 = new Chien("Scooby", 20, "Bool-Dog",4);
echo $chien1->afficherInfos();

$chien2 = new Animal("Scooby", 20);
echo $chien2->faireDuBruit();