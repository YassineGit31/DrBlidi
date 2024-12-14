const hotmailIcon = document.getElementById("hotmail");
const buttonMap = document.querySelector(".contact-here .map button")


hotmailIcon.addEventListener('click', () => {
    window.location.href = "mailto:kh.bl@hotmail.fr";
});


buttonMap.addEventListener('click', () => {
  window.open("https://www.google.com/maps/place/Cabinet+Dentaire+Dr.BLIDI/@35.804945,-0.3774645,12z/data=!4m10!1m2!2m1!1sCabinet+dentaire!3m6!1s0xd7e0cca1c59f475:0xa90d8108a5eff197!8m2!3d35.804945!4d-0.295067!15sChBDYWJpbmV0IGRlbnRhaXJlWhIiEGNhYmluZXQgZGVudGFpcmWSAQ1kZW50YWxfY2xpbmljmgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVU5pTUdWaFkzSm5SUkFC4AEA-gEECBYQOw!16s%2Fg%2F11gcqc0yjl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D", "_blank");
});


document.querySelectorAll('.services-list li').forEach(item => {
    item.addEventListener('click', function () {
      const targetId = item.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);
  
      document.querySelectorAll('.service-details').forEach(detail => {
        detail.classList.remove('active');
      });
  
      targetSection.classList.add('active');
  
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.about-flex div, blockquote');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    elements.forEach(element => observer.observe(element));
  });
  

  function toggleMenu() {
    var menu = document.getElementById('menu');
    var buttonIcon = document.querySelector('.menu-button i');
    menu.classList.toggle('active');
    buttonIcon.classList.toggle('fa-bars');
    buttonIcon.classList.toggle('fa-times'); // Change icon when menu is active
  }
  




