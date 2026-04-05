const concepts = {
    "comparaison": {
        title: "📊 Les degrés de comparaison",
        content: `
            <h4>Comment comparer en français ?</h4>
            <p>On utilise trois degrés de comparaison pour comparer deux éléments :</p>
            <ul>
                <li><strong>Comparatif de supériorité :</strong> plus + adjectif + que</li>
                <li><strong>Comparatif d'égalité :</strong> aussi + adjectif + que</li>
                <li><strong>Comparatif d'infériorité :</strong> moins + adjectif + que</li>
            </ul>
            <div class="example">
                <strong>Exemples :</strong><br>
                Marie est <strong>plus grande que</strong> Paul. (supériorité)<br>
                Léo est <strong>aussi rapide que</strong> Théo. (égalité)<br>
                Ce livre est <strong>moins intéressant que</strong> l'autre. (infériorité)
            </div>
        `
    },
    "superlatifs": {
        title: "🏆 Les superlatifs",
        content: `
            <h4>Qu'est-ce qu'un superlatif ?</h4>
            <p>Le superlatif exprime le degré le plus élevé ou le plus bas d'une qualité par rapport à un ensemble.</p>
            <ul>
                <li><strong>Superlatif de supériorité :</strong> le/la/les plus + adjectif</li>
                <li><strong>Superlatif d'infériorité :</strong> le/la/les moins + adjectif</li>
                <li><strong>Attention :</strong> « bon » → « le meilleur » (irrégulier), « mauvais » → « le pire »</li>
            </ul>
            <div class="example">
                <strong>Exemples :</strong><br>
                C'est <strong>la plus belle</strong> fleur du jardin.<br>
                C'est <strong>le moins cher</strong> des magasins.<br>
                C'est <strong>le meilleur</strong> élève de la classe. (pas « le plus bon »)
            </div>
        `
    },
    "determinants": {
        title: "📝 Les déterminants",
        content: `
            <h4>Les différents types de déterminants</h4>
            <p>Un déterminant est un mot placé devant le nom pour le préciser. Il existe plusieurs types :</p>
            <ul>
                <li><strong>Articles définis :</strong> le, la, l', les (on sait de quoi on parle)</li>
                <li><strong>Articles indéfinis :</strong> un, une, des (on ne précise pas lequel)</li>
                <li><strong>Articles partitifs :</strong> du, de la, de l' (une quantité indéterminée)</li>
            </ul>
            <div class="example">
                <strong>Exemples :</strong><br>
                <strong>Le</strong> chat dort. (article défini — on sait quel chat)<br>
                <strong>Un</strong> chat dort. (article indéfini — n'importe quel chat)<br>
                Je mange <strong>du</strong> pain. (article partitif — une certaine quantité)
            </div>
        `
    },
    "adjectifs_demonstratifs": {
        title: "👉 Les adjectifs démonstratifs",
        content: `
            <h4>Montrer, désigner : ce, cet, cette, ces</h4>
            <p>L'adjectif démonstratif sert à <strong>montrer</strong> ou <strong>désigner</strong> quelque chose.</p>
            <ul>
                <li><strong>Ce</strong> → masculin singulier devant une consonne (ce livre)</li>
                <li><strong>Cet</strong> → masculin singulier devant une voyelle ou un h muet (cet arbre, cet homme)</li>
                <li><strong>Cette</strong> → féminin singulier (cette maison)</li>
                <li><strong>Ces</strong> → pluriel masculin ou féminin (ces enfants, ces fleurs)</li>
            </ul>
            <div class="example">
                <strong>Exemples :</strong><br>
                <strong>Ce</strong> garçon est gentil.<br>
                <strong>Cet</strong> animal est magnifique.<br>
                <strong>Cette</strong> fille est ma sœur.<br>
                <strong>Ces</strong> livres sont passionnants.
            </div>
        `
    },
    "adjectifs_possessifs": {
        title: "👤 Les adjectifs possessifs",
        content: `
            <h4>Exprimer la possession : mon, ton, son...</h4>
            <p>L'adjectif possessif indique à qui appartient quelque chose.</p>
            <ul>
                <li><strong>1re personne :</strong> mon/ma/mes (je), notre/nos (nous)</li>
                <li><strong>2e personne :</strong> ton/ta/tes (tu), votre/vos (vous)</li>
                <li><strong>3e personne :</strong> son/sa/ses (il/elle), leur/leurs (ils/elles)</li>
                <li><strong>Attention :</strong> devant un nom féminin commençant par une voyelle, on utilise mon/ton/son au lieu de ma/ta/sa → <em>mon amie</em> (pas « ma amie »)</li>
            </ul>
            <div class="example">
                <strong>Exemples :</strong><br>
                <strong>Mon</strong> frère joue au foot. (1re personne, masculin singulier)<br>
                <strong>Ses</strong> chaussures sont neuves. (3e personne, pluriel)<br>
                <strong>Notre</strong> classe est grande. (1re personne du pluriel)
            </div>
        `
    },
    "expansion_nom": {
        title: "📚 L'expansion du nom et les groupes nominaux",
        content: `
            <h4>Comment enrichir un nom ?</h4>
            <p>Un <strong>groupe nominal</strong> (GN) est composé d'un déterminant + un nom, souvent enrichi par des expansions :</p>
            <ul>
                <li><strong>L'adjectif épithète :</strong> placé directement à côté du nom → <em>un <strong>grand</strong> jardin</em></li>
                <li><strong>Le complément du nom :</strong> introduit par une préposition (de, à, en...) → <em>un jardin <strong>de roses</strong></em></li>
                <li><strong>La proposition subordonnée relative :</strong> introduite par qui, que, dont, où → <em>le jardin <strong>qui est fleuri</strong></em></li>
            </ul>
            <div class="example">
                <strong>Exemples de groupes nominaux enrichis :</strong><br>
                <strong>Le petit chat noir</strong> (déterminant + adjectif + nom + adjectif)<br>
                <strong>La robe de ma sœur</strong> (déterminant + nom + complément du nom)<br>
                <strong>L'élève qui travaille bien</strong> (déterminant + nom + proposition relative)
            </div>
        `
    },
    "unites_comparaison": {
        title: "⚖️ Les unités de comparaison (quantités)",
        content: `
            <h4>Comparer des quantités</h4>
            <p>On peut aussi comparer des <strong>quantités</strong> (noms) ou des <strong>actions</strong> (verbes) :</p>
            <ul>
                <li><strong>Plus de... que :</strong> supériorité en quantité → <em>Il a plus de livres que moi.</em></li>
                <li><strong>Moins de... que :</strong> infériorité en quantité → <em>Elle a moins de bonbons que lui.</em></li>
                <li><strong>Autant de... que :</strong> égalité en quantité → <em>J'ai autant de crayons que toi.</em></li>
            </ul>
            <p>Avec un <strong>verbe</strong>, on utilise <strong>plus que, moins que, autant que</strong> (sans « de ») :</p>
            <div class="example">
                <strong>Exemples :</strong><br>
                Il mange <strong>plus que</strong> son frère. (verbe)<br>
                Elle travaille <strong>autant que</strong> lui. (verbe)<br>
                Il a <strong>plus de</strong> courage <strong>que</strong> les autres. (nom)
            </div>
        `
    }
};

