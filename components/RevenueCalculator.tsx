'use client';

import { useState } from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

export default function RevenueCalculator() {
  const [streams, setStreams] = useState({
    youtube: 0,
    affiliates: 0,
    digitalProducts: 0,
    courses: 0,
    sponsorships: 0,
    services: 0
  });

  const [timeframe, setTimeframe] = useState(1);

  const monthlyTotal = Object.values(streams).reduce((a, b) => a + b, 0);
  const yearlyTotal = monthlyTotal * 12;
  const projectedGrowth = monthlyTotal * Math.pow(1.15, timeframe);

  const addStream = (key: keyof typeof streams, amount: number) => {
    setStreams(prev => ({ ...prev, [key]: prev[key] + amount }));
  };

  const presets = {
    beginner: {
      youtube: 200,
      affiliates: 500,
      digitalProducts: 300,
      courses: 0,
      sponsorships: 0,
      services: 500
    },
    intermediate: {
      youtube: 1000,
      affiliates: 2000,
      digitalProducts: 1500,
      courses: 1000,
      sponsorships: 500,
      services: 2000
    },
    advanced: {
      youtube: 5000,
      affiliates: 8000,
      digitalProducts: 5000,
      courses: 4000,
      sponsorships: 3000,
      services: 5000
    }
  };

  const loadPreset = (preset: keyof typeof presets) => {
    setStreams(presets[preset]);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-accent mb-4">
        💰 REVENUE PROJECTIONS CALCULATOR
      </h2>

      {/* Presets */}
      <div className="terminal-border p-4 bg-terminal-bg/50">
        <div className="text-sm text-terminal-dim mb-3">LOAD PRESET:</div>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => loadPreset('beginner')}
            className="terminal-border px-3 py-2 text-xs hover:bg-terminal-text/10"
          >
            BEGINNER<br/>($1.5K/mo)
          </button>
          <button
            onClick={() => loadPreset('intermediate')}
            className="terminal-border px-3 py-2 text-xs hover:bg-terminal-text/10"
          >
            INTERMEDIATE<br/>($8K/mo)
          </button>
          <button
            onClick={() => loadPreset('advanced')}
            className="terminal-border px-3 py-2 text-xs hover:bg-terminal-text/10"
          >
            ADVANCED<br/>($30K/mo)
          </button>
        </div>
      </div>

      {/* Income Streams Input */}
      <div className="terminal-border p-4 space-y-3">
        <div className="text-sm font-bold text-terminal-accent mb-3">CONFIGURE INCOME STREAMS:</div>

        {[
          { key: 'youtube', label: 'YouTube Ad Revenue', icon: '📺' },
          { key: 'affiliates', label: 'Affiliate Commissions', icon: '🔗' },
          { key: 'digitalProducts', label: 'Digital Products', icon: '📦' },
          { key: 'courses', label: 'Course Sales', icon: '🎓' },
          { key: 'sponsorships', label: 'Sponsorships', icon: '🤝' },
          { key: 'services', label: 'Services/Consulting', icon: '💼' }
        ].map(({ key, label, icon }) => (
          <div key={key} className="flex items-center gap-3">
            <span className="text-lg">{icon}</span>
            <div className="flex-1">
              <div className="text-xs text-terminal-dim mb-1">{label}</div>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={streams[key as keyof typeof streams]}
                  onChange={(e) => setStreams(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                  className="terminal-border bg-terminal-bg px-3 py-1 w-32 text-sm"
                  placeholder="0"
                />
                <div className="flex gap-1">
                  {[100, 500, 1000].map(amt => (
                    <button
                      key={amt}
                      onClick={() => addStream(key as keyof typeof streams, amt)}
                      className="terminal-border px-2 py-1 text-xs hover:bg-terminal-text/10"
                    >
                      +${amt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-right min-w-[80px]">
              <div className="text-sm font-bold text-terminal-accent">
                ${streams[key as keyof typeof streams].toLocaleString()}
              </div>
              <div className="text-xs text-terminal-dim">/month</div>
            </div>
          </div>
        ))}
      </div>

      {/* Current Totals */}
      <div className="grid grid-cols-2 gap-3">
        <div className="terminal-border p-4 bg-terminal-accent/10">
          <div className="text-xs text-terminal-dim mb-1">MONTHLY REVENUE</div>
          <div className="text-3xl font-bold text-terminal-accent">
            ${monthlyTotal.toLocaleString()}
          </div>
          <div className="text-xs mt-2 text-terminal-dim">
            {monthlyTotal >= 10000 ? '🔥 FIVE FIGURES' : monthlyTotal >= 5000 ? '💪 STRONG' : monthlyTotal >= 1000 ? '✅ VIABLE' : '🌱 STARTING'}
          </div>
        </div>

        <div className="terminal-border p-4 bg-terminal-text/5">
          <div className="text-xs text-terminal-dim mb-1">ANNUAL REVENUE</div>
          <div className="text-3xl font-bold text-terminal-text">
            ${yearlyTotal.toLocaleString()}
          </div>
          <div className="text-xs mt-2 text-terminal-dim">
            Before taxes & expenses
          </div>
        </div>
      </div>

      {/* Growth Projections */}
      <div className="terminal-border p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-terminal-accent" />
          <span className="font-bold text-terminal-accent">GROWTH PROJECTIONS (15% monthly)</span>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center">
            <span className="text-terminal-dim">Timeframe (months):</span>
            <input
              type="range"
              min="1"
              max="12"
              value={timeframe}
              onChange={(e) => setTimeframe(Number(e.target.value))}
              className="w-48"
            />
            <span className="font-bold">{timeframe} mo</span>
          </div>

          <div className="terminal-border p-3 bg-terminal-bg mt-3">
            <div className="text-xs text-terminal-dim mb-2">PROJECTED IN {timeframe} MONTHS:</div>
            <div className="text-2xl font-bold text-terminal-warning">
              ${Math.round(projectedGrowth).toLocaleString()}/mo
            </div>
            <div className="text-xs mt-1 text-terminal-dim">
              {Math.round(((projectedGrowth - monthlyTotal) / monthlyTotal) * 100)}% increase
            </div>
          </div>
        </div>
      </div>

      {/* Breakdown by Stream */}
      <div className="terminal-border p-4">
        <div className="text-sm font-bold text-terminal-accent mb-3">REVENUE BREAKDOWN:</div>
        <div className="space-y-2">
          {Object.entries(streams)
            .sort(([, a], [, b]) => b - a)
            .filter(([, value]) => value > 0)
            .map(([key, value]) => {
              const percentage = monthlyTotal > 0 ? (value / monthlyTotal) * 100 : 0;
              return (
                <div key={key} className="flex items-center gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      <span className="text-terminal-accent">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="terminal-border h-2 bg-terminal-bg">
                      <div
                        className="bg-terminal-accent h-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="text-right min-w-[80px] text-sm font-bold">
                    ${value.toLocaleString()}
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Action Plan */}
      {monthlyTotal > 0 && (
        <div className="terminal-border p-4 bg-terminal-text/5">
          <div className="text-sm font-bold mb-3">💡 OPTIMIZATION RECOMMENDATIONS:</div>
          <div className="space-y-2 text-xs">
            {monthlyTotal < 1000 && (
              <div className="text-terminal-warning">
                → Focus on 2-3 streams maximum. Diversification comes later.
              </div>
            )}
            {streams.youtube > 0 && streams.youtube < 1000 && (
              <div>
                → YouTube: Create 3-5 videos/week for 90 days to hit monetization faster
              </div>
            )}
            {streams.digitalProducts > 0 && streams.digitalProducts < 2000 && (
              <div>
                → Digital Products: Launch 5-10 products, then double down on top 2 sellers
              </div>
            )}
            {monthlyTotal >= 5000 && (
              <div className="text-terminal-accent">
                → You're at $5K/mo. Time to hire a VA and systemize operations.
              </div>
            )}
            {monthlyTotal >= 10000 && (
              <div className="text-terminal-accent">
                → $10K/mo achieved. Scale winning streams 3x or diversify into adjacent niches.
              </div>
            )}
            <div className="mt-3 pt-3 border-t border-terminal-text/20">
              <strong>Next milestone:</strong> $
              {monthlyTotal < 1000 ? '1,000' : monthlyTotal < 5000 ? '5,000' : monthlyTotal < 10000 ? '10,000' : '20,000'}
              /mo
            </div>
          </div>
        </div>
      )}

      {/* Reset */}
      <button
        onClick={() => setStreams({
          youtube: 0,
          affiliates: 0,
          digitalProducts: 0,
          courses: 0,
          sponsorships: 0,
          services: 0
        })}
        className="terminal-border px-4 py-2 hover:bg-terminal-text/10 w-full text-sm"
      >
        RESET ALL
      </button>
    </div>
  );
}
