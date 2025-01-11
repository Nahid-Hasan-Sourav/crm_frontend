import React from "react";

interface Filter {
  name: string; // Name of the filter (used as label or placeholder)
  type: "text" | "dropdown"; // Type of the filter: text input or dropdown
  options?: string[]; // Options for dropdown (if type is "dropdown")
  value: string; // Current value of the filter
  onChange: (value: string) => void; // Callback when the filter value changes
}

interface FiltersProps {
  filters: Filter[]; // Array of filter definitions
}

const Filters: React.FC<FiltersProps> = ({ filters }) => {
  return (
    <div className="flex space-x-4">
      {filters.map((filter, index) => (
        <div key={index} className="flex flex-col">
          {filter.type === "dropdown" ? (
            <select
              className="border bg-gray-2 dark:bg-meta-4 rounded px-3 py-2 focus:outline-none"
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
            >
              {filter.options?.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              placeholder={`Search ${filter.name}...`}
              value={filter.value}
              onChange={(e) => filter.onChange(e.target.value)}
              className="border bg-gray-2 dark:bg-meta-4 rounded px-3 py-2 focus:outline-none"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
