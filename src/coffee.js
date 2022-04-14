import AynuImage from "./assets/aynu.png";
import BezaImage from "./assets/beza.png";
import DestaImage from "./assets/desta.png";
import KaffaImage from "./assets/kaffa.png";
import LomiImage from "./assets/lomi.png";
import MazaaImage from "./assets/mazaa.png";
import NehiImage from "./assets/nehi.png";
import SabaImage from "./assets/saba.png";
import WorkeImage from "./assets/worke.png";
import ZalaImage from "./assets/zala.png";
import ZenuImage from "./assets/zenu.png";

const coffee = [
  {
    name: "Aynu",
    profile: "clean",
    acidity: "round",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: AynuImage,
    characteristics: ["rounded", "fruit acidity", "nut aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: [
      "espresso",
      "americano",
      "french press",
      "filter drip",
      "mokapot",
      "flat white",
    ],
    origin: [
      {
        name: "Limu",
        latitude: 9.16702,
        longitude: 36.34015,
        altitudeMin: 1750,
        altitudeMax: 1950,
      },
      {
        name: "Limu Kosa",
        latitude: 8.16638,
        longitude: 37.17096,
        altitudeMin: 1750,
        altitudeMax: 1950,
      },
    ],
    qGrade: 88,
  },
  {
    name: "Beza",
    profile: "rich",
    acidity: "sweet",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: BezaImage,
    characteristics: ["intense sweetness", "spicy", "forest berry"],
    processing: ["sundried"],
    roastLevels: ["dark", "light"],
    preparation: ["aeropress", "chemex and hario v60"],
    origin: [
      {
        name: "Yirgachefe",
        latitude: 6.16272,
        longitude: 38.20583,
        altitudeMin: 1900,
        altitudeMax: 2100,
      },
      {
        name: "Yirga Chefe",
        latitude: 6.16272,
        longitude: 38.20583,
        altitudeMin: 1700,
        altitudeMax: 1950,
      },
    ],
    qGrade: 92,
  },
  {
    name: "Desta",
    profile: "rich",
    acidity: "sweet",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: DestaImage,
    characteristics: ["intense sweetness", "floral", "nougat aroma"],
    processing: ["washed", "sundried"],
    roastLevels: ["dark"],
    preparation: [
      "espresso",
      "cafe latte",
      "cappuccino",
      "cortado",
      "flat white",
    ],
    origin: [
      {
        name: "Aroresa",
        latitude: 6.33485,
        longitude: 39.00473,
        altitudeMin: 1700,
        altitudeMax: 1950,
      },
      {
        name: "Jimma Agaro",
        latitude: 7.85108,
        longitude: 36.58889,
        altitudeMin: 1650,
        altitudeMax: 1950,
      },
    ],
    qGrade: 87,
  },
  {
    name: "Kaffa",
    profile: "rich",
    acidity: "round",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: KaffaImage,
    characteristics: ["forest berry", "delicate sweetness", "chocolate aroma"],
    processing: ["sundried"],
    roastLevels: ["dark", "medium", "light"],
    preparation: ["filter drip", "chemex and hario v60"],
    origin: [
      {
        name: "Kaffa",
        latitude: 7.31034,
        longitude: 35.96491,
        altitudeMin: 1400,
        altitudeMax: 2100,
      },
      {
        name: "Gimbo Kimbo",
        latitude: 7.34604,
        longitude: 36.22318,
        altitudeMin: 2100,
        altitudeMax: 1400,
      },
    ],
    qGrade: 89,
  },
  {
    name: "Lomi",
    profile: "clean",
    acidity: "round",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: LomiImage,
    characteristics: ["sweet", "fruity", "citrus aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: ["filter drip", "french press"],
    origin: [
      {
        name: "Sidama",
        latitude: 7.03507,
        longitude: 38.47632,
        altitudeMin: 2759,
        altitudeMax: 2829,
      },
      {
        name: "Wendo",
        latitude: 6.60314,
        longitude: 38.41938,
        altitudeMin: 1800,
        altitudeMax: 2000,
      },
    ],
    qGrade: 88,
  },
  {
    name: "Mazaa",
    profile: "rich",
    acidity: "sweet",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: MazaaImage,
    characteristics: ["honey", "sweet", "spicy"],
    processing: ["sundried"],
    roastLevels: ["dark", "medium", "light"],
    preparation: ["filer drip", "french press"],
    origin: [
      {
        name: "Guji",
        latitude: 9.00382,
        longitude: 35.50255,
        altitudeMin: 2000,
        altitudeMax: 1900,
      },
      {
        name: "Oromia",
        latitude: 7.546,
        longitude: 40.6347,
        altitudeMin: 2350,
        altitudeMax: 1500,
      },
    ],
    qGrade: 87,
  },
  {
    name: "Nehi",
    profile: "clean",
    acidity: "sweet",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: NehiImage,
    characteristics: ["sweet", "fruity", "chocolate aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: [
      "aeropress",
      "chemex and hario v60",
      "cafe latte",
      "cappuccino",
      "cortado",
      "flat white",
    ],
    origin: [
      {
        name: "Sidama",
        latitude: 7.03507,
        longitude: 38.47632,
        altitudeMin: 2759,
        altitudeMax: 2829,
      },
      {
        name: "Aroresa",
        latitude: 6.33485,
        longitude: 39.00473,
        altitudeMin: 1700,
        altitudeMax: 1950,
      },
    ],
    qGrade: 87,
  },
  {
    name: "Saba",
    profile: "clean",
    acidity: "acidic",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: SabaImage,
    characteristics: ["slightly acidic", "floral", "citrus aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: ["espresso"],
    origin: [
      {
        name: "Yirgachefe",
        latitude: 6.16272,
        longitude: 38.20583,
        altitudeMin: 1900,
        altitudeMax: 2100,
      },
      {
        name: "Aroma",
        latitude: 11.59985,
        longitude: 37.37529,
        altitudeMin: 1800,
        altitudeMax: 2000,
      },
    ],
    qGrade: 88,
  },
  {
    name: "Worke",
    profile: "clean",
    acidity: "acidic",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: WorkeImage,
    characteristics: ["slightly acidic", "floral", "citrus aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: [
      "espresso",
      "americano",
      "mokapot",
      "aeropress",
      "chemex and hario v60",
    ],
    origin: [
      {
        name: "Yirgachefe",
        latitude: 6.16272,
        longitude: 38.20583,
        altitudeMin: 1900,
        altitudeMax: 2100,
      },
      {
        name: "Aroma",
        latitude: 11.59985,
        longitude: 37.37529,
        altitudeMin: 1800,
        altitudeMax: 2000,
      },
    ],
    qGrade: 88,
  },
  {
    name: "Zala",
    profile: "clean",
    acidity: "sweet",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: ZalaImage,
    characteristics: ["fresh citrus", "floral", "fruity aroma"],
    processing: ["washed"],
    roastLevels: ["dark", "medium", "light"],
    preparation: ["french press", "filter drip"],
    origin: [
      {
        name: "Guji",
        latitude: 9.00382,
        longitude: 35.50255,
        altitudeMin: 2000,
        altitudeMax: 1900,
      },
      {
        name: "Oromia",
        latitude: 7.546,
        longitude: 40.6347,
        altitudeMin: 1500,
        altitudeMax: 2350,
      },
    ],
    qGrade: 87,
  },
  {
    name: "Zenu",
    profile: "rich",
    acidity: "acidic",
    url: "https://impactroasters.dk/pages/about-coffe-coffee-guide",
    image: ZenuImage,
    characteristics: ["slightly acidic", "floral", "nougat aroma"],
    processing: ["sundried"],
    roastLevels: ["dark"],
    preparation: ["cafe latte", "cappuccino", "cortado", "flat white"],
    origin: [
      {
        name: "Jimma ",
        latitude: 7.6751,
        longitude: 36.83514,
        altitudeMin: 1650,
        altitudeMax: 1950,
      },
      {
        name: "Jimma Agaro",
        latitude: 7.85108,
        longitude: 36.58889,
        altitudeMin: 1700,
        altitudeMax: 1950,
      },
    ],
    qGrade: 82,
  },
];

export default coffee;
