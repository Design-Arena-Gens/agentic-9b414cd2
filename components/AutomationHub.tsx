'use client';

import { useState } from 'react';
import { Zap, Code, Link, CheckCircle } from 'lucide-react';

interface Automation {
  id: string;
  title: string;
  category: string;
  difficulty: string;
  timeSaved: string;
  tools: string[];
  setup: string[];
  code?: string;
  trigger: string;
  action: string;
}

export default function AutomationHub() {
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);

  const automations: Automation[] = [
    {
      id: 'blog-to-social',
      title: 'Auto-Post Blog → All Social Media',
      category: 'Content Distribution',
      difficulty: 'EASY',
      timeSaved: '5 hours/week',
      tools: ['Zapier', 'WordPress', 'Buffer'],
      trigger: 'New blog post published',
      action: 'Auto-create + schedule social posts',
      setup: [
        '1. Connect WordPress to Zapier',
        '2. Create Zap: WordPress (New Post) → Buffer (Create Post)',
        '3. Set up template: "New post: {{title}} {{url}}"',
        '4. Connect Twitter, LinkedIn, Facebook to Buffer',
        '5. Set Buffer to auto-schedule optimal times',
        '6. Test with draft post'
      ],
      code: `// Zapier Webhook Alternative (if using custom blog)
// Trigger this after publishing

const publishToSocial = async (blogPost) => {
  const bufferAPI = 'https://api.bufferapp.com/1/updates/create.json';
  const post = {
    text: \`New post: \${blogPost.title} \${blogPost.url}\`,
    profile_ids: ['twitter_id', 'linkedin_id'],
    access_token: process.env.BUFFER_TOKEN
  };

  await fetch(bufferAPI, {
    method: 'POST',
    body: JSON.stringify(post)
  });
};`
    },
    {
      id: 'email-leads',
      title: 'Auto-Capture Leads → Email Sequence',
      category: 'Lead Generation',
      difficulty: 'EASY',
      timeSaved: '10 hours/week',
      tools: ['ConvertKit', 'Zapier', 'Google Sheets'],
      trigger: 'Someone downloads lead magnet',
      action: 'Add to email sequence + CRM',
      setup: [
        '1. Create lead magnet landing page (Carrd/Typeform)',
        '2. Connect form to ConvertKit via Zapier',
        '3. Set up 7-day email sequence in ConvertKit',
        '4. Day 1: Welcome + deliver lead magnet',
        '5. Day 3: Value email (blog post/tip)',
        '6. Day 5: Social proof (testimonial/case study)',
        '7. Day 7: Pitch (product/service offer)',
        '8. Also log lead in Google Sheets for backup'
      ]
    },
    {
      id: 'youtube-repurpose',
      title: 'YouTube Video → 10 Content Pieces',
      category: 'Content Repurposing',
      difficulty: 'MEDIUM',
      timeSaved: '8 hours/week',
      tools: ['Descript', 'ChatGPT', 'Canva'],
      trigger: 'Upload YouTube video',
      action: 'Auto-generate blog, shorts, social posts',
      setup: [
        '1. Upload video to Descript for transcription',
        '2. Export transcript as .txt',
        '3. Feed to ChatGPT: "Turn this into a blog post"',
        '4. ChatGPT: "Extract 5 short quotes for social media"',
        '5. ChatGPT: "Create 3 short-form video scripts (60 sec)"',
        '6. Use Descript to auto-cut 3 shorts from video',
        '7. Design quote graphics in Canva (bulk create)',
        '8. Schedule everything in Buffer',
        'OUTPUT: 1 blog + 5 social posts + 3 shorts = 9 pieces'
      ],
      code: `// ChatGPT API automation
const repurposeVideo = async (transcript) => {
  const prompts = [
    "Turn this into a 1000-word SEO blog post",
    "Extract 5 tweetable quotes",
    "Create 3 YouTube shorts scripts (60 sec each)"
  ];

  const results = await Promise.all(
    prompts.map(prompt =>
      openai.chat.completions.create({
        model: "gpt-4",
        messages: [{
          role: "user",
          content: \`\${prompt}:\\n\\n\${transcript}\`
        }]
      })
    )
  );

  return {
    blog: results[0],
    quotes: results[1],
    shorts: results[2]
  };
};`
    },
    {
      id: 'affiliate-tracker',
      title: 'Track All Affiliate Commissions',
      category: 'Revenue Tracking',
      difficulty: 'MEDIUM',
      timeSaved: '3 hours/week',
      tools: ['Google Sheets', 'Zapier', 'Email Parser'],
      trigger: 'Affiliate commission email received',
      action: 'Log in master spreadsheet',
      setup: [
        '1. Create Google Sheet with columns: Date, Program, Amount, Product, Status',
        '2. Set up Email Parser (Zapier) to extract commission emails',
        '3. Parse emails from: Amazon, ShareASale, CJ, Impact, Gumroad',
        '4. Extract: amount, product, date',
        '5. Auto-log to Google Sheet',
        '6. Set up weekly summary email',
        '7. Create dashboard with charts (monthly trends)'
      ],
      code: `// Google Apps Script for auto-summary
function sendWeeklyReport() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Calculate this week's earnings
  const weekStart = new Date();
  weekStart.setDate(weekStart.getDate() - 7);

  const weeklyTotal = data
    .filter(row => new Date(row[0]) > weekStart)
    .reduce((sum, row) => sum + row[2], 0);

  MailApp.sendEmail({
    to: 'you@email.com',
    subject: \`Weekly Affiliate Report: $\${weeklyTotal}\`,
    body: \`You earned $\${weeklyTotal} in affiliate commissions this week!\`
  });
}`
    },
    {
      id: 'content-ideas',
      title: 'Auto-Generate Content Ideas from Trends',
      category: 'Content Strategy',
      difficulty: 'ADVANCED',
      timeSaved: '5 hours/week',
      tools: ['Google Trends API', 'Twitter API', 'Airtable'],
      trigger: 'Daily at 9 AM',
      action: 'Fetch trending topics → Generate ideas',
      setup: [
        '1. Set up Google Trends API (free)',
        '2. Set up Twitter API for trending hashtags',
        '3. Create Airtable base: Topic, Volume, Angle, Status',
        '4. Run daily script to fetch trends in your niche',
        '5. Use ChatGPT API to generate content angles',
        '6. Auto-populate Airtable with 10 ideas daily',
        '7. Review weekly and pick top 5 to create'
      ],
      code: `// Daily trend fetcher (Node.js)
const getTrends = async () => {
  const googleTrends = require('google-trends-api');
  const trends = await googleTrends.dailyTrends({
    geo: 'US',
    category: 'technology' // or your niche
  });

  const topics = JSON.parse(trends)
    .default.trendingSearchesDays[0]
    .trendingSearches
    .slice(0, 5);

  // Generate content angles
  const ideas = await Promise.all(
    topics.map(async (topic) => {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{
          role: "user",
          content: \`Generate 3 unique content angles for: \${topic.title.query}\`
        }]
      });
      return { topic: topic.title.query, angles: response.choices[0].message.content };
    })
  );

  // Save to Airtable
  await airtable('Content Ideas').create(ideas.map(i => ({
    fields: {
      Topic: i.topic,
      Angles: i.angles,
      Date: new Date().toISOString(),
      Status: 'To Review'
    }
  })));
};

// Run daily with cron job`
    },
    {
      id: 'product-launch',
      title: 'Auto Product Launch Sequence',
      category: 'Product Marketing',
      difficulty: 'ADVANCED',
      timeSaved: '20 hours per launch',
      tools: ['Gumroad', 'ConvertKit', 'Twitter API', 'Zapier'],
      trigger: 'New product created',
      action: 'Execute full launch sequence',
      setup: [
        '1. Create product in Gumroad',
        '2. Set up launch email sequence (5 emails over 7 days)',
        '3. Pre-schedule Twitter thread announcing launch',
        '4. Set up discount code for first 50 customers',
        '5. Create ProductHunt post (draft)',
        '6. Zapier: New sale → Thank you email + upsell',
        '7. Day 3: Email "halfway through launch" + testimonials',
        '8. Day 7: "Last chance" email',
        '9. Auto-generate sales report at end'
      ],
      code: `// Launch automation orchestrator
const executeLaunch = async (product) => {
  // 1. Send to email list
  await convertKit.sequences.subscribe({
    sequence_id: 'launch_sequence',
    email: 'subscribers',
    fields: { product_name: product.name, product_url: product.url }
  });

  // 2. Post to Twitter
  await twitter.tweets.create({
    text: \`🚀 Just launched: \${product.name}\\n\\n\${product.description}\\n\\nGet it here: \${product.url}\`
  });

  // 3. Schedule follow-ups
  const followUps = [
    { day: 3, message: "50% of early bird spots claimed!" },
    { day: 5, message: "New testimonials just in..." },
    { day: 7, message: "Last 24 hours for launch pricing!" }
  ];

  followUps.forEach(f => scheduleEmail(f.day, f.message));

  // 4. Track sales
  gumroad.webhooks.on('sale', (sale) => {
    logToSheet(sale);
    sendThankYou(sale.email);
    if (sale.count < 50) offerEarlyBirdBonus(sale.email);
  });
};`
    }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-accent mb-4">
        ⚡ AUTOMATION HUB
      </h2>

      {!selectedAutomation ? (
        <div className="space-y-3">
          <div className="text-sm text-terminal-dim mb-3">
            SELECT AUTOMATION TO DEPLOY:
          </div>

          {automations.map((automation) => (
            <button
              key={automation.id}
              onClick={() => setSelectedAutomation(automation)}
              className="w-full terminal-border p-4 text-left hover:bg-terminal-text/10 transition-all"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="font-bold text-terminal-accent">{automation.title}</div>
                <span className="text-xs terminal-border px-2 py-1">{automation.difficulty}</span>
              </div>
              <div className="text-xs space-y-1">
                <div className="text-terminal-dim">
                  CATEGORY: {automation.category} | TIME SAVED: {automation.timeSaved}
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {automation.tools.map((tool, i) => (
                    <span key={i} className="terminal-border px-2 py-0.5 text-xs bg-terminal-bg">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Header */}
          <div className="terminal-border p-4 bg-terminal-text/5">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="text-lg font-bold text-terminal-accent mb-1">
                  {selectedAutomation.title}
                </div>
                <div className="text-xs text-terminal-dim">
                  {selectedAutomation.category} • {selectedAutomation.difficulty}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-terminal-warning">
                  {selectedAutomation.timeSaved}
                </div>
                <div className="text-xs text-terminal-dim">saved per week</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="terminal-border p-2 bg-terminal-bg">
                <div className="text-terminal-dim mb-1">TRIGGER:</div>
                <div>{selectedAutomation.trigger}</div>
              </div>
              <div className="terminal-border p-2 bg-terminal-bg">
                <div className="text-terminal-dim mb-1">ACTION:</div>
                <div>{selectedAutomation.action}</div>
              </div>
            </div>
          </div>

          {/* Tools Required */}
          <div className="terminal-border p-4">
            <div className="flex items-center gap-2 mb-3">
              <Link className="w-4 h-4" />
              <span className="text-sm font-bold text-terminal-accent">TOOLS REQUIRED:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {selectedAutomation.tools.map((tool, i) => (
                <span key={i} className="terminal-border px-3 py-1 text-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Setup Instructions */}
          <div className="terminal-border p-4 bg-terminal-bg">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle className="w-4 h-4" />
              <span className="text-sm font-bold text-terminal-accent">SETUP INSTRUCTIONS:</span>
            </div>
            <div className="space-y-2">
              {selectedAutomation.setup.map((step, i) => (
                <div key={i} className="flex gap-3 text-xs">
                  <span className="text-terminal-dim">[ ]</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Code Sample */}
          {selectedAutomation.code && (
            <div className="terminal-border p-4">
              <div className="flex items-center gap-2 mb-3">
                <Code className="w-4 h-4" />
                <span className="text-sm font-bold text-terminal-accent">CODE SAMPLE:</span>
              </div>
              <div className="bg-terminal-bg p-4 terminal-border overflow-x-auto">
                <pre className="text-xs font-mono whitespace-pre-wrap">
                  {selectedAutomation.code}
                </pre>
              </div>
            </div>
          )}

          {/* Implementation Tips */}
          <div className="terminal-border p-4 bg-terminal-warning/10">
            <div className="text-sm font-bold text-terminal-warning mb-2">
              ⚡ IMPLEMENTATION TIPS:
            </div>
            <div className="space-y-1 text-xs">
              <div>→ Test with small data set first</div>
              <div>→ Set up error notifications (email/Slack)</div>
              <div>→ Monitor for 1 week before trusting fully</div>
              <div>→ Document your setup for troubleshooting</div>
              <div>→ Most automations pay for themselves in 1-2 weeks</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={() => setSelectedAutomation(null)}
              className="terminal-border px-6 py-2 hover:bg-terminal-text/10"
            >
              ← BACK
            </button>
            <button className="terminal-border px-6 py-2 bg-terminal-accent/20 hover:bg-terminal-accent/30 flex-1">
              EXPORT SETUP GUIDE
            </button>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      {!selectedAutomation && (
        <div className="terminal-border p-4 bg-terminal-bg text-xs">
          <div className="text-terminal-accent mb-2">AUTOMATION STATS:</div>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <div className="text-terminal-dim">TOTAL AUTOMATIONS:</div>
              <div className="font-bold text-lg">{automations.length}</div>
            </div>
            <div>
              <div className="text-terminal-dim">TOTAL TIME SAVED:</div>
              <div className="font-bold text-lg">51 hrs/wk</div>
            </div>
            <div>
              <div className="text-terminal-dim">VALUE:</div>
              <div className="font-bold text-lg">$2,550/mo</div>
            </div>
          </div>
          <div className="mt-3 text-terminal-dim">
            * Assuming $50/hr value of time
          </div>
        </div>
      )}
    </div>
  );
}
