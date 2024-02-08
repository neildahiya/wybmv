const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const subtext = document.getElementById('subtext');
const changeableImage = document.getElementById('changeableImage');
const confettiWrapper = document.getElementById('confettiWrapper');

let noClickCount = 0;
const subtexts = ["Are you sure?", "Think again!", "Give it another shot!", "Surely, you jest!", "Why not?", "Pretty please?", "Consider again!", "It's a lovely choice!", "Last chance!"];
const images = [
    "https://media.tenor.com/K_E6ORTmXMoAAAAM/milk-and-mocha-love.gif",
    "https://i.pinimg.com/originals/8f/eb/fb/8febfb67f2f0cafe9af084e698fa16e0.gif",
    "https://i.pinimg.com/originals/f3/14/2a/f3142a721eb51893bfee727aaa1fa4ea.gif",
    "https://gifdb.com/images/thumbnail/pokemon-pikachu-will-you-be-my-valentine-p6pjjlhcdeki4xrw.gif",
    "https://media1.tenor.com/m/aezX5c1dFfoAAAAC/spider-man-norman-osborn.gif",
    "https://media.tenor.com/WHhQT0n06poAAAAj/pointing-gun-ybn-nahmir.gif",
    "https://www.shutterstock.com/image-photo/portrait-handsome-young-man-holding-260nw-654933640.jpg",
    "https://annoyingrambles.files.wordpress.com/2013/11/loading-gun.gif"

]; // Add more image paths
let currentImageIndex = 0;

yesBtn.addEventListener('click', function() {
    document.body.innerHTML = `
        <div class="container">
            <img src="https://i.pinimg.com/originals/02/f8/da/02f8dac393522858d5e22ef1d708e678.gif" alt="Celebratory Image" style="max-width: 400px; height: auto;">
            <h1>See you soon! ❤️</h1>
            <p>Now take a screenshot & send it to me, will you babe?!</p>
        </div>
    `;
    // Add confetti animation here if desired
});

noBtn.addEventListener('click', function() {
    noClickCount++;
    currentImageIndex = (currentImageIndex + 1) % images.length;
    changeableImage.src = images[currentImageIndex];
    if (noClickCount < 8) {
        subtext.textContent = subtexts[noClickCount - 1];
        yesBtn.style.padding = `${10 + noClickCount * 20}px ${20 + noClickCount * 30}px`;
        yesBtn.style.fontSize = `${20 + noClickCount * 10}px`
        yesBtn.classList.add('button-pop'); // Apply the animation class
        setTimeout(() => yesBtn.classList.remove('button-pop'), 200); // Remove the class after the animation completes
    } else {
        alert("Let's try again!");
        noClickCount = 0;
        currentImageIndex = 0
        changeableImage.src = images[currentImageIndex];
        yesBtn.style.padding = "10px 20px";
        subtext.textContent = "Select your answer";
    }
});


