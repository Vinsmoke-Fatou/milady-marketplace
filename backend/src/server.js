// 
// server.js — Point d'entrée du serveur backend
// Ce fichier sera enrichi progressivement à chaque phase.
// 
 
// ÉTAPE 1 : Charger les variables d'environnement depuis .env
// Doit TOUJOURS être la première ligne — avant tout autre import
require('dotenv').config()
 
// ÉTAPE 2 : Lire les variables et vérifier qu'elles existent
const PORT = process.env.PORT
const DB_URI = process.env.MONGODB_URI
const JWT_SECRET = process.env.JWT_SECRET

// ÉTAPE 3 : Vérification de sécurité au démarrage
// Si une variable critique manque, le serveur refuse de démarrer.
if (!PORT) {
console.error('[ERREUR] La variable PORT est manquante dans .env')
process.exit(1)
// process.exit(1) arrête immédiatement le processus Node.js
// Le code 1 signale une erreur (par convention, 0 = succès)
}

if (!DB_URI) {
console.error('[ERREUR] La variable MONGODB_URI est manquante dans .env')
process.exit(1)
}
 
if (!JWT_SECRET) {
console.error('[ERREUR] La variable JWT_SECRET est manquante dans .env')
process.exit(1)
}
 
// ÉTAPE 4 : Confirmer que tout est chargé correctement
console.log('--- Configuration chargée ---')
console.log('Port :', PORT)
console.log('Base de données :', DB_URI)
console.log('JWT Secret :', JWT_SECRET ? '[OK - défini]' : '[MANQUANT]')
// On n'affiche jamais la valeur réelle du secret — juste qu'il existe
 
// La suite (Express, MongoDB) sera ajoutée en Phase 5 et Phase 7