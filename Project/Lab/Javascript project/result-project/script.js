function calculateResult() {

    
    let name = document.getElementById("name").value;
    let maths = Number(document.getElementById("maths").value);
    let science = Number(document.getElementById("science").value);
    let english = Number(document.getElementById("english").value);

   
    if (name === "" || maths === 0 || science === 0 || english === 0) {
        alert("Please fill all details");
        return;
    }

    
    let total = maths + science + english;
    let percentage = total / 3;

    
    let result;
    if (percentage >= 35) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

   
    document.getElementById("output").innerHTML =
        "<b>Name:</b> " + name + "<br>" +
        "<b>Total Marks:</b> " + total + "<br>" +
        "<b>Percentage:</b> " + percentage.toFixed(2) + "%<br>" +
        "<b>Result:</b> " + result;
}
