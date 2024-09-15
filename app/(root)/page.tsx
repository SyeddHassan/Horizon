import HeaderBox from "@/components/header-box";
import TotalBalanceBox from "@/components/total-balance-box";
import RightSidebar from "@/components/right-sidebar";

const Home = async () => {
  const loggedIn = {
    firstName: "Hassan",
    lastName: "Shah",
    email: "syeddhassanali@gmail.com",
  };

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

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1434.98 }, { currentBalance: 12.11 }]}
      />
    </section>
  );
};

export default Home;
