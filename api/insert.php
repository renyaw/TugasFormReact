<?php
    $CN = mysqli_connect("localhost", "root", "");
    $DB = mysqli_select_db($CN, "ruangfsm");

    $EncodedData = file_get_contents('php://input');
    $DecodedData = json_decode($EncodedData, true);

    $no_ruang = $DecodedData['no_ruang'];
    $lantai = $DecodedData['lantai'];
    $jurusan = $DecodedData['jurusan'];

    $IQ="insert into ruang(no_ruang,lantai,jurusan) values('$no_ruang', $lantai, '$jurusan')";

    $R=mysqli_query($CN,$IQ);

    if($R){
        $message="Input Data Berhasil!";
    }else{
        $message="Input Data Gagal.. Coba lagi!";
    }

    $response[]=array("message"=>$message);
    echo json_encode($response);
   
?>