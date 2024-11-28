const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateInput()
{
    console.log("input validation")
    email = document.getElementById("Email").value
    console.log(email);
    if(pattern.test(email))
    {
    //const modal = document.createElement("Modal");
    //document.getElementById("modal").style.visibility= "visible";
    //document.getElementById("container").style.visibility="hidden";
    window.alert("Thanks for contacting us");
    }
    else
    {
        window.alert("Please enter a valid email address.");
    }
}
document.getElementById("submitBtn").addEventListener("click",validateInput)
