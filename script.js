function compute()
{
    p = document.getElementById("principal").value;

/* Get attribute values from HTML form */
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
/* Set results text */

/* Validate "principal" input field. Display result if valid, otherwise wipe result */    
    if (p <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        document.getElementById("result").innerHTML=""
    }
    else {
        document.getElementById("result").innerHTML="If you deposit <mark><b>"+principal+"</b></mark>,\<br\>at an interest rate of <mark><b>"+rate+"%</b></mark>\<br\>You will receive an amount of <mark><b>"+interest+"</b></mark>,\<br\>in the year <mark><b>"+year+"</b></mark>\<br\>"
    }
}

/* Function updates displayed rate as slider is moved */
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}