"use client";
import AddBlogForm from "@/Components/Admin/Blog/AddBlogForm";
import api from "@/app/axios";
import { getAllBlogs } from "@/services/blogs";
import { BlogT } from "@/type";
import axios from "axios";
import React, { useEffect, useState } from "react";

const BlogForm: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitBlog, setSubmitBlog] = useState<Omit<BlogT, "_id"> | null>(null);
  const [editBlog, setEditBlog] = useState<BlogT | null>(null);
  // const [blogs, setBlogs] = useState<BlogT[] | undefined>();

  const [blogs, setBlogs] = useState<BlogT[]>([]);



  useEffect(() => {
    // Define an async function to fetch blogs
    async function fetchBlogs() {
      try {
        // Make a GET request to fetch blogs
        const response = await axios.get<BlogT[]>('http://localhost:3000/blogs');
        console.log(response)
        // If the request is successful, update the state with the fetched blogs
        // setBlogs(response.data);
      } catch (error) {
        // If an error occurs, log the error
        console.error('Error fetching blogs:', error);
        
        // Optionally handle the error or rethrow it
        // throw error;
      }
    }

    // Call the fetchBlogs function when the component mounts
    fetchBlogs();
  }, []);
  // useEffect(() => {

  //   async function fetchBlogs() {
  //     try {
  //       const response = await axios.get('http://localhost:3000/blogs');
  //       console.log(response)
  //       setBlogs(response.data);
  //     } catch (error) {
  //       console.error('Error fetching blogs:', error);
  //     }
  //   }
  //   fetchBlogs();
  //   // const fetchAllBlogs = async () => {
  //   //   const res = await getAllBlogs();
      
  //   //   setBlogs(res);
     
  //   // };
  //   // fetchAllBlogs();
  // }, [submitBlog,editBlog]);

  
  useEffect(() => {
    const submitNewBlog = async () => {
      if (submitBlog === null) {
        return;
      }
      const response = await api.post("/blogs", submitBlog);

      setShowAddForm(false);
      setSubmitBlog(null); // Reset to avoid re-submitting
    };
    submitNewBlog();
  }, [submitBlog]);

  const handleEdit = (id: string) => {
    // Find the selected blog from the list
    const selectedBlog = blogs?.find((blog) => blog._id === id);
    if (selectedBlog) {
      setEditBlog(selectedBlog);
      setShowAddForm(true);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete(`/blogs/${id}`);
      console.log("Blog deleted successfully:", response.data);

      const updatedBlogs = blogs?.filter((blog) => blog._id !== id);
      setBlogs(updatedBlogs);
    } catch (error) {
      console.error("Error deleting blog:", error);
      // Handle error as needed
    }
  };

  const handleAddNew = () => {
    setShowAddForm(true);
    setEditBlog(null);
  };

  const handleAddFormCancel = () => {
    setShowAddForm(false);
  };

  const handleAddFormSubmit = async (newBlog: Omit<BlogT, "_id">) => {
    setSubmitBlog(newBlog);
  };
  const handleEditFormSubmit = async (editedBlog: BlogT) => {
    try {
      // Make a PATCH request to update the blog with the new data
      const response = await api.patch(`/blogs/${editedBlog._id}`, editedBlog);
      console.log('Blog updated successfully:', response.data);
      setShowAddForm(false);
      setSubmitBlog(null);
      setEditBlog(null); // Reset editBlog after updating
    } catch (error) {
      console.error('Error updating blog:', error);
      // Handle error as needed
    }
  };
  return (
    <div className="container max-w-6xl mx-auto mb-10 p-4">
      {/* <pre>{JSON.stringify(allblogs, null, 2)}</pre> */}
      <button
        className=" bg-gray-700 text-white px-4 py-2 mb-4 rounded-md"
        onClick={handleAddNew}
      >
        Add New Blog
      </button>

      {showAddForm ? (
        <AddBlogForm
          onAdd={handleAddFormSubmit}
          handleEditFormSubmit={handleEditFormSubmit}
          editBlog={editBlog}
          onCancel={handleAddFormCancel}
        />
      ) : (
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs?.map((blog) => (
              <tr key={blog._id}>
                <td className="py-2 px-4 border-b">{blog.title}</td>
                <td className="py-2 px-4 border-b">{blog.description}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white w-16 px-2 py-1 mr-2 rounded-md"
                    onClick={() => handleEdit(blog._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white w-16 px-2 py-1 rounded-md"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BlogForm;
