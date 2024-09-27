import { useRoleContext } from "@/context/RoleContext";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";

interface Role {
  id: string;
  name: string;
}

interface DeleteRoleProps {
  currentRole: Role | any;
  handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteRole: React.FC<DeleteRoleProps> = ({
  currentRole,
  handleCancel,
}) => {
  const { deleteRole } = useRoleContext();

  const deleteRoleById = async () => {
    deleteRole(currentRole.id);
    handleCancel(false);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center text-[11px] text-center">
      <div className="relative bg-gradient-to-br from-black/40 from-50% to-[#00a76966] backdrop-blur-sm p-[4em] rounded-md border border-t-[1em] border-[#0D6D49]">
        <div className="size-[6.5em] absolute top-0 left-0 right-0 mx-auto -translate-y-[60%] bg-[#0D6D49] flex items-center justify-center rounded-full">
          <MdDeleteForever className="text-[5em]" />
        </div>
        <h2 className="text-[20px] font-semibold">
          Delete {currentRole?.name} role
        </h2>
        <p className="text-[11px] mt-[2em] mb-[2.5em] w-[40ch]">
          Deleting this role will remove it from the system permanently. This
          cannot be undone.
        </p>
        <div className="flex gap-x-[3em] justify-center font-bold">
          <button
            onClick={() => handleCancel(false)}
            className="py-[1em] px-[1em] border border-[#00FFA1] rounded-sm flex-grow w-full hover:opacity-90 transition-opacity duration-100"
          >
            Cancel
          </button>
          <button
            onClick={deleteRoleById}
            className="py-[1em] px-[1em] bg-[#AF1515] rounded-sm flex-grow w-full hover:opacity-90 transition-opacity duration-100"
          >
            Delete Role
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteRole;
