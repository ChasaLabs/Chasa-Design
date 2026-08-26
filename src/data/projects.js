import hillviewImage from "../assets/PC_1.jpeg";
import hillviewRender1 from "../assets/HVM-RNDR1.png";
import hillviewRender2 from "../assets/HVM-RNDR2.png";
import hillviewRender3 from "../assets/HVM-RNDR3.png";
import travelLodgeImage from "../assets/TL_1.jpeg";
import travelLodgeImage2 from "../assets/TL2.png";
import travelLodgeImage3 from "../assets/TL3.png";
import kapsabetImage from "../assets/KRH_1.jpeg";
import kapsabetRender1 from "../assets/KRH-RNDR1.png";
import kapsabetRender2 from "../assets/KRH-RNDR2.png";
import motswediRender1 from "../assets/MTDI_RNDR1.png";
import motswediRender2 from "../assets/MTDI_RNDR2.png";
import motswediRender3 from "../assets/MTDI-RNDR3.png";
import dinalediImage from "../assets/DSC_1.jpeg";
import dinalediImage2 from "../assets/DNDI-2.png";
import dinalediImage3 from "../assets/DNDI-3.png";
import villageGateImage from "../assets/VGM_01.jpeg";
import villageGateRender1 from "../assets/VG-RNDR1.png";
import villageGateRender2 from "../assets/VG-RNDR2.png";
import truckstopImage from "../assets/TruckStop.png";
import kalahariArmsImage from "../assets/Hotel.png";
import kalahariArmsGatheringImage from "../assets/Gathering_Accordion.png";
import crcChurchImage from "../assets/CRC.jpeg";
import crcChurchRender1 from "../assets/CRC-RNDR1.jpg";
import crcChurchRender2 from "../assets/CRC-RNDR2.png";

export const projectFilters = [
  "All",
  "Retail / Mixed Use",
  "Hospitality",
  "Healthcare",
  "Sports / Community",
  "Infrastructure",
  "Worship / Gathering",
];

