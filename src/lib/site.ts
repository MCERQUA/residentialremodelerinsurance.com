// Centralized site data — used across nav, footer, schema, CTAs
// Residential Remodeler Insurance — insurance for home remodeling contractors

export const SITE = {
  name: "Residential Remodeler Insurance",
  legalName: "Residential Remodeler Insurance (by Contractors Choice Agency)",
  domain: "residentialremodelerinsurance.com",
  url: "https://residentialremodelerinsurance.com",
  tagline: "Insurance for Home Remodeling Contractors",
  description:
    "Specialized commercial insurance for residential remodeling contractors — general liability with completed operations, workers' compensation for remodeling crews, commercial auto, tools and equipment, completed-operations for kitchens/baths/additions, commercial umbrella, and contractors pollution liability for lead and asbestos. Licensed all 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Remodeler",
  brandSub: "Insurance",
  nicheShort: "residential remodeler",
  nicheShortCap: "Residential Remodeler",
  nichePlural: "residential remodelers",
  nichePluralCap: "Residential Remodelers",
  operator: "remodeling operation",
  operatorCap: "Remodeling Operation",
  industry: "residential remodeling",
  industryCap: "Residential Remodeling",
  audience: "home remodeling contractors",
  audienceCap: "Home Remodeling Contractors",
  ownerTitle: "remodeling contractor",
  regionPill: "Texas · California · National",
  serviceSuffix: "Residential Remodelers",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability Insurance",
    short: "GL with completed operations for remodelers",
    description:
      "The foundation of every remodeling contractor's program. Covers third-party bodily injury and property damage during remodeling operations — and the completed-operations tail covering latent defect and water-intrusion claims that arise after kitchens, bathrooms, and additions are completed.",
    icon: "ShieldCheck",
    keywords: ["residential remodeler general liability", "home remodeling contractor GL", "remodeling completed operations", "residential contractor liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For remodeling crews and trade workers",
    description:
      "Residential remodeling involves real injury risk — falls from heights during addition framing, tool injuries, and lifting exposures. We place workers' comp with carriers that understand remodeling operations and assign correct class codes for remodeling labor.",
    icon: "HardHat",
    keywords: ["remodeling workers compensation", "home remodeler workers comp", "remodeling crew injury insurance", "residential contractor workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto Insurance",
    short: "Work trucks, vans, and trailers for remodeling crews",
    description:
      "Coverage for the trucks, vans, and trailers your remodeling crews drive to every job — including hired and non-owned auto when employees use personal vehicles for remodeling business.",
    icon: "Truck",
    keywords: ["remodeling contractor auto insurance", "home remodeler truck coverage", "remodeling vehicle insurance", "residential contractor commercial auto"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment Coverage",
    short: "Power tools, saws, and remodeling equipment",
    description:
      "Inland marine coverage for power tools, table saws, tile saws, nail guns, compressors, and remodeling equipment your crews carry to every job. Covers theft, accidental damage, and mysterious disappearance at job sites, in transit, and in storage.",
    icon: "Wrench",
    keywords: ["remodeling tools equipment insurance", "home remodeler tools coverage", "remodeling equipment theft", "contractor inland marine remodeling"],
  },
  {
    slug: "completed-operations",
    title: "Completed-Operations Coverage",
    short: "Long-tail liability for kitchen, bath, and addition work",
    description:
      "Completed-operations coverage extends your GL protection to cover claims arising after a remodeling project is done — water intrusion from improperly installed showers, structural defects in additions, and other latent defects that surface months or years after project completion.",
    icon: "Award",
    keywords: ["remodeling completed operations", "home remodeling latent defect coverage", "contractor completed operations insurance", "remodeler long-tail liability"],
  },
  {
    slug: "commercial-umbrella",
    title: "Commercial Umbrella Insurance",
    short: "Excess limits above GL and auto",
    description:
      "An umbrella extends your GL and auto limits for remodeling contractors who work on high-value homes, engage with general contractors who require higher combined limits, or face significant completed-operations accumulation across many projects.",
    icon: "Umbrella",
    keywords: ["remodeling contractor umbrella", "home remodeler excess liability", "residential remodeling umbrella policy", "contractor umbrella insurance"],
  },
  {
    slug: "commercial-property",
    title: "Commercial Property Insurance",
    short: "Office, shop, and material storage",
    description:
      "Covers your office, shop, and storage yard — including inventory of materials, cabinetry, fixtures, and equipment. Important for remodelers who stage significant materials at their location between projects.",
    icon: "Building2",
    keywords: ["remodeling contractor property insurance", "home remodeler office coverage", "remodeling business property", "residential contractor property"],
  },
  {
    slug: "contractors-pollution-liability",
    title: "Contractors Pollution Liability",
    short: "Lead, asbestos, and mold exposure",
    description:
      "Residential remodeling in older homes creates real pollution exposure — lead paint disturbance, asbestos in drywall or floor tiles, and mold remediation. CPL covers third-party bodily injury and property damage from these pollutant releases during remodeling work.",
    icon: "Droplets",
    keywords: ["remodeling CPL", "lead paint contractor insurance", "asbestos remodeling liability", "residential remodeler pollution coverage"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas", name: "Texas", region: "Dallas · Houston · Austin", blurb: "Texas's booming residential market drives high remodeling volume — kitchen updates, master suite additions, and full home renovations. We build insurance programs for Texas remodeling contractors from solo operators to multi-crew firms." },
  { slug: "california", name: "California", region: "LA · Bay Area · San Diego", blurb: "California's high-value residential market creates significant remodeling contractor liability exposure. We insure California remodelers with programs that address the state's strict contractor licensing requirements and high-value project exposure." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · NC · SC", blurb: "Southeast residential remodeling contractors handle storm restoration additions, high-humidity bathroom renovations, and the diverse project mix of a growing region. We build programs for SE remodelers across the full residential scope." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN", blurb: "Midwest remodeling contractors work through renovation seasons with varied project types — basements, kitchens, additions, and full gut renovations. We place programs for residential remodelers across the Midwest." },
  { slug: "southwest", name: "Southwest", region: "AZ · NV · NM · CO", blurb: "Southwest remodeling contractors handle high-desert home renovations and additions in fast-growing markets. We insure residential remodelers across Arizona, Nevada, New Mexico, and Colorado." },
  { slug: "mountain-west", name: "Mountain West", region: "CO · UT · ID · MT", blurb: "Mountain-region residential remodelers work on high-value vacation homes and primary residences with unique structural and material challenges. We build programs for remodelers across the Mountain West." },
  { slug: "northeast", name: "Northeast", region: "NY · NJ · CT · MA", blurb: "Northeast remodeling contractors work on some of the highest-value residential projects in the country — urban brownstone renovations, historic home restorations, and high-end addition work. We place comprehensive programs for Northeast remodelers." },
  { slug: "pacific-west", name: "Pacific West", region: "CA · OR · WA", blurb: "Pacific-region residential remodelers navigate California's strict licensing landscape and high-value project exposure. We insure home remodeling contractors across the West Coast with markets that understand the regional risk environment." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Remodeling-knowledgeable agents", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "2-hour claims response", icon: "Zap" },
  { label: "A.M. Best A+ carrier partners", icon: "Award" },
] as const;

export const STATS = [
  { value: 350, suffix: "+", label: "Residential remodelers insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring trade contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "We did a bathroom renovation and 18 months later the homeowner claimed water intrusion from the shower pan. The completed-ops coverage on our GL defended the claim and paid — no fight, no gap. This agency builds programs with the tail that actually matters for remodelers.", name: "Sandra M.", role: "Remodeling Contractor", location: "Texas" },
  { quote: "We were working on a 1960s kitchen gut and disturbed some asbestos floor tile. The CPL policy covered the cleanup and the third-party claim from the neighbor who claimed exposure. I didn't even know remodelers needed CPL until this agency explained the risk.", name: "Tom B.", role: "Kitchen & Bath Remodeler", location: "Ohio" },
  { quote: "My power tool trailer was broken into at a job site over the weekend — table saw, compressors, tile saw, the works. The inland marine paid out fast and I was back running the next Monday. Other agents never even mentioned tools coverage. This team knows what remodelers actually need.", name: "Jessica R.", role: "Home Renovation Contractor", location: "Florida" },
] as const;
