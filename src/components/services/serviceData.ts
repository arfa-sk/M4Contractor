export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: "power" | "protection" | "civil" | "telecom";
  tag: string;
  description: string;
  features: string[];
  imageUrl: string;
  icon: string;
  gridSpan: "spanHero" | "spanTall" | "spanWide" | "spanMedium" | "spanStandard" | "spanFull";
  metricBadge?: string;
  actionText?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "cathodic-protection",
    title: "Cathodic Protection Systems",
    subtitle: "Asset Integrity & Corrosion Control",
    category: "protection",
    tag: "Aramco Approved",
    description: "End-to-end design, installation, testing, commissioning, and maintenance of impressed current and sacrificial anode systems to safeguard vital industrial pipelines and buried metallic assets.",
    features: [
      "Impressed Current (ICCP) Systems",
      "Sacrificial Anode Installation",
      "Corrosion Monitoring & Surveys",
      "Deep & Shallow Anode Beds"
    ],
    imageUrl: "/quality system.png",
    icon: "shield_person",
    gridSpan: "spanHero",
    metricBadge: "99.9% Protection Efficiency",
    actionText: "Explore System Details"
  },
  {
    id: "overhead-power-lines",
    title: "LV & MV Overhead Power Lines",
    subtitle: "Electrical Infrastructure Grid",
    category: "power",
    tag: "High Voltage",
    description: "Turnkey construction of low and medium-voltage overhead distribution networks, including heavy steel pole structures, conductor stringing, transformer integration, and high-voltage testing.",
    features: [
      "LV / MV Grid Construction",
      "Steel Pole & Lattice Structures",
      "Conductor Stringing & Tensioning",
      "Substation Grid Interconnection"
    ],
    imageUrl: "/custruction.png",
    icon: "bolt",
    gridSpan: "spanTall",
    metricBadge: "Up to 33kV Rated",
    actionText: "View Grid Capabilities"
  },
  {
    id: "underground-power-lines",
    title: "Underground Power Line Infrastructure",
    subtitle: "Subsurface Cable Systems",
    category: "power",
    tag: "High Reliability",
    description: "Precision installation of subterranean power cabling networks featuring heavy-duty concrete duct banks, high-capacity cable pulling, splicing, termination, and high-pot testing.",
    features: [
      "Duct Bank & Trenching Works",
      "High-Voltage Cable Splicing",
      "Subsurface Vault Construction",
      "Hi-Pot & Insulation Testing"
    ],
    imageUrl: "/design and the structure of the company.png",
    icon: "electric_meter",
    gridSpan: "spanWide",
    metricBadge: "100% Weatherproof",
    actionText: "View Cable Projects"
  },
  {
    id: "electrical-instrumentation-works",
    title: "Electrical & Instrumentation Works",
    subtitle: "Controls & Power Systems",
    category: "power",
    tag: "Instrumentation & Controls",
    description: "Complete electrical and instrumentation solutions including cable installation, cable trays, panels, field instruments, control systems, testing, and commissioning.",
    features: [
      "Cable Installation & Routing",
      "Cable Trays & Panels",
      "Field Instruments & Controls",
      "System Testing & Commissioning"
    ],
    imageUrl: "/equipment supply.png",
    icon: "electrical_services",
    gridSpan: "spanMedium",
    metricBadge: "Full Turnkey Delivery",
    actionText: "View Instrumentation Systems"
  },
  {
    id: "fiber-optic-opgw",
    title: "Fiber Optic & OPGW Communications",
    subtitle: "Industrial Telecom Backbone",
    category: "telecom",
    tag: "Telecom & Data",
    description: "Deployment, fusion splicing, OTDR testing, and commissioning of Optical Ground Wire (OPGW) and underground fiber optic networks for critical industrial automation and utility control.",
    features: [
      "OPGW Aerial Installation",
      "Underground Fiber Optics",
      "Precision Fusion Splicing",
      "OTDR Trace Certification"
    ],
    imageUrl: "/our services page 1.png",
    icon: "settings_ethernet",
    gridSpan: "spanMedium",
    metricBadge: "Low Attenuation",
    actionText: "View Network Specs"
  },
  {
    id: "well-pad-fencing",
    title: "HCIS Security & Well Pad Fencing",
    subtitle: "Perimeter Protection Systems",
    category: "civil",
    tag: "HCIS Compliant",
    description: "Full supply and erection of High Commission for Industrial Security (HCIS) compliant security fencing, automated gates, and anti-crash barriers for vital energy well pads and industrial plants.",
    features: [
      "HCIS Class I, II, III Fencing",
      "Anti-Ram Vehicle Barriers",
      "Automated Security Gates",
      "Perimeter Intrusion Detection"
    ],
    imageUrl: "/our services page 2 .png",
    icon: "fence",
    gridSpan: "spanStandard",
    metricBadge: "Class I Security Rated",
    actionText: "View Security Solutions"
  },
  {
    id: "site-preparation-earthworks",
    title: "Industrial Site Preparation & Earthworks",
    subtitle: "Heavy Civil Groundwork",
    category: "civil",
    tag: "Heavy Equipment",
    description: "Comprehensive site clearing, precision laser grading, bulk earthmoving, subgrade compaction, and access road construction for mega-scale industrial plant foundations.",
    features: [
      "Bulk Earthmoving & Leveling",
      "Soil Compaction & Stabilization",
      "Industrial Access Roads",
      "Drainage & Runoff Control"
    ],
    imageUrl: "/construct.jpg",
    icon: "handyman",
    gridSpan: "spanStandard",
    metricBadge: "ISO 9001 Certified",
    actionText: "View Civil Capabilities"
  },
  {
    id: "pipeline-maintenance-repair",
    title: "Pipeline Maintenance & Coating Repairs",
    subtitle: "Lifetime Asset Protection",
    category: "protection",
    tag: "Preventive Integrity",
    description: "Preventive and emergency corrective maintenance, anti-corrosion coating rehabilitation, ROW inspection, and structural integrity repairs for oil, gas, and water transmission lines.",
    features: [
      "Coating & Wrap Rehabilitation",
      "Pipeline Sleeve Repairs",
      "ROW Inspection Support",
      "Hydrostatic Testing Support"
    ],
    imageUrl: "/maintanice .png",
    icon: "engineering",
    gridSpan: "spanFull",
    metricBadge: "24/7 Rapid Response",
    actionText: "View Maintenance Services"
  }
];
