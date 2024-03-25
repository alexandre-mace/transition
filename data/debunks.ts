type Debunk = {
  question: string;
  answer: string;
  sources: (string | { name: string; url: string })[];
  images: string[];
  category: string;
};

const CATEGORY_CAUSE = "cause";
const CATEGORY_CONSEQUENCES = "consequences";
const CATEGORY_SOLUTIONS = "solutions";

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
      "https://bonpote.com/synthese-et-analyse-du-nouveau-rapport-du-giec/",
      "https://www.ipcc.ch/report/ar6/wg1/downloads/report/IPCC_AR6_WGI_SPM.pdf",
      "https://journals.sagepub.com/doi/10.1177/0270467619886266",
    ],
    category: CATEGORY_CAUSE,
  },
  {
    question:
      "Il a fait froid ce matin, peut-il vraiment y avoir un changement climatique ?",
    answer:
      "“Attention à ne pas confondre météo et climat. Ce n'est pas parce qu'il fait exceptionnellement très froid pendant 2 ou 3 jours que cela vient réfuter le réchauffement climatique d'origine humaine. Il a par exemple fait très froid début décembre 2022, mais l'année 2022 est tout le même l'année la plus chaude enregistrée en France depuis que les mesures ont commencé en 1949 !”",
    images: [],
    sources: [
      "https://bonpote.com/comment-ne-plus-confondre-meteo-et-climat/",
      "https://ledinerdusiecle.bonpote.com/",
    ],
    category: CATEGORY_CAUSE,
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
  },
  {
    question: "Nos émissions sont-elles en train d'augmenter ?",
    answer:
      "Les émissions augmentent toujours chaque année. “Many countries succeed in reducing their fossil CO2 emissions or slowing down their growth,\n" +
      "but recent progress is not fast enough and not widespread enough to put global emissions on\n" +
      "a downward trajectory towards net zero.”\n" +
      '"Fossil CO2 emissions are falling in some regions, including Europe and the USA, but rising overall – and the scientists say global action to cut fossil fuels is not happening fast enough to prevent dangerous climate change.”',
    images: [],
    sources: [
      "https://www.sustainabilitybynumbers.com/p/small-emitters",
      "https://bonpote.com/analyse-la-france-ne-represente-que-1-des-emissions-de-co2/",
      "https://bonpote.com/la-france-est-elle-vraiment-4e-pays-le-plus-vert-au-monde/",
    ],
    category: CATEGORY_CAUSE,
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
  },
  {
    question:
      "Quelles sont les causes principales du dépassement des limites planétaires ?",
    answer:
      "Le dépassement des limites planétaires et la perte de biodiversité viennent dans leur très large majorité des fossiles et de l'agriculture/élevage/pêche.",
    images: [],
    sources: [
      "https://globalcarbonbudget.org",
      {
        name: "Les 9 frontières planétaires : on en fait trop?",
        url: "https://www.youtube.com/watch?v=mTaDdabVbL4",
      },
    ],
    category: CATEGORY_CAUSE,
  },
  {
    question:
      "Quelles sont les conséquences principales du changement climatique ?",
    answer:
      "Les canicules seront plus fréquentes et plus intenses. Les chaleurs humides peuvent tuer.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fc353da2b-2150-40de-bc47-872219f79c90%2FSRL-image-0.png?table=block&id=460da10d-6b86-4799-ab76-fed356b50c7d&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F2038e4f2-4849-415b-ab8e-4397a67b896b%2FUntitled.png?table=block&id=461da246-f249-4f15-bf74-ae7c9ca1196e&cache=v2",
    ],
    sources: [
      {
        name: "Synthesis Report of the Sixth Assessment Report (IPCC 2022)",
        url: "https://www.ipcc.ch/ar6-syr/",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur les canicules",
    answer:
      "Les canicules seront plus fréquentes et plus intenses. Les chaleurs humides peuvent tuer.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F093bafb5-ba53-4dd0-86bc-fe7196bd33c8%2FCapture_decran_2024-03-10_a_18.05.40.png?table=block&id=e7f4105d-8784-4910-85f7-04ef4c393167&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa9c6c499-efb8-4fbe-a910-4d0772df0825%2FCapture_decran_2024-03-10_a_18.05.54.png?table=block&id=6a6bfa66-0814-4be7-8796-afb551461282&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F620238e3-9a23-44f7-a363-39da71446dbe%2FCapture_decran_2024-03-10_a_18.06.06.png?table=block&id=203cd5ca-0cb5-47bd-82e2-a538db74edfd&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fed8ec3d5-1b54-4000-849b-69352d37c04e%2FCapture_decran_2024-03-10_a_18.06.17.png?table=block&id=9cb01812-8e65-44c6-970d-9f596eed1dbb&cache=v2",
    ],
    sources: [
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
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur les sécheresses",
    answer: "Les sécheresses seront plus fréquentes et plus intenses.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F0c1681ba-c001-4359-b863-ae03300bf59e%2FCapture_decran_2024-03-10_a_18.16.37.png?table=block&id=a37265e6-6ae4-46c8-8048-d5a5ef7f3512&cache=v2",
    ],
    sources: [
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur les inondations",
    answer:
      "Les sécheresses seront plus fréquentes et plus intenses. “We find that current and future water scarcity becomes a substantially more severe issue globally when implementing our clean-water scarcity assessment. The number of sub-basins facing severe scarcity doubles in 2010 and may even triple in 2050 in our clean-water scarcity assessment, compared to the classical water scarcity assessment that only considers water availability from the quantity perspective”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fffdbc57a-ab6f-45a3-9dd0-e2c1da506fda%2FUntitled.png?table=block&id=5f1b9cac-309f-4d31-a908-7c953c4e878d&cache=v2",
    ],
    sources: [
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
      {
        name: "A triple increase in global river basins with water scarcity due to future pollution",
        url: "https://www.nature.com/articles/s41467-024-44947-3#Sec2",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur la fonte des glaciers",
    answer:
      "La fonte des glaciers va se poursuivre durant des siècles quoi qu'il arrive. 600 millions de personnes dépendent de la fonte des neiges.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F8f615116-51ff-4792-8b8f-364a4dc3f510%2FCapture_decran_2024-03-10_a_18.20.54.png?table=block&id=41c47ced-7c7a-44f5-a6ba-28ab582f7aaa&cache=v2",
    ],
    sources: [
      {
        name: "Comment le réchauffement climatique va bouleverser l’humanité (ft. Le Réveilleur) (Le monde / Le réveilleur 2021)",
        url: "https://www.youtube.com/watch?v=8nzRXxPnlPQ",
      },
      {
        name: "Agricultural risks from changing snowmelt (Qin, Y., Abatzoglou, J.T., Siebert, S. et al. 2020)",
        url: "https://www.nature.com/articles/s41558-020-0746-8",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur l'élévation du niveau de la mer ?",
    answer:
      "« New elevation data triple estimates of global vulnerability to sea-level rise and coastal flooding. »",
    images: [],
    sources: [
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
  },
  {
    question:
      "Quelles sont les conséquences du changement climatique sur l'acidification des océans",
    answer: "",
    images: [],
    sources: [],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Quels sont les points de bascules et pour quels niveau de réchauffement associé ?",
    answer: "",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fa459c988-7732-4d80-93fd-7bd3d6a8c082%2FCapture_decran_2024-03-02_a_02.31.20.png?table=block&id=615d75e2-2bef-4c55-96d3-162313b33c89&cache=v2",
    ],
    sources: [
      {
        name: "Points de basculement du système climatique : Le défi urgent des risques de franchissement (OCDE - 2022)",
        url: "https://www.oecd.org/environment/climate-tipping-points-abc5a69e-en.htm",
      },
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question:
      "Est-ce que nos efforts valent le coup ? Combien de vies a t'on à sauver ?",
    answer:
      "Population exposée à des chaleurs sans précédent entre stated policies 2.7 et Accord de Paris 1.5 High temperatures have been linked to increased mortality1213, decreased labour productivity19, decreased cognitive performance20, impaired learning21, adverse pregnancy outcomes22, decreased crop yield potential9, increased conflict232425, hate speech26, migration27 and infectious disease spread92829. Climate-related sources of harm not captured by the niche include sea-level rise3031.\n" +
      "Overall, our results illustrate the huge potential human cost and the great inequity of climate change, informing discussions of loss and damage6061. The worst-case scenarios of ~3.6 °C or even ~4.4 °C global warming could put half of the world population outside the historical climate \n" +
      "niche, posing an existential risk. The ~2.7 °C global warming expected under current policies puts around a third of the world population outside the niche. \n" +
      "The gains from fully implementing all announced policy targets and limiting global warming to ~1.8 °C are considerable, but would still leave nearly 10% of people exposed to unprecedented heat. Meeting the goal of the Paris Agreement to limit global warming to 1.5 °C halves exposure outside the temperature niche relative to current policies and limits those exposed to unprecedented heat to 5% of people.\n" +
      "“our results show the huge potential for more decisive climate policy to limit the human costs and inequities of climate change.”",
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
    ],
    category: CATEGORY_CONSEQUENCES,
  },
  {
    question: "Est-ce trop tard ?",
    answer:
      "“La littérature scientifique est très claire : nous avons notre avenir climatique entre nos mains. Nos actions individuelles et collectives peuvent opérer des changements dont nous tirerons les bénéfices rapidement.”",
    images: [],
    sources: [
      "https://bonpote.com/cest-trop-tard-on-est-foutus-pourquoi-cest-faux-et-comment-y-repondre/",
      "https://bonpote.com/existe-t-il-vraiment-une-inertie-climatique-de-20-ans/",
      {
        name: "Le déni climatique, un vrai business ? (France Info 2024)",
        url: "https://www.youtube.com/watch?v=HXm8viVPjSY",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "Le système énergétique actuel est-il efficient ?",
    answer:
      "Non, il comporte BEAUCOUP de pertes. La “primary energy fallacy” réside dans l'hypothèse selon laquelle toutes les sources d'énergie issues du pétrole, du gaz et du charbon que nous utilisons actuellement doivent être remplacées. L'énergie primaire pour une économie provient de la gauche. Elle est ensuite répartie dans ses différentes utilisations, telles que le gaz naturel pour la génération électrique et le chauffage. Une partie de cette énergie, qui n'est pas perdue par inefficacité, est utilisée pour fournir des services énergétiques. Cependant, une autre partie est simplement dissipée sous forme de chaleur résiduelle, sans apporter aucun bénéfice utile pour nous.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F0bedc087-15e4-4051-976c-dfefbc12e213%2FUntitled.png?table=block&id=7978f55f-2a0e-4438-92ed-fad968ae55bf&cache=v2",
    ],
    sources: [
      "https://flowcharts.llnl.gov/",
      {
        name: "Energy Literacy",
        url: "http://energyliteracy.com/",
      },
      {
        name: "Beyond primary energy: the energy transition needs a new lens (Zenon 2023)",
        url: "https://www.zenon.ngo/insights/beyond-primary-energy-the-energy-transition-needs-a-new-lens",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "Le système énergétique actuel est-il efficient ?",
    answer: "",
    images: [],
    sources: [
      {
        name: "Scénarios climatiques, croissance économique et décroissance (Loic Giaccone 2023)",
        url: "https://climatanthropocene.com/2023/09/18/scenarios-climatiques-croissance-economique-et-decroissance/",
      },
      {
        name: "RTE 2035",
        url: "https://www.rte-france.com/actualites/bilan-previsionnel-transformation-systeme-electrique-2023-2035",
      },
      {
        name: "Comment electrifier d'ici 2035 - RTE",
        url: "https://www.rte-france.com/actualites/comprendre-piloter-electrification-ici-2035-conditions-cles-relever-defis-transition",
      },
      {
        name: "Les futurs en transition",
        url: "https://www.ademe.fr/les-futurs-en-transition/",
      },
      {
        name: "RTE 2050",
        url: "https://www.rte-france.com/analyses-tendances-et-prospectives/bilan-previsionnel-2050-futurs-energetiques",
      },
      {
        name: "AIE",
        url: "https://www.iea.org/reports/net-zero-by-2050",
      },
      {
        name: "THE SHIFT PROJECT",
        url: "https://ilnousfautunplan.fr/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
];

export { debunks, CATEGORY_CONSEQUENCES, CATEGORY_CAUSE, CATEGORY_SOLUTIONS };
export type { Debunk };
