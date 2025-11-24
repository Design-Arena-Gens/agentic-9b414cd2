'use client';

import { useState } from 'react';
import { Terminal, DollarSign, TrendingUp, Zap, FileText, Video, Code, Database } from 'lucide-react';
import MissionGenerator from '@/components/MissionGenerator';
import ContentEngine from '@/components/ContentEngine';
import RevenueCalculator from '@/components/RevenueCalculator';
import AutomationHub from '@/components/AutomationHub';

export default function Home() {
  const [activeModule, setActiveModule] = useState<string>('mission');

  return (
    <main className="min-h-screen p-4 scanline">
      {/* Header */}
      <div className="terminal-border p-4 mb-4 bg-terminal-bg/90">
        <div className="flex items-center gap-3 mb-2">
          <Terminal className="w-8 h-8 terminal-glow" />
          <h1 className="text-2xl font-bold terminal-glow">CAPITALFLOW ERP v1.0</h1>
        </div>
        <p className="text-terminal-dim">[ PASSIVE INCOME OS ] — Revenue Stream Architect</p>
        <div className="mt-2 text-sm">
          <span className="text-terminal-accent">STATUS:</span> ONLINE |
          <span className="text-terminal-accent"> MODE:</span> INCOME_GENERATION |
          <span className="text-terminal-accent"> STREAMS:</span> PARALLEL
        </div>
      </div>

      {/* Module Selector */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[
          { id: 'mission', label: 'MISSION GEN', icon: Zap },
          { id: 'content', label: 'CONTENT ENGINE', icon: FileText },
          { id: 'revenue', label: 'REVENUE CALC', icon: DollarSign },
          { id: 'automation', label: 'AUTOMATION', icon: Code }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveModule(id)}
            className={`terminal-border p-4 transition-all hover:bg-terminal-text/10 ${
              activeModule === id ? 'bg-terminal-text/20 text-terminal-accent' : ''
            }`}
          >
            <Icon className="w-6 h-6 mx-auto mb-2" />
            <div className="text-xs">{label}</div>
          </button>
        ))}
      </div>

      {/* Active Module Display */}
      <div className="terminal-border p-6 bg-terminal-bg/90">
        {activeModule === 'mission' && <MissionGenerator />}
        {activeModule === 'content' && <ContentEngine />}
        {activeModule === 'revenue' && <RevenueCalculator />}
        {activeModule === 'automation' && <AutomationHub />}
      </div>

      {/* Footer Stats */}
      <div className="mt-4 terminal-border p-3 bg-terminal-bg/90 text-xs">
        <div className="flex justify-between">
          <span>SYSTEM: OPERATIONAL</span>
          <span>MODULES: 8/8 ACTIVE</span>
          <span className="blink">█</span>
        </div>
      </div>
    </main>
  );
}
