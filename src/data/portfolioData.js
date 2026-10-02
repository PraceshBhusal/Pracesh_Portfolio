export const personalInfo = {
  name: "PRACESH BHUSAL",
  role: "IT Administrator • Systems & Infrastructure • Full-Stack Web Development",
  shortRole: "IT Administrator & Full-Stack Developer",
  email: "bhusallaxman2002@gmail.com",
  phone: "+977 9862448283",
  location: "Bharatpur-25, Chitwan, Nepal",
  github: "https://github.com/PraceshBhusal",
  website: "https://praceshbhusal.com.np",
  summary:
    "IT Administrator with 2+ years of hands-on experience managing complete IT infrastructure for a 100-bed private hospital, including networking, servers, security, endpoints, and enterprise systems. I also build and maintain modern web applications using React.js, Laravel, PHP, and MySQL.",
};

export const expertise = [
  {
    number: "01",
    title: "IT Infrastructure",
    description:
      "Server administration, Windows/Linux systems, LAN/WAN, backups, monitoring, endpoints, CCTV, biometric systems, and enterprise IT operations.",
  },
  {
    number: "02",
    title: "Network & Security",
    description:
      "Network design, TCP/IP, DNS, DHCP, VPN, firewall policies, endpoint security, access control, MFA, and infrastructure security.",
  },
  {
    number: "03",
    title: "Full-Stack Development",
    description:
      "Modern web applications using React.js, Laravel, PHP, MySQL, REST APIs, Git, cPanel, SSL, and DNS.",
  },
  {
    number: "04",
    title: "Business Systems",
    description:
      "Hospital information systems, HR/payroll workflows, billing systems, databases, reports, dashboards, and operational software.",
  },
];

export const projects = [
  {
    title: "Pushpanjali Hospital Web Portal & Admin System",
    category: "Full-Stack Development",
    year: "2025 — Present",
    description:
      "A production hospital web platform with public-facing content and an administrative system for managing hospital information and operational data.",
    technologies: [
      "React.js",
      "Laravel",
      "PHP",
      "MySQL",
      "REST API",
      "cPanel",
    ],
    live: "https://pushpanjalihospital.com.np",
    github: "",
    image: "",
  },
  {
    title: "PChaT — Secure Hospital Communication",
    category: "Internal System",
    year: "2026 — Present",
    description:
      "An internal secure communication platform designed for hospital staff, supporting one-to-one messaging, group communication, document sharing, access control, and role-based permissions.",
    technologies: ["React.js", "Laravel", "MySQL", "RBAC", "REST API"],
    live: "",
    github: "",
    image: "",
  },
  {
    title: "Hotel Management & Billing System",
    category: "Business Application",
    year: "2026",
    description:
      "A practical hotel and restaurant management system covering menu management, table orders, kitchen workflow, billing, discounts, staff access, and multiple branches.",
    technologies: ["React.js", "Laravel", "MySQL", "REST API"],
    live: "",
    github: "https://github.com/PraceshBhusal/HotelFlow",
    image: "",
  },
  {
    title: "Tulasi House Builders",
    category: "Website Development",
    year: "2026",
    description:
      "A professional business website developed for a construction company with a focus on clean presentation, responsive design, and easy content management.",
    technologies: ["WordPress", "cPanel", "CSS", "Photoshop"],
    live: "https://tulasihouse.com/",
    github: "",
    image: "",
  },
];

export const experience = [
  {
    company: "Pushpanjali Hospital Pvt. Ltd.",
    role: "IT Officer",
    period: "Sep 2024 — Present",
    location: "Chitwan, Nepal",
    description:
      "Manage hospital IT infrastructure as the primary IT operator, covering servers, LAN/WAN, switches, firewall, wireless access points, IP CCTV, endpoints, hospital systems, backups, security, databases, and technical support.",
    points: [
      "Manage IT infrastructure supporting 100+ clinical and administrative staff.",
      "Maintain hospital HIMS/EMR, HR systems, website, and related business applications.",
      "Handle network, firewall, server, endpoint, backup, and access-control operations.",
      "Develop and maintain internal systems and web applications.",
      "Troubleshoot databases, reports, dashboards, and enterprise software issues.",
    ],
  },
  {
    company: "CloudFactory",
    role: "Data Operations Specialist — AI Training Data & QA",
    period: "2020 — 2023",
    location: "Remote",
    description:
      "Worked with structured datasets and quality assurance processes for AI and machine-learning data operations in an international remote environment.",
    points: [
      "Prepared and validated structured datasets for AI/ML workflows.",
      "Maintained high accuracy and consistency across data operations.",
      "Worked within defined quality-control and production processes.",
      "Collaborated remotely in an international work environment.",
    ],
  },
];

