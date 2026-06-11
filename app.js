// Answer keys for verification
const ANSWER_KEYS = {
    // Week 1
    "w1-ex1-a": { value: "4962.36", tolerance: ["4962.36", "4962,36"] },
    "w1-ex1-b": { value: "603.995", tolerance: ["603.995", "603,995"] },
    "w1-ex1-c": { value: "7.2036", tolerance: ["7.2036", "7,2036"] },
    "w1-ex2-Aa": { value: "2", tolerance: ["2"] },
    "w1-ex2-Ab": { value: "6", tolerance: ["6"] },
    "w1-ex2-Ac": { value: "1", tolerance: ["1"] },
    "w1-ex2-Ad": { value: "6", tolerance: ["6"] },
    "w1-ex2-Ae": { value: "0", tolerance: ["0"] },
    "w1-ex2-Af": { value: "124", tolerance: ["124"] },
    "w1-ex2-Ag": { value: "0.56", tolerance: ["0.56", "0,56", "56"] },
    "w1-ex2-Ah": { value: "45", tolerance: ["45"] },
    "w1-ex2-Ai": { value: "12", tolerance: ["12"] },
    "w1-ex2-Ba": { value: "0.13", tolerance: ["0.13", "0,13", "13/100"] },
    "w1-ex2-Bb": { value: "0.035", tolerance: ["0.035", "0,035", "35/1000"] },
    "w1-ex2-Bc": { value: "15.14", tolerance: ["15.14", "15,14"] },
    "w1-ex2-Bd": { value: "8.945", tolerance: ["8.945", "8,945"] },
    "w1-ex2-Be": { value: "25.2", tolerance: ["25.2", "25,2"] },
    "w1-ex3-1a": { value: "5.6", tolerance: ["5.6", "5,6"] },
    "w1-ex3-1b": { value: "0.01", tolerance: ["0.01", "0,01", "1/100"] },
    "w1-ex3-1c": { value: "678.1", tolerance: ["678.1", "678,1"] },
    "w1-ex3-1d": { value: "2400", tolerance: ["2400"] },
    "w1-ex3-2a1": { value: "produit", tolerance: ["produit", "le produit"] },
    "w1-ex3-2a2": { value: "facteurs", tolerance: ["facteurs", "facteur", "ses facteurs"] },
    "w1-ex3-2b": { value: "somme", tolerance: ["somme", "la somme"] },
    "w1-ex3-2c": { value: "10.4", tolerance: ["10.4", "10,4"] },
    "w1-ex3-2d1": { value: "termes", tolerance: ["termes", "terme"] },
    "w1-ex3-2d2": { value: "somme", tolerance: ["somme", "addition"] },
    "w1-ex4-a": { value: "[EF)", tolerance: ["[EF)", "[EF\u0029", "EF"] },
    "w1-ex4-b": { value: "(RE)", tolerance: ["(RE)", "(RT)", "(TE)", "(ER)", "(TR)", "(ET)"] },
    "w1-ex4-c": { value: "S \u2208 [IG) et S \u2209 [IG]", tolerance: ["S\u2208[IG)etS\u2209[IG]", "S appartient à [IG) et S n'appartient pas à [IG]", "S\u2208[IG),S\u2209[IG]"] },
    "w1-ex4-d": { value: "MN = 4", tolerance: ["MN=4", "MN=4cm", "MN = 4 cm"] },
    "w1-ex4-e": { value: "\\widehat{AKL} = 40\u00B0", tolerance: ["\\widehat{AKL}=40\u00B0", "\\widehat{LKA}=40\u00B0", "AKL=40\u00B0", "LKA=40\u00B0", "angle AKL = 40\u00B0", "\\widehat{AKL}=40", "\\widehat{LKA}=40"] },
    "w1-ex5-a": { value: "Oui", tolerance: ["oui", "ils sont alignés", "aligned"] },
    "w1-ex5-b": { value: "118", tolerance: ["118", "118\u00B0", "118 deg", "118 degrés"] },
    "w1-ex7-total": { value: "175.80", tolerance: ["175.8", "175,8", "175.80", "175,80", "175.8$", "175.80$", "175,80$"] },
    "w1-ex8-perim": { value: "28", tolerance: ["28", "28 cm", "28cm"] },
    "w1-puzzle-word": { value: "MATH", tolerance: ["math", "MATH", "m.a.t.h."] },

    // Week 2
    "w2-ex1-a": { value: "2/3", tolerance: ["2/3", "0.67", "0,67", "0.66", "0,66"] },
    "w2-ex1-b": { value: "2/5", tolerance: ["2/5", "0.4", "0,4"] },
    "w2-ex1-c": { value: "5/4", tolerance: ["5/4", "1.25", "1,25"] },
    "w2-ex1-d": { value: "9/2", tolerance: ["9/2", "4.5", "4,5"] },
    "w2-ex1-e": { value: "2/3", tolerance: ["2/3", "0.67", "0,67", "0.66", "0,66"] },
    "w2-ex2-a": { value: ">", tolerance: [">", "supérieur"] },
    "w2-ex2-b": { value: "<", tolerance: ["<", "inférieur"] },
    "w2-ex2-c": { value: ">", tolerance: [">", "supérieur"] },
    "w2-ex2-d": { value: "<", tolerance: ["<", "inférieur"] },
    "w2-ex3-unss": { value: "18", tolerance: ["18", "18 élèves", "18eleves"] },
    "w2-ex4-A-val": { value: "0.6", tolerance: ["0.6", "0,6", "3/5"] },
    "w2-ex4-B-val": { value: "1.4", tolerance: ["1.4", "1,4", "7/5"] },
    "w2-ex4-C-val": { value: "2.6", tolerance: ["2.6", "2,6", "13/5"] },
    "w2-ex4-D-val": { value: "3.6", tolerance: ["3.6", "3,6", "18/5"] },
    "w2-ex5-a": { value: "OM = OA", tolerance: ["om=oa", "oa=om", "égales", "egales", "égaux", "om=oa=3", "om=oa=3cm"] },
    "w2-ex5-b": { value: "équilatéral", tolerance: ["equilateral", "équilatéral", "un triangle équilatéral", "un triangle equilateral"] },
    "w2-ex5-c": { value: "losange", tolerance: ["losange", "un losange"] },
    "w2-ex6-1": { value: "3", tolerance: ["3", "3 cm", "3cm"] },
    "w2-ex6-2": { value: "3", tolerance: ["3", "3 cm", "3cm"] },
    "w2-ex6-4": { value: "6", tolerance: ["6", "6 cm", "6cm"] },
    "w2-ex6-5": { value: "9", tolerance: ["9", "9 cm", "9cm"] },
    "w2-ex7-A": { value: "9", tolerance: ["9"] },
    "w2-ex7-B": { value: "172", tolerance: ["172"] },
    "w2-ex7-C": { value: "457", tolerance: ["457"] },
    "w2-ex7-D": { value: "900", tolerance: ["900"] },
    "w2-ex7-E": { value: "89", tolerance: ["89"] },
    "w2-ex7-F": { value: "78", tolerance: ["78"] },
    "w2-ex8-c1": { value: "2h34", tolerance: ["2h34", "2 h 34 min", "2h34min", "2 heures 34 minutes", "2h 34min", "2h34m"] },
    "w2-ex8-c2": { value: "2h48", tolerance: ["2h48", "2 h 48 min", "2h48min", "2 heures 48 minutes", "2h 48min", "2h48m"] },
    "w2-ex8-total": { value: "5h22", tolerance: ["5h22", "5 h 22 min", "5h22min", "5 heures 22 minutes", "5h 22min", "5h22m"] },
    "w2-puzzle-pomme": { value: "10", tolerance: ["10"] },
    "w2-puzzle-banane": { value: "3", tolerance: ["3"] },
    "w2-puzzle-coco": { value: "1", tolerance: ["1"] },
    "w2-puzzle-final": { value: "31", tolerance: ["31"] },

    // Week 3
    "w3-ex1-A": { value: "2", tolerance: ["2", "2/1"] },
    "w3-ex1-B": { value: "7/3", tolerance: ["7/3"] },
    "w3-ex1-C": { value: "15/4", tolerance: ["15/4", "3.75", "3,75"] },
    "w3-ex1-D": { value: "11/32", tolerance: ["11/32"] },
    "w3-ex1-E": { value: "1/8", tolerance: ["1/8", "0.125", "0,125"] },
    "w3-ex1-F": { value: "37/14", tolerance: ["37/14"] },
    "w3-ex2-cat1": { value: "40", tolerance: ["40", "40 élèves"] },
    "w3-ex2-cat2": { value: "60", tolerance: ["60", "60 élèves"] },
    "w3-ex2-cat3": { value: "100", tolerance: ["100", "100 élèves"] },
    "w3-ex2-cat4": { value: "40", tolerance: ["40", "40 élèves"] },
    "w3-ex3-theatre": { value: "9", tolerance: ["9", "9 élèves"] },
    "w3-ex4-prop": { value: "Oui", tolerance: ["oui", "oui c'est proportionnel", "c'est proportionnel", "yes"] },
    "w3-ex5-fbe": { value: "34", tolerance: ["34", "34\u00B0", "34 deg"] },
    "w3-ex5-dbc": { value: "40", tolerance: ["40", "40\u00B0", "40 deg"] },
    "w3-ex5-abc": { value: "180", tolerance: ["180", "180\u00B0", "180 deg", "angle plat", "179", "179\u00B0", "179 deg"] },
    "w3-ex6-nature": { value: "losange", tolerance: ["losange", "un losange"] },
    "w3-ex7-cm": { value: "28.56", tolerance: ["28.56", "28,56", "28.56 cm", "28,56 cm", "28.56cm", "28,56cm"] },
    "w3-ex7-hm": { value: "0.002856", tolerance: ["0.002856", "0,002856", "0.002856 hm", "0,002856 hm", "0.002856hm", "0,002856hm"] },
    "w3-ex8-raison": { value: "Non", tolerance: ["non", "il a tort", "il n'a pas raison", "tort"] },
    "w3-ex8-val": { value: "3.24", tolerance: ["3.24", "3,24", "3.24m", "3,24m", "3.24 m"] },
    "w3-puzzle-path": { value: "3 -> 2.9 -> 2.89 -> 2.88 -> 2.87 -> 2.86 -> 2.85 -> 2.84 -> 2.83", tolerance: ["3->2.9->2.89->2.88->2.87->2.86->2.85->2.84->2.83", "3, 2.9, 2.89, 2.88, 2.87, 2.86, 2.85, 2.84, 2.83", "3 2.9 2.89 2.88 2.87 2.86 2.85 2.84 2.83"] },

    // Week 4
    "w4-ex1-a": { value: "40.62", tolerance: ["40.62", "40,62"] },
    "w4-ex1-b": { value: "40.06", tolerance: ["40.06", "40,06"] },
    "w4-ex2-a": { value: "20", tolerance: ["20", "20 €", "20€"] },
    "w4-ex2-b": { value: "14", tolerance: ["14", "14 €", "14€"] },
    "w4-ex2-c": { value: "16", tolerance: ["16", "16 €", "16€"] },
    "w4-ex3-red": { value: "4.20", tolerance: ["4.2", "4,2", "4.20", "4,20", "4.2€", "4,2€", "4.20€"] },
    "w4-ex3-prix": { value: "23.80", tolerance: ["23.8", "23,8", "23.80", "23,80", "23.8€", "23,8€", "23.80€"] },
    "w4-ex4-a": { value: "3.6", tolerance: ["3.6", "3,6"] },
    "w4-ex4-b": { value: "54", tolerance: ["54"] },
    "w4-ex4-c": { value: "25", tolerance: ["25"] },
    "w4-ex5-aire": { value: "42", tolerance: ["42", "42 cm2", "42cm2", "42 cm\u00B2", "42cm\u00B2"] },
    "w4-ex6-vol": { value: "14", tolerance: ["14", "14 cm3", "14cm3", "14 cm\u00B3", "14cm\u00B3"] },
    "w4-ex7-nature": { value: "losange", tolerance: ["losange", "un losange"] },
    "w4-ex7-perim": { value: "24", tolerance: ["24", "24 cm", "24cm"] },
    "w4-ex8-pomme": { value: "12", tolerance: ["12", "10", "8.57", "8.6", "12g", "10g"] },
    "w4-ex8-banane": { value: "7", tolerance: ["7", "5", "7.86", "7.9", "7g", "5g"] },
    "w4-puzzle-s1": { value: "4.8", tolerance: ["4.8", "4,8"] },
    "w4-puzzle-s2": { value: "1.5", tolerance: ["1.5", "1,5", "15"] }
};

