document.addEventListener('DOMContentLoaded', () => {
    const deploymentBtn = document.getElementById('deploymentBtn');

    deploymentBtn.addEventListener('click', () => {
        console.log("Deployment script loaded");
        document.getElementById('message').innerText = 'This is deployment';
    });
});