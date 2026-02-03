const questionElement = document.getElementById("question");
const gifElement = document.getElementById("main-gif");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// État actuel (combien de fois elle a cliqué sur Non)
let noClickCount = 0;

// Messages à afficher successivement si elle clique sur Non
const noMessages = [
    "Tu en es sûre ?",
    "Tu veux me faire souffrir ?",
    "Thiopet ne va pas supporter...",
    "Tu n'as plus le choix !"
];

// Fonction quand elle clique sur NON
noBtn.addEventListener("click", () => {
    if (noClickCount < 4) {
        // Changer le MESSAGE (dans le h1, pas dans le bouton)
        questionElement.innerText = noMessages[noClickCount];
        
        // Agrandir le bouton Oui progressivement
        const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
        const currentPaddingTop = parseFloat(window.getComputedStyle(yesBtn).paddingTop);
        const currentPaddingLeft = parseFloat(window.getComputedStyle(yesBtn).paddingLeft);
        
        yesBtn.style.fontSize = `${currentSize * 1.3}px`;
        yesBtn.style.padding = `${currentPaddingTop * 1.3}px ${currentPaddingLeft * 1.4}px`;

        noClickCount++;
        
        // Au 4ème clic, faire disparaître le bouton Non
        if (noClickCount === 4) {
            noBtn.classList.add('hidden'); // Utilise la classe CSS
        }
    }
});

// Fonction quand elle clique sur OUI
yesBtn.addEventListener("click", () => {
    // Rediriger vers la page yes.html
    window.location.href = "yes.html";
});