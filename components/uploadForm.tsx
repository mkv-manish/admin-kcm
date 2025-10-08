"use client";
import { useState, useRef } from "react";

type Category = "plot" | "villa" | "farm-land";
type ListingType = "sale" | "rental" | "lease";

export default function UploadForm() {
    const [title, setTitle] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [category, setCategory] = useState<Category>("plot");
    const [listingType, setListingType] = useState<ListingType>("sale");
    const [area, setArea] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [contactMobile, setContactMobile] = useState<string>("");
    const [contactEmail, setContactEmail] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setImages((prev) => [...prev, ...files]);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const removeImage = (index: number) => {
        setImages((prev) => prev.filter((_, i) => i !== index));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const propertyData = {
            title,
            price: parseFloat(price),
            location,
            category,
            listingType,
            area: parseFloat(area),
            description,
            contactMobile,
            contactEmail,
            images,
        };
        alert("Property uploaded successfully (mock)");
        // eslint-disable-next-line no-console
        console.log("Property Data:", propertyData);
    };

    return (
        <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                {/* Basic Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Property Title *
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-300 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter property title"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Price (₹) *
                        </label>
                        <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter price"
                            required
                            min="0"
                            step="any"
                            inputMode="decimal"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Location *
                        </label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter location"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Area *
                        </label>
                        <input
                            type="number"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter area (sq ft or acres)"
                            required
                            min="0"
                            step="any"
                            inputMode="decimal"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Category *
                        </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value as Category)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900"
                            required
                        >
                            <option value="plot">Plot</option>
                            <option value="villa">Villa</option>
                            <option value="farm-land">Farm Land</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Listing Type *
                        </label>
                        <select
                            value={listingType}
                            onChange={(e) => setListingType(e.target.value as ListingType)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900"
                            required
                        >
                            <option value="sale">For Sale</option>
                            <option value="rental">For Rent</option>
                            <option value="lease">For Lease</option>
                        </select>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Contact Mobile *
                        </label>
                        <input
                            type="tel"
                            value={contactMobile}
                            onChange={(e) => setContactMobile(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter mobile number"
                            required
                            pattern="[0-9+\s-]*"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-yellow-700 mb-2">
                            Contact Email *
                        </label>
                        <input
                            type="email"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                            placeholder="Enter email address"
                            required
                            autoComplete="email"
                        />
                    </div>
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-semibold text-yellow-700 mb-2">
                        Description *
                    </label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900 placeholder-gray-400"
                        placeholder="Enter property description"
                        required
                    />
                </div>

                {/* Image Upload */}
                <div>
                    <label className="block text-sm font-semibold text-yellow-700 mb-2">
                        Property Images *
                    </label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 border border-indigo-300 rounded-lg focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 bg-white text-gray-900"
                        ref={fileInputRef}
                    />

                    {images.length > 0 && (
                        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <div key={index} className="relative">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`Property ${index + 1}`}
                                        className="w-full h-24 object-cover rounded-lg border-2 border-indigo-200"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeImage(index)}
                                        className="absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-indigo-700 shadow"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-yellow-700 via-blue-500 to-gray-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg hover:from-indigo-600 hover:via-blue-600 hover:to-indigo-700 transition-colors duration-200"
                    >
                        Upload Property
                    </button>
                </div>
            </form>
        </div>
    );
}