// Global State
let state = {
    currentWeek: "w1",
    theme: "light",
    completedExercises: {},     // key: wX-exY, value: true
    answers: {},                // key: input-id, value: text
    unlockedCorrections: {},    // key: wX-exY, value: true
    drafts: {}                  // key: wX-exY, value: text
};

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem("maths_vacances_state_6eme");
        if (saved) {
            const parsed = JSON.parse(saved);
            state = { ...state, ...parsed };
        }
    } catch (e) {
        console.warn("Could not load state from localStorage", e);
    }
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem("maths_vacances_state_6eme", JSON.stringify(state));
    } catch (e) {
        console.warn("Could not save state to localStorage", e);
    }
}

// Update dashboard and stats
function updateProgress() {
    // Total count of interactive exercises (weeks 1 to 4)
    const activeCards = document.querySelectorAll(".exercises-view[data-week^='w'] .exercise-card");
    const totalExercises = activeCards.length;
    let completedCount = 0;
    
    activeCards.forEach(card => {
        const key = card.dataset.exerciseKey;
        if (state.completedExercises[key]) {
            card.classList.add("completed");
            const badge = card.querySelector(".exercise-status-badge");
            if (badge) badge.innerHTML = `<span style="color:var(--success)">✓ Résolu</span>`;
            completedCount++;
        } else {
            card.classList.remove("completed");
            const badge = card.querySelector(".exercise-status-badge");
            if (badge) badge.innerHTML = `<span>Non résolu</span>`;
        }
    });

    // Update progress bar
    const percent = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;
    const bar = document.getElementById("progress-bar");
    if (bar) {
        bar.style.width = percent + "%";
    }
    
    // Update labels
    const pctText = document.getElementById("progress-percent");
    if (pctText) pctText.innerText = percent + "%";
    
    const countText = document.getElementById("completed-count");
    if (countText) countText.innerText = completedCount;
    
    const totalText = document.getElementById("total-count");
    if (totalText) totalText.innerText = totalExercises;
    
    // Update score badge
    const scoreBadge = document.getElementById("badge-score");
    if (scoreBadge) scoreBadge.innerText = `${completedCount}/${totalExercises}`;

    // Update navigation sidebar indicators (only for interactive weeks w1-w4)
    for (let w = 1; w <= 4; w++) {
        const weekKey = `w${w}`;
        const weekCardExercises = document.querySelectorAll(`.exercises-view[data-week="${weekKey}"] .exercise-card`);
        let weekCompleted = 0;
        weekCardExercises.forEach(card => {
            if (state.completedExercises[card.dataset.exerciseKey]) {
                weekCompleted++;
            }
        });
        const indicator = document.getElementById(`nav-progress-w${w}`);
        if (indicator) {
            indicator.innerText = `${weekCompleted}/${weekCardExercises.length}`;
        }
    }
}

