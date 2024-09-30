import React, { useEffect, useState } from "react";

import axiosInstance from "@/axios/axiosInstance";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner/Spinner";
import { Button } from "@/components/ui/button";
import { CiSearch } from "react-icons/ci";

import AddUserModal from "../users/components/AddUserModal";
import UserTable from "../users/components/UserTable";

const UsersPage = () => {
  const [users, setUsers] = useState([]); // Store all users
  const [allAdmins, setAllAdmins] = useState([]); // Store filtered admins
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); // Debounced search term
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  // Debounce searchTerm
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); // Update debounced search term after delay
    }, 500); // 500ms delay before executing search

    return () => clearTimeout(delayDebounceFn); // Cleanup the timeout
  }, [searchTerm]);

  useEffect(() => {
    getAllAdmins(currentPage, debouncedSearchTerm);
  }, [currentPage, debouncedSearchTerm]);

  // Fetch all admins with pagination and optional search term
  const getAllAdmins = async (page: number, search: string = "") => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/user?page=${page}&search=${search}&roleName=ADMIN`
      );
      setAllAdmins(response.data.data);
      setTotalPages(response.data.totalPages); // Assuming the API returns total pages
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const addUser = async (newUser: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    image: string;
  }): Promise<void> => {
    setShowModal(false);
  };

  const deleteUser = async (id: string) => {
    try {
      let response = await axiosInstance.delete(`/auth/${id}`);
      toast.success(response.data.message);
      getAllAdmins(currentPage, debouncedSearchTerm);
    } catch (error: any) {
      toast.error(error.response.data.message);
    }
  };

  const openEditModal = (user: any) => {
    setEditingUser(user);
    setShowModal(true);
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Render pagination buttons dynamically
  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <div
          key={i}
          className={`cursor-pointer font-medium px-[1em] py-[0.5em] rounded-sm ${
            i === currentPage ? "bg-[#00FFA1]" : "bg-white"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </div>
      );
    }
    return buttons;
  };

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <div className="font-primaryFont text-[24px] p-[3.5em] pb-[1.5em] flex flex-col backdrop-blur-md">
      <div className="pb-[2em] capitalize">
        <h1 className="font-bold text-[36px] leading-none">All users</h1>
        <p className="text-[12px]">Users/ all users</p>
      </div>

      <div className="flex-grow bg-black/40 border border-[#0D6D49] px-[2em] py-[1.2em] rounded-md">
        <div className="flex justify-between items-center pb-[1.2em] border-b border-b-[#0D6D49]">
          <h2 className="font-semibold capitalize">Users</h2>
          <div className="flex items-center text-[12px] gap-x-[1em]">
            <div className="border p-[0.75em] rounded-sm flex items-center gap-x-[0.75em]">
              <CiSearch className="text-[1.6em]" />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by username or email"
                className="bg-transparent outline-none border-s px-[1em] w-[38ch]"
              />
            </div>
            <button
              className="bg-[#00FFA1] font-bold text-black text-[11px] capitalize px-[2em] py-[1em] rounded hover:opacity-90 transition-opacity duration-100"
              onClick={() => {
                setEditingUser(null);
                setShowModal(true);
              }}
            >
              Add user
            </button>
          </div>
        </div>
        <UserTable
          users={allAdmins}
          deleteUser={deleteUser}
          openEditModal={openEditModal}
        />
      </div>

      {/* <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
          onClick={() => {
            setEditingUser(null);
            setShowModal(true);
          }}
        >
          Add User
        </button>
        Search Bar
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by username or email"
          className="border p-2 mb-4 w-3/4"
        />
      </div> */}
      {/* <UserTable
        users={allAdmins}
        deleteUser={deleteUser}
        openEditModal={openEditModal}
      /> */}
      {showModal && (
        <AddUserModal
          addUser={addUser}
          setShowModal={setShowModal}
          editingUser={editingUser}
          getAllAdmins={getAllAdmins}
        />
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between text-[15px] px-[4em] mt-[2em]">
        <div className="flex text-black text-center gap-x-[1em]">
          {renderPagination()}
        </div>
        <div className="flex gap-x-[1em]">
          <p className="font-medium px-[1em] py-[0.5em] bg-white text-black rounded-md min-w-[12ch] text-center">
            Selected: 0
          </p>
          <Button
            variant="secondary"
            className="font-medium w-[12ch] text-[1em] h-fit"
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            className="font-medium w-[12ch] text-[1em] h-fit"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
