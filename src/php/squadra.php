<?php
    $nome = $_GET['nome'];
    $anno = $_GET['anno'];
    $connessione = getConnection();
		$stmt = $connessione -> prepare("SELECT * FROM `squadre` WHERE nome = ? AND anno = ?");
        $stmt -> bind_param("ss", $nome, $anno);
		$stmt -> execute();
    
    	$result = $stmt -> get_result();
        
        if($result -> num_rows > 0)
        {
        	while($row = $result -> fetch_array(MYSQLI_ASSOC))
            {
                $squadra -> nome = $row['nome'];
                $squadra -> anno = $row['anno'];
                $squadra -> titolo = $row['titolo'];
                $squadra -> testo = $row['testo'];
                $squadra -> autore = $row['autore'];
                $squadra -> img = $row['img'];
                $squadra -> data = $row['data'];
            }
            session_start();
            $_SESSION['squadra'] = $squadra;
            echo json_encode($squadra);
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