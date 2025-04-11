// Add JavaScript code for your web site here and call it from index.html.
document.getElementById('myBtn')?.addEventListener("click",() => {
    let input = document.getElementById("myInput").value;
    document.getElementById("myPara").innerHTML = "You typed " + input;
    
}); 

function NavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


