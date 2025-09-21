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
        title: "➗ La division euclidienne",
        content: `
            <h4>Division avec reste (niveau 6ème)</h4>
            <p>Dans une division euclidienne : <strong>Dividende = Diviseur × Quotient + Reste</strong></p>
            <ul>
                <li>Le reste doit toujours être <strong>inférieur</strong> au diviseur</li>
                <li>Si reste = 0, la division est exacte</li>
                <li>Méthode : estimer le quotient, calculer le reste</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 847 ÷ 23<br>
                • 23 × 30 = 690 (trop petit)<br>
                • 23 × 40 = 920 (trop grand)<br>
                • 23 × 36 = 828<br>
                • 847 - 828 = 19 < 23 ✓<br>
                <strong>Donc : 847 = 23 × 36 + 19</strong>
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
    "ppcm": {
        title: "🔢 PPCM (Plus Petit Commun Multiple)",
        content: `
            <h4>Qu'est-ce que le PPCM ?</h4>
            <p>Le PPCM de deux nombres est le plus petit multiple commun à ces deux nombres.</p>
            <ul>
                <li>Lister les multiples de chaque nombre</li>
                <li>Identifier le plus petit nombre qui apparaît dans les deux listes</li>
                <li>Utile pour : synchroniser des événements, additionner des fractions</li>
            </ul>
            <div class="example">
                <strong>PPCM de 6 et 8 :</strong><br>
                Multiples de 6 : 6, 12, 18, <strong>24</strong>, 30, 36...<br>
                Multiples de 8 : 8, 16, <strong>24</strong>, 32, 40...<br>
                <strong>PPCM(6,8) = 24</strong>
            </div>
        `
    },
    "pgcd": {
        title: "🔢 PGCD (Plus Grand Commun Diviseur)",
        content: `
            <h4>Qu'est-ce que le PGCD ?</h4>
            <p>Le PGCD de deux nombres est le plus grand diviseur commun à ces deux nombres.</p>
            <ul>
                <li>Lister les diviseurs de chaque nombre</li>
                <li>Identifier le plus grand nombre qui apparaît dans les deux listes</li>
                <li>Utile pour : simplifier des fractions, partager en parts égales</li>
            </ul>
            <div class="example">
                <strong>PGCD de 18 et 24 :</strong><br>
                Diviseurs de 18 : 1, 2, 3, <strong>6</strong>, 9, 18<br>
                Diviseurs de 24 : 1, 2, 3, 4, <strong>6</strong>, 8, 12, 24<br>
                <strong>PGCD(18,24) = 6</strong>
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
    },
    "calcul_mental": {
        title: "🧠 Le calcul mental",
        content: `
            <h4>Techniques de calcul mental</h4>
            <p>Le calcul mental permet de calculer rapidement sans poser les opérations :</p>
            <ul>
                <li><strong>Addition :</strong> Ajouter par paquets de 10 ou compléter à la dizaine</li>
                <li><strong>Multiplication :</strong> Utiliser les tables et les propriétés</li>
                <li><strong>Pourcentages :</strong> 50% = ÷2, 25% = ÷4, 10% = ÷10</li>
                <li><strong>Doubles et moitiés :</strong> Très utiles pour multiplier/diviser</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> 25 × 8<br>
                25 × 8 = 25 × 4 × 2 = 100 × 2 = 200<br>
                Ou encore : 25 × 8 = (20 + 5) × 8 = 160 + 40 = 200
            </div>
        `
    },
    "logique": {
        title: "🔍 Logique et raisonnement",
        content: `
            <h4>Développer le raisonnement logique</h4>
            <p>La logique mathématique aide à résoudre des problèmes pas à pas :</p>
            <ul>
                <li><strong>Suites numériques :</strong> Trouver la règle (ajouter, multiplier...)</li>
                <li><strong>Problèmes d'âges :</strong> Utiliser des équations simples</li>
                <li><strong>Problèmes de temps :</strong> Compter les jours, semaines...</li>
                <li><strong>Déduction :</strong> Partir de ce qu'on sait pour trouver l'inconnu</li>
            </ul>
            <div class="example">
                <strong>Suite logique :</strong> 3, 6, 12, 24, ?<br>
                Chaque nombre est multiplié par 2<br>
                Donc : 24 × 2 = 48
            </div>
        `
    }
};

