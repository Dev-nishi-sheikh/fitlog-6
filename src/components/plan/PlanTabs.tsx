"use client";

interface PlanTabsProps {
  activeTab: "plan" | "saved";
  onChange: (tab: "plan" | "saved") => void;
}

export default function PlanTabs({ activeTab, onChange }: PlanTabsProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-lg
        border
        border-white/10
        bg-[#0f1116]
        p-1
      "
    >
      {/* Today's Plan */}
      <button
        type="button"
        onClick={() => onChange("plan")}
        className={`
          rounded-md
          px-4
          py-2
          text-xs
          font-semibold
          transition
          ${
            activeTab === "plan"
              ? "bg-[#1a1d25] text-white shadow-sm"
              : "text-[#8490a5] hover:text-white"
          }
        `}
      >
        Today's Plan
      </button>

      {/* Saved */}
      <button
        type="button"
        onClick={() => onChange("saved")}
        className={`
          rounded-md
          px-4
          py-2
          text-xs
          font-semibold
          transition
          ${
            activeTab === "saved"
              ? "bg-[#1a1d25] text-white shadow-sm"
              : "text-[#8490a5] hover:text-white"
          }
        `}
      >
        Saved
      </button>
    </div>
  );
}
