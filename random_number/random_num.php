<!DOCTYPE html>
<html>
 <head>
  <link rel="stylesheet" href="/css/Align_elements.css">
  <title>Random number with PHP</title>
 </head>
 <body>
  <div id="mySidenav" class="sidenav">
   <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
   <a href="#">About</a>
   <a href="#">Services</a>
   <a href="#">Clients</a>
   <a href="#">Contact</a>
  </div>
   <h2 class="header">Main page</h2>
   <div class="topbar">
    <a href="/">Home</a>
    <a href="javascript:openNav()">More</a>
    <div class="dropdown">
     <button onclick="myFunction()" class="dropbtn" id="button">My creations +</button>
     <div id="myDropdown" class="dropdown-content">
      <a href="Maths_site.html" target="_blank">Calculator</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
     </div>
    </div>
   </div>
  <table width="100%">
   <tr>
    <td class="side">
     <h4>side</h4>
    </td>
    <td class="center">
     <h2>Here's a random number:
     <?php
     echo rand();
      ?>
     </h2>
    </td>
    <td class="side">
     <h4>side</h4>
    </td>
   </tr>
  </table>
  <h4 class="footer">
  Made by Oakchris1955
  </h4>
  <script>
   /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  function myFunction() {
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

  </script>
 </body>
</html>