document.addEventListener('DOMContentLoaded', () => {
    const productionBtn = document.getElementById('productionBtn');

    // Add event listener to the "Production" button
    productionBtn.addEventListener('click', () => {
        console.log("Production script loaded");
        document.getElementById('message').innerText = 'This is production';
    });
});