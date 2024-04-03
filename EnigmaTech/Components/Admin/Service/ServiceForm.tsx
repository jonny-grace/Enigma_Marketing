"use client";
import AddServiceForm from "@/Components/Admin/Service/AddServiceForm";
import api from "@/app/axios";
import { ServiceT } from "@/type";
import React, { useEffect, useState } from "react";
import { notify } from "@/app/toast";


const ServiceForm: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [submitService, setSubmitService] = useState<Omit<ServiceT, "_id"> | null>(null);
  const [editService, setEditService] = useState<ServiceT | null>(null);
  const [Services, setServices] = useState<ServiceT[] | undefined>();




  useEffect(() => {
    const fetchAllServices = async () => {
      const res = await api.get<ServiceT[]>("/Services");
      setServices(res.data);
    };
    fetchAllServices();
  }, [submitService,editService]);

  useEffect(() => {
    const submitNewService = async () => {
      if (submitService === null) {
        return;
      }
      const response = await api.post("/Services", submitService);

      setShowAddForm(false);
      setSubmitService(null); // Reset to avoid re-submitting
    };
    submitNewService();
  }, [submitService]);

  const handleEdit = (id: string) => {
    // Find the selected Service from the list
    const selectedService = Services?.find((Service) => Service._id === id);
    if (selectedService) {
      setEditService(selectedService);
      setShowAddForm(true);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await api.delete(`/Services/${id}`);
      notify("Service deleted successfully:","success")
      console.log("Service deleted successfully:", response.data);

      const updatedServices = Services?.filter((Service) => Service._id !== id);
      setServices(updatedServices);
    } catch (error) {
      console.error("Error deleting Service:", error);
      // Handle error as needed
    }
  };

  const handleAddNew = () => {
    setShowAddForm(true);
    setEditService(null);
  };

  const handleAddFormCancel = () => {
    setShowAddForm(false);
  };

  const handleAddFormSubmit = async (newService: Omit<ServiceT, "_id">) => {
    setSubmitService(newService);
  };
  const handleEditFormSubmit = async (editedService: ServiceT) => {
    try {
      // Make a PATCH request to update the Service with the new data
      const response = await api.patch(`/Services/${editedService._id}`, editedService);
      console.log('Service updated successfully:', response.data);
      setShowAddForm(false);
      setSubmitService(null);
      setEditService(null); // Reset editService after updating
    } catch (error) {
      console.error('Error updating Service:', error);
      // Handle error as needed
    }
  };
  return (
    <div className="container max-w-6xl mx-auto mb-10 p-4">
      {/* <pre>{JSON.stringify(allServices, null, 2)}</pre> */}
      <button
        className="bg-gray-700 text-white px-4 py-2 mb-4 rounded-md"
        onClick={handleAddNew}
      >
        Add New Service
      </button>

      {showAddForm ? (
        <AddServiceForm
          onAdd={handleAddFormSubmit}
          handleEditFormSubmit={handleEditFormSubmit}
          editService={editService}
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
            {Services?.map((Service) => (
              <tr key={Service._id}>
                <td className="py-2 px-4 border-b">{Service.title}</td>
                <td className="py-2 px-4 border-b">{Service.description}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-green-500 text-white px-2 w-16 py-1 mr-2 rounded-md"
                    onClick={() => handleEdit(Service._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 w-16 py-1 rounded-md"
                    onClick={() => handleDelete(Service._id)}
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

export default ServiceForm;