const questions = [
    // SEULEMENT LES 4 NOTIONS DEMANDÉES

    // 1. MULTIPLES DANS UN INTERVALLE
    {
        category: "🔢 Calcul",
        concept: "multiples",
        question: "Combien y a-t-il de multiples de 7 entre 20 et 80 ?",
        options: ["8", "9", "10", "11"],
        correct: 1,
        explanation: "Multiples de 7 entre 20 et 80 : 21, 28, 35, 42, 49, 56, 63, 70, 77. Total : 9 multiples."
    },
    {
        category: "🔢 Calcul",
        concept: "multiples",
        question: "Quel est le plus petit multiple de 12 supérieur à 50 ?",
        options: ["60", "72", "48", "84"],
        correct: 0,
        explanation: "Multiples de 12 : 12, 24, 36, 48, 60... Le premier supérieur à 50 est 60."
    },
    {
        category: "🔢 Calcul",
        concept: "multiples",
        question: "Parmi ces nombres, lequel est un multiple de 7 ?",
        options: ["48", "56", "64", "72"],
        correct: 1,
        explanation: "56 = 7 × 8, donc 56 est un multiple de 7"
    },
    {
        category: "🔢 Calcul",
        concept: "multiples",
        question: "Combien y a-t-il de multiples de 9 entre 30 et 100 ?",
        options: ["7", "8", "9", "10"],
        correct: 1,
        explanation: "Multiples de 9 entre 30 et 100 : 36, 45, 54, 63, 72, 81, 90, 99. Total : 8 multiples."
    },

    // 2. TESTS DE DIVISIBILITÉ
    {
        category: "🔢 Calcul",
        concept: "diviseurs",
        question: "Le nombre 156 est-il divisible par 12 ?",
        options: ["Oui", "Non"],
        correct: 0,
        explanation: "156 ÷ 12 = 13 exactement. Donc 156 est divisible par 12."
    },
    {
        category: "🔢 Calcul",
        concept: "diviseurs",
        question: "Parmi ces nombres, lequel est divisible par 15 ?",
        options: ["123", "135", "147", "159"],
        correct: 1,
        explanation: "Pour être divisible par 15, il faut être divisible par 3 ET par 5. 135 finit par 5 et 1+3+5=9 (divisible par 3)."
    },
    {
        category: "🔢 Calcul",
        concept: "diviseurs",
        question: "Combien 24 a-t-il de diviseurs ?",
        options: ["6", "7", "8", "9"],
        correct: 2,
        explanation: "Diviseurs de 24 : 1, 2, 3, 4, 6, 8, 12, 24. Total : 8 diviseurs"
    },
    {
        category: "🔢 Calcul",
        concept: "diviseurs",
        question: "Le nombre 84 est-il divisible par 14 ?",
        options: ["Oui", "Non"],
        correct: 0,
        explanation: "84 ÷ 14 = 6 exactement. Donc 84 est divisible par 14."
    },

    // 3. PPCM DE DEUX NOMBRES
    {
        category: "🔢 Calcul",
        concept: "ppcm",
        question: "Quel est le PPCM de 8 et 12 ?",
        options: ["24", "48", "96", "20"],
        correct: 0,
        explanation: "Multiples de 8 : 8, 16, 24... | Multiples de 12 : 12, 24... | Premier commun : 24."
    },
    {
        category: "🔢 Calcul",
        concept: "ppcm",
        question: "Deux bus partent ensemble. L'un revient toutes les 18 min, l'autre toutes les 24 min. Dans combien de temps se retrouveront-ils ?",
        options: ["42 min", "72 min", "108 min", "144 min"],
        correct: 1,
        explanation: "PPCM(18,24) = 72. Multiples de 18 : 18, 36, 54, 72... | Multiples de 24 : 24, 48, 72..."
    },
    {
        category: "🔢 Calcul",
        concept: "ppcm",
        question: "Quel est le plus petit multiple commun de 4 et 6 ?",
        options: ["10", "12", "18", "24"],
        correct: 1,
        explanation: "Multiples de 4 : 4, 8, 12... Multiples de 6 : 6, 12... Le plus petit commun est 12"
    },
    {
        category: "🔢 Calcul",
        concept: "ppcm",
        question: "Quel est le PPCM de 15 et 20 ?",
        options: ["35", "60", "75", "300"],
        correct: 1,
        explanation: "Multiples de 15 : 15, 30, 45, 60... | Multiples de 20 : 20, 40, 60... | Premier commun : 60."
    },

    // 4. PGCD DE DEUX NOMBRES
    {
        category: "🔢 Calcul",
        concept: "pgcd",
        question: "Quel est le PGCD de 24 et 36 ?",
        options: ["6", "8", "12", "18"],
        correct: 2,
        explanation: "Diviseurs de 24 : 1,2,3,4,6,8,12,24 | Diviseurs de 36 : 1,2,3,4,6,9,12,18,36 | Plus grand commun : 12."
    },
    {
        category: "🔢 Calcul",
        concept: "pgcd",
        question: "On veut partager 48 pommes et 72 poires en paquets identiques. Quelle est la taille maximum des paquets ?",
        options: ["12", "24", "8", "6"],
        correct: 1,
        explanation: "Il faut le PGCD(48,72) = 24. On peut faire des paquets de 24 (2 pommes + 3 poires chacun)."
    },
    {
        category: "🔢 Calcul",
        concept: "pgcd",
        question: "Quel est le PGCD de 18 et 30 ?",
        options: ["3", "6", "9", "15"],
        correct: 1,
        explanation: "Diviseurs de 18 : 1,2,3,6,9,18 | Diviseurs de 30 : 1,2,3,5,6,10,15,30 | Plus grand commun : 6."
    },
    {
        category: "🔢 Calcul",
        concept: "pgcd",
        question: "Pour faire des bouquets identiques avec 42 roses et 56 tulipes, combien de fleurs maximum par bouquet ?",
        options: ["7", "14", "21", "28"],
        correct: 1,
        explanation: "PGCD(42,56) = 14. Chaque bouquet aura 3 roses + 4 tulipes = 7 fleurs... Non, 14 fleurs maximum."
    },

    // 5. DIVISION EUCLIDIENNE
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Dans la division 127 ÷ 9, quel est le quotient et le reste ?",
        options: ["q = 14, r = 1", "q = 13, r = 10", "q = 14, r = 0", "q = 15, r = 2"],
        correct: 0,
        explanation: "127 ÷ 9 : 9 × 14 = 126, et 127 - 126 = 1. Donc quotient = 14, reste = 1."
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "On partage 235 bonbons en sachets de 18. Combien de sachets complets et combien de bonbons restants ?",
        options: ["13 sachets, 1 bonbon", "12 sachets, 19 bonbons", "13 sachets, 0 bonbon", "12 sachets, 11 bonbons"],
        correct: 0,
        explanation: "235 ÷ 18 = 13 reste 1. Vérification : 18 × 13 = 234, et 235 - 234 = 1."
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Reste de la division 97 ÷ 11 ?",
        options: ["8", "9", "10", "6"],
        correct: 3,
        explanation: "97 = 11 × 8 + 9, donc le reste est 9"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Le reste de 89 ÷ 7 est :",
        options: ["4", "5", "6", "3"],
        correct: 0,
        explanation: "89 = 7 × 12 + 5, donc le reste est 5... Non : 7×12=84, 89-84=5. Correction : reste = 5."
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Calculez : 1 428 ÷ 12",
        options: ["119", "121", "117", "123"],
        correct: 0,
        explanation: "1428 ÷ 12 = 119 exactement"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Une bibliothèque a 756 livres à ranger dans 18 rayons égaux. Combien de livres par rayon ?",
        options: ["40", "42", "44", "38"],
        correct: 1,
        explanation: "756 ÷ 18 = 42 livres par rayon"
    }
];

