
export interface Project {
  readonly id: string;
  readonly title: string;
  readonly category: string;
  readonly status: 'Completed' | 'Under Construction' | 'Pipeline' | 'Early Implementation' | 'Under Development' | 'Planning';
  readonly budget: string;
  readonly year: string;
  readonly description: string;
  readonly technicalSpecs: Readonly<Record<string, string>>;
  readonly financialFramework: readonly {
    readonly source: string;
    readonly amount: string;
    readonly instrument: string;
  }[];
  readonly vision2030Pillars: readonly string[];
  readonly stakeholders: readonly {
    readonly level: string;
    readonly entity: string;
    readonly role: string;
  }[];
  readonly imagePlaceholder: string;
}

export const projectsData = {
  categories: [
    { id: 'transport', label: 'Sustainable Transport', icon: 'Train' },
    { id: 'energy', label: 'Energy & Efficiency', icon: 'Zap' },
    { id: 'water', label: 'Water & Environment', icon: 'Droplets' },
    { id: 'climate', label: 'Climate Resilience', icon: 'CloudRain' },
    { id: 'industrial', label: 'Industrial Hub', icon: 'Factory' },
  ],
  projects: [
    {
      id: 'raml-tram',
      title: 'Alexandria Raml Tram Modernization',
      category: 'transport',
      status: 'Under Construction',
      budget: '€592 Million',
      year: '2026-2027',
      description: 'The Alexandria Raml Tram Modernization Project transforms the world’s oldest continuously operating electric tram system (1863) into a digitally controlled light rail transit (LRT) system. The 13.2-kilometer corridor with 24 stations—from Victoria Station through Raml Station to Manshya Square—constitutes Alexandria’s most iconic transport infrastructure.',
      technicalSpecs: {
        'Operating Speed': '21 km/h (up from 11 km/h)',
        'Journey Time': '30–35 minutes (down from 60 mins)',
        'Daily Capacity': '500,000 passengers',
        'Headway': '3 minutes peak',
        'Rolling Stock': '30 Hyundai Rotem LRT vehicles'
      },
      financialFramework: [
        { source: 'EIB', amount: '€138M', instrument: 'Senior sovereign loan' },
        { source: 'AFD', amount: '€100M', instrument: 'Concessional loan' },
        { source: 'EU', amount: '€8M', instrument: 'Grant (NDICI)' },
        { source: 'Gov. of Egypt', amount: '€346M', instrument: 'Counterpart funds' }
      ],
      vision2030Pillars: ['Sustainable Transport', 'Environmental Sustainability', 'Cultural Heritage'],
      stakeholders: [
        { level: 'National', entity: 'Ministry of Transport', role: 'Policy oversight' },
        { level: 'Implementing', entity: 'NAT', role: 'Procurement & management' },
        { level: 'Contractor', entity: 'Hitachi Rail', role: 'Signaling & systems' },
        { level: 'Contractor', entity: 'Hassan Allam / Arab Contractors', role: 'Civil works' }
      ],
      imagePlaceholder: 'Modernized Raml Tram Concept'
    },
    {
      id: 'abu-qir-metro',
      title: 'Alexandria Abu Qir Metro Project (Phase 1)',
      category: 'transport',
      status: 'Under Construction',
      budget: '€1.76 Billion',
      year: '2025-2028',
      description: 'Transforms an underutilized suburban railway into a high-capacity metro system. This 21.7-kilometer corridor from Misr Station to Abou Qir serves dense residential neighborhoods, industrial zones, and tourism destinations.',
      technicalSpecs: {
        'Stations': '20 (15 upgraded existing, 5 new)',
        'Design Capacity': '60,000 passengers/hour/direction',
        'Operating Speed': '80 km/h',
        'Journey Time': '25 minutes (50% reduction)',
        'Elevation': '14 elevated stations, 6 at-grade'
      },
      financialFramework: [
        { source: 'EBRD', amount: '€250M', instrument: 'Board-approved loan' },
        { source: 'EIB / AFD / AIIB', amount: 'Main Financing', instrument: 'Co-financing package' },
        { source: 'Gov. of Egypt', amount: 'Counterpart', instrument: 'Sovereign contribution' }
      ],
      vision2030Pillars: ['Sustainable Transport', 'Urban Development', 'Energy', 'Economic Competitiveness'],
      stakeholders: [
        { level: 'National', entity: 'Ministry of Transport', role: 'Strategic direction' },
        { level: 'Implementing', entity: 'NAT', role: 'Contract management' },
        { level: 'Contractor', entity: 'Orascom / Colas Rail', role: 'EPC delivery' }
      ],
      imagePlaceholder: 'Abu Qir Metro Viaduct & Station'
    },
    {
      id: 'electric-buses',
      title: 'Alexandria Green Transport Initiative (Electric Buses)',
      category: 'transport',
      status: 'Under Development',
      budget: '~€10 Million',
      year: '2023-2026',
      description: 'Egypt’s first operational municipal electric bus deployment. A phased pilot-to-scale program with high-visibility operations along the Corniche Road.',
      technicalSpecs: {
        'Fleet Goal': '40 electric buses (Phase 2)',
        'Passenger Capacity': '90 passengers per bus',
        'Range': '250 km (210 km with A/C)',
        'Charging': '3-4 hours overnight depot charging'
      },
      financialFramework: [
        { source: 'Private Sector', amount: 'Total Capex', instrument: 'Public-Private Partnership' },
        { source: 'PTA', amount: 'OpEx', instrument: 'Service payments' }
      ],
      vision2030Pillars: ['Clean Energy Transition', 'Technology Demonstration', 'Industrial Development'],
      stakeholders: [
        { level: 'Local', entity: 'Alexandria Governorate', role: 'Policy leadership' },
        { level: 'Operator', entity: 'Public Transport Authority', role: 'Service planning' },
        { level: 'Supplier', entity: 'BYD', role: 'Vehicle supply' }
      ],
      imagePlaceholder: 'Electric Bus on Alexandria Corniche'
    },
    {
      id: 'regional-control-center',
      title: 'Regional Control Center (RCC) Modernization',
      category: 'energy',
      status: 'Under Construction',
      budget: '€60 Million',
      year: '2015-2026',
      description: 'Critical enabling infrastructure for Egypt’s electricity sector transformation. Enhancing operational efficiency and enabling renewable energy integration for 9 million inhabitants.',
      technicalSpecs: {
        'Loss Reduction': '10% reduction in technical losses',
        'Software': 'Advanced Distribution Management System (ADMS)',
        'Scope': 'Grid optimization & renewable forecasting'
      },
      financialFramework: [
        { source: 'EU', amount: '€10M', instrument: 'Grant (Global Gateway)' },
        { source: 'AFD', amount: '€40M', instrument: 'Loan financing' },
        { source: 'Gov. of Egypt', amount: 'Counterpart', instrument: 'Implementation support' }
      ],
      vision2030Pillars: ['Energy Security', 'Renewable Energy Integration', 'Economic Efficiency'],
      stakeholders: [
        { level: 'National', entity: 'Ministry of Electricity', role: 'Policy alignment' },
        { level: 'Local', entity: 'Alex Distribution Co.', role: 'Owner / Operator' }
      ],
      imagePlaceholder: 'Smart Grid Control Room'
    },
    {
      id: 'solar-water-treatment',
      title: 'Scaling Up Solar for Water Treatment Plants',
      category: 'energy',
      status: 'Under Development',
      budget: '€33 Million',
      year: '2025-2030',
      description: 'Large-scale photovoltaic installations dedicated to water treatment plant electricity supply. Targets four major plants (Manshia 2, Alseyouf, Maamoura, Nozha).',
      technicalSpecs: {
        'Energy Target': '106,000 MWh annual production',
        'GHG Reduction': '44,200 tonnes CO2e annually',
        'Configuration': 'Ground-mounted/rooftop PV with grid integration'
      },
      financialFramework: [
        { source: 'EBRD / EU', amount: '€33M', instrument: 'GCAP Phased Funding' }
      ],
      vision2030Pillars: ['Renewable Energy Expansion (42% Target)', 'Sectoral Decarbonization'],
      stakeholders: [
        { level: 'Utility', entity: 'Alexandria Water Company (AWCO)', role: 'Demand specification' },
        { level: 'National', entity: 'NREA', role: 'Technical standards' }
      ],
      imagePlaceholder: 'Solar Farm at Water Treatment Facility'
    },
    {
      id: 'sludge-to-energy',
      title: 'Sludge-to-Energy Facility (E1)',
      category: 'water',
      status: 'Early Implementation',
      budget: '€30 Million',
      year: '2025-2030',
      description: 'Addresses the environmental challenge of sewage sludge by converting 200 tons of daily waste into biogas and electricity, reducing landfill dependency.',
      technicalSpecs: {
        'Biogas production': '18,500 cubic meters daily',
        'Electricity': '5 MWh daily (50% of plant needs)',
        'Sludge Reduction': '30–35% volume reduction'
      },
      financialFramework: [
        { source: 'EBRD / Gov.', amount: '€30M', instrument: 'Resource recovery funding' }
      ],
      vision2030Pillars: ['Circular Economy', 'Sustainable Waste Management', 'Climate Action'],
      stakeholders: [
        { level: 'Implementing', entity: 'CAPW', role: 'Construction management' },
        { level: 'Utility', entity: 'AWCO', role: 'Facility owner & operator' }
      ],
      imagePlaceholder: 'Waste-to-Energy Digester System'
    },
    {
      id: 'sustainable-drainage',
      title: 'Sustainable Drainage Systems (SuDS)',
      category: 'climate',
      status: 'Under Development',
      budget: '€35 Million',
      year: '2025-2028',
      description: 'Green infrastructure implementation (permeable surfaces, bioswales, retention ponds) in city hotspots with recurrent flooding.',
      technicalSpecs: {
        'Approach': 'Nature-based coastal protection',
        'Target': 'Flood risk reduction & groundwater recharge',
        'Co-benefits': 'Urban heat island mitigation & biodiversity'
      },
      financialFramework: [
        { source: 'GCAP Pipeline', amount: '€35M', instrument: 'Short-term priority action' }
      ],
      vision2030Pillars: ['Environmental Sustainability', 'Climate Action', 'Urban Resilience'],
      stakeholders: [
        { level: 'Local', entity: 'Alexandria Governorate', role: 'Planning lead' }
      ],
      imagePlaceholder: 'Modern Urban Bioswale / Green Drainage'
    },
    {
      id: 'alstom-complex',
      title: 'Alstom Industrial Complex - Borg El Arab',
      category: 'industrial',
      status: 'Under Construction',
      budget: 'Strategic Investment',
      year: '2025-Beyond',
      description: 'A 40-feddan industrial complex dedicated to the localization of railway manufacturing, including LRT vehicles and signaling systems.',
      technicalSpecs: {
        'Area': '40 Feddans (16.8 hectares)',
        'Scope': 'LRT, monorail trains, and high-speed components',
        'Employment': 'Significant local high-tech job creation'
      },
      financialFramework: [
        { source: 'Alstom', amount: 'FDI', instrument: 'Industrial investment' },
        { source: 'Gov. of Egypt', amount: 'Policy Support', instrument: 'Industrial localization' }
      ],
      vision2030Pillars: ['Localization of Industry', 'Economic Growth', 'Technology Transfer'],
      stakeholders: [
        { level: 'Corporate', entity: 'Alstom', role: 'Main investor & operator' },
        { level: 'National', entity: 'GAFI', role: 'Investment facilitation' }
      ],
      imagePlaceholder: 'High-Tech Railway Manufacturing Facility'
    }
  ],
  vision2030Achievement: {
    title: "Alexandria: A Beacon of Egypt's 2030 Vision",
    highlights: [
      {
        title: "Carbon Neutral Transit",
        detail: "The Abu Qir Metro and Raml Tram projects together aim to save hundreds of thousands of CO2 tons annually, eligible for 100% Green Economy Transition status."
      },
      {
        title: "Energy Sovereignty",
        detail: "Through sludge-to-energy and utility-scale solar, Alexandria is pioneers in decentralized, circular energy systems for core infrastructure."
      },
      {
        title: "Industrial Rebirth",
        detail: "The Alstom Borg El Arab complex transforms Alexandria from a logistics hub into a high-tech manufacturing export base for the region."
      },
      {
        title: "Climate Resilient Core",
        detail: "Integration of Sustainable Drainage Systems and Coastal Protection ensures the historic city's safety against rising sea levels."
      }
    ]
  }
} as const;
