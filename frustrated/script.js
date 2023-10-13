// Function to start the animation
function startScreaming() {
let screamText = document.querySelector('.ah-text');
screamText.textContent = screamText.textContent + ' H' + '\n';
}

window.setTimeout("document.getElementById('hide').style.display='none';", 3500); 

window.onload = function() {
    document.getElementById("siuu").play();
    document.getElementById('myvideo').play();
}
setInterval(startScreaming, 45);
