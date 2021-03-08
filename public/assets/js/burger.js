console.log("hello");

$("#submit").click(function (e) {
    e.preventDefault();
    var burger= {
        burger_name: $("#burger-text").val().trim(),
    
    }
    $.ajax({
        method: "POST",
        url: "/api/burgers",
        data: burger
    }) .then (function (res){
        console.log(res);
        window.location.reload();
    })
})

$("#devourBtn").click(function () {
    const newState= {
        devoured: true,

    }
    var id= $(this).data("id");
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + id,
        data: newState,
    }).then(function(res) { 
        console.log(res)
        window.location.reload();
    })
    
   
})