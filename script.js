/*  JS for interest calculator. Difference from examples  - we are using separate function validateAmount for validating the Amount field.
    This provides better user experience as we can validate it every time it changes. */

// here we get values from DOM and compute the final result
function compute()
{
    //first validate the amount input, stop processing if false
    if(validateAmount() == false) {
        return false;
    }

    // then get values from DOM for computing
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // get the year of the end
    var year = new Date().getFullYear()+parseInt(years);
    
    // compute the interest
    var interest = principal * years * rate /100;
    
    // show user the result
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\>in the year <mark>"+year+"</mark>.\<br\>"; 
}

// updating the value of "range" input for better user experience
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

// lets validate the Amount input as it has to be positive number... moved from compute() function for better user experience
function validateAmount() {
    var principal = document.getElementById("principal").value;

    if (typeof principal == "undefined" || principal <=0)
    {
        alert("Please enter a positive number.");
        document.getElementById("principal").focus();
        return false;
    }
}