// Navigation between weeks and extra sheet
function selectWeek(weekKey) {
    state.currentWeek = weekKey;
    
    // Toggle active sidebar items
    document.querySelectorAll(".nav-item").forEach(item => {
        if (item.dataset.week === weekKey) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });

    // Toggle active exercises view
    document.querySelectorAll(".exercises-view").forEach(view => {
        if (view.dataset.week === weekKey) {
            view.classList.add("active");
        } else {
            view.classList.remove("active");
        }
    });

    // Hide dashboard card on Fiche supplémentaire
    const dashboard = document.querySelector(".dashboard-card");
    if (dashboard) {
        if (weekKey === "extra") {
            dashboard.style.display = "none";
        } else {
            dashboard.style.display = "flex";
        }
    }

    // Scroll to top of content
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    saveState();

    // Trigger MathJax typesetting for newly visible equations
    if (window.MathJax && window.MathJax.typesetPromise) {
        window.MathJax.typesetPromise().catch(err => console.error(err));
    }
}

// Tab switcher inside exercise cards
function switchTab(btn) {
    const card = btn.closest(".exercise-card");
    const tabName = btn.dataset.tab;
    
    // Toggle buttons
    card.querySelectorAll(".tab-btn").forEach(b => {
        if (b.dataset.tab === tabName) {
            b.classList.add("active");
        } else {
            b.classList.remove("active");
        }
    });

    // Toggle panels
    card.querySelectorAll(".tab-panel").forEach(panel => {
        if (panel.classList.contains(`${tabName}-panel`)) {
            panel.classList.add("active");
            // Trigger MathJax typeset for the newly active panel
            if (window.MathJax && window.MathJax.typesetPromise) {
                window.MathJax.typesetPromise([panel]).catch(err => console.error(err));
            }
        } else {
            panel.classList.remove("active");
        }
    });
    
    // If Correction tab is opened, check if it's unlocked
    if (tabName === "correction") {
        checkCorrectionLock(card);
    }
}

