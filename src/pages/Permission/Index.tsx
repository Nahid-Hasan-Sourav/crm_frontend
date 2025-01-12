import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import Filters from "../../components/Table/Filter";
import Pagination from "../../components/Pagination/Index"

const Index = () => {
  const [filters, setFilters] = useState([
    {
      name: "Role",
      type: "text",
      value: "",
      onChange: (value: string) => handleFilterChange("Division", value),
    },
    {
        name: "Permission",
        type: "text",
        value: "",
        onChange: (value: string) => handleFilterChange("Id", value),
      },

    {
      name: "Show Entries",
      type: "dropdown",
      options: ["10", "20", "50"],
      value: "10",
      onChange: (value: string) => handleFilterChange("Show Entries", value),
    },
  ]);

  const [debouncedFilters, setDebouncedFilters] = useState(filters);

  // Debounce filter updates for API calls
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedFilters(filters);
    }, 500); // Adjust debounce delay as needed (500ms here)
    return () => clearTimeout(handler); // Cleanup timeout on unmount or change
  }, [filters]);

  useEffect(() => {
    // Hit API whenever debouncedFilters change
    fetchFilteredData();
  }, [debouncedFilters]);

  const handleFilterChange = (filterName: string, value: string) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) =>
        filter.name === filterName ? { ...filter, value } : filter
      )
    );
  };

  const fetchFilteredData = () => {
    const query = debouncedFilters.reduce((acc, filter) => {
      if (filter.value) {
        acc[filter.name.toLowerCase()] = filter.value; // Prepare query parameters
      }
      return acc;
    }, {} as Record<string, string>);

    console.log("Fetching data with filters:", query);
    // Replace this with your actual API call
    // Example:
    // fetch(`/api/endpoint?${new URLSearchParams(query)}`)
    //   .then((response) => response.json())
    //   .then((data) => console.log("Fetched data:", data));
  };

  const headers = ["Id","Role","Permissions", "Actions"];
  const rows = [
    { Id:"1",Role: "Managers,Customer",Permissions:"division.create"},
    { Id:"2",Role: "Administrator,Manager",Permissions:"division.update" },
    { Id:"3",Role: "Customer,User",Permissions:"division.delete" },
    { Id:"4",Role: "User,Customer,Administrator",Permissions:"TimeRange.create"},
  ];

  return (
    <div className="container mx-auto mt-5 p-4">
      {/* Top Controls */}
      <div className="flex justify-between items-center mb-4">
        {/* Create and Print Buttons */}
        <div>
          <button className="bg-blue-500 text-white px-4 mr-2 py-2 rounded hover:bg-blue-600">
            Create
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Print
          </button>
        </div>
        {/* Filters */}
        <Filters filters={filters} />
      </div>

      {/* Table */}
      <Table headers={headers} rows={rows} />
      <Pagination/>
    </div>
  );
};

export default Index;
