const concepts = {
    "triangle_presentation": {
        title: "📐 Leçon 8 - Le Triangle : Présentation et construction",
        content: `
            <h4>Qu'est-ce qu'un triangle ?</h4>
            <p>Un <strong>triangle</strong> est une figure géométrique plane délimitée par <strong>3 côtés</strong> (segments) et possédant <strong>3 sommets</strong> (points) et <strong>3 angles</strong>.</p>
            <p>On nomme un triangle par ses trois sommets, par exemple : triangle ABC (noté △ABC).</p>
            <h4>Construction d'un triangle selon la mesure de ses côtés</h4>
            <p>Pour construire le triangle ABC avec AB = 5 cm, BC = 4 cm, AC = 3 cm :</p>
            <ol>
                <li>Tracer le segment [AB] de 5 cm.</li>
                <li>Depuis A, tracer un arc de cercle de rayon 3 cm.</li>
                <li>Depuis B, tracer un arc de cercle de rayon 4 cm.</li>
                <li>L'intersection des deux arcs donne le point C.</li>
                <li>Relier A à C et B à C.</li>
            </ol>
            <h4>Condition d'existence d'un triangle</h4>
            <p>Un triangle existe si et seulement si <strong>la somme de deux côtés quelconques est toujours supérieure au troisième côté</strong>.</p>
            <div class="example">
                <strong>Exemple :</strong> Avec a = 3, b = 4, c = 5 : 3+4 = 7 > 5 ✓ ; 3+5 = 8 > 4 ✓ ; 4+5 = 9 > 3 ✓ → le triangle existe.<br>
                Avec a = 1, b = 2, c = 10 : 1+2 = 3 &lt; 10 → le triangle n'existe pas !
            </div>
        `
    },
    "droites_triangle": {
        title: "📐 Leçon 8 - Les droites particulières du triangle",
        content: `
            <h4>Les hauteurs</h4>
            <p>Une <strong>hauteur</strong> d'un triangle est la perpendiculaire abaissée d'un sommet sur le côté opposé (ou son prolongement). Un triangle possède <strong>3 hauteurs</strong>, qui se croisent en un même point appelé <strong>orthocentre</strong>.</p>
            <h4>Les médianes</h4>
            <p>Une <strong>médiane</strong> est un segment qui relie un sommet au <strong>milieu du côté opposé</strong>. Un triangle possède <strong>3 médianes</strong>, qui se croisent en un même point appelé <strong>centre de gravité (ou centroïde)</strong>. Le centre de gravité divise chaque médiane en deux parties dans le rapport 2:1.</p>
            <h4>Les médiatrices</h4>
            <p>La <strong>médiatrice</strong> d'un côté est la droite perpendiculaire à ce côté en son milieu. Un triangle possède <strong>3 médiatrices</strong>, qui se croisent en un même point appelé <strong>circumcentre</strong> (centre du cercle circonscrit).</p>
            <div class="example">
                <strong>À retenir :</strong><br>
                • Hauteur → perpendiculaire du sommet au côté opposé → orthocentre<br>
                • Médiane → sommet au milieu du côté opposé → centre de gravité<br>
                • Médiatrice → perpendiculaire au milieu d'un côté → circumcentre
            </div>
        `
    },
    "triangles_particuliers": {
        title: "📐 Leçon 8 - Les triangles particuliers",
        content: `
            <h4>Le triangle rectangle</h4>
            <p>Un triangle est <strong>rectangle</strong> s'il possède un angle droit (90°). Le côté opposé à l'angle droit s'appelle l'<strong>hypoténuse</strong> (c'est le plus long côté). Les deux autres côtés sont les <strong>cathètes</strong>.</p>
            <p><strong>Théorème de Pythagore :</strong> hypoténuse² = cathète² + cathète²</p>
            <h4>Le triangle isocèle</h4>
            <p>Un triangle est <strong>isocèle</strong> s'il possède au moins <strong>deux côtés égaux</strong>. Les angles à la base (angles opposés aux côtés égaux) sont également égaux.</p>
            <h4>Le triangle équilatéral</h4>
            <p>Un triangle est <strong>équilatéral</strong> si ses <strong>trois côtés sont égaux</strong>. Ses trois angles valent chacun <strong>60°</strong>. Un triangle équilatéral est aussi isocèle (cas particulier).</p>
            <div class="example">
                <strong>À retenir :</strong><br>
                • Triangle rectangle : 1 angle droit (90°)<br>
                • Triangle isocèle : 2 côtés égaux → 2 angles égaux<br>
                • Triangle équilatéral : 3 côtés égaux → 3 angles de 60°<br>
                • La somme des angles d'un triangle est toujours égale à <strong>180°</strong>.
            </div>
        `
    },
    "perimetre_aire_triangle": {
        title: "📐 Leçon 8 - Périmètre et Aire d'un triangle",
        content: `
            <h4>Périmètre d'un triangle</h4>
            <p>Le <strong>périmètre</strong> d'un triangle est la somme de la longueur de ses trois côtés :</p>
            <p style="text-align:center;"><strong>P = a + b + c</strong></p>
            <p>Où a, b et c sont les longueurs des trois côtés.</p>
            <h4>Aire d'un triangle</h4>
            <p>L'<strong>aire</strong> (ou surface) d'un triangle se calcule à partir d'une base et de la hauteur correspondante :</p>
            <p style="text-align:center;"><strong>A = (base × hauteur) ÷ 2</strong></p>
            <p>Où la hauteur est perpendiculaire à la base choisie.</p>
            <div class="example">
                <strong>Exemples :</strong><br>
                Triangle avec a = 3 cm, b = 4 cm, c = 5 cm :<br>
                Périmètre P = 3 + 4 + 5 = <strong>12 cm</strong><br><br>
                Triangle avec base = 6 cm, hauteur = 4 cm :<br>
                Aire A = (6 × 4) ÷ 2 = 24 ÷ 2 = <strong>12 cm²</strong>
            </div>
        `
    },
    "proportionnalite_definition": {
        title: "🔢 Leçon 9 - Tableau de proportionnalité",
        content: `
            <h4>Définition</h4>
            <p>Deux grandeurs sont <strong>proportionnelles</strong> si les valeurs de l'une s'obtiennent en multipliant les valeurs de l'autre par un même nombre (appelé <strong>coefficient de proportionnalité</strong>).</p>
            <p>Dans un <strong>tableau de proportionnalité</strong>, le rapport entre les valeurs de la première ligne et les valeurs correspondantes de la deuxième ligne est constant.</p>
            <h4>Reconnaissance d'un tableau de proportionnalité</h4>
            <p>Dans le tableau ci-dessous, vérifions si c'est un tableau de proportionnalité :</p>
            <table style="border-collapse:collapse; width:100%; text-align:center; margin:10px 0;">
                <tr style="background:#e8f4f8;">
                    <td style="border:1px solid #ccc; padding:5px;"><strong>Quantité (kg)</strong></td>
                    <td style="border:1px solid #ccc; padding:5px;">2</td>
                    <td style="border:1px solid #ccc; padding:5px;">5</td>
                    <td style="border:1px solid #ccc; padding:5px;">8</td>
                </tr>
                <tr>
                    <td style="border:1px solid #ccc; padding:5px;"><strong>Prix (FCFA)</strong></td>
                    <td style="border:1px solid #ccc; padding:5px;">600</td>
                    <td style="border:1px solid #ccc; padding:5px;">1500</td>
                    <td style="border:1px solid #ccc; padding:5px;">2400</td>
                </tr>
            </table>
            <p>600 ÷ 2 = 300 ; 1500 ÷ 5 = 300 ; 2400 ÷ 8 = 300 → le coefficient est 300 (constant) → <strong>tableau de proportionnalité ✓</strong></p>
            <div class="example">
                <strong>À retenir :</strong> Dans un tableau de proportionnalité, tous les rapports valeur₂/valeur₁ sont égaux au coefficient de proportionnalité k.
            </div>
        `
    },
    "proprietes_proportionnalite": {
        title: "🔢 Leçon 9 - Propriétés de la proportionnalité",
        content: `
            <h4>Propriété 1 : Linéarité (additive)</h4>
            <p>Si on <strong>additionne</strong> deux colonnes d'un tableau de proportionnalité, on obtient une troisième colonne qui appartient au même tableau.</p>
            <div class="example">
                <strong>Exemple :</strong> Si 2 kg coûtent 600 FCFA et 5 kg coûtent 1500 FCFA, alors (2+5) = 7 kg coûtent (600+1500) = 2100 FCFA.
            </div>
            <h4>Propriété 2 : Homogénéité (multiplicative)</h4>
            <p>Si on <strong>multiplie</strong> une valeur par un nombre k, la valeur correspondante est aussi multipliée par k.</p>
            <div class="example">
                <strong>Exemple :</strong> Si 2 kg coûtent 600 FCFA, alors 2 × 3 = 6 kg coûtent 600 × 3 = 1800 FCFA.
            </div>
            <h4>Règle des produits croisés</h4>
            <p>Dans un tableau de proportionnalité, les <strong>produits croisés sont égaux</strong> :</p>
            <p style="text-align:center;">Si a/b = c/d, alors <strong>a × d = b × c</strong></p>
            <div class="example">
                <strong>Exemple :</strong> 2/600 = 5/1500 → 2 × 1500 = 3000 = 5 × 600 = 3000 ✓
            </div>
        `
    },
    "applications_proportionnalite": {
        title: "🔢 Leçon 9 - Applications de la proportionnalité",
        content: `
            <h4>Le coefficient de proportionnalité</h4>
            <p>Le <strong>coefficient de proportionnalité k</strong> est le nombre qui multiplie les valeurs d'une grandeur pour obtenir les valeurs de l'autre :</p>
            <p style="text-align:center;"><strong>k = valeur₂ ÷ valeur₁</strong></p>
            <h4>Les pourcentages</h4>
            <p>Un pourcentage est un rapport sur 100. « p% d'un nombre N » signifie (p × N) ÷ 100.</p>
            <div class="example">
                <strong>Exemple :</strong> 20% de 150 = (20 × 150) ÷ 100 = 3000 ÷ 100 = <strong>30</strong>
            </div>
            <h4>L'échelle d'une carte</h4>
            <p>L'<strong>échelle</strong> d'une carte est le rapport entre une distance sur la carte et la distance réelle correspondante.</p>
            <p style="text-align:center;"><strong>Échelle = distance carte ÷ distance réelle</strong></p>
            <div class="example">
                <strong>Exemple :</strong> Échelle 1/50 000 signifie que 1 cm sur la carte = 50 000 cm = 500 m dans la réalité.<br>
                Si la distance sur la carte est 3 cm, la distance réelle est : 3 × 50 000 = 150 000 cm = 1,5 km.
            </div>
        `
    },
    "symetrie_centrale_point": {
        title: "🔄 Leçon 10 - Symétrique d'un point par rapport à un centre",
        content: `
            <h4>Définition</h4>
            <p>Le <strong>symétrique d'un point A par rapport à un centre O</strong> est le point A' tel que O est le milieu du segment [AA'].</p>
            <p>On dit que A et A' sont <strong>symétriques par rapport à O</strong>.</p>
            <h4>Construction du symétrique d'un point</h4>
            <p>Pour construire A', symétrique de A par rapport à O :</p>
            <ol>
                <li>Tracer la droite (AO).</li>
                <li>Prolonger cette droite au-delà de O.</li>
                <li>Placer A' de l'autre côté de O, à la même distance : OA = OA'.</li>
                <li>Vérifier : O est bien le milieu de [AA'].</li>
            </ol>
            <div class="example">
                <strong>Propriété fondamentale :</strong><br>
                Si A' est le symétrique de A par rapport au centre O, alors :<br>
                • OA = OA' (O est équidistant de A et A')<br>
                • A, O, A' sont alignés et O est le milieu de [AA']
            </div>
        `
    },
    "proprietes_symetrie": {
        title: "🔄 Leçon 10 - Propriétés de la symétrie centrale",
        content: `
            <h4>Symétrique de points alignés</h4>
            <p>Le symétrique de points alignés par rapport à un centre O donne des points alignés (la droite est transformée en une droite parallèle ou la même droite).</p>
            <h4>Symétrique d'une droite</h4>
            <p>Le symétrique d'une droite (d) par rapport à O est une droite (d') <strong>parallèle</strong> à (d) (ou la même droite si O appartient à (d)).</p>
            <h4>Symétrique d'un segment</h4>
            <p>Le symétrique d'un segment [AB] par rapport à O est un segment [A'B'] de même longueur : <strong>A'B' = AB</strong>.</p>
            <h4>Symétrique du milieu d'un segment</h4>
            <p>Le symétrique du milieu I de [AB] par rapport à O est le milieu I' du segment symétrique [A'B'].</p>
            <h4>Symétrique d'un angle</h4>
            <p>La symétrie centrale conserve les angles : l'angle A'O'B' est égal à l'angle AOB.</p>
            <h4>Symétrique d'un cercle</h4>
            <p>Le symétrique d'un cercle de centre C et de rayon r par rapport à O est un cercle de même rayon r dont le centre C' est le symétrique de C par rapport à O.</p>
            <div class="example">
                <strong>À retenir :</strong> La symétrie centrale <strong>conserve</strong> les distances, les longueurs, les angles et les aires. Elle <strong>inverse</strong> l'orientation.
            </div>
        `
    },
    "centre_symetrie": {
        title: "🔄 Leçon 10 - Centre de symétrie d'une figure",
        content: `
            <h4>Définition</h4>
            <p>Un point O est le <strong>centre de symétrie d'une figure</strong> si la figure coïncide avec elle-même après une rotation de 180° autour de O (ou si chaque point de la figure a son symétrique par rapport à O dans la figure).</p>
            <h4>Exemples de figures ayant un centre de symétrie</h4>
            <ul>
                <li>Le <strong>cercle</strong> : son centre est centre de symétrie.</li>
                <li>Le <strong>segment</strong> : son milieu est centre de symétrie.</li>
                <li>Le <strong>parallélogramme</strong> : le point d'intersection des diagonales est centre de symétrie.</li>
                <li>Le <strong>rectangle</strong>, le <strong>losange</strong>, le <strong>carré</strong> : chacun a un centre de symétrie.</li>
            </ul>
            <h4>Figures sans centre de symétrie</h4>
            <ul>
                <li>Le <strong>triangle quelconque</strong> n'a pas de centre de symétrie.</li>
                <li>Le <strong>triangle isocèle</strong> non équilatéral n'a pas de centre de symétrie.</li>
            </ul>
            <div class="example">
                <strong>À retenir :</strong> Pour vérifier si O est un centre de symétrie d'une figure, prends n'importe quel point M de la figure. Son symétrique M' par rapport à O doit aussi appartenir à la figure.
            </div>
        `
    }
};