// Toggle display of original images
function toggleOriginalImage(btn) {
    const container = btn.closest(".tab-panel").querySelector(".exercise-image-container");
    if (container.classList.contains("visible")) {
        container.classList.remove("visible");
        btn.innerText = "Afficher l'image d'origine";
    } else {
        container.classList.add("visible");
        btn.innerText = "Masquer l'image d'origine";
    }
}

// Check if correction needs to show unlock button or content
function checkCorrectionLock(card) {
    const key = card.dataset.exerciseKey;
    const correctionPanel = card.querySelector(".correction-panel");
    
    if (state.unlockedCorrections[key] || state.completedExercises[key]) {
        // Show actual correction
        correctionPanel.querySelector(".correction-locked").style.display = "none";
        const content = correctionPanel.querySelector(".correction-content");
        content.style.display = "block";
        
        // Trigger MathJax typeset for the newly visible correction content
        if (window.MathJax && window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise([content]).catch(err => console.error(err));
        }
    } else {
        // Show locked message
        correctionPanel.querySelector(".correction-locked").style.display = "block";
        correctionPanel.querySelector(".correction-content").style.display = "none";
    }
}

// Unlock correction explicitly
function unlockCorrection(btn) {
    const card = btn.closest(".exercise-card");
    const key = card.dataset.exerciseKey;
    
    if (confirm("Voulez-vous vraiment voir la correction ? Il est recommandé de chercher l'exercice au moins 15 minutes.")) {
        state.unlockedCorrections[key] = true;
        checkCorrectionLock(card);
        saveState();
    }
}

