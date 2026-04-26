const concepts = {
    "eau_plantes": {
        title: "💧 Importance de l'eau pour la croissance des plantes",
        content: `
            <h4>Expérience</h4>
            <p>On cultive deux groupes de plantes dans les mêmes conditions (lumière, sol, température), mais on arrose uniquement le groupe A. Le groupe B ne reçoit pas d'eau.</p>
            <h4>Résultats</h4>
            <ul>
                <li>Groupe A (avec eau) : les plantes poussent, leurs feuilles sont vertes et turgescentes.</li>
                <li>Groupe B (sans eau) : les plantes se flétrissent, jaunissent et meurent.</li>
            </ul>
            <h4>Analyse et interprétation</h4>
            <p>L'eau est indispensable à la plante. Elle sert à :</p>
            <ul>
                <li>Transporter les sels minéraux des racines vers les feuilles (sève brute).</li>
                <li>Maintenir la turgescence (rigidité) des cellules.</li>
                <li>Participer à la photosynthèse.</li>
            </ul>
            <h4>Conclusion</h4>
            <p>L'eau est un facteur indispensable à la croissance des plantes à fleurs. Sans eau, les plantes ne peuvent ni se nourrir ni se développer normalement.</p>
            <div class="example">
                <strong>À retenir :</strong> L'eau est absorbée par les racines et monte jusqu'aux feuilles sous forme de sève brute.
            </div>
        `
    },
    "sels_mineraux": {
        title: "🪨 Importance des sels minéraux pour la croissance des plantes",
        content: `
            <h4>Expérience</h4>
            <p>On cultive deux groupes de plantes en hydroponie (dans de l'eau) : le groupe A reçoit une solution complète avec sels minéraux, le groupe B ne reçoit que de l'eau distillée (sans sels).</p>
            <h4>Résultats</h4>
            <ul>
                <li>Groupe A (avec sels minéraux) : croissance normale, feuilles vertes et saines.</li>
                <li>Groupe B (sans sels minéraux) : croissance ralentie, feuilles pâles (chlorose), plante chétive.</li>
            </ul>
            <h4>Analyse et interprétation</h4>
            <p>Les sels minéraux (azote, phosphore, potassium, calcium…) sont nécessaires pour :</p>
            <ul>
                <li>Fabriquer la chlorophylle (l'azote est essentiel).</li>
                <li>Construire les tissus et les organes de la plante.</li>
                <li>Activer les réactions chimiques de la photosynthèse.</li>
            </ul>
            <div class="example">
                <strong>À retenir :</strong> Les sels minéraux sont dissous dans l'eau du sol et absorbés par les racines. Ils voyagent avec la sève brute.
            </div>
        `
    },
    "lumiere_plantes": {
        title: "☀️ Importance de la lumière pour la croissance des plantes",
        content: `
            <h4>Expérience</h4>
            <p>On cultive deux groupes de plantes identiques dans les mêmes conditions de sol et d'arrosage, mais le groupe A est placé à la lumière et le groupe B est mis dans le noir complet.</p>
            <h4>Résultats</h4>
            <ul>
                <li>Groupe A (avec lumière) : croissance normale, tiges solides, feuilles vertes.</li>
                <li>Groupe B (sans lumière) : tiges allongées et grêles (étiolement), feuilles jaunes, puis la plante dépérit.</li>
            </ul>
            <h4>Analyse et interprétation</h4>
            <p>La lumière est nécessaire à la photosynthèse :</p>
            <ul>
                <li>La plante capture l'énergie lumineuse grâce à la chlorophylle.</li>
                <li>Elle transforme l'eau (H₂O) et le CO₂ en glucose et en dioxygène.</li>
                <li>Sans lumière, pas de photosynthèse, donc pas de fabrication de matière organique.</li>
            </ul>
            <h4>Conclusion</h4>
            <p>La lumière est un facteur indispensable à la croissance des plantes à fleurs. Elle permet la photosynthèse, seul moyen pour la plante de produire sa propre nourriture.</p>
            <h4>Conclusion générale</h4>
            <p>L'eau, les sels minéraux et la lumière sont trois facteurs essentiels et complémentaires pour la croissance des plantes à fleurs. L'absence de l'un d'eux perturbe ou stoppe la croissance.</p>
            <div class="example">
                <strong>À retenir :</strong> Photosynthèse : eau + CO₂ + lumière → glucose + dioxygène (O₂).
            </div>
        `
    },
    "composition_aliments": {
        title: "🥗 Composition des aliments et croissance des vertébrés",
        content: `
            <h4>Résultats (tableau des principaux nutriments)</h4>
            <p>Les aliments sont composés de plusieurs types de nutriments :</p>
            <ul>
                <li><strong>Glucides (sucres) :</strong> céréales, pain, riz, pâtes, fruits → source d'énergie rapide.</li>
                <li><strong>Lipides (graisses) :</strong> huile, beurre, fromage, viandes grasses → réserve d'énergie et protection des organes.</li>
                <li><strong>Protides (protéines) :</strong> viande, poisson, œufs, légumineuses → construction et renouvellement des tissus.</li>
                <li><strong>Sels minéraux :</strong> calcium (os et dents), fer (sang), phosphore…</li>
                <li><strong>Vitamines :</strong> régulation des fonctions de l'organisme.</li>
                <li><strong>Eau :</strong> transport des nutriments, régulation de la température.</li>
            </ul>
            <h4>Analyse, interprétation et conclusion</h4>
            <p>Chaque nutriment joue un rôle précis. Une alimentation équilibrée apporte tous ces nutriments en quantité suffisante pour assurer une croissance normale du vertébré.</p>
            <div class="example">
                <strong>À retenir :</strong> Les protéines sont les « briques » de l'organisme. Le calcium renforce les os. Les glucides fournissent de l'énergie immédiate.
            </div>
        `
    },
    "quantite_aliments": {
        title: "⚖️ Quantité des aliments et croissance des vertébrés",
        content: `
            <h4>Expérience</h4>
            <p>On élève deux groupes de rats avec la même alimentation équilibrée : le groupe A reçoit une quantité suffisante, le groupe B reçoit une quantité insuffisante (régime restrictif).</p>
            <h4>Résultats</h4>
            <ul>
                <li>Groupe A : croissance normale, poids et taille atteints conformément aux normes.</li>
                <li>Groupe B : retard de croissance, amaigrissement, affaiblissement général.</li>
            </ul>
            <h4>Analyse et interprétation</h4>
            <p>Un apport insuffisant d'aliments entraîne une carence énergétique : l'organisme n'a pas assez de « carburant » pour grandir et fonctionner normalement. L'inverse (suralimentation) peut provoquer l'obésité.</p>
            <h4>Conclusion</h4>
            <p>La quantité d'aliments consommés influence directement la croissance des vertébrés. Il faut manger en quantité suffisante, ni trop ni trop peu.</p>
            <div class="example">
                <strong>À retenir :</strong> Sous-alimentation → retard de croissance. Suralimentation → obésité. L'équilibre est essentiel.
            </div>
        `
    },
    "qualite_aliments": {
        title: "🌟 Qualité des aliments et croissance des vertébrés",
        content: `
            <h4>Expérience</h4>
            <p>On élève deux groupes de rats en leur donnant la même quantité de nourriture, mais le groupe A reçoit une alimentation variée et équilibrée, tandis que le groupe B reçoit une alimentation pauvre (un seul type d'aliment, carencée).</p>
            <h4>Résultats</h4>
            <ul>
                <li>Groupe A : croissance normale, bonne santé, pelage brillant.</li>
                <li>Groupe B : maladies de carence, os fragiles (manque de calcium), anémie (manque de fer), croissance ralentie ou arrêtée.</li>
            </ul>
            <h4>Analyse</h4>
            <p>La qualité de l'alimentation (variété et équilibre des nutriments) est aussi importante que la quantité. Un aliment unique, même en grande quantité, ne peut pas couvrir tous les besoins nutritionnels. La malnutrition qualitative entraîne des carences.</p>
            <div class="example">
                <strong>À retenir :</strong> Carence en vitamine C → scorbut. Carence en calcium → rachitisme. Une alimentation diversifiée prévient les carences.
            </div>
        `
    }
};

