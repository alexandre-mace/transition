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
    question: "C’est quoi un scénario net zéro émissions ?",
    answer: "",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F26ba6e0e-47be-4420-8ccb-ab20a901b3a8%2FUntitled.png?table=block&id=1675a518-64f1-4354-bcea-7232b6887f38&cache=v2",
    ],
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
      {
        name: "EDF Scénario Net Zero 2050",
        url: "https://www.edf.fr/scenario2050",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "Quelles sont les principales solutions ?",
    answer:
      "“Many options available now in all sectors are estimated to offer substantial potential to reduce net emissions by 2030. Relative potentials and costs will vary across countries and in the longer term compared to 2030.”",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F777f380f-f5f7-493a-be0d-3bf07f8a6c98%2FUntitled.png?table=block&id=25a7f540-5dad-4d1d-9759-8b751d5c710b&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ffdb7dc90-9469-4725-ab53-097c0a7edb66%2FCapture_decran_2024-03-03_a_19.30.32.png?table=block&id=15a520b8-9001-4ca4-abdc-c69831c7f50c&cache=v2",
    ],
    sources: [
      {
        name: "Figure SPM.7 | Overview of mitigation options and their estimated ranges of costs and potentials in 2030. (IPCC 2022)",
        url: "https://www.ipcc.ch/report/ar6/wg3/chapter/summary-for-policymakers/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "Sans changement climatique, faudrait-il changer de système ?",
    answer:
      "Même sans changement climatique, les impacts sur la santé humaine à eux seuls montrent qu’il faut changer de système. “Our results suggest that further relying predominantly on these new renewables in the transition towards a near-zero emissions power system also reduces most nonclimate environmental impacts on the system level compared to strategies that limit the contribution of wind and solar power largely in favor of greater CCS deployment.”. Poussières de charbon: 1.1 milliards de tonnes/an. Pétrole-gaz: 1er émetteur de composés organiques volatiles qui créent\n" +
      "les brouillards de pollution (cf récemment septembre dernier la ville\n" +
      "Dehli). 8 millions de morts prématurées/an. 7 trillions de dollars dépensés en 2022 en subventions directes et indirects (réparation des externalités négatives).",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Ff23f983c-99f4-472c-8024-9ab49428a0d3%2FCapture_decran_2024-02-26_a_00.06.09.png?table=block&id=149e2794-ca93-4147-a53c-6744468ccd74&cache=v2",
    ],
    sources: [
      {
        name: "Environmental co-benefits and adverse side-effects of alternative power sector decarbonization strategies ",
        url: "https://www.nature.com/articles/s41467-019-13067-8#Sec8",
      },
      {
        name: "Energy to waste – fossil fuels’ dirty secret",
        url: "https://illuminem.com/illuminemvoices/energy-to-waste-fossil-fuels-dirty-secret",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "Consomme t'on plus d'énergie après la transition ?",
    answer:
      "Without economic and population growth and in a decarbonised world, our final energy demand is much lower than it is today. A study by the Oxford Professor Nick Eyre suggests it’s about 40% lower. Taking them into account : with weak decarbonisation (stated policies) global energy demand continues to rise. With strong decarbonisation, energy demand will fall slightly. Importantly, this is about final energy demand. It doesn’t include the decline in primary energy demand that we’d expect with decarbonisation. This would be substantial because most energy from burning fossil fuels is wasted when converting it to final energy.",
    images: [
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb4057436-20c0-4576-a763-81947dfa31d1_662x575.png",
      "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F288058c1-f52d-4594-883c-9ffbc522960f_1600x861.png",
    ],
    sources: [
      {
        name: "Global energy demand could be lower in 2050, despite the world getting richer",
        url: "https://www.sustainabilitybynumbers.com/p/iea-energy-scenarios",
      },
      {
        name: "Electrification is efficiency: The world will need less energy after the transition",
        url: "https://www.sustainabilitybynumbers.com/p/electrification-energy-efficiency",
      },
      {
        name: "Powering the world: how much energy will the world need? (Zenon 2021)",
        url: "https://www.zenon.ngo/insights/powering-the-world-how-much-energy-will-the-world-need",
      },
      {
        name: "World can limit global warming to 1.5C by ‘improving energy efficiency’",
        url: "https://www.carbonbrief.org/world-can-limit-global-warming-one-point-five-improving-energy-efficiency/",
      },
    ],
    category: CATEGORY_SOLUTIONS,
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
        name: "The world has enough minerals for low-carbon electricity",
        url: "https://www.sustainabilitybynumbers.com/p/minerals-for-electricity",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question: "La transition énergétique nous met-elle dans un extractivisme ?",
    answer:
      'The materials we need for the transition to sustainable energy are a drop in the bucket compared to building materials, agriculture, and fossil fuels. "The Material Flow Analysis Portal compiled and maintained by @wu_vienna\n' +
      "provides great context with non-metallic minerals such as sand, gravel, and stone. When put to scale, the critical minerals for the energy transition are a relatively small slice.” “Stronger actions are required to counter the upward pressure on emissions from mineral production, but the climate advantages of clean energy technologies remain clear”. if we all eat 1% less meat (or if we make cultured meat cheaper and healthier), we save more species than if we abandon all mining that’s needed for the shift to renewables. La transition énergétique à faible émission de carbone nécessitera moins d’exploitation minière que les combustibles fossiles, même en tenant compte des déchets de roche. Material requirements for low-carbon technologies will increase substantially, but they will still be lower than fossil fuel extraction",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fda1edd75-6f90-48ee-a6de-809a40c09c3e%2FUntitled.png?table=block&id=3b3d9cce-a17a-4235-94e4-090e55b32498&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F7e5f2c0f-35e1-4c36-b08b-e1be758d923b%2FUntitled.png?table=block&id=e8d841cc-6b66-455c-a1e8-8c8df7633d2e&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F5a658389-bc62-4017-a05c-1c4715f258a1%2FUntitled.png?table=block&id=13666653-ebff-4ded-9db8-a3dce174135b&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F94ed9691-ea02-48dc-a1ff-65cc778a08a6%2FUntitled.png?table=block&id=e47e1ed6-49c7-474e-a533-795380d69577&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2Fcadad35e-5c06-450e-81f9-112a922dc798%2FUntitled.png?table=block&id=627ee438-23d7-4531-950f-4196ca18d9bb&cache=v2",
    ],
    sources: [
      {
        name: "The low-carbon energy transition will need less mining than fossil fuels, even when adjusted for waste rock",
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
        name: "Mining quantities for low-carbon energy is hundreds to thousands of times lower than mining for fossil fuels",
        url: "https://www.sustainabilitybynumbers.com/p/mining-low-carbon-vs-fossil",
      },
      {
        name: "Métaux, le nouvel or noir (Emmanuel Hache, Benjamin Louvet 2023)",
        url: "https://www.editionsdurocher.fr/product/129257/metaux-le-nouvel-or-noir/",
      },
      {
        name: "Ademe - HORIZONS Les matériaux pour la transition énergétique, un sujet critique",
        url: "https://librairie.ademe.fr/cadic/6842/feuilleton_materiaux_de_la_te_transitions2050_ademe.pdf",
      },
      {
        name: "RTE - L’ANALYSE ENVIRONNEMENTALE",
        url: "https://assets.rte-france.com/prod/public/2022-06/FE2050 _Rapport complet_12.pdf",
      },
      {
        name: "The Role of Critical Minerals in Clean Energy Transitions -IEA",
        url: "https://www.iea.org/reports/the-role-of-critical-minerals-in-clean-energy-transitions/executive-summary",
      },
      {
        name: "Twitter - Auke Hoekstra",
        url: "https://twitter.com/AukeHoekstra/status/1594084413943734272",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
  {
    question:
      "Quelle quantité de déchets les panneaux solaires et les éoliennes produisent-ils ?",
    answer:
      "“Moving away from coal power to renewables (or nuclear) would significantly reduce the amount of waste generated. Not to mention that fossil fuels generate other forms of ‘waste’ that are terrible for human health. Millions die every year from local air pollution. And more will die in the future as a result of climate change.” Solar :  1.67 kilograms of waste per MWh [22 kg / 13 MWh]. Wind : 0.16 kilograms of waste per MWh [60,000 kg / 383,250 MWh]. Coal ash: 84 kilograms of coal per MWh. Nuclear : 0.031 kilograms of waste per MWh [250,000 kg / 8,146,800 MWh]. Municipal waste : 485 kilograms per year. Plastic waste : 77 kilograms of plastic waste per year.",
    images: [
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F4aca9195-44e3-4808-a657-3dc03331c5ab%2FUntitled.png?table=block&id=efd2e95b-7525-4ccc-8475-493827af1d4a&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F72efc597-6226-43e8-8ea6-6d37142ef10f%2FUntitled.png?table=block&id=4226af08-4c19-4591-bf3c-1118f1feb0dc&cache=v2",
      "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4358617b-4b00-4227-8921-e73675e23358%2F94e82caf-942d-4ba9-a359-e3ba933b302f%2FUntitled.png?table=block&id=e5d72304-8ca5-4f13-a109-e94077771a9d&cache=v2",
    ],
    sources: [
      {
        name: "How much waste do solar panels and wind turbines produce?",
        url: "https://www.sustainabilitybynumbers.com/p/renewables-waste",
      },
      {
        name: "Mirletz, H., Hieslmair, H., Ovaitt, S. et al. Unfounded concerns about photovoltaic module toxicity and waste are slowing decarbonization. (2023)",
        url: "https://www.nature.com/articles/s41567-023-02230-0",
      },
      {
        name: "Liu, P., & Barlow, C. Y. (2017). Wind turbine blade waste in 2050. Waste Management, 62, 229-240.",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0956053X17300491",
      },
    ],
    category: CATEGORY_SOLUTIONS,
  },
];

export { debunks, CATEGORY_CONSEQUENCES, CATEGORY_CAUSE, CATEGORY_SOLUTIONS };
export type { Debunk };
