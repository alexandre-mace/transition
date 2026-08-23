type Debunk = {
  question: string;
  answer: string;
  sources: (string | { name: string; url: string })[];
  images: string[];
  category: string;
  tags: string[];
};

const CATEGORY_CAUSE = "cause";
const CATEGORY_CONSEQUENCES = "consequences";
const CATEGORY_SOLUTIONS = "solutions";
const CATEGORY_ANNEXES = "annexes";

const CLIMATOSCEPTIQUE = "Climatosceptique 🤥";
const INACTION = "Inaction 🦥";
const EMISSIONS = "Émissions 💨";
const FRANCE = "France 🇫🇷";
const INEGALITES = "Inégalites ⚖️";
const LIMITES_PLANETAIRES = "Limites planétaires 🛑";
const METEOROLOGIE = "Météorologie 🌦️";
const POINTS_DE_BASCULE = "Points de bascule 🤸";
const SANTE = "Santé 🤒";
const EFFICACITE = "Efficacité ✨";
const RENOUVELABLES = "Renouvelables ⚡️";
const SCENARIOS = "Scénarios 🎬";
const MATERIAUX = "Matériaux 🪨";
const VOITURE_ELECTRIQUE = "Voiture électrique 🚙";
const ECOANXIETE = "Écoanxiété 😥";
const HYDROGENE = "Hydrogène ⚗️";
const AGRICULTURE = "Agriculture 🚜";
const FINANCE = "Finance 🏦";
const SOBRIETE = "Sobriété 🪶";
const DECROISSANCE = "Décroissance 📉";
const DESINFORMATION = "Désinformation 🤥";
const BIOCARBURANTS = "Biocarburants 🌾";
const AVIATION = "Aviation ✈️";
const INDIVIDU = "Individu 🙋";
const BIODIVERSITE = "Biodiversité 🪱";

const tags = [
  CLIMATOSCEPTIQUE,
  INACTION,
  EMISSIONS,
  FRANCE,
  INEGALITES,
  LIMITES_PLANETAIRES,
  METEOROLOGIE,
  POINTS_DE_BASCULE,
  SANTE,
  EFFICACITE,
  RENOUVELABLES,
  SCENARIOS,
  MATERIAUX,
  VOITURE_ELECTRIQUE,
  ECOANXIETE,
  HYDROGENE,
  AGRICULTURE,
  FINANCE,
  SOBRIETE,
  DECROISSANCE,
  DESINFORMATION,
  BIOCARBURANTS,
  AVIATION,
  INDIVIDU,
  BIODIVERSITE,
].sort((a, b) => a.localeCompare(b));