const questions = [
    // TRIANGLE - PRÉSENTATION ET CONSTRUCTION (5 questions)
    {
        category: "📐 Maths - Triangle",
        concept: "triangle_presentation",
        question: "Combien de côtés possède un triangle ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Un triangle est une figure géométrique à 3 côtés, 3 sommets et 3 angles."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangle_presentation",
        question: "Pour construire un triangle avec les trois longueurs de côtés données, quel outil utilise-t-on pour tracer des arcs de cercle ?",
        options: ["La règle graduée", "Le rapporteur", "Le compas", "L'équerre"],
        correct: 2,
        explanation: "On utilise le compas pour tracer des arcs de cercle depuis chaque extrémité. L'intersection des arcs donne le troisième sommet."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangle_presentation",
        question: "Un triangle avec les côtés 2 cm, 3 cm et 10 cm peut-il être construit ?",
        options: ["Oui", "Non, car 2 + 3 = 5 < 10", "Non, car les angles ne conviennent pas", "Oui, si on utilise un compas"],
        correct: 1,
        explanation: "Non : pour qu'un triangle existe, la somme de deux côtés quelconques doit être supérieure au troisième. Ici 2 + 3 = 5 < 10, donc ce triangle n'existe pas."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangle_presentation",
        question: "Quelle est la condition d'existence d'un triangle ?",
        options: [
            "Les trois côtés doivent être égaux",
            "La somme de deux côtés quelconques doit être supérieure au troisième",
            "Un angle doit être droit",
            "Les trois angles doivent être égaux"
        ],
        correct: 1,
        explanation: "Un triangle existe si et seulement si la somme de deux côtés quelconques est strictement supérieure au troisième côté."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangle_presentation",
        question: "Le triangle avec les côtés 5 cm, 12 cm et 13 cm peut-il être construit ?",
        options: ["Non", "Oui, car 5 + 12 = 17 > 13, 5 + 13 > 12 et 12 + 13 > 5", "Oui, mais seulement avec un rapporteur", "Non, car la somme est trop grande"],
        correct: 1,
        explanation: "Vérifions : 5+12=17>13 ✓ ; 5+13=18>12 ✓ ; 12+13=25>5 ✓. Les trois conditions sont satisfaites, donc ce triangle existe."
    },

    // DROITES PARTICULIÈRES DU TRIANGLE (5 questions)
    {
        category: "📐 Maths - Triangle",
        concept: "droites_triangle",
        question: "Qu'est-ce qu'une hauteur d'un triangle ?",
        options: [
            "Un segment reliant un sommet au milieu du côté opposé",
            "La perpendiculaire abaissée d'un sommet sur le côté opposé",
            "La droite perpendiculaire au milieu d'un côté",
            "Un segment reliant deux sommets"
        ],
        correct: 1,
        explanation: "Une hauteur est la perpendiculaire abaissée d'un sommet sur le côté opposé (ou son prolongement). Les trois hauteurs se croisent à l'orthocentre."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "droites_triangle",
        question: "Les trois médianes d'un triangle se croisent en un point appelé :",
        options: ["Orthocentre", "Circumcentre", "Centre de gravité", "Incentre"],
        correct: 2,
        explanation: "Les trois médianes d'un triangle se croisent au centre de gravité (ou centroïde). Ce point est situé aux 2/3 de chaque médiane depuis le sommet."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "droites_triangle",
        question: "Qu'est-ce qu'une médiatrice d'un côté d'un triangle ?",
        options: [
            "La perpendiculaire abaissée depuis un sommet",
            "Le segment du sommet au milieu du côté opposé",
            "La droite perpendiculaire à un côté passant par son milieu",
            "La bissectrice d'un angle"
        ],
        correct: 2,
        explanation: "La médiatrice d'un côté est la droite perpendiculaire à ce côté en son milieu. Les trois médiatrices d'un triangle se croisent au circumcentre."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "droites_triangle",
        question: "Une médiane d'un triangle est :",
        options: [
            "La droite perpendiculaire en un milieu d'un côté",
            "Le segment reliant un sommet au milieu du côté opposé",
            "La hauteur issue d'un sommet",
            "La bissectrice d'un angle"
        ],
        correct: 1,
        explanation: "Une médiane est le segment qui relie un sommet au milieu du côté opposé. Un triangle possède 3 médianes qui se croisent au centre de gravité."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "droites_triangle",
        question: "Les trois hauteurs d'un triangle se croisent en un point appelé :",
        options: ["Centre de gravité", "Circumcentre", "Orthocentre", "Isocentre"],
        correct: 2,
        explanation: "Les trois hauteurs d'un triangle se croisent à l'orthocentre. Pour un triangle rectangle, l'orthocentre est au sommet de l'angle droit."
    },

    // TRIANGLES PARTICULIERS (6 questions)
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Qu'est-ce qu'un triangle rectangle ?",
        options: [
            "Un triangle avec trois côtés égaux",
            "Un triangle avec un angle droit (90°)",
            "Un triangle avec deux côtés égaux",
            "Un triangle avec tous les angles égaux"
        ],
        correct: 1,
        explanation: "Un triangle rectangle possède exactement un angle droit (90°). Le côté opposé à cet angle est l'hypoténuse."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Dans un triangle rectangle, comment s'appelle le côté le plus long (opposé à l'angle droit) ?",
        options: ["La médiane", "La hauteur", "L'hypoténuse", "La cathète"],
        correct: 2,
        explanation: "Dans un triangle rectangle, l'hypoténuse est le côté opposé à l'angle droit. C'est toujours le plus long des trois côtés."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Quelle est la particularité d'un triangle isocèle ?",
        options: [
            "Il a trois côtés égaux",
            "Il a un angle droit",
            "Il a deux côtés égaux et deux angles égaux",
            "Il a trois angles de 60°"
        ],
        correct: 2,
        explanation: "Un triangle isocèle a deux côtés de même longueur. Les angles à la base (opposés aux côtés égaux) sont également égaux."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Quelle est la mesure de chaque angle d'un triangle équilatéral ?",
        options: ["45°", "60°", "90°", "120°"],
        correct: 1,
        explanation: "Dans un triangle équilatéral, les trois côtés sont égaux et les trois angles valent chacun 60°. En effet, 60° × 3 = 180° (somme des angles d'un triangle)."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Quelle est la somme des angles d'un triangle ?",
        options: ["90°", "180°", "270°", "360°"],
        correct: 1,
        explanation: "La somme des trois angles d'un triangle est toujours égale à 180°, quel que soit le type de triangle."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "triangles_particuliers",
        question: "Un triangle équilatéral est-il aussi isocèle ?",
        options: [
            "Non, ce sont deux types différents",
            "Oui, car il a au moins deux côtés égaux (en fait les trois sont égaux)",
            "Non, un triangle isocèle n'a que deux côtés égaux",
            "Cela dépend du triangle"
        ],
        correct: 1,
        explanation: "Oui ! Un triangle équilatéral est un cas particulier de triangle isocèle : il a les trois côtés égaux, donc a fortiori au moins deux côtés égaux."
    },

    // PÉRIMÈTRE ET AIRE DU TRIANGLE (5 questions)
    {
        category: "📐 Maths - Triangle",
        concept: "perimetre_aire_triangle",
        question: "Quelle est la formule du périmètre d'un triangle de côtés a, b et c ?",
        options: ["P = a × b × c", "P = a + b + c", "P = (a + b) × c", "P = a² + b²"],
        correct: 1,
        explanation: "Le périmètre d'un triangle est la somme de ses trois côtés : P = a + b + c."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "perimetre_aire_triangle",
        question: "Quelle est la formule de l'aire d'un triangle ?",
        options: [
            "A = base × hauteur",
            "A = (base × hauteur) ÷ 2",
            "A = base + hauteur",
            "A = base² ÷ 2"
        ],
        correct: 1,
        explanation: "L'aire d'un triangle est égale à la moitié du produit de la base par la hauteur correspondante : A = (base × hauteur) ÷ 2."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "perimetre_aire_triangle",
        question: "Quel est le périmètre d'un triangle de côtés 5 cm, 7 cm et 9 cm ?",
        options: ["21 cm", "21 cm²", "315 cm", "16 cm"],
        correct: 0,
        explanation: "P = 5 + 7 + 9 = 21 cm. Le périmètre se mesure en cm (longueur), pas en cm²."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "perimetre_aire_triangle",
        question: "Quelle est l'aire d'un triangle de base 8 cm et de hauteur 5 cm ?",
        options: ["40 cm²", "20 cm²", "13 cm²", "40 cm"],
        correct: 1,
        explanation: "A = (8 × 5) ÷ 2 = 40 ÷ 2 = 20 cm². L'aire se mesure en cm² (unités carrées)."
    },
    {
        category: "📐 Maths - Triangle",
        concept: "perimetre_aire_triangle",
        question: "Un triangle équilatéral a un côté de 6 cm. Quel est son périmètre ?",
        options: ["6 cm", "12 cm", "18 cm", "36 cm"],
        correct: 2,
        explanation: "Un triangle équilatéral a trois côtés égaux. P = 6 + 6 + 6 = 18 cm."
    },

    // TABLEAU DE PROPORTIONNALITÉ (5 questions)
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proportionnalite_definition",
        question: "Qu'est-ce qu'un tableau de proportionnalité ?",
        options: [
            "Un tableau où toutes les valeurs sont égales",
            "Un tableau où le rapport entre les valeurs de deux grandeurs est constant",
            "Un tableau où les valeurs s'additionnent",
            "Un tableau avec des fractions"
        ],
        correct: 1,
        explanation: "Dans un tableau de proportionnalité, le rapport entre les valeurs correspondantes de deux grandeurs est toujours le même (coefficient de proportionnalité)."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proportionnalite_definition",
        question: "Le tableau suivant est-il un tableau de proportionnalité ? Quantités : 2, 4, 6 | Prix : 10, 20, 30",
        options: [
            "Non, les valeurs ne sont pas égales",
            "Oui, le rapport prix/quantité est constant : 10/2 = 20/4 = 30/6 = 5",
            "Non, les valeurs augmentent",
            "Impossible à déterminer"
        ],
        correct: 1,
        explanation: "10÷2 = 5 ; 20÷4 = 5 ; 30÷6 = 5. Le rapport est constant (= 5), donc c'est bien un tableau de proportionnalité de coefficient k = 5."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proportionnalite_definition",
        question: "Le tableau suivant est-il de proportionnalité ? Ligne 1 : 2, 4, 6 | Ligne 2 : 3, 7, 9",
        options: [
            "Oui, car les valeurs augmentent",
            "Non, car 3/2 ≠ 7/4 ≠ 9/6",
            "Oui, car on peut trouver un coefficient",
            "Impossible à savoir"
        ],
        correct: 1,
        explanation: "3÷2 = 1,5 ; 7÷4 = 1,75 ; 9÷6 = 1,5. Les rapports ne sont pas tous égaux, donc ce n'est pas un tableau de proportionnalité."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proportionnalite_definition",
        question: "Si 3 stylos coûtent 450 FCFA, quel est le coefficient de proportionnalité (prix par stylo) ?",
        options: ["100 FCFA", "150 FCFA", "120 FCFA", "200 FCFA"],
        correct: 1,
        explanation: "k = 450 ÷ 3 = 150 FCFA. Le coefficient de proportionnalité est le prix par unité, soit 150 FCFA par stylo."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proportionnalite_definition",
        question: "Si le coefficient de proportionnalité est 4 et qu'une valeur de la première grandeur est 7, quelle est la valeur correspondante de la deuxième grandeur ?",
        options: ["3", "11", "28", "1,75"],
        correct: 2,
        explanation: "Si k = 4 et la valeur est 7, alors la valeur correspondante est 7 × 4 = 28."
    },

    // PROPRIÉTÉS DE LA PROPORTIONNALITÉ (5 questions)
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proprietes_proportionnalite",
        question: "Si 3 cahiers coûtent 600 FCFA et 5 cahiers coûtent 1000 FCFA, combien coûtent 8 cahiers d'après la propriété additive ?",
        options: ["1400 FCFA", "1600 FCFA", "1200 FCFA", "2000 FCFA"],
        correct: 1,
        explanation: "Par la propriété additive (linéarité) : 3 + 5 = 8 cahiers → 600 + 1000 = 1600 FCFA."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proprietes_proportionnalite",
        question: "Si 2 kg de riz coûtent 800 FCFA, combien coûtent 6 kg (propriété multiplicative) ?",
        options: ["1600 FCFA", "2400 FCFA", "800 FCFA", "4800 FCFA"],
        correct: 1,
        explanation: "6 = 2 × 3, donc le prix est aussi multiplié par 3 : 800 × 3 = 2400 FCFA."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proprietes_proportionnalite",
        question: "Dans un tableau de proportionnalité, 4/12 = x/9. Quelle est la valeur de x ?",
        options: ["2", "3", "4", "6"],
        correct: 1,
        explanation: "Produits croisés : 4 × 9 = 12 × x → 36 = 12x → x = 36 ÷ 12 = 3."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proprietes_proportionnalite",
        question: "Laquelle de ces situations est une situation de proportionnalité ?",
        options: [
            "L'âge d'une personne et sa taille",
            "Le nombre de litres d'essence et le prix à payer",
            "La température et le mois de l'année",
            "Le numéro de page et le contenu d'un livre"
        ],
        correct: 1,
        explanation: "Le prix d'essence est proportionnel au nombre de litres achetés : si le litre coûte 500 FCFA, 2 L coûtent 1000 FCFA, 3 L coûtent 1500 FCFA, etc."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "proprietes_proportionnalite",
        question: "La règle des produits croisés dit que si a/b = c/d, alors :",
        options: ["a + d = b + c", "a × d = b × c", "a - d = b - c", "a ÷ d = b ÷ c"],
        correct: 1,
        explanation: "Dans une proportion a/b = c/d, les produits croisés sont égaux : a × d = b × c. C'est la propriété fondamentale des proportions."
    },

    // APPLICATIONS DE LA PROPORTIONNALITÉ (5 questions)
    {
        category: "📐 Maths - Proportionnalité",
        concept: "applications_proportionnalite",
        question: "Quel est 25% de 200 ?",
        options: ["25", "50", "75", "100"],
        correct: 1,
        explanation: "25% de 200 = (25 × 200) ÷ 100 = 5000 ÷ 100 = 50."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "applications_proportionnalite",
        question: "Une carte a l'échelle 1/25 000. Une distance de 4 cm sur la carte correspond à quelle distance réelle ?",
        options: ["1 km", "10 km", "1000 m", "25 000 cm seulement"],
        correct: 2,
        explanation: "Distance réelle = 4 × 25 000 = 100 000 cm = 1 000 m = 1 km. 1000 m et 1 km sont la même réponse ici."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "applications_proportionnalite",
        question: "Un article coûte 2500 FCFA. On applique une réduction de 10%. Quel est le montant de la réduction ?",
        options: ["25 FCFA", "250 FCFA", "2250 FCFA", "2750 FCFA"],
        correct: 1,
        explanation: "10% de 2500 = (10 × 2500) ÷ 100 = 25 000 ÷ 100 = 250 FCFA. Le prix réduit sera 2500 - 250 = 2250 FCFA."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "applications_proportionnalite",
        question: "Le coefficient de proportionnalité entre le prix et la quantité est k = 300 FCFA/kg. Quel est le prix de 7 kg ?",
        options: ["307 FCFA", "2100 FCFA", "293 FCFA", "21 FCFA"],
        correct: 1,
        explanation: "Prix = quantité × k = 7 × 300 = 2100 FCFA."
    },
    {
        category: "📐 Maths - Proportionnalité",
        concept: "applications_proportionnalite",
        question: "Sur une carte à l'échelle 1/100 000, la distance réelle entre deux villes est 50 km. Quelle est la distance sur la carte ?",
        options: ["0,5 cm", "50 cm", "5 cm", "500 cm"],
        correct: 1,
        explanation: "1 cm sur la carte représente 100 000 cm = 1 km dans la réalité. Donc : distance sur la carte = distance réelle × (1/100 000) = 5 000 000 cm × (1/100 000) = 50 cm. Ou plus simplement : 50 km réels × (1 cm / 1 km) = 50 cm sur la carte."
    },

    // SYMÉTRIQUE D'UN POINT (4 questions)
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "symetrie_centrale_point",
        question: "Qu'est-ce que le symétrique d'un point A par rapport à un centre O ?",
        options: [
            "Le point diamétralement opposé à O",
            "Le point A' tel que O est le milieu du segment [AA']",
            "Le point A lui-même",
            "Le point situé à la même distance de A que O"
        ],
        correct: 1,
        explanation: "Le symétrique A' de A par rapport à O est le point tel que O est le milieu de [AA']. Autrement dit OA = OA' et A, O, A' sont alignés."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "symetrie_centrale_point",
        question: "Si O est le milieu de [AA'], quel est le symétrique de A par rapport à O ?",
        options: ["O lui-même", "A", "A'", "Impossible à déterminer"],
        correct: 2,
        explanation: "Si O est le milieu de [AA'], alors A' est le symétrique de A par rapport à O (et réciproquement, A est le symétrique de A')."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "symetrie_centrale_point",
        question: "Quel est le symétrique du centre O par rapport à lui-même ?",
        options: ["Un point à l'infini", "O lui-même", "Un point symétrique indéterminé", "Le point opposé"],
        correct: 1,
        explanation: "Le symétrique du centre O par rapport à O est O lui-même, car O est son propre milieu."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "symetrie_centrale_point",
        question: "Pour construire le symétrique de A par rapport à O, quelle est la première étape ?",
        options: [
            "Tracer un cercle centré en A",
            "Tracer la droite (AO) et la prolonger au-delà de O",
            "Tracer la perpendiculaire à AO en O",
            "Mesurer l'angle AOA'"
        ],
        correct: 1,
        explanation: "Pour construire A' symétrique de A par rapport à O : tracer la droite (AO), la prolonger au-delà de O, puis placer A' tel que OA = OA'."
    },

    // PROPRIÉTÉS DE LA SYMÉTRIE CENTRALE (5 questions)
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "proprietes_symetrie",
        question: "Que devient un segment par symétrie centrale ?",
        options: [
            "Un segment de longueur double",
            "Un segment de même longueur",
            "Un point",
            "Un angle"
        ],
        correct: 1,
        explanation: "La symétrie centrale conserve les longueurs : le symétrique d'un segment [AB] est un segment [A'B'] de même longueur (A'B' = AB)."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "proprietes_symetrie",
        question: "Que devient une droite par symétrie centrale (si le centre O n'appartient pas à la droite) ?",
        options: [
            "Une droite perpendiculaire",
            "Une droite parallèle",
            "Un cercle",
            "Un segment"
        ],
        correct: 1,
        explanation: "Le symétrique d'une droite par rapport à un point O est une droite parallèle à la droite originale (sauf si O appartient à la droite, auquel cas c'est la même droite)."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "proprietes_symetrie",
        question: "La symétrie centrale conserve-t-elle les mesures d'angles ?",
        options: ["Non, les angles sont doublés", "Oui, les angles sont conservés", "Non, les angles sont réduits de moitié", "Cela dépend de la figure"],
        correct: 1,
        explanation: "Oui, la symétrie centrale conserve les angles (ainsi que les longueurs et les aires). C'est une isométrie."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "proprietes_symetrie",
        question: "Quel est le symétrique d'un cercle de centre C et de rayon r par rapport à un point O ?",
        options: [
            "Un cercle de centre O et de rayon r",
            "Un cercle de centre C' (symétrique de C par rapport à O) et de même rayon r",
            "Un cercle de rayon 2r",
            "Un demi-cercle"
        ],
        correct: 1,
        explanation: "Le symétrique d'un cercle de centre C et de rayon r par rapport à O est un cercle de même rayon r, dont le centre est C', le symétrique de C par rapport à O."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "proprietes_symetrie",
        question: "Que dit-on de trois points alignés et de leurs symétriques par rapport à un centre ?",
        options: [
            "Les points symétriques forment un triangle",
            "Les points symétriques sont aussi alignés",
            "Les points symétriques forment un cercle",
            "Les points symétriques sont confondus"
        ],
        correct: 1,
        explanation: "Le symétrique de points alignés sont des points alignés : la symétrie centrale conserve l'alignement des points."
    },

    // CENTRE DE SYMÉTRIE (4 questions)
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "centre_symetrie",
        question: "Qu'est-ce qu'un centre de symétrie d'une figure ?",
        options: [
            "Le centre du cercle inscrit dans la figure",
            "Un point O tel que chaque point de la figure a son symétrique par rapport à O dans la figure",
            "Le point d'intersection des diagonales d'un triangle",
            "Le milieu de l'hypoténuse"
        ],
        correct: 1,
        explanation: "O est un centre de symétrie si, pour chaque point M de la figure, son symétrique M' par rapport à O appartient aussi à la figure."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "centre_symetrie",
        question: "Parmi ces figures, laquelle possède un centre de symétrie ?",
        options: ["Le triangle isocèle (non équilatéral)", "Le triangle rectangle", "Le parallélogramme", "Le triangle quelconque"],
        correct: 2,
        explanation: "Le parallélogramme possède un centre de symétrie : c'est le point d'intersection de ses diagonales. Les triangles (sauf cas particulier) n'ont pas de centre de symétrie."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "centre_symetrie",
        question: "Le cercle possède-t-il un centre de symétrie ?",
        options: ["Non", "Oui, son centre est un centre de symétrie", "Oui, mais seulement pour les grands cercles", "Cela dépend du rayon"],
        correct: 1,
        explanation: "Oui ! Le centre du cercle est un centre de symétrie : tout point M du cercle a son symétrique M' (diamétralement opposé) qui appartient aussi au cercle."
    },
    {
        category: "📐 Maths - Symétrie centrale",
        concept: "centre_symetrie",
        question: "Le triangle quelconque (dont les trois côtés sont de longueurs différentes) possède-t-il un centre de symétrie ?",
        options: ["Oui, au milieu du plus grand côté", "Non, un triangle quelconque n'a pas de centre de symétrie", "Oui, à l'intersection des médianes", "Oui, à l'orthocentre"],
        correct: 1,
        explanation: "Non, un triangle quelconque n'a pas de centre de symétrie. Seuls certains quadrilatères (parallélogrammes…) et le cercle en possèdent un."
    }
];

