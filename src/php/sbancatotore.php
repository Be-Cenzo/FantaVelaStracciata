<?php
    $lista_partite = array();
    $connessione = getConnection();
		$stmt = $connessione -> prepare("SELECT * FROM `sbancatotore` WHERE giornata IN (SELECT MAX(giornata) FROM `sbancatotore`)");
		$stmt -> execute();
    
    	$result = $stmt -> get_result();
        
        if($result -> num_rows > 0)
        {
        	while($row = $result -> fetch_array(MYSQLI_ASSOC))
            {
                $partita = "";
                $partita -> giornata = $row['giornata'];
                $partita -> casa = $row['casa'];
                $partita -> fuori = $row['fuori'];
                $partita -> risultato = $row['risultato'];
                $lista_partite[] = $partita;
            }
            session_start();
            $_SESSION['partite'] = $lista_partite;
            echo json_encode($lista_partite);
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