var images = ['hero1.gif', 'hero2.gif', 'hero3.gif'];
$('<img class="fadeIn" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('#hero-images');