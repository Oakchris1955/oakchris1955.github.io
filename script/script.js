   /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function show() {
    document.getElementById("myDropdown").classList.toggle("show");
    var bef = document.getElementById("button").textContent;
    var aft;
    if (bef == "My creations +") {
      aft = "My creations -";
    } else if (bef == "My creations -") {
      aft = "My creations +";
    } else {
      aft = "My creations";
    }
    document.getElementById("button").textContent = aft;
  }

   function cor() {
   var x = document.getElementById("myDropdown").classList;
   if (x == "dropdown-content show") {
    x = "My creations -";
    } else if (x == "dropdown-content") {
    x = "My creations +"
    } 
    document.getElementById("button").textContent = x;
   }
 
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          cor();
        }
      }
    }
  }

   /* Set the width of the side navigation to 250px */
   function openNav() {
   document.getElementById("mySidenav").style.width = "250px";
  }

   /* Set the width of the side navigation to 0 */
   function closeNav() {
   document.getElementById("mySidenav").style.width = "0";
  }
  includeHTML();
  document.getElementById("load").remove();
  var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content").style.display = "block";
}