window.onload = function() {
    const headers = document.querySelectorAll('h1'); 

    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];

        header.style.color = 'orange';
        header.style.background = 'red';
        header.innerHTML = 'From JavaScript';
    }
}