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
    },
    "proportionnalite": {
        title: "🔗 La proportionnalité",
        content: `
            <h4>Reconnaître une situation de proportionnalité</h4>
            <p>Deux grandeurs sont proportionnelles si :</p>
            <ul>
                <li>Quand l'une double, l'autre double</li>
                <li>Le coefficient de proportionnalité est constant</li>
                <li>On peut faire un produit en croix</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 3 kg de pommes coûtent 9€<br>
                Combien coûtent 5 kg ?<br>
                3 kg → 9€, donc 1 kg → 3€<br>
                5 kg → 5 × 3€ = 15€
            </div>
        `
    },
    "echelles": {
        title: "📏 Les échelles",
        content: `
            <h4>Comprendre les échelles</h4>
            <p>Une échelle indique le rapport entre les distances :</p>
            <ul>
                <li><strong>Échelle 1/1000 :</strong> 1 cm sur la carte = 1000 cm (10 m) dans la réalité</li>
                <li><strong>Échelle 1/100000 :</strong> 1 cm = 1 km dans la réalité</li>
                <li>Plus le dénominateur est grand, plus l'échelle est petite</li>
            </ul>
            <div class="example">
                <strong>Carte à l'échelle 1/50000 :</strong><br>
                2 cm sur la carte = 2 × 50000 = 100000 cm = 1 km
            </div>
        `
    },
    "pourcentages": {
        title: "📊 Les pourcentages",
        content: `
            <h4>Comprendre les pourcentages</h4>
            <p>Un pourcentage exprime une proportion sur 100 :</p>
            <ul>
                <li><strong>50% = 50/100 = 0,5</strong></li>
                <li>Pour calculer : (partie/total) × 100</li>
                <li>25% de 80 = (25 × 80) ÷ 100 = 20</li>
            </ul>
            <div class="example">
                <strong>Dans une classe de 25 élèves, 20 ont réussi :</strong><br>
                Pourcentage de réussite = (20/25) × 100 = 80%
            </div>
        `
    },
    "nombres_relatifs": {
        title: "🌡️ Les nombres relatifs",
        content: `
            <h4>Les nombres positifs et négatifs</h4>
            <p>Les nombres relatifs incluent les nombres positifs et négatifs :</p>
            <ul>
                <li><strong>Positifs :</strong> +5 (ou simplement 5)</li>
                <li><strong>Négatifs :</strong> -3, -10, -0,5</li>
                <li>Sur une droite graduée : négatifs à gauche de 0</li>
                <li>-5 < -2 < 0 < +3 < +7</li>
            </ul>
            <div class="example">
                <strong>Température :</strong><br>
                Il fait -2°C le matin, +5°C l'après-midi<br>
                Écart = +5 - (-2) = +5 + 2 = 7°C
            </div>
        `
    },
    "problemes_concrets": {
        title: "🧮 Résoudre des problèmes",
        content: `
            <h4>Méthode pour résoudre un problème</h4>
            <p>Les étapes essentielles :</p>
            <ul>
                <li><strong>1. Lire</strong> attentivement l'énoncé</li>
                <li><strong>2. Identifier</strong> les données et la question</li>
                <li><strong>3. Choisir</strong> l'opération appropriée</li>
                <li><strong>4. Calculer</strong> et vérifier le résultat</li>
            </ul>
            <div class="example">
                <strong>Julie a 45€. Elle achète un livre à 12€ et des bonbons à 3€50. Combien lui reste-t-il ?</strong><br>
                45 - 12 - 3,50 = 29,50€
            </div>
        `
    },
    "statistics_intro": {
        title: "📊 Introduction aux statistiques",
        content: `
            <h4>Comprendre les données</h4>
            <p>Les statistiques nous aident à analyser des données :</p>
            <ul>
                <li><strong>Moyenne :</strong> somme des valeurs ÷ nombre de valeurs</li>
                <li><strong>Graphiques :</strong> barres, secteurs, courbes</li>
                <li><strong>Tableaux :</strong> organiser l'information</li>
            </ul>
            <div class="example">
                <strong>Notes de Tom : 12, 15, 8, 16, 14</strong><br>
                Moyenne = (12+15+8+16+14) ÷ 5 = 65 ÷ 5 = 13
            </div>
        `
    },
    "probabilites_intro": {
        title: "🎲 Introduction aux probabilités",
        content: `
            <h4>Le hasard et les probabilités</h4>
            <p>Les probabilités mesurent les chances qu'un événement se produise :</p>
            <ul>
                <li><strong>Impossible :</strong> probabilité 0</li>
                <li><strong>Certain :</strong> probabilité 1</li>
                <li><strong>Équiprobable :</strong> même chance pour chaque résultat</li>
            </ul>
            <div class="example">
                <strong>Dé à 6 faces :</strong><br>
                Probabilité d'obtenir un 4 = 1/6<br>
                Probabilité d'obtenir un nombre pair = 3/6 = 1/2
            </div>
        `
    },
    "solides_geometrie": {
        title: "📦 Les solides",
        content: `
            <h4>Les solides géométriques</h4>
            <p>Les principales formes en 3 dimensions :</p>
            <ul>
                <li><strong>Cube :</strong> 6 faces carrées identiques</li>
                <li><strong>Pavé droit :</strong> 6 faces rectangulaires</li>
                <li><strong>Cylindre :</strong> 2 disques reliés par une surface courbe</li>
                <li><strong>Sphère :</strong> forme de balle parfaite</li>
            </ul>
            <div class="example">
                <strong>Patron d'un cube :</strong><br>
                6 carrés identiques qui se plient pour former le cube
            </div>
        `
    },
    "symetrie": {
        title: "🪞 La symétrie",
        content: `
            <h4>La symétrie axiale</h4>
            <p>Une figure est symétrique par rapport à un axe :</p>
            <ul>
                <li>L'axe de symétrie est comme un miroir</li>
                <li>Chaque point a son symétrique de l'autre côté</li>
                <li>La distance à l'axe est la même des deux côtés</li>
            </ul>
            <div class="example">
                <strong>Lettre H :</strong><br>
                Elle a un axe de symétrie vertical au milieu<br>
                Les deux moitiés sont identiques
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
    },

    // PARTIE 5 : PROPORTIONNALITÉ ET POURCENTAGES
    {
        category: "🔗 Proportionnalité",
        concept: "proportionnalite",
        question: "Si 4 kg de pommes coûtent 12€, combien coûtent 7 kg ?",
        options: ["21€", "18€", "24€", "28€"],
        correct: 0,
        explanation: "4 kg → 12€, donc 1 kg → 3€. Alors 7 kg → 7 × 3€ = 21€."
    },
    {
        category: "🔗 Proportionnalité",
        concept: "echelles",
        question: "Sur une carte à l'échelle 1/25000, 4 cm représentent quelle distance réelle ?",
        options: ["100 m", "1 km", "10 km", "2,5 km"],
        correct: 1,
        explanation: "4 cm × 25000 = 100000 cm = 1000 m = 1 km."
    },
    {
        category: "🔗 Proportionnalité",
        concept: "pourcentages",
        question: "Dans une classe de 20 élèves, 15 ont réussi l'examen. Quel est le pourcentage de réussite ?",
        options: ["65%", "70%", "75%", "80%"],
        correct: 2,
        explanation: "(15/20) × 100 = 75%."
    },
    {
        category: "🔗 Proportionnalité",
        concept: "proportionnalite",
        question: "Une voiture consomme 6L pour 100 km. Combien consomme-t-elle pour 350 km ?",
        options: ["18L", "21L", "24L", "27L"],
        correct: 1,
        explanation: "Proportion : 6L pour 100 km = x L pour 350 km. x = (6 × 350) ÷ 100 = 21L."
    },
    {
        category: "🔗 Proportionnalité",
        concept: "pourcentages",
        question: "25% de 80 = ?",
        options: ["15", "20", "25", "30"],
        correct: 1,
        explanation: "25% de 80 = (25 × 80) ÷ 100 = 2000 ÷ 100 = 20."
    },

    // PARTIE 6 : NOMBRES RELATIFS
    {
        category: "🌡️ Nombres relatifs",
        concept: "nombres_relatifs",
        question: "Quel nombre est le plus petit ?",
        options: ["-8", "-3", "2", "0"],
        correct: 0,
        explanation: "Sur une droite graduée : -8 < -3 < 0 < 2."
    },
    {
        category: "🌡️ Nombres relatifs",
        concept: "nombres_relatifs",
        question: "La température était de -5°C le matin et +8°C l'après-midi. Quelle est la différence ?",
        options: ["3°C", "13°C", "8°C", "5°C"],
        correct: 1,
        explanation: "Différence = +8 - (-5) = +8 + 5 = 13°C."
    },
    {
        category: "🌡️ Nombres relatifs",
        concept: "nombres_relatifs",
        question: "Range ces nombres dans l'ordre croissant : +3, -7, 0, -2",
        options: ["-7 < -2 < 0 < +3", "-2 < -7 < 0 < +3", "0 < -2 < -7 < +3", "+3 < 0 < -2 < -7"],
        correct: 0,
        explanation: "Ordre croissant : -7 < -2 < 0 < +3."
    },

    // PARTIE 7 : RÉSOLUTION DE PROBLÈMES
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Marie a 35€. Elle achète un livre à 8€50 et un cahier à 4€25. Combien lui reste-t-il ?",
        options: ["22€25", "23€75", "21€50", "24€00"],
        correct: 0,
        explanation: "35 - 8,50 - 4,25 = 35 - 12,75 = 22,25€."
    },
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Un paquet de 12 gâteaux coûte 18€. Quel est le prix d'un gâteau ?",
        options: ["1€50", "1€25", "1€75", "2€00"],
        correct: 0,
        explanation: "Prix d'un gâteau = 18€ ÷ 12 = 1€50."
    },
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Dans un bus de 48 places, il y a 35 passagers. Combien de places sont libres ?",
        options: ["13", "11", "15", "17"],
        correct: 0,
        explanation: "Places libres = 48 - 35 = 13."
    },

    // PARTIE 8 : STATISTIQUES ET PROBABILITÉS
    {
        category: "📊 Statistiques",
        concept: "statistics_intro",
        question: "Les notes de Paul : 14, 16, 12, 18, 10. Quelle est sa moyenne ?",
        options: ["14", "15", "13", "16"],
        correct: 0,
        explanation: "(14+16+12+18+10) ÷ 5 = 70 ÷ 5 = 14."
    },
    {
        category: "📊 Statistiques",
        concept: "probabilites_intro",
        question: "En lançant un dé à 6 faces, quelle est la probabilité d'obtenir un nombre impair ?",
        options: ["1/2", "1/3", "2/3", "1/6"],
        correct: 0,
        explanation: "Nombres impairs : 1, 3, 5. Soit 3 cas favorables sur 6 = 3/6 = 1/2."
    },
    {
        category: "📊 Statistiques",
        concept: "probabilites_intro",
        question: "Dans un sac de 20 billes (8 rouges, 12 bleues), quelle est la probabilité de tirer une bille rouge ?",
        options: ["8/20", "12/20", "8/12", "20/8"],
        correct: 0,
        explanation: "Probabilité = nombre de cas favorables / nombre total = 8/20 = 2/5."
    },

    // PARTIE 9 : GÉOMÉTRIE AVANCÉE
    {
        category: "📦 Solides",
        concept: "solides_geometrie",
        question: "Combien de faces a un cube ?",
        options: ["4", "6", "8", "12"],
        correct: 1,
        explanation: "Un cube a 6 faces carrées identiques."
    },
    {
        category: "📦 Solides",
        concept: "solides_geometrie",
        question: "Quel est le volume d'un cube de 3 cm de côté ?",
        options: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
        correct: 2,
        explanation: "Volume du cube = côté³ = 3³ = 27 cm³."
    },
    {
        category: "🪞 Symétrie",
        concept: "symetrie",
        question: "Laquelle de ces lettres a un axe de symétrie vertical ?",
        options: ["B", "A", "R", "F"],
        correct: 1,
        explanation: "La lettre A a un axe de symétrie vertical qui passe par son milieu."
    },
    {
        category: "🪞 Symétrie",
        concept: "symetrie",
        question: "Un rectangle a combien d'axes de symétrie ?",
        options: ["1", "2", "3", "4"],
        correct: 1,
        explanation: "Un rectangle a 2 axes de symétrie : un horizontal et un vertical."
    }
];

// Organisation par semaine
const weeklyStructure = {
    "Semaine 1": {
        title: "🔢 Nombres et Opérations - Semaine 1",
        questions: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        concepts: ["valeur_positionnelle", "comparaison_nombres", "addition", "soustraction", "multiplication", "division", "tables_multiplication", "multiples", "diviseurs", "criteres_divisibilite"]
    },
    "Semaine 2": {
        title: "🔢 Nombres et Opérations - Semaine 2", 
        questions: [10, 11, 12, 13, 14],
        concepts: ["valeur_positionnelle", "addition", "multiplication", "division"]
    },
    "Semaine 3": {
        title: "🍕 Fractions et Décimaux",
        questions: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        concepts: ["fractions_definition", "comparaison_fractions", "decimaux"]
    },
    "Semaine 4": {
        title: "📐 Géométrie de base",
        questions: [25, 26, 27, 28, 29, 30, 31, 32],
        concepts: ["geometrie_figures", "perimetre", "aire"]
    },
    "Semaine 5": {
        title: "📏 Mesures et Conversions",
        questions: [33, 34, 35, 36, 37, 38, 39],
        concepts: ["conversions", "perimetre"]
    },
    "Semaine 6": {
        title: "🔗 Proportionnalité et Pourcentages",
        questions: [40, 41, 42, 43, 44],
        concepts: ["proportionnalite", "echelles", "pourcentages"]
    },
    "Semaine 7": {
        title: "🌡️ Nombres Relatifs",
        questions: [45, 46, 47],
        concepts: ["nombres_relatifs"]
    },
    "Semaine 8": {
        title: "🧮 Résolution de Problèmes",
        questions: [48, 49, 50],
        concepts: ["problemes_concrets"]
    },
    "Semaine 9": {
        title: "📊 Statistiques et Probabilités",
        questions: [51, 52, 53],
        concepts: ["statistics_intro", "probabilites_intro"]
    },
    "Semaine 10": {
        title: "📦 Géométrie Avancée",
        questions: [54, 55, 56, 57],
        concepts: ["solides_geometrie", "symetrie"]
    }
};

let currentWeek = "Semaine 1";
let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let showingExplanation = false;
let showingConcept = true;

function startQuiz() {
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('weekSelection').style.display = 'block';
}

function showWeekSelection() {
    const weekSelection = document.getElementById('weekSelection');
    weekSelection.innerHTML = `
        <h2>📅 Choisis ta semaine de révision</h2>
        <div class="week-grid">
            ${Object.keys(weeklyStructure).map(week => `
                <div class="week-card" onclick="selectWeek('${week}')">
                    <h3>${weeklyStructure[week].title}</h3>
                    <p>${weeklyStructure[week].questions.length} questions</p>
                    <div class="week-progress">
                        <div class="week-progress-fill" id="progress-${week}" style="width: ${getWeekProgress(week)}%"></div>
                    </div>
                </div>
            `).join('')}
        </div>
        <button type="button" class="btn-secondary" onclick="showStartScreen()">⬅️ Retour</button>
    `;
    
    // Cacher l'écran de démarrage et afficher la sélection des semaines
    document.getElementById('startScreen').style.display = 'none';
    weekSelection.style.display = 'block';
}

function selectWeek(week) {
    currentWeek = week;
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showingExplanation = false;
    showingConcept = true;
    
    document.getElementById('weekSelection').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    loadQuestion();
}

function getWeekProgress(week) {
    const weekQuestions = weeklyStructure[week].questions;
    let answered = 0;
    weekQuestions.forEach(qIndex => {
        if (userAnswers[qIndex] !== undefined) {
            answered++;
        }
    });
    return (answered / weekQuestions.length) * 100;
}

function showStartScreen() {
    document.getElementById('weekSelection').style.display = 'none';
    document.getElementById('startScreen').style.display = 'block';
}

function loadQuestion() {
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    const question = questions[questionIndex];
    const progress = ((currentQuestion + 1) / weekQuestions.length) * 100;
    
    // Réinitialiser l'état
    showingConcept = true;
    showingExplanation = false;
    
    // Mise à jour de la barre de progression
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('categoryTag').textContent = question.category;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} / ${weekQuestions.length} - ${currentWeek}`;
    
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
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    const question = questions[questionIndex];
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

function showQuestion() {
    document.getElementById('conceptSection').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    showingConcept = false;
    
    // Mettre à jour le bouton "Précédent" pour revenir au concept
    updateNavigationButtons();
}

function updateNavigationButtons() {
    const weekQuestions = weeklyStructure[currentWeek].questions;
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
        // Remplacer le contenu des boutons de navigation
        const navButtons = document.querySelector('.nav-buttons');
        navButtons.innerHTML = '';
        
        // Bouton retour concept
        const backToConceptBtn = document.createElement('button');
        backToConceptBtn.type = 'button';
        backToConceptBtn.className = 'btn-secondary';
        backToConceptBtn.textContent = '📖 Revoir le concept';
        backToConceptBtn.onclick = () => showConcept();
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
        
        // Bouton "Demander à tonton"
        const askTontonBtn = document.createElement('button');
        askTontonBtn.type = 'button';
        askTontonBtn.className = 'btn-ask-tonton';
        askTontonBtn.textContent = '👨‍🏫 Demander à tonton';
        askTontonBtn.onclick = () => askTonton();
        navButtons.appendChild(askTontonBtn);
        
        // Bouton suivant
        const nextQuestionBtn = document.createElement('button');
        nextQuestionBtn.type = 'button';
        nextQuestionBtn.className = 'btn';
        nextQuestionBtn.textContent = currentQuestion === weekQuestions.length - 1 ? 'Voir les résultats 🎯' : 'Suivant ➡️';
        nextQuestionBtn.onclick = () => nextQuestion();
        navButtons.appendChild(nextQuestionBtn);
    }
}

