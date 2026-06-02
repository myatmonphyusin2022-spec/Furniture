import { Button } from "@/components/ui/button";

interface EditableProps {
  quantity: number;
  onUpdate: (quantity: number) => void;
}

function Editable({ quantity, onUpdate }: EditableProps) {
  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onUpdate(quantity - 1)}
      >
        -
      </Button>

      <span className="min-w-8 text-center">{quantity}</span>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onUpdate(quantity + 1)}
      >
        +
      </Button>
    </div>
  );
}

export default Editable;