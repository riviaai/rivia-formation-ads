export type Slide = {
  id: string;
  title: string;
  type: 'title' | 'hooks' | 'comparison' | 'errors' | 'content' | 'checklist' | 'prompt' | 'before-after';
  content: SlideContent;
};

export type SlideContent = {
  subtitle?: string;
  quote?: string;
  stats?: { value: string; label: string }[];
  items?: { num: string; title: string; sub: string }[];
  hooks?: { num: string; type: string; typeBg: string; typeColor: string; src: string; accentColor: string; text: string; mechanism: string; target: string; rule: string }[];
  comparison?: { bad: string; good: string }[];
  badLabel?: string;
  goodLabel?: string;
  summaryBad?: string;
  summaryGood?: string;
  errors?: { label: string; labelColor: string; title?: string; pills?: string[]; text?: string; alt?: string; scripts?: string; scriptBadge?: string; scriptBadgeBg?: string; scriptHook?: string; scriptBody?: string; scriptNote?: string }[];
  rulesTitle?: string;
  rules?: string[];
  intro?: string;
  sections?: { title: string; color: string; cards: { title: string; body: string }[] }[];
  checklist?: string[];
  prompt?: { target: string; lines: { text: string; color: string }[] };
  beforeAfter?: {
    beforeLabel: string;
    beforeErrors: string[];
    beforeScript: string;
    afterLabel: string;
    afterWins: string[];
    afterScript: string;
  };
};

export type Module = {
  id: string;
  num: number;
  title: string;
  subtitle: string;
  color: string;
  slides: Slide[];
};

