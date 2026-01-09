import React from "react";

function VotingEligibility() {
  const age = 20; 

  return (
    <div>
      <h2>
        {age >= 18
          ? "You are eligible to vote."
          : "You are not eligible to vote."}
      </h2>
    </div>
  );
}

export default VotingEligibility;
