$(document).ready(function () { 
    $("p").click(function () { 
        $(this).hide(); 
    }); 
});

$(document).ready(function () {
    $("h3").click(function () { 
        $("p").show(); 
    }); 
});