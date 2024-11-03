import { convertToBase64 } from '@/utils/bufferToBase64';
import React, { useState } from 'react';

export default function ProductImageUpload({ onImageChange }) {
  const [preview, setPreview] = useState(null);

  const handleImageSelect = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const base64Image = await convertToBase64(file)
      setPreview(URL.createObjectURL(file)); // Show a preview image using a URL
      onImageChange(base64Image); // Pass the image file to the parent component
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium">Product Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
      />
      {preview && (
        <img src={preview} alt="Product Preview" className="mt-4 w-32 h-32 object-cover rounded-md shadow-md" />
      )}
    </div>
  );
}
