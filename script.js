function opentab(tabId) {
  // Get all content elements
  const contents = document.querySelectorAll('.content');
  
  // Get all link elements
  const links = document.querySelectorAll('.links');

  // Hide all content sections
  contents.forEach(content => {
    content.classList.remove('activetab');
  });

  // Remove 'active' class from all links
  links.forEach(link => {
    link.classList.remove('active');
  });

  // Show the clicked tab's content
  document.getElementById(tabId).classList.add('activetab');
  
  // Add 'active' class to the clicked link
  document.querySelector(`.links[onclick="opentab('${tabId}')"]`).classList.add('active');
}


document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('section');
  const contactSection = document.querySelector('#contact');
  const lines= document.querySelector('#line');
  const lines1= document.querySelector('#lines');


  // Function to hide all sections except Contact
  function showContactSection() {
      sections.forEach(section => {
          if (section === contactSection) {
              section.style.display = 'block';
              lines.style.display='none'
              lines1.style.display='none'
          } else {
              section.style.display = 'none';
          }
      });
      window.scrollTo({ top: contactSection.offsetTop, behavior: 'smooth' });
  }

  // Function to show all sections
  function showAllSections() {
      sections.forEach(section => {
          section.style.display = 'block';
          contactSection.style.display='none'
      });
  }

  // Handle click on navigation links
  document.querySelectorAll('.Navbar a, .footer a').forEach(link => {
      link.addEventListener('click', function(e) {
          const targetId = this.getAttribute('href').substring(1);
          if (targetId === 'contact') {
              showContactSection();
          } else {
              showAllSections();
              const targetSection = document.getElementById(targetId);
              window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
          }
          e.preventDefault();
      });
  });

  // Form submission handling
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      console.log(`Name: ${name}, Email: ${email}`);
      alert('Submit successfully');
      contactForm.reset(); // Clear the form fields
  });
});
