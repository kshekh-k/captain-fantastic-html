// Alpine.js import
import Alpine from '../../node_modules/alpinejs/dist/module.esm.js'

window.Alpine = Alpine 
Alpine.start()









async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        const content = await response.text();
        document.getElementById(elementId).innerHTML = content;
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// Load Header and Footer on Page Load
document.addEventListener("DOMContentLoaded", () => {
    loadComponent("header", "header.html");
    loadComponent("subscription-form-wrap", "subscription-form.html");
    loadComponent("footer", "footer.html");
});
