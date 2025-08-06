const concepts = {
    "valeur_positionnelle": {
        title: "🔢 La valeur positionnelle",
        content: `
            <h4>Qu'est-ce que la valeur positionnelle ?</h4>
            <p>Dans un nombre, chaque chiffre a une valeur différente selon sa position.</p>
            <ul>
                <li><strong>Unités :</strong> position 1 (à droite)</li>
                <li><strong>Dizaines :</strong> position 2</li>
                <li><strong>Centaines :</strong> position 3</li>
                <li><strong>Milliers :</strong> position 4</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> Dans 5 847 :<br>
                • 7 est aux unités = 7 × 1 = 7<br>
                • 4 est aux dizaines = 4 × 10 = 40<br>
                • 8 est aux centaines = 8 × 100 = 800<br>
                • 5 est aux milliers = 5 × 1000 = 5000
            </div>
        `
    },
    "comparaison_nombres": {
        title: "🔢 Comparer les nombres",
        content: `
            <h4>Comment comparer des nombres ?</h4>
            <p>On compare les nombres chiffre par chiffre, de gauche à droite :</p>
            <ul>
                <li>D'abord les milliers</li>
                <li>Puis les centaines</li>
                <li>Puis les dizaines</li>
                <li>Enfin les unités</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 2 564 vs 2 546<br>
                • Milliers : 2 = 2<br>
                • Centaines : 5 = 5<br>
                • Dizaines : 6 > 4 → donc 2 564 > 2 546
            </div>
        `
    },
    "addition": {
        title: "➕ L'addition",
        content: `
            <h4>Techniques d'addition</h4>
            <p>Pour additionner plusieurs nombres :</p>
            <ul>
                <li>Aligner les chiffres par colonnes (unités, dizaines...)</li>
                <li>Additionner colonne par colonne</li>
                <li>Reporter les retenues</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 347 + 158 + 95<br>
                • 347 + 158 = 505<br>
                • 505 + 95 = 600
            </div>
        `
    },
    "soustraction": {
        title: "➖ La soustraction",
        content: `
            <h4>Technique de la soustraction</h4>
            <p>Pour soustraire :</p>
            <ul>
                <li>Aligner les nombres</li>
                <li>Soustraire colonne par colonne</li>
                <li>Si nécessaire, emprunter à la colonne de gauche</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 1 000 - 247<br>
                • On ne peut pas faire 0 - 7<br>
                • On emprunte : 10 - 7 = 3<br>
                • Résultat : 753
            </div>
        `
    },
    "multiplication": {
        title: "✖️ La multiplication",
        content: `
            <h4>Multiplication à deux chiffres</h4>
            <p>Pour multiplier par un nombre à deux chiffres :</p>
            <ul>
                <li>Multiplier par les unités</li>
                <li>Multiplier par les dizaines (décaler d'un rang)</li>
                <li>Additionner les résultats</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 37 × 24<br>
                • 37 × 4 = 148<br>
                • 37 × 20 = 740<br>
                • 148 + 740 = 888
            </div>
        `
    },
    "division": {
        title: "➗ La division",
        content: `
            <h4>La division euclidienne</h4>
            <p>Diviser c'est chercher combien de fois le diviseur "entre" dans le dividende.</p>
            <ul>
                <li><strong>Dividende ÷ Diviseur = Quotient</strong></li>
                <li>Vérification : Quotient × Diviseur = Dividende</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 756 ÷ 9<br>
                • 9 × 8 = 72 (trop petit)<br>
                • 9 × 9 = 81 (trop grand)<br>
                • Donc 756 ÷ 9 = 84
            </div>
        `
    },
    "tables_multiplication": {
        title: "🔢 Les tables de multiplication",
        content: `
            <h4>Apprendre les tables</h4>
            <p>Les tables de multiplication sont essentielles pour calculer rapidement.</p>
            <ul>
                <li>Table de 9 : astuce des doigts</li>
                <li>Table de 5 : finit par 0 ou 5</li>
                <li>Table de 2 : nombres pairs</li>
            </ul>
            <div class="example">
                <strong>Table de 9 :</strong><br>
                9 × 1 = 9, 9 × 2 = 18, 9 × 3 = 27...<br>
                <strong>9 × 7 = 63</strong>
            </div>
        `
    },
    "multiples": {
        title: "🔢 Les multiples",
        content: `
            <h4>Qu'est-ce qu'un multiple ?</h4>
            <p>Un multiple d'un nombre, c'est le résultat de sa multiplication par un nombre entier.</p>
            <ul>
                <li>Multiples de 6 : 6, 12, 18, 24, 30, 36, 42...</li>
                <li>Pour vérifier : diviser par 6, si c'est exact, c'est un multiple</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 42 est-il multiple de 6 ?<br>
                42 ÷ 6 = 7 (exact) → OUI, 42 = 6 × 7
            </div>
        `
    },
    "diviseurs": {
        title: "🔢 Les diviseurs",
        content: `
            <h4>Qu'est-ce qu'un diviseur ?</h4>
            <p>Un diviseur d'un nombre, c'est un nombre qui le divise exactement (reste = 0).</p>
            <ul>
                <li>Pour trouver tous les diviseurs, tester 1, 2, 3, 4...</li>
                <li>S'arrêter à la moitié du nombre</li>
            </ul>
            <div class="example">
                <strong>Diviseurs de 12 :</strong><br>
                1 (12÷1=12), 2 (12÷2=6), 3 (12÷3=4), 4 (12÷4=3), 6 (12÷6=2), 12 (12÷12=1)<br>
                <strong>Total : 6 diviseurs</strong>
            </div>
        `
    },
    "criteres_divisibilite": {
        title: "🔢 Critères de divisibilité",
        content: `
            <h4>Reconnaître rapidement les divisions</h4>
            <p>Critères pour savoir si un nombre est divisible :</p>
            <ul>
                <li><strong>Par 2 :</strong> finit par 0, 2, 4, 6, 8</li>
                <li><strong>Par 3 :</strong> somme des chiffres divisible par 3</li>
                <li><strong>Par 5 :</strong> finit par 0 ou 5</li>
                <li><strong>Par 10 :</strong> finit par 0</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 147 divisible par 3 ?<br>
                1 + 4 + 7 = 12<br>
                12 ÷ 3 = 4 → OUI !
            </div>
        `
    },
    "fractions_definition": {
        title: "🍕 Les fractions",
        content: `
            <h4>Comprendre les fractions</h4>
            <p>Une fraction représente une part d'un tout.</p>
            <ul>
                <li><strong>Numérateur :</strong> nombre de parts prises</li>
                <li><strong>Dénominateur :</strong> nombre total de parts</li>
                <li>3/5 = 3 parts sur 5 parts égales</li>
            </ul>
            <div class="example">
                <strong>Visualisation :</strong><br>
                🍕🍕🍕⚪⚪ = 3/5 de pizza<br>
                3 parts mangées sur 5 parts au total
            </div>
        `
    },
    "comparaison_fractions": {
        title: "🍕 Comparer les fractions",
        content: `
            <h4>Comment comparer des fractions ?</h4>
            <p>Plusieurs méthodes :</p>
            <ul>
                <li>Convertir en décimaux</li>
                <li>Réduire au même dénominateur</li>
                <li>Comparer à 1/2</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong><br>
                1/2 = 0,5<br>
                3/8 = 0,375<br>
                2/5 = 0,4<br>
                Donc : 1/2 > 2/5 > 3/8
            </div>
        `
    },
    "decimaux": {
        title: "🔢 Les nombres décimaux",
        content: `
            <h4>Lire et écrire les décimaux</h4>
            <p>Un nombre décimal a une partie entière et une partie décimale.</p>
            <ul>
                <li><strong>Dixièmes :</strong> 1ère position après la virgule</li>
                <li><strong>Centièmes :</strong> 2ème position après la virgule</li>
                <li><strong>Millièmes :</strong> 3ème position après la virgule</li>
            </ul>
            <div class="example">
                <strong>"Douze unités et sept dixièmes" :</strong><br>
                12 + 0,7 = 12,7
            </div>
        `
    },
    "geometrie_figures": {
        title: "📐 Les figures géométriques",
        content: `
            <h4>Les polygones</h4>
            <p>Un polygone est une figure fermée avec des côtés droits.</p>
            <ul>
                <li><strong>Triangle :</strong> 3 côtés</li>
                <li><strong>Quadrilatère :</strong> 4 côtés</li>
                <li><strong>Pentagone :</strong> 5 côtés</li>
                <li><strong>Hexagone :</strong> 6 côtés</li>
            </ul>
            <div class="example">
                <strong>Mémo :</strong> "hexa" = 6 en grec<br>
                Comme "hexapode" = 6 pattes
            </div>
        `
    },
    "perimetre": {
        title: "📏 Le périmètre",
        content: `
            <h4>Calculer le périmètre</h4>
            <p>Le périmètre = tour complet d'une figure</p>
            <ul>
                <li><strong>Rectangle :</strong> P = 2 × (L + l)</li>
                <li><strong>Carré :</strong> P = 4 × côté</li>
                <li><strong>Triangle :</strong> P = côté1 + côté2 + côté3</li>
            </ul>
            <div class="example">
                <strong>Rectangle 12×8 cm :</strong><br>
                P = 2 × (12 + 8) = 2 × 20 = 40 cm
            </div>
        `
    },
    "aire": {
        title: "📏 L'aire",
        content: `
            <h4>Calculer l'aire (surface)</h4>
            <p>L'aire = surface couverte par la figure</p>
            <ul>
                <li><strong>Rectangle :</strong> A = Longueur × largeur</li>
                <li><strong>Carré :</strong> A = côté × côté</li>
                <li>Unité : cm², m², etc.</li>
            </ul>
            <div class="example">
                <strong>Rectangle 12×8 cm :</strong><br>
                A = 12 × 8 = 96 cm²
            </div>
        `
    },
    "conversions": {
        title: "📏 Les conversions",
        content: `
            <h4>Convertir les unités</h4>
            <p>Tableau de conversion :</p>
            <ul>
                <li><strong>Longueurs :</strong> km → m (×1000)</li>
                <li><strong>Masses :</strong> kg → g (×1000)</li>
                <li><strong>Durées :</strong> h → min (×60)</li>
                <li><strong>Capacités :</strong> L → cL (×100)</li>
            </ul>
            <div class="example">
                <strong>3 km = ? m</strong><br>
                3 × 1000 = 3 000 m
            </div>
        `
    }
};

