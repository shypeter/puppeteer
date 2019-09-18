<?php
    $gap = [];
    $index = 0;
    $a = 147;
    $res = base_convert($a, 10, 2);
    var_dump($res);
    fun($a);
    var_dump($gap);
    rsort($gap);
    var_dump($gap[0]);

    function fun($N) {
        global $gap, $index;
        $remainder = $N % 2;
        $quotient = $N / 2;
        if ($quotient >= 2) {
            fun($quotient);
        } else {
            echo round($N / 2);


                $gap[$index] = 0;
                $index++;

            $gap[$index] = 0;
        }

        if ($remainder != 0) {
            $index++;
            $gap[$index] = 0;
            $index++;
            $gap[$index] = 0;
        } else {
            $gap[$index] += 1;
        }

        echo $remainder;
        return;
    }
?>

