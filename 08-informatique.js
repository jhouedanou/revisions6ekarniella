const concepts = {
    "apercu_texte": {
        title: "👁️ Aperçu d'un texte (Print Preview)",
        content: `
            <h4>Utilité de l'aperçu avant impression</h4>
            <p>L'<strong>aperçu avant impression</strong> (ou « Print Preview ») permet de visualiser à l'écran exactement comment le document apparaîtra sur papier avant de l'imprimer.</p>
            <h4>Pourquoi l'utiliser ?</h4>
            <ul>
                <li>Vérifier la <strong>mise en page</strong> (marges, orientations, sauts de page).</li>
                <li>Détecter les <strong>erreurs de présentation</strong> avant d'imprimer.</li>
                <li>Éviter de <strong>gaspiller du papier et de l'encre</strong> en imprimant un document mal formaté.</li>
                <li>Contrôler que le texte ne dépasse pas les <strong>bordures de la page</strong>.</li>
            </ul>
            <h4>Procédure de réalisation (dans un traitement de texte comme LibreOffice Writer ou Word)</h4>
            <ol>
                <li>Ouvrir le document à visualiser.</li>
                <li>Cliquer sur le menu <strong>Fichier</strong>.</li>
                <li>Sélectionner <strong>Aperçu avant impression</strong> (ou « Aperçu »).</li>
                <li>Une nouvelle fenêtre s'ouvre montrant le document tel qu'il sera imprimé.</li>
                <li>On peut utiliser les boutons de zoom pour mieux voir les détails.</li>
                <li>Fermer l'aperçu pour revenir au document et y apporter des corrections si nécessaire.</li>
            </ol>
            <div class="example">
                <strong>Raccourci clavier (Windows) :</strong> Ctrl + F2 dans LibreOffice Writer pour ouvrir l'aperçu avant impression.
            </div>
        `
    },
    "imprimer_texte": {
        title: "🖨️ Imprimer un texte",
        content: `
            <h4>Définition</h4>
            <p>L'<strong>impression</strong> est l'opération qui consiste à transférer le contenu d'un document numérique sur papier à l'aide d'une <strong>imprimante</strong>.</p>
            <h4>Types d'imprimantes</h4>
            <ul>
                <li><strong>Imprimante à jet d'encre :</strong> projette des gouttelettes d'encre sur le papier. Idéale pour les photos et les couleurs.</li>
                <li><strong>Imprimante laser :</strong> utilise un laser et du toner (poudre). Plus rapide pour les documents professionnels.</li>
                <li><strong>Imprimante thermique :</strong> utilise la chaleur (reçus de caisse, tickets).</li>
            </ul>
            <h4>Méthode d'impression (dans un traitement de texte)</h4>
            <ol>
                <li>Ouvrir le document à imprimer.</li>
                <li>Aller dans le menu <strong>Fichier</strong> puis cliquer sur <strong>Imprimer</strong> (ou utiliser le raccourci <strong>Ctrl + P</strong>).</li>
                <li>Une boîte de dialogue apparaît. On peut choisir :
                    <ul>
                        <li>L'<strong>imprimante</strong> à utiliser.</li>
                        <li>Le <strong>nombre de copies</strong>.</li>
                        <li>Les <strong>pages à imprimer</strong> (toutes, une sélection, ou des pages précises).</li>
                        <li>L'<strong>orientation</strong> (portrait ou paysage).</li>
                    </ul>
                </li>
                <li>Cliquer sur le bouton <strong>OK</strong> ou <strong>Imprimer</strong> pour lancer l'impression.</li>
            </ol>
            <div class="example">
                <strong>Raccourci clavier :</strong> Ctrl + P ouvre la boîte de dialogue d'impression dans la plupart des logiciels.
            </div>
        `
    },
    "internet": {
        title: "🌐 Définition et généralités sur Internet",
        content: `
            <h4>Qu'est-ce qu'Internet ?</h4>
            <p>Internet est un <strong>réseau mondial d'ordinateurs interconnectés</strong> qui permettent d'échanger des informations à travers le monde entier. C'est le plus grand réseau informatique de la planète.</p>
            <h4>Quelques définitions clés</h4>
            <ul>
                <li><strong>Réseau :</strong> ensemble d'ordinateurs et d'appareils connectés entre eux pour partager des informations.</li>
                <li><strong>Serveur :</strong> ordinateur puissant qui stocke des informations et les met à disposition des autres ordinateurs (clients).</li>
                <li><strong>Navigateur web :</strong> logiciel permettant de visiter des sites internet (ex : Chrome, Firefox, Edge, Safari).</li>
                <li><strong>URL :</strong> adresse d'un site web (ex : www.google.com).</li>
                <li><strong>WWW (World Wide Web) :</strong> système de pages web reliées entre elles par des liens hypertextes, accessible via Internet.</li>
                <li><strong>Fournisseur d'accès à Internet (FAI) :</strong> société qui permet de se connecter à Internet (ex : Orange, MTN, Moov).</li>
            </ul>
            <h4>Services offerts par Internet</h4>
            <ul>
                <li><strong>Le Web :</strong> consultation de sites et de pages web.</li>
                <li><strong>La messagerie électronique (email) :</strong> envoi et réception de messages.</li>
                <li><strong>La communication :</strong> chat, appels vidéo (WhatsApp, Zoom).</li>
                <li><strong>Le téléchargement :</strong> récupérer des fichiers, images, vidéos.</li>
                <li><strong>Les réseaux sociaux :</strong> Facebook, Instagram, TikTok…</li>
            </ul>
            <h4>Comment se connecte-t-on à Internet ?</h4>
            <p>On se connecte via un <strong>modem</strong> ou une <strong>box</strong> (Wi-Fi), une connexion <strong>filaire</strong> (câble Ethernet) ou les <strong>données mobiles</strong> (4G, 5G) d'un téléphone.</p>
            <div class="example">
                <strong>À retenir :</strong> Internet ≠ Web. Internet est l'infrastructure (les câbles, les connexions). Le Web est l'un des services qui utilise Internet pour afficher des pages.
            </div>
        `
    }
};