export const projects = [
  {
    id: "hillview-mall",
    title: "Hillview Mall",
    // TODO: Confirm whether the final location wording should be Gaborone or Mogoditshane.
    location: "Gaborone, Botswana",
    category: "Retail / Mixed-use",
    filter: "Retail / Mixed Use",
    image: hillviewImage,
    images: [hillviewImage, hillviewRender1, hillviewRender2, hillviewRender3],
    imageFits: ["cover", "cover", "cover", "cover"],
    objectPosition: "center 60%",
    metadata: "Architecture / Planning / Delivery",
    description:
      "A commercial environment shaped around visibility, movement, and everyday public life. The design balances retail frontage, circulation, and arrival experience to create a clear and active destination within the city.",
  },
  {
    id: "travel-lodge",
    title: "Travel Lodge",
    location: "Gaborone, Botswana",
    category: "Hospitality",
    filter: "Hospitality",
    image: travelLodgeImage,
    images: [travelLodgeImage, travelLodgeImage2, travelLodgeImage3],
    imageFits: ["cover", "cover", "cover"],
    objectPosition: "center",
    metadata: "Architecture / Hospitality Planning / Delivery",
    description:
      "A hospitality project focused on arrival, comfort, and spatial clarity. The architecture supports guest experience through welcoming thresholds, efficient planning, and a calm relationship between public and private spaces.",
  },
  {
    id: "kapsabet-referral-hospital",
    title: "Kapsabet Referral Hospital",
    location: "Kapsabet, Kenya",
    category: "Healthcare",
    filter: "Healthcare",
    image: kapsabetImage,
    images: [kapsabetImage, kapsabetRender1, kapsabetRender2],
    imageFits: ["cover", "contain", "contain"],
    objectPosition: "center",
    metadata: "Healthcare Planning / Coordination / Delivery",
    description:
      "A healthcare environment planned around dignity, access, and clear movement. The project emphasizes legible circulation, functional coordination, and spaces that support both care delivery and patient experience.",
  },
  {
    id: "motswedi-clinic",
    title: "Motswedi Clinic",
    location: "Motswedi, South Africa",
    category: "Healthcare",
    filter: "Healthcare",
    image: motswediRender1,
    images: [motswediRender1, motswediRender2, motswediRender3],
    imageFits: ["cover", "cover", "cover"],
    objectPosition: "center",
    featuredOnHome: false,
    description:
      "A community healthcare facility shaped around accessibility, clear patient movement, and calm clinical environments. The design supports efficient care delivery while maintaining a welcoming scale and a strong connection to its local context.",
  },
  {
    id: "dinaledi-sports-centre",
    title: "Dinaledi Sports Centre",
    location: "Gaborone, Botswana",
    category: "Sports / Community",
    filter: "Sports / Community",
    image: dinalediImage,
    images: [dinalediImage, dinalediImage2, dinalediImage3],
    imageFits: ["contain", "contain", "contain"],
    objectPosition: "center",
    metadata: "Sports Planning / Community / Delivery",
    description:
      "A sports and training environment designed for movement, endurance, and collective activity. The project brings together robust planning, open spatial organization, and a strong sense of community use.",
  },
  {
    id: "village-gate-mall",
    title: "Village Gate Mall",
    location: "Molepolole, Botswana",
    category: "Retail / Commercial",
    filter: "Retail / Mixed Use",
    image: villageGateImage,
    // TODO: Confirm legacy renders labelled "Molepolole Mall" belong in the final Village Gate archive.
    images: [villageGateImage, villageGateRender1, villageGateRender2],
    imageFits: ["cover", "contain", "contain"],
    objectPosition: "center",
    metadata: "Retail Planning / Commercial / Delivery",
    description:
      "A local commercial node designed to support shopping, gathering, and daily exchange. The architecture frames public edges, circulation, and tenant flexibility within a clear and accessible retail environment.",
  },
  {
    id: "tswana-fuel-truckstop",
    title: "Tswana Fuel Truckstop",
    location: "Gaborone, Botswana",
    category: "Service / Infrastructure",
    filter: "Infrastructure",
    // TODO: Replace the existing unbranded repository visual with verified project photography if available.
    image: truckstopImage,
    images: [truckstopImage],
    imageFits: ["cover"],
    objectPosition: "center",
    metadata: "Infrastructure / Movement / Delivery",
    description:
      "A service-focused project shaped around logistics, safety, and efficient movement. The design organizes vehicle flow, customer access, and supporting facilities into a functional roadside destination.",
  },
  {
    id: "kalahari-arms-hotel",
    title: "Kalahari Arms Hotel",
    location: "Ghanzi, Botswana",
    category: "Hospitality",
    filter: "Hospitality",
    image: kalahariArmsImage,
    // TODO: Confirm the generic gathering render is part of the Kalahari Arms Hotel image set.
    images: [kalahariArmsImage, kalahariArmsGatheringImage],
    imageFits: ["cover", "cover"],
    objectPosition: "center",
    metadata: "Hospitality / Identity / Delivery",
    description:
      "A hospitality project that strengthens arrival, identity, and guest experience. The architecture uses frontage, lighting, and spatial sequencing to create a memorable threshold within the Kalahari context.",
  },
  {
    id: "crc-church",
    title: "CRC Church",
    location: "Gaborone, Botswana",
    category: "Worship / Gathering",
    filter: "Worship / Gathering",
    image: crcChurchImage,
    images: [crcChurchImage, crcChurchRender1, crcChurchRender2],
    imageFits: ["cover", "contain", "cover"],
    objectPosition: "center",
    metadata: "Assembly / Community / Delivery",
    description:
      "A contemporary gathering space designed around assembly, light, and shared experience. The project emphasizes scale, openness, and clear thresholds to support worship, community, and collective presence.",
  },
].map((project, index) => ({
  ...project,
  number: String(index + 1).padStart(2, "0"),
}));

export function getProject(projectId) {
  return projects.find((project) => project.id === projectId);
}

export function getNextProject(projectId) {
  const currentIndex = projects.findIndex((project) => project.id === projectId);
  if (currentIndex < 0) return projects[0];
  return projects[(currentIndex + 1) % projects.length];
}
