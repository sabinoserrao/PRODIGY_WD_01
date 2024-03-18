  // Get all navigation links
        const navLinks = document.querySelectorAll('nav a');

        // Loop through each link and add event listener for hover
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.color = '#0000ff'; // Change color on hover
            });

            link.addEventListener('mouseleave', function() {
                this.style.color = 'white'; // Restore color when not hovering
            });
        });