import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";

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

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.96}
          />
        </header>

        {/* Recent Transitions Component Here */}
      </div>

      {/* Right Sidebar Component Here */}
    </section>
  );
};

export default Home;
