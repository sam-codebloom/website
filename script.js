// Add this to your script.js if you want dropdowns to open on click in mobile
// (They'll still open on hover on desktop with the CSS above)

document.addEventListener('DOMContentLoaded', function() {
    const dropbtns = document.querySelectorAll('.dropbtn');
  
    dropbtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Toggle the display of the dropdown content for the clicked button's parent
        const dropdownContent = this.nextElementSibling; // Gets the .dropdown-content div
        if (dropdownContent && dropdownContent.classList.contains('dropdown-content')) {
          // This is a simple toggle. For more complex behavior (e.g., closing others),
          // you might expand this logic.
          if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
          } else {
            // Close any other open dropdowns first (optional, but good UX)
            document.querySelectorAll('.dropdown-content').forEach(content => {
              if (content !== dropdownContent) {
                content.style.display = 'none';
              }
            });
            dropdownContent.style.display = 'block';
          }
        }
      });
    });
  
    // Original toggleMenu function (make sure this is still present)
    window.toggleMenu = function() {
      var navLinks = document.getElementById("navLinks");
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      } else {
        navLinks.classList.add('show');
      }
    };
  });