const concepts = {
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
    }
};

const questions = [
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
        correct: 1,
        explanation: "97 = 11 × 8 + 9, donc le reste est 9"
    },
    {
        category: "🔢 Calcul",
        concept: "division",
        question: "Le reste de 89 ÷ 7 est :",
        options: ["4", "5", "6", "3"],
        correct: 1,
        explanation: "89 = 7 × 12 + 5, donc le reste est 5."
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
    const saved = localStorage.getItem('mathQuizProgress_ppcm');
    if (saved) {
        progressData = { ...progressData, ...JSON.parse(saved) };
    }

    if (!progressData.startTime) {
        progressData.startTime = new Date().toISOString();
        localStorage.setItem('mathQuizProgress_ppcm', JSON.stringify(progressData));
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
    // Charger les questions déjà répondues depuis localStorage
    const savedAnswered = localStorage.getItem('answeredQuestions_ppcm');
    if (savedAnswered) {
        answeredQuestions = JSON.parse(savedAnswered);
    }

    // Filtrer les questions non répondues
    const unansweredQuestions = questions.filter((_, index) => !answeredQuestions.includes(index));

    // Si toutes les questions ont été répondues, réinitialiser
    if (unansweredQuestions.length === 0) {
        answeredQuestions = [];
        localStorage.removeItem('answeredQuestions_ppcm');
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

    // Masquer les boutons de navigation
    document.getElementById('nextBtn').style.display = 'none';

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
    localStorage.setItem('mathQuizProgress_ppcm', JSON.stringify(progressData));
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
        localStorage.setItem('answeredQuestions_ppcm', JSON.stringify(answeredQuestions));
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
    localStorage.setItem('mathQuizProgress_ppcm', JSON.stringify(progressData));
}

function displayDetailedStats() {
    const stats = getProgressStats();
    const statsContainer = document.getElementById('detailedStats');

    let statsHTML = `
        <h3>📊 Statistiques détaillées - PPCM et Division</h3>
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

// Charger le progrès au démarrage si disponible
window.addEventListener('load', function() {
    loadProgress();
    updateProgressDisplay();
});

function continueFromConcept() {
    showQuestion();
}