const fs = require('fs');

function createResultFile(num1, num2, result) {
  const htmlContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title> Résultat de la somme</title>
</head>
<body>
  <h1>✅Résultat du calcul</h1>
  <p>${num1} + ${num2} = <strong>${result}.</strong></p>
</body>
</html>
  `;

  fs.writeFile('result.html', htmlContent, (err) => {
    if (err) {
      console.error('❌ Erreur lors de la création du fichier :', err);
    } else {
      console.log('✅ Fichier result.html créé avec succès !');
    }
  });
}

module.exports = createResultFile;