// Système de progression et données
let progressData = {
    questionsAttempted: 0,
    correctAnswers: 0,
    totalQuestions: questions.length,
    startTime: null,
    lastCompleted: null,
    categoryScores: {}
};

function loadProgress() {
    const saved = localStorage.getItem('quizProgress_maths_lecons');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }
    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('quizProgress_maths_lecons', JSON.stringify(progressData));
    }
}

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
    const savedAnswered = localStorage.getItem('answeredQuestions_maths_lecons');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }
    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));
    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_maths_lecons');
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
    initializeQuestions();
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const question = shuffledQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
    showingConcept = true;
    showingExplanation = false;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('categoryTag').textContent = question.category;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestion + 1} / ${shuffledQuestions.length}`;
    showConcept();
    document.getElementById('nextBtn').style.display = 'none';
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        opt.style.pointerEvents = 'auto';
    });
    document.getElementById('validateBtn').style.display = 'none';
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
        document.getElementById('conceptBtn').style.display = 'block';
        document.getElementById('conceptBtn').textContent = 'Commencer la question';
    } else {
        showQuestion();
    }
}

function showQuestion() {
    const question = shuffledQuestions[currentQuestion];
    document.getElementById('conceptSection').style.display = 'none';
    document.getElementById('questionBox').style.display = 'block';
    document.getElementById('explanation').style.display = 'none';
    const instructionHTML = `
        <div class="question-instructions">
            <div class="instruction-text">📝 <strong>Lis bien la question avant de répondre</strong></div>
            <div class="help-link">
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions de Mathématiques&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
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
}

