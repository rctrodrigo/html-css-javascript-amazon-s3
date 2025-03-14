// Set Title Property
const developerName = "Raven Rodrigo";
const projectTitle = "Static Site Portfolio";
const titleOfDocument = developerName + " | " + projectTitle;
document.title = titleOfDocument;

// Set Footer Copyright Year
let copyrightYear = new Date().getFullYear();
const footerSpan = `<span class="copyright"> © ${copyrightYear} ${developerName}</span>`;
document.querySelector('footer').innerHTML = footerSpan;