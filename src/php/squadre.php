<?php
    $lista_articoli = array();
    $connessione = getConnection();
		$stmt = $connessione -> prepare("SELECT * FROM `squadre`");
		$stmt -> execute();
    
    	$result = $stmt -> get_result();
        
        if($result -> num_rows > 0)
        {
        	while($row = $result -> fetch_array(MYSQLI_ASSOC))
            {
                $articolo = "";
                $articolo -> nome = $row['nome'];
                $articolo -> anno = $row['anno'];
                $articolo -> titolo = $row['titolo'];
                $articolo -> testo = $row['testo'];
                $articolo -> autore = $row['autore'];
                $articolo -> img = $row['img'];
                $articolo -> data = $row['data'];
                $lista_articoli[] = $articolo;
            }
            session_start();
            $_SESSION['articoli'] = $lista_articoli;
            echo json_encode($lista_articoli);
        }
        else
        {
            $errore -> codice = "404";
            $errore -> descrizione = "non c'è nulla nel db";
        	echo json_encode($errore);
        }


function getConnection() {
		$host= "localhost";
		$userdb = "fantavelastracciata";
		$password = "";
		$database = "my_fantavelastracciata";

		$conn = new mysqli($host, $userdb, $password, $database) or die ("Errore durante la connessione al server");

		return $conn;
	}

?>