const questions = [
    // APERÇU D'UN TEXTE (8 questions)
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "À quoi sert l'aperçu avant impression dans un traitement de texte ?",
        options: [
            "À modifier la police d'écriture",
            "À visualiser le document tel qu'il apparaîtra sur papier",
            "À envoyer le document par email",
            "À sauvegarder le document"
        ],
        correct: 1,
        explanation: "L'aperçu avant impression permet de voir à l'écran comment le document sera imprimé, afin de vérifier la mise en page avant de lancer l'impression."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Quel est le principal avantage de consulter l'aperçu avant d'imprimer ?",
        options: [
            "Imprimer plus vite",
            "Éviter de gaspiller du papier en corrigeant les erreurs de mise en page",
            "Changer la couleur du texte",
            "Ajouter des images au document"
        ],
        correct: 1,
        explanation: "L'aperçu permet de détecter les problèmes de mise en page (marges, débordements) avant d'imprimer, évitant ainsi de gaspiller du papier et de l'encre."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Dans quel menu trouve-t-on généralement l'option « Aperçu avant impression » ?",
        options: ["Édition", "Affichage", "Fichier", "Insertion"],
        correct: 2,
        explanation: "L'option « Aperçu avant impression » se trouve dans le menu Fichier de la plupart des logiciels de traitement de texte."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Quel raccourci clavier permet généralement d'ouvrir l'aperçu avant impression dans LibreOffice Writer ?",
        options: ["Ctrl + P", "Ctrl + F2", "Ctrl + S", "Ctrl + Z"],
        correct: 1,
        explanation: "Le raccourci Ctrl + F2 ouvre l'aperçu avant impression dans LibreOffice Writer."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Que peut-on vérifier grâce à l'aperçu avant impression ?",
        options: [
            "La vitesse de l'imprimante",
            "La mise en page, les marges et les sauts de page",
            "La connexion Internet",
            "Le niveau d'encre de l'imprimante"
        ],
        correct: 1,
        explanation: "L'aperçu permet de vérifier la mise en page (marges, sauts de page, orientations) pour s'assurer que le document s'imprimera correctement."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Après avoir consulté l'aperçu et constaté une erreur, que doit-on faire ?",
        options: [
            "Imprimer quand même",
            "Fermer l'aperçu, corriger l'erreur dans le document, puis relancer l'aperçu",
            "Éteindre l'ordinateur",
            "Appeler le technicien"
        ],
        correct: 1,
        explanation: "Si on détecte une erreur dans l'aperçu, on ferme l'aperçu, on corrige le document, puis on peut relancer l'aperçu avant d'imprimer."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "L'aperçu avant impression montre :",
        options: [
            "Le code source du document",
            "Le document en mode édition",
            "Le document tel qu'il sera imprimé sur papier",
            "Les statistiques du document"
        ],
        correct: 2,
        explanation: "L'aperçu avant impression affiche une représentation fidèle du document tel qu'il apparaîtra une fois imprimé sur papier."
    },
    {
        category: "💻 Informatique",
        concept: "apercu_texte",
        question: "Peut-on modifier directement le texte dans la fenêtre d'aperçu avant impression ?",
        options: [
            "Oui, toujours",
            "Non, l'aperçu sert uniquement à visualiser",
            "Oui, mais uniquement la police",
            "Oui, mais uniquement les marges"
        ],
        correct: 1,
        explanation: "La fenêtre d'aperçu avant impression est en lecture seule : elle permet uniquement de visualiser. Il faut revenir au mode édition pour modifier le document."
    },

    // IMPRIMER UN TEXTE (8 questions)
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Qu'est-ce qu'une imprimante ?",
        options: [
            "Un appareil qui numérise les documents papier",
            "Un appareil qui transfère le contenu d'un fichier numérique sur papier",
            "Un appareil qui stocke des documents",
            "Un appareil qui envoie des emails"
        ],
        correct: 1,
        explanation: "Une imprimante est un périphérique de sortie qui transfère le contenu d'un document numérique sur papier."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Quel raccourci clavier permet d'ouvrir la boîte de dialogue d'impression dans la plupart des logiciels ?",
        options: ["Ctrl + S", "Ctrl + C", "Ctrl + P", "Ctrl + I"],
        correct: 2,
        explanation: "Ctrl + P est le raccourci universel pour ouvrir la boîte de dialogue d'impression dans la plupart des logiciels."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Quelle est la différence entre une imprimante à jet d'encre et une imprimante laser ?",
        options: [
            "L'imprimante laser est plus lente",
            "L'imprimante à jet d'encre utilise de l'encre liquide, la laser utilise du toner (poudre)",
            "L'imprimante laser imprime uniquement en noir et blanc",
            "L'imprimante à jet d'encre est plus rapide"
        ],
        correct: 1,
        explanation: "L'imprimante à jet d'encre projette de l'encre liquide sur le papier. L'imprimante laser utilise un faisceau laser et du toner (poudre) pour imprimer."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Dans la boîte de dialogue d'impression, que peut-on choisir ?",
        options: [
            "Uniquement le nombre de copies",
            "L'imprimante, le nombre de copies, les pages et l'orientation",
            "Uniquement la couleur du texte",
            "La connexion Wi-Fi"
        ],
        correct: 1,
        explanation: "La boîte de dialogue d'impression permet de choisir l'imprimante à utiliser, le nombre de copies, les pages à imprimer et l'orientation (portrait ou paysage)."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Quelle est la séquence correcte pour imprimer un document dans un traitement de texte ?",
        options: [
            "Ctrl+C → Ctrl+V → OK",
            "Fichier → Imprimer → Choisir les paramètres → OK",
            "Édition → Copier → Coller",
            "Affichage → Imprimer → Fermer"
        ],
        correct: 1,
        explanation: "Pour imprimer : menu Fichier → Imprimer (ou Ctrl+P) → choisir l'imprimante et les paramètres → cliquer sur OK ou Imprimer."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Qu'est-ce que l'orientation « paysage » pour l'impression ?",
        options: [
            "La page est plus haute que large (verticale)",
            "La page est plus large que haute (horizontale)",
            "La page est carrée",
            "La page est imprimée recto-verso"
        ],
        correct: 1,
        explanation: "L'orientation paysage signifie que la page est horizontale (plus large que haute). L'orientation portrait est verticale (plus haute que large)."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "L'imprimante thermique utilise :",
        options: [
            "De l'encre liquide", 
            "Du toner en poudre",
            "La chaleur pour imprimer",
            "Des feutres"
        ],
        correct: 2,
        explanation: "L'imprimante thermique utilise la chaleur pour marquer le papier spécial. On la retrouve dans les caisses enregistreuses pour imprimer les tickets de caisse."
    },
    {
        category: "💻 Informatique",
        concept: "imprimer_texte",
        question: "Avant d'imprimer un document long, quelle bonne pratique doit-on adopter ?",
        options: [
            "Imprimer immédiatement sans vérification",
            "Consulter l'aperçu avant impression pour vérifier la mise en page",
            "Fermer le document",
            "Redémarrer l'ordinateur"
        ],
        correct: 1,
        explanation: "Avant d'imprimer un document long, il est conseillé de consulter l'aperçu avant impression pour détecter et corriger les erreurs de mise en page."
    },

    // INTERNET (9 questions)
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Qu'est-ce qu'Internet ?",
        options: [
            "Un logiciel installé sur un ordinateur",
            "Un réseau mondial d'ordinateurs interconnectés permettant d'échanger des informations",
            "Un type d'imprimante",
            "Un navigateur web"
        ],
        correct: 1,
        explanation: "Internet est le plus grand réseau informatique mondial : il relie des milliards d'ordinateurs et d'appareils pour permettre l'échange d'informations à travers le monde."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Qu'est-ce que le World Wide Web (WWW) ?",
        options: [
            "Un câble de connexion Internet",
            "Un système de pages web reliées par des liens hypertextes, accessible via Internet",
            "Un type de virus informatique",
            "Un fournisseur d'accès Internet"
        ],
        correct: 1,
        explanation: "Le World Wide Web (WWW) est un système de pages web reliées par des liens hypertextes. C'est l'un des services d'Internet, mais Internet est plus large que le Web."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Quel logiciel utilise-t-on pour visiter des sites sur Internet ?",
        options: [
            "Un traitement de texte",
            "Un navigateur web (comme Chrome, Firefox, Edge)",
            "Un antivirus",
            "Un tableur"
        ],
        correct: 1,
        explanation: "Un navigateur web (Chrome, Firefox, Edge, Safari…) est le logiciel qui permet de visiter des sites internet en interprétant les pages web."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Que signifie l'acronyme URL ?",
        options: [
            "Un réseau local",
            "L'adresse d'une page web",
            "Un type de virus",
            "Un format de fichier"
        ],
        correct: 1,
        explanation: "URL signifie Uniform Resource Locator : c'est l'adresse unique d'une page ou d'une ressource sur Internet (ex : www.google.com)."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Parmi ces services, lequel est offert par Internet ?",
        options: [
            "L'impression de documents",
            "La messagerie électronique (email)",
            "La sauvegarde de fichiers sur CD",
            "La numérisation de documents"
        ],
        correct: 1,
        explanation: "La messagerie électronique (email) est l'un des principaux services d'Internet, permettant d'envoyer et recevoir des messages instantanément."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Qu'est-ce qu'un Fournisseur d'Accès à Internet (FAI) ?",
        options: [
            "Un fabricant d'ordinateurs",
            "Une société qui permet à ses clients de se connecter à Internet",
            "Un créateur de sites web",
            "Un antivirus en ligne"
        ],
        correct: 1,
        explanation: "Un Fournisseur d'Accès à Internet (FAI) est une société (comme Orange, MTN, Moov…) qui propose des abonnements pour se connecter à Internet."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Internet et le Web, c'est la même chose ?",
        options: [
            "Oui, ce sont deux mots pour la même chose",
            "Non, Internet est l'infrastructure et le Web est un service qui l'utilise",
            "Non, le Web est plus grand qu'Internet",
            "Oui, mais seulement pour les téléphones"
        ],
        correct: 1,
        explanation: "Non, ce n'est pas la même chose. Internet est l'infrastructure (les câbles, les connexions). Le Web (World Wide Web) est l'un des services qui utilise Internet pour afficher des pages."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Comment peut-on se connecter à Internet ?",
        options: [
            "Uniquement avec un câble Ethernet",
            "Via Wi-Fi, câble Ethernet ou données mobiles (4G/5G)",
            "Uniquement par Wi-Fi",
            "Uniquement avec un ordinateur de bureau"
        ],
        correct: 1,
        explanation: "On peut se connecter à Internet via plusieurs moyens : Wi-Fi (sans fil), câble Ethernet (filaire), ou données mobiles (4G, 5G) sur un smartphone."
    },
    {
        category: "💻 Informatique",
        concept: "internet",
        question: "Quel est le rôle d'un serveur sur Internet ?",
        options: [
            "Empêcher les connexions",
            "Stocker des informations et les mettre à disposition des autres ordinateurs",
            "Imprimer des pages web",
            "Fabriquer des câbles réseau"
        ],
        correct: 1,
        explanation: "Un serveur est un ordinateur puissant qui stocke des données (sites web, fichiers, emails…) et les met à disposition des ordinateurs clients qui en font la demande."
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
    const saved = localStorage.getItem('quizProgress_informatique');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }
    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('quizProgress_informatique', JSON.stringify(progressData));
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
    const savedAnswered = localStorage.getItem('answeredQuestions_informatique');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }
    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));
    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_informatique');
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
                <a href="mailto:jhouedanou@gmail.com?subject=Aide pour les révisions d'Informatique&body=Bonjour tonton,%0A%0AJ'ai besoin d'aide pour cette question:%0A%0A${encodeURIComponent(question.question)}%0A%0AMerci !" target="_blank">
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
    localStorage.setItem('quizProgress_informatique', JSON.stringify(progressData));
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
        localStorage.setItem('answeredQuestions_informatique', JSON.stringify(answeredQuestions));
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
    localStorage.setItem('quizProgress_informatique', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');
    let statsHTML = `
        <h3>📊 Statistiques détaillées - Informatique</h3>
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