const questions = [
    // EAU ET PLANTES (7 questions)
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Quel rôle joue principalement l'eau dans la croissance des plantes à fleurs ?",
        options: ["Elle produit de l'oxygène seule", "Elle transporte les sels minéraux et participe à la photosynthèse", "Elle remplace la lumière", "Elle fabrique la chlorophylle"],
        correct: 1,
        explanation: "L'eau transporte les sels minéraux sous forme de sève brute et est indispensable à la photosynthèse."
    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Que se passe-t-il pour une plante privée d'eau ?",
        options: ["Elle grandit plus vite", "Elle se flétrit, jaunit et meurt", "Elle produit plus de fruits", "Elle absorbe plus de CO₂"],
        correct: 1,
        explanation: "Sans eau, la plante perd sa turgescence : elle se flétrit, jaunit et finit par mourir."

    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Par quel organe la plante absorbe-t-elle l'eau du sol ?",
        options: ["Les feuilles", "Les fleurs", "Les racines", "La tige"],
        correct: 2,
        explanation: "L'eau est absorbée par les racines (notamment par les poils absorbants) et monte vers les feuilles."
    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Comment appelle-t-on la sève qui transporte l'eau et les sels minéraux des racines vers les feuilles ?",
        options: ["Sève élaborée", "Sève brute", "Sève sucrée", "Sève minérale"],
        correct: 1,
        explanation: "La sève brute transporte l'eau et les sels minéraux absorbés par les racines vers les feuilles."
    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Dans une expérience sur l'importance de l'eau, deux groupes de plantes sont cultivés : le groupe A est arrosé, le groupe B ne l'est pas. Quelle est la conclusion ?",
        options: ["L'eau n'a aucun effet sur la croissance", "Le groupe B pousse mieux car il est stressé", "L'eau est indispensable à la croissance des plantes", "Les deux groupes poussent de façon identique"],
        correct: 2,
        explanation: "Le groupe A (arrosé) se développe normalement ; le groupe B (non arrosé) dépérit. Conclusion : l'eau est indispensable."
    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "Qu'est-ce que la turgescence d'une cellule végétale ?",
        options: ["La couleur verte de la cellule", "La rigidité de la cellule due à la pression de l'eau", "La division de la cellule", "La photosynthèse de la cellule"],
        correct: 1,
        explanation: "La turgescence est la rigidité des cellules végétales due à la pression exercée par l'eau à l'intérieur de la cellule."
    },
    {
        category: "🌿 SVT",
        concept: "eau_plantes",
        question: "L'eau participe à quelle réaction chimique essentielle pour la plante ?",
        options: ["La respiration animale", "La photosynthèse", "La digestion", "La transpiration humaine"],
        correct: 1,
        explanation: "L'eau (H₂O) est l'un des réactifs de la photosynthèse : eau + CO₂ + lumière → glucose + O₂."
    },

    // SELS MINÉRAUX (6 questions)
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "Que se passe-t-il pour une plante cultivée dans de l'eau sans sels minéraux ?",
        options: ["Elle pousse plus vite", "Ses feuilles jaunissent (chlorose) et sa croissance est ralentie", "Elle fleurit abondamment", "Elle résiste mieux aux maladies"],
        correct: 1,
        explanation: "Sans sels minéraux, la plante présente une chlorose (feuilles pâles) et une croissance ralentie car elle ne peut pas fabriquer la chlorophylle normalement."
    },
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "Quel sel minéral est essentiel pour fabriquer la chlorophylle ?",
        options: ["Le calcium", "Le phosphore", "L'azote", "Le potassium"],
        correct: 2,
        explanation: "L'azote (N) est indispensable à la synthèse de la chlorophylle. Une carence en azote provoque le jaunissement des feuilles."
    },
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "Comment les sels minéraux entrent-ils dans la plante ?",
        options: ["Par les fleurs", "Dissous dans l'eau, absorbés par les racines", "Par les feuilles uniquement", "Par la tige"],
        correct: 1,
        explanation: "Les sels minéraux sont dissous dans l'eau du sol et absorbés par les racines avec la sève brute."
    },
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "Quelle technique permet de cultiver des plantes directement dans une solution minérale (sans sol) ?",
        options: ["La photosynthèse", "L'hydroponie", "La symbiose", "La germination"],
        correct: 1,
        explanation: "L'hydroponie est une technique de culture sans sol : les plantes sont cultivées dans une solution aqueuse contenant tous les sels minéraux nécessaires."
    },
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "Quel est le rôle du calcium pour la plante ?",
        options: ["Fabriquer la chlorophylle", "Renforcer les parois cellulaires", "Absorber la lumière", "Produire du glucose"],
        correct: 1,
        explanation: "Le calcium renforce les parois cellulaires et participe à la solidité des tissus végétaux."
    },
    {
        category: "🌿 SVT",
        concept: "sels_mineraux",
        question: "La chlorose d'une plante (feuilles qui jaunissent) est souvent due à :",
        options: ["Un excès de lumière", "Une carence en sels minéraux, notamment en azote", "Un excès d'eau", "Un manque de CO₂"],
        correct: 1,
        explanation: "La chlorose est un symptôme de carence en sels minéraux (surtout en azote) : la plante ne peut plus fabriquer suffisamment de chlorophylle."
    },

    // LUMIÈRE ET PLANTES (6 questions)
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Quelle est la fonction principale de la lumière pour une plante à fleurs ?",
        options: ["Réguler la température", "Permettre la photosynthèse", "Absorber l'eau", "Produire des sels minéraux"],
        correct: 1,
        explanation: "La lumière fournit l'énergie nécessaire à la photosynthèse, qui permet à la plante de fabriquer son propre aliment (le glucose)."
    },
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Qu'est-ce que l'étiolement d'une plante ?",
        options: ["Une plante qui produit trop de fleurs", "Une plante dont les tiges s'allongent et pâlissent par manque de lumière", "Une plante qui pousse dans l'eau", "Une maladie causée par les insectes"],
        correct: 1,
        explanation: "L'étiolement est la déformation d'une plante privée de lumière : ses tiges s'allongent anormalement et ses feuilles jaunissent."
    },
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Quel pigment permet à la plante de capter l'énergie lumineuse ?",
        options: ["La mélanine", "La chlorophylle", "La carotène", "L'hémoglobine"],
        correct: 1,
        explanation: "La chlorophylle est le pigment vert des feuilles qui absorbe l'énergie lumineuse pour réaliser la photosynthèse."
    },
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Quelle est l'équation simplifiée de la photosynthèse ?",
        options: ["O₂ + glucose → CO₂ + eau", "Eau + CO₂ + lumière → glucose + O₂", "Glucose + O₂ → eau + CO₂", "CO₂ + lumière → eau + sel"],
        correct: 1,
        explanation: "La photosynthèse : eau (H₂O) + dioxyde de carbone (CO₂) + énergie lumineuse → glucose + dioxygène (O₂)."
    },
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Que produit la plante grâce à la photosynthèse ?",
        options: ["De l'eau et des sels minéraux", "Du glucose et du dioxygène", "De la chlorophylle et de l'azote", "De la sève brute et du CO₂"],
        correct: 1,
        explanation: "La photosynthèse produit du glucose (aliment de la plante) et du dioxygène (O₂), qui est rejeté dans l'air."
    },
    {
        category: "🌿 SVT",
        concept: "lumiere_plantes",
        question: "Quelle est la conclusion générale sur les facteurs de croissance des plantes à fleurs ?",
        options: ["Seule la lumière est nécessaire", "L'eau seule suffit à la croissance", "L'eau, les sels minéraux et la lumière sont tous trois indispensables", "La lumière et les sels minéraux suffisent"],
        correct: 2,
        explanation: "L'eau, les sels minéraux et la lumière sont trois facteurs complémentaires et tous indispensables à la croissance des plantes à fleurs."
    },

    // COMPOSITION DES ALIMENTS (7 questions)
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Quel nutriment est principalement responsable de la construction et du renouvellement des tissus chez les vertébrés ?",
        options: ["Les glucides", "Les lipides", "Les protides (protéines)", "Les vitamines"],
        correct: 2,
        explanation: "Les protides (protéines) sont les « briques » de l'organisme : ils servent à construire et renouveler les muscles, la peau, les organes."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Quel minéral est essentiel pour la solidité des os et des dents ?",
        options: ["Le fer", "Le calcium", "Le potassium", "Le sodium"],
        correct: 1,
        explanation: "Le calcium est indispensable à la minéralisation des os et des dents. Une carence en calcium peut causer le rachitisme chez les enfants."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Quelle est la principale fonction des glucides dans l'organisme ?",
        options: ["Construire les muscles", "Fournir de l'énergie rapide", "Protéger les organes", "Réguler la température"],
        correct: 1,
        explanation: "Les glucides (sucres) sont la principale source d'énergie rapide pour l'organisme. On les trouve dans les céréales, le pain, les fruits."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Dans quel aliment trouve-t-on principalement des protéines ?",
        options: ["Le sucre de table", "L'huile d'olive", "La viande et le poisson", "Le pain blanc"],
        correct: 2,
        explanation: "La viande, le poisson, les œufs et les légumineuses sont riches en protéines. L'huile est un lipide, le sucre est un glucide."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Quel est le rôle du fer dans l'organisme des vertébrés ?",
        options: ["Renforcer les os", "Participer au transport de l'oxygène dans le sang (hémoglobine)", "Fournir de l'énergie", "Régulation de la vue"],
        correct: 1,
        explanation: "Le fer est un composant essentiel de l'hémoglobine, la protéine des globules rouges qui transporte l'oxygène dans le sang."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Les lipides servent principalement à :",
        options: ["Construire les os", "Constituer une réserve d'énergie et protéger les organes", "Fabriquer du sang", "Transporter les vitamines seulement"],
        correct: 1,
        explanation: "Les lipides (graisses) constituent une réserve d'énergie à long terme et servent d'isolant thermique et de protection pour les organes."
    },
    {
        category: "🌿 SVT",
        concept: "composition_aliments",
        question: "Pourquoi l'eau est-elle un composant alimentaire indispensable ?",
        options: ["Car elle fournit des glucides", "Car elle transporte les nutriments et régule la température du corps", "Car elle remplace les protéines", "Car elle produit de l'énergie directement"],
        correct: 1,
        explanation: "L'eau représente environ 60 à 70 % du corps humain. Elle transporte les nutriments, élimine les déchets et régule la température corporelle."
    },

    // QUANTITÉ DES ALIMENTS (6 questions)
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "Que provoque une sous-alimentation (quantité insuffisante de nourriture) chez un vertébré en croissance ?",
        options: ["Une croissance accélérée", "Un retard de croissance et un affaiblissement général", "Une meilleure résistance aux maladies", "Aucun effet visible"],
        correct: 1,
        explanation: "La sous-alimentation entraîne un retard de croissance, un amaigrissement et une faiblesse générale car l'organisme manque de matière première et d'énergie."
    },
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "La suralimentation (manger en quantité excessive) peut entraîner :",
        options: ["Une croissance plus rapide", "L'obésité et ses complications", "Une meilleure mémoire", "Plus de muscles"],
        correct: 1,
        explanation: "La suralimentation provoque une accumulation de graisses (obésité), ce qui peut engendrer des maladies cardiovasculaires et métaboliques."
    },
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "Dans l'expérience sur la quantité des aliments, deux groupes de rats reçoivent la même nourriture équilibrée, mais en quantité différente. Quelle conclusion tire-t-on ?",
        options: ["La quantité n'a pas d'importance", "La quantité suffisante est indispensable à une croissance normale", "Le groupe qui mange moins grandit mieux", "Les deux groupes grandissent pareillement"],
        correct: 1,
        explanation: "Le groupe recevant une quantité suffisante grandit normalement. Le groupe sous-alimenté présente un retard de croissance. La quantité est un facteur de croissance."
    },
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "Qu'est-ce que la malnutrition quantitative ?",
        options: ["Une alimentation de mauvaise qualité", "Un apport alimentaire insuffisant ou excessif en quantité", "Une allergie alimentaire", "Une maladie contagieuse"],
        correct: 1,
        explanation: "La malnutrition quantitative désigne soit la sous-alimentation (manque de nourriture), soit la suralimentation (excès de nourriture)."
    },
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "Quel est le principe fondamental concernant la quantité d'aliments pour une bonne croissance ?",
        options: ["Manger le plus possible", "Ne jamais manger entre les repas", "Manger en quantité suffisante, ni trop ni trop peu", "Sauter des repas pour rester mince"],
        correct: 2,
        explanation: "Une croissance normale nécessite une quantité d'aliments adaptée aux besoins : ni trop (surpoids) ni trop peu (carences)."
    },
    {
        category: "🌿 SVT",
        concept: "quantite_aliments",
        question: "Pourquoi les besoins alimentaires sont-ils plus importants pendant l'enfance et l'adolescence ?",
        options: ["Parce que les enfants bougent moins", "Parce que la croissance nécessite plus d'énergie et de matériaux de construction", "Parce que les enfants digèrent moins bien", "Parce que les adultes dorment plus"],
        correct: 1,
        explanation: "Pendant la croissance, l'organisme a besoin de plus d'énergie et de nutriments (protéines, calcium…) pour construire de nouveaux tissus et organes."
    },

    // QUALITÉ DES ALIMENTS (6 questions)
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "Qu'est-ce qu'une maladie de carence ?",
        options: ["Une maladie due à un excès de vitamines", "Une maladie provoquée par le manque d'un ou plusieurs nutriments essentiels", "Une maladie contagieuse", "Une allergie aux protéines"],
        correct: 1,
        explanation: "Une maladie de carence est causée par l'absence ou le manque d'un nutriment essentiel (vitamine, minéral…) dans l'alimentation."
    },
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "Le rachitisme est une maladie de carence due à un manque de :",
        options: ["Fer", "Vitamine C", "Calcium et/ou vitamine D", "Protéines"],
        correct: 2,
        explanation: "Le rachitisme est causé par une carence en calcium et/ou en vitamine D, entraînant une fragilité osseuse chez les enfants."
    },
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "Le scorbut est une maladie due à un manque de :",
        options: ["Calcium", "Vitamine C", "Fer", "Glucides"],
        correct: 1,
        explanation: "Le scorbut est causé par une carence en vitamine C. Il provoque des hémorragies et la chute des dents. Autrefois fréquent chez les marins."
    },
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "Dans l'expérience sur la qualité des aliments, un groupe de rats reçoit une alimentation variée et l'autre un seul type d'aliment. Quelle conclusion peut-on tirer ?",
        options: ["Un seul aliment suffit si on en mange beaucoup", "La diversité alimentaire est essentielle pour éviter les carences", "La qualité n'a pas d'importance, seule la quantité compte", "Les deux groupes se développent identiquement"],
        correct: 1,
        explanation: "Le groupe sous-alimenté qualitativement présente des maladies de carence. La diversité alimentaire est indispensable pour couvrir tous les besoins nutritionnels."
    },
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "Pourquoi doit-on manger varié pour grandir correctement ?",
        options: ["Pour ne pas s'ennuyer à table", "Parce qu'aucun aliment seul ne contient tous les nutriments essentiels", "Parce que certains aliments se digèrent mieux ensemble", "Pour gagner en appétit"],
        correct: 1,
        explanation: "Aucun aliment n'est complet à lui seul. La variété alimentaire permet d'apporter tous les nutriments nécessaires en quantité adéquate."
    },
    {
        category: "🌿 SVT",
        concept: "qualite_aliments",
        question: "L'anémie ferriprive est liée à une carence en :",
        options: ["Calcium", "Vitamine A", "Fer", "Glucides"],
        correct: 2,
        explanation: "L'anémie ferriprive est due à un manque de fer, ce qui réduit la production d'hémoglobine et le transport d'oxygène dans le sang."
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
    const saved = localStorage.getItem('quizProgress_svt');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }
    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('quizProgress_svt', JSON.stringify(progressData));
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
    const savedAnswered = localStorage.getItem('answeredQuestions_svt');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }
    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));
    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_svt');
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
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions de SVT&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
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
    localStorage.setItem('quizProgress_svt', JSON.stringify(progressData));
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
        localStorage.setItem('answeredQuestions_svt', JSON.stringify(answeredQuestions));
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
    localStorage.setItem('quizProgress_svt', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');
    let statsHTML = `
        <h3>📊 Statistiques détaillées - SVT</h3>
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
