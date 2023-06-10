<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="style.css">
    <title>home work php</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>

<body>
    <div class="container">
        <h1>Home Work PHP</h1>
        <?php
        // Définir la classe Decor
        class Decor
        {
            public $name;
            public $image;
            public function __construct($name, $image)
            {
                $this->name = $name;
                $this->image = $image;
            }
        }

        // creer des instances de classe
        $decors = array(
            new Decor("Apple", "FOYOU/Tp5_php/assets/apple_music.png"),
            new Decor("Deezor", "FOYOU/Tp5_php/assets/deezer-removebg-preview.png"),
            new Decor("Netflix", "FOYOU/Tp5_php/assets/netfli_1.png"),
            new Decor("Spotify", "FOYOU/Tp5_php/assets/spotify_1-removebg-preview.png")
        );

        // afficher les elements au tableau
        foreach ($decors as $decor) {
            echo '<div class="card" style="width: 18rem;">
					<img class="card-img-top" src="' . $decor->image . '" alt="' . $decor->name . '">
					<div class="card-body">
						<h5 class="card-title">' . $decor->name . '</h5>
					</div>
				</div>';
        }
        ?>
    </div>
    <?php
    echo '<div class="parent">
            <div class="div1">
                <img class="card-img-top" src="' . $decor->image . '" alt="' . $decor->name . '">
            </div>
            <div class="div2">
                <img class="card-img-top" src="' . $decor->image . '" alt="' . $decor->name . '">
            </div>
            <div class="div3">
            <img class="card-img-top" src="' . $decor->image . '" alt="' . $decor->name . '">
                </div>
            </div>
            <div class="div4">
            <img class="card-img-top" src="' . $decor->image . '" alt="' . $decor->name . '">
            </div>
        </div>';
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous">
    </script>
</body>

</html>