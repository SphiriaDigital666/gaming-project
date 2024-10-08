import React, { Dispatch, ReactNode, SetStateAction } from "react";

import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

interface SidebarButtonProps {
  itemArray: string[];
  selectedItem: string;
  isMenuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  buttonText: string;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({
  itemArray,
  selectedItem,
  isMenuOpen,
  setMenuOpen,
  children,
  buttonText,
}) => {
  return (
    <button
      className={`flex justify-between items-center w-full py-[1em] px-[2.5em] mb-[1em] hover:opacity-80 ${
        itemArray.find((i) => i === selectedItem) !== undefined
          ? "before:content-[''] before:absolute before:left-[0.8em] before:w-[0.5em] before:h-[calc(2.4em+1rem)] before:bg-[#00FFA1] before:rounded-sm"
          : ""
      }`}
      onClick={() => setMenuOpen((prev) => !prev)}
    >
      <div className="flex items-center gap-x-[0.7em]">
        {children}
        <span>{buttonText}</span>
      </div>
      {isMenuOpen ? (
        <TiArrowSortedUp className="text-[1.5em]" />
      ) : (
        <TiArrowSortedDown className="text-[1.5em]" />
      )}
    </button>
  );
};

export default SidebarButton;