function getProgressStats() {
    const stats = {
        completion: Math.round((progressData.questionsAttempted / progressData.totalQuestions) * 100),
        accuracy: progressData.questionsAttempted > 0 ? Math.round((progressData.correctAnswers / progressData.questionsAttempted) * 100) : 0,
        timeSpent: getQuizDuration(),
        categoryBreakdown: {}
    };

    Object.entries(progressData.categoryScores).forEach(([category, data]) => {
        if (data.attempted > 0) {
            stats.categoryBreakdown[category] = {
                accuracy: Math.round((data.correct / data.attempted) * 100),
                completion: Math.round((data.attempted / data.total) * 100)
            };
        }
    });

    return stats;
}

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let showingExplanation = false;
let showingConcept = true;
let answeredQuestions = [];
let shuffledQuestions = [];

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initializeQuestions() {
    // Charger les questions déjà répondues depuis localStorage
    const savedAnswered = localStorage.getItem('answeredQuestions');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }

    // Filtrer les questions non répondues
    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));

    // Si toutes les questions ont été répondues, réinitialiser
    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions');
        shuffledQuestions = shuffleArray(questions);
    } else {
        shuffledQuestions = shuffleArray(unansweredQuestions);
    }
}

function startQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showingExplanation = false;
    showingConcept = true;

    // Initialiser et mélanger les questions
    initializeQuestions();

    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;

    // Réinitialiser l'état
    showingConcept = true;
    showingExplanation = false;

    // Mise à jour de la barre de progression
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('categoryTag').textContent = question.category;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} / ${shuffledQuestions.length}`;

    // Afficher le concept d'abord
    showConcept();

    // Masquer les boutons de navigation et d'aide
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('helpBtn').style.display = 'block';

    // Réinitialiser les options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        opt.style.pointerEvents = 'auto';
    });

    document.getElementById('validateBtn').style.display = 'none';

    // Mise à jour des statistiques en temps réel
    updateProgressDisplay();
}

function showConcept() {
    const question = shuffledQuestions[currentQuestion];
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

        // Afficher le bouton pour continuer
        document.getElementById('conceptBtn').style.display = 'block';
        document.getElementById('conceptBtn').textContent = 'Commencer la question';
    } else {
        // Si pas de concept, aller directement à la question
        showQuestion();
    }
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];

    document.getElementById('conceptSection').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    document.getElementById('explanation').style.display = 'none';

    // Add instruction and help link at the top of each question
    const instructionHTML = `
        <div class="question-instructions">
            <div class="instruction-text">📝 <strong>Calcule au brouillon avant de répondre</strong></div>
            <div class="help-link">
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
                    🆘 Demande à tonton
                </a>
            </div>
        </div>
        <h3>${question.question}</h3>
    `;

    document.getElementById('questionText').innerHTML = instructionHTML;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);
        optionsContainer.appendChild(optionElement);
    });

    showingConcept = false;
    showingExplanation = false;

    document.getElementById('conceptBtn').style.display = 'none';
}

function selectOption(index) {
    // Enlever la sélection précédente
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));

    // Sélectionner la nouvelle option
    document.querySelectorAll('.option')[index].classList.add('selected');

    // Afficher le bouton valider
    document.getElementById('validateBtn').style.display = 'block';

    // Stocker la réponse
    userAnswers[currentQuestion] = index;
}

function validateAnswer() {
    const question = shuffledQuestions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];

    // Colorer les options
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === userAnswer && index !== question.correct) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });

    // Calculer le score
    if (userAnswer === question.correct) {
        score++;
    }

    // Mettre à jour les données de progression
    updateProgressData(question, userAnswer === question.correct);

    // Afficher l'explication
    showExplanation();

    // Masquer le bouton valider et afficher le bouton suivant
    document.getElementById('validateBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';

    // Cacher le bouton d'aide pendant l'explication
    document.getElementById('helpBtn').style.display = 'none';
}

function updateProgressData(question, isCorrect) {
    // Mise à jour des données globales
    progressData.questionsAttempted++;
    if (isCorrect) {
        progressData.correctAnswers++;
    }

    // Mise à jour des données par catégorie
    const category = question.category;
    if (!progressData.categoryScores[category]) {
        progressData.categoryScores[category] = {
            attempted: 0,
            correct: 0,
            total: questions.filter(q => q.category === category).length
        };
    }

    progressData.categoryScores[category].attempted++;
    if (isCorrect) {
        progressData.categoryScores[category].correct++;
    }

    // Sauvegarder dans localStorage
    localStorage.setItem('mathQuizProgress', JSON.stringify(progressData));
}

function sendEmailHelp() {
    const question = shuffledQuestions[currentQuestion];

    const subject = encodeURIComponent('IMPORTANT; email à ouvrir dans l\'app Gmail d\'Android');
    const body = encodeURIComponent(`