const questions = [
    // PARTIE 1 : LES NOMBRES ET OPÉRATIONS
    {
        category: "🔢 Nombres et Opérations",
        concept: "valeur_positionnelle",
        question: "Dans le nombre 5 847, que représente le chiffre 8 ?",
        options: ["8 unités", "8 dizaines", "8 centaines", "8 milliers"],
        correct: 2,
        explanation: "Dans 5 847, le 8 est à la position des centaines, donc 8 × 100 = 800."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "comparaison_nombres",
        question: "Quel est le plus grand nombre ?",
        options: ["2 456", "2 546", "2 465", "2 564"],
        correct: 3,
        explanation: "On compare chiffre par chiffre : 2564 > 2546 > 2465 > 2456."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "addition",
        question: "Calculez : 347 + 158 + 95",
        options: ["590", "600", "610", "595"],
        correct: 1,
        explanation: "347 + 158 = 505, puis 505 + 95 = 600."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "soustraction",
        question: "Calculez : 1 000 - 247",
        options: ["753", "763", "743", "773"],
        correct: 0,
        explanation: "1 000 - 247 = 753 (on emprunte 10 aux dizaines pour les unités)."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "multiplication",
        question: "Calculez : 37 × 24",
        options: ["848", "888", "868", "878"],
        correct: 1,
        explanation: "37 × 24 : 37 × 4 = 148, 37 × 20 = 740, donc 148 + 740 = 888."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "division",
        question: "Calculez : 756 ÷ 9",
        options: ["84", "86", "82", "88"],
        correct: 0,
        explanation: "756 ÷ 9 = 84 (vérification : 84 × 9 = 756)."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "tables_multiplication",
        question: "9 × 7 = ?",
        options: ["54", "63", "72", "81"],
        correct: 1,
        explanation: "9 × 7 = 63 (table de 9)."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "multiples",
        question: "Parmi ces nombres, lequel est un multiple de 6 ?",
        options: ["34", "38", "42", "46"],
        correct: 2,
        explanation: "42 = 6 × 7, donc 42 est multiple de 6."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "diviseurs",
        question: "Combien le nombre 12 a-t-il de diviseurs ?",
        options: ["4", "5", "6", "7"],
        correct: 2,
        explanation: "Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12 (soit 6 diviseurs)."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "criteres_divisibilite",
        question: "Un nombre est divisible par 3 si :",
        options: ["Il finit par 3", "La somme de ses chiffres est divisible par 3", "Il contient le chiffre 3", "Il est impair"],
        correct: 1,
        explanation: "Critère de divisibilité par 3 : la somme des chiffres doit être divisible par 3."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "valeur_positionnelle",
        question: "Quel est l'ordre de grandeur de 3 876 ?",
        options: ["3 000", "4 000", "30 000", "40 000"],
        correct: 1,
        explanation: "3 876 est plus proche de 4 000 que de 3 000."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "addition",
        question: "47 + 38 = ?",
        options: ["85", "75", "95", "83"],
        correct: 0,
        explanation: "47 + 38 = 47 + 40 - 2 = 87 - 2 = 85."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "multiplication",
        question: "25 × 4 × 17 = ?",
        options: ["1 600", "1 700", "1 800", "1 900"],
        correct: 1,
        explanation: "25 × 4 = 100, puis 100 × 17 = 1 700."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "multiplication",
        question: "Julie achète 3 livres à 12€ chacun. Combien paie-t-elle ?",
        options: ["15€", "36€", "39€", "42€"],
        correct: 1,
        explanation: "3 × 12€ = 36€."
    },
    {
        category: "🔢 Nombres et Opérations",
        concept: "division",
        question: "45 ÷ 7 donne :",
        options: ["6 reste 3", "6 reste 4", "7 reste 1", "7 reste 2"],
        correct: 0,
        explanation: "45 = 7 × 6 + 3, donc quotient 6, reste 3."
    },

    // PARTIE 2 : LES FRACTIONS ET DÉCIMAUX
    {
        category: "🍕 Fractions et Décimaux",
        concept: "fractions_definition",
        question: "Que représente la fraction 3/5 ?",
        options: ["3 entiers et 5 parts", "3 parts sur 5 parts égales", "5 parts sur 3 parts égales", "3 + 5"],
        correct: 1,
        explanation: "Définition d'une fraction : numérateur/dénominateur. 3/5 = 3 parts sur 5 parts égales."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "comparaison_fractions",
        question: "Laquelle est la plus grande ?",
        options: ["1/2", "3/8", "2/5", "4/9"],
        correct: 0,
        explanation: "1/2 = 0,5 > 2/5 = 0,4 > 3/8 = 0,375 > 4/9 ≈ 0,44."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "fractions_definition",
        question: "3/6 est égal à :",
        options: ["1/3", "1/2", "2/3", "6/3"],
        correct: 1,
        explanation: "3/6 = 1/2 (on divise numérateur et dénominateur par 3)."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "decimaux",
        question: "Comment écrit-on \"douze unités et sept dixièmes\" ?",
        options: ["12,7", "12,07", "127", "12,70"],
        correct: 0,
        explanation: "Douze unités = 12, sept dixièmes = 0,7, donc 12,7."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "decimaux",
        question: "Quel est le plus grand ?",
        options: ["5,8", "5,79", "5,82", "5,789"],
        correct: 2,
        explanation: "5,82 > 5,8 > 5,789 > 5,79."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "fractions_definition",
        question: "Que vaut 1/4 en décimal ?",
        options: ["0,25", "0,4", "0,14", "4,1"],
        correct: 0,
        explanation: "1/4 = 1 ÷ 4 = 0,25."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "decimaux",
        question: "7,8 + 12,45 = ?",
        options: ["19,25", "20,23", "20,25", "19,23"],
        correct: 2,
        explanation: "On aligne les virgules : 7,80 + 12,45 = 20,25."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "decimaux",
        question: "4,67 × 10 = ?",
        options: ["4,670", "46,7", "467", "0,467"],
        correct: 1,
        explanation: "Multiplier par 10 décale la virgule d'un rang vers la droite."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "fractions_definition",
        question: "Dans une classe de 28 élèves, 3/4 mangent à la cantine. Combien d'élèves mangent à la cantine ?",
        options: ["19", "21", "23", "25"],
        correct: 1,
        explanation: "3/4 de 28 = (3 × 28) ÷ 4 = 84 ÷ 4 = 21."
    },
    {
        category: "🍕 Fractions et Décimaux",
        concept: "decimaux",
        question: "Sur une droite graduée de 0 à 1, où se place 0,6 ?",
        options: ["Plus près de 0 que de 1", "Plus près de 1 que de 0", "Exactement au milieu", "On ne peut pas le placer"],
        correct: 1,
        explanation: "0,6 est à 0,4 de 1 et à 0,6 de 0, donc plus près de 1."
    },

    // PARTIE 3 : GÉOMÉTRIE
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Combien de côtés a un hexagone ?",
        options: ["5", "6", "7", "8"],
        correct: 1,
        explanation: "Un hexagone a 6 côtés (hexa = six)."
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Un carré a :",
        options: ["4 côtés égaux et 4 angles droits", "4 côtés et 4 angles quelconques", "4 côtés égaux mais pas d'angles droits", "4 angles droits mais pas de côtés égaux"],
        correct: 0,
        explanation: "Définition du carré : 4 côtés égaux et 4 angles droits."
    },
    {
        category: "📐 Géométrie",
        concept: "perimetre",
        question: "Un rectangle mesure 12 cm sur 8 cm. Quel est son périmètre ?",
        options: ["20 cm", "96 cm", "40 cm", "32 cm"],
        correct: 2,
        explanation: "Périmètre = 2 × (longueur + largeur) = 2 × (12 + 8) = 40 cm."
    },
    {
        category: "📐 Géométrie",
        concept: "aire",
        question: "Le même rectangle (12 cm × 8 cm) a une aire de :",
        options: ["40 cm²", "96 cm²", "20 cm²", "48 cm²"],
        correct: 1,
        explanation: "Aire = longueur × largeur = 12 × 8 = 96 cm²."
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Dans un cercle, comment appelle-t-on la distance du centre au bord ?",
        options: ["Le diamètre", "Le rayon", "La corde", "La circonférence"],
        correct: 1,
        explanation: "Le rayon va du centre au bord du cercle."
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Deux droites parallèles :",
        options: ["Se coupent en un point", "Se coupent en deux points", "Ne se coupent jamais", "Se coupent à angle droit"],
        correct: 2,
        explanation: "Définition des droites parallèles : elles ne se coupent jamais."
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Un angle droit mesure :",
        options: ["45°", "90°", "180°", "360°"],
        correct: 1,
        explanation: "Un angle droit mesure 90°."
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Dans un triangle équilatéral :",
        options: ["Tous les côtés sont égaux", "Deux côtés sont égaux", "Tous les angles sont droits", "Un angle est droit"],
        correct: 0,
        explanation: "Dans un triangle équilatéral, les 3 côtés sont égaux."
    },

    // PARTIE 4 : MESURES
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "3 km = ? m",
        options: ["30 m", "300 m", "3 000 m", "30 000 m"],
        correct: 2,
        explanation: "1 km = 1 000 m, donc 3 km = 3 000 m."
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "2 500 g = ? kg",
        options: ["2,5 kg", "25 kg", "0,25 kg", "250 kg"],
        correct: 0,
        explanation: "1 000 g = 1 kg, donc 2 500 g = 2,5 kg."
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "2 heures 30 minutes = ? minutes",
        options: ["230 minutes", "130 minutes", "150 minutes", "90 minutes"],
        correct: 2,
        explanation: "2h = 120 min, donc 2h30 = 120 + 30 = 150 min."
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "Il est 14h45. Dans 1h15, quelle heure sera-t-il ?",
        options: ["15h60", "16h00", "15h30", "16h15"],
        correct: 1,
        explanation: "14h45 + 1h15 = 15h60 = 16h00."
    },
    {
        category: "📏 Mesures",
        concept: "perimetre",
        question: "Le périmètre d'un carré de 5 cm de côté est :",
        options: ["10 cm", "15 cm", "20 cm", "25 cm"],
        correct: 2,
        explanation: "Périmètre du carré = 4 × côté = 4 × 5 = 20 cm."
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "1 litre = ? cl",
        options: ["10 cl", "100 cl", "1 000 cl", "10 000 cl"],
        correct: 1,
        explanation: "1 litre = 100 centilitres."
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "Une course de 5 km. Paul a déjà couru 3 200 m. Combien lui reste-t-il à courir ?",
        options: ["1 800 m", "2 800 m", "1 200 m", "2 200 m"],
        correct: 0,
        explanation: "5 km = 5 000 m, reste : 5 000 - 3 200 = 1 800 m."
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let showingExplanation = false;
let showingConcept = true;

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = questions[currentQuestion];
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    
    // Réinitialiser l'état
    showingConcept = true;
    showingExplanation = false;
    
    // Mise à jour de la barre de progression
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('categoryTag').textContent = question.category;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
    
    // Préparer la question (cachée)
    document.getElementById('questionText').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="option${index}">
            <label for="option${index}">${String.fromCharCode(97 + index)}) ${option}</label>
        `;
        optionDiv.onclick = () => selectOption(index, optionDiv);
        optionsContainer.appendChild(optionDiv);
    });

    // Masquer la question et l'explication
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById('explanation').style.display = 'none';
    
    // Afficher le concept en premier
    showConcept();
}

function showConcept() {
    const question = questions[currentQuestion];
    const concept = concepts[question.concept];
    
    if (concept) {
        document.getElementById('conceptSection').style.display = 'block';
        document.getElementById('conceptContent').innerHTML = `
            <h3>${concept.title}</h3>
            ${concept.content}
        `;
    } else {
        // Si pas de concept, passer directement à la question
        showQuestion();
    }
}

function showQuestion() {
    document.getElementById('conceptSection').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    showingConcept = false;
    
    // Mettre à jour le bouton "Précédent" pour revenir au concept
    updateNavigationButtons();
}

function showConcept() {
    const question = questions[currentQuestion];
    const concept = concepts[question.concept];
    
    if (concept) {
        document.getElementById('conceptSection').style.display = 'block';
        document.getElementById('questionBox').style.display = 'none';
        document.getElementById('explanation').style.display = 'none';
        document.getElementById('conceptContent').innerHTML = `
            <h3>${concept.title}</h3>
            ${concept.content}
        `;
        showingConcept = true;
        showingExplanation = false;
        
        // Mettre à jour les boutons de navigation
        updateNavigationButtons();
    } else {
        // Si pas de concept, passer directement à la question
        showQuestion();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (showingConcept) {
        // Sur la page concept
        if (currentQuestion > 0) {
            prevBtn.style.display = 'inline-block';
            prevBtn.classList.add('visible');
            prevBtn.textContent = '⬅️ Question précédente';
            prevBtn.onclick = () => prevQuestion();
        } else {
            prevBtn.style.display = 'none';
            prevBtn.classList.remove('visible');
        }
        
        nextBtn.textContent = 'Voir la question ➡️';
        nextBtn.onclick = () => showQuestion();
        
    } else {
        // Sur la page question
        // Toujours permettre de revenir au concept
        const backToConceptBtn = document.createElement('button');
        backToConceptBtn.type = 'button';
        backToConceptBtn.className = 'btn-secondary';
        backToConceptBtn.textContent = '📖 Revoir le concept';
        backToConceptBtn.onclick = () => showConcept();
        
        // Remplacer le contenu des boutons de navigation
        const navButtons = document.querySelector('.nav-buttons');
        navButtons.innerHTML = '';
        
        // Bouton retour concept
        navButtons.appendChild(backToConceptBtn);
        
        // Bouton précédent (si pas la première question)
        if (currentQuestion > 0) {
            const prevQuestionBtn = document.createElement('button');
            prevQuestionBtn.type = 'button';
            prevQuestionBtn.className = 'btn-secondary';
            prevQuestionBtn.textContent = '⬅️ Question précédente';
            prevQuestionBtn.onclick = () => prevQuestion();
            navButtons.appendChild(prevQuestionBtn);
        }
        
        // Bouton suivant
        const nextQuestionBtn = document.createElement('button');
        nextQuestionBtn.type = 'button';
        nextQuestionBtn.className = 'btn';
        nextQuestionBtn.textContent = currentQuestion === questions.length - 1 ? 'Voir les résultats 🎯' : 'Suivant ➡️';
        nextQuestionBtn.onclick = () => nextQuestion();
        navButtons.appendChild(nextQuestionBtn);
    }
}

function selectOption(optionIndex, optionDiv) {
    // Supprimer la sélection précédente
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Ajouter la sélection actuelle
    optionDiv.classList.add('selected');
    
    // Enregistrer la réponse
    userAnswers[currentQuestion] = optionIndex;
    
    // Afficher l'explication
    showExplanation();
}

function showExplanation() {
    const question = questions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];
    
    // Colorer les options
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === userAnswer && index !== question.correct) {
            opt.classList.add('incorrect');
        }
    });
    
    // Afficher l'explication
    document.getElementById('explanationText').textContent = question.explanation;
    document.getElementById('explanation').style.display = 'block';
    showingExplanation = true;
}

function nextQuestion() {
    if (showingConcept) {
        showQuestion();
        return;
    }
    
    if (!showingExplanation && userAnswers[currentQuestion] === undefined) {
        alert('Veuillez sélectionner une réponse avant de continuer.');
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showResults() {
    // Calculer le score
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === questions[index].correct) {
            score++;
        }
    });

    // Masquer le container de questions
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Afficher le score
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('finalScore').textContent = `${score}/${questions.length}`;
    document.getElementById('scoreCircle').style.background = getScoreColor(percentage);

    // Message personnalisé
    const message = getScoreMessage(score);
    document.getElementById('scoreMessage').textContent = message.text;

    // Détails du score
    const scoreDetails = document.getElementById('scoreDetails');
    scoreDetails.innerHTML = `
        <h3>📊 Détails de tes résultats :</h3>
        <p><strong>Score total :</strong> ${score} / ${questions.length} (${percentage}%)</p>
        <p><strong>Nombres et Opérations :</strong> ${getPartScore(0, 15)} / 15</p>
        <p><strong>Fractions et Décimaux :</strong> ${getPartScore(15, 25)} / 10</p>
        <p><strong>Géométrie :</strong> ${getPartScore(25, 33)} / 8</p>
        <p><strong>Mesures :</strong> ${getPartScore(33, 40)} / 7</p>
    `;

    // Badge
    const badgeContainer = document.getElementById('badgeContainer');
    badgeContainer.innerHTML = `<span class="badge ${message.badgeClass}">${message.badge}</span>`;
}

function getPartScore(start, end) {
    let partScore = 0;
    for (let i = start; i < end; i++) {
        if (userAnswers[i] === questions[i].correct) {
            partScore++;
        }
    }
    return partScore;
}

function getScoreColor(percentage) {
    if (percentage >= 90) return 'linear-gradient(135deg, #00d4aa, #01a085)';
    if (percentage >= 75) return 'linear-gradient(135deg, #667eea, #764ba2)';
    if (percentage >= 60) return 'linear-gradient(135deg, #ffeaa7, #fab1a0)';
    return 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
}

function getScoreMessage(score) {
    if (score >= 36) {
        return {
            text: "🏆 Excellent ! Tu es parfaitement prête pour la 6e !",
            badge: "🌟 Excellence",
            badgeClass: "badge-excellent"
        };
    } else if (score >= 30) {
        return {
            text: "🌟 Très bien ! Quelques révisions et tu seras au top !",
            badge: "👍 Très bien",
            badgeClass: "badge-good"
        };
    } else if (score >= 24) {
        return {
            text: "💪 Bien ! Continue tes efforts, tu y es presque !",
            badge: "📚 Bien",
            badgeClass: "badge-good"
        };
    } else if (score >= 18) {
        return {
            text: "📚 Assez bien. Il faut revoir certaines notions.",
            badge: "⚡ À améliorer",
            badgeClass: "badge-average"
        };
    } else {
        return {
            text: "🚀 Des révisions sont nécessaires. Courage, tu vas y arriver !",
            badge: "💪 Persévère",
            badgeClass: "badge-needs-work"
        };
    }
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showingExplanation = false;
    showingConcept = true;
    
    document.getElementById('results').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}