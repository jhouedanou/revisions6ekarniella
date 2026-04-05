const concepts = {
    "sources_information": {
        title: "📜 Les sources d'information en histoire",
        content: `
            <h4>Qu'est-ce qu'une source historique ?</h4>
            <p>Une source historique est un document ou un objet qui nous renseigne sur le passé. On distingue plusieurs types :</p>
            <ul>
                <li><strong>Sources écrites :</strong> livres, journaux, lettres, traités, lois</li>
                <li><strong>Sources orales :</strong> témoignages, récits transmis de bouche à oreille, interviews</li>
                <li><strong>Sources matérielles :</strong> objets, monuments, vestiges archéologiques, outils</li>
                <li><strong>Sources iconographiques :</strong> photographies, peintures, cartes, gravures</li>
            </ul>
            <h4>Sources primaires et secondaires</h4>
            <ul>
                <li><strong>Source primaire :</strong> document créé à l'époque des événements (une lettre de soldat, une poterie antique)</li>
                <li><strong>Source secondaire :</strong> document créé après les événements pour les analyser (un manuel d'histoire, un documentaire)</li>
            </ul>
            <div class="example">
                <strong>Exemple :</strong> Une lettre écrite par un soldat pendant la Première Guerre mondiale est une <strong>source primaire écrite</strong>.<br>
                Un livre d'histoire publié en 2020 sur la Première Guerre mondiale est une <strong>source secondaire</strong>.
            </div>
        `
    },
    "dignite_humaine": {
        title: "✊ La dignité humaine en temps de guerre",
        content: `
            <h4>Qu'est-ce que la dignité humaine ?</h4>
            <p>La dignité humaine, c'est le respect fondamental dû à chaque être humain, quelles que soient les circonstances, même en temps de guerre.</p>
            <h4>Les Conventions de Genève</h4>
            <p>Les Conventions de Genève sont des traités internationaux qui protègent les personnes en temps de guerre :</p>
            <ul>
                <li><strong>Protection des civils :</strong> les populations civiles ne doivent pas être attaquées</li>
                <li><strong>Protection des prisonniers de guerre :</strong> ils doivent être traités avec humanité</li>
                <li><strong>Protection des blessés et malades :</strong> ils doivent recevoir des soins</li>
            </ul>
            <h4>Le rôle de la Croix-Rouge</h4>
            <p>La Croix-Rouge est une organisation humanitaire fondée par <strong>Henry Dunant</strong> en 1863. Elle veille au respect des Conventions de Genève et porte secours aux victimes de guerre.</p>
            <div class="example">
                <strong>Exemple :</strong> Même pendant un conflit armé, il est interdit de maltraiter les prisonniers de guerre. La Croix-Rouge peut visiter les camps de prisonniers pour vérifier que leurs droits sont respectés.
            </div>
        `
    },
    "chronologie": {
        title: "⏳ La notion de chronologie",
        content: `
            <h4>Qu'est-ce que la chronologie ?</h4>
            <p>La chronologie est l'ordre dans lequel les événements se sont déroulés dans le temps.</p>
            <h4>Les repères temporels</h4>
            <ul>
                <li><strong>Avant/après J.-C. :</strong> J.-C. signifie Jésus-Christ. Les dates avant sa naissance sont comptées en « avant J.-C. », celles après en « après J.-C. »</li>
                <li><strong>Un siècle :</strong> 100 ans. Pour trouver le siècle, on ajoute 1 au chiffre des centaines (ex : 1492 → 14+1 = XVe siècle)</li>
                <li><strong>Un millénaire :</strong> 1 000 ans</li>
            </ul>
            <h4>La frise chronologique</h4>
            <p>C'est un outil qui représente le temps sur une ligne. Les événements sont placés dans l'ordre chronologique, du plus ancien au plus récent.</p>
            <div class="example">
                <strong>Exemple :</strong> L'année 1789 appartient au XVIIIe siècle (17 + 1 = 18).<br>
                L'année 800 appartient au IXe siècle (8 + 1 = 9).<br>
                L'année 2000 appartient au XXe siècle (19 + 1 = 20).
            </div>
        `
    },
    "grandes_periodes": {
        title: "🏛️ Les grandes périodes de l'histoire",
        content: `
            <h4>Les 5 grandes périodes</h4>
            <p>L'histoire est découpée en grandes périodes, séparées par des événements marquants :</p>
            <ul>
                <li><strong>La Préhistoire :</strong> avant −3 300 (invention de l'écriture)</li>
                <li><strong>L'Antiquité :</strong> de −3 300 à 476 (chute de l'Empire romain d'Occident)</li>
                <li><strong>Le Moyen Âge :</strong> de 476 à 1492 (découverte de l'Amérique par Christophe Colomb)</li>
                <li><strong>Les Temps modernes :</strong> de 1492 à 1789 (Révolution française)</li>
                <li><strong>L'Époque contemporaine :</strong> de 1789 à nos jours</li>
            </ul>
            <div class="example">
                <strong>Dates clés à retenir :</strong><br>
                −3 300 : invention de l'écriture (fin de la Préhistoire)<br>
                476 : chute de Rome (fin de l'Antiquité)<br>
                1492 : découverte de l'Amérique (fin du Moyen Âge)<br>
                1789 : Révolution française (fin des Temps modernes)
            </div>
        `
    }
};

