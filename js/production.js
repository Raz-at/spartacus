document.addEventListener('DOMContentLoaded', () => {
    const productionBtn = document.getElementById('productionBtn');

    productionBtn.addEventListener('click', () => {
        console.log("Production script loaded");
        document.getElementById('message').innerText = 'This is production';
    });
});