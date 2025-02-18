<?php
require 'flight/Flight.php';

// $link =   pg_connect("host=localhost port=5432 dbname=postgres user=postgres password=postgres");
// Flight::set('db', $link);

Flight::route('/', function() {
    Flight::render('accueil'); 
});

Flight::start();

?>