const questions = [
    // SOURCES D'INFORMATION (6 questions)
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Quel type de source est une lettre écrite par un soldat pendant la guerre ?",
        options: ["Source orale", "Source matérielle", "Source écrite primaire", "Source secondaire"],
        correct: 2,
        explanation: "Une lettre de soldat est une source écrite (c'est un texte) et primaire (elle a été créée au moment des événements)."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Qu'est-ce qu'une source primaire ?",
        options: ["Un document créé bien après les événements", "Un document créé à l'époque des événements", "Un manuel scolaire", "Un documentaire télévisé"],
        correct: 1,
        explanation: "Une source primaire est un document ou objet créé à l'époque des événements qu'il décrit."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Un vase trouvé lors de fouilles archéologiques est une source :",
        options: ["Écrite", "Orale", "Matérielle", "Iconographique"],
        correct: 2,
        explanation: "Un vase est un objet, donc c'est une source matérielle. Les sources matérielles sont des objets physiques du passé."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Un manuel d'histoire publié en 2024 est :",
        options: ["Une source primaire", "Une source secondaire", "Une source orale", "Une source matérielle"],
        correct: 1,
        explanation: "Un manuel d'histoire est une source secondaire : il a été écrit après les événements pour les analyser et les expliquer."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Une photographie prise en 1914 est une source :",
        options: ["Écrite", "Orale", "Matérielle", "Iconographique primaire"],
        correct: 3,
        explanation: "Une photographie est une source iconographique (image). Prise en 1914, elle est primaire car créée à l'époque des événements."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Le témoignage oral d'un ancien combattant est une source :",
        options: ["Écrite", "Orale", "Matérielle", "Iconographique"],
        correct: 1,
        explanation: "Un témoignage transmis par la parole est une source orale. C'est aussi une source primaire si le témoin a vécu les événements."
    },

    // DIGNITÉ HUMAINE (6 questions)
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Que protègent les Conventions de Genève ?",
        options: ["Le commerce international", "Les personnes en temps de guerre", "Les frontières des pays", "Les monuments historiques"],
        correct: 1,
        explanation: "Les Conventions de Genève protègent les personnes en temps de guerre : civils, prisonniers, blessés et malades."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Qui a fondé la Croix-Rouge ?",
        options: ["Napoléon Bonaparte", "Henry Dunant", "Louis Pasteur", "Victor Hugo"],
        correct: 1,
        explanation: "Henry Dunant a fondé la Croix-Rouge en 1863, après avoir été témoin des horreurs de la bataille de Solférino (1859)."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Selon les Conventions de Genève, comment doit-on traiter les prisonniers de guerre ?",
        options: ["On peut les maltraiter", "Avec humanité et respect", "On peut les utiliser comme esclaves", "On peut les ignorer"],
        correct: 1,
        explanation: "Les prisonniers de guerre doivent être traités avec humanité. La torture et les mauvais traitements sont interdits."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "La dignité humaine signifie :",
        options: ["Le droit d'être riche", "Le respect fondamental dû à chaque être humain", "Le droit de faire la guerre", "La liberté de voyager"],
        correct: 1,
        explanation: "La dignité humaine est le respect fondamental dû à chaque personne, quelles que soient les circonstances."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Quel est le rôle principal de la Croix-Rouge en temps de guerre ?",
        options: ["Fabriquer des armes", "Porter secours aux victimes et veiller au respect du droit humanitaire", "Diriger les armées", "Construire des routes"],
        correct: 1,
        explanation: "La Croix-Rouge porte secours aux victimes de guerre et veille au respect des Conventions de Genève."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Est-il permis d'attaquer les populations civiles pendant une guerre ?",
        options: ["Oui, c'est normal en guerre", "Non, c'est interdit par les Conventions de Genève", "Oui, si on est en train de perdre", "Cela dépend du pays"],
        correct: 1,
        explanation: "Les Conventions de Genève interdisent formellement les attaques contre les populations civiles."
    },

    // CHRONOLOGIE (7 questions)
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "À quel siècle correspond l'année 1492 ?",
        options: ["XIVe siècle", "XVe siècle", "XVIe siècle", "XIIIe siècle"],
        correct: 1,
        explanation: "Pour trouver le siècle, on prend le chiffre des centaines et on ajoute 1 : 14 + 1 = 15, donc le XVe siècle."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Combien d'années y a-t-il dans un siècle ?",
        options: ["10 ans", "100 ans", "1 000 ans", "50 ans"],
        correct: 1,
        explanation: "Un siècle = 100 ans. Par exemple, le XXe siècle va de 1901 à 2000."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Combien d'années y a-t-il dans un millénaire ?",
        options: ["100 ans", "500 ans", "1 000 ans", "10 000 ans"],
        correct: 2,
        explanation: "Un millénaire = 1 000 ans = 10 siècles."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "L'année 800 appartient à quel siècle ?",
        options: ["VIIe siècle", "VIIIe siècle", "IXe siècle", "Xe siècle"],
        correct: 2,
        explanation: "800 → 8 + 1 = 9, donc le IXe siècle. C'est l'année du couronnement de Charlemagne."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Que signifie « avant J.-C. » ?",
        options: ["Avant Jérusalem-Constantinople", "Avant Jésus-Christ", "Avant Jules César", "Avant le Journal Chronologique"],
        correct: 1,
        explanation: "J.-C. signifie Jésus-Christ. Les dates « avant J.-C. » se situent avant sa naissance, qui sert de repère dans notre calendrier."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Qu'est-ce qu'une frise chronologique ?",
        options: ["Un tableau de chiffres", "Une ligne représentant le temps avec des événements placés dans l'ordre", "Une carte géographique", "Un graphique de statistiques"],
        correct: 1,
        explanation: "Une frise chronologique est une ligne graduée sur laquelle on place les événements dans l'ordre du temps."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "L'année 2000 appartient à quel siècle ?",
        options: ["XIXe siècle", "XXe siècle", "XXIe siècle", "XVIIIe siècle"],
        correct: 1,
        explanation: "2000 → 19 + 1 = 20, donc le XXe siècle. Le XXIe siècle commence en 2001."
    },

    // GRANDES PÉRIODES (7 questions)
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Quel événement marque la fin du Moyen Âge ?",
        options: ["La chute de Rome en 476", "La découverte de l'Amérique en 1492", "La Révolution française en 1789", "L'invention de l'écriture"],
        correct: 1,
        explanation: "La découverte de l'Amérique par Christophe Colomb en 1492 marque la fin du Moyen Âge et le début des Temps modernes."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Quel événement marque le début de l'Antiquité ?",
        options: ["La chute de Rome", "La Révolution française", "L'invention de l'écriture vers −3 300", "La découverte de l'Amérique"],
        correct: 2,
        explanation: "L'Antiquité commence avec l'invention de l'écriture vers −3 300, qui marque aussi la fin de la Préhistoire."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Combien y a-t-il de grandes périodes dans l'histoire ?",
        options: ["3", "4", "5", "6"],
        correct: 2,
        explanation: "Il y a 5 grandes périodes : la Préhistoire, l'Antiquité, le Moyen Âge, les Temps modernes et l'Époque contemporaine."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Quel événement marque le début de l'Époque contemporaine ?",
        options: ["La chute de Rome en 476", "La découverte de l'Amérique en 1492", "La Révolution française en 1789", "La Première Guerre mondiale en 1914"],
        correct: 2,
        explanation: "La Révolution française de 1789 marque le début de l'Époque contemporaine, la période dans laquelle nous vivons."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "La chute de l'Empire romain d'Occident en 476 marque :",
        options: ["La fin de la Préhistoire", "La fin de l'Antiquité", "La fin du Moyen Âge", "La fin des Temps modernes"],
        correct: 1,
        explanation: "La chute de l'Empire romain d'Occident en 476 marque la fin de l'Antiquité et le début du Moyen Âge."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Quelle est la période la plus longue de l'histoire humaine ?",
        options: ["L'Antiquité", "Le Moyen Âge", "La Préhistoire", "L'Époque contemporaine"],
        correct: 2,
        explanation: "La Préhistoire est de loin la plus longue période : elle dure plusieurs millions d'années, jusqu'à l'invention de l'écriture vers −3 300."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Dans quelle grande période se situe le règne de Louis XIV ?",
        options: ["Le Moyen Âge", "L'Antiquité", "Les Temps modernes", "L'Époque contemporaine"],
        correct: 2,
        explanation: "Louis XIV a régné de 1643 à 1715. Cette période se situe dans les Temps modernes (1492-1789)."
    },

    // SOURCES D'INFORMATION – questions supplémentaires
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Une peinture rupestre trouvée dans une grotte est une source :",
        options: ["Écrite", "Orale", "Iconographique", "Secondaire"],
        correct: 2,
        explanation: "Une peinture rupestre est une image réalisée à l'époque préhistorique : c'est une source iconographique primaire."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Pourquoi est-il important de croiser plusieurs sources historiques ?",
        options: ["Pour rendre le travail plus long", "Pour vérifier la fiabilité des informations", "Pour impressionner le professeur", "Parce que c'est obligatoire par la loi"],
        correct: 1,
        explanation: "Croiser les sources permet de vérifier si les informations sont fiables et d'obtenir une vision plus complète des événements."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Un documentaire télévisé sur l'Égypte ancienne est :",
        options: ["Une source primaire", "Une source secondaire", "Une source matérielle", "Une source orale primaire"],
        correct: 1,
        explanation: "Un documentaire est réalisé bien après les événements pour les expliquer : c'est une source secondaire."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Lequel de ces documents est une source écrite primaire ?",
        options: ["Un article de journal publié hier sur la Rome antique", "Un traité de paix signé en 1918", "Un manuel scolaire d'histoire", "Un roman historique écrit en 2020"],
        correct: 1,
        explanation: "Le traité de paix de 1918 a été rédigé au moment des événements : c'est une source écrite primaire. Les autres sont des sources secondaires."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Les ruines d'un château fort sont une source :",
        options: ["Écrite", "Orale", "Matérielle", "Iconographique"],
        correct: 2,
        explanation: "Les ruines d'un château sont des vestiges physiques du passé : c'est une source matérielle."
    },
    {
        category: "🏛️ Histoire",
        concept: "sources_information",
        question: "Qu'est-ce qui peut rendre une source historique peu fiable ?",
        options: ["Elle est très ancienne", "Elle est écrite à la main", "L'auteur a pu mentir ou se tromper", "Elle est conservée dans un musée"],
        correct: 2,
        explanation: "Une source peut être peu fiable si l'auteur a exagéré, menti ou commis des erreurs. C'est pourquoi l'historien doit toujours vérifier et croiser ses sources."
    },

    // DIGNITÉ HUMAINE – questions supplémentaires
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "En quelle année la Croix-Rouge a-t-elle été fondée ?",
        options: ["1789", "1863", "1914", "1945"],
        correct: 1,
        explanation: "La Croix-Rouge a été fondée en 1863 par Henry Dunant, choqué par les souffrances des soldats à la bataille de Solférino."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Quel événement a inspiré Henry Dunant pour créer la Croix-Rouge ?",
        options: ["La Révolution française", "La bataille de Solférino en 1859", "La Première Guerre mondiale", "La chute de l'Empire romain"],
        correct: 1,
        explanation: "En 1859, Henry Dunant est témoin de la bataille de Solférino en Italie, où des milliers de soldats blessés sont laissés sans soins. Cela l'inspire pour fonder la Croix-Rouge."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Selon les Conventions de Genève, que doit-on faire pour les soldats blessés ennemis ?",
        options: ["Les ignorer", "Les faire prisonniers sans soins", "Leur donner des soins médicaux", "Les renvoyer chez eux immédiatement"],
        correct: 2,
        explanation: "Les Conventions de Genève imposent de soigner tous les blessés, qu'ils soient alliés ou ennemis. C'est un principe fondamental du droit humanitaire."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Quel symbole est utilisé par la Croix-Rouge pour signaler sa présence ?",
        options: ["Un drapeau blanc", "Une croix rouge sur fond blanc", "Un cercle bleu", "Une étoile jaune"],
        correct: 1,
        explanation: "Le symbole de la Croix-Rouge est une croix rouge sur fond blanc. Ce symbole doit être respecté par tous les belligérants : il est interdit d'attaquer les personnes et les lieux qui l'arborent."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "La Déclaration universelle des droits de l'homme a été adoptée en :",
        options: ["1789", "1863", "1918", "1948"],
        correct: 3,
        explanation: "La Déclaration universelle des droits de l'homme a été adoptée le 10 décembre 1948 par l'ONU, après les horreurs de la Seconde Guerre mondiale."
    },
    {
        category: "🏛️ Histoire",
        concept: "dignite_humaine",
        question: "Pourquoi la dignité humaine doit-elle être respectée même en temps de guerre ?",
        options: ["Pour gagner la guerre plus vite", "Parce que chaque être humain a une valeur qui ne peut être retirée", "Uniquement pour éviter des sanctions", "Seulement si les deux camps sont d'accord"],
        correct: 1,
        explanation: "La dignité humaine est un droit fondamental : chaque être humain a une valeur inaliénable, quelles que soient les circonstances, même en temps de guerre."
    },

    // CHRONOLOGIE – questions supplémentaires
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "À quel siècle correspond l'année 1789 ?",
        options: ["XVIIe siècle", "XVIIIe siècle", "XIXe siècle", "XVIe siècle"],
        correct: 1,
        explanation: "1789 → 17 + 1 = 18, donc le XVIIIe siècle. C'est l'année de la Révolution française."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "L'année 55 avant J.-C. se situe :",
        options: ["Après la naissance de Jésus-Christ", "Avant la naissance de Jésus-Christ", "Au Moyen Âge", "À l'Époque contemporaine"],
        correct: 1,
        explanation: "« 55 avant J.-C. » signifie 55 ans avant la naissance de Jésus-Christ. C'est pendant l'Antiquité."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Combien de siècles y a-t-il dans un millénaire ?",
        options: ["5 siècles", "10 siècles", "20 siècles", "100 siècles"],
        correct: 1,
        explanation: "Un millénaire = 1 000 ans, et un siècle = 100 ans. Donc 1 000 ÷ 100 = 10 siècles dans un millénaire."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "Sur une frise chronologique, où place-t-on les événements les plus anciens ?",
        options: ["À droite", "En haut", "À gauche", "En bas"],
        correct: 2,
        explanation: "Sur une frise chronologique horizontale, les événements les plus anciens sont à gauche et les plus récents à droite."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "À quel siècle correspond l'année 476 ?",
        options: ["IVe siècle", "Ve siècle", "VIe siècle", "IIIe siècle"],
        correct: 1,
        explanation: "476 → 4 + 1 = 5, donc le Ve siècle. C'est l'année de la chute de l'Empire romain d'Occident."
    },
    {
        category: "🏛️ Histoire",
        concept: "chronologie",
        question: "L'an 1 de notre calendrier correspond à :",
        options: ["La naissance de Jules César", "La fondation de Rome", "La date de référence liée à la naissance de Jésus-Christ", "L'invention de l'écriture"],
        correct: 2,
        explanation: "Notre calendrier prend comme point de référence la naissance de Jésus-Christ. Tout ce qui est avant est « avant J.-C. » et tout ce qui est après est « après J.-C. »."
    },

    // GRANDES PÉRIODES – questions supplémentaires
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Qui a découvert l'Amérique en 1492 ?",
        options: ["Vasco de Gama", "Marco Polo", "Christophe Colomb", "Magellan"],
        correct: 2,
        explanation: "Christophe Colomb a atteint l'Amérique en 1492 en cherchant une route vers les Indes. Cet événement marque la fin du Moyen Âge."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Pendant quelle grande période a-t-on construit les cathédrales gothiques ?",
        options: ["L'Antiquité", "Le Moyen Âge", "Les Temps modernes", "La Préhistoire"],
        correct: 1,
        explanation: "Les grandes cathédrales gothiques (Notre-Dame de Paris, Chartres…) ont été construites au Moyen Âge, entre le XIIe et le XVe siècle."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "L'invention de l'écriture marque :",
        options: ["La fin de l'Antiquité", "Le début du Moyen Âge", "La fin de la Préhistoire et le début de l'Antiquité", "Le début de l'Époque contemporaine"],
        correct: 2,
        explanation: "L'invention de l'écriture vers −3 300 marque la fin de la Préhistoire et le début de l'Antiquité."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Dans quelle grande période se situe la construction des pyramides d'Égypte ?",
        options: ["La Préhistoire", "L'Antiquité", "Le Moyen Âge", "Les Temps modernes"],
        correct: 1,
        explanation: "Les pyramides d'Égypte ont été construites vers −2 500, pendant l'Antiquité."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "Quel personnage célèbre a été couronné empereur en l'an 800 ?",
        options: ["Jules César", "Louis XIV", "Charlemagne", "Napoléon Bonaparte"],
        correct: 2,
        explanation: "Charlemagne a été couronné empereur en l'an 800. Il a régné pendant le Moyen Âge et a créé un vaste empire en Europe."
    },
    {
        category: "🏛️ Histoire",
        concept: "grandes_periodes",
        question: "La Révolution française de 1789 marque le passage entre quelles périodes ?",
        options: ["De la Préhistoire à l'Antiquité", "De l'Antiquité au Moyen Âge", "Du Moyen Âge aux Temps modernes", "Des Temps modernes à l'Époque contemporaine"],
        correct: 3,
        explanation: "La Révolution française de 1789 marque la fin des Temps modernes et le début de l'Époque contemporaine."
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
    const saved = localStorage.getItem('quizProgress_histoire');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }

    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('quizProgress_histoire', JSON.stringify(progressData));
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
    const savedAnswered = localStorage.getItem('answeredQuestions_histoire');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }

    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));

    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_histoire');
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
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions d'histoire&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
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

    localStorage.setItem('quizProgress_histoire', JSON.stringify(progressData));
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
        localStorage.setItem('answeredQuestions_histoire', JSON.stringify(answeredQuestions));
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
    localStorage.setItem('quizProgress_histoire', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');

    let statsHTML = `
        <h3>📊 Statistiques détaillées - Histoire</h3>
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