import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const furnitureMadeBy = [
  { id: "wooden", label: "Wooden" },
  { id: "bamboo", label: "Bamboo" },
  { id: "metal", label: "Metal" },
];

const furnitureTypes = [
  { id: "seating", label: "Seating" },
  { id: "lying", label: "Lying" },
  { id: "entertainment", label: "Entertainment" },
  { id: "tables", label: "Tables" },
  { id: "storage", label: "Storage" },
];

export default function ProductFilter() {
  return (
    <div className="w-[220px] rounded-lg border bg-white p-4">
      {/* Furniture Made By */}
      <div className="mb-6">
        <h2 className="mb-3 text-sm font-semibold">Furniture Made By</h2>

        {furnitureMadeBy.map((item) => (
          <div key={item.id} className="mb-2 flex items-center gap-2">
            <Checkbox id={item.id} />

            <label htmlFor={item.id} className="text-xs">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      {/* Furniture Types */}
      <div className="mb-6">
        <h2 className="mb-3 text-sm font-semibold">Furniture Types</h2>

        {furnitureTypes.map((item) => (
          <div key={item.id} className="mb-2 flex items-center gap-2">
            <Checkbox id={item.id} />

            <label htmlFor={item.id} className="text-xs">
              {item.label}
            </label>
          </div>
        ))}
      </div>

      <Button className="w-full text-xs">Filter</Button>
    </div>
  );
}