const questions = [
    // COMPARAISON (5 questions)
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Complète : Marie est ___ grande que Paul.",
        options: ["plus", "autant", "la plus", "meilleure"],
        correct: 0,
        explanation: "On utilise « plus...que » pour le comparatif de supériorité. Marie est plus grande que Paul."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Quel est le type de comparaison dans : « Léo court aussi vite que Théo » ?",
        options: ["Comparatif de supériorité", "Comparatif d'égalité", "Comparatif d'infériorité", "Superlatif"],
        correct: 1,
        explanation: "« Aussi...que » exprime le comparatif d'égalité : les deux éléments sont au même niveau."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Complète : Ce film est ___ intéressant que le précédent.",
        options: ["aussi", "moins", "le plus", "Les trois réponses sont possibles"],
        correct: 3,
        explanation: "On peut dire « aussi intéressant que » (égalité), « moins intéressant que » (infériorité) ou reformuler. Les trois formes comparatives sont valides ici."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Quel mot utilise-t-on pour un comparatif d'infériorité ?",
        options: ["plus", "aussi", "moins", "le plus"],
        correct: 2,
        explanation: "Le comparatif d'infériorité se forme avec « moins...que ». Exemple : Il est moins rapide que son frère."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Quelle phrase contient un comparatif de supériorité ?",
        options: ["Ce gâteau est aussi bon que l'autre.", "Cette robe est moins chère que celle-ci.", "Mon frère est plus âgé que moi.", "C'est le plus beau tableau."],
        correct: 2,
        explanation: "« Plus âgé que » est un comparatif de supériorité. La dernière phrase est un superlatif (le plus beau)."
    },

    // SUPERLATIFS (4 questions)
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Quel est le superlatif de « bon » ?",
        options: ["Le plus bon", "Le meilleur", "Le mieux", "Le plus bien"],
        correct: 1,
        explanation: "« Bon » a un superlatif irrégulier : « le meilleur ». On ne dit jamais « le plus bon »."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Dans « C'est la plus grande tour de la ville », quel est le superlatif ?",
        options: ["C'est", "la plus grande", "tour", "de la ville"],
        correct: 1,
        explanation: "« La plus grande » est le superlatif de supériorité de l'adjectif « grande ». Il indique le degré le plus élevé."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Comment dit-on le superlatif d'infériorité de « rapide » ?",
        options: ["Le plus rapide", "Le moins rapide", "Le meilleur rapide", "Aussi rapide"],
        correct: 1,
        explanation: "Le superlatif d'infériorité se forme avec « le/la/les moins + adjectif ». Ici : « le moins rapide »."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Quelle phrase contient un superlatif ?",
        options: ["Mon chat est plus gros que le tien.", "C'est le film le plus drôle de l'année.", "Elle est aussi intelligente que lui.", "Il court moins vite que Paul."],
        correct: 1,
        explanation: "« Le plus drôle de l'année » est un superlatif de supériorité. Les autres phrases contiennent des comparatifs."
    },

    // DÉTERMINANTS (5 questions)
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Dans « Le chien mange de la viande », quels sont les déterminants ?",
        options: ["Le, la", "Le, de la", "de, la", "Le, de"],
        correct: 1,
        explanation: "« Le » est un article défini et « de la » est un article partitif (quantité indéterminée de viande)."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Quel type de déterminant est « des » dans « Je vois des oiseaux » ?",
        options: ["Article défini", "Article indéfini", "Article partitif", "Adjectif démonstratif"],
        correct: 1,
        explanation: "« Des » est ici un article indéfini (pluriel de « un/une »). On ne sait pas lesquels précisément."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Quel article utilise-t-on dans « Je bois ___ lait » ?",
        options: ["le", "un", "du", "des"],
        correct: 2,
        explanation: "On utilise l'article partitif « du » (= de le) car on parle d'une quantité indéterminée de lait."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Dans « L'école est fermée », « l' » est :",
        options: ["Un article indéfini", "Un article défini élidé", "Un article partitif", "Un adjectif possessif"],
        correct: 1,
        explanation: "« L' » est la forme élidée de l'article défini « la » devant un mot commençant par une voyelle."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Quelle phrase contient un article partitif ?",
        options: ["Le chat dort.", "Un oiseau chante.", "Elle mange de la soupe.", "Les enfants jouent."],
        correct: 2,
        explanation: "« De la » est un article partitif. Il indique une quantité indéterminée de soupe."
    },

    // ADJECTIFS DÉMONSTRATIFS (4 questions)
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Complète : ___ arbre est très grand.",
        options: ["Ce", "Cet", "Cette", "Ces"],
        correct: 1,
        explanation: "On utilise « cet » devant un nom masculin singulier commençant par une voyelle. « Arbre » commence par « a »."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Dans « cette maison est belle », quel est l'adjectif démonstratif ?",
        options: ["maison", "est", "cette", "belle"],
        correct: 2,
        explanation: "« Cette » est l'adjectif démonstratif féminin singulier. Il désigne précisément cette maison-là."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Quand utilise-t-on « cet » au lieu de « ce » ?",
        options: ["Devant un nom féminin", "Devant un nom pluriel", "Devant un nom masculin commençant par une voyelle ou un h muet", "Devant un nom propre"],
        correct: 2,
        explanation: "On utilise « cet » devant un nom masculin singulier commençant par une voyelle ou un h muet : cet arbre, cet homme."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Complète : ___ fleurs sont magnifiques.",
        options: ["Ce", "Cet", "Cette", "Ces"],
        correct: 3,
        explanation: "On utilise « ces » devant un nom pluriel, qu'il soit masculin ou féminin. « Fleurs » est féminin pluriel."
    },

    // ADJECTIFS POSSESSIFS (4 questions)
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Complète : ___ chien est adorable. (le chien de Marie)",
        options: ["Mon", "Ton", "Son", "Leur"],
        correct: 2,
        explanation: "Le chien appartient à Marie (3e personne du singulier), donc on utilise « son » (masculin singulier)."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Pourquoi dit-on « mon amie » et pas « ma amie » ?",
        options: ["Parce que « amie » est masculin", "Pour éviter le hiatus (deux voyelles qui se suivent)", "Parce que c'est une règle d'exception sans raison", "Parce que « mon » est toujours utilisé"],
        correct: 1,
        explanation: "Devant un nom féminin commençant par une voyelle ou un h muet, on utilise mon/ton/son au lieu de ma/ta/sa pour éviter le hiatus."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Complète : Les enfants rangent ___ affaires. (les affaires des enfants)",
        options: ["ses", "notre", "leurs", "vos"],
        correct: 2,
        explanation: "Les affaires appartiennent aux enfants (3e personne du pluriel) → « leurs » (pluriel de « leur »)."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Dans « Notre professeur est absent », quel est l'adjectif possessif ?",
        options: ["professeur", "est", "Notre", "absent"],
        correct: 2,
        explanation: "« Notre » est l'adjectif possessif de la 1re personne du pluriel. Il indique que le professeur est celui de « nous »."
    },

    // EXPANSION DU NOM / GROUPES NOMINAUX (4 questions)
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Dans « le chat de ma voisine », quelle est l'expansion du nom ?",
        options: ["le chat", "de", "ma voisine", "de ma voisine"],
        correct: 3,
        explanation: "« De ma voisine » est un complément du nom. Il précise à qui appartient le chat. C'est une expansion du nom « chat »."
    },
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Quel type d'expansion du nom est « rouge » dans « une robe rouge » ?",
        options: ["Complément du nom", "Adjectif épithète", "Proposition subordonnée relative", "Adverbe"],
        correct: 1,
        explanation: "« Rouge » est un adjectif épithète : il est placé directement à côté du nom « robe » sans préposition."
    },
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Quel groupe nominal contient une proposition subordonnée relative ?",
        options: ["Le petit chien", "La maison de Pierre", "L'enfant qui pleure", "Un beau livre ancien"],
        correct: 2,
        explanation: "« Qui pleure » est une proposition subordonnée relative introduite par le pronom relatif « qui ». Elle complète le nom « enfant »."
    },
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Dans « un joli petit jardin fleuri », combien y a-t-il d'adjectifs épithètes ?",
        options: ["1", "2", "3", "4"],
        correct: 2,
        explanation: "Il y a 3 adjectifs épithètes : « joli », « petit » et « fleuri ». Ils qualifient tous le nom « jardin » directement."
    },

    // COMPARAISON (4 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Quel est le comparatif irrégulier de l'adjectif « bon » ?",
        options: ["Plus bon", "Meilleur", "Mieux", "Le meilleur"],
        correct: 1,
        explanation: "Le comparatif de « bon » est « meilleur » (et non « plus bon »). « Le meilleur » est le superlatif et « mieux » est le comparatif de l'adverbe « bien »."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Complète avec un comparatif d'égalité : Il parle ___ couramment ___ sa sœur.",
        options: ["plus... que", "aussi... que", "moins... que", "le plus... que"],
        correct: 1,
        explanation: "Le comparatif d'égalité avec un adverbe se forme avec « aussi + adverbe + que » : il parle aussi couramment que sa sœur."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Dans « Cette valise est plus lourde que l'autre », quel est le mot comparé ?",
        options: ["valise", "lourde", "autre", "plus"],
        correct: 1,
        explanation: "C'est l'adjectif « lourde » qui est comparé. « Plus... que » encadre l'adjectif pour former le comparatif de supériorité."
    },
    {
        category: "📖 Grammaire",
        concept: "comparaison",
        question: "Quel est le comparatif de l'adverbe « bien » ?",
        options: ["Plus bien", "Meilleur", "Mieux", "Le mieux"],
        correct: 2,
        explanation: "Le comparatif de « bien » est « mieux » (et non « plus bien »). « Le mieux » est le superlatif et « meilleur » est le comparatif de « bon »."
    },

    // SUPERLATIFS (4 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Quel est le superlatif de « mauvais » ?",
        options: ["Le plus mauvais", "Le pire", "Le moindre", "Les deux premières réponses sont acceptées"],
        correct: 3,
        explanation: "On peut dire « le pire » (forme irrégulière) ou « le plus mauvais » (forme régulière). Les deux sont correctes en français."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Quelle est la différence entre un comparatif et un superlatif ?",
        options: ["Le comparatif compare deux éléments, le superlatif désigne le degré extrême dans un ensemble", "Ce sont des synonymes", "Le superlatif compare deux éléments, le comparatif désigne le degré extrême", "Le comparatif utilise toujours « le plus »"],
        correct: 0,
        explanation: "Le comparatif compare deux éléments (plus grand que), tandis que le superlatif exprime le degré extrême dans un groupe (le plus grand de la classe)."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Complète : C'est ___ chanteuse ___ célèbre du pays.",
        options: ["la plus... la plus", "la... la plus", "la plus... —", "une... plus"],
        correct: 1,
        explanation: "On dit « C'est la chanteuse la plus célèbre du pays ». L'article « la » accompagne le nom, et « la plus » forme le superlatif avec l'adjectif."
    },
    {
        category: "📖 Grammaire",
        concept: "superlatifs",
        question: "Dans « C'est le meilleur joueur de l'équipe », pourquoi ne dit-on pas « le plus bon » ?",
        options: ["Parce que « bon » est un adverbe", "Parce que « bon » a un superlatif irrégulier : « le meilleur »", "Parce que « le plus bon » est un comparatif", "Parce que « bon » ne peut pas être au superlatif"],
        correct: 1,
        explanation: "L'adjectif « bon » a des formes irrégulières : comparatif → meilleur, superlatif → le meilleur. On ne dit jamais « le plus bon »."
    },

    // DÉTERMINANTS (4 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Quelle est la contraction de « de + le » ?",
        options: ["de le", "du", "del", "de l'"],
        correct: 1,
        explanation: "« De + le » se contracte en « du ». Exemple : Je viens du marché (= de le marché). « De l' » s'utilise devant une voyelle."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Quelle est la contraction de « à + les » ?",
        options: ["à les", "ales", "aux", "au"],
        correct: 2,
        explanation: "« À + les » se contracte en « aux ». Exemple : Je parle aux enfants (= à les enfants). « Au » est la contraction de « à + le »."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Dans « Je ne mange pas de pain », pourquoi utilise-t-on « de » et pas « du » ?",
        options: ["Parce que « pain » est féminin", "Parce qu'après une négation, l'article partitif devient « de »", "Parce que « de » est un article défini", "Parce que c'est un complément du nom"],
        correct: 1,
        explanation: "Après une négation (ne...pas), les articles partitifs (du, de la, des) deviennent « de » ou « d' ». Je mange du pain → Je ne mange pas de pain."
    },
    {
        category: "📖 Grammaire",
        concept: "determinants",
        question: "Dans « Les élèves de la classe lisent des livres », combien y a-t-il de déterminants ?",
        options: ["2", "3", "4", "5"],
        correct: 1,
        explanation: "Il y a 3 déterminants : « Les » (article défini), « la » (article défini) et « des » (article indéfini). « De » est ici une préposition, pas un déterminant."
    },

    // ADJECTIFS DÉMONSTRATIFS (3 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Complète : ___ homme est très courageux.",
        options: ["Ce", "Cet", "Cette", "Ces"],
        correct: 1,
        explanation: "On utilise « cet » devant un nom masculin singulier commençant par un h muet. « Homme » commence par un h muet."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Complète : Regarde ___ étoile dans le ciel !",
        options: ["ce", "cet", "cette", "ces"],
        correct: 2,
        explanation: "« Étoile » est un nom féminin singulier, on utilise donc « cette ». Attention : « cet » est réservé au masculin devant voyelle ou h muet."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_demonstratifs",
        question: "Quel adjectif démonstratif complète : « ___ exercices sont difficiles » ?",
        options: ["Ce", "Cet", "Cette", "Ces"],
        correct: 3,
        explanation: "« Exercices » est un nom masculin pluriel. On utilise « ces » pour tous les noms au pluriel, qu'ils soient masculins ou féminins."
    },

    // ADJECTIFS POSSESSIFS (3 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Complète : ___ école est près de chez moi. (l'école où je vais)",
        options: ["Ma", "Mon", "Sa", "Leur"],
        correct: 1,
        explanation: "Bien que « école » soit féminin, on utilise « mon » car le mot commence par une voyelle. On dit « mon école » et non « ma école » pour éviter le hiatus."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Complète : Paul et Léa rangent ___ chambre. (la chambre de Paul et Léa)",
        options: ["sa", "son", "leur", "leurs"],
        correct: 2,
        explanation: "La chambre appartient à Paul et Léa (3e personne du pluriel). Comme il n'y a qu'une seule chambre, on utilise « leur » (sans s) : leur chambre."
    },
    {
        category: "📖 Grammaire",
        concept: "adjectifs_possessifs",
        question: "Quelle phrase contient une erreur dans l'adjectif possessif ?",
        options: ["Mon amie est gentille.", "Ma histoire préférée.", "Ton idée est bonne.", "Son écharpe est rouge."],
        correct: 1,
        explanation: "On doit dire « Mon histoire préférée » et non « Ma histoire » car « histoire » commence par un h muet (voyelle). On utilise « mon » pour éviter le hiatus."
    },

    // EXPANSION DU NOM (3 questions supplémentaires)
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Dans « la ville où je suis né », quel mot introduit la proposition subordonnée relative ?",
        options: ["la", "ville", "où", "je"],
        correct: 2,
        explanation: "« Où » est un pronom relatif qui introduit la proposition subordonnée relative « où je suis né ». Il complète le nom « ville »."
    },
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Dans « une tasse de chocolat chaud », quelle est l'expansion du nom « tasse » ?",
        options: ["une", "de chocolat chaud", "chocolat", "chaud"],
        correct: 1,
        explanation: "« De chocolat chaud » est le complément du nom « tasse ». Il est introduit par la préposition « de » et précise le contenu de la tasse."
    },
    {
        category: "📖 Grammaire",
        concept: "expansion_nom",
        question: "Quel type d'expansion du nom trouve-t-on dans « le livre que j'ai lu » ?",
        options: ["Adjectif épithète", "Complément du nom", "Proposition subordonnée relative", "Adverbe"],
        correct: 2,
        explanation: "« Que j'ai lu » est une proposition subordonnée relative introduite par le pronom relatif « que ». Elle complète le nom « livre »."
    },

    // UNITÉS DE COMPARAISON (3 questions)
    {
        category: "📖 Grammaire",
        concept: "unites_comparaison",
        question: "Complète : Julie a ___ amis ___ Thomas.",
        options: ["autant d'... que", "aussi... que", "autant... que", "plus... que"],
        correct: 0,
        explanation: "Pour comparer des quantités (noms), on utilise « autant de... que ». Comme « amis » commence par une voyelle, « de » devient « d' » : autant d'amis que."
    },
    {
        category: "📖 Grammaire",
        concept: "unites_comparaison",
        question: "Quelle phrase compare correctement une quantité ?",
        options: ["Il est plus courageux que toi.", "Elle a plus de patience que lui.", "Ce film est aussi long que l'autre.", "C'est le moins cher de tous."],
        correct: 1,
        explanation: "« Plus de patience que » compare une quantité (le nom « patience ») avec « plus de... que ». Les autres phrases comparent des adjectifs ou utilisent un superlatif."
    },
    {
        category: "📖 Grammaire",
        concept: "unites_comparaison",
        question: "Pour comparer une action (verbe), on dit : « Il travaille ___ que moi. »",
        options: ["autant de", "plus de", "autant", "aussi"],
        correct: 2,
        explanation: "Avec un verbe, on utilise « autant que » (sans « de »). « Il travaille autant que moi. » Avec un nom, on dirait « autant de travail que moi »."
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
    const saved = localStorage.getItem('quizProgress_francais_grammaire');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }

    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('quizProgress_francais_grammaire', JSON.stringify(progressData));
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
    const savedAnswered = localStorage.getItem('answeredQuestions_francais_grammaire');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }

    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));

    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_francais_grammaire');
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
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions de français&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
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

    localStorage.setItem('quizProgress_francais_grammaire', JSON.stringify(progressData));
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
        localStorage.setItem('answeredQuestions_francais_grammaire', JSON.stringify(answeredQuestions));
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

    displayDetailedStats();

    progressData.lastCompleted = new Date().toISOString();
    localStorage.setItem('quizProgress_francais_grammaire', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');

    let statsHTML = `
        <h3>📊 Statistiques détaillées - Grammaire Française</h3>
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

function continueFromConcept() {
    showQuestion();
}