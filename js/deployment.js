document.addEventListener('DOMContentLoaded', () => {
    const deploymentBtn = document.getElementById('deploymentBtn');

    // Add event listener to the "Deployment" button
    deploymentBtn.addEventListener('click', () => {
        console.log("Deployment script loaded");
        document.getElementById('message').innerText = 'This is deployment';
    });
});