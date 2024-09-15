import HeaderBox from "@/components/header-box";

const Home = async () => {
  const loggedIn = { firstName: "Hassan" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          {/* Total Balance Box Component Here */}
        </header>

        {/* Recent Transitions Component Here */}
      </div>

      {/* Right Sidebar Component Here */}
    </section>
  );
};

export default Home;