// Clean and normalize answers for tolerance checks
function cleanString(str) {
    if (!str) return "";
    return str.toString()
        .toLowerCase()
        .replace(/\s+/g, '') // remove spaces
        .replace(/,/g, '.')  // replace comma with dot
        .replace(/[\(\)]/g, '') // remove parentheses
        .trim();
}

// Verify answer input
function checkAnswer(btn) {
    const form = btn.closest(".answer-check-form");
    const inputs = form.querySelectorAll(".answer-input");
    let allCorrect = true;
    
    inputs.forEach(input => {
        const id = input.id;
        const value = input.value.trim();
        state.answers[id] = value; // save user answer
        
        const config = ANSWER_KEYS[id];
        if (config) {
            const cleanVal = cleanString(value);
            const isCorrect = config.tolerance.some(tol => cleanString(tol) === cleanVal);
            
            if (isCorrect) {
                input.style.borderColor = "var(--success)";
                input.style.backgroundColor = "hsla(145, 80%, 42%, 0.05)";
            } else {
                input.style.borderColor = "var(--danger)";
                input.style.backgroundColor = "hsla(0, 85%, 60%, 0.05)";
                allCorrect = false;
            }
        }
    });

    const feedback = form.querySelector(".validation-feedback");
    if (allCorrect) {
        feedback.className = "validation-feedback correct";
        feedback.innerHTML = "<span>✓ Félicitations ! Vos réponses sont correctes. Exercice marqué comme complété !</span>";
        
        // Mark exercise as completed
        const card = btn.closest(".exercise-card");
        state.completedExercises[card.dataset.exerciseKey] = true;
        updateProgress();
    } else {
        feedback.className = "validation-feedback incorrect";
        feedback.innerHTML = "<span>✗ Certaines réponses sont incorrectes. Révisez vos calculs et réessayez !</span>";
    }
    
    saveState();
}

