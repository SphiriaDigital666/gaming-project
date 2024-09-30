"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { RoleProvider } from "../../context/RoleContext";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import AllProducts from "./components/pages/products/AllProducts";
import AddNew from "./components/pages/products/AddNew";
import Categories from "./components/pages/products/Categories";
import Tags from "./components/pages/products/Tags";
import Brands from "./components/pages/products/Brands";
import Platforms from "./components/pages/products/Platforms";
import Customers from "../admin/components/pages/customers/Customers";
import AllUsers from "../admin/components/pages/users/AllUsers";
import RolesPage from "../admin/components/pages/users/Roles";
import Orders from "./components/pages/orders/Orders";
import Reviews from "./components/pages/reviews/Reviews";
import toast from "react-hot-toast";

const AdminPanel: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string>("");
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const router = useRouter();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.role.name === "ADMIN") {
        setIsAuthorized(true);
      } else {
        toast.error("You Are Not Admin");
        router.push("/"); // Redirect if not admin
      }
    } else {
      toast.error("You Are Not Admin");
      router.push("/sign-in"); // Redirect if no user found
    }
  }, [router]);

  const handleSelect = (content: string) => {
    setSelectedContent(content);
  };

  const renderContent = () => {
    switch (selectedContent) {
      case "dashboard":
        return <Dashboard />;

      case "all-products":
        return <AllProducts />;
      case "add-new":
        return <AddNew />;
      case "categories":
        return <Categories />;
      case "tags":
        return <Tags />;
      case "brands":
        return <Brands />;
      case "platforms":
        return <Platforms />;

      case "customers":
        return <Customers />;

      case "all-users":
        return <AllUsers />;
      case "roles":
        return <RolesPage />;

      case "orders":
        return <Orders />;

      case "reviews":
        return <Reviews />;

      default:
        return <Dashboard />;
    }
  };

  if (!isAuthorized) {
    // Optionally, return a loading spinner while checking the role
    return <div>Loading...</div>;
  }

  return (
    <RoleProvider>
      <div className="relative flex bg-[#0A0A0B] overflow-hidden before:w-[500px] before:h-[500px] before:absolute before:left-[150px] before:-bottom-[150px] before:bg-[#00FFA1] before:opacity-20 before:rounded-full before:blur-[100px] after:w-[500px] after:h-[500px] after:absolute after:-right-[150px] after:-top-[150px] after:bg-[#00FFA1] after:opacity-20 after:rounded-full after:blur-[100px]">
        <Sidebar onSelect={handleSelect} />
        <div className="flex-1 overflow-y-scroll z-10">{renderContent()}</div>
      </div>
    </RoleProvider>
  );
};

export default AdminPanel;
