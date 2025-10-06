// Email: admin@example.com
// Password: admin123



export type AgentApplication = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  idType: string;
  idNumber: string;
  address: string;
  experience: string;
  languages: string[];
  submittedAt: string;
  status: "pending" | "approved" | "rejected";
  idCardImage: string;
  profileImage: string;
};

export type Property = {
  id: string;
  title: string;
  price: number;
  location: string;
  thumbnail: string;
  category: string;
  listingType: string;
  area: number;
  description: string;
  images: string[];
  contactMobile: string;
  contactEmail: string;
  agentId: string;
  agentName: string;
  status: "pending" | "approved" | "rejected";
  submittedAt: string;
  createdAt: string;
  updatedAt: string;
};

export const agentApplications: AgentApplication[] = [
  {
    id: "1",
    fullName: "Rajesh Kumar",
    email: "rajesh@example.com",
    phone: "9876543210",
    idType: "aadhar",
    idNumber: "1234-5678-9012",
    address: "Delhi",
    experience: "5",
    languages: ["Hindi", "English"],
    submittedAt: "2024-01-15T10:30:00Z",
    status: "pending",
    idCardImage: "aadhar_card.jpg",
    profileImage: "profile1.jpg",
  },
  {
    id: "2",
    fullName: "Priya Sharma",
    email: "priya@example.com",
    phone: "9876543211",
    idType: "pan",
    idNumber: "ABCDE1234F",
    address: "Mumbai",
    experience: "3",
    languages: ["Hindi", "English"],
    submittedAt: "2024-01-14T14:20:00Z",
    status: "pending",
    idCardImage: "pan_card.jpg",
    profileImage: "profile2.jpg",
  },
];

export const properties: Property[] = [
  {
    id: "1",
    title: "Premium Plot in Delhi",
    price: 5000000,
    location: "Delhi",
    thumbnail: "/assets/hero-banner.png",
    category: "plot",
    listingType: "sale",
    area: 1200,
    description: "Premium residential plot",
    images: ["/assets/hero-banner.png"],
    contactMobile: "9876543210",
    contactEmail: "contact@example.com",
    agentId: "1",
    agentName: "Rajesh Kumar",
    status: "pending",
    submittedAt: "2024-01-15T10:00:00Z",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    title: "Luxury Villa in Mumbai",
    price: 12000000,
    location: "Mumbai",
    thumbnail: "/assets/hero-banner.png",
    category: "villa",
    listingType: "rental",
    area: 3000,
    description: "Luxurious villa",
    images: ["/assets/hero-banner.png"],
    contactMobile: "9876543211",
    contactEmail: "villa@example.com",
    agentId: "2",
    agentName: "Priya Sharma",
    status: "pending",
    submittedAt: "2024-01-14T15:00:00Z",
    createdAt: "2024-01-14T15:00:00Z",
    updatedAt: "2024-01-14T15:00:00Z",
  },
];
