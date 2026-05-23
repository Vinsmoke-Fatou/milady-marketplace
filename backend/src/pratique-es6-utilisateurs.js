const utilisateurs = [
    {
        id: 'u001',
        prenom: 'Fatou',
        nom: 'Diallo',
        email: 'fatou.diallo@example.com',
        motDePasse: 'hash_bcrypt_ici',
        role: 'vendeur',
        boutique: {
            nom: 'Bijoux Teranga',
            ville: 'Dakar',
            categories: ['bijoux', 'accessoires'],
        },
        noteMoyenne: 4.8,
        actif: true,
    },
    {
        id: 'u002',
        prenom: 'Aïssatou',
        nom: 'Sow',
        email: 'aissatou.sow@example.com',
        motDePasse: 'hash_bcrypt_ici',
        role: 'vendeur',
        boutique: {
            nom: 'Mode Dakar',
            ville: 'Thiès',
            categories: ['vetements'],
        },
        noteMoyenne: 4.2,
        actif: true,
    },
    {
        id: 'u003',
        prenom: 'Mariama',
        nom: 'Ndiaye',
        email: 'mariama.ndiaye@example.com',
        motDePasse: 'hash_bcrypt_ici',
        role: 'client',
        boutique: null,
        noteMoyenne: null,
        actif: true,
    },
]

// 2. SÉPARER VENDEURS ET CLIENTS
const vendeurs = utilisateurs.filter(u => u.role === 'vendeur')
const clients = utilisateurs.filter(u => u.role === 'client')
console.log('\n--- Répartition ---')
console.log(`Vendeurs : ${vendeurs.length} | Clients : ${clients.length}`)

// 3. PROFIL PUBLIC — REST POUR EXCLURE LE MOT DE PASSE
const creerProfilPublic = ({ motDePasse, ...profilPublic }) => profilPublic
// Le rest operator capture tout sauf motDePasse
// La fonction retourne le profil sans le mot de passe
const profilsPublics = utilisateurs.map(creerProfilPublic)
console.log('\n--- Profil public (sans mot de passe) ---')
console.log(profilsPublics[0])
// L'objet ne doit PAS avoir de champ 'motDePasse'

// 4. DESTRUCTURING IMBRIQUÉ
vendeurs.forEach(vendeur => {
    // Destructuring imbriqué : extraire prenom, noteMoyenne
    // et les champs de boutique en une seule ligne
    const {
        prenom,
        noteMoyenne = 0,
        boutique: { nom: nomBoutique, ville, categories },
    } = vendeur
    const catégories = categories.join(', ')
    // join transforme un tableau en chaîne : ['bijoux', 'accessoires'] ® 'bijoux, accessoires'
    console.log(`\n${prenom} — ${nomBoutique} (${ville})`)
    console.log(` Note : ${noteMoyenne}/5 | Catégories : ${catégories}`)
})

// 5. SPREAD — METTRE À JOUR UN PROFIL
// Simuler la mise à jour du profil d'une vendeuse
const utilisateurOriginal = utilisateurs[0]
const donneesMAJ = {
    noteMoyenne: 4.9, boutique: {
        ...utilisateurOriginal.boutique,
        ville: 'Saint-Louis'
    }
}
const utilisateurMAJ = { ...utilisateurOriginal, ...donneesMAJ }
console.log('\n--- Mise à jour profil ---')
console.log('Ville originale :', utilisateurOriginal.boutique.ville)
// Dakar
console.log('Ville mise à jour:', utilisateurMAJ.boutique.ville)
// Saint-Louis

// 6. FONCTION — TABLEAU DE BORD VENDEUR
const genererTableauBord = (vendeur, ...ventes) => {
    // rest : ventes est un tableau de montants (nombres)
    const { prenom, boutique: { nom: boutique } } = vendeur
    const totalVentes = ventes.reduce((acc, v) => acc + v, 0)
    const moyenneVente = ventes.length > 0 ? totalVentes / ventes.length : 0
    const meilleureVente = ventes.length > 0 ? Math.max(...ventes) : 0
    // Math.max(...ventes) : spread pour passer les éléments du tableau comme arguments
    return `
=== Tableau de bord : ${prenom} (${boutique}) ===
Nombre de ventes : ${ventes.length}
Total des ventes : ${totalVentes.toLocaleString('fr-FR')} FCFA
Vente moyenne : ${Math.round(moyenneVente).toLocaleString('fr-FR')} FCFA
Meilleure vente : ${meilleureVente.toLocaleString('fr-FR')} FCFA`
}

console.log(genererTableauBord(utilisateurs[0], 8000, 25000, 12000, 45000, 8000))