import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
} from "../assets";

export const navLinks = [
  {
    id: "info",
    title: "Info",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "kontakt",
    title: "Kontakt",
  },
];

export const services = [
  { title: "React.js", icon: c },
  { title: "JavaScript", icon: cpp },
  { title: "Node.js", icon: python },
  { title: "MongoDB", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const experiences = [
  {
    title: "Front-End Developer",
    company_name: "Fundacja Kompetencji Cyfrowych",
    icon: eduskill,
    iconBg: "#161329",
    date: "Gru 2024 - aktualnie",
    points: [
      "Uczestnictwo w spotkaniach z projektantami oraz Project Managerami w celu doprecyzowania wymagań technicznych projektów.",
      "Rozwój i optymalizacja stron internetowych z uwzględnieniem specyfiki SEO.",
      "Rozbudowa templatów WordPress przy użyciu PHP.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Freelancer",
    icon: mathwork,
    iconBg: "#161329",
    date: "Grudzień 2023 - Luty 2024",
    points: [
      "Projektowanie i tworzenie nowoczesnych  responsywnych stron internetowych.",
      "Tworzenie modułów kodu w React z użyciem Hooks i Redux, JavaScript oraz HTML, CSS  umożliwiających łatwą skalowalność projektów.",
      "Współpraca z programistami, analitykami i grafikami.",
    ],
  },
  {
    title: "Dźwięku na Planie Filmowym",
    company_name: "Dźwiękowe Pole Sp. z o. o.",
    icon: edunet,
    iconBg: "#161329",
    date: "Wrzesień 2020 - Maj 2024",
    points: [
      "2024 Przyjaciółki - Serial fabularny - Realizacja dźwięku",
      "2023 Skołowani - Film fabularny - Realizacja dźwięku",
        "2022 Stulecie Winnych - Serial fabularny - Realizacja dźwięku",
      "2022 Wotum Nieufności - Serial fabularny - Realizacja dźwięku",

      "2021 Bracia - Film fabularny - Współpraca dźwiękowa",



    ],
  },
];

export const projects = [
  {
    name: "YelpCamp!",
    description:
      "Fullstackowa aplikacja internetowa umożliwiająca użytkownikom wyszukiwanie, ocenianie i komentowanie pól kempingowych w USA.",
    tags: [
      { name: "Javascript", color: "yellow-text-gradient" },
      { name: "HTML", color: "yellow-text-gradient" },
      { name: "Bootstrap 5.3.0", color: "yellow-text-gradient" },
      { name: "RESTful API", color: "yellow-text-gradient" },
      { name: "MongoDB", color: "yellow-text-gradient" },
      { name: "Express.js", color: "yellow-text-gradient" },
      { name: "NodeJS", color: "yellow-text-gradient" },
      { name: "Moongose", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/karpovvicz/YamaFlow",
  },
  {
    name: "React gra kółko i krzyzyk",
    description:
      "To prosta, ale wciągająca gra Kółko i Krzyżyk stworzona przy użyciu React. Aplikacja umożliwia rozgrywkę dla dwóch graczy, dynamicznie aktualizuje planszę i ogłasza zwycięzcę lub remis na końcu gry. Zawiera również dziennik wszystkich ruchów oraz opcję ponownego uruchomienia gry.",
    tags: [
      { name: "React.js", color: "yellow-text-gradient" },
      { name: "HTML", color: "yellow-text-gradient" },
      { name: "css", color: "yellow-text-gradient" },
      { name: "Javascript", color: "yellow-text-gradient" },
    ],
    image: termpw,
    source_code_link: "https://github.com/karpovvicz/React-tic-tac-toe-game-",
  },
  {
    name: "Kalkulator Javascript bez użycia funkcji eval",
    description:
      "Ten projekt to prosta i estetyczna kalkulator stworzony przy użyciu HTML, CSS i JavaScript. Aplikacja umożliwia wykonywanie podstawowych operacji arytmetycznych, takich jak dodawanie, odejmowanie, mnożenie, dzielenie i inne.",
    tags: [
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "Calculation", color: "yellow-text-gradient" },
      { name: "No-framework JavaScript", color: "yellow-text-gradient" },
    ],
    image: mhft,
    source_code_link:
      "https://github.com/karpovvicz/JScalculator_without_eval",
  },
  {
    name: "Kalkulator inwestycyjny",
    description:
      "Kalkulator inwestycyjny zbudowany w React, wykorzystujący komponenty funkcyjne, useState do zarządzania stanem treści oraz props do płynnego przepływu danych. Projekt opiera się na nowoczesnych praktykach React, zapewniając czysty, modułowy i łatwy w utrzymaniu kod.",
    tags: [
      { name: "Inwestycje", color: "yellow-text-gradient" },
      { name: "JavaScript", color: "yellow-text-gradient" },
      { name: "React.js", color: "yellow-text-gradient" },
    ],
    image: payloadmaster,
    source_code_link: "https://github.com/karpovvicz/React-Investment-Calculator",
  },
  {
    name: "Konwerter Liczb dziesiętnych na język binarny",
    description:
      "Ta aplikacja konwertuje liczby dziesiętne na język binarny za pomocą rekurencji i wizualnie przedstawia procesu wykonywania stosu wywołań. Użytkownicy mogą wprowadzić liczbę dziesiętną, a aplikacja wyświetli jej odpowiednik binarny. Po wprowadzeniu np. liczby 5 animacja ilustruje działanie funkcji rekurencyjnej.",
    tags: [
      { name: "Javascript", color: "yellow-text-gradient" },
      { name: "Binary", color: "yellow-text-gradient" },
      { name: "Converter", color: "yellow-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/karpovvicz/Decimal-to-Binary-Converter",
  },
  {
    name: "Odtwarzacz muzyczny JavaScript",
    description:
      "Ta aplikacja JavaScript to odtwarzacz muzyki, który umożliwia użytkownikom odtwarzanie, pauzowanie, nawigację, losowe odtwarzanie oraz usuwanie utworów z playlisty. Interfejs użytkownika jest dynamicznie aktualizowany, a odtwarzanie utworów zarządzane za pomocą obiektu Audio w JavaScript.",
    tags: [
      { name: "Vanilla Javascript", color: "yellow-text-gradient" },
      { name: "Music", color: "yellow-text-gradient" },
      { name: "HTML", color: "yellow-text-gradient" },
    ],

    image: sketcher,
    source_code_link: "https://github.com/karpovvicz/web-music-player",
  },
];
