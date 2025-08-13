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
    // RÉVISIONS CM2 - CALCUL ET OPÉRATIONS
    {
        category: "🔢 Calcul",
        concept: "addition",
        question: "Calculez : 1 247 + 589",
        options: ["1 826", "1 836", "1 846", "1 856"],
        correct: 1,
        explanation: "1 247 + 589 = 1 836"
    },
    {
        category: "🔢 Calcul",
        concept: "soustraction",
        question: "Calculez : 2 003 - 456",
        options: ["1 457", "1 547", "1 647", "1 557"],
        correct: 1,
        explanation: "2 003 - 456 = 1 547"
    },
    {
        category: "🔢 Calcul",
        concept: "multiplication",
        question: "Calculez : 125 × 8",
        options: ["900", "950", "1 000", "1 050"],
        correct: 2,
        explanation: "125 × 8 = 1 000"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Calculez : 936 ÷ 8",
        options: ["117", "127", "137", "147"],
        correct: 0,
        explanation: "936 ÷ 8 = 117"
    },
    {
        category: "🔢 Calcul",
        concept: "multiplication",
        question: "Un fermier a 24 poules. Chaque poule pond 7 œufs par semaine. Combien d'œufs en une semaine ?",
        options: ["148", "158", "168", "178"],
        correct: 2,
        explanation: "24 × 7 = 168 œufs"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Une boîte contient 144 chocolats. On les partage en 12 sachets égaux. Combien de chocolats par sachet ?",
        options: ["10", "11", "12", "13"],
        correct: 2,
        explanation: "144 ÷ 12 = 12 chocolats par sachet"
    },
    {
        category: "🔢 Calcul",
        concept: "tables_multiplication",
        question: "8 × 7 = ?",
        options: ["54", "56", "64", "72"],
        correct: 1,
        explanation: "8 × 7 = 56"
    },
    {
        category: "🔢 Calcul",
        concept: "multiples",
        question: "Parmi ces nombres, lequel est un multiple de 9 ?",
        options: ["35", "44", "63", "76"],
        correct: 2,
        explanation: "63 = 9 × 7, donc 63 est un multiple de 9"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Reste de la division 75 ÷ 8 ?",
        options: ["3", "4", "5", "6"],
        correct: 0,
        explanation: "75 = 8 × 9 + 3, donc le reste est 3"
    },
    {
        category: "🔢 Calcul",
        concept: "addition",
        question: "Calculez : 45,6 + 12,8 + 3,9",
        options: ["62,3", "61,3", "63,3", "60,3"],
        correct: 0,
        explanation: "45,6 + 12,8 + 3,9 = 62,3"
    },

    // FRACTIONS ET DÉCIMAUX
    {
        category: "🍕 Fractions",
        concept: "fractions_definition",
        question: "Quelle fraction représente 3 parts sur 8 ?",
        options: ["8/3", "3/8", "3/5", "5/8"],
        correct: 1,
        explanation: "3 parts sur 8 s'écrit 3/8"
    },
    {
        category: "🍕 Fractions",
        concept: "decimaux",
        question: "Que vaut 0,5 en fraction ?",
        options: ["1/5", "5/10", "1/2", "2/5"],
        correct: 2,
        explanation: "0,5 = 5/10 = 1/2"
    },
    {
        category: "🍕 Fractions",
        concept: "decimaux",
        question: "Comment écrit-on 7,25 en mots ?",
        options: ["Sept virgule vingt-cinq", "Sept unités et vingt-cinq centièmes", "Sept et vingt-cinq", "Soixante-quinze dixièmes"],
        correct: 1,
        explanation: "7,25 se lit 'sept unités et vingt-cinq centièmes'"
    },
    {
        category: "🍕 Fractions",
        concept: "decimaux",
        question: "Range par ordre croissant : 2,8 ; 2,08 ; 2,80 ; 2,088",
        options: ["2,08 < 2,088 < 2,8 < 2,80", "2,08 < 2,088 < 2,80 < 2,8", "2,088 < 2,08 < 2,8 < 2,80", "2,08 < 2,088 < 2,8 = 2,80"],
        correct: 3,
        explanation: "2,08 < 2,088 < 2,8 = 2,80 (2,8 et 2,80 sont égaux)"
    },
    {
        category: "🍕 Fractions",
        concept: "fractions_definition",
        question: "Quelle fraction de cette pizza est mangée si on a pris 3 parts sur 6 ?",
        options: ["3/6 = 1/2", "6/3 = 2", "3/6 = 3", "6/3 = 1/2"],
        correct: 0,
        explanation: "3 parts sur 6 = 3/6 = 1/2"
    },

    // GÉOMÉTRIE
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Combien de côtés a un pentagone ?",
        options: ["4", "5", "6", "7"],
        correct: 1,
        explanation: "Un pentagone a 5 côtés"
    },
    {
        category: "📐 Géométrie",
        concept: "aire",
        question: "L'aire d'un carré de 6 cm de côté est :",
        options: ["24 cm²", "36 cm²", "12 cm²", "18 cm²"],
        correct: 1,
        explanation: "Aire du carré = côté × côté = 6 × 6 = 36 cm²"
    },
    {
        category: "📐 Géométrie",
        concept: "perimetre",
        question: "Le périmètre d'un rectangle de 8 cm sur 5 cm est :",
        options: ["13 cm", "40 cm", "26 cm", "24 cm"],
        correct: 2,
        explanation: "Périmètre = 2 × (8 + 5) = 2 × 13 = 26 cm"
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Un triangle qui a tous ses côtés égaux s'appelle :",
        options: ["Triangle rectangle", "Triangle isocèle", "Triangle équilatéral", "Triangle quelconque"],
        correct: 2,
        explanation: "Un triangle équilatéral a ses 3 côtés égaux"
    },
    {
        category: "📐 Géométrie",
        concept: "geometrie_figures",
        question: "Un angle aigu mesure :",
        options: ["Exactement 90°", "Plus de 90°", "Moins de 90°", "180°"],
        correct: 2,
        explanation: "Un angle aigu mesure moins de 90°"
    },

    // MESURES
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "1,5 km = ? m",
        options: ["150 m", "1 500 m", "15 000 m", "15 m"],
        correct: 1,
        explanation: "1,5 km = 1,5 × 1 000 = 1 500 m"
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "750 g = ? kg",
        options: ["0,75 kg", "7,5 kg", "75 kg", "0,075 kg"],
        correct: 0,
        explanation: "750 g = 750 ÷ 1 000 = 0,75 kg"
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "3 h 20 min = ? min",
        options: ["180 min", "200 min", "320 min", "380 min"],
        correct: 1,
        explanation: "3 h = 180 min, donc 3 h 20 min = 180 + 20 = 200 min"
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "25 cl = ? L",
        options: ["2,5 L", "0,25 L", "0,025 L", "250 L"],
        correct: 1,
        explanation: "25 cl = 25 ÷ 100 = 0,25 L"
    },
    {
        category: "📏 Mesures",
        concept: "conversions",
        question: "Un film dure 1 h 45 min. Il commence à 20 h 30. À quelle heure se termine-t-il ?",
        options: ["22 h 15", "22 h 75", "21 h 75", "22 h 30"],
        correct: 0,
        explanation: "20 h 30 + 1 h 45 min = 22 h 15"
    },

    // PROPORTIONNALITÉ
    {
        category: "🔗 Proportionnalité",
        concept: "proportionnalite",
        question: "Si 3 stylos coûtent 4,50€, combien coûtent 5 stylos ?",
        options: ["7,50€", "6,50€", "8€", "7€"],
        correct: 0,
        explanation: "1 stylo = 4,50 ÷ 3 = 1,50€, donc 5 stylos = 5 × 1,50 = 7,50€"
    },
    {
        category: "🔗 Proportionnalité",
        concept: "proportionnalite",
        question: "Une recette pour 4 personnes demande 200g de farine. Pour 6 personnes ?",
        options: ["250g", "300g", "350g", "280g"],
        correct: 1,
        explanation: "200 ÷ 4 × 6 = 50 × 6 = 300g"
    },
    {
        category: "🔗 Proportionnalité",
        concept: "echelles",
        question: "Sur une carte à l'échelle 1/100 000, 3 cm représentent :",
        options: ["300 m", "3 km", "30 km", "300 km"],
        correct: 1,
        explanation: "3 cm × 100 000 = 300 000 cm = 3 000 m = 3 km"
    },

    // PROBLÈMES
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Paul a 125€. Il achète un jeu à 39€ et un livre à 12€. Combien lui reste-t-il ?",
        options: ["74€", "64€", "84€", "54€"],
        correct: 0,
        explanation: "125 - 39 - 12 = 125 - 51 = 74€"
    },
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Dans une école de 480 élèves, 3/5 mangent à la cantine. Combien d'élèves ?",
        options: ["288", "192", "320", "240"],
        correct: 0,
        explanation: "3/5 de 480 = (480 × 3) ÷ 5 = 1440 ÷ 5 = 288"
    },
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Un parking a 8 rangées de 15 places chacune. Combien de places en tout ?",
        options: ["120", "130", "140", "110"],
        correct: 0,
        explanation: "8 × 15 = 120 places"
    },
    {
        category: "🧮 Problèmes",
        concept: "problemes_concrets",
        question: "Marie lit 25 pages par jour. En combien de jours lira-t-elle un livre de 200 pages ?",
        options: ["8 jours", "7 jours", "9 jours", "6 jours"],
        correct: 0,
        explanation: "200 ÷ 25 = 8 jours"
    },

    // NOMBRES ET CALCUL MENTAL
    {
        category: "🧠 Calcul mental",
        concept: "calcul_mental",
        question: "25 × 4 = ?",
        options: ["90", "100", "110", "80"],
        correct: 1,
        explanation: "25 × 4 = 100"
    },
    {
        category: "🧠 Calcul mental",
        concept: "calcul_mental",
        question: "Calcul rapide : 17 + 28",
        options: ["45", "44", "46", "43"],
        correct: 0,
        explanation: "17 + 28 = 17 + 30 - 2 = 47 - 2 = 45"
    },
    {
        category: "🧠 Calcul mental",
        concept: "calcul_mental",
        question: "50% de 86 = ?",
        options: ["43", "42", "44", "41"],
        correct: 0,
        explanation: "50% de 86 = 86 ÷ 2 = 43"
    },
    {
        category: "🧠 Calcul mental",
        concept: "calcul_mental",
        question: "Double de 35 ?",
        options: ["60", "70", "65", "75"],
        correct: 1,
        explanation: "Double de 35 = 35 × 2 = 70"
    },

    // NOMBRES DÉCIMAUX AVANCÉS
    {
        category: "🔢 Décimaux",
        concept: "decimaux",
        question: "0,8 + 0,7 = ?",
        options: ["1,5", "0,15", "15", "1,6"],
        correct: 0,
        explanation: "0,8 + 0,7 = 1,5"
    },
    {
        category: "🔢 Décimaux",
        concept: "decimaux",
        question: "3,6 × 10 = ?",
        options: ["0,36", "360", "36", "3,60"],
        correct: 2,
        explanation: "3,6 × 10 = 36"
    },
    {
        category: "🔢 Décimaux",
        concept: "decimaux",
        question: "12,5 ÷ 10 = ?",
        options: ["125", "1,25", "0,125", "12,50"],
        correct: 1,
        explanation: "12,5 ÷ 10 = 1,25"
    },

    // LOGIQUE ET RAISONNEMENT
    {
        category: "🔍 Logique",
        concept: "logique",
        question: "Quelle est la suite ? 5, 8, 11, 14, ?",
        options: ["16", "17", "18", "19"],
        correct: 1,
        explanation: "On ajoute 3 à chaque fois : 14 + 3 = 17"
    },
    {
        category: "🔍 Logique",
        concept: "logique",
        question: "Si aujourd'hui c'est mardi, quel jour sera-ce dans 10 jours ?",
        options: ["Jeudi", "Vendredi", "Samedi", "Dimanche"],
        correct: 1,
        explanation: "Mardi + 10 jours = Vendredi (10 ÷ 7 = 1 reste 3, donc 3 jours après mardi)"
    },
    {
        category: "🔍 Logique",
        concept: "logique",
        question: "J'ai 3 pièces de 2€, 5 pièces de 1€ et 4 pièces de 50 centimes. Combien ai-je ?",
        options: ["13€", "12€", "11€", "13,50€"],
        correct: 2,
        explanation: "3×2€ + 5×1€ + 4×0,50€ = 6€ + 5€ + 2€ = 13€"
    }
];