const debunks = [
  {
    question: "Qui est responsable du changement climatique ?",
    answer:
      'Les humains. "Observed increases in well-mixed greenhouse gas (GHG) concentrations since around 1750 are unequivocally caused by human activities."',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F6ada6700-46d7-47b2-8c86-a8ae5a66e67c%2FUntitled.png?table=block&id=17f30f6c-3fd1-4613-90fd-46b016e20572&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fefc9b9a5-8781-431a-a99c-8bf4fec12b71%2FUntitled.png?table=block&id=4a799166-8c7d-42fc-b197-a372becea026&cache=v2",
    ],
    sources: [
      {
        name: "Synthèse et analyse du nouveau rapport du GIEC (BonPote 2021)",
        url: "https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/",
      },
      {
        name: "Climate Change 2021: The Physical Science Basis SPM (IPCC WGI, 2021)",
        url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
      },
      {
        name: "Scientists Reach 100% Consensus on Anthropogenic Global Warming - James Powell, 2017 (no date). Available at: https://journals.sagepub.com/doi/10.1177/0270467619886266 (Accessed: 14 March 2024).",
        url: "https://journals.sagepub.com/doi/10.1177/0270467619886266",
      },
      {
        name: "Thread (Christophe Cassou, 2021)",
        url: "https://threadreaderapp.com/thread/1682449327787069443.html",
      },
    ],
    category: CATEGORY_CAUSE,
    tags: [CLIMATOSCEPTIQUE, EMISSIONS],
  },
  {
    question:
      "Quels sont les indicateurs qui nous prouvent qu'il y a un changement climatique en cours ?",
    answer:
      "<ul class='px-3 list-disc'><li>Augmentation de la température moyenne de l'air de surface mondiale et de la température moyenne de la surface de la mer</li>" +
      "<li>Augmentation des jours de vagues de chaleur marine, du contenu thermique des océans et de l'étendue de la glace de mer</li>" +
      "<li>Augmentation de la fréquence des incendies de forêt, des précipitations plus intenses, de la fonte des glaciers, de l'acidification des océans et des températures extrêmes élevées</li>" +
      "<li>Augmentation du niveau moyen de la mer à l'échelle mondiale</li>" +
      "<li>Augmentation de la perte de masse des calottes glaciaires et des glaciers</li>" +
      "<li>Diminition de la couverture de neige dans l'Arctique et de la superficie du pergélisol en surface</li>",
    images: [
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8cba546c-9cba-4c6b-aa14-f129dce8021b%2Faze.png?table=block&id=6fb57166-4ba3-47e0-966d-76ca27e9404e&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
    ],
    sources: [
      {
        name: "Synthèse et analyse du nouveau rapport du GIEC (BonPote 2021)",
        url: "https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/",
      },
      {
        name: "Climate Change 2021: The Physical Science Basis SPM (IPCC WGI, 2021)",
        url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
      },
      "https://www.ipcc.ch/site/assets/uploads/sites/3/2022/03/01_SROCC_SPM_FINAL.pdf#page=7",
      "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf#page=13",
      "https://www.ipcc.ch/site/assets/uploads/sites/2/2022/06/SPM_version_report_LR.pdf#page=11",
      "https://report.ipcc.ch/ar6/wg1/IPCC_AR6_WGI_FullReport.pdf#page=175",
      "https://report.ipcc.ch/ar6/wg1/IPCC_AR6_WGI_FullReport.pdf#page=60",
    ],
    category: CATEGORY_CAUSE,
    tags: [CLIMATOSCEPTIQUE, EMISSIONS],
  },
  {
    question:
      "Il a fait froid ce matin, peut-il vraiment y avoir un changement climatique ?",
    answer:
      "“Attention à ne pas confondre météo et climat. Ce n'est pas parce qu'il fait exceptionnellement très froid pendant 2 ou 3 jours que cela vient réfuter le réchauffement climatique d'origine humaine. Il a par exemple fait très froid début décembre 2022, mais l'année 2022 est tout le même l'année la plus chaude enregistrée en France depuis que les mesures ont commencé en 1949 !”",
    images: [],
    sources: [
      {
        name: "Comment ne plus confondre météo et climat (BonPote, 2021)",
        url: "https://bonpote.com/comment-ne-plus-confondre-meteo-et-climat/",
      },
    ],
    category: CATEGORY_CAUSE,
    tags: [CLIMATOSCEPTIQUE],
  },
  {
    question:
      "Le climat est caractérisé par des cycles, peut-il vraiment y avoir un changement climatique ?",
    answer:
      "Si un climat chaud a bien existé dans le passé, c’est en raison de forçages naturels, dont il existe des traces. De nos jours, les modulations du forçage naturel sont faibles. Elles n’expliquent en aucun cas l’évolution observée des conditions climatiques, ni leur rapidité.",
    images: [],
    sources: [
      "https://bonpote.com/le-climat-a-t-il-vraiment-toujours-change/",
      "https://www.climat-en-questions.fr/reponse/mecanismes-devolution/etude-climats-passe-par-valerie-masson-delmotte",
    ],
    category: CATEGORY_CAUSE,
    tags: [CLIMATOSCEPTIQUE],
  },
  {
    question:
      "La France est-elle responsable que d'1% du changement climatique ?",
    answer:
      'En émissions cumulées, la France est le 8ème plus gros émetteur de GES. "Rich countries – that have emitted the most – have a moral responsibility. If every country that had ‘negligible emissions’ decided to do nothing, we wouldn’t be able to fix climate change. Many of the ‘negligible’ emitters offshore some of their emissions. Innovating and deploying low-carbon technologies make them cheap for the rest of the world.',
    images: [],
    sources: [
      "https://www.sustainabilitybynumbers.com/p/small-emitters",
      "https://bonpote.com/analyse-la-france-ne-represente-que-1-des-emissions-de-co2/",
      "https://bonpote.com/la-france-est-elle-vraiment-4e-pays-le-plus-vert-au-monde/",
    ],
    category: CATEGORY_CAUSE,
    tags: [INACTION, EMISSIONS, FRANCE],
  },
  {
    question: "Nos émissions sont-elles en train d'augmenter ?",
    answer:
      "Les émissions augmentent toujours chaque année. “Many countries succeed in reducing their fossil CO2 emissions or slowing down their growth,\n" +
      "but recent progress is not fast enough and not widespread enough to put global emissions on\n" +
      "a downward trajectory towards net zero.”\n" +
      '"Fossil CO2 emissions are falling in some regions, including Europe and the USA, but rising overall – and the scientists say global action to cut fossil fuels is not happening fast enough to prevent dangerous climate change.” “The global electricity system is transforming - but not yet fast enough”',
    images: [],
    sources: [
      "https://globalcarbonbudget.org",
      {
        name: "Global Electricity Review 2023 (Ember 2023)",
        url: "https://ember-climate.org/insights/research/global-electricity-review-2023/",
      },
      {
        name: "Indicators of Global Climate Change 2022: annual update of  large-scale indicators of the state of the climate system and human influence",
        url: "https://essd.copernicus.org/articles/15/2295/2023/essd-15-2295-2023.html",
      },
      {
        name: "Rapport 2023 sur la production de combustibles fossiles (ONU 2023)",
        url: "https://www.unep.org/fr/resources/production-gap-report-2023",
      },
      {
        name: "State of Climate Action 2023 (Climate Action Tracker 2023)",
        url: "https://climateactiontracker.org/publications/state-of-climate-action-2023/",
      },
    ],
    category: CATEGORY_CAUSE,
    tags: [EMISSIONS],
  },
  {
    question:
      "Quelles sont les causes principales du dépassement des limites planétaires ?",
    answer:
      "Le dépassement des limites planétaires et la perte de biodiversité viennent dans leur très large majorité des fossiles et de l'agriculture/élevage/pêche.",
    images: [],
    sources: [
      {
        name: "Les 9 frontières planétaires : on en fait trop?",
        url: "https://www.youtube.com/watch?v=mTaDdabVbL4",
      },
    ],
    category: CATEGORY_CAUSE,
    tags: [LIMITES_PLANETAIRES],
  },
  {
    question:
      "Quelles sont les conséquences principales du changement climatique ?",
    answer: "Elles sont multiples 👇",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fc353da2b-2150-40de-bc47-872219f79c90%2FSRL-image-0.png?table=block&id=460da10d-6b86-4799-ab76-fed356b50c7d&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F2038e4f2-4849-415b-ab8e-4397a67b896b%2FUntitled.png?table=block&id=461da246-f249-4f15-bf74-ae7c9ca1196e&cache=v2",
    ],
    sources: [
      {
        name: "Synthesis Report of the Sixth Assessment Report (IPCC 2022)",
        url: "https://www.ipcc.ch/ar6-syr/",
      },
      {
        name: "3,3 milliards d’êtres humains exposés au changement climatique : le nouveau rapport du GIEC est sans appel (BonPote, 2022)",
        url: "https://bonpote.com/33-milliards-detres-humains-exposes-au-changement-climatique-le-nouveau-rapport-du-giec-est-sans-appel/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Des canicules ?",
    answer:
      '"Les canicules seront plus fréquentes et plus intenses. En fin de siècle, ils pourraient être non seulement bien plus fréquents qu’aujourd’hui mais aussi beaucoup plus sévères et plus longs, avec une période d’occurrence étendue de la fin mai au début du mois d’octobre.\n' +
      "\n" +
      'Un chiffre sur l’évolution du risque qui donne quelques sueurs : en 6 ans (depuis 2015), nous avons 80% de probabilité en plus d’avoir une canicule. Sans maîtrise des émissions de gaz à effet de serre, il y a 3 chances sur 4 pour que le nombre annuel de jours de vague de chaleur passe de 5 à 25 jours en fin de siècle selon les régions par rapport à la période 1976- 2005."',
    images: [
      "https://energypost.eu/wp-content/uploads/2023/04/word-image-46110-2.png",
    ],
    sources: [
      {
        name: "Canicules à venir : des étés à 50 degrés en France ? (BonPote, 2021)",
        url: "https://bonpote.com/canicules-a-venir-des-etes-a-50-degres-en-france/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Des chaleurs humides ?",
    answer:
      '"Le mélange de chaleur et d’humidité est à un certain seuil insupportable pour l’humain et même en excellente santé, cela peut être mortel en seulement quelques heures. Dans un monde plus chaud, le stress thermique humide peut se produire pendant des mois et dans plusieurs régions du monde, y compris dans les régions densément peuplées. Les conséquences sont très inégalitaires et sans adaptation ni réduction importante et rapide de nos émissions de GES, la fréquence avec laquelle le seuil limite du thermomètre humide sera atteint voire dépassé sera de plus en plus importante."',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F093bafb5-ba53-4dd0-86bc-fe7196bd33c8%2FCapture_decran_2024-03-10_a_18.05.40.png?table=block&id=e7f4105d-8784-4910-85f7-04ef4c393167&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa9c6c499-efb8-4fbe-a910-4d0772df0825%2FCapture_decran_2024-03-10_a_18.05.54.png?table=block&id=6a6bfa66-0814-4be7-8796-afb551461282&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F620238e3-9a23-44f7-a363-39da71446dbe%2FCapture_decran_2024-03-10_a_18.06.06.png?table=block&id=203cd5ca-0cb5-47bd-82e2-a538db74edfd&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fed8ec3d5-1b54-4000-849b-69352d37c04e%2FCapture_decran_2024-03-10_a_18.06.17.png?table=block&id=9cb01812-8e65-44c6-970d-9f596eed1dbb&cache=v2",
      "https://energypost.eu/wp-content/uploads/2023/04/word-image-46110-3.png",
    ],
    sources: [
      {
        name: "Climate Change 2022: Impacts, Adaptation and Vulnerability (IPCC WGII, 2022)",
        url: "https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/",
      },
      {
        name: "Mourir de chaud : à quel degré la température devient-elle mortelle ? (BonPote, 2022)",
        url: "https://bonpote.com/mourir-de-chaud-a-quel-degre-la-temperature-devient-elle-mortelle/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
      {
        name: "Global risk of deadly heat (Mora, C., Dousset, B., Caldwell, I. et al. 2017)",
        url: "https://www.nature.com/articles/nclimate3322",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Des mégafeux ?",
    answer:
      "Le changement climatique provoque une augmentation de la fréquence et de l'intensité des événements météorologiques extrêmes, notamment les sécheresses et les conditions propices aux incendies, ce qui entraîne des incendies plus fréquents et plus graves dans de nombreuses régions.\n" +
      "\n" +
      "L’augmentation de la température est le lien le plus évident entre le réchauffement climatique et l’aggravation des incendies de forêt. La végétation et le sol s’assèchent, ce qui crée davantage de combustible inflammable pour que les incendies se propagent plus loin et plus vite.",
    images: [
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2Ffires.png&w=3840&q=75",
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2Fcanadafire2023.png&w=1920&q=75",
    ],
    sources: [
      {
        name: "Climate Change 2022: Impacts, Adaptation and Vulnerability SPM (IPCC WGII, 2022)",
        url: "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf",
      },
      {
        name: "Doit-on s’attendre à plus de mégafeux à cause du changement climatique ? (BonPote, 2021)",
        url: "https://bonpote.com/doit-on-sattendre-a-plus-de-megafeux-a-cause-du-changement-climatique/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Des sécheresses ?",
    answer:
      '"Une part croissante des terres émergées va connaître une augmentation de la sécheresse.\n' +
      "Les régions en marron illustrent celles qui deviendront plus arides, comprenant tout le pourtour du bassin méditerranéen, y compris la France.\n" +
      "Une vaste étendue de l'Amérique et de la Chine sera également touchée, ainsi que la majeure partie de la production agricole mondiale. \"",
    images: [
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2Fdrought.png&w=3840&q=75",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F0c1681ba-c001-4359-b863-ae03300bf59e%2FCapture_decran_2024-03-10_a_18.16.37.png?table=block&id=a37265e6-6ae4-46c8-8048-d5a5ef7f3512&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fffdbc57a-ab6f-45a3-9dd0-e2c1da506fda%2FUntitled.png?table=block&id=5f1b9cac-309f-4d31-a908-7c953c4e878d&cache=v2",
    ],
    sources: [
      {
        name: "La sécheresse, enjeu majeur du changement climatique en France ? (BonPote, 2021)",
        url: "https://bonpote.com/la-secheresse-enjeu-majeur-du-changement-climatique-en-france/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
      {
        name: "A triple increase in global river basins with water scarcity due to future pollution",
        url: "https://www.nature.com/articles/s41467-024-44947-3#Sec2",
      },
      {
        name: "Climate Change 2021: The Physical Science Basis (IPCC WGI, 2021)",
        url: "https://www.ipcc.ch/report/sixth-assessment-report-working-group-i/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Des inondations",
    answer:
      '"La fréquence et l’intensité des épisodes de fortes précipitations ont augmenté depuis les années 1950 sur la plupart des zones terrestres pour lesquelles les données d’observation sont suffisantes pour une analyse des tendances (confiance élevée). Le changement climatique d’origine humaine est probablement le principal facteur.\n' +
      "On ne peut pas attribuer chaque inondation au réchauffement climatique, mais nous savons que nous observons et observerons des inondations plus fréquentes et plus intenses.\n" +
      'Une atmosphère plus chaude peut transporter en moyenne 7% d’humidité en plus par degré de réchauffement."',
    images: [
      "https://bonpote.com/wp-content/uploads/2021/09/FAQ-82.jpg",
      "https://hess.copernicus.org/articles/24/2671/2020/hess-24-2671-2020-f04-web.png",
      "https://energypost.eu/wp-content/uploads/2023/04/word-image-46110-2.png",
    ],
    sources: [
      {
        name: "Inondations : est-ce la faute du changement climatique ? (BonPote, 2021)",
        url: "https://bonpote.com/inondations-est-ce-la-faute-du-changement-climatique/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "De l'insécurité alimentaire ?",
    answer:
      "Dès que les températures s'élèvent après 2,5 degrés, l’insécurité alimentaire commence à se généraliser sur la planète (ce qui peut entrainer des instabilités politiques).",
    images: [
      "https://energypost.eu/wp-content/uploads/2023/04/word-image-46110-3.png",
    ],
    sources: [
      {
        name: "Climate Change 2022: Impacts, Adaptation and Vulnerability (IPCC WGII, 2022)",
        url: "https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE, SANTE, INEGALITES],
  },
  {
    question: "La fonte des glaciers ?",
    answer:
      "Le réchauffement climatique provoque une fonte généralisée des glaciers dans le monde, touchant la banquise, la neige, et la masse des glaciers, à un rythme sans précédent.\n" +
      "\n" +
      "Cette fonte contribue à l'élévation du niveau de la mer, augmentant le risque d'inondations côtières. Elle perturbe les saisons de neige et les débits des rivières à l'échelle mondiale.\n" +
      "\n" +
      "De plus, la fonte des glaciers a des conséquences déséquilibrantes dans les régions arctiques, libérant des gaz à effet de serre et aggravant le changement climatique.\n" +
      "\n" +
      "En parallèle, la fonte des glaciers met en péril l'approvisionnement en eau des communautés en montagne et en aval, menaçant la production d'hydroélectricité, l'irrigation, et l'approvisionnement en eau des villes.\n" +
      "\n" +
      "Elle impacte également la santé et la culture des communautés arctiques, mettant en danger leurs modes de vie traditionnels de manière profonde et non seulement adaptative. 600 millions de personnes dépendent de la fonte des neiges.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8f615116-51ff-4792-8b8f-364a4dc3f510%2FCapture_decran_2024-03-10_a_18.20.54.png?table=block&id=41c47ced-7c7a-44f5-a6ba-28ab582f7aaa&cache=v2",
    ],
    sources: [
      {
        name: "Glaciers et changement climatique (BonPote, 2021)",
        url: "https://bonpote.com/glaciers-et-changement-climatique/",
      },
      {
        name: "Arctique : des étés sans glace de mer probables dès 2030 (BonPote, 2023)",
        url: "https://bonpote.com/arctique-des-etes-sans-glace-de-mer-probables-des-2030/",
      },
      {
        name: "Antarctique : un point de bascule climatique inévitable ?  (BonPote, 2021)",
        url: "https://bonpote.com/antarctique-un-point-de-bascule-climatique-inevitable/",
      },
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
      {
        name: "Agricultural risks from changing snowmelt (Qin, Y., Abatzoglou, J.T., Siebert, S. et al. 2020)",
        url: "https://www.nature.com/articles/s41558-020-0746-8",
      },
      {
        name: "Pergélisol : la planète a-t-elle passé le point de non-retour ? (BonPote, 2021)",
        url: "https://bonpote.com/pergelisol-la-planete-a-t-elle-passe-le-point-de-non-retour/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur l'élévation du niveau de la mer ?",
    answer:
      "D'après les rapports du GIEC, l'augmentation du niveau de la mer due au changement climatique est un sujet majeur. Environ 19 centimètres de hausse ont été enregistrés entre 1901 et 2010, ce qui dépasse la moyenne des deux millénaires précédents.\n" +
      "\n" +
      "Cette montée est provoquée par la fonte des glaciers et des calottes glaciaires, ainsi que par le réchauffement continu des océans (dilatation thermique de l'eau).\n" +
      "\n" +
      "Le GIEC prévoit que cette élévation se poursuivra pendant des siècles (une élévation de l'océan de plus de 15 mètres est prévue à l'échelle de plusieurs siècles), même si les émissions de gaz à effet de serre sont stoppées, à cause de la rétention continue de chaleur dans les profondeurs des océans et de la fonte des glaces du Groenland et de l'Antarctique.\n" +
      "\n" +
      "Cette élévation prévue augmente les risques d'inondations côtières.",
    images: [
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2FseaRise.png&w=3840&q=75",
    ],
    sources: [
      {
        name: "Special Report: Special Report on the Ocean and Cryosphere in a Changing Climate SPM (IPCC, 2022)",
        url: "https://www.ipcc.ch/srocc/chapter/summary-for-policymakers/",
      },
      {
        name: "Hausse du niveau de la mer et changement climatique (BonPote, 2021)",
        url: "https://bonpote.com/hausse-du-niveau-de-la-mer-et-changement-climatique/",
      },
      {
        name: "New elevation data triple estimates of global vulnerability to sea-level rise and coastal flooding (Kulp, S.A., Strauss, B.H. 2019)",
        url: "https://www.nature.com/articles/s41467-019-12808-z",
      },
      {
        name: "Site de Climate Central simulant l’évolution de la montée des mers dans différents scénarios",
        url: "https://coastal.climatecentral.org/map/",
      },
      {
        name: "GLOBAL AND REGIONAL SEA LEVEL RISE SCENARIOS FOR THE UNITED STATES  (Sweet, William & Kopp, Robert & Weaver, Christopher & Obeysekera, Jayantha & Horton, Radley & Thieler, E. & Zervas, Chris. 2017)",
        url: "https://www.researchgate.net/publication/319686017_GLOBAL_AND_REGIONAL_SEA_LEVEL_RISE_SCENARIOS_FOR_THE_UNITED_STATES",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [METEOROLOGIE],
  },
  {
    question: "Un effondrement de la biodiversité ?",
    answer:
      '"Dans un monde avec un réchauffement de +2 degrés, environ un tiers des terres émergées subiront un effondrement de leur biodiversité (pertes d’habitat pour 143 zones de haute importance pour la conservation de la biodiversité). De plus, le changement climatique entraîne également un réchauffement et une acidification des océans, ce qui a un impact négatif sur la vie marine. Cela conduit à une perte prévue de la biodiversité dans de nombreux écosystèmes océaniques et côtiers (l\'acidification des océans complique la production de carbonate de calcium par les organismes nécessitant la formation de petites coquilles, notamment une importante proportion du zooplancton et du phytoplancton, des micro-organismes marins en amont des réseaux alimentaires)."',
    images: [
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2Fbiodiversity.png&w=3840&q=75",
    ],
    sources: [
      {
        name: "Climate Change 2022: Impacts, Adaptation and Vulnerability (IPCC WGII, 2022)",
        url: "https://www.ipcc.ch/report/sixth-assessment-report-working-group-ii/",
      },
      {
        name: "Canicules marines : des incendies sous-marins aux conséquences alarmantes (BonPote, 2023)",
        url: "https://bonpote.com/canicules-marines-des-incendies-sous-marins-aux-consequences-alarmantes/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [BIODIVERSITE],
  },
  {
    question: "Des maladies ?",
    answer:
      "Selon les rapports du GIEC, le changement climatique a des conséquences négatives sur la santé humaine, incluant tant la santé physique que mentale, avec des risques accrus de décès prématurés et de maladies.\n" +
      "\n" +
      "Les épisodes de chaleur extrême entraînent des morts et des maladies, tandis que les maladies transmises par des vecteurs se multiplient en raison de l'expansion des aires de répartition et de la reproduction accrue des vecteurs de maladies.\n" +
      "\n" +
      "Les risques de maladies liées à l'alimentation et à l'eau augmenteront sans adaptation supplémentaire.\n" +
      "\n" +
      "Des maladies comme le paludisme et la dengue sont susceptibles d'augmenter avec le réchauffement, avec des déplacements géographiques possibles.\n" +
      "\n" +
      "Le changement climatique contribue également au risque de nouvelles maladies infectieuses en influençant les mouvements d'espèces, vers de nouvelles populations humaines.\n" +
      "\n" +
      "Les variations climatiques créent aussi l'insécurité alimentaire, pouvant mener à la malnutrition et à la prédisposition aux maladies, surtout dans les pays à faible et moyen revenu.\n" +
      "\n" +
      "Cependant, dans certaines régions, le lien entre le changement climatique et l'incidence des maladies reste à démontrer en raison du manque d'études à long terme.",
    images: [
      "https://leclimaten10minutes.climatelab.fr/_next/image?url=%2Fimages%2Fdisease.png&w=3840&q=75",
    ],
    sources: [
      {
        name: "Climate Change 2022: Impacts, Adaptation and Vulnerability SPM (IPCC WGII, 2022)",
        url: "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_SummaryForPolicymakers.pdf#page=11",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [SANTE],
  },
  {
    question: "Des conséquences injustes ?",
    answer:
      "“Les communautés vulnérables qui ont le moins contribués au changement climatique historiquement sont touchées de manière disproportionnée“\n" +
      "\n" +
      "Les rapports du GIEC indiquent que le changement climatique a provoqué des impacts négatifs étendus et des pertes et dommages associés à la nature et aux populations, qui sont répartis de manière inégale à travers différents systèmes, régions et secteurs.\n" +
      "\n" +
      "Cela signifie que les conséquences du changement climatique ne sont pas les mêmes pour tout le monde. Certaines personnes et régions sont plus touchées que d'autres. Les personnes et les systèmes les plus vulnérables sont touchés de manière disproportionnée",
    images: [],
    sources: [
      {
        name: "Summary for Policymakers IPCC, 2023: Summary for Policymakers. In: Climate Change 2023: Synthesis Report. Contribution of Working Groups I, II and III to the Sixth Assessment Report of the Intergovernmental Panel on Climate Change [Core Writing Team, H. Lee and J. Romero (eds.)]. IPCC, Geneva, Switzerland, pp. 1-34, doi: 10.59327/IPCC/AR6-9789291691647.001\n",
        url: "https://www.ipcc.ch/report/ar6/syr/downloads/report/IPCC_AR6_SYR_SPM.pdf",
      },
      {
        name: "Pottier, A. et al. (2020) ‘Qui émet du CO2 ? Panorama critique des inégalités écologiques en France’, Revue de l’OFCE, 169(5), pp. 73–132. Available at: https://doi.org/10.3917/reof.169.0073.\n",
        url: "https://www.cairn.info/revue-de-l-ofce-2020-5-page-73.htm",
      },
      {
        name: "Inégalités de richesse et changement climatique : interactions, modélisations et perspectives (Loic Giaccone 2022)",
        url: "https://drive.google.com/file/d/1K1fdiAsgRRdaFXE2VrdJ2GbBimtKhyEj/view",
      },
      {
        name: "Climat : les riches polluent plus que les pauvres ? (ft. Le Réveilleur)",
        url: "https://www.youtube.com/watch?v=JQDRb7jE9qQ",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [INEGALITES],
  },
  {
    question: "Des points de bascule ?",
    answer: "",
    images: [
      "https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_1279/https://bonpote.com/wp-content/uploads/2020/04/image-17.png",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa459c988-7732-4d80-93fd-7bd3d6a8c082%2FCapture_decran_2024-03-02_a_02.31.20.png?table=block&id=615d75e2-2bef-4c55-96d3-162313b33c89&cache=v2",
    ],
    sources: [
      {
        name: "Climat : point de bascule et optimisme (BonPote, 2020)",
        url: "https://bonpote.com/climat-point-de-bascule-et-optimisme/",
      },
      {
        name: "Antarctique : un point de bascule climatique inévitable ? (BonPote, 2021)",
        url: "https://bonpote.com/antarctique-un-point-de-bascule-climatique-inevitable/",
      },
      {
        name: "L’Amazonie a-t-elle franchi un point de bascule ? (BonPote, 2021)",
        url: "https://bonpote.com/lamazonie-a-t-elle-franchi-un-point-de-bascule/",
      },
      {
        name: "Arctique : des étés sans glace de mer probables dès 2030 (BonPote, 2023)",
        url: "https://bonpote.com/arctique-des-etes-sans-glace-de-mer-probables-des-2030/",
      },
      {
        name: "Points de basculement du système climatique : Le défi urgent des risques de franchissement (OCDE - 2022)",
        url: "https://www.oecd.org/environment/climate-tipping-points-abc5a69e-en.htm",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [POINTS_DE_BASCULE],
  },
  {
    question: "Des conséquences économiques ?",
    answer:
      "Les pertes économiques dues au changement climatique proviennent de divers impacts, tels que la diminution des rendements des cultures, la disponibilité de l'eau et la productivité du travail en extérieur en raison du stress thermique. Les coûts sont également liés à l'adaptation, aux dépenses liées aux catastrophes, à la récupération et à la reconstruction des infrastructures. De plus, le changement climatique a ralenti la tendance à la diminution des inégalités économiques entre les pays développés et en développement.<br/><br/>" +
      "\n" +
      "Les risques pour la croissance économique mondiale dus aux impacts du changement climatique sont projetés être plus faibles à 1,5°C qu'à 2°C d'ici la fin du siècle, avec des impacts plus importants sur les pays des tropiques et des sous-tropiques de l'hémisphère sud en cas d'augmentation de la température mondiale. Les études économiques globales montrent des différences importantes entre les régions, les économies en développement et en transition étant généralement plus vulnérables.<br/><br/>" +
      "\n" +
      "Enfin, les avantages économiques globaux des trajectoires limitant le réchauffement à 2°C l'emportent sur les coûts de mitigation, même sans tenir compte des avantages dans d'autres dimensions du développement durable ou des dommages non marchands du changement climatique.",
    images: [],
    sources: [
      {
        name: "Technical Summary. In: Climate Change 2022: Impacts, Adaptation and Vulnerability. Contribution of the WGII to the AR6 of the IPCC",
        url: "https://www.ipcc.ch/report/ar6/wg2/downloads/report/IPCC_AR6_WGII_TechnicalSummary.pdf#page=20",
      },
      "https://www.ipcc.ch/site/assets/uploads/sites/2/2022/06/SPM_version_report_LR.pdf#page=9",
      {
        name: "Technical Summary. In: Climate Change 2022: Mitigation of Climate Change. Contribution of the WGIII to the AR6 of the IPCC",
        url: "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_TechnicalSummary.pdf#page=41",
      },
      {
        name: "TS.4 Mitigation and Development Pathways > Box TS.5 | Illustrative Mitigation Pathways (IMPs), and Shared Socio-economic Pathways (SSPs)",
        url: "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_FullReport.pdf#page=98",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [FINANCE, INEGALITES],
  },
  {
    question:
      "Est-ce que nos efforts valent le coup ? Combien de vies a t'on à sauver ?",
    answer:
      '"High temperatures have been linked to increased mortality, decreased labour productivity, decreased cognitive performance, impaired learning, adverse pregnancy outcomes, decreased crop yield potential, increased conflict, hate speech, migration and infectious disease spread.' +
      " Overall, our results illustrate the huge potential human cost and the great inequity of climate change, informing discussions of loss and damage. The worst-case scenarios of ~3.6°C or even ~4.4°C global warming could put half of the world population outside the historical climate \n" +
      "niche, posing an existential risk. The ~2.7°C global warming expected under current policies puts around a third of the world population outside the niche. \n" +
      'The gains from fully implementing all announced policy targets and limiting global warming to ~1.8°C are considerable, but would still leave nearly 10% of people exposed to unprecedented heat. Meeting the goal of the Paris Agreement to limit global warming to 1.5 °C halves exposure outside the temperature niche relative to current policies and limits those exposed to unprecedented heat to 5% of people". ' +
      "“Our results show the huge potential for more decisive climate policy to limit the human costs and inequities of climate change.” Population exposée à des chaleurs sans précédent entre stated policies 2.7 et Accord de Paris 1.5 👇",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8a171c62-1c69-460a-b2f9-b85d2af247b8%2FUntitled.png?table=block&id=cff27780-13f0-426f-9e8d-0ef612104332&cache=v2",
    ],
    sources: [
      {
        name: "Lenton, T.M., Xu, C., Abrams, J.F. et al. Quantifying the human cost of global warming. Nat Sustain 6, 1237–1247 (2023)",
        url: "https://www.nature.com/articles/s41893-023-01132-6#Sec3",
      },
      {
        name: "Climate change and population: An assessment of mortality due to health impacts (Antonin Pottier, Marc Fleurbaey, Aurélie Méjean, Stéphane Zuber 2021)",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0921800921000252",
      },
      {
        name: "3,3 milliards d’êtres humains exposés au changement climatique : le nouveau rapport du GIEC est sans appel (BonPote, 2022)",
        url: "https://bonpote.com/33-milliards-detres-humains-exposes-au-changement-climatique-le-nouveau-rapport-du-giec-est-sans-appel/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
    tags: [SANTE],
  },
  {
    question:
      "Y'a t'il une inertie climatique de 20 ans ? Est-ce trop tard pour agir ?",
    answer:
      "Les meilleures connaissances disponibles montrent qu’au contraire, le réchauffement devrait plus ou moins s’arrêter lorsque les émissions de dioxyde de carbone (CO2) seront nulles, ce qui signifie que l’Homme a le pouvoir de choisir son avenir climatique. Il n'y a pas d'inertie climatique de 20 ans.",
    images: [
    ],
    sources: [
      {
        name: "“C’est trop tard, on est foutus”: pourquoi c’est faux, et comment y répondre (BonPote, 2021)",
        url: "https://bonpote.com/cest-trop-tard-on-est-foutus-pourquoi-cest-faux-et-comment-y-repondre/",
      },
      {
        name: "Existe-t-il vraiment une inertie climatique de 20 ans ? (BonPote, 2021)",
        url: "https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/",
      },
      {
        name: "Le déni climatique, un vrai business ? (France Info, 2024)",
        url: "https://www.youtube.com/watch?v=HXm8viVPjSY",
      },
      {
        name: "Inertie du climat, ou inertie des sociétés ? (Climat & Anthropocène, 2021)",
        url: "https://climatanthropocene.com/2021/11/30/inertie-du-climat-ou-inertie-des-societes/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [INACTION, SANTE],
  },
  {
    question: "Le système énergétique actuel est-il efficient ?",
    answer:
      "Non, le système thermique actuel comporte beaucoup de pertes. Voilà ci-dessous un graphique de la consommation d'énergie des États-Unis. L'énergie primaire pour une économie provient de la gauche. Elle est ensuite répartie dans ses différentes utilisations. Une partie très importante est simplement dissipée sous forme de chaleur résiduelle. La “primary energy fallacy” réside dans l'hypothèse selon laquelle toutes les sources d'énergie issues du pétrole, du gaz et du charbon que nous utilisons actuellement doivent être remplacées.",
    images: [
      "https://flowcharts.llnl.gov/sites/flowcharts/files/2023-10/US%20Energy%202022.png",
    ],
    sources: [
      {
        name: "Energy Flow Charts: Charting the Complex Relationships among Energy, Water, and Carbon (2022)",
        url: "https://flowcharts.llnl.gov/",
      },
      {
        name: "Beyond primary energy: the energy transition needs a new lens (Zenon 2023)",
        url: "https://www.zenon.ngo/insights/beyond-primary-energy-the-energy-transition-needs-a-new-lens",
      },
      {
        name: "Le découplage est-il possible ? - avec Baptiste Andrieu (2024)",
        url: "https://www.youtube.com/watch?v=vA7JOLYyTCI",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [EFFICACITE],
  },
  {
    question: "C’est quoi un scénario net zéro émissions ?",
    answer:
      "C'est un scénario qui permet d'atteindre à un horizon de temps donné, en limitant le réchauffement mondial moyen à un degré donné, l'équilibre entre les émissions de carbone et l'absorption du carbone de l'atmosphère par les puits de carbone.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F26ba6e0e-47be-4420-8ccb-ab20a901b3a8%2FUntitled.png?table=block&id=1675a518-64f1-4354-bcea-7232b6887f38&cache=v2",
      "https://neutral.climatelab.fr/static/media/scenarios.8ae650d1b2a54a0bff24.png",
      "https://www.ademe.fr/wp-content/uploads/2022/09/infographie-energie.png",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F90a2724d-b022-47f7-9068-4e616fd9c470%2FCapture_decran_2024-04-04_a_00.57.19.png?table=block&id=ab6f23c8-d123-4d2a-9577-edf278bcb8a6&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F53a18750-b610-472d-a4de-d994aeb54165%2FCapture_decran_2024-04-04_a_00.58.21.png?table=block&id=2294255e-42a1-4b2e-8a3a-7bfe17d9bc33&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F20fadc13-34b7-44fe-9b41-052545a229f3%2Fco2-mitigation-15c.png?table=block&id=2936d6c1-2cad-4ea1-8014-61c553ff300e&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F777f380f-f5f7-493a-be0d-3bf07f8a6c98%2FUntitled.png?table=block&id=25a7f540-5dad-4d1d-9759-8b751d5c710b&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fdaffaf6f-503d-4a2d-b1ab-ca4930d89adb%2FCapture_decran_2024-03-30_a_15.29.08.png?table=block&id=8629a2c1-486f-4931-af4f-2e6fbcd53a71&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F9800e6af-9961-492c-b8c6-19c4eaada474%2FCapture_decran_2024-03-30_a_15.30.42.png?table=block&id=4b7bcbc0-daa0-4cee-aeac-cd012cd03066&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
    ],
    sources: [
      {
        name: "Scénarios climatiques, croissance économique et décroissance (Loic Giaccone, 2023)",
        url: "https://climatanthropocene.com/2023/09/18/scenarios-climatiques-croissance-economique-et-decroissance/",
      },
      {
        name: "Bilan Prévisionnel 2023-2035 : RTE éclaire les défis de la grande bascule vers une société décarbonée (RTE, 2023)",
        url: "https://www.rte-france.com/actualites/bilan-previsionnel-transformation-systeme-electrique-2023-2035",
      },
      {
        name: "Comprendre et piloter l’électrification d’ici 2035 : Les conditions clés pour relever les défis de la transition énergétique (RTE, 2023)",
        url: "https://www.rte-france.com/actualites/comprendre-piloter-electrification-ici-2035-conditions-cles-relever-defis-transition",
      },
      {
        name: "Les futurs en transition (Ademe, 2021)",
        url: "https://www.ademe.fr/les-futurs-en-transition/",
      },
      {
        name: "Futurs énergétiques 2050 : les scénarios de mix de production à l’étude permettant d’atteindre la neutralité carbone à l’horizon 2050 (RTE, 2022)",
        url: "https://www.rte-france.com/analyses-tendances-et-prospectives/bilan-previsionnel-2050-futurs-energetiques",
      },
      {
        name: "Net Zero by 2050 (AIE, 2021)",
        url: "https://www.iea.org/reports/net-zero-by-2050",
      },
      {
        name: "Le Plan de transformation de l'économie française (THE SHIFT PROJECT, 2022)",
        url: "https://ilnousfautunplan.fr/",
      },
      {
        name: "EDF Scénario Net Zero 2050 (EDF, 2024)",
        url: "https://www.edf.fr/scenario2050",
      },
      {
        name: "Scénario négaWatt 2022",
        url: "https://www.negawatt.org/Scenario-negaWatt-2022",
      },
      {
        name: "Négawatt - Manifeste pour la sobriété en Europe (Negawatt, 2024)",
        url: "https://www.negawatt.org/Manifeste-pour-la-sobriete-en-Europe",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SCENARIOS],
  },
  {
    question: "Quelles sont les principales solutions ?",
    answer:
      "“Many options available now in all sectors are estimated to offer substantial potential to reduce net emissions by 2030. Relative potentials and costs will vary across countries and in the longer term compared to 2030.” Also, “The indicative potential of demand-side strategies to reduce\n" +
      "emissions of direct and indirect CO2 and non-CO2 GHG emissions\n" +
      "in three end-use sectors (buildings, land transport, and food) is\n" +
      "40–70% globally by 2050 (high confidence)”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ffdb7dc90-9469-4725-ab53-097c0a7edb66%2FCapture_decran_2024-03-03_a_19.30.32.png?table=block&id=15a520b8-9001-4ca4-abdc-c69831c7f50c&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ff8c22d63-1541-4f3c-9628-938ffcbe9cba%2FCapture_decran_2024-04-04_a_01.16.19.png?table=block&id=318e675f-1bdc-4875-b434-3b2ffce7fa3d&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://www.ipcc.ch/report/ar6/syr/downloads/figures/IPCC_AR6_SYR_SPM_Figure7.png",
      "https://pbs.twimg.com/media/GK5LbdjWQAA9iCh?format=jpg&name=medium",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F938a906b-9460-4a07-af90-c6f95187b1ba%2FCapture_decran_2024-04-04_a_01.16.52.png?table=block&id=d0d2908d-2194-4b8f-a229-21dc6833c67b&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
    ],
    sources: [
      {
        name: "Figure SPM.7 | Overview of mitigation options and their estimated ranges of costs and potentials in 2030. (IPCC 2022)",
        url: "https://www.ipcc.ch/report/ar6/wg3/chapter/summary-for-policymakers/",
      },
      {
        name: "Figure SPM.6: Indicative potential of demand-side mitigation options by 2050",
        url: "https://www.ipcc.ch/report/ar6/wg3/figures/summary-for-policymakers/figure-spm-6/",
      },
      {
        name: "Figure 5.8 | Synthesis of 60 demand-side options ordered by the median GHG mitigation potential found across all estimates from the literature.",
        url: "https://www.ipcc.ch/report/ar6/wg3/figures/chapter-5/figure-5-8",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SCENARIOS, EFFICACITE],
  },
  {
    question: "Sans changement climatique, faudrait-il changer de système ?",
    answer:
      "Même sans changement climatique, les impacts sur la santé humaine à eux seuls montrent qu’il faut changer de système. “Our results suggest that further relying predominantly on these new renewables in the transition towards a near-zero emissions power system also reduces most nonclimate environmental impacts on the system level compared to strategies that limit the contribution of wind and solar power largely in favor of greater CCS deployment.”. <ul class='list-disc px-3'>Entre autres 👇<li>Poussières de charbon: 1.1 milliards de tonnes/an.</li> <li>Pétrole-gaz: 1er émetteur de composés organiques volatiles qui créent les brouillards de pollution.</li> <li>8 millions de morts prématurées/an.</li> <li>7 trillions de dollars dépensés en 2022 en subventions directes et indirects (réparation des externalités négatives).</li></ul>",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ff23f983c-99f4-472c-8024-9ab49428a0d3%2FCapture_decran_2024-02-26_a_00.06.09.png?table=block&id=149e2794-ca93-4147-a53c-6744468ccd74&cache=v2",
    ],
    sources: [
      {
        name: "Luderer, G. et al. (2019) ‘Environmental co-benefits and adverse side-effects of alternative power sector decarbonization strategies’, Nature Communications, 10(1), p. 5229. Available at: https://doi.org/10.1038/s41467-019-13067-8.",
        url: "https://www.nature.com/articles/s41467-019-13067-8#Sec8",
      },
      {
        name: "Energy to waste – fossil fuels’ dirty secret (Illuminem, 2023)",
        url: "https://illuminem.com/illuminemvoices/energy-to-waste-fossil-fuels-dirty-secret",
      },
      {
        name: "Carbon Neutrality in the UNECE Region: Integrated Life-cycle Assessment of Electricity Sources (UNECE, 2022)",
        url: "https://unece.org/sites/default/files/2022-04/LCA_3_FINAL March 2022.pdf",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [EFFICACITE, SANTE, RENOUVELABLES],
  },
  {
    question: "Consomme t'on plus d'énergie après la transition ?",
    answer:
      '"Without economic and population growth and in a decarbonised world, our final energy demand is much lower than it is today. A study by the Oxford Professor Nick Eyre suggests it’s about 40% lower. Taking them into account : with weak decarbonisation (stated policies) global energy demand continues to rise. With strong decarbonisation, energy demand will fall slightly. Importantly, this is about final energy demand. It doesn’t include the decline in primary energy demand that we’d expect with decarbonisation. This would be substantial because most energy from burning fossil fuels is wasted when converting it to final energy."',
    images: [
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb4057436-20c0-4576-a763-81947dfa31d1_662x575.png",
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F288058c1-f52d-4594-883c-9ffbc522960f_1600x861.png",
    ],
    sources: [
      {
        name: "Global energy demand could be lower in 2050, despite the world getting richer (SBN, 2024)",
        url: "https://www.sustainabilitybynumbers.com/p/iea-energy-scenarios",
      },
      {
        name: "Electrification is efficiency: The world will need less energy after the transition (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/electrification-energy-efficiency",
      },
      {
        name: "Powering the world: how much energy will the world need? (Zenon, 2021)",
        url: "https://www.zenon.ngo/insights/powering-the-world-how-much-energy-will-the-world-need",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [EFFICACITE],
  },
  {
    question:
      "Les émissions temporaires nécessaires à la transition sont bien inférieures à celles de notre système actuel",
    answer:
      "“People are often concerned about the greenhouse gases emitted in the production of these low-carbon technologies. To be clear: emissions from the mining and construction of these sources pales in comparison to fossil fuels, per unit of electricity.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F0f5d7823-1ab3-41bf-8da0-16ecf96fa4ab%2FUntitled.png?table=block&id=92546567-82ad-4e0c-8020-f2d3c1e68110&cache=v2",
    ],
    sources: [
      {
        name: "The world has enough minerals for low-carbon electricity (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/minerals-for-electricity",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [EFFICACITE, EMISSIONS],
  },
  {
    question: "La transition énergétique nous met-elle dans un extractivisme ?",
    answer:
      '"The low-carbon energy transition will need less mining than fossil fuels, even when adjusted for waste rock". "Material requirements for low-carbon technologies will increase substantially, but they will still be lower than fossil fuel extraction". "The materials we need for the transition to sustainable energy are a drop in the bucket compared to building materials, agriculture, and fossil fuels. The Material Flow Analysis Portal compiled and maintained by @wu_vienna\n' +
      'provides great context with non-metallic minerals such as sand, gravel, and stone. When put to scale, the critical minerals for the energy transition are a relatively small slice.” "If we all eat 1% less meat, we save more species than if we abandon all mining that’s needed for the shift to renewables.".',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fda1edd75-6f90-48ee-a6de-809a40c09c3e%2FUntitled.png?table=block&id=3b3d9cce-a17a-4235-94e4-090e55b32498&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F7e5f2c0f-35e1-4c36-b08b-e1be758d923b%2FUntitled.png?table=block&id=e8d841cc-6b66-455c-a1e8-8c8df7633d2e&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F5a658389-bc62-4017-a05c-1c4715f258a1%2FUntitled.png?table=block&id=13666653-ebff-4ded-9db8-a3dce174135b&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F94ed9691-ea02-48dc-a1ff-65cc778a08a6%2FUntitled.png?table=block&id=e47e1ed6-49c7-474e-a533-795380d69577&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fcadad35e-5c06-450e-81f9-112a922dc798%2FUntitled.png?table=block&id=627ee438-23d7-4531-950f-4196ca18d9bb&cache=v2",
    ],
    sources: [
      {
        name: "The low-carbon energy transition will need less mining than fossil fuels, even when adjusted for waste rock (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/energy-transition-materials",
      },
      {
        name: "Energy transition will require substantially less mining than the current fossil system Nijnens, Joey et al. 2023",
        url: "https://www.cell.com/joule/abstract/S2542-4351(23)00411-7",
      },
      {
        name: "Total material requirement for the global energy transition to 2050: A focus on transport and electricity (Watari & al 2019)",
        url: "https://www.sciencedirect.com/science/article/pii/S0921344919302290",
      },
      {
        name: "Mining quantities for low-carbon energy is hundreds to thousands of times lower than mining for fossil fuels (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/mining-low-carbon-vs-fossil",
      },
      {
        name: "Métaux, le nouvel or noir (Emmanuel Hache, Benjamin Louvet 2023)",
        url: "https://www.editionsdurocher.fr/product/129257/metaux-le-nouvel-or-noir/",
      },
      {
        name: "Ademe - HORIZONS Les matériaux pour la transition énergétique, un sujet critique (ADEME, 2022)",
        url: "https://librairie.ademe.fr/cadic/6842/feuilleton_materiaux_de_la_te_transitions2050_ademe.pdf",
      },
      {
        name: "RTE - L’ANALYSE ENVIRONNEMENTALE (RTE, 2022)",
        url: "https://assets.rte-france.com/prod/public/2022-06/FE2050 _Rapport complet_12.pdf",
      },
      {
        name: "The Role of Critical Minerals in Clean Energy Transitions (IEA, 2021)",
        url: "https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions/executive-summary",
      },
      {
        name: "Thread twitter (Auke Hoekstra, 2022)",
        url: "https://twitter.com/AukeHoekstra/status/1594084413943734272",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [MATERIAUX],
  },
  {
    question:
      "Quelle quantité de déchets les panneaux solaires et les éoliennes produisent-ils ?",
    answer:
      "“Moving away from coal power to renewables (or nuclear) would significantly reduce the amount of waste generated. Not to mention that fossil fuels generate other forms of ‘waste’ that are terrible for human health. Millions die every year from local air pollution. And more will die in the future as a result of climate change.” <ul class='list-disc px-3'><li>Solar :  1.67 kilograms of waste per MWh [22 kg / 13 MWh].</li> <li>Wind : 0.16 kilograms of waste per MWh [60,000 kg / 383,250 MWh].</li> <li>Coal ash: 84 kilograms of coal per MWh.</li> <li>Nuclear : 0.031 kilograms of waste per MWh [250,000 kg / 8,146,800 MWh].</li> <li>Municipal waste : 485 kilograms per year.</li> <li>Plastic waste : 77 kilograms of plastic waste per year.</li></ul>",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F4aca9195-44e3-4808-a657-3dc03331c5ab%2FUntitled.png?table=block&id=efd2e95b-7525-4ccc-8475-493827af1d4a&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F72efc597-6226-43e8-8ea6-6d37142ef10f%2FUntitled.png?table=block&id=4226af08-4c19-4591-bf3c-1118f1feb0dc&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F94e82caf-942d-4ba9-a359-e3ba933b302f%2FUntitled.png?table=block&id=e5d72304-8ca5-4f13-a109-e94077771a9d&cache=v2",
    ],
    sources: [
      {
        name: "How much waste do solar panels and wind turbines produce ? (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/renewables-waste",
      },
      {
        name: "Mirletz, H., Hieslmair, H., Ovaitt, S. et al. Unfounded concerns about photovoltaic module toxicity and waste are slowing decarbonization. (2023)",
        url: "https://www.nature.com/articles/s41567-023-02230-0",
      },
      {
        name: "Mishnaevsky Jr. Leon, Recycling of wind turbine blades: Recent developments, current Opinion in Green and Sustainable Chemistry, 2023",
        url: "https://www.sciencedirect.com/science/article/pii/S2452223622001584#sec5",
      },
      {
        name: "Francesca Spini, Paolo Bettini, End-of-Life wind turbine blades: Review on recycling strategies, Composites Part B: Engineering, 2024",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S135983682400101X",
      },
      {
        name: "Liu, P., & Barlow, C. Y. (2017). Wind turbine blade waste in 2050. Waste Management, 62, 229-240.",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0956053X17300491",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [MATERIAUX, RENOUVELABLES],
  },
  {
    question: "A-t’on assez de minerais pour la transition ?",
    answer:
      '"Geologic reserves of materials are sufficient to meet all projected future demand". "We have enough of most materials to decarbonise our electricity systems. Demand through 2050 is equal to less than 15% of reserves for most materials." International Energy Agency (IEA): “There are generally no signs of shortages in these areas: despite continued production growth over the past decades, economically viable reserves have been increasing for many energy transition minerals.”\n"' +
      "\n" +
      "    International Renewable Energy Agency (IRENA): “There is no scarcity of reserves for energy transition minerals, but capabilities for mining and refining them are limited. [...] Production has surged for many energy transition minerals, and reserves mined from economically viable sources have grown. Moreover, disruptive innovation - such as efficiency improvements and material substitutions - are already reshaping demand.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F191aa04c-5e51-453f-b724-2e78499b9967%2FUntitled.png?table=block&id=e316ea76-4d11-41a4-82ec-3de041f13b30&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F4bf86af8-d2cc-44ed-8080-9a7ad842ebc6%2FUntitled.png?table=block&id=1776f50c-c3d9-4e8b-b4ac-f2757d87bf9f&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F656150ef-4e72-4de9-a0c2-23a0233b2024%2FUntitled.png?table=block&id=004aff9f-091a-4d76-8c3b-9bb9c94b27dc&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa182c616-a0c8-4e44-bd37-ce1461054e3b%2FUntitled.png?table=block&id=1a9df6a7-d8b6-4078-921b-0508275f570d&cache=v2",
    ],
    sources: [
      {
        name: "Wang, S. et al. Future demand for electricity generation materials under different climate mitigation scenarios. Joule 7, 309–332 (2023).",
        url: "https://www.cell.com/joule/fulltext/S2542-4351(23)00001-6#%20",
      },
      {
        name: "The world has enough minerals for low-carbon electricity (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/minerals-for-electricity",
      },
      {
        name: "Cobalt, lithium, cuivre, uranium... va-t-on manquer de métaux pour la transition énergétique ? (Plans B, 2023)",
        url: "https://www.youtube.com/watch?v=F9QHcQoYZXY",
      },
      {
        name: "Les Besoins Matériels de la Transition Energétique (Olivier Vidal - CNRS, 2023)",
        url: "https://www.youtube.com/watch?v=Gt1g6mfai-Y",
      },
      {
        name: "Peut-on modéliser la transition ? (Baptiste Andrieu, 2023)",
        url: "https://www.youtube.com/watch?v=UmbFaPrXFcE",
      },
      {
        name: "The Role of Critical Minerals in Clean Energy Transitions (IEA, 2021)",
        url: "https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions",
      },
      {
        name: "Geopolitics of the Energy Transition (IREN,A 2023)",
        url: "https://www.irena.org/Digital-Report/Geopolitics-of-the-Energy-Transition-Critical-Materials",
      },
      {
        name: "We have enough minerals for the energy transition, but medium-term supply is a challenge [Part 1] (SBN 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/transition-mineral-demand-part-one",
      },
      {
        name: "We have enough minerals for the energy transition, but medium-term supply is a challenge [Part 2] (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/transition-mineral-demand-part-two",
      },
      {
        name: "Energy transformation won’t be derailed by lack of raw materials (Age of transformation, 2023)",
        url: "https://ageoftransformation.org/energy-transformation-wont-be-derailed-by-lack-of-raw-materials",
      },
      {
        name: "Copper scarcity will not materially slow down the energy transition (Neon Research, 2023)",
        url: "https://neonresearch.nl/copper-scarcity-will-not-materially-slow-down-the-energy-transition/",
      },
      {
        name: "What you need to know about minerals and the clean energy transition (Canary media, 2022)",
        url: "https://www.canarymedia.com/articles/clean-energy/minerals-and-the-clean-energy-transition-the-basics-2",
      },
      {
        name: "Critical Raw Materials for the energy transition: Europe must start mining again (Energy Post EU, 2022)",
        url: "https://energypost.eu/critical-raw-materials-for-the-energy-transition-europe-must-start-mining-again/",
      },
      {
        name: "Fluxes, not stocks: The real challenges of metallic resources for the energy transition (Zenon, 2022)",
        url: "https://www.zenon.ngo/insights/fluxes-not-stocks-the-real-challenges-of-metallic-resources-for-the-energy-transition",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SCENARIOS, MATERIAUX],
  },
  {
    question:
      "La voiture électrique est-elle plus écologique que la voiture thermique ?",
    answer:
      "“Except in the most extreme scenarios, opting for an EV is better for the climate than a petrol or diesel car. This is even true if you’re buying second-hand.”\n" +
      "“What’s important is that this gap between EVs and conventional fossil cars will get even bigger in the future. If you’re buying an EV now, its emissions 5 or 10 years from now will be even lower. As we move toward a low-carbon electricity mix, the footprint of an EV will keep shrinking.”\n" +
      "“Of course, you’re better off walking or cycling. That’s a no-brainer (even for your health and wallet). But comparing car-to-car, the EV wins almost every time.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F67a1a5ba-bebe-4954-b720-8fc241283817%2FUntitled.png?table=block&id=c390dbfb-f305-47d5-8696-d8dd8ee44d0f&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F12440ce7-e6d9-4e46-ba92-869ac4782d66%2FUntitled.png?table=block&id=c242d768-ea4f-4e8e-a7c7-b6310c53a3f4&cache=v2",
    ],
    sources: [
      {
        name: "La voiture électrique, solution idéale pour le climat ? (BonPote, 2023)",
        url: "https://bonpote.com/la-voiture-electrique-solution-ideale-pour-le-climat/",
      },
      {
        name: "Océan de fake news sur la voiture électrique (BonPote, 2023)",
        url: "https://bonpote.com/ocean-de-fake-news-sur-la-voiture-electrique/",
      },
      {
        name: "Electric cars are better for the climate than petrol or diesel (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/ev-fossil-cars-climate",
      },
      {
        name: "Most of the energy you put into a gasoline car is wasted; this is not the case for electric cars (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/inefficiency-ice",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [VOITURE_ELECTRIQUE],
  },
  {
    question: "A-t’on assez de lithium pour les batteries de voiture ?",
    answer:
      '"Yes, the world has enough lithium for our electric vehicles, decades into the future but the world is currently not producing enough of it to keep up with demand. This could be a major bottleneck this decade."',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F70c9df0e-ff67-4f46-bf6f-bf0cea438718%2FUntitled.png?table=block&id=a30565ea-4abe-41c2-b30e-f2cc4c5482dd&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F7c5b4739-82f5-4899-97c5-17bd875e6b59%2FUntitled.png?table=block&id=5eeec656-82e1-49be-8ce0-2a4a50930c67&cache=v2",
    ],
    sources: [
      {
        name: "Does the world have enough lithium to move to electric vehicles ? (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/lithium-electric-vehicles",
      },
      {
        name: "Material and Resource Requirements for the Energy Transition (ETC, 2023)",
        url: "https://www.energy-transitions.org/publications/material-and-resource-energy-transition",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [VOITURE_ELECTRIQUE, MATERIAUX],
  },
  {
    question:
      "Quelles technologies de stockage pour palier à l’intermittence des ENR",
    answer:
      "Elles sont multiples : Interconnexions, flexibilité de la demande, STEP, hydraulique pilotable, nucléaire, batteries, etc. “Différentes solutions de flexibilité, aux caractéristiques complémentaires, mobilisées pour couvrir les besoins de l’équilibre offre-demande” Non, les batteries ne sont pas la seule solution de stockage. Batteries account only 20-25% of the flexibility demand by 2050 in different scenarios.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F10710398-cc7b-4b3e-88be-795b16745133%2FCapture_decran_2024-03-03_a_17.27.43.png?table=block&id=b2b67fc5-3366-44b0-b0e4-6cafc1b79546&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa7f2d6a1-d729-4e8f-8e3c-e51f89957a92%2FCapture_decran_2024-03-03_a_15.53.30.png?table=block&id=304eb46a-ac3a-405d-9dab-d2b3749f25d7&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F051a6a38-88ac-467b-961e-c649f8e8879d%2FUntitled.png?table=block&id=646b57e2-c37c-45ab-ae04-af46c5a18563&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8ffdd675-3fa0-47bd-bada-a50942cafcae%2FUntitled.png?table=block&id=5d2c48a0-9c57-43c3-a654-0394577cc681&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fee4df37a-b11f-427f-9eb0-cfdfea696efb%2FCapture_decran_2024-03-30_a_15.38.30.png?table=block&id=d003fa1b-9dc6-41e2-8fa7-5a2aff8260c6&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
    ],
    sources: [
      {
        name: "GARANTIR LA SÉCURITÉ D’APPROVISIONNEMENT (RTE, 2021)",
        url: "https://assets.rte-france.com/prod/public/2021-10/BP2050_rapport-complet_chapitre7_securite-approvisionnement.pdf",
      },
      {
        name: "Word Energy Outlook 2023 (IEA, 2023)",
        url: "https://iea.blob.core.windows.net/assets/86ede39e-4436-42d7-ba2a-edf61467e070/WorldEnergyOutlook2023.pdf",
      },
      {
        name: "Global Greenfield Pumped Hydro Energy Storage Atlas (ANU, 2022)",
        url: "https://re100.eng.anu.edu.au/global/",
      },
      {
        name: "EDF Scénario Net Zero 2050 (EDF, 2024)",
        url: "https://www.edf.fr/scenario2050",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [RENOUVELABLES],
  },
  {
    question:
      "Les nouvelles batteries contiennent-elle du Cobalt et du Nickel ?",
    answer:
      'Les nouvelles batteries actuelles ne contiennent plus de nickel ni de cobalt. "Heavier but cheaper and longer lasting LFP (lihtiumphosphate) batteries that use zero nickel and cobalt. Or flow batteries. Or sodium batteries. (No lithium needed.)"',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Faf1b6b14-bbcb-4fb8-9c82-c0d2b02875c1%2FCapture_decran_2024-01-28_a_22.05.17.png?table=block&id=6ddbfb9a-4770-4a64-ad46-ab14d319a9a6&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F22720406-5bcc-4ec6-90e2-53ae71b985e7%2FUntitled.png?table=block&id=c84b1e92-b103-447e-ad5e-145adf8cd870&cache=v2",
    ],
    sources: [
      {
        name: "Have we got enough minerals? (Just have a think, 2023)",
        url: "https://www.youtube.com/watch?v=Kr_JjO9YWOo",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [VOITURE_ELECTRIQUE, MATERIAUX],
  },
  {
    question: "Quid des biocarburants pour les voitures ?",
    answer:
      'Biocarburants, la fausse bonne idée. "The world’s croplands are still expanding. At a time when we should be using less land for farming, allocating high-quality farmland to grow food that we then put into cars is a mistake."',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F172ac979-c8b5-40c9-9912-c616c439200d%2FUntitled.png?table=block&id=9e981f2f-49a1-49b5-9f8b-f61347adf654&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F1fddd205-401a-4093-8a0e-b1e5da52ff11%2FUntitled.png?table=block&id=2da22ddb-c32c-4f72-b753-67883f187ea9&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F0aa2afac-3922-4063-90cb-154db6723433%2FUntitled.png?table=block&id=b9626ac5-0f57-404a-aa4c-b8fd0e26be91&cache=v2",
    ],
    sources: [
      {
        name: "Biofuels: the US could switch to electric cars and solar power on just a fraction of the land (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/us-corn-biofuels",
      },
      {
        name: "Global cropland (OWID, 2021)",
        url: "https://ourworldindata.org/grapher/global-cropland",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [BIOCARBURANTS],
  },
  {
    question: "Quid des biocarburants pour les avions ?",
    answer:
      '"We’ll assume that biofuels come from bioethanol and biodiesel at the same ratios – and from same crops – that are used today.\n' +
      'If yields stayed the same, the amount of land needed to produce biofuels in each scenario is in the table below. This is measured in millions of hectares. In the high-demand scenario where jet fuel is eliminated, we’d need around 300 million hectares of cropland. That’s an area the size of India."',
    images: [
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b87f969-65c0-4013-937b-efac6f3a627d_1466x360.png",
    ],
    sources: [
      {
        name: "How much biofuel would we need to decarbonise aviation? (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/aviation-part-two",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [BIOCARBURANTS],
  },
  {
    question:
      "A t'on le luxe d'attendre ? Quels sont les effets sur la santé ?",
    answer:
      'La transition vers le net zero ne doit pas attendre, car c’est le cumul des émissions qui compte, plus que le résultat. <br>"3,3 milliards d’êtres humains exposés au changement climatique." <br>“Perspective is critical: if we continue anthropogenic emissions, cross natural tipping points and let the climate genie completely out of the bottle, then the environmental damage from non-fossil mining operations will be the least of our worries. It’s a classic case where we can’t let perfect be the enemy of the good.” <br>In summary for fossil fuels:\n' +
      "\n<ul class='list-disc px-3'>" +
      "<li>15 billion tonnes of materials per annum, producing over 40 billion tonnes of greenhouse emissions</li>" +
      "<li>1.1 billion tonnes of solid waste</li>" +
      "<li>Vast amounts of polluted water</li>" +
      "<li>Smog choked cities</li>" +
      "<li>8 million premature deaths</li>" +
      "<li> trillions of dollars in global healthcare and lost productivity costs due to the respiratory conditions they cause or exacerbate (eg 12% of childhood asthma due to gas cooktops in homes).</li></ul>" +
      "“At their peak, building clean energy technology will need millions of tonnes of minerals a year. We currently pull 30 billion tonnes of fossil fuels out of the Earth every year.”\n" +
      "“Both nuclear and renewable energy technologies kill hundreds to thousands fewer people than fossil fuels. Moving to them would save millions of lives every year.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F891dd36c-20ea-4417-b663-da2b31655640%2FUntitled.png?table=block&id=9f31f332-aa6a-452e-b781-205ad3763f5b&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F41573eea-e6df-4248-bb5e-a53b2eca939a%2FUntitled.png?table=block&id=f3e637f9-a865-4017-9bd7-560c626e1fad&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8d6fed60-6b56-4c39-92ba-aab14bb8d31b%2FUntitled.png?table=block&id=c08c8654-7225-471b-9a7f-dfe6de12dd9d&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F9b445168-8a8d-4a1c-a9c2-2c853c0b9a88%2FUntitled.png?table=block&id=0da5b651-8b12-40b8-822e-07800156e9e1&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
    ],
    sources: [
      {
        name: "Data review: how many people die from air pollution? (OWID, 2021)",
        url: "https://ourworldindata.org/data-review-air-pollution-deaths",
      },
      {
        name: "Energy to waste – fossil fuels’ dirty secret (Illuminem, 2023)",
        url: "https://illuminem.com/illuminemvoices/energy-to-waste-fossil-fuels-dirty-secret",
      },
      {
        name: "Pottier, A., Fleurbaey, M., Méjean, A. & Zuber, S. Climate change and population: An assessment of mortality due to health impacts. Ecological Economics 183, 106967 (2021).",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0921800921000252",
      },
      {
        name: "Lenton, T. M. et al. Quantifying the human cost of global warming. Nat Sustain 6, 1237–1247 (2023).",
        url: "https://www.nature.com/articles/s41893-023-01132-6",
      },
      {
        name: "Le charbon et ses impacts (Le Réveilleur, 2023)",
        url: "https://www.youtube.com/watch?v=UXSIsb3E1X4",
      },
      {
        name: "The 2023 Report of the Lancet Countdown on Health and Climate Change (Lancet, 2023)",
        url: "https://www.lancetcountdown.org/about-us/interact-with-the-key-findings/",
      },
      {
        name: "Steinmann, Z.J.N. et al. (2017) ‘Resource Footprints are Good Proxies of Environmental Damage’, Environmental Science & Technology, 51(11), pp. 6360–6366. Available at: https://doi.org/10.1021/acs.est.7b00698.",
        url: "https://pubs.acs.org/doi/10.1021/acs.est.7b00698",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SANTE, INACTION],
  },
  {
    question: "Comment décarboner l'aviation ?",
    answer:
      "4-5% d'augmentation depuis 2010 (2010-2018). L’aviation est l’un des secteurs les + difficiles à décarboner, il faut une baisse de la demande. \"Si les deux scénarios « MAVERICK » et « ICEMAN » permettent d’infléchir significativement la courbe des émissions, aucun des deux n’est compatible avec le budget carbone dans cette hypothèse d’une croissance de trafic de 4% par an”. Il faut réglementer l'usage en conséquence, pour l’aérien cela peut être par la limitation de l’activité (limitation des créneaux aéroportuaires, encadrement des subventions, moratoires sur la construction de nouvelles infrastructures), par restriction de la demande (modification du signal-prix, allocation de droits à voyager) ou encore via la fiscalité. <br><br>En mars 2021, le collectif d’ingénieurs de l’aéronautique SUPAERO DECARBO et The Shift Project arrivaient à cette conclusion : « la réduction du trafic aérien est la seule mesure permettant de réduire les émissions de CO2 du secteur aérien de manière certaine. »" +
      "<br><br>En février 2023, la Royal Society en remettait une couche : « il n’y a pas un seul substitut soutenable au kérosène qui permettrait de maintenir le trafic aérien au niveau actuel ». Si l’on utilisait la biomasse, par exemple, il « faudrait plus de 50% de la surface agricole utile du Royaume-Uni » ; de l’H2 produit avec des sources d’énergie renouvelable ? Ca demanderait « 2,4 à 3,4 fois la production d’énergie renouvelable du pays (en 2020) ».",
    images: [
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa9389c9c-5df7-4d80-b737-8c41e56c211c%2FCapture_decran_2024-03-29_a_22.25.34.png?table=block&id=c1ba18a4-5fb0-4179-8784-02c6bc88ea08&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=1420&userId=&cache=v2",
    ],
    sources: [
      {
        name: "« Pouvoir voler en 2050 : Quelle aviation dans un monde contraint ? » Publication du rapport (THE SHIFT PROJECT, 2021)",
        url: "https://theshiftproject.org/article/quelle-aviation-dans-un-monde-contraint-nouveau-rapport-du-shift/",
      },
      {
        name: "Climate change and flying: what share of global CO2 emissions come from aviation? (OWID, 2020)",
        url: "https://ourworldindata.org/co2-emissions-from-aviation#aviation-accounts-for-2-5-of-global-co2-emissions",
      },
      {
        name: "UK net zero aviation ambitions must resolve resource and research questions around alternatives to jet fuel (The Royal Society, 2023)",
        url: "https://royalsociety.org/news/2023/02/net-zero-aviation-fuels-report/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [AVIATION],
  },
  {
    question:
      "Quelles sont les stratégies de réduction de la demande dans les scénarios NZE ?",
    answer: "Elles sont multiples 👇",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F10b46ec1-f925-4bed-9da1-d6f6aa61fa9a%2FCapture_decran_2024-03-01_a_14.38.11.png?table=block&id=f992ca08-5700-4c60-afd3-25ec0e64f9c8&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F1fe75762-b362-4e8c-9286-6c70cb755262%2FCapture_decran_2024-04-05_a_02.06.55.png?table=block&id=5d1db40c-ca75-4f01-993a-2006d57f9f47&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=1420&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ff8c22d63-1541-4f3c-9628-938ffcbe9cba%2FCapture_decran_2024-04-04_a_01.16.19.png?table=block&id=318e675f-1bdc-4875-b434-3b2ffce7fa3d&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://alexandremace.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F938a906b-9460-4a07-af90-c6f95187b1ba%2FCapture_decran_2024-04-04_a_01.16.52.png?table=block&id=d0d2908d-2194-4b8f-a229-21dc6833c67b&spaceId=4358617b-4b00-4227-8921-e73675e23358&width=2000&userId=&cache=v2",
      "https://www.pays-de-la-loire.developpement-durable.gouv.fr/IMG/jpg/scenarios2050.jpg",
    ],
    sources: [
      {
        name: "Futurs énergétiques 2050 : les scénarios de mix de production à l’étude permettant d’atteindre la neutralité carbone à l’horizon 2050 (RTE, 2022)",
        url: "https://www.rte-france.com/analyses-tendances-et-prospectives/bilan-previsionnel-2050-futurs-energetiques#Lesdocuments",
      },
      {
        name: "Net Zero Roadmap: A Global Pathway to Keep the 1.5 °C Goal in Reach (IEA, 2023)",
        url: "https://www.iea.org/reports/net-zero-roadmap-a-global-pathway-to-keep-the-15-0c-goal-in-reach#overview",
      },
      {
        name: "Figure SPM.6: Indicative potential of demand-side mitigation options by 2050",
        url: "https://www.ipcc.ch/report/ar6/wg3/figures/summary-for-policymakers/figure-spm-6/",
      },
      {
        name: "Figure 5.8 | Synthesis of 60 demand-side options ordered by the median GHG mitigation potential found across all estimates from the literature.",
        url: "https://www.ipcc.ch/report/ar6/wg3/figures/chapter-5/figure-5-8",
      },
      {
        name: "Les futurs en transition (ADEME, 2024)",
        url: "https://www.ademe.fr/les-futurs-en-transition/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SOBRIETE, SCENARIOS],
  },
  {
    question:
      "Que faire à l'échelle individuelle pour réduire son empreinte carbone ?",
    answer:
      "<ul class='list-disc px-3'> <li>Devenir végétarien (a bcp + d'importance que manger local)</li><li>Prendre moins/plus l'avion et la voiture, changer de mode de transport</li><li>Se chauffer avec du bas-carbone</li><li>Conserver plus longtemps ses équipements</li></ul>",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fefa75200-ec5f-405e-9bc0-5a3ea34a8115%2FUntitled.png?table=block&id=d76c4448-5bb6-4683-ace6-08e1c5005253&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F7c934023-9e84-4ca8-8752-682faa8a903b%2FUntitled.png?table=block&id=ec4c21a8-32ef-4cdb-a5cc-4234b8fe9abe&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F53d317cd-27dd-475d-afcc-b37878076921%2FUntitled.png?table=block&id=54f4bbfe-e6f2-4454-af8d-aa9629000952&cache=v2",
    ],
    sources: [
      {
        name: "The future of low-carbon heating is heat pumps (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/heat-pumps",
      },
      {
        name: "You want to reduce the carbon footprint of your food? Focus on what you eat, not whether your food is local (OWID, 2020)",
        url: "https://ourworldindata.org/food-choice-vs-eating-local",
      },
      {
        name: "Are meat substitutes really better for the environment than meat? (SBN, 2022)",
        url: "https://www.sustainabilitybynumbers.com/p/carbon-footprint-meat-substitutes",
      },
      {
        name: "10 actions simples pour devenir écolo (BonPote, 2021)",
        url: "https://bonpote.com/10-actions-simples-pour-devenir-ecolo/",
      },
      {
        name: "Nos Gestes Climat",
        url: "https://nosgestesclimat.fr/",
      },
      {
        name: "Reduce (ClimateLab)",
        url: "https://reduce.climatelab.fr/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
    tags: [SOBRIETE, INDIVIDU],
  },
  {
    question: "La désinformation sur le climat : de la cause aux solutions",
    answer: "",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8354152d-d19c-4dd8-a626-0a0d5765b24c%2FUntitled.png?table=block&id=57ac8bdf-0a1b-4972-bbd7-92959cc99f84&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fce777601-17b4-4a01-a12a-52f119ad805f%2FCapture_decran_2024-02-23_a_01.31.01.png?table=block&id=0d032e68-752a-4ac1-bb30-147efe1ef6ee&cache=v2",
    ],
    sources: [
      {
        name: "The New Climate Denial : How social media platforms and content producers profit by spreading new forms of climate denial (CCDH, 2024).",
        url: "https://counterhate.com/wp-content/uploads/2024/01/CCDH-The-New-Climate-Denial_FINAL.pdf",
      },
      {
        name: "Les nouveaux fronts du dénialisme et du climato-scepticisme (David Chavalarias, Paul Bouchaud, Victor Chomel, Maziyar Panahi 2023)",
        url: "https://iscpif.fr/climatoscope/?p=72",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION],
  },
  {
    question:
      "Plus de la moitié des jeunes pensent que l’humanité est “doomed”, alors qu’il n’est pas trop tard pour agir",
    answer:
      "Climate anxiety in children and young people and their beliefs about government responses to climate change: a global survey. “The main message I want to inspire is that it’s not too late to tackle climate change. The future is not a choice between dying off, or living an incredibly limited life. There is a third option: building a world where 8, 9, or 10 billion people can flourish, while reducing our environmental impact at the same time.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F29d5cd26-a844-4385-ada3-ca2b46c7bd18%2FUntitled.png?table=block&id=f8a3bdbd-da51-431d-adbc-fb5355ec3b39&cache=v2",
    ],
    sources: [
      {
        name: "Hickman, C. et al. (2021) ‘Climate anxiety in children and young people and their beliefs about government responses to climate change: a global survey’, The Lancet Planetary Health, 5(12), pp. e863–e873. Available at: https://doi.org/10.1016/S2542-5196(21)00278-3.",
        url: "https://www.thelancet.com/journals/lanplh/article/PIIS2542-5196(21)00278-3/fulltext",
      },
      {
        name: "Young people feel like they have no future due to climate change; we need to change the narrative (SBN, 2022)",
        url: "https://www.sustainabilitybynumbers.com/p/young-climate-anxiety",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION],
  },
  {
    question:
      "Le public est actuellement méfiant face aux nouveaux projets industriels",
    answer:
      "“Plus généralement, d’un point de vue social, on constate un rejet croissant de la part d’une fraction de la population de tout nouveau projet d’infrastructure, qu’il soit renouvelable, nucléaire ou de réseau. Ceci constitue un frein certain à la transition du système électrique, qui nécessitera, pour être surmonté, de développer une appropriation des enjeux collectifs : l’excellent niveau de service fourni à la société française par le système électrique ne pourra être maintenu à l’avenir que par l’investissement dans de nouvelles installations pour constituer un système industriel de grande ampleur à un coût maîtrisé et des impacts environnementaux réduits. L’adhésion des citoyens à des nouvelles pratiques de pilotage de la demande d’électricité demandera de même un fort accompagnement.”",
    images: [],
    sources: [
      {
        name: "Prospective - Transitions 2050 - Feuilleton Mix électrique (RTE, 2022)",
        url: "https://librairie.ademe.fr/energies-renouvelables-reseaux-et-stockage/5352-prospective-transitions-2050-feuilleton-mix-electrique.html",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION],
  },
  {
    question:
      "Bien connaitre le sujet, c’est avoir moins de chance de ressentir de l’éco-anxiété",
    answer:
      "“In terms of practical implications, the main finding that environmental knowledge is negatively related to climate change anxiety suggests that efforts to improve environmental knowledge, for instance through educational and training interventions, may help reduce such anxiety. This seems important given demonstrated links between climate change anxiety and more general forms of mental ill-health, including generalized anxiety, depression, and distress (Schwartz et al. 2022; Searle and Gow 2010). These interventions could be targeted especially at younger people and people with higher environmental awareness and attitudes (e.g., climate scientists), who are at risk of experiencing higher climate change anxiety (Clayton 2020; Crandon et al. 2022; Verplanken et al. 2020).”",
    images: [],
    sources: [
      {
        name: "Hickman, C. et al. (2021) ‘Climate anxiety in children and young people and their beliefs about government responses to climate change: a global survey’, The Lancet Planetary Health, 5(12), pp. e863–e873. Available at: https://doi.org/10.1016/S2542-5196(21)00278-3.\n",
        url: "https://link.springer.com/article/10.1007/s10584-023-03518-z#Sec6",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION, ECOANXIETE],
  },
  {
    question:
      "Efficacité des véhicules électriques face aux véhicules fossiles",
    answer:
      "“If we were to electrify transport, we’d need much less energy overall.\n" +
      "Electrifying our cars will increase electricity demand by around one-quarter. Electrifying all of our road transport will increase demand by 40%.\n" +
      "Big win for electric transport is that it will reduce our overall energy demand. A big chunk of our energy stack will disappear – most of it is wasted as heat in our engines anyway.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fc12684de-460a-4842-90c5-1e1e80776978%2FUntitled.png?table=block&id=036ae994-cd24-427b-8e14-cc1591578aa7&cache=v2",
    ],
    sources: [
      {
        name: "How much more electricity will the UK need to switch to electric vehicles? (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/uk-ev-electricity-demand",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [VOITURE_ELECTRIQUE, EFFICACITE],
  },
  {
    question:
      "Les véhicules électriques permettent d’aller de + en plus loin sans recharge",
    answer:
      "They are being deployed quickly. In 2021 there were 1.8 million public chargers, which is a doubling from just two years before.2 We see this growth in the chart below.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F123bde25-ddf4-422e-b793-c710b7f8d54f%2FUntitled.png?table=block&id=1f0946b2-220d-48aa-afd4-1bf9e558f4f3&cache=v2",
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3ac4062d-bcaa-4bb9-a0a4-2152e1545e1e_4869x3655.png",
    ],
    sources: [
      {
        name: "Which countries have ‘enough’ public chargers for electric cars? (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/public-ev-chargers",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [VOITURE_ELECTRIQUE],
  },
  {
    question: "Les VE actuelles sont trop lourdes, comment faire ?",
    answer:
      "Improved energy density in batteries\n" +
      "Decreased range anxiety\n" +
      "A growing low-to-mid range EV market\n" +
      "Build excellent public charging networks\n" +
      "Incentivise low-to-mid range electric cars\n" +
      "Tax heavy vehicles",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fd0c96dc3-e7ac-403e-8e12-aad31c4f67b9%2FUntitled.png?table=block&id=866a4405-68b3-4fb5-8def-0e19f90ef3bd&cache=v2",
    ],
    sources: [
      {
        name: "The weighty issue of electric cars [Part 1] (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/weighty-issue-of-electric-cars",
      },
      {
        name: "The weighty issue of electric cars [Part 2] (SBN, 2023)",
        url: "https://www.sustainabilitybynumbers.com/p/weighty-issue-of-electric-cars-two",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [VOITURE_ELECTRIQUE],
  },
  {
    question:
      "La pollution de l’air, à elle seule, justifie la transition énergétique",
    answer:
      "This polluted air kills some 7 million people each year, causes long-term health problems, such as asthma, and reduces children’s cognitive development.  According to the World Bank, air pollution costs societies more than $5 trillion every year.",
    images: [],
    sources: [
      {
        name: "ONU Stressing Air Pollution Kills 7 Million People Annually, Secretary-General Urges Governments to Build Green Economy, in Message for World Environment Day (ONU, 2019)",
        url: "https://press.un.org/en/2019/sgsm19607.doc.htm",
      },
      {
        name: "WHO Air pollution",
        url: "https://www.who.int/health-topics/air-pollution#tab=tab_1",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [SANTE],
  },
  {
    question: "Les surestimation d'un rapport populaire",
    answer:
      '"A 1,000 page report influencing IMF, UN and EU policymakers claims we don\'t have enough materials to support a global shift to clean energy. But the report is deeply flawed, based on indefensible unscientific assumptions, and totally ignores key scientific findings."',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F1079a781-d1da-4c0b-9c12-4bc5ca0ac74d%2FUntitled.png?table=block&id=49aaecdc-7dda-4522-9b9e-aaca5bfb12ed&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fbef36ee5-4b33-4ab4-9ef3-aa2cee07eca2%2FUntitled.png?table=block&id=70cf866d-e203-4f36-ba46-91f88913c3ab&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F5380445b-4758-4690-ba3d-14b8142f9e66%2FUntitled.png?table=block&id=9e04696e-4630-43fa-8811-574129e77b7b&cache=v2",
    ],
    sources: [
      {
        name: "Thread twitter (Visa Siekkinen, 2022)",
        url: "https://threadreaderapp.com/thread/1593944033218502657.html",
      },
      {
        name: "How Many Things Must One Analyst Get Wrong In Order To Proclaim A Convenient Decarbonization Minerals Shortage? (CleanTechnica, 2023)",
        url: "https://cleantechnica.com/2023/07/04/how-many-things-must-one-analyst-get-wrong-in-order-to-proclaim-a-convenient-decarbonization-minerals-shortage/",
      },
      {
        name: "Thread twitter (Auke Hoekstra, 2022)",
        url: "https://twitter.com/AukeHoekstra/status/1594084375972712448",
      },
      {
        name: "Energy transformation won’t be derailed by lack of raw materials (Age of transformation, 2023)",
        url: "https://ageoftransformation.org/energy-transformation-wont-be-derailed-by-lack-of-raw-materials/?utm_source=pocket_saves#so-in-summary",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION],
  },
  {
    question: "Les scénarios 100% renouvelables se multiplient",
    answer:
      "“A quickly increasing number of researchers conclude that the entire energy system demand can be met based on renewables, and that doing so will actually be cheaper in the long term, while fulfilling sustainability requirements”, professor Christian Breyer from LUT University concludes.\n" +
      "Key pillars of this new energy system are solar and wind energy, energy storage, sector coupling, and electrification of all energy and industry sectors implying power-to-X and hydrogen-to-X solutions, complemented by upcoming carbon dioxide removal to help stabilize the climate.\n" +
      "Major critiques against 100% renewable energy system research centre on :\n" +
      "\n" +
      "    energy return on investment (EROI) for renewables\n" +
      "\n" +
      "    variability and stability of the system\n" +
      "\n" +
      "    costs\n" +
      "\n" +
      "    raw material demand\n" +
      "\n" +
      "    and community disruption.\n" +
      "\n" +
      "These aspects are directly addressed, and it is shown that they are either a topic of the past, or that solutions exist so that none of these aspects should be regarded as a showstopper. The fundamental structure of the global energy system can shift from conventional, low-efficient burning of extracted fuels towards almost pure exergy, which is electricity, generated from low-cost solar, wind and other natural energy resources. This transition will result in substantial growth of the system efficiency and enable rapid reduction of GHG emissions to fulfil a 1.5 °C scenario without CDR utilisation or limitations on final energy consumption. The broad electrification of end-use sectors like transport and heat makes electricity the growing backbone of the world’s energy supply.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0a86b71f-abc5-4935-8584-daeca1542172%2FUntitled.png?table=block&id=751a2fdf-a56b-4d4d-9929-8e66995e0152&cache=v2",
    ],
    sources: [
      {
        name: "Breyer, C. et al. (2022) ‘On the History and Future of 100% Renewable Energy Systems Research’, IEEE Access, 10, pp. 78176–78218. Available at: https://doi.org/10.1109/ACCESS.2022.3193402.",
        url: "https://ieeexplore.ieee.org/document/9837910",
      },
      {
        name: "Researchers agree: The world can reach a 100% renewable energy system by or before 2050 (Helsinki Times, 2022)",
        url: "https://www.helsinkitimes.fi/themes/themes/science-and-technology/22012-researchers-agree-the-world-can-reach-a-100-renewable-energy-system-by-or-before-2050.html#.YvPUxCrrWdI.twitter",
      },
      {
        name: "Bogdanov, D. et al. (2021) ‘Low-cost renewable electricity as the key driver of the global energy transition towards sustainability’, Energy, 227, p. 120467. Available at: https://doi.org/10.1016/j.energy.2021.120467.\n",
        url: "https://www.sciencedirect.com/science/article/pii/S0360544221007167",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [RENOUVELABLES],
  },
  {
    question: "Les éoliennes tuent-elles beaucoup d'oiseaux ?",
    answer:
      "Peu comparé à d’autres activités, mais il y a matière à réduire fortement le nombre de collisions 👇",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F755d154b-0fa3-43e3-b6a4-233d1efdb53e%2FUntitled.png?table=block&id=051bab49-f510-43d7-a070-c6639634e0d9&cache=v2",
    ],
    sources: [
      {
        name: "Weaver, S.P. et al. (2020) ‘Ultrasonic acoustic deterrents significantly reduce bat fatalities at wind turbines’, Global Ecology and Conservation, 24, p. e01099. Available at: https://doi.org/10.1016/j.gecco.2020.e01099.",
        url: "https://www.sciencedirect.com/science/article/pii/S2351989420301827",
      },
      {
        name: "May, R. et al. (2020) ‘Paint it black: Efficacy of increased wind turbine rotor blade visibility to reduce avian fatalities’, Ecology and Evolution, 10(16), pp. 8927–8935. Available at: https://doi.org/10.1002/ece3.6592.",
        url: "https://onlinelibrary.wiley.com/doi/10.1002/ece3.6592",
      },
      {
        name: "Arnett, E.B. et al. (2011) ‘Altering turbine speed reduces bat mortality at wind-energy facilities’, Frontiers in Ecology and the Environment, 9(4), pp. 209–214. Available at: https://doi.org/10.1890/100103.",
        url: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1890/100103",
      },
      {
        name: "Bennett, E.M. et al. (2022) ‘Curtailment as a successful method for reducing bat mortality at a southern Australian wind farm’, Austral Ecology, 47(6), pp. 1329–1339. Available at: https://doi.org/10.1111/aec.13220.",
        url: "https://onlinelibrary.wiley.com/doi/full/10.1111/aec.13220",
      },
      {
        name: "Subramanian, M. (2012) ‘The trouble with turbines: An ill wind’, Nature, 486(7403), pp. 310–311. Available at: https://doi.org/10.1038/486310a.",
        url: "https://www.nature.com/articles/486310a",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [RENOUVELABLES],
  },
  {
    question: "EROI des ENR",
    answer:
      "A a group of researchers has cleaned up and rectified recent EROI data so that the various fuels can be compared on an apples-to-apples basis. Their new results paint a very different picture from the old literature.\n" +
      "Not only do renewables have sufficiently high EROIs to power our society, they are much higher than the EROIs of the fossil fuels they are replacing! In fact, these results suggest that only through the energy transition can we maintain a functioning society.",
    images: [],
    sources: [
      {
        name: "Thread (Auke Hoekstra, 2020)",
        url: "https://twitter.com/AukeHoekstra/status/1341730308060831744",
      },
      {
        name: "Taux de retour énergétique : J.M. Jancovici dans l'erreur ? (Le Réveilleur 2023)",
        url: "https://www.youtube.com/watch?v=HgfcZeGP7BA",
      },
      {
        name: "Murphy, D.J. et al. (2022) ‘Energy Return on Investment of Major Energy Carriers: Review and Harmonization’, Sustainability, 14(12), p. 7098. Available at: https://doi.org/10.3390/su14127098.",
        url: "https://www.mdpi.com/2071-1050/14/12/7098",
      },
      {
        name: "[Episode #184] – EROI of RE (XE Network, 2022)",
        url: "https://xenetwork.org/ets/episodes/episode-184-eroi-of-re/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [RENOUVELABLES],
  },
  {
    question: "Temps de retour énergétique des ENR",
    answer:
      "Dans de nombreuses régions du monde l'EPBT est d'ailleurs inférieur à un an.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fd96d99a3-611d-45fc-92f1-54c140af306e%2FUntitled.png?table=block&id=6780785b-eaea-45ee-a5bb-3006bfba4577&cache=v2",
    ],
    sources: [
      {
        name: "Retrouver une vision consensuelle de l'énergie et nouveaux outils d'analyse pour penser la transition (Karim Megherbi, 2022)",
        url: "https://www.linkedin.com/pulse/retrouver-une-vision-consensuelle-de-l%C3%A9nergie-et-outils-megherbi/",
      },
      {
        name: "Fthenakis, V. and Leccisi, E. (2021) ‘Updated sustainability status of crystalline silicon‐based photovoltaic systems: Life‐cycle energy and environmental impact reduction trends’, Progress in Photovoltaics: Research and Applications, 29. Available at: https://doi.org/10.1002/pip.3441.\n",
        url: "https://www.researchgate.net/publication/352043442_Updated_sustainability_status_of_crystalline_silicon-based_photovoltaic_systems_Life-cycle_energy_and_environmental_impact_reduction_trends",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [RENOUVELABLES],
  },
  {
    question: "Comment financer la transition ?",
    answer:
      "Pour atteindre les objectifs de neutralité carbone à l’horizon 2050, l’Europe doit sans attendre placer l’équivalent de 2,3 % du PIB européen dans des investissements verts supplémentaires. A titre de comparaison, cela représente la moitié des coûts d’importation d’énergies fossiles de l’Union Européenne en 2022.\n" +
      "\n" +
      "Les investissements publics, en particulier, doivent être doublés, à 510 milliards d’euros par an. Pour cela, il faut exclure ces investissements verts (rénovation des bâtiments, développement de transports en commun….) des règles budgétaires européennes.",
    images: [],
    sources: [
      {
        name: "Road to Net Zero Les investissements nécessaires à l’atteinte de la neutralité carbone (Institut Rousseau, 2024)",
        url: "https://institut-rousseau.fr/road-2-net-zero/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [FINANCE],
  },
  {
    question: "Qui écouter sur le sujet des métaux ?",
    answer:
      "<ul><li>Olivier Vidal</li><li>Emmanuel Hache</li> <li>Baptiste Andrieu</li> <li>Greg De Temmerman</li></ul>",
    images: [],
    sources: [],
    category: CATEGORY_ANNEXES,
    tags: [MATERIAUX],
  },
  {
    question: "Les ENR installées remplacent-elles des énergies fossiles ?",
    answer:
      '"En conséquence, l’augmentation de la production éolienne et solaire en France se traduit par une réduction de l’utilisation des moyens de production thermiques”',
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3e8aa2ad-67e4-46ea-8e38-392d80b8cd2c%2FUntitled.png?table=block&id=f164f700-c6bb-43e9-8b98-34e53e9933bb&cache=v2",
    ],
    sources: [
      {
        name: "Accumulation des énergies - Part 1 (Karim Megherhi, 2023)",
        url: "https://www.linkedin.com/posts/karim-megherbi-a18a7a28_nos-%C3%A9nergies-saccumulent-elles-et-est-ce-activity-7068452133699805184-vffG",
      },
      {
        name: "Accumulation des énergies - Part 2 (Karim Megherhi, 2023)",
        url: "https://www.linkedin.com/posts/karim-megherbi-a18a7a28_nos-%C3%A9nergies-ne-font-elles-que-saccumuler-activity-7071851885644627968-NRUw/?utm_source=share&utm_medium=member_desktop",
      },
      {
        name: "PRÉCISIONS SUR LES BILANS CO2 ÉTABLIS DANS LE BILAN PRÉVISIONNEL ET LES ÉTUDES ASSOCIÉES (RTE, 2020)",
        url: "https://assets.rte-france.com/prod/public/2020-06/note bilans co2.pdf",
      },
      {
        name: "Rappel en vidéo lors de la restitution du rapport par RTE (Thomas Veyrenc RTE, 2023)",
        url: "https://www.linkedin.com/posts/damien-salel-70599b11a_dans-un-récent-article-de-michel-revol-le-activity-7130860689614606336-Uxwp/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION, RENOUVELABLES],
  },
  {
    question: "Photovoltaïque : peut-on se passer de parcs au sol ?",
    answer:
      '"Même en supposant un développement plus massif du PV toiture, le PV-sol hors friche/ombrières semble donc indispensable à court-terme.”',
    images: [
      "https://media.licdn.com/dms/image/D5622AQGIuvDauORFSg/feedshare-shrink_1280/0/1701349967804?e=1716422400&v=beta&t=_AjczSoRY8AES-IlWde3K0WVoYTnFeTHo3bDHeQ9JQ8",
    ],
    sources: [
      {
        name: "Post Linkedin (Damien Salel, 2024)",
        url: "https://www.linkedin.com/posts/damien-salel-70599b11a_photovolta%C3%AFque-peut-on-se-passer-de-parcs-activity-7135978981228515328-u3jr",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION, RENOUVELABLES],
  },
  {
    question: "Les actifs fossiles échoués",
    answer:
      "Over $1 trillion of oil & gas assets risk becoming stranded as a result of policy action on climate and the rise in alternative energy sources. Energy transition risks apply not just to producers, but across the full oil and gas value chain (e.g. refiners) as well as a wide range of different financial services providers. ",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F50c5f832-f9fd-4da2-9e19-c902aa7fbde6%2FUntitled.png?table=block&id=2dd68e8b-b922-44a4-84f0-45b17bc88ef8&cache=v2",
    ],
    sources: [
      {
        name: "Unburnable Carbon: Ten Years On (Carbon Tracker, 2022)",
        url: "https://carbontracker.org/reports/unburnable-carbon-ten-years-on/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [FINANCE],
  },
  {
    question:
      "Les banques continuent de financer les fossiles malgré leurs annonces",
    answer:
      "96 % des 1 623 entreprises de cette base envisagent de mettre en production de nouvelles réserves dans un avenir proche ou d'en rechercher activement de nouvelles. \"TotalEnergies, prétendument en train de s'éloigner des énergies fossiles , a grimpé d'un rang pour devenir le 6ème développeur mondial d'hydrocarbures.\"",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fb1375b95-047e-4db5-80d9-f5c707ecdc0b%2FCapture_decran_2024-03-03_a_19.48.26.png?table=block&id=f6ac46ad-b457-43ba-a34e-88bf55f1f05b&cache=v2",
    ],
    sources: [
      {
        name: "Global Oil & Gas Exit List (Urgewald, 2022)",
        url: "https://gogel.org/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [FINANCE, INACTION],
  },
  {
    question: "La décroissance sans changements technologiques ne suffit pas",
    answer:
      '"En souhaitant forcément une décroissance du PIB, cela peut avoir des conséquences importantes pour certaines populations défavorisées, en particulier dans les pays du Sud. À cette critique, les défendeurs de la décroissance répondent que celle-ci concerne en premier lieu les pays développés. Un chercheur, J.D. Moyer, vient de publier un article qui étudie cette question, avec des modélisations de croissance nulle ou négative au niveau mondial ou différenciée entre pays du Nord et du Sud : <a href="https://www.nature.com/articles/s41598-023-42782-y" class="underline">https://www.nature.com/articles/s41598-023-42782-y</a><br/><br/>' +
      "\n" +
      'Il analyse les conséquences socioéconomiques de cette limitation "forcée" des pays développés par rapport à un scénario "classique" : à croissance nulle, le PIB par habitant reste constant, les dépenses des gouvernements sont moins élevées, les imports/exports stagnent, les investissements - notamment pour les renouvelables - tout comme les aides aux pays en développement baissent, etc. Une variante de ces scénarios incluant une baisse des inégalités, un arrêt des dépenses militaires et une augmentation des dépenses sociales permet de limiter une part des impacts socioéconomiques. <br/><br/>' +
      "\n" +
      "Les résultats sont similaires, mais accentués, pour le scénario à croissance négative des pays développés, et encore plus forts pour ceux au niveau mondial. La décroissance permet de limiter les émissions, mais pas dans une mesure suffisante par rapport aux objectifs climatiques. Cela montre la stérilité d'une partie des débats sur le découplage : même une société décroissante aurait besoin de découpler." +
      "Degrowth can ease but not replace climate policies",
    images: [
      "https://media.springernature.com/full/springer-static/image/art%3A10.1038%2Fs41598-023-42782-y/MediaObjects/41598_2023_42782_Fig1_HTML.png?as=webp",
    ],
    sources: [
      {
        name: "Post LinkedIn (Loic Giaccone, 2023)",
        url: "https://www.linkedin.com/posts/loïc-giaccone_dans-une-première-version-de-larticle-que-activity-7119338834357534722-KDGx/?utm_source=share&utm_medium=member_desktop",
      },
      {
        name: "Moyer, J.D. (2023) ‘Modeling transformational policy pathways on low growth and negative growth scenarios to assess impacts on socioeconomic development and carbon emissions’, Scientific Reports, 13(1), p. 15996. Available at: https://doi.org/10.1038/s41598-023-42782-y.\n",
        url: "https://www.nature.com/articles/s41598-023-42782-y#Sec8",
      },
      {
        name: "Post LinkedIn (Loic Giaccone, 2024)",
        url: "https://www.linkedin.com/posts/lo%C3%AFc-giaccone_le-2nd-article-pr%C3%A9sentant-des-sc%C3%A9narios-climatiques-activity-7183538030241058817-hf4g/?utm_source=share&utm_medium=member_android",
      },
      {
        name: "Can degrowth save the world? (Jarmo Kikstra, 2024)",
        url: "https://twitter.com/JKikstra/status/1775166265633435887",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DECROISSANCE, INACTION],
  },
  {
    question: "Quel est le cout de l'intermittence",
    answer: "",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F50475c64-5ff5-4fe2-b2b8-7dea614d7d38%2FCapture_decran_2024-03-03_a_21.35.55.png?table=block&id=c6a7f192-a897-4596-9195-136f088dde98&cache=v2",
    ],
    sources: [
      {
        name: "L’ANALYSE DES COUTS DU SYSTEME DE PRODUCTION ELECTRIQUE EN FRANCE (Cour des comptes, 2021)",
        url: "https://www.ccomptes.fr/fr/documents/58078",
      },
      "https://www.linkedin.com/posts/grégory-lamotte-bb31421b_quel-est-le-vrai-coût-de-lintermittence-ugcPost-7168622909207396352-THPv",
    ],
    category: CATEGORY_ANNEXES,
    tags: [RENOUVELABLES],
  },
  {
    question: "Accord de Paris : “nettement en dessous de 2 °C”",
    answer: "La nuance est importante 👇",
    images: [],
    sources: [
      {
        name: "Understanding the Paris Agreement’s Long Term Temperature Goal (Climate Analytics)",
        url: "https://climateanalytics.org/comment/understanding-the-paris-agreements-long-term-temperature-goal",
      },
      {
        name: "ACCORD DE PARIS",
        url: "https://unfccc.int/sites/default/files/french_paris_agreement.pdf",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [EMISSIONS, SCENARIOS],
  },
  {
    question:
      "L’éolien et le PV vont-ils nous coûter 150 Mds€ de subventions ?",
    answer: "Non",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fd960c22a-cbd3-4ee8-9984-c97af67c6688%2FUntitled.png?table=block&id=04224938-f27f-4bd3-bb93-ca9a2005b30f&cache=v2",
    ],
    sources: [
      "https://www.linkedin.com/posts/damien-salel-70599b11a_en-plus-de-nous-coûter-150-mds-de-subventions-activity-7143913387473735680-ejHX/",
    ],
    category: CATEGORY_ANNEXES,
    tags: [FINANCE],
  },
  {
    question: "Quelle est l'empreinte au sol de l'élevage ?",
    answer:
      "L’élevage représente entre 20 et 35% des terres émergées, la fourchette dépend de la définition que l’on donne aux surfaces pâturées. 400 millions d’hectares de terres arables utilisées pour l’élevage (+d’1/4 des terres utilisées pour nourrir les animaux d’élevage). Dans le monde, l’élevage représente 1/4 des surfaces arables (en majorité des grains pour les monogastriques), cet argument est souvent utilisé pour défendre un statu quo pour les ruminants (image de la vache à l’herbe sur prairie naturelle). En France, on utilise 40% des terres arables pour nourrir les ruminants (concurrence directe avec l’alimentation humaine pour leur utilisation fourragère).",
    images: [],
    sources: [
      {
        name: "Évolutions de l’élevage et place dans les systèmes de production agricole (Solagro, 2021)",
        url: "https://afterres2050.solagro.org/debattre/elevage/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AGRICULTURE],
  },
  {
    question: "Quels sont les émission de l'élevage en France ?",
    answer:
      "Élevage = 14% des émissions directes dans l’inventaire nationale, mais il faut ajouter * Mise en culture des aliments pour les animaux * Émissions générées par la fabrication des intrants * Émissions induites par la déforestation imputables à l’élevage. Cela représente 70% des émissions du système alimentaire au global en émissions directes, mais + de 85% en émissions indirectes. <br/><br/>L’élevage industriel n’est pas bcp + responsables des émissions de GES de l’agriculture qu’un autre type d’élevage. 3 sources principales : fermentations entériques, déjections d’élevage, alimentation des animaux. Les émissions par l ou kg produits varient peu selon les types d’élevage. <br/><br/>Les prairies ne peuvent pas stocker indéfiniment du carbone, c’est vrai pour les jeunes prairies mais pas pour toutes les prairies car un équilibre est atteint à terme. En France, l’étude 4 pour 1000 a montré que cet effet de stockage est assez faible, il est loin de compenser les émissions des fermentations entériques. Cependant, un retournement des cultures n’est pas souhaitable car le stockage est lent, et le destockage est rapide.",
    images: [],
    sources: [
      {
        name: "Évolutions de l’élevage et place dans les systèmes de production agricole (Solagro, 2021)",
        url: "https://afterres2050.solagro.org/debattre/elevage/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AGRICULTURE],
  },
  {
    question: "A t'on besoin des animaux pour la fertilité des sols ?",
    answer:
      "Les animaux ne fabriquent pas d’azote, ni de matière organique. Ce sont les êtres autotrophes qui fabriquent de la matière organique (les végétaux). Les animaux sont hétérotrophes transforment les molécules avec une déperdition (10% d’azote perdu chaque année). L’azote provient des aliments ingérés par les animaux. Les deux sources d’entrées d’azote dans l’agrosystème : fixation symbiotique et engrais azotés. On n’a pas absolument besoin des animaux pour augmenter la fertilité des sols, si l’on veut augmenter la matière organique et l’azote il faut des engrais verts et des légumineuses.",
    images: [],
    sources: [
      {
        name: "Évolutions de l’élevage et place dans les systèmes de production agricole (Solagro, 2021)",
        url: "https://afterres2050.solagro.org/debattre/elevage/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AGRICULTURE],
  },
  {
    question: "Pourrais t'on généraliser le polyculture-élevage ?",
    answer:
      "Le système polyculture-élevage fonctionne sans problème jusqu’à la question de la généralisation. Si l’on veut massifier l’agriculture biologique, la fumure animale ne peut fournir qu’une partie des apports d’azote, il faut donc des systèmes sans élevage avec beaucoup de légumineuses.",
    images: [],
    sources: [
      {
        name: "Évolutions de l’élevage et place dans les systèmes de production agricole (Solagro, 2021)",
        url: "https://afterres2050.solagro.org/debattre/elevage/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AGRICULTURE],
  },
  {
    question: "Forêt vs prairie",
    answer:
      '"Une afforestation est souhaitable dans de nombreux cas mais certaines prairies présentent une valeur écologique élevée et nécessitent une protection active que seul l’élevage semble en mesure d’offrir actuellement. Par exemple, certaines prairies maintiennent une coupure ouverte, ce qui réduit fortement le risque d’incendie. <br/>La dynamique actuelle de reboisement des prairies est déjà rapide, l’accélérer est un risque de déséquilibrage des adaptations en cours. En revanche, reboiser des territoires à dominante de grandes cultures ou de zones périurbaines pourrait générer de grands bénéfices."',
    images: [],
    sources: [
      {
        name: "Évolutions de l’élevage et place dans les systèmes de production agricole (Solagro, 2021)",
        url: "https://afterres2050.solagro.org/debattre/elevage/",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AGRICULTURE],
  },
  {
    question: "Quel est l'impact des traines de condensations ?",
    answer:
      "\"Les études récentes démontrent que l'effet des traînées de condensation contribue davantage au réchauffement climatique que tout le CO2 émis par les avions. Ces effets devraient s'aggraver à mesure que le trafic aérien et la couverture nuageuse qui en résulte augmentent. Lorsque les études plus récentes ajoutent les effets des cirrus de traînée, le RFI augmente et il est estimé entre 3,8 et 4,3.\"",
    images: [],
    sources: [
      {
        name: "État de l'art de la recherche scientifique sur l'impact climatique des traînées de condensation des avions (ADEME, 2021)",
        url: "https://librairie.ademe.fr/mobilite-et-transport/4617-etat-de-l-art-de-la-recherche-scientifique-sur-l-impact-climatique-des-trainees-de-condensation-des-avions.html",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [AVIATION],
  },
  {
    question: "Pour quoi l'hydrogène doit-il être utilisé ?",
    answer:
      '"L’hydrogène constitue en premier lieu un moyen de décarboner des secteurs difficiles voire impossibles à électrifier sur le plan technique ou économique (raffinage, production d’ammoniac, chimie et mobilité lourde)."',
    images: [],
    sources: [
      {
        name: "Futurs énergétiques 2050 Principaux résultats (RTE, 2021)",
        url: "https://assets.rte-france.com/prod/public/2021-12/Futurs-Energetiques-2050-principaux-resultats.pdf",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [HYDROGENE],
  },
  {
    question:
      "La neutralité carbone a t'elle un sens à l'échelle d'un produit ?",
    answer:
      '"La neutralité carbone est une notion qui ne peut être définie qu’à l’échelle de la planète ou d’un État. En effet, chercher à appliquer une neutralité carbone arithmétique à une autre échelle peut engendrer des biais méthodologiques et éthiques. C’est pourquoi les acteurs ne peuvent ni devenir ni se revendiquer neutres en carbone individuellement à leur seule échelle, mais doivent mettre en place des stratégies climat ambitieuses et compatibles avec l’Accord de Paris et les politiques nationales."',
    images: [],
    sources: [
      {
        name: "[Avis de l’ADEME] Tous les acteurs doivent agir collectivement pour la neutralité carbone, mais aucun acteur ne devrait se revendiquer neutre en carbone (ADEME, 2021))",
        url: "https://presse.ademe.fr/2021/04/avis-de-lademe-tous-les-acteurs-doivent-agir-collectivement-pour-la-neutralite-carbone-mais-aucun-acteur-ne-devrait-se-revendiquer-neutre-en-carbone.html",
      },
      {
        name: "Décret n° 2022-539 du 13 avril 2022 relatif à la compensation carbone et aux allégations de neutralité carbone dans la publicité",
        url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000045570611",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION],
  },
  {
    question: "Peut-on ouvrir de nouveaux projets fossiles ?",
    answer:
      '"Projected cumulative future CO2 emissions over the lifetime of existing and currently planned fossil fuel infrastructure without additional abatement exceed the total cumulative net CO 2 emissions in pathways that limit warming to 1.5°C (>50%) with no or limited overshoot. They are approximately equal to total cumulative net CO 2 emissions in pathways that limit warming to 2°C (>67%). (high confidence) {2.7, 3.3}. The continued installation of unabated fossil fuel infrastructure will ‘lock-in’ GHG emissions. (high confidence)"',
    images: [],
    sources: [
      {
        name: "IPCC AR6 WGIII SPM",
        url: "https://www.ipcc.ch/report/ar6/wg3/downloads/report/IPCC_AR6_WGIII_SummaryForPolicymakers.pdf",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION, EMISSIONS, SCENARIOS],
  },
  {
    question: "Quelle est la répartition des puits de carbone ?\n",
    answer:
      "La distribution des puits de carbone montre que les océans jouent un rôle majeur dans l'absorption du CO2, en particulier dans l'océan Austral et l'Atlantique Nord, tandis que les forêts et les terres contribuent également de manière significative à la séquestration du carbone. Il est essentiel de comprendre ces processus pour évaluer l'impact des émissions de CO2 sur le climat et développer des stratégies efficaces pour atténuer le changement climatique.",
    images: [
      "https://resumegiec.files.wordpress.com/2021/08/fig-7-ipcc_ar6_wgi_spm.jpg?w=2046",
    ],
    sources: [
      {
        name: "Figure SPM.7 - IPCC AR6 WGI SPM",
        url: "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf#page=20",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [EMISSIONS, SCENARIOS],
  },
  {
    question:
      "Quelle est l'impact d'une relocalisation en France de la production de PV sur les émissions ?",
    answer:
      "\"Pour connaître le bilan de l'installation PV, il faut aussi inclure le reste des équipements et la maintenance et l'exploitation sur la durée de vie du système. On appelle cela Balance of System en anglais (BoS).\n" +
      "\n" +
      "<br/><br/>D'après une étude de 2021 [https://lnkd.in/eA_P7yFq], l'empreinte du BoS seul est d'environ 250 kgCO2-eq/kW pour une installation au sol. Pour estimer l'empreinte d'un système PV complet, on peut en 1ère approximation ajouter cette valeur à l'empreinte du module.\n" +
      "\n" +
      "<br/><br/>Systèmes PV actuels (principalement modules chinois) : 270 + 250 = 520 kgCO2/kW, soit 16 gCO2/kWh.\n" +
      "\n" +
      "<br/><br/>Systèmes PV avec des modules intégralement fabriqués en France : 50 + 250 = 300 kgCO2/kW, soit 9 gCO2/kWh !\n" +
      "\n" +
      "\n" +
      "<br/><br/>Selon ces estimations, le bilan carbone du PV en France serait donc d'ores et déjà inférieur à 20 gCO2/kW avec des modules classiques, et il pourrait descendre en dessous de 10 avec une relocalisation complète des modules !\"",
    images: [
      "https://media.licdn.com/dms/image/D4E22AQHQ9hFjBwMX5w/feedshare-shrink_1280/0/1712525409818?e=1715212800&v=beta&t=mEY6IEARxC4IRxVM4oobhXlJ5M_TcqECWHzq41pqUkg",
    ],
    sources: [
      {
        name: "Post LinkedIn (Damien Salel, 2024)",
        url: "https://www.linkedin.com/posts/damien-salel-70599b11a_lempreinte-carbone-des-modules-pv-seuls-ugcPost-7182852184550604800-zqgW?utm_source=share&utm_medium=member_desktop",
      },
      {
        name: "Special Report on Solar PV Global Supply Chains (IEA, 2022)",
        url: "https://iea.blob.core.windows.net/assets/d2ee601d-6b1a-4cd2-a0e8-db02dc64332c/SpecialReportonSolarPVGlobalSupplyChains.pdf",
      },
    ],
    category: CATEGORY_ANNEXES,
    tags: [EMISSIONS, RENOUVELABLES],
  },
  {
    question:
      "L'activisme radical dessert-il la cause climatique ?",
    answer:
      "Même si les actions radicales remportent moins l'adhésion du grand public, la couverture médiatique qu'elles génèrent est tellement plus importante que l'impact net finit par être positif pour la cause. Ce flanc radical déplace aussi la fenêtre d'Overton : il rend les revendications des mouvements modérés plus audibles et acceptables par comparaison.",
    images: [],
    sources: [
      "https://bonpote.com/cest-contre-productif-ca-dessert-la-cause-lactivisme-est-il-toujours-efficace/",
    ],
    category: CATEGORY_ANNEXES,
    tags: [DESINFORMATION, INACTION],
  },
];