export const MODULES: Module[] = [

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     M1  AUDIT DES SCRIPTS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'm1', num: 1, title: 'Audit des Scripts', subtitle: 'Scanner ce qui existe avant de créer', color: '#DC2626',
    slides: [
      {
        id: 'm1-s1', title: 'Audit des Scripts', type: 'title',
        content: {
          subtitle: 'Scanner ce qui existe avant de créer',
          quote: 'Un mauvais script, c\'est pas un manque de créativité. C\'est une erreur précise et répétée qu\'on peut identifier, nommer et corriger en 30 minutes.',
          stats: [
            { value: 'Étape 1', label: 'Avant de créer quoi que ce soit' },
            { value: '4 erreurs', label: 'qui tuent le CTR à elles seules' },
            { value: '5 angles', label: '1 seul actif à la fois maximum' },
            { value: '1 prompt', label: 'd\'audit complet en fin de module' },
          ],
          items: [
            { num: '01', title: 'Les 4 erreurs qui tuent le CTR', sub: 'Vocabulaire saturé, CTA identique, angles cannibalisés, ton générique' },
            { num: '02', title: 'Les 5 angles disponibles', sub: 'La règle d\'or : 1 seul angle actif à la fois dans tes scripts' },
            { num: '03', title: 'Script raté vs Script corrigé', sub: 'Les erreurs appliquées, côte à côte avec les corrections' },
            { num: '04', title: 'Prompt d\'audit complet', sub: 'Colle tes scripts, Claude identifie chaque problème' },
          ],
        },
      },
      {
        id: 'm1-s2', title: 'Les 4 erreurs qui tuent le CTR', type: 'errors',
        content: {
          errors: [
            {
              label: '01 — Vocabulaire saturé', labelColor: '#DC2626',
              title: 'Les mots tellement répétés qu\'ils ne font plus rien',
              pills: ['"résultats" : présent dans la majorité des scripts', '"ton corps" : répété ad nauseam', '"je te juge pas" : BANNI définitivement', '"efforts" : mot tellement galvaudé qu\'il glisse', '"c\'est pas de ta faute" : max 1 script actif à la fois'],
              text: '"Je te juge pas" est le cas le plus critique. En retargeting, l\'audience l\'entend avant la fin de la phrase — son cerveau a déjà scrollé. Le CTR chute de 30 à 40% sur les scripts qui l\'utilisent plusieurs fois. À remplacer par : "C\'est logique." / "C\'est normal." / "C\'est pas ta discipline le problème."',
              alt: 'Remplacer : "résultats" → "progression" / "ton corps" → "ta physiologie" ou "ton organisme" / "efforts" → "discipline" ou "régularité"',
            },
            {
              label: '02 — CTA identique', labelColor: '#EA580C',
              scripts: 'Quand plusieurs scripts actifs ont le même CTA mot pour mot',
              scriptHook: '"clique juste en dessous pour découvrir ma méthode"',
              scriptNote: 'Varier impérativement : "passe le test" / "vois si tu es éligible" / "réponds aux 3 questions" / "réserve ton bilan" / "vois si ça te correspond"',
            },
            {
              label: '03 — Angles cannibalisés', labelColor: '#7C3AED',
              scripts: 'Activer plusieurs scripts avec la même révélation centrale',
              scriptBadge: 'CRITIQUE', scriptBadgeBg: '#7C3AED',
              scriptHook: 'Ex : "Ton corps s\'adapte au cardio" utilisé comme révélation principale dans 3 scripts actifs simultanément',
              scriptBody: 'Résultat : l\'audience se désensibilise en 48h. Le CPL monte, le CTR chute. La règle absolue : 1 seul angle actif à la fois parmi les 5 disponibles.',
            },
            {
              label: '04 — Ton générique IA', labelColor: '#0023DC',
              scripts: 'Phrases longues, registre formel, constructions "il est important de"',
              scriptHook: '"Il est essentiel de maintenir une routine sportive pour obtenir des résultats optimaux et durables."',
              scriptBody: 'Ce type de phrase se détecte à 3 mots. L\'audience ne se reconnaît pas. Le TON est la moitié de la crédibilité. Maximum 5 mots par phrase. Registre oral uniquement.',
              scriptNote: 'Mots interdits définitivement : "optimal" / "durablement" / "notamment" / "il convient de" / "en outre"',
            },
          ],
          rulesTitle: 'Règles immédiates à appliquer',
          rules: [
            '"Je te juge pas" : banni de tous les scripts actifs',
            '"C\'est pas de ta faute" : 1 script actif maximum',
            'CTA différent sur chaque script actif simultanément',
            'Même révélation centrale : 1 seul script actif à la fois',
            'Scanner tous les scripts actifs avant chaque nouvelle activation',
            'Relire à voix haute : si ça sonne IA, réécrire phrase par phrase',
          ],
        },
      },
      {
        id: 'm1-s3', title: 'Les 5 angles disponibles', type: 'errors',
        content: {
          errors: [
            {
              label: 'Règle d\'or', labelColor: '#0023DC',
              title: '1 seul angle actif à la fois — jamais 2 simultanément',
              text: 'Chaque angle cible une douleur ou une croyance différente. Activer deux angles en même temps revient à parler à deux avatars différents avec le même budget. Le CPL monte, la cohérence disparaît. Une semaine = un angle.',
            },
            {
              label: 'Angle 1 — ERREURS', labelColor: '#DC2626',
              scriptHook: 'L\'audience fait des erreurs sans le savoir. C\'est pour ça que ça ne marche pas.',
              scriptBody: 'Cible : personnes actives qui ont déjà essayé plusieurs approches. Le script révèle l\'erreur précise (cardio inadapté, restriction calorique trop forte, mauvaise fréquence).',
              scriptNote: 'Ex hook : "Tu fais 3h de sport par semaine. Et tu stagne depuis 6 mois."',
            },
            {
              label: 'Angle 2 — RÉVÉLATIONS', labelColor: '#7C3AED',
              scriptHook: 'Il existe un mécanisme physiologique que l\'audience ignore et qui explique tout.',
              scriptBody: 'Cible : audience curieuse, veut comprendre pourquoi les méthodes classiques ne fonctionnent pas. Script révèle le mécanisme avec un chiffre précis.',
              scriptNote: 'Ex hook : "Ton corps s\'adapte au cardio en 3 semaines. Après : 40% de calories brûlées en moins."',
            },
            {
              label: 'Angle 3 — MANQUE DE TEMPS', labelColor: '#EA580C',
              scriptHook: 'L\'audience n\'a pas le temps pour des protocoles longs. Elle cherche l\'efficacité maximale.',
              scriptBody: 'Cible : actifs, parents, entrepreneurs. Le script montre que les résultats ne demandent pas 2h par jour.',
              scriptNote: 'Ex hook : "Tu fais 5 séances par semaine. Tu n\'as pas le temps d\'en faire plus. Et pourtant ça bouge pas."',
            },
            {
              label: 'Angle 4 — VIE PERSO / IDENTITÉ', labelColor: '#059669',
              scriptHook: 'Le physique est lié à la charge mentale, au rôle social, à l\'identité de l\'audience.',
              scriptBody: 'Cible surtout les femmes 28-45 ans. Relie la prise de poids ou la stagnation à un facteur de vie (stress, charge mentale, période de transition).',
              scriptNote: 'Ex hook : "Tu t\'occupes de tout le monde depuis des années. Ton corps a mémorisé ce stress."',
            },
            {
              label: 'Angle 5 — CEO / DIRIGEANT', labelColor: '#0023DC',
              scriptHook: 'L\'audience est un dirigeant. Son physique est lié à sa performance et son image.',
              scriptBody: 'Cible : hommes 35-50 ans, profil CEO ou entrepreneur. Le script relie forme physique et performance mentale / crédibilité professionnelle.',
              scriptNote: 'Ex hook : "Tu gères 10 personnes. Tu te lèves fatigué depuis 2 ans. Ton corps, t\'en occupes jamais."',
            },
          ],
          rulesTitle: 'Comment choisir l\'angle de la semaine',
          rules: [
            'Choisir l\'angle basé sur les calls du mois : quelle douleur revient le plus souvent ?',
            'Vérifier qu\'aucun script actif ne couvre déjà cet angle',
            'Changer d\'angle quand la fréquence dépasse 3 ou le CPL monte 3 jours de suite',
            'Tourner les 5 angles sur 5 semaines puis analyser les CPL pour identifier le meilleur',
          ],
        },
      },
      {
        id: 'm1-s4', title: 'Script raté vs Script corrigé', type: 'before-after',
        content: {
          beforeAfter: {
            beforeLabel: '✗  Toutes les erreurs appliquées en 6 lignes',
            beforeErrors: [
              'Hook générique : aucune douleur précise, aucune tension créée',
              '"résultats" + "ton corps" + "efforts" : 3 mots saturés en 5 lignes',
              '"je te juge pas" + "c\'est pas de ta faute" : 2 validations bannies en 2 phrases',
              'Aucun mécanisme, aucun chiffre : zéro crédibilité, zéro curiosité',
              'Structure narrative identique aux 4 autres scripts actifs',
              'CTA identique mot pour mot dans 6 scripts actifs simultanément',
            ],
            beforeScript: 'Tu fais des efforts depuis des mois.\n\nTu manges mieux, tu fais du sport. Et les résultats sont pas là.\n\nEt je te juge pas. C\'est vraiment pas de ta faute.\n\nLe problème, c\'est que ton corps a pas la bonne structure pour progresser.\n\nMa méthode, elle permet à ton corps d\'enfin obtenir les résultats que tu mérites.\n\nClique juste en dessous pour découvrir ma méthode.',
            afterLabel: '✓  Script corrigé : chaque levier activé',
            afterWins: [
              'Hook : contradiction précise entre effort et résultat, identification immédiate',
              'Zéro présentation, on entre dans la douleur dès la 1ère phrase',
              '1 seule validation implicite, jamais nommée comme telle',
              'Mécanisme réel : "3 semaines" et "40% moins", chiffres vérifiables',
              'MAJUSCULES sur le mot pivot pour l\'emphase orale',
              'Phrases 3 à 6 mots maximum : ton 100% humain, se lit à voix haute',
              'CTA conditionnel "Si tu te reconnais" : jamais d\'injonction directe',
            ],
            afterScript: 'Tu t\'entraînes 4x par semaine. Ton ventre grossit quand même.\n\nC\'est pas ton manque de discipline le problème.\n\nTon corps s\'adapte au cardio en 3 semaines. Après ça, il brûle 40% moins de calories pour le même effort. EXACTEMENT pour ça que ta balance bouge plus.\n\nC\'est un mécanisme physiologique. Pas un manque de volonté.\n\nSi tu te reconnais là-dedans, clique juste en dessous pour voir si je peux t\'aider.',
          },
        },
      },
      {
        id: 'm1-s5', title: 'Prompt : Audit complet de tes scripts', type: 'prompt',
        content: {
          prompt: {
            target: 'Diagnostiquer les erreurs dans tes scripts actifs avant toute nouvelle création',
            lines: [
              { text: '# CONTEXTE', color: '#93C5FD' },
              { text: 'Tu es expert en scripts ADS pour coachs. Analyse mes scripts existants.', color: '#64748B' },
              { text: '', color: '' },
              { text: '# MES SCRIPTS ACTIFS (colle-les ici)', color: '#FCD34D' },
              { text: '[Script 1 complet]', color: '#64748B' },
              { text: '[Script 2 complet]', color: '#64748B' },
              { text: '[Script 3 complet — ajouter autant que nécessaire]', color: '#64748B' },
              { text: '', color: '' },
              { text: '# ANALYSE DEMANDÉE', color: '#86EFAC' },
              { text: '1. Vocabulaire saturé : liste tous les mots répétés 2 fois ou plus entre les scripts', color: '#86EFAC' },
              { text: '2. CTA : sont-ils différents ? Lesquels sont identiques ?', color: '#86EFAC' },
              { text: '3. Angles : quelle révélation centrale chaque script utilise ? Y a-t-il des doublons ?', color: '#86EFAC' },
              { text: '4. Ton : repère les phrases qui sonnent IA (trop longues, trop formelles)', color: '#86EFAC' },
              { text: '5. Hooks : lesquels créent une tension réelle ? Lesquels sont trop génériques ?', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# FORMAT DE RÉPONSE', color: '#FCA5A5' },
              { text: 'Pour chaque script : liste les problèmes précis + une correction concrète pour chacun', color: '#FCA5A5' },
              { text: 'Termine par : quels scripts garder, lesquels réécrire entièrement', color: '#FCA5A5' },
              { text: '', color: '' },
              { text: '# RÈGLES DE RÉFÉRENCE', color: '#93C5FD' },
              { text: 'Bannis absolus : "je te juge pas" / "je te jure" / "résultats" utilisé en masse', color: '#FCA5A5' },
              { text: 'Maximum 1 script actif avec "c\'est pas de ta faute"', color: '#FCA5A5' },
              { text: 'Maximum 1 angle actif parmi : ERREURS / RÉVÉLATIONS / TEMPS / VIE PERSO / CEO', color: '#FCA5A5' },
            ],
          },
        },
      },
      {
        id: 'm1-s6', title: 'Checklist : Audit terminé', type: 'checklist',
        content: {
          checklist: [
            '"Je te juge pas" absent de tous les scripts actifs',
            '"C\'est pas de ta faute" dans 1 script maximum',
            'CTA différent sur chaque script actif simultanément',
            'La même révélation centrale dans 1 script maximum',
            'Aucun script actif ne partage plus de 2 mots identiques avec un autre',
            '1 seul angle parmi les 5 est actif cette semaine',
            'Chaque script se lit à voix haute sans accroc',
            'Aucune phrase de plus de 7 mots (sauf exception justifiée)',
          ],
        },
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     M2  LE HOOK PARFAIT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'm2', num: 2, title: 'Le Hook Parfait', subtitle: 'Les 3 premières secondes décident de tout', color: '#0023DC',
    slides: [
      {
        id: 'm2-s1', title: 'Le Hook Parfait', type: 'title',
        content: {
          subtitle: 'Les 3 premières secondes décident de tout',
          quote: 'Un hook ne vend pas. Un hook stoppe. Si l\'audience scrolle à la 3e seconde, le reste du script n\'existe pas. Le hook c\'est 80% du résultat d\'une ADS.',
          stats: [
            { value: '3 sec', label: 'avant le scroll' },
            { value: '73%', label: 'des vues durent moins de 5s' },
            { value: '5 types', label: 'de hooks qui fonctionnent' },
            { value: 'Homme ≠ Femme', label: 'psychologie différente' },
          ],
          items: [
            { num: '01', title: 'Les 5 types de hooks qui stoppent le scroll', sub: 'Contradiction, constat douleur, chiffre dérangeant, question miroir, affirmation contre-intuitive' },
            { num: '02', title: 'Hook faible vs Hook fort', sub: 'Les erreurs concrètes avec exemples réels' },
            { num: '03', title: 'La psychologie par avatar', sub: 'Homme : logique + chiffre. Femme : identité + émotion.' },
            { num: '04', title: 'Checklist hook', sub: 'Les 8 questions à se poser avant de valider un hook' },
          ],
        },
      },
      {
        id: 'm2-s2', title: 'Les 5 types de hooks', type: 'hooks',
        content: {
          hooks: [
            {
              num: '01', type: 'Contradiction effort/résultat', typeBg: '#DBEAFE', typeColor: '#1D4ED8',
              src: 'Le plus efficace tous avatars confondus', accentColor: '#0023DC',
              text: '"Tu t\'entraînes 4x par semaine. Ton ventre grossit quand même."',
              mechanism: 'Crée une dissonance cognitive immédiate. L\'audience ne peut pas scroller parce que la contradiction est non résolue. Le cerveau cherche automatiquement la réponse. Ce type de hook fonctionne en cold et retargeting — la contradiction est universelle.',
              target: 'Hommes 35-44 ans actifs · Femmes qui font du sport sans résultats',
              rule: 'Effort visible + résultat inverse. Toujours factuel, jamais accusatoire.',
            },
            {
              num: '02', type: 'Constat de douleur précis', typeBg: '#FEE2E2', typeColor: '#DC2626',
              src: 'Fonctionne surtout en retargeting', accentColor: '#DC2626',
              text: '"T\'as tout essayé. Les régimes, le sport. Ton corps, il a quasiment pas bougé."',
              mechanism: 'Valide l\'effort passé sans juger. L\'audience se reconnaît avant la fin de la 2e phrase. Ce hook nomme une frustration réelle et précise — pas une douleur générique comme "tu veux perdre du poids". La précision = l\'identification.',
              target: 'Retargeting · Audience chaude · Personnes avec historique de tentatives',
              rule: 'Nommer la frustration spécifique, pas le désir général.',
            },
            {
              num: '03', type: 'Chiffre qui dérange', typeBg: '#DCFCE7', typeColor: '#059669',
              src: 'Crédibilité immédiate + curiosité maximale', accentColor: '#059669',
              text: '"Le cardio après 35 ans brûle 40% moins de calories. C\'est physiologique."',
              mechanism: 'Un chiffre précis et contre-intuitif déclenche automatiquement la curiosité. L\'audience ne peut pas ignorer une donnée chiffrée qui contredit sa croyance. "40%" est mémorisable et partageable. Le chiffre doit être réel et vérifiable — sinon perte de crédibilité.',
              target: 'Hommes et femmes 35+ · Pratiquants réguliers de cardio · Cold traffic',
              rule: 'Chiffre + mécanisme = hook crédible. Jamais de chiffre inventé.',
            },
            {
              num: '04', type: 'Question miroir', typeBg: '#EDE9FE', typeColor: '#7C3AED',
              src: 'Surtout efficace pour les femmes', accentColor: '#7C3AED',
              text: '"T\'es la première levée, la dernière couchée. Et ton corps, il te le rend pas."',
              mechanism: 'L\'audience se reconnaît dans une situation précise avant même le mot "poids". Fonctionne particulièrement bien avec les femmes 28-45 ans en charge de famille ou de travail intense. La clé : décrire une situation concrète du quotidien, pas un sentiment.',
              target: 'Femmes 28-45 ans · Charge mentale élevée · Mères actives',
              rule: 'Décrire la situation de vie, pas la douleur physique directement.',
            },
            {
              num: '05', type: 'Affirmation contre-intuitive', typeBg: '#FEF3C7', typeColor: '#B45309',
              src: 'Brise une croyance ancrée', accentColor: '#EA580C',
              text: '"Manger moins, c\'est souvent la raison pour laquelle tu grossis."',
              mechanism: 'Contredit une croyance tellement ancrée que l\'audience ne peut pas scroller sans comprendre pourquoi. Le cerveau reçoit une information contradictoire à ce qu\'il tient pour vrai. Attention : ce type de hook exige une révélation forte derrière — sinon perte totale de crédibilité.',
              target: 'Femmes avec historique de régimes restrictifs · Personnes en yo-yo',
              rule: 'La révélation qui suit doit être à la hauteur de la promesse du hook.',
            },
          ],
        },
      },
      {
        id: 'm2-s3', title: 'Hook faible vs Hook fort', type: 'comparison',
        content: {
          badLabel: '✗  Hook faible : fait scroller',
          goodLabel: '✓  Hook fort : stoppe le scroll',
          comparison: [
            { bad: '"Je vais te montrer comment perdre du poids efficacement"', good: '"Tu fais 3h de sport par semaine. Et rien ne bouge depuis 4 mois."' },
            { bad: '"Dans cette vidéo, j\'explique ma méthode de coaching"', good: '"Le cardio après 35 ans brûle 40% moins. C\'est pour ça que ta balance stagne."' },
            { bad: '"T\'as déjà essayé de perdre du poids ?"', good: '"T\'as essayé 3 régimes. Ton corps récupère à chaque fois plus vite qu\'avant."' },
            { bad: '"Beaucoup de gens ont du mal à maigrir malgré leurs efforts"', good: '"Le gras du ventre après 35 ans, c\'est le cortisol. Pas les calories seules."' },
            { bad: '"Salut, moi c\'est [Prénom], coach nutrition depuis 5 ans"', good: '"J\'ai arrêté le cardio. En 6 semaines : moins 6 kg. Voilà ce que j\'ai compris."' },
          ],
          summaryBad: 'Présentation personnelle · Promesse vague · Question générique · Annonce du plan · Statistique sans chiffre',
          summaryGood: 'Douleur précise + situation concrète · Chiffre réel · Contradiction · Fait physiologique · Résultat personnel avec durée',
        },
      },
      {
        id: 'm2-s4', title: 'La psychologie par avatar', type: 'content',
        content: {
          intro: 'Le même produit, deux cerveaux différents. Le hook doit parler à la logique de l\'un et à l\'identité de l\'autre.',
          sections: [
            {
              title: 'Homme 35-44 ans : logique, chiffre, mécanisme', color: '#0023DC',
              cards: [
                {
                  title: 'Ce qui l\'arrête en 3 secondes',
                  body: 'Un chiffre précis. Un mécanisme physiologique. Une contradiction entre son effort visible et son résultat nul.\n\nIl veut comprendre POURQUOI. Il ne réagit pas à l\'émotion — il réagit à l\'information.\n\nEx : "Ton corps s\'adapte au cardio en 3 semaines. Après : 40% de calories brûlées en moins pour le même effort."\n\nRègle : chiffre + mécanisme + implication directe sur sa situation.',
                },
              ],
            },
            {
              title: 'Femme 28-45 ans : identité, situation de vie, émotion', color: '#7C3AED',
              cards: [
                {
                  title: 'Ce qui l\'arrête en 3 secondes',
                  body: 'Une situation de vie précise dans laquelle elle se reconnaît immédiatement. Une phrase qui dit "je te vois" sans le dire.\n\nElle réagit à l\'identité, pas à la physiologie. Elle veut sentir que le coach comprend SA vie, pas juste son corps.\n\nEx : "T\'es la première levée. La dernière couchée. Et ton corps, il te le rend pas."\n\nRègle : situation concrète du quotidien + lien avec le physique + porte de sortie émotionnelle.',
                },
              ],
            },
            {
              title: 'Cold traffic vs Retargeting : deux niveaux de précision', color: '#059669',
              cards: [
                {
                  title: 'Adapter le niveau de spécificité',
                  body: 'Cold traffic : hook plus universel, douleur large mais précise dans la forme.\nEx : "Tu t\'entraînes régulièrement. Et tu stagnes depuis des mois."\n\nRetargeting : hook ultra-spécifique, l\'audience t\'a déjà vu, elle a déjà scrollé une fois.\nEx : "T\'as vu ma dernière vidéo. T\'as pas encore réservé. Voilà ce que tu rates."\n\nEn retargeting : être direct sur le fait qu\'ils te connaissent déjà.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'm2-s5', title: 'Checklist : Mon hook est prêt', type: 'checklist',
        content: {
          checklist: [
            'Se comprend entièrement en moins de 3 secondes',
            'Cible une douleur spécifique, pas une douleur générique',
            'Contient un chiffre OU une situation de vie concrète',
            'Crée une tension ou une contradiction non résolue',
            'Ne peut pas être utilisé par n\'importe quel autre coach',
            'Adapté à la psychologie de l\'avatar (homme logique / femme identité)',
            'Aucune présentation personnelle dans les 3 premières secondes',
            'Lu à voix haute : sonne naturel, pas écrit',
          ],
        },
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     M3  LE CORPS DE L'ADS
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'm3', num: 3, title: "Le Corps de l'ADS", subtitle: 'La révélation qui transforme un prospect en lead', color: '#7C3AED',
    slides: [
      {
        id: 'm3-s1', title: "Le Corps de l'ADS", type: 'title',
        content: {
          subtitle: 'Mécanisme + Validation + Transition : les 3 blocs entre le hook et le CTA',
          quote: 'Le corps de l\'ADS, c\'est la révélation. Donner un vrai insight ne spoile pas ta méthode — ça prouve qu\'elle existe. C\'est ce qui transforme un spectateur en lead qualifié.',
          stats: [
            { value: '3 blocs', label: 'Mécanisme / Validation / Transition' },
            { value: 'Niveau 4/5', label: 'de concret minimum' },
            { value: '3 à 5 phrases', label: 'pour le corps complet' },
            { value: 'H ≠ F', label: 'logique vs émotion' },
          ],
          items: [
            { num: '01', title: 'Anatomie du corps : 3 blocs', sub: 'Le mécanisme, la validation, la transition vers le CTA' },
            { num: '02', title: 'Teasing creux vs Révélation réelle', sub: 'Ce qui vide le CPL vs ce qui le fait baisser' },
            { num: '03', title: '4 corps d\'ADS testés et analysés', sub: 'Homme et femme, avec le mécanisme derrière chacun' },
            { num: '04', title: 'Checklist : mon corps d\'ADS est prêt', sub: 'Les 8 critères non négociables' },
          ],
        },
      },
      {
        id: 'm3-s2', title: "Anatomie du corps : les 3 blocs", type: 'content',
        content: {
          intro: 'Hook → [Mécanisme] → [Validation] → [Transition] → CTA. Chaque bloc a un rôle précis. En supprimer un = perdre de la conversion.',
          sections: [
            {
              title: 'Bloc 1 — Le Mécanisme (la révélation physiologique)', color: '#7C3AED',
              cards: [
                {
                  title: 'Ce que le mécanisme doit faire',
                  body: 'Expliquer POURQUOI le problème existe avec un fait réel et précis. Pas une promesse — une information.\n\nLe mécanisme doit être : vérifiable, chiffré si possible, contre-intuitif, non connu de l\'audience.\n\nEx : "Ton corps s\'adapte au cardio en 3 semaines. Après : il brûle 40% moins de calories pour le même effort. EXACTEMENT pour ça que ta balance bouge plus."\n\nRègle : une croyance fausse + la raison réelle + la conséquence concrète.',
                },
              ],
            },
            {
              title: 'Bloc 2 — La Validation (1 phrase, jamais 2)', color: '#0023DC',
              cards: [
                {
                  title: 'Valider sans juger, une seule fois',
                  body: 'La validation libère l\'audience du sentiment de faute. Elle repose entièrement sur le mécanisme — ce n\'est pas une erreur de l\'audience, c\'est de la physiologie.\n\nUne phrase. Maximum. Et jamais "je te juge pas" ou "c\'est pas de ta faute" — trop répétés, trop détectés.\n\nEx : "C\'est un mécanisme physiologique. Pas un manque de volonté."\nEx : "C\'est pas ta discipline le problème. C\'est la méthode."\nEx : "C\'est logique que ça n\'ait pas marché avec cette approche."',
                },
              ],
            },
            {
              title: 'Bloc 3 — La Transition (pont vers le CTA)', color: '#059669',
              cards: [
                {
                  title: 'Créer le besoin sans forcer',
                  body: 'La transition ne vend pas. Elle crée l\'évidence que la suite existe et que l\'audience en a besoin.\n\nPas de promesse exagérée. Pas de "et moi j\'ai la solution". Juste l\'implication logique du mécanisme.\n\nEx : "Si tu te reconnais là-dedans, c\'est exactement ce qu\'on traite en bilan."\nEx : "C\'est pour ça que ma méthode ne ressemble à aucun programme classique."\n\nRègle : la transition doit couler naturellement du mécanisme. L\'audience doit avoir l\'impression que le CTA est logique, pas commercial.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'm3-s3', title: 'Teasing creux vs Révélation réelle', type: 'comparison',
        content: {
          badLabel: '✗  Teasing creux : perte de crédibilité',
          goodLabel: '✓  Révélation réelle : convertit',
          comparison: [
            { bad: '"Y a un ordre logique à respecter" — sans expliquer lequel', good: '"Le ventre se perd par déficit calorique global, pas par les abdos. Les abdos musculent. Ils ne brûlent pas le gras autour."' },
            { bad: '"Il faut juste avoir la bonne structure" — sans aucun contenu', good: '"Ton corps s\'adapte au cardio en 3 semaines. Après : même effort, 40% moins de calories brûlées."' },
            { bad: '"Ma méthode change tout" — promesse sans preuve', good: '"Le gras ventral après 35 ans est lié au cortisol, pas aux calories seules. Manger peu avec du stress chronique = stockage."' },
            { bad: '"Quand tu sais faire, les résultats arrivent" — vide total', good: '"Changer de programme avant 6 semaines = zéro adaptation neuromusculaire. Ton corps n\'a pas eu le temps de progresser."' },
          ],
          summaryBad: 'Mystérieux sans raison · Promet sans donner · Perd la crédibilité en 2 phrases · L\'audience se dit "encore un coach qui parle pour rien dire"',
          summaryGood: 'Donne un fait réel · Explique le mécanisme précis · Crée la curiosité pour la méthode complète · L\'audience pense "il sait de quoi il parle"',
        },
      },
      {
        id: 'm3-s4', title: "4 corps d'ADS testés", type: 'hooks',
        content: {
          hooks: [
            {
              num: 'H', type: 'Homme 35-44 — Angle Cortisol', typeBg: '#DBEAFE', typeColor: '#1D4ED8',
              src: 'Mécanisme : cortisol + stockage de gras', accentColor: '#0023DC',
              text: '"Le gras du ventre après 35 ans est lié au cortisol, pas aux calories seules. Tu peux manger peu et stocker quand même si ton cortisol est élevé."',
              mechanism: 'Double mécanisme : contre-croyance calorique ET explication hormonale. L\'homme comprend immédiatement pourquoi son régime n\'a pas marché. La précision ("après 35 ans") cible directement son avatar.',
              target: 'Hommes 35-50 ans · Actifs · Régimes inefficaces · Ventre résistant',
              rule: 'Mécanisme hormonal + chiffre implicite dans la précision + contre-croyance forte',
            },
            {
              num: 'H', type: 'Homme 35-44 — Angle Adaptation', typeBg: '#DBEAFE', typeColor: '#1D4ED8',
              src: 'Mécanisme : adaptation du corps au cardio', accentColor: '#7C3AED',
              text: '"Ton corps s\'adapte au cardio en 3 semaines. Après, tu brûles 40% de calories en moins pour le même effort. EXACTEMENT pour ça que ta balance ne bouge plus."',
              mechanism: '"3 semaines" et "40%" = deux chiffres précis impossibles à ignorer. Le "EXACTEMENT" en majuscules simule l\'emphase orale. Ce corps d\'ADS répond directement à la contradiction du hook "tu t\'entraînes mais rien ne bouge".',
              target: 'Hommes actifs · Cardio régulier sans résultats · 30-50 ans',
              rule: 'Durée précise + pourcentage précis + MAJUSCULE sur le mot pivot',
            },
            {
              num: 'F', type: 'Femme 28-45 — Angle Restriction', typeBg: '#DCFCE7', typeColor: '#059669',
              src: 'Mécanisme : métabolisme et restriction', accentColor: '#059669',
              text: '"La vraie raison pour laquelle les régimes ne tiennent pas : à chaque restriction sévère, ton corps apprend à ralentir son métabolisme. La prochaine fois, il stocke encore plus vite."',
              mechanism: 'Valide toutes les tentatives passées sans juger. Explique le yo-yo de manière physiologique. La femme comprend que CE N\'EST PAS SA FAUTE — sans que cette phrase soit prononcée. C\'est la validation implicite la plus puissante.',
              target: 'Femmes 28-45 ans · Historique de régimes · Yo-yo · Restriction répétée',
              rule: 'Validation implicite via le mécanisme · Ne jamais dire "c\'est pas ta faute" explicitement',
            },
            {
              num: 'F', type: 'Femme 28-45 — Angle Stress/Vie', typeBg: '#DCFCE7', typeColor: '#059669',
              src: 'Mécanisme : cortisol et charge mentale', accentColor: '#EA580C',
              text: '"Tu t\'occupes de tout le monde depuis des années. Ton corps a mémorisé ce stress. Le cortisol chronique demande à ton organisme de stocker — pas de brûler."',
              mechanism: 'Relie directement la vie émotionnelle et sociale au mécanisme physiologique. La femme ne se voit plus comme "pas assez disciplinée" mais comme quelqu\'un dont le corps a réagi à une situation de vie réelle. Réduit la culpabilité = réduit la résistance au CTA.',
              target: 'Femmes 30-50 ans · Charge mentale élevée · Mères / aidantes / managers',
              rule: 'Situation de vie → mécanisme physique → implication directe',
            },
          ],
        },
      },
      {
        id: 'm3-s5', title: "Checklist : Mon corps d'ADS est prêt", type: 'checklist',
        content: {
          checklist: [
            'Le mécanisme corrige une croyance fausse précise (pas vague)',
            'Le mécanisme contient un fait physiologique réel et vérifiable',
            'Au moins un chiffre ou une durée précise dans le corps',
            'La validation n\'utilise ni "je te juge pas" ni "c\'est pas de ta faute"',
            'La validation découle logiquement du mécanisme (implicite, pas déclaré)',
            'La transition crée le besoin sans promesse exagérée',
            'Corps adapté au genre : logique+chiffre pour H, situation+émotion pour F',
            'L\'ensemble hook + corps se lit en 20 à 30 secondes maximum à voix haute',
          ],
        },
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     M4  ÉCRIRE COMME LE CLIENT
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'm4', num: 4, title: 'Écrire comme le Client', subtitle: 'Turboscribe → Objections → Mots exacts dans tes scripts', color: '#059669',
    slides: [
      {
        id: 'm4-s1', title: 'Écrire comme le Client', type: 'title',
        content: {
          subtitle: 'Les mots qui convertissent le mieux ne viennent pas de toi. Ils viennent de tes clients.',
          quote: 'Les meilleures ADS ne s\'inventent pas. Elles s\'extraient des calls de tes coachs. Quand un prospect dit "j\'ai l\'impression que mon corps fait exprès de stocker", cette phrase vaut plus que n\'importe quel script rédigé de zéro.',
          stats: [
            { value: '3-4 calls', label: 'closés du mois précédent' },
            { value: 'Turboscribe', label: 'pour transcrire les calls' },
            { value: '1 prompt', label: 'pour extraire les insights' },
            { value: 'Mots exacts', label: 'du client dans les scripts' },
          ],
          items: [
            { num: '01', title: 'Vocabulaire coach vs Vocabulaire client', sub: 'Pourquoi le client te reconnaît dans ses propres mots' },
            { num: '02', title: 'Le process Turboscribe en 4 étapes', sub: 'Calls → Transcription → Extraction → Injection dans les scripts' },
            { num: '03', title: 'Ce qu\'on extrait d\'un call', sub: 'Objections, formulations de douleur, résistances, mots exacts' },
            { num: '04', title: 'Prompt : extraction d\'objections depuis transcript', sub: 'Le prompt manquant pour transformer un call en banque de hooks' },
          ],
        },
      },
      {
        id: 'm4-s2', title: 'Vocabulaire coach vs Vocabulaire client', type: 'comparison',
        content: {
          badLabel: '✗  Vocabulaire coach : personne ne se reconnaît',
          goodLabel: '✓  Vocabulaire client : l\'audience dit "c\'est exactement moi"',
          comparison: [
            { bad: '"Optimiser ta physiologie pour un déficit calorique contrôlé"', good: '"T\'as l\'impression que ton corps fait exprès de stocker même quand tu manges presque rien"' },
            { bad: '"Restructurer ton protocole nutritionnel et d\'entraînement"', good: '"T\'as essayé le régime de ton amie. Tu as tenu 3 semaines. Et ton corps a récupéré en 2."' },
            { bad: '"Lever les freins métaboliques pour optimiser ta progression"', good: '"Tu te lèves le matin. Tu es déjà fatiguée. Avant même de commencer."' },
            { bad: '"Adopter une approche holistique de ta remise en forme"', good: '"T\'as plus envie de te regarder dans le miroir. Alors tu évites."' },
            { bad: '"Rééquilibrer tes hormones pour favoriser la lipolyse"', good: '"T\'as fait 4 régimes en 2 ans. À chaque fois tu reprends plus que ce que t\'avais perdu."' },
          ],
          summaryBad: 'Jargon technique · Promesse abstraite · Le coach parle à lui-même · L\'audience décroche en 2 secondes',
          summaryGood: 'Situation vécue · Formulation exacte du client · Reconnaissance immédiate · "Il comprend ma vie"',
        },
      },
      {
        id: 'm4-s3', title: 'Le process Turboscribe en 4 étapes', type: 'content',
        content: {
          intro: 'Une fois par mois. 1h de travail. Une banque de mots qui améliore tous les scripts du mois suivant.',
          sections: [
            {
              title: 'Étape 1 — Récupérer les bons calls', color: '#059669',
              cards: [
                {
                  title: 'Quels calls choisir',
                  body: 'Prendre 3 à 4 calls closés du mois précédent. Pas les calls ratés — les calls où le prospect a dit OUI.\n\nPourquoi les calls closés ? Parce que le prospect a verbalisé sa douleur suffisamment fort pour passer à l\'action. Ce sont ses mots les plus honnêtes et les plus intenses.\n\nSi pas de calls disponibles : utiliser les messages WhatsApp ou DM des leads entrants. La logique est la même.',
                },
              ],
            },
            {
              title: 'Étape 2 — Transcrire dans Turboscribe', color: '#0023DC',
              cards: [
                {
                  title: 'Turboscribe : mode d\'emploi rapide',
                  body: 'Aller sur turboscribe.io · Créer un compte gratuit (limité) ou prendre l\'abonnement si volume élevé.\n\nUploader l\'enregistrement du call (Zoom, Loom, Google Meet — tous les formats acceptés).\n\nChoisir la langue : Français. Lancer la transcription. En 5 à 10 minutes : transcript complet avec les deux voix séparées (coach / prospect).\n\nTélécharger le transcript en .txt ou copier directement dans Claude.',
                },
              ],
            },
            {
              title: 'Étape 3 — Extraire avec le prompt', color: '#7C3AED',
              cards: [
                {
                  title: 'Ce qu\'on cherche dans le transcript',
                  body: 'Les moments où le prospect décrit SA douleur avec SES mots.\nLes objections qu\'il a levées avant d\'acheter (révèlent les vraies peurs).\nLes formulations répétées : si un mot revient 3 fois, il est important.\nLes métaphores qu\'il utilise : "mon corps fait exprès", "j\'ai l\'impression d\'être cassée".\n\nCes formulations sont de l\'or. Elles seront les hooks et le corps des ADS du mois suivant.',
                },
              ],
            },
            {
              title: 'Étape 4 — Injecter dans les scripts', color: '#EA580C',
              cards: [
                {
                  title: 'De la banque de mots au script',
                  body: 'Créer une liste de 10 à 15 formulations exactes extraites des calls.\n\nPour chaque script à générer : coller les formulations pertinentes dans le prompt de génération (M5).\n\nClaude va s\'appuyer sur ces mots exacts pour construire les hooks et le corps.\n\nRésultat : l\'audience qui a le même profil que le prospect du call va se reconnaître mot pour mot dans l\'ADS.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'm4-s4', title: 'Prompt : Extraction d\'objections depuis transcript', type: 'prompt',
        content: {
          prompt: {
            target: 'Transformer un transcript Turboscribe en banque de mots et de hooks pour les ADS du mois',
            lines: [
              { text: '# CONTEXTE', color: '#93C5FD' },
              { text: 'Tu es expert en copywriting pour coachs. Tu vas analyser un transcript de call de vente.', color: '#64748B' },
              { text: 'Ton rôle : extraire les formulations EXACTES du prospect pour créer des ADS qui résonnent.', color: '#64748B' },
              { text: '', color: '' },
              { text: '# TRANSCRIPT DU CALL (colle ici)', color: '#FCD34D' },
              { text: '[Colle le transcript complet exporté depuis Turboscribe]', color: '#64748B' },
              { text: '', color: '' },
              { text: '# TÂCHE 1 — Douleurs et frustrations', color: '#86EFAC' },
              { text: 'Identifie tous les moments où le prospect décrit sa douleur ou sa frustration.', color: '#86EFAC' },
              { text: 'Cite les phrases EXACTES — pas de paraphrase, pas de reformulation.', color: '#86EFAC' },
              { text: 'Format : "Citation exacte" → type de douleur (physique / émotionnelle / sociale)', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# TÂCHE 2 — Objections levées', color: '#86EFAC' },
              { text: 'Identifie les résistances que le prospect a exprimées AVANT de dire oui.', color: '#86EFAC' },
              { text: 'Ces objections = les vraies peurs. Elles doivent apparaître dans les ADS pour résonner.', color: '#86EFAC' },
              { text: 'Format : "L\'objection exacte" → ce qu\'elle révèle comme peur réelle', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# TÂCHE 3 — Banque de hooks', color: '#FCD34D' },
              { text: 'À partir des citations extraites : propose 5 hooks ADS qui utilisent ces mots exacts.', color: '#FCD34D' },
              { text: 'Respecter : maximum 5 mots par phrase / ton oral / pas de jargon technique', color: '#FCD34D' },
              { text: '', color: '' },
              { text: '# RÈGLES ABSOLUES', color: '#FCA5A5' },
              { text: 'Jamais de paraphrase — les mots exacts du client UNIQUEMENT', color: '#FCA5A5' },
              { text: 'Ton humain : comme si le prospect parlait dans l\'ADS', color: '#FCA5A5' },
              { text: 'Bannis : "optimal" / "durablement" / "il est essentiel de" / jargon coach', color: '#FCA5A5' },
            ],
          },
        },
      },
      {
        id: 'm4-s5', title: 'Checklist : Écrire comme le client', type: 'checklist',
        content: {
          checklist: [
            '3 à 4 calls closés récupérés du mois précédent',
            'Calls transcrits dans Turboscribe (langue : Français)',
            'Transcripts analysés avec le prompt d\'extraction',
            'Banque de 10 à 15 formulations exactes créée',
            'Au moins 1 formulation du client utilisée dans chaque hook',
            'Aucun mot de jargon coach dans les scripts finaux',
            'Le script relu : l\'avatar cible se reconnaîtrait dans chaque phrase',
            'Banque de mots mise à jour chaque mois avec de nouveaux calls',
          ],
        },
      },
    ],
  },

  /* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     M5  PROCESS COMPLET
  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
  {
    id: 'm5', num: 5, title: 'Process Complet', subtitle: "De l'appel closé au script diffusé", color: '#0023DC',
    slides: [
      {
        id: 'm5-s1', title: 'Process Complet', type: 'title',
        content: {
          subtitle: "De l'appel closé au script diffusé",
          quote: 'Tout commence par les calls. Les mots de tes clients sont la matière première. Le prompt maître est l\'outil. La vérification manuelle est ce qui sépare un bon script d\'un script diffusable.',
          stats: [
            { value: 'Début de mois', label: 'Calls + Turboscribe' },
            { value: 'Lundi', label: 'Angle + génération' },
            { value: 'Avant diffusion', label: 'Vérif manuelle' },
            { value: '72h', label: 'Test minimum' },
          ],
          items: [
            { num: '01', title: 'Calls → Turboscribe → Extraction', sub: 'Récupérer les mots du client avant de créer quoi que ce soit' },
            { num: '02', title: 'Choisir l\'angle + lancer le prompt maître', sub: '3 scripts complets en une seule requête' },
            { num: '03', title: 'Vérification manuelle obligatoire', sub: 'Relire à voix haute, couper, corriger, valider' },
            { num: '04', title: 'Activer 72h + analyser + itérer', sub: 'CTR à 24h, CPL à 48h, angle suivant le weekend' },
          ],
        },
      },
      {
        id: 'm5-s2', title: 'Les 4 étapes du process', type: 'content',
        content: {
          intro: 'Dans cet ordre. Sans sauter d\'étape. La majorité des scripts qui ne convertissent pas ont sauté l\'étape 1 ou l\'étape 3.',
          sections: [
            {
              title: 'Étape 1 (Début de mois) — Calls + Turboscribe + Extraction', color: '#059669',
              cards: [
                {
                  title: 'La matière première',
                  body: 'Récupérer 3 à 4 calls closés du mois précédent → les mettre dans Turboscribe → lancer le prompt d\'extraction (Module 4).\n\nRésultat : une banque de 10 à 15 formulations exactes du client. Ces mots alimentent tous les scripts du mois. À faire une fois par mois.',
                },
              ],
            },
            {
              title: 'Étape 2 (Lundi) — Choisir l\'angle + Générer avec le prompt maître', color: '#0023DC',
              cards: [
                {
                  title: 'Un angle, trois scripts, un seul prompt',
                  body: 'Choisir l\'angle de la semaine parmi les 5. Vérifier qu\'aucun script actif ne couvre déjà cet angle.\n\nLancer LE prompt maître (slide suivante) avec : l\'angle, l\'avatar, 3 formulations exactes des calls, les 2 meilleurs scripts passés en référence.\n\nRésultat : 3 scripts complets, hooks différents, même révélation, CTA variés.',
                },
              ],
            },
            {
              title: 'Étape 3 (Avant diffusion) — Vérification manuelle OBLIGATOIRE', color: '#DC2626',
              cards: [
                {
                  title: 'Claude produit un brouillon. Toi tu fais le script final.',
                  body: 'Lire chaque script à voix haute. Tout ce qui accroche = réécrire.\nCouper toute phrase de plus de 7 mots.\nSupprimer les mots IA : "optimal" / "durablement" / "notamment" / "il est essentiel".\nVérifier la ponctuation et la MAJUSCULE sur le bon mot.\nVérifier que le CTA commence par "Si tu te reconnais..." ou équivalent conditionnel.',
                },
              ],
            },
            {
              title: 'Étape 4 (Mardi→Weekend) — Activer + Analyser + Itérer', color: '#EA580C',
              cards: [
                {
                  title: 'Les seuls chiffres qui comptent',
                  body: 'Budget : 30 à 50€ par script · Durée minimum : 72h\n\nÀ 24h : CTR < 1% → réécrire le hook. CTR > 2% → doubler le budget.\nÀ 48h : CPL > 30€ → réviser le corps ou CTA. CPL < 15€ → scaler.\nFréquence > 3 → désactiver, changer d\'angle.\n\nWeekend : coller les stats dans Claude. Choisir l\'angle de la semaine suivante.',
                },
              ],
            },
          ],
        },
      },
      {
        id: 'm5-s3', title: 'LE Prompt Maître — 3 scripts en une requête', type: 'prompt',
        content: {
          prompt: {
            target: 'Générer 3 scripts ADS complets (hook + corps + CTA) en une seule requête',
            lines: [
              { text: '# CONTEXTE', color: '#93C5FD' },
              { text: 'Avatar : [homme 35-44 / femme 28-40 / CEO]', color: '#64748B' },
              { text: 'Angle de la semaine : [ERREURS / RÉVÉLATIONS / TEMPS / VIE PERSO / CEO]', color: '#64748B' },
              { text: '', color: '' },
              { text: '# MOTS DE MES CLIENTS (depuis les calls Turboscribe ce mois-ci)', color: '#FCD34D' },
              { text: '[Colle ici 3 à 5 formulations exactes — pas de paraphrase, les mots exacts]', color: '#64748B' },
              { text: 'Ces formulations doivent apparaître telles quelles dans les hooks ou le corps.', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# MES MEILLEURS SCRIPTS EN RÉFÉRENCE', color: '#FCD34D' },
              { text: '[Colle tes 2 scripts avec les meilleurs CTR et CPL]', color: '#64748B' },
              { text: 'Analyse le ton, les patterns, et reproduis-les sans copier le contenu.', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# TÂCHE : 3 scripts ADS complets', color: '#86EFAC' },
              { text: 'Script 1 : hook contradiction · Script 2 : hook constat douleur · Script 3 : hook chiffre', color: '#86EFAC' },
              { text: 'Même révélation pour les 3 · CTA différent : "passe le test" / "vois si éligible" / "réponds aux 3 questions"', color: '#86EFAC' },
              { text: 'Structure : hook (2 phrases max) + corps (3-4 phrases) + validation (1 phrase) + CTA conditionnel', color: '#86EFAC' },
              { text: '', color: '' },
              { text: '# ANTI-RÉPÉTITION', color: '#FCD34D' },
              { text: 'Zéro mot commun entre les 3 hooks · Zéro structure identique entre les 3 scripts', color: '#FCA5A5' },
              { text: "Chaque script doit pouvoir toucher un avatar qui n'a jamais vu les autres", color: '#FCA5A5' },
              { text: '', color: '' },
              { text: '# RÈGLES ABSOLUES', color: '#93C5FD' },
              { text: 'Ton oral, phrases max 7 mots, se lit à voix haute sans accroc', color: '#FCA5A5' },
              { text: 'Bannis : "je te juge pas" · "optimal" · "durablement" · "notamment" · "il est essentiel"', color: '#FCA5A5' },
              { text: '1 seule MAJUSCULE par script sur le mot pivot · CTA toujours conditionnel', color: '#FCA5A5' },
            ],
          },
        },
      },
    ],
  },
];
