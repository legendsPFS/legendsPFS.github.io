<?php

if ($_POST["pincode"] === "8531") {
    http_response_code(200);
} else{
    http_resposne_code(401);
}