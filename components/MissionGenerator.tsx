'use client';

import { useState } from 'react';
import { Target, Clock, DollarSign, Wrench } from 'lucide-react';

interface Mission {
  title: string;
  difficulty: string;
  timeToFirstDollar: string;
  potentialIncome: string;
  skills: string[];
  investment: string;
  steps: string[];
  quickWins: string[];
  scalingPath: string[];
}

export default function MissionGenerator() {
  const [incomeType, setIncomeType] = useState('');
  const [mission, setMission] = useState<Mission | null>(null);

  const missions: Record<string, Mission> = {
    'content-creation': {
      title: 'CONTENT MONETIZATION STREAM',
      difficulty: 'BEGINNER',
      timeToFirstDollar: '30-60 DAYS',
      potentialIncome: '$500-$5,000/mo',
      skills: ['Writing', 'SEO', 'Social Media'],
      investment: '$0-$50',
      steps: [
        '[ ] Pick niche: Tech, Finance, Health, or Productivity',
        '[ ] Create Medium + Substack accounts',
        '[ ] Generate 10 SEO-optimized blog posts',
        '[ ] Set up YouTube channel + shorts automation',
        '[ ] Enable monetization: Medium Partner, Substack paid, YT ads',
        '[ ] Cross-promote across platforms',
        '[ ] Schedule 30 days of content in advance',
        '[ ] Track analytics weekly and optimize top performers'
      ],
      quickWins: [
        'Republish existing content to Medium ($50-200/mo immediate)',
        'Create 5 viral-format shorts from blog posts',
        'Set up email capture for Substack ($5 paid tier)'
      ],
      scalingPath: [
        'Month 2: Add affiliate links to posts',
        'Month 3: Launch $10/mo premium tier',
        'Month 4: Outsource writing ($50/article)',
        'Month 6: Expand to 3 niches with writers',
        'Month 12: $5K/mo passive content empire'
      ]
    },
    'digital-products': {
      title: 'DIGITAL PRODUCT PIPELINE',
      difficulty: 'INTERMEDIATE',
      timeToFirstDollar: '14-30 DAYS',
      potentialIncome: '$1,000-$10,000/mo',
      skills: ['Design/Notion', 'Marketing', 'Sales Copy'],
      investment: '$100-$500',
      steps: [
        '[ ] Research trending digital products (Gumroad/Etsy top sellers)',
        '[ ] Create starter pack: Notion templates, spreadsheets, or guides',
        '[ ] Design premium versions with Canva/Figma',
        '[ ] Set up Gumroad + Lemon Squeezy storefronts',
        '[ ] Create lead magnet (free version) for email list',
        '[ ] Build landing page with Carrd or Framer',
        '[ ] Launch on ProductHunt + Twitter + Reddit',
        '[ ] Set up affiliate program (20% commission)'
      ],
      quickWins: [
        'Clone top-selling Notion template and improve it',
        'Bundle 3 products together at 50% discount for launch',
        'DM 50 micro-influencers for promotion trades'
      ],
      scalingPath: [
        'Week 2: Add upsells and bundles',
        'Month 1: Create product suite (5-10 products)',
        'Month 2: Set up automated email funnel',
        'Month 3: Partner with influencers for splits',
        'Month 6: Productize into SaaS or membership'
      ]
    },
    'affiliate-seo': {
      title: 'AFFILIATE SEO MACHINE',
      difficulty: 'INTERMEDIATE',
      timeToFirstDollar: '60-90 DAYS',
      potentialIncome: '$2,000-$20,000/mo',
      skills: ['SEO', 'Writing', 'WordPress/Webflow'],
      investment: '$50-$300',
      steps: [
        '[ ] Choose high-commission niche (software, hosting, finance)',
        '[ ] Register domain + set up WordPress/Webflow',
        '[ ] Keyword research: Find 50 low-competition buyer keywords',
        '[ ] Create 20 affiliate review/comparison articles',
        '[ ] Join affiliate programs: Amazon, ShareASale, Impact, CJ',
        '[ ] Build backlinks: Guest posts, HARO, forums',
        '[ ] Set up email popup with 10% discount lead magnet',
        '[ ] Monitor rankings and double down on winners'
      ],
      quickWins: [
        'Write "X vs Y" comparison posts (convert faster)',
        'Add affiliate links to existing blog/social profiles',
        'Create YouTube review videos linking to articles'
      ],
      scalingPath: [
        'Month 3: Publish 50 articles, rank for 100+ keywords',
        'Month 6: Outsource content ($30-50/article)',
        'Month 9: Add display ads (Mediavine/AdThrive)',
        'Month 12: Build email list to 10K, launch own products',
        'Year 2: $20K/mo from traffic + email + affiliates'
      ]
    },
    'automation-saas': {
      title: 'MICRO-SAAS AUTOMATION',
      difficulty: 'ADVANCED',
      timeToFirstDollar: '30-60 DAYS',
      potentialIncome: '$500-$50,000/mo',
      skills: ['Coding', 'No-Code Tools', 'Marketing'],
      investment: '$100-$1,000',
      steps: [
        '[ ] Identify pain point in niche you understand',
        '[ ] Build MVP with no-code: Bubble, Softr, or Glide',
        '[ ] Alternative: Code simple SaaS (Next.js + Supabase)',
        '[ ] Set up Stripe for subscriptions ($10-50/mo pricing)',
        '[ ] Create demo video + landing page',
        '[ ] Launch on ProductHunt, IndieHackers, HackerNews',
        '[ ] Set up lifecycle emails (onboarding, retention)',
        '[ ] Get first 10 paying customers manually (outreach)'
      ],
      quickWins: [
        'Offer lifetime deals for first 50 customers ($99-299)',
        'Create Chrome extension version for extra distribution',
        'Partner with complementary tools for integrations'
      ],
      scalingPath: [
        'Month 2: Reach $1K MRR (100 users at $10)',
        'Month 4: Add annual plans (20% discount)',
        'Month 6: Build API, allow integrations',
        'Month 9: Hire VA for support, you focus on growth',
        'Year 1: $10K+ MRR, consider acquisition offers'
      ]
    },
    'youtube-shorts': {
      title: 'SHORTS MONETIZATION BLITZ',
      difficulty: 'BEGINNER',
      timeToFirstDollar: '14-30 DAYS',
      potentialIncome: '$200-$3,000/mo',
      skills: ['Video Editing', 'Scripting', 'Thumbnails'],
      investment: '$0-$100',
      steps: [
        '[ ] Pick faceless niche: finance tips, life hacks, AI, motivation',
        '[ ] Set up YouTube channel with clear branding',
        '[ ] Create 30 shorts scripts (30-60 sec hooks)',
        '[ ] Use AI tools: ElevenLabs (voice), Canva (visuals)',
        '[ ] Post 2-3 shorts daily for 30 days',
        '[ ] Enable monetization after 1K subs + 10M views',
        '[ ] Add affiliate links + lead magnets in descriptions',
        '[ ] Repurpose to TikTok, IG Reels, Snapchat'
      ],
      quickWins: [
        'Use trending audio and formats for instant views',
        'Create "part 2" cliffhangers to boost watch time',
        'Comment on big channels to drive traffic to yours'
      ],
      scalingPath: [
        'Week 2: Batch-create 60 shorts in advance',
        'Month 1: Hit 1K subs, apply for monetization',
        'Month 2: Outsource editing to Fiverr ($5/short)',
        'Month 3: Scale to 5 shorts/day across platforms',
        'Month 6: Add long-form content for higher CPM'
      ]
    }
  };

  const generateMission = (type: string) => {
    setMission(missions[type] || null);
    setIncomeType(type);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-accent mb-4">
        ⚡ MISSION GENERATOR
      </h2>

      {!mission ? (
        <div className="space-y-4">
          <div className="text-sm text-terminal-dim mb-4">
            SELECT INCOME STREAM TO INITIALIZE MISSION PROTOCOL:
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {Object.entries(missions).map(([key, data]) => (
              <button
                key={key}
                onClick={() => generateMission(key)}
                className="terminal-border p-4 text-left hover:bg-terminal-text/10 transition-all"
              >
                <div className="font-bold text-terminal-accent">{data.title}</div>
                <div className="text-xs mt-2 space-y-1">
                  <div>DIFFICULTY: {data.difficulty}</div>
                  <div>TIME: {data.timeToFirstDollar}</div>
                  <div>POTENTIAL: {data.potentialIncome}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4 text-sm">
          {/* Mission Header */}
          <div className="terminal-border p-4 bg-terminal-text/5">
            <div className="text-xl font-bold text-terminal-accent mb-3">
              {mission.title}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div>
                <div className="text-terminal-dim">DIFFICULTY</div>
                <div className="font-bold">{mission.difficulty}</div>
              </div>
              <div>
                <Clock className="w-4 h-4 inline mr-1" />
                <span className="text-terminal-dim">TIME TO $</span>
                <div className="font-bold">{mission.timeToFirstDollar}</div>
              </div>
              <div>
                <DollarSign className="w-4 h-4 inline mr-1" />
                <span className="text-terminal-dim">POTENTIAL</span>
                <div className="font-bold">{mission.potentialIncome}</div>
              </div>
              <div>
                <Wrench className="w-4 h-4 inline mr-1" />
                <span className="text-terminal-dim">INVESTMENT</span>
                <div className="font-bold">{mission.investment}</div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="terminal-border p-4">
            <div className="text-terminal-accent mb-2">REQUIRED SKILLS:</div>
            <div className="flex flex-wrap gap-2">
              {mission.skills.map((skill, i) => (
                <span key={i} className="terminal-border px-3 py-1 text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Step-by-Step Plan */}
          <div className="terminal-border p-4">
            <div className="text-terminal-accent mb-3">EXECUTION PROTOCOL:</div>
            <div className="space-y-1">
              {mission.steps.map((step, i) => (
                <div key={i} className="text-xs font-mono">
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Quick Wins */}
          <div className="terminal-border p-4 bg-terminal-warning/10">
            <div className="text-terminal-warning mb-2">⚡ QUICK WINS:</div>
            <ul className="space-y-1 text-xs">
              {mission.quickWins.map((win, i) => (
                <li key={i}>→ {win}</li>
              ))}
            </ul>
          </div>

          {/* Scaling Path */}
          <div className="terminal-border p-4 bg-terminal-accent/10">
            <div className="text-terminal-accent mb-2">📈 SCALING PATH:</div>
            <div className="space-y-1 text-xs">
              {mission.scalingPath.map((step, i) => (
                <div key={i}>→ {step}</div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setMission(null)}
              className="terminal-border px-6 py-2 hover:bg-terminal-text/10"
            >
              ← BACK TO MISSIONS
            </button>
            <button
              className="terminal-border px-6 py-2 bg-terminal-accent/20 hover:bg-terminal-accent/30"
            >
              EXPORT MISSION FILE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