Bonjour tonton,

J'ai une question sur les révisions CM2 :

Question : ${question.question}

Les options sont :
${question.options.map((opt, i) => `${i + 1}. ${opt}`).join('\n')}

Peux-tu m'aider ?

Merci !
`);

    window.open(`mailto:?subject=${subject}&body=${body}`, '_blank');
}

function showExplanation() {
    const question = shuffledQuestions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];

    document.getElementById('conceptSection').style.display = 'none';
    document.getElementById('questionBox').style.display = 'none';
    document.getElementById('explanation').style.display = 'block';

    const isCorrect = userAnswer === question.correct;
    document.getElementById('explanationText').innerHTML = `
        <div class="result ${isCorrect ? 'correct' : 'incorrect'}">
            ${isCorrect ? '✅ Bonne réponse !' : '❌ Réponse incorrecte'}
        </div>
        <div class="explanation-detail">
            <strong>Explication :</strong><br>
            ${question.explanation}
        </div>
    `;

    showingExplanation = true;
    showingConcept = false;
}

function nextQuestion() {
    // Marquer la question actuelle comme répondue
    const originalQuestionIndex = questions.findIndex(q => q === shuffledQuestions[currentQuestion]);
    if (originalQuestionIndex !== -1 && !answeredQuestions.includes(originalQuestionIndex)) {
        answeredQuestions.push(originalQuestionIndex);
        localStorage.setItem('answeredQuestions', JSON.stringify(answeredQuestions));
    }

    if (currentQuestion < shuffledQuestions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const percentage = Math.round((score / shuffledQuestions.length) * 100);

    let message, emoji;
    if (percentage >= 90) {
        message = "Excellence ! 🏆";
        emoji = "🏆";
    } else if (percentage >= 75) {
        message = "Très bien ! 🌟";
        emoji = "🌟";
    } else if (percentage >= 60) {
        message = "Bien ! 💪";
        emoji = "💪";
    } else if (percentage >= 45) {
        message = "À améliorer 📚";
        emoji = "📚";
    } else {
        message = "Révisions nécessaires 🚀";
        emoji = "🚀";
    }

    document.getElementById('finalScore').textContent = `${score}/${shuffledQuestions.length}`;
    document.getElementById('finalPercentage').textContent = `${percentage}%`;
    document.getElementById('finalMessage').textContent = message;
    document.getElementById('finalEmoji').textContent = emoji;

    // Afficher les statistiques détaillées
    displayDetailedStats();

    // Marquer le quiz comme terminé
    progressData.lastCompleted = new Date().toISOString();
    localStorage.setItem('mathQuizProgress', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');

    let statsHTML = `
        <h3>📊 Statistiques détaillées</h3>
        <div class="stat-item">
            <span>Progression globale :</span>
            <span>${stats.completion}%</span>
        </div>
        <div class="stat-item">
            <span>Précision globale :</span>
            <span>${stats.accuracy}%</span>
        </div>
        <div class="stat-item">
            <span>Temps passé :</span>
            <span>${stats.timeSpent}</span>
        </div>
    `;

    if (Object.keys(stats.categoryBreakdown).length > 0) {
        statsHTML += '<h4>📚 Par catégorie :</h4>';
        Object.entries(stats.categoryBreakdown).forEach(([category, data]) => {
            statsHTML += `
                <div class="category-stat">
                    <div class="category-name">${category}</div>
                    <div class="category-scores">
                        <span>Précision: ${data.accuracy}%</span>
                        <span>Progression: ${data.completion}%</span>
                    </div>
                </div>
            `;
        });
    }

    statsContainer.innerHTML = statsHTML;
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

// Charger le progrès au démarrage si disponible
window.addEventListener('load', function() {
    loadProgress();
    updateProgressDisplay();
});

function continueFromConcept() {
    showQuestion();
}

function getQuizDuration() {
    if (progressData.startTime) {
        const now = new Date();
        const start = new Date(progressData.startTime);
        const diffMs = now - start;
        const diffMins = Math.floor(diffMs / 60000);
        const diffSecs = Math.floor((diffMs % 60000) / 1000);
        return `${diffMins}min ${diffSecs}s`;
    }
    return '0min 0s';
}

function updateProgressDisplay() {
    const stats = getProgressStats();
    const progressDisplay = document.getElementById('progressDisplay');
    if (progressDisplay) {
        progressDisplay.innerHTML = `
            <div class="progress-stats">
                <span>📈 ${stats.completion}% terminé</span>
                <span>🎯 ${stats.accuracy}% de réussite</span>
                <span>⏱️ ${stats.timeSpent}</span>
            </div>
        `;
    }
}
