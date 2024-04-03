'use client'

import { BlogT } from '@/type';
// AddBlogForm.tsx

import React, { useState } from 'react';

interface AddBlogFormProps {
  onAdd: (newBlog: Omit<BlogT, "_id">) => void;
  handleEditFormSubmit: (newBlog:BlogT)=>void;
  onCancel: () => void;
  editBlog:BlogT|null
}

const AddBlogForm: React.FC<AddBlogFormProps> = ({ onAdd, handleEditFormSubmit, onCancel, editBlog }) => {
    const [title, setTitle] = useState(editBlog?.title || '');
    const [description, setDescription] = useState(editBlog?.description || '');
    const [imageUrl, setImageUrl] = useState(editBlog?.imageUrl || '');

    const newBlog: Omit<BlogT, '_id'> = { title, description, imageUrl };
  
    const handleUpdateClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (editBlog) {
        
        handleEditFormSubmit({ ...editBlog, title, description, imageUrl });
      }
    };
  

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files ? e.target.files[0] : null;
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              // Use reader.result as the imageUrl
              setImageUrl(reader.result as string);
          };
          reader.readAsDataURL(file);
      }
  };


    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      onAdd(newBlog);
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
        <div className="grid gap-y-1 mt-2">
            <label htmlFor="imageUrl" className="capitalize pl-3 lightText">
              Image
              <span className="text-red-500">max size 2mb</span>
            </label>
            <input
             
              placeholder="Payment Proof Image"
              name="imageUrl"
              id="imageUrl"
              className="w-full"
              type="file"
              accept="image/*"
              required
              onChange={handleImageChange}
            />
            
          </div>
        <div className="flex justify-end">
          {editBlog ? (
            <>
              <button
                onClick={handleUpdateClick}
                className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
              >
                Update Blog
              </button>
              
            </>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md"
            >
              Add Blog
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

export default AddBlogForm;