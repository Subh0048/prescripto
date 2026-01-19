import React from "react";
import { X, Check } from "lucide-react";

function RowAction({ id, data, setData }) {
  const handleAction = (decision) => {
    if (decision == "remove") {
      const newd = data.filter((info) => {
       
        return info?.id !== id;
      });
     
      setData((prev) => prev.filter((info) => info.id !== id));
    }
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => handleAction("remove")}>
        <X size={15} />
      </button>

      <button onClick={() => handleAction("add")}>
        <Check size={15} />
      </button>
    </div>
  );
}

export default RowAction;
