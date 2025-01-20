'use client';

import React, { useState } from 'react';

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    userName: '',
    phoneNumber: '',
    description: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleReset = () => {
    setProfile({
      fullName: '',
      email: '',
      userName: '',
      phoneNumber: '',
      description: '',
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white shadow-md">
        <div className="p-4 border-b border-gray-700">
          {/* Replacing BioMandi text with an image */}
          <img
            src="/profile-placeholder.svg"  // Replace with the actual image path
            alt="BioMandi Logo"
            className="w-32 h-auto"  // Adjust the width and height as needed
          />
        </div>
        <nav className="mt-4">
          {[
            'Seller name & Number',
            'Verification status',
            'Profile information',
            'Store information',
            'Inventory management',
            'Payout information',
            'Billing & Invoice',
            'Support & Help',
            'FAQ',
            'Settings',
          ].map((item, index) => (
            <div
              key={index}
              className={`py-3 px-4 hover:bg-gray-700 cursor-pointer ${
                item === 'Profile information' ? 'bg-gray-700 font-bold' : ''
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Profile Information</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          {/* Profile Picture */}
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-300 overflow-hidden">
              <img
                src="/profile.jpg"  // Correct path to profile picture in the public folder
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <button className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Change profile picture
            </button>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={profile.fullName}
                onChange={handleChange}
                placeholder="Please enter full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                placeholder="Please enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">User Name</label>
              <input
                type="text"
                name="userName"
                value={profile.userName}
                onChange={handleChange}
                placeholder="Please enter user name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
                placeholder="Please enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Seller Description (Optional)</label>
              <textarea
                name="description"
                value={profile.description}
                onChange={handleChange}
                placeholder="Write a brief description about your business"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-6 space-x-4">
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reset
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
