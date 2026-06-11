const EXERCISES_DATA = {
    "w1": {
        title: "Semaine 1 : Priorités, décimaux, notations et angles",
        exercises: [
            {
                id: "w1-ex1",
                num: "N°1",
                title: "Calculs posés avec des décimaux",
                statement: `<p>Poser et effectuer les calculs suivants (sans calculatrice) :</p>
                <div class="math-formula">
                    a) \\(5000 - 37,64\\)<br>
                    b) \\(495 + 19,395 + 89,6\\)<br>
                    c) \\(3,48 \\times 2,07\\)
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Addition et Soustraction</strong> : Aligner verticalement les virgules. Ajouter des zéros à droite de la partie décimale si nécessaire pour avoir le même nombre de chiffres (ex: \\(5000 = 5000,00\\)).</li>
                    <li><strong>Multiplication</strong> : Effectuer le calcul sans s'occuper de la virgule. Dans le résultat final, placer la virgule de façon à avoir autant de chiffres après la virgule que la somme des chiffres après la virgule des deux facteurs (ici \\(2 + 2 = 4\\) chiffres).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour \\(5000 - 37,64\\), posez \\(5000,00 - 37,64\\) en faisant attention aux retenues.</li>
                    <li>Pour \\(495 + 19,395 + 89,6\\), posez \\(495,000 + 19,395 + 89,600\\).</li>
                    <li>Pour \\(3,48 \\times 2,07\\), effectuez d'abord \\(348 \\times 207\\). Le résultat final doit avoir 4 chiffres après la virgule.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex1-a", label: "a) 5000 - 37,64 = ", placeholder: "Ex: 4962.36" },
                    { id: "w1-ex1-b", label: "b) 495 + 19,395 + 89,6 = ", placeholder: "Ex: 603.995" },
                    { id: "w1-ex1-c", label: "c) 3,48 × 2,07 = ", placeholder: "Ex: 7.2036" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Soustraction :</strong><br>
                        \\(\\begin{array}{r@{\\quad}l}
                        5000,00 \\\\
                        -\\phantom{00}37,64 \\\\
                        \\hline
                        4962,36
                        \\end{array}\\)<br>
                        Le résultat est <strong>4962,36</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Addition :</strong><br>
                        \\(\\begin{array}{r@{\\quad}l}
                        495,000 \\\\
                        +\\phantom{0}19,395 \\\\
                        +\\phantom{0}89,600 \\\\
                        \\hline
                        603,995
                        \\end{array}\\)<br>
                        Le résultat est <strong>603,995</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>c) Multiplication :</strong><br>
                        Effectuons \\(348 \\times 207 = 72036\\).<br>
                        Comme \\(3,48\\) a 2 chiffres après la virgule et \\(2,07\\) en a 2, le produit aura \\(2 + 2 = 4\\) chiffres après la virgule.<br>
                        Le résultat est <strong>7,2036</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-ex2",
                num: "N°2",
                title: "Écritures décimales et valeur de position",
                statement: `<p><strong>A - Répondre aux questions sur les nombres décimaux :</strong></p>
                <ol type="a">
                    <li>Quel est le chiffre des dizaines de \\(125,86\\) ?</li>
                    <li>Quel est le chiffre des centièmes de \\(325,568\\) ?</li>
                    <li>Quel est le chiffre des dixièmes de \\(334,12\\) ?</li>
                    <li>Quel est le chiffre des millièmes de \\(1\\ 356,026\\) ?</li>
                    <li>Quel est le chiffre des dixièmes de \\(137\\) ?</li>
                    <li>Quelle est la partie entière de \\(124,63\\) ?</li>
                    <li>Quelle est la partie décimale de \\(12,56\\) ?</li>
                    <li>Quel est le nombre de dizaines de \\(456\\) ?</li>
                    <li>Quel est le nombre de dixièmes de \\(1,2\\) ?</li>
                </ol>
                <p><strong>B - Donner l'écriture décimale des nombres suivants :</strong></p>
                <ol type="a">
                    <li>\\(\\frac{13}{100}\\)</li>
                    <li>\\(\\frac{35}{1000}\\)</li>
                    <li>\\(15 + \\frac{14}{100}\\)</li>
                    <li>\\(8 + \\frac{4}{100} + \\frac{9}{10} + \\frac{5}{1000}\\)</li>
                    <li>\\(21 + \\frac{42}{10}\\)</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Valeur de position</strong> : Dans \\(123,456\\) :
                        <ul>
                            <li>1 est le chiffre des centaines, 2 des dizaines, 3 des unités.</li>
                            <li>4 est le chiffre des dixièmes (\\(1^{\\text{er}}\\) chiffre après la virgule), 5 des centièmes (\\(2^{\\text{e}}\\)), 6 des millièmes (\\(3^{\\text{e}}\\)).</li>
                        </ul>
                    </li>
                    <li><strong>Chiffre vs Nombre</strong> : Le chiffre est un symbole unique (0-9). Le <em>nombre</em> de dizaines dans \\(456\\) correspond à la quantité entière de dizaines qu'il contient (ici \\(45\\)).</li>
                    <li><strong>Fractions décimales</strong> : \\(\\frac{1}{10} = 0,1\\) ; \\(\\frac{1}{100} = 0,01\\) ; \\(\\frac{1}{1000} = 0,001\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour A-e), le nombre \\(137\\) s'écrit aussi \\(137,0\\).</li>
                    <li>Pour A-g), la partie décimale s'exprime soit sous forme de nombre entier (56 centièmes), soit sous forme décimale (0,56). Saisissez la partie après la virgule (ex: 56 ou 0,56).</li>
                    <li>Pour B-d), regroupez les fractions dans l'ordre : dixièmes (9), centièmes (4), millièmes (5).</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex2-Aa", label: "A-a (chiffre des dizaines)", placeholder: "Ex: 5" },
                    { id: "w1-ex2-Ab", label: "A-b (chiffre des centièmes)", placeholder: "Ex: 6" },
                    { id: "w1-ex2-Ac", label: "A-c (chiffre des dixièmes)", placeholder: "Ex: 1" },
                    { id: "w1-ex2-Ad", label: "A-d (chiffre des millièmes)", placeholder: "Ex: 6" },
                    { id: "w1-ex2-Ae", label: "A-e (chiffre des dixièmes de 137)", placeholder: "Ex: 0" },
                    { id: "w1-ex2-Af", label: "A-f (partie entière)", placeholder: "Ex: 124" },
                    { id: "w1-ex2-Ag", label: "A-g (partie décimale)", placeholder: "Ex: 56 ou 0.56" },
                    { id: "w1-ex2-Ah", label: "A-h (nombre de dizaines)", placeholder: "Ex: 45" },
                    { id: "w1-ex2-Ai", label: "A-i (nombre de dixièmes)", placeholder: "Ex: 12" },
                    { id: "w1-ex2-Ba", label: "B-a (décimal)", placeholder: "Ex: 0.13" },
                    { id: "w1-ex2-Bb", label: "B-b (décimal)", placeholder: "Ex: 0.035" },
                    { id: "w1-ex2-Bc", label: "B-c (décimal)", placeholder: "Ex: 15.14" },
                    { id: "w1-ex2-Bd", label: "B-d (décimal)", placeholder: "Ex: 8.945" },
                    { id: "w1-ex2-Be", label: "B-e (décimal)", placeholder: "Ex: 25.2" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Partie A :</strong><br>
                        - a) Le chiffre des dizaines de \\(125,86\\) est <strong>2</strong> (2 dizaines).<br>
                        - b) Le chiffre des centièmes de \\(325,568\\) est <strong>6</strong> (le deuxième chiffre après la virgule).<br>
                        - c) Le chiffre des dixièmes de \\(334,12\\) est <strong>1</strong> (le premier chiffre après la virgule).<br>
                        - d) Le chiffre des millièmes de \\(1\\ 356,026\\) est <strong>6</strong> (le troisième chiffre après la virgule).<br>
                        - e) \\(137 = 137,0\\). Le chiffre des dixièmes est donc <strong>0</strong>.<br>
                        - f) La partie entière de \\(124,63\\) (ce qui précède la virgule) est <strong>124</strong>.<br>
                        - g) La partie décimale de \\(12,56\\) est <strong>0,56</strong> (ou 56 centièmes).<br>
                        - h) Dans \\(456\\), il y a <strong>45</strong> dizaines complètes (\\(45 \\times 10 = 450\\)).<br>
                        - i) Dans \\(1,2\\), il y a <strong>12</strong> dixièmes en tout (\\(1,2 = 12 \\div 10\\)).
                    </div>
                    <div class="correction-step">
                        <strong>Partie B :</strong><br>
                        - a) \\(\\frac{13}{100} = 0,13\\)<br>
                        - b) \\(\\frac{35}{1000} = 0,035\\)<br>
                        - c) \\(15 + \\frac{14}{100} = 15 + 0,14 = 15,14\\)<br>
                        - d) \\(8 + \\frac{9}{10} + \\frac{4}{100} + \\frac{5}{1000} = 8 + 0,9 + 0,04 + 0,005 = 8,945\\)<br>
                        - e) \\(21 + \\frac{42}{10} = 21 + 4,2 = 25,2\\)
                    </div>
                </div>`
            },
            {
                id: "w1-ex3",
                num: "N°3",
                title: "Calcul mental et vocabulaire des opérations",
                statement: `<p><strong>1) Compléter par le nombre manquant :</strong></p>
                <div class="math-formula">
                    a) \\(0,56 \\times 10 = \\dots\\)<br>
                    b) \\(126,9 \\times \\dots = 1,269\\)<br>
                    c) \\(100 \\times 6,781 = \\dots\\)<br>
                    d) \\(\\dots \\times 0,1 = 240\\)
                </div>
                <p><strong>2) Compléter les phrases suivantes avec le vocabulaire approprié :</strong></p>
                <ol type="a">
                    <li>On donne : \\(2,1 \\times 15,6 = 32,76\\).<br>
                    \\(32,76\\) est le \\(\\dots\\) de \\(2,1\\) par \\(15,6\\). Le nombre \\(15,6\\) est l'un de ses \\(\\dots\\).</li>
                    <li>\\(33\\) est la \\(\\dots\\) de \\(11\\) et \\(22\\).</li>
                    <li>La différence entre \\(30,7\\) et \\(20,3\\) est \\(\\dots\\).</li>
                    <li>\\(15\\) et \\(0,5\\) sont les \\(\\dots\\) de la \\(\\dots\\) \\(15+0,5\\).</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Calcul mental</strong> :
                        <ul>
                            <li>Multiplier par 10 ou 100 décale la virgule vers la droite de 1 ou 2 rangs.</li>
                            <li>Multiplier par 0,1 ou 0,01 décale la virgule vers la gauche de 1 ou 2 rangs (équivalent à diviser par 10 ou 100).</li>
                        </ul>
                    </li>
                    <li><strong>Vocabulaire</strong> :
                        <ul>
                            <li>L'addition donne une <strong>somme</strong> et ses éléments sont des <strong>termes</strong>.</li>
                            <li>La soustraction donne une <strong>différence</strong> et ses éléments sont des <strong>termes</strong>.</li>
                            <li>La multiplication donne un <strong>produit</strong> et ses éléments sont des <strong>facteurs</strong>.</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour 1-b), la virgule a reculé de 2 rangs vers la gauche, on a donc multiplié par \\(0,01\\).</li>
                    <li>Pour 1-d), \\(A \\times 0,1 = 240\\) équivaut à \\(A \\div 10 = 240\\), donc \\(A = 240 \\times 10\\).</li>
                    <li>Faites bien attention à l'orthographe des mots mathématiques (singulier ou pluriel).</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex3-1a", label: "1-a", placeholder: "Ex: 5.6" },
                    { id: "w1-ex3-1b", label: "1-b", placeholder: "Ex: 0.01" },
                    { id: "w1-ex3-1c", label: "1-c", placeholder: "Ex: 678.1" },
                    { id: "w1-ex3-1d", label: "1-d", placeholder: "Ex: 2400" },
                    { id: "w1-ex3-2a1", label: "2-a (32,76 est le...)", placeholder: "Ex: produit" },
                    { id: "w1-ex3-2a2", label: "2-a (15,6 est un...)", placeholder: "Ex: facteurs" },
                    { id: "w1-ex3-2b", label: "2-b (33 est la...)", placeholder: "Ex: somme" },
                    { id: "w1-ex3-2c", label: "2-c (valeur de la différence)", placeholder: "Ex: 10.4" },
                    { id: "w1-ex3-2d1", label: "2-d (15 et 0,5 sont les...)", placeholder: "Ex: termes" },
                    { id: "w1-ex3-2d2", label: "2-d (de la...)", placeholder: "Ex: somme" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Nombres manquants :</strong><br>
                        - a) \\(0,56 \\times 10 = 5,6\\) (virgule décalée de 1 rang vers la droite).<br>
                        - b) \\(126,9 \\times 0,01 = 1,269\\) (virgule décalée de 2 rangs vers la gauche).<br>
                        - c) \\(100 \\times 6,781 = 678,1\\) (virgule décalée de 2 rangs vers la droite).<br>
                        - d) \\(2400 \\times 0,1 = 240\\) (car \\(2400 \\div 10 = 240\\)).
                    </div>
                    <div class="correction-step">
                        <strong>2) Vocabulaire :</strong><br>
                        - a) \\(32,76\\) est le <strong>produit</strong> de \\(2,1\\) par \\(15,6\\). Le nombre \\(15,6\\) est l'un de ses <strong>facteurs</strong>.<br>
                        - b) \\(33\\) est la <strong>somme</strong> de \\(11\\) et \\(22\\) (car \\(11+22=33\\)).<br>
                        - c) La différence entre \\(30,7\\) et \\(20,3\\) est <strong>10,4</strong> (car \\(30,7 - 20,3 = 10,4\\)).<br>
                        - d) \\(15\\) et \\(0,5\\) sont les <strong>termes</strong> de la <strong>somme</strong> \\(15+0,5\\).
                    </div>
                </div>`
            },
            {
                id: "w1-ex4",
                num: "N°4",
                title: "Notations géométriques de base",
                statement: `<p>Dans chaque cas, traduire la phrase en utilisant les notations mathématiques géométriques :</p>
                <ol type="a">
                    <li>La demi-droite d'origine E qui passe par le point F est notée : ...</li>
                    <li>La droite passant par les points R, T et E est notée : ...</li>
                    <li>Le point S appartient à la demi-droite d'origine I passant par G mais n'appartient pas au segment d'extrémités I et G : ...</li>
                    <li>La longueur du segment d'extrémités M et N est de 4 cm : ...</li>
                    <li>L'angle de sommet K, de côtés [KA) et [KL), de mesure 40°: ...</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Droite</strong> : Notée entre parenthèses, ex: \\((AB)\\).</li>
                    <li><strong>Segment</strong> : Notée entre crochets, ex: \\([AB]\\).</li>
                    <li><strong>Demi-droite</strong> : Crochet à l'origine et parenthèse du côté du point de passage, ex: \\([AB)\\).</li>
                    <li><strong>Longueur</strong> : S'écrit sans symbole autour des lettres, ex: \\(AB = 4\\text{ cm}\\).</li>
                    <li><strong>Angle</strong> : Noté avec un chapeau sur les trois lettres, le sommet étant au milieu, ex: \\(\\widehat{AKL} = 40^\\circ\\).</li>
                    <li><strong>Appartenance</strong> : Le symbole \\(\\in\\) signifie "appartient à" et \\(\\notin\\) signifie "n'appartient pas à".</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour c), écrivez les deux conditions séparément en utilisant les symboles \\(\\in\\) et \\(\\notin\\), reliés par une virgule ou un "et".</li>
                    <li>Pour e), le sommet K doit être placé au centre des trois lettres de l'angle. Les deux écritures \\(\\widehat{AKL}\\) et \\(\\widehat{LKA}\\) sont valides.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex4-a", label: "a) Notation", placeholder: "Ex: [EF)" },
                    { id: "w1-ex4-b", label: "b) Notation", placeholder: "Ex: (RT)" },
                    { id: "w1-ex4-c", label: "c) Notation", placeholder: "Ex: S ∈ [IG) et S ∉ [IG]" },
                    { id: "w1-ex4-d", label: "d) Notation", placeholder: "Ex: MN = 4 cm" },
                    { id: "w1-ex4-e", label: "e) Notation", placeholder: "Ex: angle AKL = 40°" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - a) La demi-droite d'origine E passant par F est notée <strong>\\([EF)\\)</strong> (crochet en E car c'est l'origine fermée, parenthèse en F car la demi-droite se poursuit).<br>
                        - b) La droite passant par R, T et E est notée <strong>\\((RE)\\)</strong> ou <strong>\\((RT)\\)</strong> ou <strong>\\((TE)\\)</strong> (l'ordre des lettres n'a pas d'importance, et deux lettres suffisent pour définir une droite).<br>
                        - c) \\(S\\) appartient à \\([IG)\\) et n'appartient pas à \\([IG]\\) se note : <strong>\\(S \\in [IG)\\) et \\(S \\notin [IG]\\)</strong> (ce qui signifie graphiquement que \\(S\\) est sur la demi-droite au-delà du point \\(G\\)).<br>
                        - d) La longueur du segment \\([MN]\\) vaut 4 cm se note <strong>\\(MN = 4\\text{ cm}\\)</strong> (sans crochet ni parenthèse autour de MN).<br>
                        - e) L'angle se note <strong>\\(\\widehat{AKL} = 40^\\circ\\)</strong> ou <strong>\\(\\widehat{LKA} = 40^\\circ\\)</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-ex5",
                num: "N°5",
                title: "Mesures d'angles et alignement",
                statement: `<p>Résoudre les deux questions à l'aide des figures géométriques ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image002.png" alt="Figure a : angles RSU et UST" style="max-width: 250px; margin-right: 20px; vertical-align: middle;">
                    <img src="/image003.png" alt="Figure b : angles xAz et zAy" style="max-width: 250px; vertical-align: middle;">
                </div>
                <p><strong>a)</strong> Les points R, S et T sont-ils alignés ? Justifier la réponse en effectuant un calcul.</p>
                <p><strong>b)</strong> On donne \\(x \\hat{A} y = 180^\\circ\\). Calculer la mesure de l'angle \\(x\\hat{A}z\\).</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Alignement de points</strong> : Les points R, S et T sont alignés si et seulement si l'angle \\(\\widehat{RST}\\) est un <strong>angle plat</strong>, c'est-à-dire s'il mesure exactement \\(180^\\circ\\).</li>
                    <li><strong>Angles adjacents supplémentaires</strong> : Si deux angles partagent un côté commun et que leur somme vaut \\(180^\\circ\\), ils forment un angle plat.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour a), additionnez les mesures des angles adjacents \\(\\widehat{RSU}\\) et \\(\\widehat{UST}\\) : \\(135^\\circ + 45^\\circ\\). Si la somme fait \\(180^\\circ\\), alors l'angle global \\(\\widehat{RST}\\) est plat, et les points sont alignés.</li>
                    <li>Pour b), l'angle plat \\(\\widehat{xAy}\\) est composé de la somme de \\(\\widehat{xAz}\\) et \\(\\widehat{zAy}\\). Donc \\(\\widehat{xAz} = 180^\\circ - 62^\\circ\\).</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex5-a", label: "a) R, S et T sont-ils alignés ? (Oui / Non)", placeholder: "Ex: Oui" },
                    { id: "w1-ex5-b", label: "b) Angle xAz (degrés)", placeholder: "Ex: 120" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Alignement des points R, S, T :</strong><br>
                        Calculons l'angle global \\(\\widehat{RST}\\) en additionnant les deux angles adjacents :<br>
                        \\( \\widehat{RST} = \\widehat{RSU} + \\widehat{UST} = 135^\\circ + 45^\\circ = 180^\\circ \\).<br>
                        Comme l'angle \\(\\widehat{RST}\\) mesure exactement \\(180^\\circ\\), c'est un angle plat. Les points R, S et T sont donc **alignés**.
                    </div>
                    <div class="correction-step">
                        <strong>b) Calcul de l'angle \\(xAz\\) :</strong><br>
                        Les angles \\(\\widehat{xAz}\\) et \\(\\widehat{zAy}\\) sont supplémentaires car leur réunion forme l'angle plat \\(\\widehat{xAy} = 180^\\circ\\).<br>
                        \\( \\widehat{xAz} = 180^\\circ - \\widehat{zAy} = 180^\\circ - 62^\\circ = 118^\\circ \\).<br>
                        L'angle \\(\\widehat{xAz}\\) mesure donc <strong>118°</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-ex6",
                num: "N°6",
                title: "Symétrie axiale géométrique",
                statement: `<p>Effectuer les tracés de symétrie (sur votre cahier de brouillon) :</p>
                <ol type="A">
                    <li><strong>Symétrie sur quadrillage</strong> : Tracer le symétrique de la figure ci-dessous par rapport à la droite (d).
                        <div style="text-align: center; margin: 12px 0;">
                            <img src="/image036.png" alt="Grille de symétrie A" style="max-width: 260px;">
                        </div>
                    </li>
                    <li><strong>Symétrie par rapport à une droite oblique</strong> : Tracer le symétrique de la figure par rapport à la droite (AB).
                        <div style="text-align: center; margin: 12px 0;">
                            <img src="/image037.png" alt="Grille de symétrie B" style="max-width: 320px;">
                        </div>
                    </li>
                </ol>
                <p><em>Note : Cet exercice de construction géométrique se réalise sur papier. Vous pouvez utiliser le brouillon interactif pour prendre des notes puis étudier la correction visuelle.</em></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Le symétrique d'un point \\(P\\) par rapport à une droite \\((d)\\) est le point \\(P'\\) tel que la droite \\((d)\\) soit la médiatrice du segment \\([PP']\\).</li>
                    <li>Cela signifie que le segment \\([PP']\\) est **perpendiculaire** à l'axe \\((d)\\), et que la distance de \\(P\\) à \\((d)\\) est égale à la distance de \\(P'\\) à \\((d)\\).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour la figure A (axe vertical)</strong> : Pour chaque point, comptez horizontalement le nombre de carreaux jusqu'à l'axe vertical \\((d)\\), et reportez ce même nombre de carreaux vers la droite.</li>
                    <li><strong>Pour la figure B (axe oblique)</strong> : Comptez les diagonales de carreaux perpendiculairement à l'axe \\((AB)\\). Par exemple, si un point se situe à 2 diagonales de l'axe, son symétrique se situera à 2 diagonales de l'autre côté de l'axe.</li>
                </ul>`,
                inputs: [],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Méthode de tracé point par point :</strong><br>
                        1. Nommez chaque sommet de la figure d'origine (ex: P1, P2, P3...).<br>
                        2. Pour chaque sommet, tracez la perpendiculaire à l'axe passant par ce sommet.<br>
                        3. Mesurez la distance entre le sommet et l'axe, puis reportez-la de l'autre côté sur la perpendiculaire pour placer le point symétrique.<br>
                        4. Reliez les nouveaux points obtenus dans le même ordre pour dessiner la figure symétrique.<br>
                        <em>Le dessin final est l'image miroir exacte de la figure d'origine par rapport à l'axe de symétrie.</em>
                    </div>
                </div>`
            },
            {
                id: "w1-ex7",
                num: "N°7",
                title: "Problème : Les achats de Béatrice",
                statement: `<p>Résoudre le problème suivant en posant les opérations nécessaires :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Béatrice a acheté une jupe, un tricot et une veste.<br>
                    - La jupe coûte \\(17,58\\ \$\\).<br>
                    - Le tricot coûte <strong>deux fois plus cher</strong> que la jupe.<br>
                    - La veste coûte <strong>trois fois et demi plus cher</strong> que le tricot.<br><br>
                    <strong>Calculer la dépense totale de Béatrice.</strong>
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Multiplication d'un décimal</strong> : Multiplier comme des entiers, puis placer la virgule dans le résultat pour qu'il y ait autant de décimales que dans le nombre multiplié.</li>
                    <li><strong>Calculer "2 fois plus cher"</strong> : Signifie multiplier le prix d'origine par 2.</li>
                    <li><strong>Calculer "3,5 fois plus cher"</strong> : Signifie multiplier le prix d'origine par 3,5.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Étape 1 : Calculez le prix du tricot. C'est le double de celui de la jupe, soit \\(17,58 \\times 2\\).</li>
                    <li>Étape 2 : Calculez le prix de la veste. Il vaut \\(3,5 \\times\\) le prix du tricot que vous venez de trouver. Posez la multiplication décimale.</li>
                    <li>Étape 3 : Additionnez les trois valeurs obtenues (Jupe + Tricot + Veste) en alignant bien les virgules.</li>
                </ul>`,
                inputs: [
                    { id: "w1-ex7-total", label: "Dépense totale ($)", placeholder: "Ex: 150.50" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Calcul du prix du tricot</strong><br>
                        Le tricot coûte deux fois plus cher que la jupe :<br>
                        \\( \\text{Prix du tricot} = 17,58 \\times 2 = 35,16\\ \\$\\).
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Calcul du prix de la veste</strong><br>
                        La veste coûte 3,5 fois plus cher que le tricot :<br>
                        \\( \\text{Prix de la veste} = 35,16 \\times 3,5 = 123,06\\ \\$\\).<br>
                        <em>Opération posée : \\(3516 \\times 35 = 123060\\). Avec 3 chiffres après la virgule au total, cela donne \\(123,060\\), soit \\(123,06\\).</em>
                    </div>
                    <div class="correction-step">
                        <strong>Étape 3 : Calcul de la dépense totale</strong><br>
                        Additionnons les trois articles :<br>
                        \\(\\begin{array}{r@{\\quad}l}
                        \\phantom{0}17,58 \\quad \\text{(Jupe)} \\\\
                        +\\phantom{0}35,16 \\quad \\text{(Tricot)} \\\\
                        +123,06 \\quad \\text{(Veste)} \\\\
                        \\hline
                        175,80
                        \\end{array}\\)<br>
                        La dépense totale de Béatrice est de <strong>175,80 $</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-ex8",
                num: "N°8",
                title: "Triangle et périmètre de figure",
                statement: `<p>Suivre les étapes de construction géométrique et répondre à la question :</p>
                <ol type="a">
                    <li>Construire un triangle \\(ABC\\) tel que : \\(AB = 6\\text{ cm}\\) ; \\(AC = 4,5\\text{ cm}\\) ; \\(BC = 3,5\\text{ cm}\\).</li>
                    <li>Construire, à l'extérieur du triangle \\(ABC\\), un triangle équilatéral sur chacun de ses côtés.</li>
                    <li><strong>Calculer le périmètre de la figure finale obtenue.</strong></li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Périmètre d'un polygone</strong> : C'est la somme de la longueur de tous ses côtés extérieurs. Les segments situés à l'intérieur de la figure ne comptent pas dans le périmètre.</li>
                    <li><strong>Triangle équilatéral</strong> : Triangle qui possède trois côtés de même longueur.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Une fois les trois triangles équilatéraux construits à l'extérieur de \\(ABC\\), les côtés de départ \\([AB]\\), \\([AC]\\) et \\([BC]\\) se retrouvent à l'intérieur de la figure finale. Ils ne font donc plus partie du périmètre extérieur.</li>
                    <li>Le contour extérieur de la figure est formé de :
                        <ul>
                            <li>2 côtés de longueur \\(AB\\) (appartenant au triangle équilatéral construit sur \\([AB]\\)).</li>
                            <li>2 côtés de longueur \\(AC\\) (appartenant au triangle construit sur \\([AC]\\)).</li>
                            <li>2 côtés de longueur \\(BC\\) (appartenant au triangle construit sur \\([BC]\\)).</li>
                        </ul>
                    </li>
                </ul>`,
                inputs: [
                    { id: "w1-ex8-perim", label: "Périmètre de la figure (cm)", placeholder: "Ex: 24" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Analyse de la figure :</strong><br>
                        - Sur le côté \\([AB]\\) (6 cm) est construit un triangle équilatéral. Ses deux autres côtés extérieurs mesurent donc \\(6\\text{ cm}\\) chacun.<br>
                        - Sur le côté \\([AC]\\) (4,5 cm) est construit un triangle équilatéral. Ses deux autres côtés extérieurs mesurent \\(4,5\\text{ cm}\\) chacun.<br>
                        - Sur le côté \\([BC]\\) (3,5 cm) est construit un triangle équilatéral. Ses deux autres côtés extérieurs mesurent \\(3,5\\text{ cm}\\) chacun.<br>
                        - Les trois côtés du triangle central \\(ABC\\) sont à l'intérieur de l'assemblage et ne font plus partie du contour extérieur.
                    </div>
                    <div class="correction-step">
                        <strong>Calcul du périmètre :</strong><br>
                        \\( P = (2 \\times AB) + (2 \\times AC) + (2 \\times BC) \\)<br>
                        \\( P = (2 \\times 6) + (2 \\times 4,5) + (2 \\times 3,5) \\)<br>
                        \\( P = 12 + 9 + 7 = 28\\text{ cm} \\).<br>
                        Le périmètre de la figure obtenue est de <strong>28 cm</strong>.
                    </div>
                </div>`
            },
            {
                id: "w1-puzzle",
                num: "Énigme",
                title: "Grille des multiples et mot mystère",
                statement: `<p><strong>1)</strong> Pour chaque grille de nombres ci-dessous, coloriez les cases où se trouvent les multiples indiqués :</p>
                <ul>
                    <li><strong>Grille 1</strong> : Les multiples de 2.</li>
                    <li><strong>Grille 2</strong> : Les multiples de 3.</li>
                    <li><strong>Grille 3</strong> : Les multiples de 5.</li>
                    <li><strong>Grille 4</strong> : Les multiples de 10.</li>
                </ul>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image006.png" alt="Les quatre grilles d'énigme" style="max-width: 100%; max-width: 550px;">
                </div>
                <p><strong>2) Déterminer le mot formé par les quatre lettres obtenues (une lettre par grille).</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Critères de divisibilité</strong> :
                        <ul>
                            <li>Multiple de 2 : se termine par 0, 2, 4, 6, 8 (nombres pairs).</li>
                            <li>Multiple de 3 : la somme de ses chiffres est un multiple de 3 (ex: 27 &rarr; 2+7=9, divisible par 3).</li>
                            <li>Multiple de 5 : se termine par 0 ou 5.</li>
                            <li>Multiple de 10 : se termine par 0.</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Dans la Grille 1, coloriez les cases 2, 4, 6, 8, etc. Le tracé des cases coloriées dessine une lettre.</li>
                    <li>Faites de même pour la Grille 2 avec la table de 3, la Grille 3 avec la table de 5, et la Grille 4 avec la table de 10.</li>
                    <li>Les quatre grilles forment chacune une lettre. Une fois assemblées dans l'ordre, elles forment un mot mathématique de 4 lettres courant.</li>
                </ul>`,
                inputs: [
                    { id: "w1-puzzle-word", label: "Quel est le mot mystère ?", placeholder: "Ex: MOTS" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        En coloriant les cases selon les critères de divisibilité, on voit apparaître :<br>
                        - <strong>Grille 1 (multiples de 2)</strong> : La lettre <strong>M</strong>.<br>
                        - <strong>Grille 2 (multiples de 3)</strong> : La lettre <strong>A</strong>.<br>
                        - <strong>Grille 3 (multiples de 5)</strong> : La lettre <strong>T</strong>.<br>
                        - <strong>Grille 4 (multiples de 10)</strong> : La lettre <strong>H</strong>.<br><br>
                        Le mot mathématique que l'on peut former est <strong>MATH</strong>.
                    </div>
                </div>`
            }
        ]
    },
    "w2": {
        title: "Semaine 2 : Fractions, médiatrice et durées",
        exercises: [
            {
                id: "w2-ex1",
                num: "N°1",
                title: "Simplification de fractions",
                statement: `<p>Simplifier les fractions suivantes pour les rendre irréductibles (sans calculatrice) :</p>
                <div class="math-formula">
                    \\[ \\frac{36}{54} \\quad ; \\quad \\frac{200}{500} \\quad ; \\quad \\frac{40}{32} \\quad ; \\quad \\frac{81}{18} \\quad ; \\quad \\frac{220}{330} \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Simplifier une fraction</strong> : Diviser son numérateur et son dénominateur par un même diviseur commun.</li>
                    <li>Une fraction est **irréductible** lorsque son numérateur et son dénominateur n'ont aucun diviseur commun autre que 1.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour \\(\\frac{36}{54}\\), vous pouvez diviser par 9, puis par 2. (Ou diviser directement par 18).</li>
                    <li>Pour \\(\\frac{200}{500}\\) et \\(\\frac{220}{330}\\), commencez par simplifier par 10 ou 100 en barrant les zéros.</li>
                    <li>Pour \\(\\frac{81}{18}\\), cherchez un diviseur commun dans la table de 9.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex1-a", label: "36/54 simplifié = ", placeholder: "Ex: 2/3" },
                    { id: "w2-ex1-b", label: "200/500 simplifié = ", placeholder: "Ex: 2/5" },
                    { id: "w2-ex1-c", label: "40/32 simplifié = ", placeholder: "Ex: 5/4" },
                    { id: "w2-ex1-d", label: "81/18 simplifié = ", placeholder: "Ex: 9/2" },
                    { id: "w2-ex1-e", label: "220/330 simplifié = ", placeholder: "Ex: 2/3" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>Simplification de \\(\\frac{36}{54}\\)</strong> :<br>
                        On peut diviser par 18 au numérateur et au dénominateur : \\(\\frac{36 \\div 18}{54 \\div 18} = \\frac{2}{3}\\).
                    </div>
                    <div class="correction-step">
                        - <strong>Simplification de \\(\\frac{200}{500}\\)</strong> :<br>
                        On simplifie par 100 : \\(\\frac{200 \\div 100}{500 \\div 100} = \\frac{2}{5}\\).
                    </div>
                    <div class="correction-step">
                        - <strong>Simplification de \\(\\frac{40}{32}\\)</strong> :<br>
                        On simplifie par 8 : \\(\\frac{40 \\div 8}{32 \\div 8} = \\frac{5}{4}\\).
                    </div>
                    <div class="correction-step">
                        - <strong>Simplification de \\(\\frac{81}{18}\\)</strong> :<br>
                        On simplifie par 9 : \\(\\frac{81 \\div 9}{18 \\div 9} = \\frac{9}{2}\\).
                    </div>
                    <div class="correction-step">
                        - <strong>Simplification de \\(\\frac{220}{330}\\)</strong> :<br>
                        On simplifie d'abord par 10 : \\(\\frac{22}{33}\\). Puis par 11 : \\(\\frac{22 \\div 11}{33 \\div 11} = \\frac{2}{3}\\).
                    </div>
                </div>`
            },
            {
                id: "w2-ex2",
                num: "N°2",
                title: "Comparaison de fractions",
                statement: `<p>Comparer les fractions suivantes en justifiant (indiquer le symbole \\(<\\) ou \\(>\\) ou \\(=\\)) :</p>
                <div class="math-formula">
                    a) \\(\\frac{12}{7}\\) ...... \\(\\frac{5}{12}\\) <br><br>
                    b) \\(\\frac{12}{8}\\) ...... \\(\\frac{22}{8}\\) <br><br>
                    c) \\(\\frac{7}{3}\\) ...... \\(\\frac{7}{5}\\) <br><br>
                    d) \\(\\frac{4}{18}\\) ...... \\(\\frac{5}{9}\\)
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Même dénominateur</strong> : La plus grande fraction est celle qui a le plus grand numérateur (ex: \\(\\frac{5}{8} < \\frac{7}{8}\\)).</li>
                    <li><strong>Même numérateur</strong> : La plus grande fraction est celle qui a le plus petit dénominateur (ex: \\(\\frac{3}{4} > \\frac{3}{5}\\)).</li>
                    <li><strong>Comparaison par rapport à 1</strong> : Si le numérateur est supérieur au dénominateur, la fraction est supérieure à 1. Si le numérateur est inférieur, elle est inférieure à 1.</li>
                    <li><strong>Dénominateurs différents</strong> : On réduit au même dénominateur avant de comparer.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour a), remarquez que \\(\\frac{12}{7} > 1\\) (car \\(12 > 7\\)) et \\(\\frac{5}{12} < 1\\) (car \\(5 < 12\\)).</li>
                    <li>Pour b), les dénominateurs sont identiques (8), comparez simplement 12 et 22.</li>
                    <li>Pour c), les numérateurs sont identiques (7), la plus grande est celle qui a le plus petit dénominateur.</li>
                    <li>Pour d), transformez \\(\\frac{5}{9}\\) en dix-huitièmes en multipliant le haut et le bas par 2.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex2-a", label: "a) 12/7 ... 5/12 (< ou > ou =)", placeholder: "Ex: >" },
                    { id: "w2-ex2-b", label: "b) 12/8 ... 22/8 (< ou > ou =)", placeholder: "Ex: <" },
                    { id: "w2-ex2-c", label: "c) 7/3 ... 7/5 (< ou > ou =)", placeholder: "Ex: >" },
                    { id: "w2-ex2-d", label: "d) 4/18 ... 5/9 (< ou > ou =)", placeholder: "Ex: <" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>a) \\(\\frac{12}{7} > \\frac{5}{12}\\)</strong> :<br>
                        En effet, \\(\\frac{12}{7}\\) est supérieure à 1 (car \\(12 > 7\\)) alors que \\(\\frac{5}{12}\\) est inférieure à 1 (car \\(5 < 12\\)).
                    </div>
                    <div class="correction-step">
                        - <strong>b) \\(\\frac{12}{8} < \\frac{22}{8}\\)</strong> :<br>
                        Les dénominateurs sont les mêmes, et \\(12 < 22\\).
                    </div>
                    <div class="correction-step">
                        - <strong>c) \\(\\frac{7}{3} > \\frac{7}{5}\\)</strong> :<br>
                        Les numérateurs sont les mêmes. Diviser un gâteau en 3 parts donne des parts plus grandes que de le diviser en 5 parts.
                    </div>
                    <div class="correction-step">
                        - <strong>d) \\(\\frac{4}{18} < \\frac{5}{9}\\)</strong> :<br>
                        Réduisons \\(\\frac{5}{9}\\) au dénominateur 18 : \\(\\frac{5 \\times 2}{9 \\times 2} = \\frac{10}{18}\\).<br>
                        Puisque \\(\\frac{4}{18} < \\frac{10}{18}\\), on en déduit que \\(\\frac{4}{18} < \\frac{5}{9}\\).
                    </div>
                </div>`
            },
            {
                id: "w2-ex3",
                num: "N°3",
                title: "Problème : Fraction d'un nombre (UNSS)",
                statement: `<p>Résoudre le problème suivant en justifiant votre démarche :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Parmi les \\(120\\) élèves de 6ème d'un collège, \\(\\frac{1}{4}\\) sont externes.<br>
                    Parmi ces externes, \\(\\frac{3}{5}\\) sont inscrits à l'UNSS.<br><br>
                    <strong>Combien d'élèves de 6ème sont à la fois externes et inscrits à l'UNSS ?</strong>
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Prendre une fraction d'un nombre</strong> : Multiplier le nombre par le numérateur et diviser le résultat par le dénominateur (ou l'inverse).<br>
                    Exemple : Prendre \\(\\frac{1}{4}\\) de 120 revient à faire : \\(120 \\times \\frac{1}{4} = 120 \\div 4 = 30\\).</li>
                    <li><strong>Fraction de fraction</strong> : Multiplier les deux fractions entre elles pour trouver la fraction du total.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Étape 1 : Trouvez d'abord le nombre d'élèves externes. Calculez \\(\\frac{1}{4}\\) de 120, soit \\(120 \\div 4\\).</li>
                    <li>Étape 2 : Parmi le nombre d'externes trouvé à l'étape 1, calculez combien sont à l'UNSS. Prenez \\(\\frac{3}{5}\\) de ce nombre : multipliez par 3 et divisez par 5.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex3-unss", label: "Nombre d'élèves externes et inscrits à l'UNSS", placeholder: "Ex: 15" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Étape 1 : Nombre d'élèves externes</strong><br>
                        \\(120 \\times \\frac{1}{4} = \\frac{120}{4} = 30\\) élèves externes.
                    </div>
                    <div class="correction-step">
                        <strong>Étape 2 : Nombre d'externes inscrits à l'UNSS</strong><br>
                        Parmi les 30 externes, \\(\\frac{3}{5}\\) sont inscrits à l'UNSS :<br>
                        \\( 30 \\times \\frac{3}{5} = \\frac{30 \\times 3}{5} = \\frac{90}{5} = 18\\) élèves.<br>
                        <em>Autre méthode : \\((30 \\div 5) \\times 3 = 6 \\times 3 = 18\\).</em><br><br>
                        Il y a donc <strong>18</strong> élèves de 6ème qui sont externes et inscrits à l'UNSS.
                    </div>
                </div>`
            },
            {
                id: "w2-ex4",
                num: "N°4",
                title: "Repérage sur demi-droite graduée",
                statement: `<p>Placer sur la demi-droite graduée ci-dessous les points suivants :</p>
                <div class="math-formula" style="text-align: center;">
                    \\(A\\left(\\frac{3}{5}\\right)\\) &nbsp;,&nbsp; \\(B\\left(\\frac{7}{5}\\right)\\) &nbsp;,&nbsp; \\(C\\left(3 - \\frac{2}{5}\\right)\\) &nbsp;,&nbsp; \\(D\\left(\\frac{18}{5}\\right)\\)
                </div>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image015.png" alt="Demi-droite graduée" style="max-width: 100%; max-width: 450px;">
                </div>
                <p><em>Indiquez la position graduée décimale équivalente (en nombre de cinquièmes ou en nombre décimal) pour vérifier vos réponses.</em></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Demi-droite graduée</strong> : L'unité (entre 0 et 1) est partagée en un certain nombre de sous-graduations égales. Ici, l'unité est partagée en **5 parties égales** (chaque graduation représente \\(\\frac{1}{5}\\) d'unité ou \\(0,2\\)).</li>
                    <li>Pour placer une fraction de dénominateur 5, il suffit de compter le nombre de cinquièmes indiqué par le numérateur à partir de 0.</li>
                    <li>Pour \\(3 - \\frac{2}{5}\\), on part de la graduation 3 et on recule de 2 cinquièmes vers la gauche.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Chaque intervalle principal entre deux entiers (ex: de 0 à 1) contient 5 petits carreaux. Une graduation vaut donc \\(\\frac{1}{5}\\).</li>
                    <li>Pour \\(A\\left(\\frac{3}{5}\\right)\\), comptez 3 petites graduations à partir de 0.</li>
                    <li>Pour \\(B\\left(\\frac{7}{5}\\right)\\), comptez 7 petites graduations à partir de 0 (ou 2 de plus après 1).</li>
                    <li>Pour \\(C\\left(3 - \\frac{2}{5}\\right)\\), sachez que \\(3 = \\frac{15}{5}\\). Donc \\(3 - \\frac{2}{5} = \\frac{13}{5}\\) (13 graduations à partir de 0, ou 2 graduations à gauche de 3).</li>
                    <li>Pour \\(D\\left(\\frac{18}{5}\\right)\\), comptez 18 graduations depuis 0, soit 3 graduations après l'entier 3 (puisque \\(3 = \\frac{15}{5}\\)).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex4-A-val", label: "Position de A (en nombre de dixièmes, ex: 0.6)", placeholder: "Ex: 0.6" },
                    { id: "w2-ex4-B-val", label: "Position de B (décimal)", placeholder: "Ex: 1.4" },
                    { id: "w2-ex4-C-val", label: "Position de C (décimal)", placeholder: "Ex: 2.6" },
                    { id: "w2-ex4-D-val", label: "Position de D (décimal)", placeholder: "Ex: 3.6" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        L'unité est divisée en 5 graduations (donc chaque graduation vaut \\(1 \\div 5 = 0,2\\)).<br><br>
                        - **Point A** : \\(\\frac{3}{5} = 3 \\times 0,2 = 0,6\\). Placé à la <strong>\\(3^{\\text{e}}\\) graduation</strong> à droite de 0.<br>
                        - **Point B** : \\(\\frac{7}{5} = 7 \\times 0,2 = 1,4\\). Placé à la <strong>\\(7^{\\text{e}}\\) graduation</strong> à droite de 0 (ou 2 après le 1).<br>
                        - **Point C** : \\(3 - \\frac{2}{5} = 2,6\\) (ou \\(\\frac{13}{5}\\)). Placé à la <strong>\\(13^{\\text{e}}\\) graduation</strong> à droite de 0 (ou 2 avant le 3).<br>
                        - **Point D** : \\(\\frac{18}{5} = 18 \\times 0,2 = 3,6\\). Placé à la <strong>\\(18^{\\text{e}}\\) graduation</strong> à droite de 0 (ou 3 après le 3).
                    </div>
                </div>`
            },
            {
                id: "w2-ex5",
                num: "N°5",
                title: "Géométrie : Propriétés du cercle",
                statement: `<p>Tracer sur votre cahier la figure géométrique suivante et répondre aux questions :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    1. Tracer un cercle de centre \\(O\\) et de rayon \\(3\\text{ cm}\\).<br>
                    2. Marquer un point \\(A\\) sur ce cercle.<br>
                    3. Tracer la médiatrice \\((d)\\) du segment \\([OA]\\). Elle coupe le cercle en deux points \\(M\\) et \\(N\\).
                </div>
                <ol type="a">
                    <li>Comparer \\(OM\\) et \\(OA\\). Justifier.</li>
                    <li>Quelle est la nature du triangle \\(OMA\\) ? Justifier la réponse.</li>
                    <li>Quelle est la nature du quadrilatère \\(OMAN\\) ? Justifier la réponse.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Cercle</strong> : Tous les points situés sur le cercle sont à une distance du centre égale au rayon (si \\(M\\) est sur le cercle de centre \\(O\\) de rayon 3 cm, alors \\(OM = 3\\text{ cm}\\)).</li>
                    <li><strong>Médiatrice</strong> : La médiatrice d'un segment \\([OA]\\) est l'ensemble des points équidistants des extrémités \\(O\\) et \\(A\\). Si \\(M\\) est sur cette médiatrice, alors \\(MO = MA\\).</li>
                    <li><strong>Triangle équilatéral</strong> : Triangle ayant ses 3 côtés égaux.</li>
                    <li><strong>Losange</strong> : Quadrilatère ayant ses 4 côtés égaux.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour a), comparez les longueurs en les ramenant au rayon du cercle. \\(O\\) est le centre et \\(A\\) et \\(M\\) sont sur le cercle. Donc \\(OM = \\dots\\) et \\(OA = \\dots\\).</li>
                    <li>Pour b), combinez le résultat de a) et la propriété de la médiatrice : comme \\(M\\) est sur la médiatrice de \\([OA]\\), on a \\(MO = MA\\). Donc \\(OM = OA = MA\\).</li>
                    <li>Pour c), montrez que la même propriété s'applique pour le point \\(N\\) situé lui aussi sur la médiatrice et sur le cercle.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex5-a", label: "a) Relation entre OM et OA (ex: OM = OA)", placeholder: "Ex: OM = OA" },
                    { id: "w2-ex5-b", label: "b) Nature de OMA", placeholder: "Ex: triangle équilatéral" },
                    { id: "w2-ex5-c", label: "c) Nature de OMAN", placeholder: "Ex: losange" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Comparaison de OM et OA :</strong><br>
                        - \\(O\\) est le centre du cercle et \\(A\\) est un point du cercle, donc \\(OA = 3\\text{ cm}\\) (rayon).<br>
                        - \\(M\\) est également un point du cercle, donc \\(OM = 3\\text{ cm}\\) (rayon).<br>
                        On en déduit que <strong>\\(OM = OA = 3\\text{ cm}\\)</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Nature du triangle OMA :</strong><br>
                        - On sait déjà que \\(OM = OA\\).<br>
                        - De plus, le point \\(M\\) appartient à la médiatrice du segment \\([OA]\\). Or, tout point de la médiatrice d'un segment est équidistant de ses extrémités, donc \\(MO = MA\\).<br>
                        - Par conséquent, \\(OM = OA = MA = 3\\text{ cm}\\).<br>
                        Le triangle \\(OMA\\) a ses trois côtés égaux, c'est donc un <strong>triangle équilatéral</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>c) Nature du quadrilatère OMAN :</strong><br>
                        - Le point \\(N\\) est également sur la médiatrice de \\([OA]\\), donc \\(NO = NA\\).<br>
                        - Le point \\(N\\) est sur le cercle, donc \\(ON = 3\\text{ cm}\\) (rayon). Ainsi \\(ON = NA = OA = 3\\text{ cm}\\).<br>
                        - On a donc \\(OM = MA = AN = NO = 3\\text{ cm}\\).<br>
                        Le quadrilatère \\(OMAN\\) possède ses quatre côtés égaux. C'est donc un <strong>losange</strong>.
                    </div>
                </div>`
            },
            {
                id: "w2-ex6",
                num: "N°6",
                title: "Démonstrations géométriques (Médiatrices)",
                statement: `<p>Tracer la figure et résoudre l'exercice de géométrie sur votre cahier :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Tracer un segment \\([AB]\\) de longueur 6 cm puis tracer \\((d)\\) sa médiatrice. Elle le coupe en \\(I\\).<br>
                    <strong>1)</strong> Calculer \\(IA\\).<br>
                    <strong>2)</strong> Placer \\(E\\) sur \\([AB)\\) tel que \\(AE = 9\\text{ cm}\\). Calculer \\(BE\\).<br>
                    <strong>3)</strong> Démontrer que \\(B\\) est le milieu de \\([IE]\\).<br>
                    <strong>4)</strong> Placer le point \\(K\\) tel que \\(E\\) soit le milieu de \\([BK]\\). Calculer \\(BK\\).<br>
                    <strong>5)</strong> Calculer \\(IK\\).<br>
                    <strong>6)</strong> Tracer \\((d_1)\\) la parallèle à \\((d)\\) passant par \\(B\\). Démontrer que \\((d_1)\\) est la médiatrice de \\([IE]\\).<br>
                    <strong>7)</strong> Tracer \\((d_2)\\) la perpendiculaire à \\((AB)\\) passant par \\(A\\). Montrer que \\((d_2)\\) est parallèle à \\((d)\\).
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Médiatrice d'un segment</strong> : Droite perpendiculaire au segment en son milieu.</li>
                    <li><strong>Propriétés des droites parallèles/perpendiculaires</strong> :
                        <ul>
                            <li>Si deux droites sont perpendiculaires à une même troisième, alors elles sont parallèles entre elles.</li>
                            <li>Si deux droites sont parallèles, toute perpendiculaire à l'une est perpendiculaire à l'autre.</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour 1), \\(I\\) est le milieu de \\([AB]\\) (médiatrice), donc \\(IA = AB \\div 2\\).</li>
                    <li>Pour 2), \\(E\\) est placé sur la demi-droite d'origine \\(A\\) passant par \\(B\\). Comme \\(AE = 9\\text{ cm}\\) et \\(AB = 6\\text{ cm}\\), \\(BE = AE - AB\\).</li>
                    <li>Pour 3), calculez la longueur \\(IB\\) (milieu de 6 cm) et comparez-la à \\(BE\\). Si \\(IB = BE\\) et que les points sont alignés dans l'ordre \\(I, B, E\\), alors \\(B\\) est le milieu.</li>
                    <li>Pour 6), rappelez-vous que \\((d)\\) est perpendiculaire à \\((AB)\\) (donc à \\((IE)\\)). Comme \\((d_1)\\) est parallèle à \\((d)\\), elle est aussi perpendiculaire à \\((IE)\\). Et elle passe par \\(B\\) qui est le milieu de \\([IE]\\).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex6-1", label: "1) Longueur IA (cm)", placeholder: "Ex: 3" },
                    { id: "w2-ex6-2", label: "2) Longueur BE (cm)", placeholder: "Ex: 3" },
                    { id: "w2-ex6-4", label: "4) Longueur BK (cm)", placeholder: "Ex: 6" },
                    { id: "w2-ex6-5", label: "5) Longueur IK (cm)", placeholder: "Ex: 9" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Calcul de IA :</strong><br>
                        La droite \\((d)\\) est la médiatrice de \\([AB]\\), elle coupe donc \\([AB]\\) en son milieu \\(I\\).<br>
                        \\( IA = AB \\div 2 = 6 \\div 2 = 3\\text{ cm}\\).
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul de BE :</strong><br>
                        Les points \\(A, B, E\\) sont alignés sur la demi-droite \\([AB)\\) dans cet ordre car \\(AE = 9\\text{ cm} > AB = 6\\text{ cm}\\).<br>
                        \\( BE = AE - AB = 9 - 6 = 3\\text{ cm}\\).
                    </div>
                    <div class="correction-step">
                        <strong>3) B milieu de [IE] :</strong><br>
                        - On a \\(IB = AB - IA = 6 - 3 = 3\\text{ cm}\\).<br>
                        - On a \\(BE = 3\\text{ cm}\\) d'après la question précédente. Donc \\(IB = BE = 3\\text{ cm}\\).<br>
                        Comme les points \\(I, B, E\\) sont alignés dans cet ordre, <strong>\\(B\\) est le milieu de \\([IE]\\)</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>4) Calcul de BK :</strong><br>
                        \\(E\\) est le milieu de \\([BK]\\), donc \\(BK = 2 \\times BE\\). Comme \\(BE = 3\\text{ cm}\\) (car \\(E\\) est après \\(B\\) et \\(BE = AE - AB = 3\\)), on a :<br>
                        \\( BE = 3\\text{ cm}\\) donc \\(BK = 2 \\times 3 = 6\\text{ cm}\\) (avec \\(E\\) au milieu, \\(BE = EK = 3\\text{ cm}\\)).
                    </div>
                    <div class="correction-step">
                        <strong>5) Calcul de IK :</strong><br>
                        Les points \\(I, B, E, K\\) sont alignés dans cet ordre.<br>
                        \\( IK = IB + BK = 3 + 6 = 9\\text{ cm}\\).
                    </div>
                    <div class="correction-step">
                        <strong>6) Démontrer que (d1) est la médiatrice de [IE] :</strong><br>
                        - Par définition, la médiatrice \\((d)\\) est perpendiculaire à \\((AB)\\). Donc \\((d) \\perp (IE)\\).<br>
                        - On sait que \\((d_1)\\) est parallèle à \\((d)\\). Or, si deux droites sont parallèles, toute perpendiculaire à l'une est perpendiculaire à l'autre, donc \\((d_1) \\perp (IE)\\).<br>
                        - De plus, \\((d_1)\\) passe par \\(B\\) qui est le milieu de \\([IE]\\) (démontré au 3).<br>
                        - Par conséquent, \\((d_1)\\) est perpendiculaire à \\([IE]\\) en son milieu : c'est la <strong>médiatrice de \\([IE]\\)</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>7) Démontrer que (d2) est parallèle à (d) :</strong><br>
                        - \\((d)\\) est la médiatrice de \\([AB]\\), donc \\((d) \\perp (AB)\\).<br>
                        - Par construction, \\((d_2)\\) est perpendiculaire à \\((AB)\\) en \\(A\\), donc \\((d_2) \\perp (AB)\\).<br>
                        - Or, si deux droites sont perpendiculaires à une même troisième droite (ici \\((AB)\\)), alors elles sont parallèles entre elles.<br>
                        - Donc, <strong>\\((d_2)\\) est parallèle à \\((d)\\)</strong>.
                    </div>
                </div>`
            },
            {
                id: "w2-ex7",
                num: "N°7",
                title: "Propriétés des opérations (Calcul astucieux)",
                statement: `<p>Calculer les expressions suivantes de manière astucieuse en montrant les regroupements :</p>
                <div class="math-formula">
                    \\(A = 4 \\times 9 \\times 0,25\\)<br>
                    \\(B = 0,5 \\times 1,72 \\times 100 \\times 2\\)<br>
                    \\(C = 40 \\times 4,57 \\times 10 \\times 0,25\\)<br>
                    \\(D = 230 + 125 + 470 + 75\\)<br>
                    \\(E = 9,72 + 17 + 0,28 + 62\\)<br>
                    \\(F = 32,7 + 14,2 + 7,3 + 23,8\\)
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Dans une suite d'additions ou de multiplications, on peut changer l'ordre des termes (commutativité) et les regrouper (associativité) pour faciliter le calcul mental.</li>
                    <li><strong>Regroupements utiles (produits)</strong> :
                        <ul>
                            <li>\\(4 \\times 0,25 = 1\\)</li>
                            <li>\\(2 \\times 0,5 = 1\\)</li>
                            <li>\\(10 \\times 40 \\times 0,25 = 400 \\times 0,25 = 100\\) (ou \\(40 \\times 0,25 = 10\\))</li>
                        </ul>
                    </li>
                    <li><strong>Regroupements utiles (sommes)</strong> : Regrouper les nombres dont la somme des parties décimales fait un entier (ex: \\(9,72 + 0,28 = 10\\)) ou les dizaines complémentaires (ex: \\(230 + 470 = 700\\)).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour A, calculez d'abord \\(4 \\times 0,25\\).</li>
                    <li>Pour B, regroupez \\(0,5 \\times 2\\) et \\(1,72 \\times 100\\).</li>
                    <li>Pour D, associez \\(230 + 470\\) et \\(125 + 75\\).</li>
                    <li>Pour E, associez \\(9,72 + 0,28\\) et \\(17 + 62\\).</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex7-A", label: "A = ", placeholder: "Ex: 9" },
                    { id: "w2-ex7-B", label: "B = ", placeholder: "Ex: 172" },
                    { id: "w2-ex7-C", label: "C = ", placeholder: "Ex: 457" },
                    { id: "w2-ex7-D", label: "D = ", placeholder: "Ex: 900" },
                    { id: "w2-ex7-E", label: "E = ", placeholder: "Ex: 89" },
                    { id: "w2-ex7-F", label: "F = ", placeholder: "Ex: 78" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>A :</strong> \\(4 \\times 9 \\times 0,25 = (4 \\times 0,25) \\times 9 = 1 \\times 9 = <strong>9</strong>\\).
                    </div>
                    <div class="correction-step">
                        - <strong>B :</strong> \\(0,5 \\times 1,72 \\times 100 \\times 2 = (0,5 \\times 2) \\times (1,72 \\times 100) = 1 \\times 172 = <strong>172</strong>\\).
                    </div>
                    <div class="correction-step">
                        - <strong>C :</strong> \\(40 \\times 4,57 \\times 10 \\times 0,25 = (40 \\times 0,25) \\times 10 \\times 4,57 = 10 \\times 10 \\times 4,57 = 100 \\times 4,57 = <strong>457</strong>\\).
                    </div>
                    <div class="correction-step">
                        - <strong>D :</strong> \\(230 + 125 + 470 + 75 = (230 + 470) + (125 + 75) = 700 + 200 = <strong>900</strong>\\).
                    </div>
                    <div class="correction-step">
                        - <strong>E :</strong> \\(9,72 + 17 + 0,28 + 62 = (9,72 + 0,28) + (17 + 62) = 10 + 79 = <strong>89</strong>\\).
                    </div>
                    <div class="correction-step">
                        - <strong>F :</strong> \\(32,7 + 14,2 + 7,3 + 23,8 = (32,7 + 7,3) + (14,2 + 23,8) = 40 + 38 = <strong>78</strong>\\).
                    </div>
                </div>`
            },
            {
                id: "w2-ex8",
                num: "N°8",
                title: "Calculs de durées (Promenade en vélo)",
                statement: `<p>Résoudre le problème de durée en posant les soustractions ou additions nécessaires :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Deux cyclistes sont partis ensemble en promenade à <strong>8 h 25</strong>.<br>
                    - Le premier cycliste revient à <strong>10 h 59</strong>.<br>
                    - Le second cycliste revient à <strong>11 h 13</strong>.<br><br>
                    <strong>a)</strong> Calculer le temps mis par chacun d'eux pour effectuer la promenade.<br>
                    <strong>b)</strong> Calculer le temps cumulé (total) passé par les deux cyclistes.
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>1 heure = 60 minutes.</li>
                    <li><strong>Calculer une durée</strong> : Soustraire l'heure de départ à l'heure d'arrivée. \\(\\text{Durée} = \\text{Heure d'arrivée} - \\text{Heure de départ}\\).</li>
                    <li>Si la soustraction des minutes est impossible (ex: minutes d'arrivée < minutes de départ), on convertit 1 heure en 60 minutes et on l'ajoute aux minutes de l'heure d'arrivée (ex: 11 h 13 = 10 h 73).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour le cycliste 1 : calculez \\(10\\text{ h } 59\\text{ min} - 8\\text{ h } 25\\text{ min}\\). La soustraction se fait directement.</li>
                    <li>Pour le cycliste 2 : calculez \\(11\\text{ h } 13\\text{ min} - 8\\text{ h } 25\\text{ min}\\). Comme \\(13 < 25\\), écrivez \\(11\\text{ h } 13\\text{ min}\\) sous la forme \\(10\\text{ h } 73\\text{ min}\\) avant de soustraire.</li>
                    <li>Pour b), additionnez les deux durées obtenues et simplifiez si le nombre de minutes dépasse 60.</li>
                </ul>`,
                inputs: [
                    { id: "w2-ex8-c1", label: "Durée du cycliste 1 (ex: 2h34)", placeholder: "Ex: 2h34" },
                    { id: "w2-ex8-c2", label: "Durée du cycliste 2 (ex: 2h48)", placeholder: "Ex: 2h48" },
                    { id: "w2-ex8-total", label: "Temps total cumulé (ex: 5h22)", placeholder: "Ex: 5h22" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Durée de chaque cycliste :</strong><br>
                        - **Cycliste 1** :<br>
                        \\( 10\\text{ h } 59\\text{ min} - 8\\text{ h } 25\\text{ min} = \\mathbf{2\\text{ h } 34\\text{ min}} \\).<br><br>
                        - **Cycliste 2** :<br>
                        On veut effectuer \\( 11\\text{ h } 13\\text{ min} - 8\\text{ h } 25\\text{ min} \\).<br>
                        Comme \\(13 < 25\\), on emprunte 1 heure (soit 60 minutes) à 11 h, ce qui donne \\(10\\text{ h } 73\\text{ min}\\) :<br>
                        \\( 10\\text{ h } 73\\text{ min} - 8\\text{ h } 25\\text{ min} = \\mathbf{2\\text{ h } 48\\text{ min}} \\).
                    </div>
                    <div class="correction-step">
                        <strong>b) Temps total cumulé :</strong><br>
                        Faisons la somme des deux durées :<br>
                        \\( 2\\text{ h } 34\\text{ min} + 2\\text{ h } 48\\text{ min} = 4\\text{ h } 82\\text{ min} \\).<br>
                        Comme \\(82\\text{ min} = 1\\text{ h } 22\\text{ min}\\), la somme simplifiée vaut :<br>
                        \\( 4\\text{ h } + 1\\text{ h } 22\\text{ min} = \\mathbf{5\\text{ h } 22\\text{ min}} \\).<br>
                        Le temps total mis par les deux cyclistes est de <strong>5 h 22 min</strong>.
                    </div>
                </div>`
            },
            {
                id: "w2-puzzle",
                num: "Énigme",
                title: "Énigme des fruits (Système visuel)",
                statement: `<p>Trouver la valeur de chaque fruit sur la balance ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image016.png" alt="Équations de fruits : Pomme, Banane, Noix de coco" style="max-width: 100%; max-width: 480px;">
                </div>
                <p>Déterminer la valeur numérique associée à chaque symbole :</p>
                <ul>
                    <li>Une pomme</li>
                    <li>Une banane (Attention au nombre de bananes par régime !)</li>
                    <li>Une noix de coco (Attention au nombre de morceaux !)</li>
                </ul>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Dans ce type d'énigme logique, chaque ligne donne une équation mathématique simple.</li>
                    <li>Faites attention aux petits détails visuels de la dernière ligne (par exemple, le nombre de bananes dans le régime ou les moitiés de noix de coco).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Ligne 1 : 3 pommes = 30 &rarr; 1 pomme = 10.</li>
                    <li>Ligne 2 : 1 pomme (10) + 2 régimes de bananes (contenant 4 bananes chacun) = 18. Donc les 2 régimes valent 8, soit 1 régime de 4 bananes = 4 (chaque banane vaut 1).</li>
                    <li>Ligne 3 : 1 régime de 4 bananes (4) - 1 noix de coco entière (2 moitiés) = 2. Donc la noix de coco entière vaut 2 (chaque moitié vaut 1).</li>
                    <li>Ligne 4 (Dernière) : Une moitié de noix de coco (1) + Une pomme (10) × Un régime de 3 bananes (3) = ... (N'oubliez pas que la multiplication est prioritaire sur l'addition !).</li>
                </ul>`,
                inputs: [
                    { id: "w2-puzzle-pomme", label: "Valeur d'une Pomme", placeholder: "Ex: 10" },
                    { id: "w2-puzzle-banane", label: "Valeur du régime final de 3 bananes", placeholder: "Ex: 3" },
                    { id: "w2-puzzle-coco", label: "Valeur d'une moitié de noix de coco", placeholder: "Ex: 1" },
                    { id: "w2-puzzle-final", label: "Résultat final (Coco + Pomme × Banane)", placeholder: "Ex: 31" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        En résolvant le système d'équations visuel :<br>
                        - **Ligne 1** : \\(3 \\times \\text{Pomme} = 30\\) &rArr; **Pomme = 10**.<br>
                        - **Ligne 2** : \\(10 + 2 \\times \\text{Régime de 4 bananes} = 18\\) &rArr; Régime de 4 bananes = 4 (donc **1 banane = 1**).<br>
                        - **Ligne 3** : \\(4 - \\text{Noix de coco entière} = 2\\) &rArr; Noix de coco entière = 2 (donc **1 demi-coco = 1**).<br>
                        - **Ligne 4** : \\(1 \\text{ demi-coco} + 1 \\text{ Pomme} \\times 3 \\text{ bananes}\\).<br>
                        En respectant les priorités opératoires (multiplication d'abord) :<br>
                        \\( 1 + 10 \\times 3 = 1 + 30 = 31 \\).<br><br>
                        Le résultat final de l'énigme est <strong>31</strong>.
                    </div>
                </div>`
            }
        ]
    },
    "w3": {
        title: "Semaine 3 : Opérations de fractions, pourcentages et proportionnalité",
        exercises: [
            {
                id: "w3-ex1",
                num: "N°1",
                title: "Somme et différence de fractions",
                statement: `<p>Effectuer les calculs suivants et donner le résultat sous la forme d'une fraction irréductible :</p>
                <div class="math-formula">
                    \\[ A = \\frac{3}{2} + \\frac{5}{10} \\qquad B = \\frac{4}{3} + 1 \\qquad C = \\frac{1}{4} + \\frac{1}{2} + 3 \\]
                    \\[ D = \\frac{15}{32} - \\frac{2}{16} \\qquad E = 1 - \\frac{7}{8} \\qquad F = \\frac{45}{14} - \\frac{4}{7} \\]
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Pour additionner ou soustraire deux fractions, on doit **obligatoirement les réduire au même dénominateur**.</li>
                    <li>Pour un nombre entier, on le place sur 1 (ex: \\(3 = \\frac{3}{1}\\) ou \\(1 = \\frac{8}{8}\\)).</li>
                    <li>N'oubliez pas de **simplifier** la fraction obtenue à la fin pour la rendre irréductible.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour A, remarquez que \\(\\frac{5}{10} = \\frac{1}{2}\\). Le calcul devient alors très simple.</li>
                    <li>Pour C, le dénominateur commun pour 4, 2 et 1 est 4.</li>
                    <li>Pour D, mettez \\(\\frac{2}{16}\\) sur 32 en multipliant le numérateur et le dénominateur par 2.</li>
                    <li>Pour E, écrivez \\(1 = \\frac{8}{8}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex1-A", label: "A = ", placeholder: "Ex: 2" },
                    { id: "w3-ex1-B", label: "B = ", placeholder: "Ex: 7/3" },
                    { id: "w3-ex1-C", label: "C = ", placeholder: "Ex: 15/4" },
                    { id: "w3-ex1-D", label: "D = ", placeholder: "Ex: 11/32" },
                    { id: "w3-ex1-E", label: "E = ", placeholder: "Ex: 1/8" },
                    { id: "w3-ex1-F", label: "F = ", placeholder: "Ex: 37/14" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>Calcul de A :</strong><br>
                        \\( A = \\frac{3}{2} + \\frac{5}{10} = \\frac{3}{2} + \\frac{1}{2} = \\frac{4}{2} = <strong>2</strong> \\).
                    </div>
                    <div class="correction-step">
                        - <strong>Calcul de B :</strong><br>
                        \\( B = \\frac{4}{3} + \\frac{3}{3} = \\frac{4 + 3}{3} = <strong>\\frac{7}{3}</strong> \\).
                    </div>
                    <div class="correction-step">
                        - <strong>Calcul de C :</strong><br>
                        Le dénominateur commun est 4 :<br>
                        \\( C = \\frac{1}{4} + \\frac{1 \\times 2}{2 \\times 2} + \\frac{3 \\times 4}{1 \\times 4} = \\frac{1}{4} + \\frac{2}{4} + \\frac{12}{4} = \\frac{1 + 2 + 12}{4} = <strong>\\frac{15}{4}</strong> \\).
                    </div>
                    <div class="correction-step">
                        - <strong>Calcul de D :</strong><br>
                        \\( D = \\frac{15}{32} - \\frac{2 \\times 2}{16 \\times 2} = \\frac{15}{32} - \\frac{4}{32} = <strong>\\frac{11}{32}</strong> \\).
                    </div>
                    <div class="correction-step">
                        - <strong>Calcul de E :</strong><br>
                        \\( E = \\frac{8}{8} - \\frac{7}{8} = <strong>\\frac{1}{8}</strong> \\).
                    </div>
                    <div class="correction-step">
                        - <strong>Calcul de F :</strong><br>
                        \\( F = \\frac{45}{14} - \\frac{4 \\times 2}{7 \\times 2} = \\frac{45}{14} - \\frac{8}{14} = <strong>\\frac{37}{14}</strong> \\) (37 est un nombre premier, fraction irréductible).
                    </div>
                </div>`
            },
            {
                id: "w3-ex2",
                num: "N°2",
                title: "Problème : Fraction de quantité (Lectures de romans)",
                statement: `<p>Résoudre le problème suivant en justifiant par des calculs :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    \\(240\\) élèves de sixième ont été interrogés sur le nombre de romans qu'ils lisent par mois :<br>
                    - \\(\\frac{1}{6}\\) des élèves lit trois romans ou plus.<br>
                    - \\(25\\ \\%\\) des élèves lisent deux romans.<br>
                    - \\(\\frac{5}{12}\\) des élèves lisent un roman.<br>
                    - Le reste des élèves ne lit pas de romans.<br><br>
                    <strong>Calculer le nombre d'élèves pour chaque catégorie.</strong>
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Pour calculer une fraction décimale ou simple d'une quantité \\(N\\) :
                        <ul>
                            <li>Prendre \\(\\frac{1}{6}\\) de \\(N\\) &rarr; faire \\(N \\div 6\\).</li>
                            <li>Prendre \\(25\\%\\) de \\(N\\) &rarr; calculer le quart de \\(N\\) (diviser par 4) ou faire \\(N \\times 0,25\\).</li>
                            <li>Prendre \\(\\frac{5}{12}\\) de \\(N\\) &rarr; faire \\((N \\div 12) \\times 5\\).</li>
                        </ul>
                    </li>
                    <li>Pour trouver le reste, soustraire la somme des trois premières catégories au total de départ.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Catégorie 1 (3 romans ou +) : divisez 240 par 6.</li>
                    <li>Catégorie 2 (2 romans) : divisez 240 par 4 (car \\(25\\%\\) correspond à un quart).</li>
                    <li>Catégorie 3 (1 roman) : calculez \\(240 \\div 12 = 20\\), puis multipliez par 5.</li>
                    <li>Catégorie 4 (Aucun roman) : faites \\(240 - \\text{(somme des trois résultats précédents)}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex2-cat1", label: "Nombre d'élèves lisant 3 romans ou + (1/6)", placeholder: "Ex: 40" },
                    { id: "w3-ex2-cat2", label: "Nombre d'élèves lisant 2 romans (25%)", placeholder: "Ex: 60" },
                    { id: "w3-ex2-cat3", label: "Nombre d'élèves lisant 1 roman (5/12)", placeholder: "Ex: 100" },
                    { id: "w3-ex2-cat4", label: "Nombre d'élèves ne lisant aucun roman", placeholder: "Ex: 40" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>Trois romans ou plus :</strong><br>
                        \\( 240 \\times \\frac{1}{6} = \\frac{240}{6} = 40\\) élèves.
                    </div>
                    <div class="correction-step">
                        - <strong>Deux romans (25%) :</strong><br>
                        \\( 25\\% \\text{ de } 240 = 240 \\times 0,25 = \\frac{240}{4} = 60\\) élèves.
                    </div>
                    <div class="correction-step">
                        - <strong>Un roman :</strong><br>
                        \\( 240 \\times \\frac{5}{12} = (240 \\div 12) \\times 5 = 20 \\times 5 = 100\\) élèves.
                    </div>
                    <div class="correction-step">
                        - <strong>Aucun roman (le reste) :</strong><br>
                        La somme des élèves lecteurs est : \\( 40 + 60 + 100 = 200\\) élèves.<br>
                        Le nombre d'élèves ne lisant pas de romans est : \\( 240 - 200 = 40\\) élèves.
                    </div>
                </div>`
            },
            {
                id: "w3-ex3",
                num: "N°3",
                title: "Calcul de pourcentage (Atelier Théâtre)",
                statement: `<p>Résoudre le problème suivant :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Dans une classe de 6ème de \\(20\\) élèves, \\(45\\ \\%\\) participent à l'atelier théâtre.<br><br>
                    <strong>Combien d'élèves de cette classe font partie de l'atelier théâtre ?</strong>
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Pour appliquer un pourcentage de \\(p\\ \\%\\) sur une valeur \\(V\\), on effectue le calcul : \\[ V \\times \\frac{p}{100} \\]</li>
                    <li>Pour simplifier mentalement, on peut faire \\(V \\div 100\\) puis multiplier par \\(p\\), ou faire \\(V \\times p\\) puis diviser par 100.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Le calcul est : \\(20 \\times \\frac{45}{100}\\).</li>
                    <li>Vous pouvez d'abord calculer \\(20 \\times 45\\). C'est le double de 450, donc \\(900\\). Divisez ensuite par 100.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex3-theatre", label: "Nombre d'élèves inscrits au théâtre", placeholder: "Ex: 9" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        Appliquons le pourcentage de 45% sur les 20 élèves de la classe :<br>
                        \\( \\text{Nombre d'élèves} = 20 \\times \\frac{45}{100} = \\frac{20 \\times 45}{100} = \\frac{900}{100} = 9 \\).<br><br>
                        Il y a donc <strong>9</strong> élèves de la classe de 6ème inscrits à l'atelier théâtre.
                    </div>
                </div>`
            },
            {
                id: "w3-ex4",
                num: "N°4",
                title: "Reconnaître la proportionnalité",
                statement: `<p>Laurence a pesé les pommes de son verger par paquet. Voici ses résultats (représentés dans l'image ci-dessous) :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image021.png" alt="Tableau de correspondance : Nombre de pommes vs Masse en kg" style="max-width: 100%; max-width: 380px;">
                </div>
                <p><strong>Le nombre de pommes est-il proportionnel à la masse ? Justifier la réponse.</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Deux grandeurs sont proportionnelles si on peut passer de l'une à l'autre en multipliant (ou divisant) toujours par un même nombre, appelé le **coefficient de proportionnalité**.</li>
                    <li>Pour vérifier la proportionnalité dans un tableau, on calcule les quotients des valeurs correspondantes de chaque colonne : \\[ \\frac{\\text{Valeur de la ligne 2}}{\\text{Valeur de la ligne 1}} \\]</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Calculez la masse par pomme (ou le nombre de pommes par kg) pour chaque colonne :
                        <ul>
                            <li>Colonne 1 : \\(1250 \\div 5 = \\dots\\)</li>
                            <li>Colonne 2 : \\(1300 \\div 6 = \\dots\\)</li>
                            
                        </ul>
                    </li>
                    <li>Si tous ces quotients sont égaux, alors les grandeurs sont proportionnelles.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex4-prop", label: "Est-ce proportionnel ? (Oui / Non)", placeholder: "Ex: Oui" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        Calculons le coefficient de proportionnalité (nombre de pommes pour 1 kg) pour chaque colonne du tableau :<br>
                        - Colonne 1 : \\(\\frac{1250}{5} = 250\\) pommes par kg.<br>
                        - Colonne 2 : \\(\\frac{1300}{6} = 216,16...\\) pommes par kg.<br>
                       
                        Puisque les deux premiers rapports ne sont pas égaux.<br>
                        Les deux grandeurs ne sont donc pas <strong>proportionnelles</strong>. 
                    </div>
                </div>`
            },
            {
                id: "w3-ex5",
                num: "N°5",
                title: "Calculs d'angles et points alignés",
                statement: `<p>Résoudre l'exercice d'angles en vous servant du schéma géométrique ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image022.png" alt="Figure avec les angles FBE, EBD, DBC, etc." style="max-width: 100%; max-width: 250px;">
                </div>
                <p>Sur la figure, on donne :</p>
                <ul>
                    <li>L'angle droit \\(\\widehat{BAF} = 90^\\circ\\)</li>
                    <li>L'angle droit \\(\\widehat{BCD} = 90^\\circ\\)</li>
                    <li>L'angle \\(\\widehat{BEF} = 49^\\circ\\)</li>
                    <li>L'angle \\(\\widehat{EFB} = 97^\\circ\\)</li>
                    <li>L'angle \\(\\widehat{BDC} = 50^\\circ\\)</li>
                </ul>
                <p><strong>1)</strong> Déterminer la mesure des angles \\(\\widehat{FBE}\\) et \\(\\widehat{DBC}\\) en expliquant votre démarche.</p>
                <p><strong>2)</strong> En déduire la mesure de l'angle total \\(\\widehat{ABC}\\). Que peut-on dire des points A, B et C ?</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Angles d'un triangle</strong> : Dans n'importe quel triangle, la somme des mesures des trois angles est toujours égale à \\(180^\\circ\\).</li>
                    <li><strong>Angles complémentaires</strong> : Deux angles dont la somme des mesures est égale à \\(90^\\circ\\) (angle droit).</li>
                    <li><strong>Triangle isocèle rectangle</strong> : Un triangle rectangle qui a ses deux côtés de l'angle droit de même longueur. Ses deux angles aigus sont égaux et mesurent chacun \\(45^\\circ\\).</li>
                    <li><strong>Triangle équilatéral</strong> : Un triangle dont les trois côtés sont de même longueur. Ses trois angles sont égaux et mesurent chacun \\(60^\\circ\\).</li>
                    <li><strong>Points alignés</strong> : Les points A, B et C sont alignés si l'angle \\(\\widehat{ABC}\\) formé par ces points est un angle plat (égal à \\(180^\\circ\\)).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Pour l'angle \\(\\widehat{FBE}\\)</strong> : Regardez le triangle \\(BEF\\). La somme des angles d'un triangle vaut toujours \\(180^\\circ\\). Vous connaissez déjà \\(\\widehat{BEF} = 49^\\circ\\) et \\(\\widehat{EFB} = 97^\\circ\\).</li>
                    <li><strong>Pour l'angle \\(\\widehat{DBC}\\)</strong> : Regardez le triangle \\(BCD\\) qui est rectangle en \\(C\\) (\\(\\widehat{BCD} = 90^\\circ\\)). La somme des angles de ce triangle vaut aussi \\(180^\\circ\\), et vous connaissez \\(\\widehat{BDC} = 50^\\circ\\).</li>
                    <li><strong>Pour l'angle \\(\\widehat{ABF}\\)</strong> : Observez le triangle \\(ABF\\). Le codage indique qu'il est rectangle en \\(A\\) (\\(90^\\circ\\)) et que les côtés \\([AF]\\) et \\([AB]\\) sont de même longueur (simple trait). C'est donc un triangle rectangle isocèle ! Ses deux angles aigus (dont \\(\\widehat{ABF}\\)) sont donc égaux et mesurent \\(45^\\circ\\).</li>
                    <li><strong>Pour l'angle \\(\\widehat{EBD}\\)</strong> : Observez le triangle \\(BDE\\). Le codage montre que ses trois côtés sont de longueurs égales (double trait). C'est un triangle équilatéral, donc tous ses angles mesurent \\(60^\\circ\\).</li>
                    <li><strong>Pour l'angle total \\(\\widehat{ABC}\\)</strong> : Il est formé par les quatre angles adjacents autour du sommet \\(B\\) : \\(\\widehat{ABF}\\), \\(\\widehat{FBE}\\), \\(\\widehat{EBD}\\) et \\(\\widehat{DBC}\\). Calculez leur somme.</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex5-fbe", label: "Angle FBE (°)", placeholder: "Ex: 34" },
                    { id: "w3-ex5-dbc", label: "Angle DBC (°)", placeholder: "Ex: 40" },
                    { id: "w3-ex5-abc", label: "Angle total ABC (°)", placeholder: "Ex: 180" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>1) Calcul des angles \\(\\widehat{FBE}\\) et \\(\\widehat{DBC}\\) :</strong><br>
                        <ul>
                            <li>Dans le triangle \\(BEF\\), la somme des mesures des angles est égale à \\(180^\\circ\\).<br>
                            On a donc : \\(\\widehat{FBE} = 180^\\circ - (\\widehat{BEF} + \\widehat{EFB}) = 180^\\circ - (49^\\circ + 97^\\circ) = 180^\\circ - 146^\\circ = \\mathbf{34^\\circ}\\).</li>
                            <li>Dans le triangle \\(BCD\\) rectangle en \\(C\\), la somme des angles est égale à \\(180^\\circ\\) avec \\(\\widehat{BCD} = 90^\\circ\\).<br>
                            On a donc : \\(\\widehat{DBC} = 180^\\circ - (\\widehat{BCD} + \\widehat{BDC}) = 180^\\circ - (90^\\circ + 50^\\circ) = 180^\\circ - 140^\\circ = \\mathbf{40^\\circ}\\).</li>
                        </ul>
                    </div>
                    <div class="correction-step">
                        <strong>2) Calcul de l'angle total \\(\\widehat{ABC}\\) et alignement des points :</strong><br>
                        Pour calculer l'angle total \\(\\widehat{ABC}\\), nous devons additionner les quatre angles adjacents qui le composent : \\(\\widehat{ABF}\\), \\(\\widehat{FBE}\\), \\(\\widehat{EBD}\\) et \\(\\widehat{DBC}\\).<br>
                        Déterminons d'abord les angles manquants grâce au codage de la figure :<br>
                        <ul>
                            <li>Le triangle \\(ABF\\) est rectangle en \\(A\\) (\\(\\widehat{FAB} = 90^\\circ\\)). Les segments \\([AF]\\) et \\([AB]\\) portent le même codage (simple trait), donc ils sont de même longueur. Le triangle \\(ABF\\) est donc rectangle isocèle en \\(A\\). Ses deux angles aigus sont égaux :<br>
                            \\(\\widehat{ABF} = (180^\\circ - 90^\\circ) \\div 2 = \\mathbf{45^\\circ}\\).</li>
                            <li>Les segments \\([BE]\\), \\([BD]\\) et \\([ED]\\) portent le même codage (double trait), donc ils sont de même longueur. Le triangle \\(BDE\\) est donc un triangle équilatéral. Tous ses angles mesurent \\(60^\\circ\\) :<br>
                            \\(\\widehat{EBD} = \\mathbf{60^\\circ}\\).</li>
                        </ul>
                        Additionnons maintenant toutes les mesures :<br>
                        \\(\\widehat{ABC} = \\widehat{ABF} + \\widehat{FBE} + \\widehat{EBD} + \\widehat{DBC}\\)<br>
                        \\(\\widehat{ABC} = 45^\\circ + 34^\\circ + 60^\\circ + 40^\\circ = \\mathbf{179^\\circ}\\) (ou \\(\\mathbf{180^\\circ}\\) en théorie).<br><br>
                        <strong>Alignement :</strong><br>
                        La somme des mesures donne \\(179^\\circ\\), ce qui est différent de (\\(180^\\circ\\)). Par suite, les points A, B et C ne sont pas <strong> alignés </strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex6",
                num: "N°6",
                title: "Cercles sécants et losange",
                statement: `<p>Tracer la figure et résoudre le problème de géométrie sur votre cahier :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Tracer un segment \\([AC]\\) de longueur 8 cm puis les cercles \\((C)\\) et \\((C')\\) de centres respectifs \\(A\\) et \\(C\\) et de rayon 5 cm.<br>
                    On note \\(B\\) et \\(D\\) les points d’intersection des deux cercles.<br><br>
                    <strong>a)</strong> Justifier que les quatre côtés du quadrilatère \\(ABCD\\) mesurent 5 cm.<br>
                    <strong>b)</strong> En déduire la nature précise du quadrilatère \\(ABCD\\).
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Définition du cercle</strong> : Un cercle de centre \\(O\\) et de rayon \\(R\\) est l'ensemble de tous les points situés à la distance \\(R\\) du point \\(O\\). Si un point \\(M\\) appartient à ce cercle, alors \\(OM = R\\).</li>
                    <li><strong>Quadrilatère particulier</strong> : Si un quadrilatère a ses quatre côtés de même longueur, alors c'est un **losange**.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Les points \\(B\\) et \\(D\\) appartiennent tous les deux au cercle \\((C)\\) de centre \\(A\\) et de rayon 5 cm. Que peut-on en déduire pour les longueurs \\(AB\\) and \\(AD\\) ?</li>
                    <li>De même, \\(B\\) et \\(D\\) appartiennent au cercle \\((C')\\) de centre \\(C\\) et de rayon 5 cm. Que vaut \\(CB\\) and \\(CD\\) ?</li>
                    <li>Combinez ces résultats pour comparer les quatre longueurs \\(AB\\), \\(BC\\), \\(CD\\), \\(DA\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex6-nature", label: "Nature du quadrilatère ABCD", placeholder: "Ex: losange" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Justification de la longueur des côtés :</strong><br>
                        - Le point \\(B\\) appartient au cercle \\((C)\\) de centre \\(A\\) et de rayon 5 cm, donc \\(AB = 5\\text{ cm}\\).<br>
                        - Le point \\(D\\) appartient au cercle \\((C)\\) de centre \\(A\\) et de rayon 5 cm, donc \\(AD = 5\\text{ cm}\\).<br>
                        - Le point \\(B\\) appartient au cercle \\((C')\\) de centre \\(C\\) et de rayon 5 cm, donc \\(CB = 5\\text{ cm}\\).<br>
                        - Le point \\(D\\) appartient au cercle \\((C')\\) de centre \\(C\\) et de rayon 5 cm, donc \\(CD = 5\\text{ cm}\\).<br>
                        On a donc : <strong>\\(AB = BC = CD = DA = 5\\text{ cm}\\)</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Nature de ABCD :</strong><br>
                        Le quadrilatère \\(ABCD\\) possède quatre côtés de même longueur (5 cm).<br>
                        C'est donc un <strong>losange</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-ex7",
                num: "N°7",
                title: "Calcul de périmètre et conversions",
                statement: `<p>Résoudre l'exercice de calcul de périmètre à l'aide de la figure suivante :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image026.png" alt="Figure géométrique complexe pour calcul de périmètre" style="max-width: 100%; max-width: 320px;">
                </div>
                <p>La figure comporte un carré central de côté \\(4\\text{ cm}\\), flanqué de deux quarts de cercles de rayon égal au côté du carré.</p>
                <p><strong>a)</strong> Calculer le périmètre de la figure en centimètres (\\(\\text{cm}\\)). Prendre \\(\\pi \\approx 3,14\\).</p>
                <p><strong>b)</strong> Convertir ce périmètre en hectomètres (\\(\\text{hm}\\)).</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Le périmètre d'une figure est la longueur de son contour extérieur.</li>
                    <li>La circonférence (périmètre) d'un cercle entier de rayon \\(R\\) est donnée par la formule : \\[ P = 2 \\times \\pi \\times R \\]</li>
                    <li>Un quart de cercle de rayon \\(R\\) a un arc de longueur égal à un quart de la circonférence d'un cercle complet : \\[ \\text{Longueur arc} = \\frac{2 \\times \\pi \\times R}{4} = \\frac{\\pi \\times R}{2} \\]</li>
                    <li><strong>Conversions de longueur</strong> :
                        <ul>
                            <li>Pour passer des centimètres (\\(\\text{cm}\\)) aux mètres (\\(\\text{m}\\)), on divise par 100.</li>
                            <li>Pour passer des centimètres (\\(\\text{cm}\\)) aux hectomètres (\\(\\text{hm}\\)), on divise par 10 000 (car \\(1\\text{ hm} = 100\\text{ m} = 10\\,000\\text{ cm}\\)).</li>
                        </ul>
                    </li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Étape 1 : Identifier le contour extérieur</strong>. Le périmètre de cette figure est composé de :
                        <ul>
                            <li>Deux segments rectilignes horizontaux en haut (chacun mesurant \\(4\\text{ cm}\\)).</li>
                            <li>Deux segments rectilignes horizontaux en bas (chacun mesurant \\(4\\text{ cm}\\)).</li>
                            <li>Deux arcs de cercle (chacun étant un quart de cercle de rayon \\(4\\text{ cm}\\)).</li>
                        </ul>
                        Notez bien que les lignes pointillées verticales sont à l'intérieur de la figure, elles ne comptent donc pas dans le périmètre extérieur !
                    </li>
                    <li><strong>Étape 2 : Calculer la longueur des deux arcs</strong>. Ensemble, deux quarts de cercle de rayon \\(4\\text{ cm}\\) forment un demi-cercle de rayon \\(4\\text{ cm}\\).<br>
                    La longueur cumulée de ces deux arcs est donc : \\(\\pi \\times R \\approx 3,14 \\times 4\\text{ cm}\\).
                    </li>
                    <li><strong>Étape 3 : Sommer le tout</strong>. Sommez les 4 segments droits (\\(4 + 4 + 4 + 4 = 16\\text{ cm}\\)) et les arcs courbes pour obtenir le périmètre en centimètres.</li>
                    <li><strong>Étape 4 : Convertir</strong>. Divisez le résultat en centimètres par 10 000 pour obtenir la mesure en hectomètres (\\(\\text{hm}\\)).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex7-cm", label: "Périmètre (en cm)", placeholder: "Ex: 28.56" },
                    { id: "w3-ex7-hm", label: "Périmètre (en hm)", placeholder: "Ex: 0.002856" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Calcul du périmètre de la figure en centimètres (cm) :</strong><br>
                        Le contour extérieur de la figure est constitué de :<br>
                        - 4 segments rectilignes de longueur \\(4\\text{ cm}\\) chacun (les segments horizontaux marqués d'un double codage) :<br>
                        \\( 4 \\times 4\\text{ cm} = 16\\text{ cm} \\).<br>
                        - 2 arcs de quart de cercle de rayon \\(R = 4\\text{ cm}\\). Ensemble, ces deux quarts de cercle forment un demi-cercle de rayon \\(4\\text{ cm}\\). La longueur de ces deux arcs est :<br>
                        \\( L_{\\text{arcs}} = 2 \\times \\left( \\frac{2 \\times \\pi \\times R}{4} \\right) = \\pi \\times R \\approx 3,14 \\times 4\\text{ cm} = 12,56\\text{ cm} \\).<br><br>
                        Le périmètre total \\(P\\) de la figure en centimètres est donc :<br>
                        \\( P = 16\\text{ cm} + 12,56\\text{ cm} = \\mathbf{28,56\\text{ cm}} \\).
                    </div>
                    <div class="correction-step">
                        <strong>b) Conversion du périmètre en hectomètres (hm) :</strong><br>
                        Comme \\(1\\text{ hm} = 100\\text{ m} = 10\\,000\\text{ cm}\\), pour convertir de centimètres (\\(\\text{cm}\\)) en hectomètres (\\(\\text{hm}\\)), on divise par \\(10\\,000\\) :<br>
                        \\( 28,56\\text{ cm} = 28,56 \\div 10\\,000 = \\mathbf{0,002856\\text{ hm}} \\).
                    </div>
                </div>`
            },
            {
                id: "w3-ex8",
                num: "N°8",
                title: "Échelle de réduction (La Tour Eiffel)",
                statement: `<p>Résoudre le problème d'échelle suivant :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    La Tour Eiffel mesure \\(324\\text{ m}\\) de haut.<br>
                    Louis affirme que s'il réalise une maquette à l'échelle **\\(\\frac{1}{100}\\)**, celle-ci ne dépassera pas \\(3\\text{ m}\\) de haut.<br><br>
                    <strong>Louis a-t-il raison ? Justifier par un calcul précis.</strong>
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Échelle</strong> : L'échelle est le rapport entre la dimension sur le plan (ou la maquette) et la dimension réelle, exprimées dans la même unité.</li>
                    <li>Calculer la hauteur sur la maquette : \\[ \\text{Hauteur maquette} = \\text{Hauteur réelle} \\times \\text{Échelle} \\]</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Calculez la hauteur de la maquette en mètres : \\(324 \\times \\frac{1}{100}\\).</li>
                    <li>Comparez cette valeur à \\(3\\text{ m}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w3-ex8-raison", label: "Louis a-t-il raison ? (Oui / Non)", placeholder: "Ex: Non" },
                    { id: "w3-ex8-val", label: "Hauteur de la maquette (m)", placeholder: "Ex: 3.24" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        Calculons la hauteur de la maquette de Louis :<br>
                        \\( H_{\\text{maquette}} = 324\\text{ m} \\times \\frac{1}{100} = \\frac{324}{100} = 3,24\\text{ m} \\).<br><br>
                        Comme \\(3,24\\text{ m} > 3\\text{ m}\\), la maquette dépassera bien 3 mètres de haut.<br>
                        Par conséquent, <strong>Louis a tort (il n'a pas raison)</strong>.
                    </div>
                </div>`
            },
            {
                id: "w3-puzzle",
                num: "Énigme",
                title: "Labyrinthe décimal décroissant",
                statement: `<p><strong>Aider l'explorateur à trouver le chemin de la sortie :</strong></p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Déterminer un chemin permettant d'aller de la case <strong>3</strong> à la case <strong>2,83</strong> dans le labyrinthe.<br>
                    <strong>Règle du chemin :</strong> Il faut passer d'une case à une autre adjacente à condition que le nombre suivant soit strictement **inférieur** au précédent (ordre décroissant).
                </div>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image027.png" alt="Grille du labyrinthe de nombres" style="max-width: 100%; max-width: 450px;">
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Comparaison de décimaux</strong> : Comparer d'abord la partie entière. En cas d'égalité, comparer le chiffre des dixièmes, puis des centièmes (ex: \\(2,9 > 2,85\\) car \\(9 > 8\\)).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Commencez à la case **3**. Les cases voisines contiennent par exemple \\(2,9\\), \\(3,1\\), etc. Comme vous devez descendre, vous pouvez aller vers \\(2,9\\) (car \\(2,9 < 3\\)).</li>
                    <li>Continuez ainsi de suite en cherchant à chaque fois un nombre plus petit parmi les cases adjacentes, jusqu'à atteindre la case de sortie **2,83**.</li>
                </ul>`,
                inputs: [
                    { id: "w3-puzzle-path", label: "Saisir la séquence de nombres (ex: 3 -> 2.95 -> 2.9 -> ... -> 2.83)", placeholder: "Ex: 3 -> 2.9 -> ..." }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        Le chemin correct qui descend du plus grand au plus petit de 3 à 2,83 est :<br>
                        <strong>3 &rarr; 2,9 &rarr; 2,89 &rarr; 2,88 &rarr; 2,87 &rarr; 2,86 &rarr; 2,85 &rarr; 2,84 &rarr; 2,83</strong>.<br>
                        Toutes les étapes respectent bien l'ordre strictement décroissant.
                    </div>
                </div>`
            }
        ]
    },
    "w4": {
        title: "Semaine 4 : Divisions, aires, volumes et synthèse",
        exercises: [
            {
                id: "w4-ex1",
                num: "N°1",
                title: "Divisions posées (quotient exact et approché)",
                statement: `<p>Poser et effectuer les divisions suivantes (sans calculatrice) :</p>
                <ol type="a">
                    <li>Poser la division de \\(528,1\\) par \\(13\\) et calculer le quotient au centième près par défaut.</li>
                    <li>Poser la division de \\(600,9\\) par \\(15\\) pour calculer le quotient exact.</li>
                </ol>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Division d'un nombre décimal</strong> : On commence par diviser la partie entière. Dès qu'on abaisse le chiffre des dixièmes (le premier chiffre après la virgule du dividende), on place la virgule au quotient.</li>
                    <li><strong>Quotient au centième près par défaut</strong> : Arrêter la division après avoir calculé 2 chiffres après la virgule.</li>
                    <li><strong>Quotient exact</strong> : Continuer la division jusqu'à ce que le reste soit égal à 0.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour \\(528,1 \\div 13\\) :
                        <ul>
                            <li>En 52 combien de fois 13 ? 4 fois (52). Reste 0.</li>
                            <li>Abaissez le 8. En 8 combien de fois 13 ? 0 fois. Reste 8.</li>
                            <li>Placez la virgule au quotient car on abaisse le 1 décimal. En 81 combien de fois 13 ?...</li>
                        </ul>
                    </li>
                    <li>Pour \\(600,9 \\div 15\\) : divisez normalement et ajoutez des zéros à la fin du dividende si nécessaire pour finir la division avec un reste nul (ex: \\(600,90\\)).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex1-a", label: "a) Quotient de 528,1 par 13 (au centième près)", placeholder: "Ex: 40.62" },
                    { id: "w4-ex1-b", label: "b) Quotient exact de 600,9 par 15", placeholder: "Ex: 40.06" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Division de \\(528,1\\) par 13 :</strong><br>
                        - \\(52 \\div 13 = 4\\), reste \\(0\\).<br>
                        - On abaisse le \\(8\\) : \\(8 \\div 13 = 0\\), reste \\(8\\).<br>
                        - On abaisse le \\(1\\) et on place la virgule : \\(81 \\div 13 = 6\\) (car \\(6 \\times 13 = 78\\)), reste \\(3\\).<br>
                        - On ajoute un zéro : \\(30 \\div 13 = 2\\) (car \\(2 \\times 13 = 26\\)), reste \\(4\\).<br>
                        Le quotient au centième près par défaut est de <strong>40,62</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Division de \\(600,9\\) par 15 :</strong><br>
                        - \\(60 \\div 15 = 4\\), reste \\(0\\).<br>
                        - On abaisse le \\(0\\) : \\(0 \\div 15 = 0\\), reste \\(0\\).<br>
                        - On abaisse le \\(9\\) (partie décimale, on place la virgule) : \\(9 \\div 15 = 0\\), reste \\(9\\).<br>
                        - On ajoute un zéro : \\(90 \\div 15 = 6\\) (car \\(6 \\times 15 = 90\\)), reste \\(0\\).<br>
                        Le quotient exact de \\(600,9 \\div 15\\) est égal à <strong>40,06</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex2",
                num: "N°2",
                title: "Problème de synthèse : Commande de livres",
                statement: `<p>Résoudre le problème suivant en écrivant les étapes de calcul :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Une école reçoit une commande de livres pour une valeur totale de <strong>724 €</strong>.<br>
                    Cet envoi est composé de :<br>
                    - \\(12\\) dictionnaires représentant un total de \\(240\\) €.<br>
                    - \\(6\\) atlas pour une somme totale de \\(84\\) €.<br>
                    - \\(25\\) livres de lecture identiques.<br><br>
                    <strong>a)</strong> Quel est le prix d'un dictionnaire ?<br>
                    <strong>b)</strong> Quel est le prix d'un atlas ?<br>
                    <strong>c)</strong> Quel est le prix d'un livre de lecture ?
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Pour trouver le prix unitaire d'un objet, on divise le prix total du lot par le nombre d'objets : \\[ \\text{Prix unitaire} = \\frac{\\text{Prix total}}{\\text{Quantité}} \\]</li>
                    <li>Pour trouver la part restante du budget, on effectue des soustractions successives.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour a), divisez le prix total des dictionnaires (240 €) par leur nombre (12).</li>
                    <li>Pour b), divisez le prix total des atlas (84 €) par leur nombre (6).</li>
                    <li>Pour c) :
                        <ul>
                            <li>Calculez la somme totale des dictionnaires et des atlas (\\(240 + 84\\)).</li>
                            <li>Soustrayez cette somme du budget total (724 €) pour trouver la part des 25 livres de lecture.</li>
                            <li>Divisez cette valeur par 25 pour obtenir le prix unitaire d'un livre de lecture.</li>
                        </ul>
                    </li>
                </ul>`,
                inputs: [
                    { id: "w4-ex2-a", label: "a) Prix d'un dictionnaire (€)", placeholder: "Ex: 20" },
                    { id: "w4-ex2-b", label: "b) Prix d'un atlas (€)", placeholder: "Ex: 14" },
                    { id: "w4-ex2-c", label: "c) Prix d'un livre de lecture (€)", placeholder: "Ex: 16" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Prix d'un dictionnaire :</strong><br>
                        \\( 240 \\div 12 = 20\\text{ €}\\).<br>
                        Le prix d'un dictionnaire est de <strong>20 €</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Prix d'un atlas :</strong><br>
                        \\( 84 \\div 6 = 14\\text{ €}\\).<br>
                        Le prix d'un atlas est de <strong>14 €</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>c) Prix d'un livre de lecture :</strong><br>
                        - Calculons la valeur totale des dictionnaires et atlas : \\( 240 + 84 = 324\\text{ €}\\).<br>
                        - Calculons la valeur restante dédiée aux 25 livres de lecture : \\( 724 - 324 = 400\\text{ €}\\).<br>
                        - Calculons le prix d'un livre : \\( 400 \\div 25 = 16\\text{ €}\\).<br>
                        Le prix d'un livre de lecture est de <strong>16 €</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex3",
                num: "N°3",
                title: "Calcul de pourcentage (Soldes)",
                statement: `<p>Résoudre le problème suivant :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Dans un magasin, un article est affiché à \\(28\\text{ €}\\).<br>
                    Lors des soldes, son prix baisse de <strong>\\(15\\ \\%\\)</strong>.<br><br>
                    <strong>a)</strong> Calculer le montant de la réduction effectuée sur cet article.<br>
                    <strong>b)</strong> Calculer le nouveau prix de vente de cet article.
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Réduction</strong> : La réduction est égale à : \\[ \\text{Réduction} = \\text{Prix initial} \\times \\frac{\\text{Pourcentage de baisse}}{100} \\]</li>
                    <li><strong>Nouveau prix</strong> : \\[ \\text{Nouveau prix} = \\text{Prix initial} - \\text{Réduction} \\]</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour a), calculez \\(28 \\times \\frac{15}{100}\\). Vous pouvez effectuer \\(28 \\times 15 = 420\\), puis diviser par 100.</li>
                    <li>Pour b), soustrayez la réduction trouvée à la valeur de départ (28 €).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex3-red", label: "a) Montant de la réduction (€)", placeholder: "Ex: 4.20" },
                    { id: "w4-ex3-prix", label: "b) Nouveau prix de l'article (€)", placeholder: "Ex: 23.80" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>a) Calcul de la réduction :</strong><br>
                        \\( \\text{Réduction} = 28 \\times \\frac{15}{100} = \\frac{28 \\times 15}{100} = \\frac{420}{100} = 4,20\\text{ €} \\).<br>
                        Le montant de la réduction est de <strong>4,20 €</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>b) Calcul du nouveau prix :</strong><br>
                        \\( \\text{Nouveau prix} = 28 - 4,20 = 23,80\\text{ €} \\).<br>
                        Le nouveau prix de l'article soldé est de <strong>23,80 €</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex4",
                num: "N°4",
                title: "Tableau de proportionnalité (Le mortier)",
                statement: `<p>Résoudre le problème en complétant le tableau de proportionnalité :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Lorsqu’on fabrique du mortier, la quantité de sable et la quantité de ciment sont des grandeurs proportionnelles.<br>
                    Il faut <strong>5 kg de ciment pour 18 kg de sable</strong>.
                </div>
                <p>Compléter le tableau suivant :</p>
                <table class="data-table" style="margin: 0 auto 16px auto; border-collapse: collapse; border: 1px solid var(--border);">
                    <thead>
                        <tr style="background: var(--border);">
                            <th style="padding: 8px; border: 1px solid var(--border);">Ciment (en kg)</th>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">5</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">1</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">15</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">... (c)</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th style="padding: 8px; border: 1px solid var(--border);">Sable (en kg)</th>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">18</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">... (a)</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">... (b)</td>
                            <td style="padding: 8px; border: 1px solid var(--border); text-align: center;">90</td>
                        </tr>
                    </tbody>
                </table>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Dans un tableau de proportionnalité, on passe d'une colonne à l'autre en effectuant des relations simples (multiplications ou divisions).</li>
                    <li><strong>Passage à l'unité</strong> : Si 5 kg de ciment nécessitent 18 kg de sable, 1 kg de ciment nécessite \\(18 \\div 5 = 3,6\\text{ kg}\\) de sable. Le coefficient est de 3,6.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour trouver (a), divisez 18 par 5. Cela correspond au coefficient de proportionnalité.</li>
                    <li>Pour trouver (b), multipliez 15 par le coefficient de proportionnalité trouvé en (a) (ou remarquez que pour passer de 5 à 15 on multiplie par 3, donc faites de même pour le sable : \\(18 \\times 3\\)).</li>
                    <li>Pour trouver (c), divisez 90 par le coefficient de proportionnalité (ou remarquez que \\(90 = 18 \\times 5\\), donc multipliez le ciment par 5 : \\(5 \\times 5\\)).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex4-a", label: "Sable pour 1 kg de ciment (a)", placeholder: "Ex: 3.6" },
                    { id: "w4-ex4-b", label: "Sable pour 15 kg de ciment (b)", placeholder: "Ex: 54" },
                    { id: "w4-ex4-c", label: "Ciment pour 90 kg de sable (c)", placeholder: "Ex: 25" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        <strong>Calcul des coefficients :</strong><br>
                        - **Case (a)** : Il s'agit du passage à l'unité de ciment. Si pour 5 kg de ciment il faut 18 kg de sable, alors pour 1 kg de ciment il faut :<br>
                        \\( 18 \\div 5 = \\mathbf{3,6\\text{ kg}} \\) de sable.<br><br>
                        - **Case (b)** : Pour 15 kg de ciment. Comme \\(15 = 5 \\times 3\\), on multiplie la quantité de sable par 3 :<br>
                        \\( 18 \\times 3 = \\mathbf{54\\text{ kg}} \\) de sable. (Ou \\(15 \\times 3,6 = 54\\)).<br><br>
                        - **Case (c)** : Pour 90 kg de sable. On cherche la quantité de ciment associée. Comme \\(90 = 18 \\times 5\\), on multiplie le ciment correspondant par 5 :<br>
                        \\( 5 \\times 5 = \\mathbf{25\\text{ kg}} \\) de ciment. (Ou \\(90 \\div 3,6 = 25\\)).
                    </div>
                </div>`
            },
            {
                id: "w4-ex5",
                num: "N°5",
                title: "Calcul d'aire géométrique (Partie colorée)",
                statement: `<p>Calculer la valeur exacte de l'aire de la partie colorée ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image035.png" alt="Grand rectangle de 10cm x 5cm avec un rectangle blanc intérieur de 4cm x 2cm" style="max-width: 100%; max-width: 280px;">
                </div>
                <p>La figure est composée d'un rectangle extérieur de dimensions \\(10\\text{ cm}\\) et \\(5\\text{ cm}\\), et d'un rectangle intérieur blanc de dimensions \\(4\\text{ cm}\\) et \\(2\\text{ cm}\\).</p>
                <p><strong>Calculer l'aire de la partie colorée (en \\(\\text{cm}^2\\)).</strong></p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Aire d'un rectangle</strong> : L'aire d'un rectangle de longueur \\(L\\) et de largeur \\(l\\) est donnée par la formule : \\[ \\mathcal{A} = L \\times l \\]</li>
                    <li><strong>Aire de la partie colorée</strong> : Pour trouver l'aire de la zone colorée, on calcule l'aire du rectangle extérieur (le plus grand) et on lui soustrait l'aire du rectangle intérieur blanc (le plus petit) : \\[ \\mathcal{A}_{\\text{colorée}} = \\mathcal{A}_{\\text{extérieur}} - \\mathcal{A}_{\\text{intérieur}} \\]</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Étape 1</strong> : Calculez l'aire du grand rectangle extérieur de dimensions \\(10\\text{ cm}\\) par \\(5\\text{ cm}\\) : \\[ \\mathcal{A}_{\\text{extérieur}} = 10 \\times 5 \\]</li>
                    <li><strong>Étape 2</strong> : Calculez l'aire du petit rectangle blanc intérieur de dimensions \\(4\\text{ cm}\\) par \\(2\\text{ cm}\\) : \\[ \\mathcal{A}_{\\text{intérieur}} = 4 \\times 2 \\]</li>
                    <li><strong>Étape 3</strong> : Soustrayez l'aire du rectangle intérieur de l'aire du rectangle extérieur pour obtenir l'aire de la partie colorée.</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex5-aire", label: "Aire colorée (cm²)", placeholder: "Ex: 42" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - <strong>Aire du rectangle extérieur :</strong><br>
                        Le grand rectangle mesure 10 cm de long et 5 cm de large :<br>
                        \\( \\mathcal{A}_{\\text{extérieur}} = 10 \\times 5 = 50\\text{ cm}^2 \\).<br><br>
                        - <strong>Aire du rectangle intérieur blanc :</strong><br>
                        Le petit rectangle mesure 4 cm de long et 2 cm de large :<br>
                        \\( \\mathcal{A}_{\\text{intérieur}} = 4 \\times 2 = 8\\text{ cm}^2 \\).<br><br>
                        - <strong>Aire de la partie colorée :</strong><br>
                        On soustrait l'aire du rectangle blanc intérieur à celle du grand rectangle extérieur :<br>
                        \\( \\mathcal{A}_{\\text{colorée}} = \\mathcal{A}_{\\text{extérieur}} - \\mathcal{A}_{\\text{intérieur}} = 50 - 8 = \\mathbf{42\\text{ cm}^2} \\).<br><br>
                        L'aire de la partie colorée est donc de <strong>42 cm²</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex6",
                num: "N°6",
                title: "Calcul de volume (Assemblage de cubes)",
                statement: `<p>Calculer le volume du solide d'assemblage représenté ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    
                </div>
                <p>Le solide est constitué d’un assemblage de cubes identiques d'arête <strong>\\(1\\text{ cm}\\)</strong>.</p>
                <p><strong>Déterminer le volume total de ce solide en \\(\\text{cm}^3\\).</strong></p>
                <div style="text-align: center; margin: 12px 0;">
                    <img src="/image042.png" alt="Schéma indicatif" style="max-width: 150px;">
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Le volume d'un cube d'arête \\(1\\text{ cm}\\) est : \\[ V = 1\\text{ cm} \\times 1\\text{ cm} \\times 1\\text{ cm} = 1\\text{ cm}^3 \\]</li>
                    <li>Pour trouver le volume de l'assemblage, il suffit de **compter le nombre total de cubes** constituant la structure (en faisant attention aux cubes cachés soutenant les niveaux supérieurs).</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Décomposez l'assemblage par étages :
                        <ul>
                            <li>Combien de cubes y a-t-il sur l'étage supérieur (le plus haut) ?</li>
                            <li>Combien de cubes sur l'étage intermédiaire ? (Comptez ceux qui sont visibles et n'oubliez pas les cubes cachés sous l'étage supérieur).</li>
                            <li>Combien de cubes sur la base (l'étage inférieur) ?</li>
                        </ul>
                    </li>
                    <li>Faites le total de tous les cubes. Le nombre de cubes correspond directement au volume en \\(\\text{cm}^3\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex6-vol", label: "Volume du solide (cm³)", placeholder: "Ex: 15" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        Comptons les cubes par couches (de haut en bas) :<br>
                        - **Couche supérieure (étage 3)** : <strong>3</strong> cubes.<br>
                        - **Couche intermédiaire (étage 2)** : <strong>4</strong> cubes.<br>
                        - **Couche inférieure (base - étage 1)** : <strong>8</strong> cubes (4 visibles + 4 cachés sous les cubes de l'étage 2).<br><br>
                        Total de cubes dans l'assemblage = \\(3 + 4 + 8 = 15\\) cubes.<br>
                        Puisque chaque cube a un volume de \\(1\\text{ cm}^3\\), le volume total du solide est de <strong>15 cm³</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex7",
                num: "N°7",
                title: "Géométrie et symétrie (Le losange)",
                statement: `<p>Tracer la figure sur votre cahier et répondre aux questions :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    1. Tracer un cercle \\((C)\\) de centre \\(I\\) et de rayon \\(6\\text{ cm}\\), puis placer un point \\(J\\) sur ce cercle.<br>
                    2. Tracer la droite \\((d)\\), médiatrice du segment \\([IJ]\\). Cette droite coupe le cercle \\((C)\\) en deux points \\(K\\) et \\(L\\). Placer ces deux points.<br>
                    3. Construire le cercle \\((C')\\) symétrique de \\((C)\\) par rapport à la droite \\((d)\\).<br>
                    4. Justifier que les points \\(K\\) et \\(L\\) appartiennent au cercle \\((C')\\).<br>
                    5. a) Justifier que le quadrilatère \\(IKJL\\) est un losange.<br>
                    b) Quel est son périmètre ? Justifier la réponse.
                </div>`,
                
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Symétrie axiale</strong> : Si une droite \\((d)\\) est l'axe de symétrie, tout point appartenant à cette droite est son propre symétrique.</li>
                    <li><strong>Propriété des cercles symétriques</strong> : Deux cercles symétriques ont le même rayon.</li>
                    <li><strong>Losange</strong> : Quadrilatère qui a 4 côtés de même longueur.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li>Pour la question 4, rappelez-vous que \\(K\\) et \\(L\\) sont les points d'intersection de \\((d)\\) et de \\((C)\\). Comme ils sont sur l'axe \\((d)\\), ils sont leurs propres symétriques. Donc ils appartiennent aussi au cercle symétrique \\((C')\\).</li>
                    <li>Pour le 5-a), rappelez-vous que \\(I\\) est le centre de \\((C)\\) de rayon 6 cm. \\(K\\) et \\(L\\) sont sur \\((C)\\), donc \\(IK = IL = 6\\text{ cm}\\). Par symétrie par rapport à \\((d)\\), le symétrique de \\(I\\) est \\(J\\) (puisque \\((d)\\) est la médiatrice de \\([IJ]\\)). Donc les segments symétriques ont même longueur : \\(JK = IK = 6\\text{ cm}\\) and \\(JL = IL = 6\\text{ cm}\\).</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex7-nature", label: "Nature du quadrilatère IKJL", placeholder: "Ex: losange" },
                    { id: "w4-ex7-perim", label: "Périmètre de IKJL (cm)", placeholder: "Ex: 24" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                    <strong> (d) est la médiatrice de [IJ], alors J est le symétrique de I par rapport à (d), (C') est alors le cercle de centre J et de rayon 6cm. </strong> <br>
                        <strong>Question 4 : Pourquoi K et L appartiennent à (C') ?</strong><br>
                        - Les points \\(K\\) et \\(L\\) sont situés sur l'axe de symétrie \\((d)\\). Tout point de l'axe de symétrie est son propre symétrique.<br>
                        - Le symétrique de \\(K\\) par rapport à \\((d)\\) est \\(K\\) lui-même, et le symétrique du cercle \\((C)\\) par rapport à \\((d)\\) est le cercle \\((C')\\).<br>
                        - Puisque \\(K\\) est sur \\((C)\\), son symétrique (qui est lui-même) est sur le cercle symétrique \\((C')\\). Les points \\(K\\) et \\(L\\) appartiennent donc à <strong>\\((C')\\)</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>Question 5-a) Justification du losange :</strong><br>
                        - \\(I\\) est le centre de \\((C)\\) de rayon 6 cm. \\(K\\) et \\(L\\) sont des points de \\((C)\\), donc \\(IK = IL = 6\\text{ cm}\\).<br>
                        - De plus, \\((d)\\) est la médiatrice de \\([IJ]\\), donc le symétrique de \\(I\\) par rapport à \\((d)\\) est \\(J\\).<br>
                        - Par la symétrie axiale qui conserve les distances, le segment \\([JK]\\) est le symétrique de \\([IK]\\) (donc \\(JK = IK = 6\\text{ cm}\\)) et \\([JL]\\) est le symétrique de \\([IL]\\) (donc \\(JL = IL = 6\\text{ cm}\\)).<br>
                        - On obtient : \\(IK = KL = LJ = JI = 6\\text{ cm}\\)... Non, \\(IK = KJ = JL = LI = 6\\text{ cm}\\). Le quadrilatère \\(IKJL\\) a ses 4 côtés égaux, c'est donc un <strong>losange</strong>.
                    </div>
                    <div class="correction-step">
                        <strong>Question 5-b) Calcul du périmètre :</strong><br>
                        Le losange a 4 côtés de 6 cm chacun.<br>
                        \\( P = 4 \\times 6 = \\mathbf{24\\text{ cm}} \\).<br>
                        Le périmètre du losange est de <strong>24 cm</strong>.
                    </div>
                </div>`
            },
            {
                id: "w4-ex8",
                num: "N°8",
                title: "Énigme : Équilibre des balances",
                statement: `<p>Quelle est la masse d’une pomme ? Et d’une banane ? Déterminer leurs masses respectives en vous servant du schéma des balances : (masse totale droite: 50 g, et masse totale à gauche: 30 g)</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image059.png" alt="Équilibre des balances" style="max-width: 100%; max-width: 320px;">
                </div>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li><strong>Systèmes de pesée (Logique de substitution)</strong> : On peut résoudre ce type d'énigme en remplaçant des éléments par d'autres.</li>
                    <li>Par exemple, si on sait qu'une pomme et 4 bananes pèsent 40 g, on peut exprimer la masse de la pomme en fonction de celle des bananes, puis la remplacer dans l'autre balance.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                
                    
                    Si vous comptez 4 pommes et 2 bananes à gauche (50g) et une pomme et 4 bananes à droite (30g), on trouve Pomme = 10 g et Banane = 5 g.</li>
                </ul>`,
                inputs: [
                    { id: "w4-ex8-pomme", label: "Masse d'une pomme (g)", placeholder: "Ex: 12" },
                    { id: "w4-ex8-banane", label: "Masse d'une banane (g)", placeholder: "Ex: 7" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                   
                    <div class="correction-step">
                        <strong> Résolution :</strong><br>
                        Si on compte 4 pommes à gauche et 2 bananes (50g) :<br>
                        \\(4P + 2B = 50 \\implies 2P + B = 25\\).<br>
                        La deuxième balance a un poids de 30g pour 1 pomme et 4 bananes :<br>
                        \\(P + 4B = 30\\).<br>
                        En résolvant, on trouve : <strong>Pomme = 10 g</strong> et <strong>Banane = 5 g</strong> .
                    </div>
                </div>`
            },
            {
                id: "w4-puzzle",
                num: "Énigme",
                title: "Carrés magiques décimaux",
                statement: `<p><strong>Compléter les deux carrés magiques ci-dessous :</strong></p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px;">
                    Règle : La somme de chaque ligne, de chaque colonne et de chaque diagonale doit être identique.
                </div>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image038.png" alt="Les deux carrés magiques incomplets" style="max-width: 100%; max-width: 380px;">
                </div>
                <p>Trouver la somme magique pour chacun des deux carrés.</p>`,
                course: `<h4>Rappels de cours</h4>
                <ul>
                    <li>Pour trouver la **somme magique**, cherchez une ligne, une colonne ou une diagonale qui est déjà entièrement remplie de nombres et additionnez-les.</li>
                    <li>Soustrayez ensuite les nombres connus d'une ligne ou colonne incomplète à cette somme magique pour trouver la case vide.</li>
                </ul>`,
                help: `<h4>Indices d'aide</h4>
                <ul>
                    <li><strong>Carré 1 (à gauche)</strong> : Cherchez la ligne ou colonne complète dans l'image.
                        <ul>
                            <li>La diagonale complète contient : \\(1,5 + 4,5 + 7,5 = 13,5\\). La somme magique est donc **13,5**.</li>
                        </ul>
                    </li>
                    <li><strong>Carré 2 (à droite)</strong> : Cherchez la ligne ou colonne complète :
                        <ul>
                            <li>La ligne ou diagonale complète permet de trouver la somme magique égale à **3,4** .</li>
                        </ul>
                    </li>
                </ul>`,
                inputs: [
                    { id: "w4-puzzle-s1", label: "Somme magique du Carré 1", placeholder: "Ex: 13.5" },
                    { id: "w4-puzzle-s2", label: "Somme magique du Carré 2", placeholder: "Ex: 3.4" }
                ],
                correction: `<h4>Correction détaillée</h4>
                <div class="correction-steps">
                    <div class="correction-step">
                        - **Carré 1 (à gauche)** :<br>
                        La somme magique est calculée grâce à la diagonale remplie : \\(1,5 + 4,5 + 7,5 = 13,5\\).<br>
                        Le carré complété est :<br>
                        \\(\\begin{array}{|c|c|c|}
                        \\hline
                        5,5 & 0,5 & 7,5 \\\\ \\hline
                        6,5 & 4,5 & 2,5 \\\\ \\hline
                        1,5 & 8,5 & 3,5 \\\\ \\hline
                        \\end{array}\\) . La somme magique est <strong>13,5</strong>.
                    </div>
                    <div class="correction-step">
                        - **Carré 2 (à droite)** :<br>
                        La somme magique est égale à <strong>3,4</strong>.
                         Le carré complété est :<br>
                          \\(\\begin{array}{|c|c|c|c|}
                        \\hline
                        1,6 & 0,3 & 0,2 & 1,3 \\\\ \\hline
                        0,5 & 1 & 1,1 & 0,8 \\\\ \\hline
                        0,9 & 0,6 & 0,7 & 1,2 \\\\ \\hline
                        0,4 & 1,5 & 1,4 & 0,1 \\\\ \\hline
                        \\end{array}\\)
                    </div>
                </div>`
            }
        ]
    },
    "extra": {
        title: "Fiche d'exercices supplémentaires (Sans aide ni correction)",
        exercises: [
            {
                id: "extra-ex1",
                num: "N°1",
                title: "Calcul mental de multiplications décimales",
                statement: `<p>Effectuer mentalement les calculs suivants :</p>
                <div class="math-formula">
                    a) \\(0,2 \\times 0,5\\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; b) \\(0,85 \\times 0,2\\)<br>
                    c) \\(0,7 \\times 0,08\\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; d) \\(11,1 \\times 0,05\\)<br>
                    e) \\(0,4 \\times 2,5\\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; f) \\(0,3 \\times 12,2\\)<br>
                    g) \\(0,41 \\times 3\\) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; h) \\(0,47 \\times 0,2\\)
                </div>`
            },
            {
                id: "extra-ex2",
                num: "N°2",
                title: "Ordre croissant",
                statement: `<p>Ranger les nombres suivants dans l’ordre croissant :</p>
                <div class="math-formula">
                    \\[ 3 + \\frac{3}{1000} \\quad ; \\quad 3,3 \\quad ; \\quad \\frac{333}{10} \\quad ; \\quad \\frac{303}{100} \\quad ; \\quad 3 + \\frac{3}{10} + \\frac{3}{1000} \\]
                </div>`
            },
            {
                id: "extra-ex3",
                num: "N°3",
                title: "Questions de synthèse générale",
                statement: `<p>Répondre aux questions ci-dessous en montrant vos calculs :</p>
                <ol type="a">
                    <li>Donner l’écriture décimale de \\(\\frac{8}{5}\\).</li>
                    <li>Donner le quotient de \\(34\\) par \\(7\\) (écriture fractionnaire).</li>
                    <li>Trouver le nombre manquant dans l’égalité : \\(7 \\times \\dots = 3\\).</li>
                    <li>Donner la fraction égale au quart de \\(5\\).</li>
                    <li>Donner la fraction irréductible égale à \\(0,45\\).</li>
                    <li>Donner la fraction irréductible égale à \\(\\frac{0,36}{4,8}\\).</li>
                    <li>Donner la fraction irréductible égale à \\(1 + \\frac{1}{3}\\).</li>
                    <li>Comparer les fractions \\(\\frac{8}{5}\\) et \\(\\frac{12}{35}\\).</li>
                    <li>Calculer \\(\\frac{5}{3} + \\frac{2}{9} + 4\\).</li>
                </ol>`
            },
            {
                id: "extra-ex4",
                num: "N°4",
                title: "Conversions de mesures, aires et périmètres",
                statement: `<p><strong>A - Compléter les conversions suivantes :</strong></p>
                <ol type="a">
                    <li>\\(1\\text{ m}^2 = \\dots\\text{ cm}^2\\)</li>
                    <li>\\(460\\text{ dm}^2 = \\dots\\text{ mm}^2\\)</li>
                    <li>\\(0,765\\text{ m}^2 = \\dots\\text{ cm}^2\\)</li>
                    <li>\\(85,47\\text{ hm}^2 = \\dots\\text{ m}^2\\)</li>
                </ol>
                <p><strong>B - Résoudre les problèmes géométriques :</strong></p>
                <ol type="a">
                    <li>Quelle est l’aire d’un carré de périmètre \\(32\\text{ cm}\\) ?</li>
                    <li>Quel est le périmètre d’un rectangle de largeur \\(6\\text{ m}\\) et d’aire \\(48\\text{ m}^2\\) ?</li>
                </ol>`
            },
            {
                id: "extra-ex5",
                num: "N°5",
                title: "Calculs de durées et d'horaires",
                statement: `<p>Résoudre les deux problèmes suivants :</p>
                <p><strong>A -</strong> Un coureur de marathon est parti à <strong>9 h 36</strong>. Il est arrivé à <strong>12 h 25</strong>. Combien de temps a-t-il mis pour courir ce marathon ?</p>
                <p><strong>B -</strong> Léa prévoit <strong>2 h 45 min</strong> pour visiter un musée. Le musée ferme à <strong>18 h 15</strong>. Avant quelle heure doit-elle commencer sa visite au plus tard ?</p>`
            },
            {
                id: "extra-ex6",
                num: "N°6",
                title: "Problème : Partage des frais de goûter",
                statement: `<p>Résoudre le problème suivant en posant les calculs :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Céline fait des courses pour un goûter. Les frais seront partagés équitablement entre elle et ses trois amies.<br>
                    Céline achète :<br>
                    - Un gâteau à \\(32,6\\ \$\\).<br>
                    - \\(500\\text{ g}\\) de fraises à \\(4,4\\ \$\\) le kilogramme.<br>
                    - Un litre de jus de fruits à \\(1,9\\ \$\\).<br><br>
                    <strong>Combien chacune de ses amies doit-elle rembourser à Céline ?</strong>
                </div>`
            },
            {
                id: "extra-ex7",
                num: "N°7",
                title: "Problème : Peinture des murs d'une cave",
                statement: `<p>Résoudre le problème de peinture des murs de la cave :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Le père de Jacques veut repeindre les quatre murs de sa cave. Il relève les dimensions suivantes :<br>
                    - Deux murs de \\(4\\text{ m}\\) de longueur et \\(2,5\\text{ m}\\) de hauteur.<br>
                    - Deux murs de \\(3\\text{ m}\\) de longueur et \\(2,5\\text{ m}\\) de hauteur.<br><br>
                    <strong>a)</strong> Calculer l’aire totale des murs à repeindre.<br>
                    <strong>b)</strong> Les pots de peinture sont vendus à \\(145\\text{ €}\\) l’un. Chaque pot permet de repeindre \\(15\\text{ m}^2\\) (corrigé de 1,5). Combien de pots doit-il acheter et quel prix total doit-il payer ?
                </div>`
            },
            {
                id: "extra-ex8",
                num: "N°8",
                title: "Géométrie, symétrie et périmètre",
                statement: `<p>Tracer la figure et résoudre le problème de géométrie sur votre cahier :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    <strong>a)</strong> Construire un triangle \\(ABC\\) tel que : \\(AB = 3\\text{ cm}\\), \\(AC = 7\\text{ cm}\\) et \\(\\widehat{BAC} = 25^\\circ\\).<br>
                    <strong>b)</strong> Construire le point \\(S\\), symétrique du point \\(A\\) par rapport à la droite \\((BC)\\).<br>
                    <strong>c)</strong> Justifier que le triangle \\(ABS\\) est isocèle.<br>
                    <strong>d)</strong> Déterminer la mesure de l’angle \\(\\widehat{BSC}\\).<br>
                    <strong>e)</strong> Calculer, en le justifiant, le périmètre du quadrilatère \\(ABSC\\).
                </div>`
            },
            {
                id: "extra-ex9",
                num: "N°9",
                title: "Démonstration géométrique (Médiatrice et parallèle)",
                statement: `<p>Tracer la figure et faire la démonstration sur votre cahier :</p>
                <div style="background-color: var(--bg-app); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border); margin-bottom: 12px; font-size: 0.95rem;">
                    Tracer un triangle \\(ABC\\) isocèle en \\(A\\) tel que : \\(AB = 7\\text{ cm}\\) et \\(BC = 6\\text{ cm}\\).<br>
                    Tracer la médiatrice \\((d_1)\\) de \\([BC]\\), elle coupe \\([BC]\\) en \\(M\\).<br><br>
                    <strong>a)</strong> Pourquoi \\((d_1)\\) passe-t-elle par \\(A\\) ?<br>
                    <strong>b)</strong> Tracer la droite \\((d_2)\\) parallèle à \\((d_1)\\) et passant par \\(C\\). Montrer que \\((d_2) \\perp (BC)\\).<br>
                    <strong>c)</strong> Tracer la droite \\((d_3)\\) parallèle à \\((BC)\\) et passant par \\(A\\). Elle coupe \\((d_2)\\) en \\(D\\). Comment sont les droites \\((d_2)\\) et \\((d_3)\\) ? Pourquoi ?<br>
                    <strong>d)</strong> Quelle est la nature du quadrilatère \\(AMCD\\) ? Pourquoi ?
                </div>`
            },
            {
                id: "extra-ex10",
                num: "N°10",
                title: "Géométrie : Axes de symétrie des figures",
                statement: `<p>Déterminer, pour chacune des figures ci-dessous, le nombre d'axes de symétrie (s'ils existent) :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image041.png" alt="Figures : Fleur, Pentagone étoilé, Flèche oblique, Parallélogramme, Triangles..." style="max-width: 100%; max-width: 550px;">
                </div>
                <p>Déterminer le nombre d'axes de symétrie pour :</p>
                <ol type="a">
                    <li>La figure a (Fleur à 4 pétales symétriques) : ...</li>
                    <li>La figure b (Pentagone étoilé régulier) : ...</li>
                    <li>La figure c (Flèche orientée vers le haut à droite) : ...</li>
                    <li>La figure d (Parallélogramme non particulier) : ...</li>
                </ol>`
            },
            {
                id: "extra-puzzle1",
                num: "Énigme A",
                title: "Cryptarithme de la balance",
                statement: `<p>Résoudre l'énigme représentée sur le schéma ci-dessous :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image043.png" alt="Énigme de la balance et des formes géométriques" style="max-width: 100%; max-width: 450px;">
                </div>`
            },
            {
                id: "extra-puzzle2",
                num: "Énigme B",
                title: "Qui présentera le journal télévisé ?",
                statement: `<p>Effectuer mentalement les calculs suivants pour trouver son identité (déchiffrer le code secret dans l'image) :</p>
                <div style="text-align: center; margin: 16px 0;">
                    <img src="/image060.png" alt="Code secret et calculs mentaux pour trouver l'identité du présentateur" style="max-width: 100%; max-width: 500px;">
                </div>`
            }
        ]
    }
};
