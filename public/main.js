const content = `@echo off
color 0C
title MyDoom (FAUX - Simulation)
cls

echo ===============================
echo       NEUIL
echo         GRAD
echo ===============================

pause
`;

// Création du fichier
const blob = new Blob([content], { type: "text/plain" });

// Lien de téléchargement automatique
const link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "MyDoom.bat";

document.body.appendChild(link);
link.click();
document.body.removeChild(link);