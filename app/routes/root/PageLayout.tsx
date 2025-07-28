import { useNavigate } from "react-router";
import { logoutUser } from "~/appwrite/auth";

const PageLayout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logoutUser();
    navigate("/sign-in");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="p-4 flex  items-center justify-between bg-amber-200">
        <button
          type="button"
          onClick={() => navigate("/dashboard")}
          className="bg-teal-500 text-white px-4 py-2 rounded-2xl cursor-pointer"
        >
          Dashboard
        </button>
        <button onClick={handleLogout} className="cursor-pointer">
          <img
            src="/assets/icons/logout.svg"
            alt="logout"
            className="size-6 "
          />
        </button>
      </header>
    </div>
  );
};

export default PageLayout;
