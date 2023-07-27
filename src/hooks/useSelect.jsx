import { useState } from "react";

export default function useSelect() {
  const [selectedItems, setSelectedItems] = useState([]);

  function toggleSelectedItems(item) {
    if (!selectedItems.includes(item)) {
      setSelectedItems((selectedItems) => [...selectedItems, item]);
    } else {
      setSelectedItems((selectedItems) =>
        selectedItems.filter((element) => element.id !== item.id)
      );
    }
  }

  return { selectedItems, setSelectedItems, toggleSelectedItems };
}
