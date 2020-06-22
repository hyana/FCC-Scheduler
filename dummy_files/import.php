 <?php

//database connection details
$connect = mysql_connect('localhost','test','test');

if (!$connect) {
    die('Could not connect to MySQL: ' . mysql_error());
}

//your database name
$cid =mysql_select_db('shops',$connect);

// path where your CSV file is located
define('CSV_PATH','C:\Users\LG\Desktop\Smith\CSC\FCC Scheduler\FCC');

// Name of your CSV file
$csv_file = CSV_PATH . "S.csv"; 


if (($handle = fopen($csv_file, "r")) !== FALSE) {
      fgetcsv($handle);   
      while (($data = fgetcsv($handle, 1000, ",")) !== FALSE) {
           $num = count($data);
           for ($c=0; $c < $num; $c++) {
             $col[$c] = $data[$c];
           }

    $date = $col[0];
    $filename = $col[1];
    $directory = $col[2];
    $type = $col[3];
    $to = $col[4];

// SQL Query to insert data into DataBase
$query = "INSERT INTO tblshops(date,filename,directory,type,to) VALUES('".$date."','".$filename."','".$directory."','".$type."','".$to."')";
$s     = mysql_query($query, $connect );
    }
       fclose($handle);
}

echo "File data successfully imported to database!!";
mysql_close($connect);
?>