function selectOption(index) {
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.querySelectorAll('.option')[index].classList.add('selected');
    document.getElementById('validateBtn').style.display = 'block';
    userAnswers[currentQuestion] = index;
}

function validateAnswer() {
    const question = shuffledQuestions[currentQuestion];
    const userAnswer = userAnswers[currentQuestion];
    document.querySelectorAll('.option').forEach((opt, index) => {
        if (index === question.correct) {
            opt.classList.add('correct');
        } else if (index === userAnswer && index !== question.correct) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });
    if (userAnswer === question.correct) {
        score++;
    }
    updateProgressData(question, userAnswer === question.correct);
    showExplanation();
    document.getElementById('validateBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
}

function updateProgressData(question, isCorrect) {
    progressData.questionsAttempted++;
    if (isCorrect) {
        progressData.correctAnswers++;
    }
    const category = question.concept;
    if (!progressData.categoryScores[category]) {
        progressData.categoryScores[category] = {
            attempted: 0,
            correct: 0,
            total: questions.filter(q => q.concept === category).length
        };
    }
    progressData.categoryScores[category].attempted++;
    if (isCorrect) {
        progressData.categoryScores[category].correct++;
    }
    localStorage.setItem('quizProgress_maths_lecons', JSON.stringify(progressData));
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
    const originalQuestionIndex = questions.findIndex(q => q === shuffledQuestions[currentQuestion]);
    if (originalQuestionIndex !== -1 && !answeredQuestions.includes(originalQuestionIndex)) {
        answeredQuestions.push(originalQuestionIndex);
        localStorage.setItem('answeredQuestions_maths_lecons', JSON.stringify(answeredQuestions));
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
    if (percentage >= 90) { message = "Excellence ! 🏆"; emoji = "🏆"; }
    else if (percentage >= 75) { message = "Très bien ! 🌟"; emoji = "🌟"; }
    else if (percentage >= 60) { message = "Bien ! 💪"; emoji = "💪"; }
    else if (percentage >= 45) { message = "À améliorer 📚"; emoji = "📚"; }
    else { message = "Révisions nécessaires 🚀"; emoji = "🚀"; }
    document.getElementById('finalScore').textContent = `${score}/${shuffledQuestions.length}`;
    document.getElementById('finalPercentage').textContent = `${percentage}%`;
    document.getElementById('finalMessage').textContent = message;
    document.getElementById('finalEmoji').textContent = emoji;
    displayDetailedStats();
    progressData.lastCompleted = new Date().toISOString();
    localStorage.setItem('quizProgress_maths_lecons', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');
    let statsHTML = `
        <h3>📊 Statistiques détaillées - Maths Leçons 8-10</h3>
        <div class="stat-item">
            <span>Progression :</span>
            <span>${stats.completion}%</span>
        </div>
        <div class="stat-item">
            <span>Précision :</span>
            <span>${stats.accuracy}%</span>
        </div>
        <div class="stat-item">
            <span>Temps passé :</span>
            <span>${stats.timeSpent}</span>
        </div>
    `;
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

window.addEventListener('load', function() {
    loadProgress();
    updateProgressDisplay();
});
