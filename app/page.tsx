'use client';

import React, { useState } from 'react';

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    fullName: 'Abhay Singh',
    email: 'as198663@gmail.com',
    userName: 'abhay_singh',
    phoneNumber: '1234567890',
    description: 'A passionate seller with expertise in organic products.',
  });

  const [profilePicture, setProfilePicture] = useState('/profile-placeholder.svg'); // Default profile picture

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleReset = () => {
    setProfile({
      fullName: 'Abhay Singh',
      email: 'as198663@gmail.com',
      userName: 'abhay_singh',
      phoneNumber: '1234567890',
      description: 'A passionate seller with expertise in organic products.',
    });
    setProfilePicture('/profile-placeholder.svg'); // Reset profile picture
  };

  const handleEditProfile = () => {
    console.log('Profile updated:', profile);
    alert('Profile updated successfully!');
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          setProfilePicture(reader.result as string);
          alert(`Profile picture updated to ${file.name}`);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white shadow-md">
        <div className="p-4 border-b border-gray-700">
          <img src="/profile-placeholder.svg" alt="BioMandi Logo" className="w-32 h-auto" />
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
                src={profilePicture}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <label className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer">
              Change profile picture
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleProfilePictureChange}
              />
            </label>
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
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
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Seller Description (Optional)</label>
              <textarea
                name="description"
                value={profile.description}
                onChange={handleChange}
                placeholder="Write a brief description about your business"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 text-gray-800"
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
            <button
              onClick={handleEditProfile}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
