const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("movingText");
const noSound = document.getElementById("noSound");
const yesSound = document.getElementById("yesSound");

const glitterElements = [];

noBtn.addEventListener("mouseover", function() {
    const x = Math.random() * 800;
    const y = Math.random() * 800;
    noBtn.style.transform = `translate(-50%, -50%) translate(${x}%, ${y}%)`;
    noSound.play();         
});

function acceptValentine() {
    yesSound.play();
    text.innerHTML = "Yay! I can't wait! 💖";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}

function createGlitter() {
    for (let i = 0; i < 100; i++) {
        let glitter = document.createElement("div");
        glitter.classList.add("glitter");
        glitter.style.left = Math.random() * window.innerWidth + "px";
        glitter.style.top = Math.random() * window.innerHeight + "px";
        document.body.appendChild(glitter);
        glitterElements.push(glitter);
    }
}
createGlitter();

document.addEventListener("mousemove", function(event) {
    const x = (event.clientX / window.innerWidth - 0.5) * 20;
    const y = (event.clientY / window.innerHeight - 0.5) * 20;

    yesBtn.style.transform = `translate(${x}px, ${y}px)`;
    text.style.transform = `translate(${x}px, ${y}px)`;

    glitterElements.forEach(glitter => {
        glitter.style.transform = `translate(${x}px, ${y}px)`;
    });
});
