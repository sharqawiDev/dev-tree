import { useUserStore } from "@/store";
const Home = () => {
  const { logout } = useUserStore();
  return (
    <>
      <button
        onClick={() => {
          logout(() => alert("logout successful"));
        }}
      >
        logout
      </button>
    </>
  );
};

export default Home;
