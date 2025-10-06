"use client";
import { useState } from "react";
import { AgentApplication, Property } from "./../utils/data";


type TabType = "dashboard" | "agents" | "properties";

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState<TabType>("dashboard");
    const [agentApplications, setAgentApplications] = useState<AgentApplication[]>([
        {
            id: "1",
            fullName: "Rajesh Kumar",
            email: "rajesh@example.com",
            phone: "9876543210",
            idType: "aadhar",
            idNumber: "1234-5678-9012",
            address: "123 Main Street, Delhi",
            experience: "5",
            languages: ["Hindi", "English", "Tamil"],
            submittedAt: "2024-01-15T10:30:00Z",
            status: "pending",
            idCardImage: "aadhar_card.jpg",
            profileImage: "profile_photo.jpg"
        },
        {
            id: "2",
            fullName: "Priya Sharma",
            email: "priya@example.com",
            phone: "9876543211",
            idType: "pan",
            idNumber: "ABCDE1234F",
            address: "456 Park Avenue, Mumbai",
            experience: "3",
            languages: ["Hindi", "English"],
            submittedAt: "2024-01-14T14:20:00Z",
            status: "pending",
            idCardImage: "pan_card.jpg",
            profileImage: "profile_photo2.jpg"
        }
    ]);

    const [properties, setProperties] = useState<Property[]>([
        {
            id: "1",
            title: "Premium Plot in Delhi",
            price: 5000000,
            location: "Delhi",
            thumbnail: "/assets/hero-banner.png",
            category: "plot",
            listingType: "sale",
            area: 1200,
            description: "Premium residential plot in prime location with all amenities",
            images: ["/assets/hero-banner.png"],
            contactMobile: "9876543210",
            contactEmail: "contact@example.com",
            agentId: "agent1",
            agentName: "Rajesh Kumar",
            status: "pending",
            submittedAt: "2024-01-15T10:00:00Z",
            createdAt: "2024-01-15T10:00:00Z",
            updatedAt: "2024-01-15T10:00:00Z"
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
            description: "Luxurious villa with modern amenities and beautiful garden",
            images: ["/assets/hero-banner.png"],
            contactMobile: "9876543211",
            contactEmail: "villa@example.com",
            agentId: "agent2",
            agentName: "Priya Sharma",
            status: "pending",
            submittedAt: "2024-01-14T15:00:00Z",
            createdAt: "2024-01-14T15:00:00Z",
            updatedAt: "2024-01-14T15:00:00Z"
        }
    ]);

    const handleAgentApproval = (agentId: string, status: "approved" | "rejected") => {
        setAgentApplications(prev =>
            prev.map(agent =>
                agent.id === agentId ? { ...agent, status } : agent
            )
        );
        // Notification removed as per instruction
    };

    const handlePropertyApproval = (propertyId: string, status: "approved" | "rejected") => {
        setProperties(prev =>
            prev.map(property =>
                property.id === propertyId ? { ...property, status } : property
            )
        );
        // Notification removed as per instruction
    };

    const formatDate = (dateString: string | undefined | null) => {
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return "Invalid date";
        return date.toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "approved": return "text-green-600 bg-green-100";
            case "rejected": return "text-red-600 bg-red-100";
            case "pending": return "text-yellow-600 bg-yellow-100";
            default: return "text-gray-600 bg-gray-100";
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
            
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-center text-gray-600">
                        Manage agent approvals and property listings
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-1 shadow-lg">
                        <button
                            onClick={() => setActiveTab("dashboard")}
                            className={`px-6 py-2 rounded-md transition ${
                                activeTab === "dashboard"
                                    ? "bg-yellow-600 text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Dashboard
                        </button>
                        <button
                            onClick={() => setActiveTab("agents")}
                            className={`px-6 py-2 rounded-md transition ${
                                activeTab === "agents"
                                    ? "bg-yellow-600 text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Agent Approvals
                        </button>
                        <button
                            onClick={() => setActiveTab("properties")}
                            className={`px-6 py-2 rounded-md transition ${
                                activeTab === "properties"
                                    ? "bg-yellow-600 text-white"
                                    : "text-gray-600 hover:text-gray-800"
                            }`}
                        >
                            Property Management
                        </button>
                    </div>
                </div>

                {activeTab === "dashboard" && (
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-600 mb-2">
                                        {agentApplications.filter(a => a.status === "pending").length}
                                    </div>
                                    <div className="text-gray-600">Pending Agent Approvals</div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">
                                        {agentApplications.filter(a => a.status === "approved").length}
                                    </div>
                                    <div className="text-gray-600">Approved Agents</div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-600 mb-2">
                                        {properties.filter(p => p.status === "pending").length}
                                    </div>
                                    <div className="text-gray-600">Pending Properties</div>
                                </div>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">
                                        {properties.filter(p => p.status === "approved").length}
                                    </div>
                                    <div className="text-gray-600">Approved Properties</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Agent Applications</h2>
                                <div className="space-y-3">
                                    {agentApplications.slice(0, 3).map((agent) => (
                                        <div key={agent.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-800">{agent.fullName}</p>
                                                <p className="text-sm text-gray-600">{agent.email}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(agent.status)}`}>
                                                {agent.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Property Submissions</h2>
                                <div className="space-y-3">
                                    {properties.slice(0, 3).map((property) => (
                                        <div key={property.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                                            <div>
                                                <p className="font-medium text-gray-800">{property.title}</p>
                                                <p className="text-sm text-gray-600">₹{property.price.toLocaleString()}</p>
                                            </div>
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(property.status)}`}>
                                                {property.status}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "agents" && (
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Agent Applications</h2>
                            <div className="space-y-6">
                                {agentApplications.map((agent) => (
                                    <div key={agent.id} className="border border-gray-200 rounded-lg p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            <div className="lg:col-span-2">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Name</label>
                                                        <p className="text-gray-900">{agent.fullName}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Email</label>
                                                        <p className="text-gray-900">{agent.email}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                                                        <p className="text-gray-900">{agent.phone}</p>
                                                    </div>
                                                    
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">ID Type</label>
                                                        <p className="text-gray-900">{agent.idType.toUpperCase()}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">ID Number</label>
                                                        <p className="text-gray-900">{agent.idNumber}</p>
                                                    </div>
                                                </div>
                                                
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-700">Submitted At</label>
                                                    <p className="text-gray-900">{formatDate(agent.submittedAt)}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-sm font-medium text-gray-700 mb-2">Documents</label>
                                                    <div className="space-y-2">
                                                        <div className="flex items-center space-x-2">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                            </svg>
                                                            <span className="text-sm text-gray-600">{agent.idCardImage}</span>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                            </svg>
                                                            <span className="text-sm text-gray-600">{agent.profileImage}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handleAgentApproval(agent.id, "approved")}
                                                        disabled={agent.status !== "pending"}
                                                        className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handleAgentApproval(agent.id, "rejected")}
                                                        disabled={agent.status !== "pending"}
                                                        className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                                <div className="text-center">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(agent.status)}`}>
                                                        {agent.status.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "properties" && (
                    <div className="max-w-6xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Property Management</h2>
                            <div className="space-y-6">
                                {properties.map((property) => (
                                    <div key={property.id} className="border border-gray-200 rounded-lg p-6">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                            <div className="lg:col-span-2">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Property Title</label>
                                                        <p className="text-gray-900">{property.title}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Price</label>
                                                        <p className="text-gray-900">₹{property.price.toLocaleString()}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Location</label>
                                                        <p className="text-gray-900">{property.location}</p>
                                                    </div>
                                                    <div>
                                                        <label className="block text-sm font-medium text-gray-700">Agent</label>
                                                        <p className="text-gray-900">{property.agentName}</p>
                                                    </div>
                                                </div>
                                                <div className="mb-4">
                                                    <label className="block text-sm font-medium text-gray-700">Submitted At</label>
                                                    <p className="text-gray-900">{formatDate(property.submittedAt)}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex space-x-2">
                                                    <button
                                                        onClick={() => handlePropertyApproval(property.id, "approved")}
                                                        disabled={property.status !== "pending"}
                                                        className="flex-1 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                                                    >
                                                        Approve
                                                    </button>
                                                    <button
                                                        onClick={() => handlePropertyApproval(property.id, "rejected")}
                                                        disabled={property.status !== "pending"}
                                                        className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition"
                                                    >
                                                        Reject
                                                    </button>
                                                </div>
                                                <div className="text-center">
                                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(property.status)}`}>
                                                        {property.status.toUpperCase()}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