let currentQuestion = 0;
let userAnswers = [];
let score = 0;
let showingExplanation = false;
let showingConcept = true;

function startQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    score = 0;
    showingExplanation = false;
    showingConcept = true;
    
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
        nextQuestionBtn.textContent = currentQuestion === questions.length - 1 ? 'Voir les résultats 🎯' : 'Suivant ➡️';
        nextQuestionBtn.onclick = () => nextQuestion();
        navButtons.appendChild(nextQuestionBtn);
    }
}

function askTonton() {
    const question = questions[currentQuestion];
    
    const subject = encodeURIComponent('IMPORTANT; email à ouvrir dans l\'app Gmail d\'Android');
    const body = encodeURIComponent(`
Bonjour tonton,

J'ai une question sur les révisions CM2 :

Question : ${question.question}

Les options sont :
${question.options.map((opt, i) => `${String.fromCharCode(97 + i)}) ${opt}`).join('\n')}

Je suis à la question ${currentQuestion + 1} sur ${questions.length}.

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
    // Calculer le score total
    score = 0;
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct) {
            score++;
        }
    }

    // Masquer le container de questions
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    // Afficher le score
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('finalScore').textContent = `${score}/${questions.length}`;
    document.getElementById('scoreCircle').style.background = getScoreColor(percentage);

    // Message personnalisé
    const message = getScoreMessage(score, questions.length);
    document.getElementById('scoreMessage').textContent = message.text;

    // Détails du score
    const scoreDetails = document.getElementById('scoreDetails');
    scoreDetails.innerHTML = `
        <h3>📊 Détails de tes résultats :</h3>
        <p><strong>Score total :</strong> ${score} / ${questions.length} (${percentage}%)</p>
        <p><strong>Révisions CM2 complètes !</strong></p>
    `;

    // Badge
    const badgeContainer = document.getElementById('badgeContainer');
    badgeContainer.innerHTML = `<span class="badge ${message.badgeClass}">${message.badge}</span>`;
    
    // Remplir les champs cachés du formulaire
    document.getElementById('hiddenScore').value = `Score de Karniella: ${score}/${questions.length} (${percentage}%)`;
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