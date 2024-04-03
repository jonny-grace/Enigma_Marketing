'use client'

import { ServiceT } from '@/type';
// AddServiceForm.tsx

import React, { useState } from 'react';

interface AddServiceFormProps {
  onAdd: (newService: Omit<ServiceT, "_id">) => void;
  handleEditFormSubmit: (newService:ServiceT)=>void;
  onCancel: () => void;
  editService:ServiceT|null
}

const AddServiceForm: React.FC<AddServiceFormProps> = ({ onAdd, handleEditFormSubmit, onCancel, editService }) => {
    const [title, setTitle] = useState(editService?.title || '');
    const [description, setDescription] = useState(editService?.description || '');
    const [imageUrl, setImageUrl] = useState(editService?.imageUrl || '');

    const newService: Omit<ServiceT, '_id'> = { title, description, imageUrl };
  
    const handleUpdateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (editService) {
        
        handleEditFormSubmit({ ...editService, title, description, imageUrl });
      }
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAdd(newService);
      setTitle('');
      setDescription('');
    };
    
  
    return (
      <div className="container mx-auto p-4">
        <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            className="mt-1 p-2 border rounded-md w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            className="mt-1 p-2 border rounded-md w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-end">
          {editService ? (
            <>
              <button
                onClick={handleUpdateClick}
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
              >
                Update Service
              </button>
              
            </>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
            >
              Add Service
            </button>
          )}
          <button
                type="button"
                onClick={onCancel}
                className="bg-gray-400 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
        </div>
      </form>
    </div>
  );
};

export default AddServiceForm;