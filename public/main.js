document.body.classList.add("danger");

const screen = document.getElementById("screen");
const lines = [
    "[!] Analyse de l'intégrité du système...",
    "[!] Détection d'une activité suspecte...",
    "[!] Tentative de neutralisation...",
    "",
    "❌ ERREUR FATALE : INTRUSION CONFIRMÉE",
    "",
    "⚠️ Tu as déjà été hacké...",
    "⚠️ C'est trop tard...",
    "⚠️ Bonne chance ! 😈",
];

let i = 0;

function writeLine() {
    if (i < lines.length) {
        screen.textContent += "\n" + lines[i];
        i++;
        setTimeout(writeLine, 500);
    }
}
setTimeout(writeLine, 1000);

// Contenu du .bat (inoffensif)
const content = `@echo off
color 0C
title SYSTEM BREACH DETECTED
echo **********************************************
echo     SYSTEM BREACH DETECTED
echo     Tu as deja ete hacké...
echo     C'est trop tard. Bonne chance !
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
start    https://www.youtube.com/watch?v=dQw4w9WgXcQ
echo **********************************************
pause
`;

// Téléchargement automatique
const blob = new Blob([content], { type: "text/plain" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "MyDoom.bat";

setTimeout(() => {
    link.click();
}, 4000);