export const teaching = {
  institution: "School of Health Science, CTEVT",
  role: "Computer Instructor",
  period: "2026 — Present",
  location: "Bharatpur, Chitwan, Nepal",
  description:
    "Teaching computer-related subjects to health science students, helping students develop practical digital and computer skills alongside their professional healthcare education.",
  programs: [
    "Radiography / Radiology",
    "Physiotherapy",
    "General Medicine",
  ],
};

/*
|--------------------------------------------------------------------------
| Skills
|--------------------------------------------------------------------------
| skillGroups is the main export used by Skills.jsx.
*/

export const skillGroups = [
  {
    title: "Systems & Networking",
    skills: [
      "Windows Administration",
      "Linux Administration",
      "Firewall Setup ",
      "LAN / WAN",
      "TCP/IP",
      "DNS",
      "DHCP",
      "VPN",
      "Server Administration",
    ],
  },
  {
    title: "Security",
    skills: [
      "Firewall Policy",
      "MFA",
      "Endpoint Security",
      "Antivirus / EDR",
      "Access Control",
      "Network Security",
      "Endpoint Hardening",
      "Encrypted Communication",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "Server Monitoring",
      "Backup & Recovery",
      "IP CCTV",
      "Biometric Systems",
      "PBX",
      "Network Switches",
      "Wireless Access Points",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "React.js",
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "JavaScript",
      "Git",
      "GitHub",
      "cPanel",
      "SSL",
      "DNS",
      "WordPress",
    ],
  },
  {
    title: "Business Systems",
    skills: [
      "Hospital HIMS / EMR",
      "HR / Payroll Systems",
      "Billing Systems",
      "Database Troubleshooting",
      "Reports",
      "Dashboards",
    ],
  },
  {
    title: "Design & Creative",
    skills: [
      "Adobe Photoshop",
      "Premiere Pro",
      "CapCut",
      "Figma",
    ],
  },
];

/*
|--------------------------------------------------------------------------
| Compatibility export
|--------------------------------------------------------------------------
| Kept as "skills" as well in case another component uses it.
*/

export const skills = {
  systems: [
    "Windows Administration",
    "Linux Administration",
    "LAN / WAN",
    "TCP/IP",
    "DNS",
    "DHCP",
    "VPN",
    "Server Administration",
  ],

  security: [
    "Firewall Policy",
    "MFA",
    "Endpoint Security",
    "Antivirus / EDR",
    "Access Control",
    "Network Security",
    "Endpoint Hardening",
    "Encrypted Communication",
  ],

  infrastructure: [
    "Server Monitoring",
    "Backup & Recovery",
    "IP CCTV",
    "Biometric Systems",
    "PBX",
    "Network Switches",
    "Wireless Access Points",
  ],

  development: [
    "React.js",
    "Laravel",
    "PHP",
    "MySQL",
    "REST APIs",
    "JavaScript",
    "Git",
    "GitHub",
    "cPanel",
    "SSL",
    "DNS",
    "WordPress",
  ],

  business: [
    "Hospital HIMS / EMR",
    "HR / Payroll Systems",
    "Billing Systems",
    "Database Troubleshooting",
    "Reports",
    "Dashboards",
  ],

  design: [
    "Adobe Photoshop",
    "Premiere Pro",
    "CapCut",
    "Figma",
  ],
};

export const education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Oxford College, Pokhara University",
  period: "2019 — 2024",
  location: "Chitwan, Nepal",
  achievement: "Full Merit Scholarship Recipient",
};

export const certifications = [
  {
    name: "Microsoft Azure Fundamentals — AZ-900",
    status: "In Progress",
  },
  {
    name: "Network Security Fundamentals",
    status: "Completed",
  },
  {
    name: "UI/UX Design — Figma",
    status: "Completed",
  },
  {
    name: "Data Specialist Certification",
    status: "CloudFactory",
  },
];

export const languages = [
  {
    name: "Nepali",
    level: "Native",
  },
  {
    name: "English",
    level: "Professional",
  },
  {
    name: "Hindi",
    level: "Conversational",
  },
];

export const freelanceServices = [
  "Website Development",
  "Network Setup",
  "IT Infrastructure",
  "Technical Support",
  "Graphic Design",
];