"use client";

import React from "react";

const PartyMode = ({ partyMode, setPartyMode }: { partyMode: boolean; setPartyMode: (mode: boolean) => void }) => {
  return (
    <button
      onClick={() => setPartyMode(!partyMode)}
      className={`mt-4 px-4 py-2 rounded text-white ${
        partyMode ? "bg-red-500" : "bg-purple-500"
      }`}
    >
      🎉 {partyMode ? "Disable" : "Enable"} Party Mode
    </button>
  );
};

export default PartyMode;
