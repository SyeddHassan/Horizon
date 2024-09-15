import React from "react";

const MyBanks = async () => {
  return (
    <section className="flex">
      <div className="my-banks">
        {/* Header Box Component Here */}
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex flex-wrap gap-6">
            {/* Bank Cards Component Here*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
