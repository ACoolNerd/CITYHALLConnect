export const cityServices = [
  { id: "pothole", name: "Pothole Repair", category: "Infrastructure", department: "Public Works" },
  { id: "lighting", name: "Street Light Outage", category: "Infrastructure", department: "Street Lighting" },
  { id: "graffiti", name: "Graffiti Removal", category: "Sanitation", department: "Clean Streets" },
  { id: "trash", name: "Missed Trash Collection", category: "Sanitation", department: "Sanitation" },
  { id: "zoning", name: "Zoning Inquiry", category: "Planning", department: "Planning & Land Use" },
];

export const publicMeetings = [
  {
    id: "1",
    title: "City Council Regular Meeting",
    date: "2026-05-20T18:00:00Z",
    location: "City Hall Chamber",
    agenda: ["FY2027 Budget Review", "LA28 Transit Planning", "Affordable Housing Grant"],
  },
  {
    id: "2",
    title: "Planning Commission Hearing",
    date: "2026-05-22T14:00:00Z",
    location: "Online / Room 402",
    agenda: ["Downtown Mixed-Use Project", "Short-term Rental Ordinance"],
  },
];

export const agents = [
  {
    id: "acool-prompt",
    name: "ACoolPROMPT",
    role: "Orchestrator",
    capabilities: ["Meta-prompting", "Task Routing", "Reasoning"],
  },
  {
    id: "acool-dataset",
    name: "ACoolDATASET",
    role: "Knowledge Retrieval",
    capabilities: ["RAG", "Knowledge Graph Querying", "Data Synthesis"],
  },
  {
    id: "cityhall-civic",
    name: "CITYHALL Civic Agent",
    role: "Public Liaison",
    capabilities: ["Meeting Summarization", "Service Routing", "Citizen Support"],
  },
];

export const vaultItems = [
  {
    id: "v1",
    name: "1999 Pokémon Base Set Charizard",
    grade: "PSA 10",
    value: 350000,
    image: "/api/placeholder/400/600",
  },
  {
    id: "v2",
    name: "1952 Topps Mickey Mantle",
    grade: "SGC 9.5",
    value: 12500000,
    image: "/api/placeholder/400/600",
  },
  {
    id: "v3",
    name: "2003 Lebron James Exquisite Rookie",
    grade: "BGS 9",
    value: 2100000,
    image: "/api/placeholder/400/600",
  },
];
