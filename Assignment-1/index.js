async function loadPage(pageName) {
    const response = await fetch(`pages/${pageName}.html`);
    const data = await response.text();
    const container = document.getElementById("content-card");
    container.innerHTML = data;
    container.querySelectorAll('img').forEach(img => {
        const raw = img.getAttribute('src');
        if (!raw) 
            return;
        if (raw.startsWith('../')) {
            img.setAttribute('src', raw.replace(/^(?:\.\.\/)+/, ''));
        }
    });
}

window.onload = () => loadPage("home");