// Render all exercises dynamically from EXERCISES_DATA
function renderExercises() {
    const container = document.getElementById("exercises-container");
    if (!container) return;

    container.innerHTML = "";

    // Render interactive weeks w1 to w4
    for (let w = 1; w <= 4; w++) {
        const weekKey = `w${w}`;
        const weekData = EXERCISES_DATA[weekKey];
        if (!weekData) continue;

        const weekView = document.createElement("div");
        weekView.className = "exercises-view";
        weekView.dataset.week = weekKey;

        // Week Banner
        const banner = document.createElement("div");
        banner.className = "week-title-banner";
        banner.innerHTML = `<h3>${weekData.title}</h3>`;
        weekView.appendChild(banner);

        weekData.exercises.forEach(exercise => {
            const card = document.createElement("div");
            card.className = "exercise-card";
            card.dataset.exerciseKey = exercise.id;

            let imageToggleBtnHtml = "";
            let imageContainerHtml = "";
            if (exercise.image) {
                imageToggleBtnHtml = `
                    <button class="btn original-image-toggle" onclick="toggleOriginalImage(this)">
                        Afficher l'image d'origine
                    </button>
                `;
                imageContainerHtml = `
                    <div class="exercise-image-container">
                        <img src="extracted_images/${exercise.image}" alt="Énoncé d'origine" loading="lazy">
                    </div>
                `;
            }

            let inputsHtml = "";
            if (exercise.inputs && exercise.inputs.length > 0) {
                inputsHtml = `
                    <div class="answer-check-form">
                        ${exercise.inputs.map(input => `
                            <div class="inputs-row" style="margin-bottom: 12px;">
                                <span class="input-label" style="min-width: 180px; display: inline-block;">${input.label} :</span>
                                <input type="text" class="answer-input" id="${input.id}" placeholder="${input.placeholder}">
                            </div>
                        `).join('')}
                        <button class="btn btn-primary" style="margin-top: 12px; align-self: flex-start;" onclick="checkAnswer(this)">Vérifier mes réponses</button>
                        <div class="validation-feedback" style="margin-top: 12px;"></div>
                    </div>
                `;
            } else {
                inputsHtml = `
                    <div class="answer-check-form" style="border-style: dashed; background: transparent; text-align: center; color: var(--text-muted);">
                        <p>📝 Saisie de réponse non requise pour cet exercice géométrique ou de démonstration.</p>
                        <p style="font-size: 0.85rem; margin-top: 4px;">Rédigez votre raisonnement sur votre cahier, puis comparez avec la correction détaillée !</p>
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="exercise-header">
                    <div class="exercise-title">
                        <span class="exercise-number">${exercise.num}</span>
                        <span class="exercise-title-text">${exercise.title}</span>
                    </div>
                    <div class="exercise-status-badge">
                        <span>Non résolu</span>
                    </div>
                </div>

                <div class="tabs-nav">
                    <button class="tab-btn active" data-tab="statement" onclick="switchTab(this)">
                        📝 Énoncé
                    </button>
                    <button class="tab-btn" data-tab="course" onclick="switchTab(this)">
                        📚 Cours
                    </button>
                    <button class="tab-btn" data-tab="help" onclick="switchTab(this)">
                        💡 Aide
                    </button>
                    <button class="tab-btn" data-tab="practice" onclick="switchTab(this)">
                        ✏️ S'entraîner
                    </button>
                    <button class="tab-btn" data-tab="correction" onclick="switchTab(this)">
                        ✔️ Correction
                    </button>
                </div>

                <!-- Statement Panel -->
                <div class="tab-panel active statement-panel">
                    <div class="exercise-statement">
                        ${exercise.statement}
                    </div>
                    ${imageToggleBtnHtml}
                    ${imageContainerHtml}
                </div>

                <!-- Course Panel -->
                <div class="tab-panel course-panel">
                    <div class="course-reminder-content">
                        ${exercise.course}
                    </div>
                </div>

                <!-- Help Panel -->
                <div class="tab-panel help-panel">
                    <div class="help-content">
                        ${exercise.help}
                    </div>
                </div>

                <!-- Practice Panel -->
                <div class="tab-panel practice-panel">
                    <div class="workspace-content">
                        ${inputsHtml}
                        <div class="draft-notepad" style="margin-top: 16px;">
                            <span class="input-label">📝 Votre brouillon (sauvegardé automatiquement) :</span>
                            <textarea class="draft-textarea" placeholder="Rédigez vos calculs ou vos notes ici..."></textarea>
                        </div>
                    </div>
                </div>

                <!-- Correction Panel -->
                <div class="tab-panel correction-panel">
                    <div class="correction-locked">
                        <p>La correction détaillée est verrouillée. Prenez le temps de chercher l'exercice avant de regarder la solution !</p>
                        <button class="btn btn-primary" onclick="unlockCorrection(this)">🔑 Déverrouiller la correction</button>
                    </div>
                    <div class="correction-content" style="display: none;">
                        ${exercise.correction}
                    </div>
                </div>
            `;

            weekView.appendChild(card);
        });

        container.appendChild(weekView);
    }

    // Render Fiche supplémentaire (extra) WITHOUT course/help/correction tabs and verification
    const extraData = EXERCISES_DATA["extra"];
    if (extraData) {
        const extraView = document.createElement("div");
        extraView.className = "exercises-view";
        extraView.dataset.week = "extra";

        const banner = document.createElement("div");
        banner.className = "week-title-banner";
        banner.style.background = "linear-gradient(135deg, hsla(275, 75%, 60%, 0.1), hsla(0, 0%, 50%, 0.1))";
        banner.style.borderLeftColor = "var(--secondary)";
        banner.innerHTML = `<h3>${extraData.title}</h3>`;
        extraView.appendChild(banner);

        const introCard = document.createElement("div");
        introCard.className = "exercise-card no-print";
        introCard.style.background = "hsla(var(--hue), 20%, 50%, 0.02)";
        introCard.style.padding = "24px";
        introCard.innerHTML = `
            <p style="font-weight: 600; font-size: 1.05rem;">📄 Fiche d'exercices complémentaires de transition 6ème vers la 5ème</p>
            <p style="color: var(--text-muted); font-size: 0.95rem; margin-top: 8px;">
                Conformément aux consignes, ces exercices supplémentaires sont proposés <strong>sans cours, sans aide interactive et sans correction</strong>. 
                Travaillez sur votre cahier personnel pour réviser et renforcer vos compétences de fin d'année !
            </p>
        `;
        extraView.appendChild(introCard);

        extraData.exercises.forEach(exercise => {
            const card = document.createElement("div");
            card.className = "exercise-card";
            card.dataset.exerciseKey = exercise.id;

            let imageHtml = "";
            if (exercise.image) {
                imageHtml = `
                    <div class="exercise-image-container visible" style="margin-top: 16px;">
                        <img src="extracted_images/${exercise.image}" alt="Schéma d'énoncé" loading="lazy">
                    </div>
                `;
            }

            card.innerHTML = `
                <div class="exercise-header">
                    <div class="exercise-title">
                        <span class="exercise-number" style="background-color: var(--secondary); color: white;">${exercise.num}</span>
                        <span class="exercise-title-text">${exercise.title}</span>
                    </div>
                </div>
                <div class="exercise-statement" style="margin-bottom: 0;">
                    ${exercise.statement}
                    ${imageHtml}
                </div>
            `;
            extraView.appendChild(card);
        });

        container.appendChild(extraView);
    }
}

// Reset all progress
function resetAllProgress() {
    if (confirm("Voulez-vous vraiment réinitialiser toute votre progression ? Cette action est irréversible.")) {
        localStorage.removeItem("maths_vacances_state_6eme");
        location.reload();
    }
}

// Bind events on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // 1. Render all exercises
    renderExercises();

    // 2. Load state
    loadState();
    
    // 3. Apply saved inputs
    Object.keys(state.answers).forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = state.answers[id];
    });

    // 4. Apply saved drafts & setup real-time save listeners
    document.querySelectorAll(".draft-textarea").forEach(textarea => {
        const card = textarea.closest(".exercise-card");
        if (card) {
            const key = card.dataset.exerciseKey;
            if (state.drafts[key]) {
                textarea.value = state.drafts[key];
            }
            
            textarea.addEventListener("input", (e) => {
                state.drafts[key] = e.target.value;
                saveState();
            });
        }
    });

    // 5. Theme toggle
    const themeBtn = document.getElementById("theme-toggle");
    if (themeBtn) {
        document.documentElement.setAttribute("data-theme", state.theme);
        themeBtn.innerText = state.theme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
        
        themeBtn.addEventListener("click", () => {
            const nextTheme = state.theme === "light" ? "dark" : "light";
            state.theme = nextTheme;
            document.documentElement.setAttribute("data-theme", nextTheme);
            themeBtn.innerText = nextTheme === "light" ? "🌙 Mode Sombre" : "☀️ Mode Clair";
            saveState();
        });
    }

    // 6. Print button
    const printBtn = document.getElementById("print-btn");
    if (printBtn) {
        printBtn.addEventListener("click", () => {
            window.print();
        });
    }

    // 7. Activate current week/sheet
    selectWeek(state.currentWeek);
    
    // 8. Initial progress update
    updateProgress();

    // 9. Trigger MathJax typeset
    if (window.MathJax) {
        if (window.MathJax.startup && window.MathJax.startup.promise) {
            window.MathJax.startup.promise.then(() => {
                window.MathJax.typesetPromise().catch(err => console.error(err));
            });
        } else if (window.MathJax.typesetPromise) {
            window.MathJax.typesetPromise().catch(err => console.error(err));
        }
    }
});
