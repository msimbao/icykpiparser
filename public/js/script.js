


function addCode() {
  document.getElementById("add_to_me").innerHTML += 
              '<table style="width: 100%;"><thead><tr><th><span>Experiment ID</span></th><th><span>Start Date</span></th><th><span>End Date</span></th><th><span>Bioreactor System</span></th><th><span>Strain</span></th><th><span>Experiment Question (What Question Were you trying to answer with this experiment?)</span></th><th><span>Research Category Summarize the Experiment Question into a two or three word category</span></th><th><span>KPI Experiment Result (Success/Failure)</span></th><th><span>KPI How many cultures failed due to contamination?</span></th><th style="width: 7.4258%;"><span style="font-size: 11px;">HPI How many cultures failed due to other reasons?</span></th><th style="width: 10.1974%;"><span style="font-size: 11px;">Experiment Result if experiment failed, briefly describe why it failed. If the experiment was a success, briefly describe what was learned</span></th><th style="width: 8.5484%;"><span style="font-size: 11px;">Experiment Presentation Location On what date was this experiment presented in the Technical meeting?</span></th><th style="width: 4.2122%;"><span style="font-size: 11px;">Are further experiments needed?</span></th><th style="width: 5.5276%;"><span style="font-size: 11px;">Experiment Summarized By</span></th></tr></thead><tbody><tr><td style="width: 5.7705%;"><span style="font-size: 11px;">101722 Mash Preparation</span></td><td style="width: 4.1486%;"><span style="font-size: 11px;">101722</span></td><td style="width: 4.4488%;"><span style="font-size: 11px;">101722</span></td><td style="width: 7.3059%;"><span style="font-size: 11px;">N/A</span></td><td style="width: 3.3606%;"><span style="font-size: 11px;">N/A</span><br></td><td style="width: 11.885%;"><span style="font-size: 11px;">N/A</span></td><td style="width: 14.7431%;"><span style="font-size: 11px;">Mash Preparation</span></td><td style="width: 5.6038%;"><span style="font-size: 11px;">Success</span></td><td style="width: 6.8504%;"><span style="font-size: 11px;">0</span></td><td style="width: 7.4258%;"><span style="font-size: 11px;">0</span></td><td style="width: 10.1974%;"><span style="font-size: 11px;">Mash successfully prepared</span><br></td><td style="width: 8.5484%;"><span style="font-size: 11px;">N/A</span></td><td style="width: 4.2122%;"><span style="font-size: 11px;">N/A</span></td><td style="width: 5.5276%;"><span style="font-size: 11px;">Mphatso Simbao</span></td></tr></tbody></table><p><span style="font-size: 11px;"><br></span></p>';
}

  function makePUTrequest() {

        var email = document.getElementById("email").value
        var password = document.getElementById("password").value

        console.log(email)
        console.log(password)

        $.post( "/login?email=" + email + "&password=" + password, function( data ) {
            console.log(data)
          });

    }

