const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
function validateInput()
{
    email = document.getElementById("Email")
    if(pattern.test(email))
    {
    //const modal = document.createElement("Modal");
    document.getElementById("modal").style.visibility= "visible";
    document.getElementById("container").style.visibility="hidden";
    }
}
document.getElementById("submitBtn").addEventListener("click",validateInput)