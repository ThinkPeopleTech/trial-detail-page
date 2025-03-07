import React from "react";
import { TrialHeader } from "./components/TrialHeader";
import { OverviewSection } from "./components/OverviewSection";
import { EligibilitySection } from "./components/EligibilitySection";
import { SitesSection } from "./components/SitesSection";
import { AIInsights } from "./components/AIInsights";
import { RightPanel } from "./components/RightPanel";
export function App() {
  const isPhysician = true; // This would normally come from auth context
  return <div className="flex w-full min-h-screen bg-gray-50">
      <div className="flex-1">
        <TrialHeader />
        <main className="max-w-7xl mx-auto py-6 px-6">
          <div className="space-y-6">
            <OverviewSection />
            <EligibilitySection />
            <SitesSection />
            {isPhysician && <AIInsights />}
          </div>
        </main>
      </div>
      <RightPanel />
    </div>;
}