function askTonton() {
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    const question = questions[questionIndex];
    
    const subject = encodeURIComponent('IMPORTANT; email à ouvrir dans l\'app Gmail d\'Android');
    const body = encodeURIComponent(`
Bonjour tonton,

J'ai une question sur les maths de 6e :

Question : ${question.question}

Les options sont :
${question.options.map((opt, i) => `${String.fromCharCode(97 + i)}) ${opt}`).join('\n')}

Je suis sur la ${currentWeek}, question ${currentQuestion + 1}.

Peux-tu m'aider à comprendre ?

Merci !
    `);
    
    // Lien Gmail pour Android
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=jhouedanou@gmail.com&su=${subject}&body=${body}`;
    window.open(gmailUrl, '_blank');
}

function selectOption(optionIndex, optionDiv) {
    // Supprimer la sélection précédente
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Ajouter la sélection actuelle
    optionDiv.classList.add('selected');
    
    // Enregistrer la réponse
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    userAnswers[questionIndex] = optionIndex;
    
    // Afficher l'explication
    showExplanation();
}

function showExplanation() {
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    const question = questions[questionIndex];
    const userAnswer = userAnswers[questionIndex];
    
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
    
    const weekQuestions = weeklyStructure[currentWeek].questions;
    const questionIndex = weekQuestions[currentQuestion];
    
    if (!showingExplanation && userAnswers[questionIndex] === undefined) {
        alert('Veuillez sélectionner une réponse avant de continuer.');
        return;
    }

    if (currentQuestion < weekQuestions.length - 1) {
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
    const weekQuestions = weeklyStructure[currentWeek].questions;
    
    // Calculer le score pour cette semaine
    score = 0;
    weekQuestions.forEach((questionIndex) => {
        if (userAnswers[questionIndex] === questions[questionIndex].correct) {
            score++;
        }
    });

    // Masquer le container de questions
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Afficher le score
    const percentage = Math.round((score / weekQuestions.length) * 100);
    document.getElementById('finalScore').textContent = `${score}/${weekQuestions.length}`;
    document.getElementById('scoreCircle').style.background = getScoreColor(percentage);

    // Message personnalisé
    const message = getScoreMessage(score, weekQuestions.length);
    document.getElementById('scoreMessage').textContent = message.text;

    // Détails du score
    const scoreDetails = document.getElementById('scoreDetails');
    scoreDetails.innerHTML = `
        <h3>📊 Détails de tes résultats pour ${currentWeek} :</h3>
        <p><strong>Score total :</strong> ${score} / ${weekQuestions.length} (${percentage}%)</p>
        <p><strong>Semaine :</strong> ${currentWeek}</p>
    `;

    // Badge
    const badgeContainer = document.getElementById('badgeContainer');
    badgeContainer.innerHTML = `<span class="badge ${message.badgeClass}">${message.badge}</span>`;
}

function getScoreMessage(score, totalQuestions) {
    const percentage = (score / totalQuestions) * 100;
    
    if (percentage >= 90) {
        return {
            text: "🏆 Excellent ! Tu maîtrises parfaitement cette semaine !",
            badge: "🌟 Excellence",
            badgeClass: "badge-excellent"
        };
    } else if (percentage >= 75) {
        return {
            text: "🌟 Très bien ! Quelques révisions et tu seras au top !",
            badge: "👍 Très bien",
            badgeClass: "badge-good"
        };
    } else if (percentage >= 60) {
        return {
            text: "💪 Bien ! Continue tes efforts, tu y es presque !",
            badge: "📚 Bien",
            badgeClass: "badge-good"
        };
    } else if (percentage >= 40) {
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

function getScoreColor(percentage) {
    if (percentage >= 90) return 'linear-gradient(135deg, #00d4aa, #01a085)';
    if (percentage >= 75) return 'linear-gradient(135deg, #667eea, #764ba2)';
    if (percentage >= 60) return 'linear-gradient(135deg, #ffeaa7, #fab1a0)';
    return 'linear-gradient(135deg, #ff6b6b, #ee5a24)';
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

// L'élément weekSelection est maintenant directement dans le HTML
// Plus besoin de le créer dynamiquement