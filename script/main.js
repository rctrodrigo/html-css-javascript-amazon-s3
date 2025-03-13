let copyrightYear = new Date().getFullYear();
let nameOfSoftwareDeveloper = "Raven Carlos T. Rodrigo";

const footer = `<span class="copyright"> © ${copyrightYear} ${nameOfSoftwareDeveloper}</span>`;
document.querySelector('footer').innerHTML = footer;