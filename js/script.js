url = 'https://my.labguru.com/api/v1/sessions'

// $.post(url, {login:'mphatso.simbao@gpreinc.com', password:'Kaptwamwa6'}, function(response){ 
//       alert("success");
//     //   $("#mypar").html(response.amount);
// });


// url = 'https://my.labguru.com/api/v1/experiments/20/elements?token=e3f7de9b202905283b5def032d6ded3848e4b1eb&element_type=text'
// $.post(url, function(response){ 
//     alert("success");
//   //   $("#mypar").html(response.amount);
// });
function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.open("POST", "http://example.com/movies.json", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("Your JSON Data Here");
}

// const userAction = async () => {
//     const response = await fetch('http://example.com/movies.json');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//     console.log(myJson)
//   }

//   userAction