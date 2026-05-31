import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useNavigate } from "react-router";

interface FilterItem {
  id: string;
  label: string;
}

interface ProductFilterProps {
  filterList: {
    categories: FilterItem[];
    types: FilterItem[];
  };
}

export default function ProductFilter({ filterList }: ProductFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const navigate = useNavigate();

  const handleFilter = () => {
    const params = new URLSearchParams();

    if (selectedCategory) {
      params.set("categories", selectedCategory);
    }

    if (selectedType) {
      params.set("type", selectedType);
    }

    const queryString = params.toString();

    navigate(queryString ? `/products?${queryString}` : "/products");
  };

  return (
    <div className="w-[220px] rounded-lg border bg-white p-4">
      {/* Furniture Made By */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold">Furniture Made By</h3>

        {filterList.categories.map((item) => (
          <div key={item.id} className="mb-2 flex items-center gap-2">
            <Checkbox
              id={item.id}
              checked={selectedCategory === item.id}
              onCheckedChange={() => setSelectedCategory(item.id)}
            />

            <label htmlFor={item.id} className="text-xs">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      {/* Furniture Types */}
      <div className="mb-6">
        <h3 className="mb-3 text-sm font-semibold">Furniture Types</h3>

        {filterList.types.map((item) => (
          <div key={item.id} className="mb-2 flex items-center gap-2">
            <Checkbox
              id={item.id}
              checked={selectedType === item.id}
              onCheckedChange={() => setSelectedType(item.id)}
            />

            <label htmlFor={item.id} className="text-xs">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <Button className="w-full text-xs" onClick={handleFilter}>
        Filter
      </Button>
    </div>
  );
}
