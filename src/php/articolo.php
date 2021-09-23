<?php
    $id = $_GET['id'];
    $connessione = getConnection();
		$stmt = $connessione -> prepare("SELECT * FROM `articoli` WHERE id = ?");
        $stmt -> bind_param("s", $id);
		$stmt -> execute();
    
    	$result = $stmt -> get_result();
        
        if($result -> num_rows > 0)
        {
        	while($row = $result -> fetch_array(MYSQLI_ASSOC))
            {
                $articolo -> id = $row['id'];
                $articolo -> titolo = $row['titolo'];
                $articolo -> testo = $row['testo'];
                $articolo -> autore = $row['autore'];
                $articolo -> img = $row['img'];
                $articolo -> data = $row['data'];
            }
            session_start();
            $_SESSION['articolo'] = $articolo;
            echo json_encode($articolo);
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