const content = `@echo off
color 0A
title Tu as déjà été hacké (humour)
echo ===============================
echo   C'est trop tard, bonne chance !
echo ===============================
pause
`;

// Création du fichier
const blob = new Blob([content], { type: "text/plain" });
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "HackHumour.bat";

// Téléchargement automatique après 3 secondes
setTimeout(() => {
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}, 3000);