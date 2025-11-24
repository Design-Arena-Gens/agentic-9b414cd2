'use client';

import { useState } from 'react';
import { FileText, Video, Calendar, Copy } from 'lucide-react';

export default function ContentEngine() {
  const [contentType, setContentType] = useState<'blog' | 'youtube' | 'shorts' | 'calendar'>('blog');
  const [niche, setNiche] = useState('');
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const blogTemplates = {
    tech: {
      title: '10 AI Tools That Will 10x Your Productivity in 2025',
      seoKeywords: ['AI productivity tools', 'automation software 2025', 'best AI apps'],
      content: `# 10 AI Tools That Will 10x Your Productivity in 2025

**Stop wasting time on repetitive tasks.** These AI-powered tools will automate your workflow and reclaim hours every day.

## 1. ChatGPT + Custom GPTs
Transform your writing, coding, and research. Create custom GPTs for your specific workflows.
- **Use case:** Draft emails, debug code, research competitors
- **Cost:** $20/mo
- **ROI:** 5-10 hours/week saved

## 2. Notion AI
Your second brain, now with AI superpowers. Auto-summarize notes, generate content, translate.
- **Use case:** Meeting notes → action items instantly
- **Cost:** $10/mo
- **ROI:** 3-5 hours/week saved

## 3. Midjourney / Stable Diffusion
Generate professional graphics without design skills.
- **Use case:** Blog headers, social media, presentations
- **Cost:** $10-30/mo
- **ROI:** $500+/mo saved on designers

## 4. Descript
Edit video by editing text. Remove filler words with one click.
- **Use case:** Podcast editing, video content
- **Cost:** $24/mo
- **ROI:** 10+ hours/week saved

## 5. Zapier / Make
Connect all your apps. Automate anything between 5,000+ services.
- **Use case:** Auto-save emails to Notion, social media scheduling
- **Cost:** $20-50/mo
- **ROI:** 5-8 hours/week saved

## 6. Copy.ai / Jasper
Generate marketing copy, emails, ads in seconds.
- **Use case:** Product descriptions, ad copy, social posts
- **Cost:** $36-49/mo
- **ROI:** 4-6 hours/week saved

## 7. Otter.ai
Transcribe meetings and calls automatically with AI summaries.
- **Use case:** Never take meeting notes again
- **Cost:** $10-20/mo
- **ROI:** 3-4 hours/week saved

## 8. Grammarly
AI writing assistant that makes you sound professional.
- **Use case:** Error-free emails, docs, messages
- **Cost:** $12/mo
- **ROI:** Credibility + 2 hours/week saved

## 9. Mem / Reflect
AI note-taking that surfaces relevant info automatically.
- **Use case:** Research, personal knowledge management
- **Cost:** $8-10/mo
- **ROI:** 2-3 hours/week saved

## 10. GitHub Copilot
AI pair programmer that writes code with you.
- **Use case:** Coding, debugging, boilerplate generation
- **Cost:** $10/mo
- **ROI:** 10+ hours/week saved (for developers)

---

## The Bottom Line
**Total investment:** ~$150-250/mo
**Total time saved:** 30-50 hours/month
**Your hourly value:** If you value your time at $50/hr, that's $1,500-2,500/mo in reclaimed productivity.

**Action Steps:**
1. Start with free trials of 3 tools this week
2. Track time saved with a simple spreadsheet
3. Double down on highest-ROI tools
4. Automate the automation (create workflows)

*Which tool are you trying first? Drop a comment below.*

---
**MONETIZATION HOOKS:**
- Affiliate links for each tool (10-30% commission)
- Lead magnet: "Ultimate AI Productivity Stack" PDF
- Upsell: Paid course on AI automation workflows`,
      estimatedTraffic: '2K-5K visits/mo',
      monetizationPotential: '$100-500/mo'
    },
    finance: {
      title: '7 Passive Income Streams You Can Start With $500',
      seoKeywords: ['passive income ideas', 'side hustles 2025', 'make money online'],
      content: `# 7 Passive Income Streams You Can Start With $500

**Financial freedom isn't about working harder—it's about making your money work for you.**

Here are 7 proven passive income streams you can launch with just $500.

## 1. Dividend Stocks & ETFs
Invest in dividend-paying stocks for quarterly income.
- **Initial investment:** $500
- **Expected return:** 3-6% annually ($15-30/year to start)
- **Platform:** Robinhood, Fidelity, M1 Finance
- **Time commitment:** 1 hour setup, quarterly reviews

**Best dividend ETFs:** SCHD, VYM, JEPI

## 2. High-Yield Savings & Treasury Bonds
The safest passive income. Park cash in high-yield accounts.
- **Initial investment:** $500
- **Expected return:** 4-5% APY ($20-25/year)
- **Platform:** Marcus, Ally Bank, Treasury Direct
- **Time commitment:** 30 minutes setup

## 3. Printables on Etsy
Create digital products (planners, templates) and sell on repeat.
- **Initial investment:** $100 (Canva Pro + samples)
- **Expected return:** $200-2,000/mo within 3 months
- **Platform:** Etsy, Gumroad
- **Time commitment:** 20 hours upfront, 2 hours/week maintenance

**Pro tip:** Find top sellers, improve them, undercut pricing.

## 4. Affiliate Marketing Blog
Write product reviews and earn commissions.
- **Initial investment:** $50-150 (domain + hosting)
- **Expected return:** $500-5,000/mo (months 6-12)
- **Platform:** WordPress, Webflow
- **Time commitment:** 10 hours/week for 3 months, then 2 hours/week

**Best niches:** Tech, finance, health, productivity tools.

## 5. Create a Mini-Course
Package your expertise into a $50-200 course.
- **Initial investment:** $100 (tools + hosting)
- **Expected return:** $500-3,000/mo
- **Platform:** Gumroad, Teachable, Udemy
- **Time commitment:** 40 hours upfront, 1 hour/week updates

**Quick start:** Record 5-10 video lessons, create worksheets, sell.

## 6. Stock Photos/Videos
License your photos on multiple platforms.
- **Initial investment:** $200 (if you need a camera; phone works too)
- **Expected return:** $50-500/mo
- **Platform:** Shutterstock, Adobe Stock, Pond5
- **Time commitment:** 10 hours/week shooting, uploading

**Best sellers:** Business, tech, lifestyle, nature.

## 7. Automated Shopify Store
Dropshipping or print-on-demand with zero inventory.
- **Initial investment:** $200-400 (Shopify + ads)
- **Expected return:** $500-5,000/mo
- **Platform:** Shopify + Printful/Spocket
- **Time commitment:** 20 hours setup, 5 hours/week management

**Pro tip:** Use TikTok organic traffic instead of paid ads.

---

## Action Plan: Deploy Your $500

**Week 1:** Pick 2 streams that match your skills
**Week 2:** Set up accounts and create first assets
**Week 3:** Launch and drive initial traffic
**Week 4:** Analyze results and double down on winners

**The 90-Day Goal:** Turn $500 into $500-1,000/mo in passive income.

*Which stream are you starting with? Comment below!*

---
**MONETIZATION:**
- Affiliate links for platforms (Etsy, Shopify, hosting)
- Lead magnet: "$500 to $5K Passive Income Playbook"
- Upsell: 1-on-1 coaching or mastermind`,
      estimatedTraffic: '5K-10K visits/mo',
      monetizationPotential: '$300-1,500/mo'
    }
  };

  const youtubeScripts = {
    tech: {
      title: 'I Automated My Entire Business With AI (Here\'s How)',
      hook: 'What if you could run a 6-figure business working 10 hours a week?',
      script: `[HOOK - First 3 seconds]
"I just made $10,000 this month working 10 hours a week. Here's the AI automation stack that made it possible."

[INTRO - 3-10 seconds]
"A year ago, I was working 60-hour weeks. Today, AI handles 90% of my business. Let me show you exactly how."

[MAIN CONTENT - 90 seconds]

**Automation 1: Content Generation**
"I use ChatGPT + Zapier to write all my blog posts. I feed it my outline, it drafts the post, auto-publishes to WordPress. Zero human effort."

**Automation 2: Social Media**
"Buffer + DALL-E creates and schedules 30 days of posts. I spend 1 hour per month on social media."

**Automation 3: Email Marketing**
"ActiveCampaign sends behavior-triggered emails. Someone visits my site? Auto-enrolled in my funnel."

**Automation 4: Customer Service**
"Intercom AI chatbot handles 80% of support tickets. Only escalates complex issues."

**Automation 5: Sales & Outreach**
"Instantly.ai sends personalized cold emails at scale. 500 emails/day, 5% reply rate."

[RESULTS]
"Time saved: 40 hours/week
Revenue increased: 200%
Stress levels: Down 90%"

[CALL TO ACTION]
"Want my complete AI automation playbook? Link in description. And subscribe—I'm posting my entire business system this month."

[CLOSING]
"Drop a comment if you want me to break down any of these tools in detail. See you in the next one."`,
      estimatedViews: '50K-200K',
      estimatedRevenue: '$100-800 (ad revenue + affiliate)'
    },
    finance: {
      title: 'I Make $5,000/Month Doing Nothing (Passive Income Breakdown)',
      hook: 'This passive income stream makes me $5K while I sleep',
      script: `[HOOK]
"I just checked my phone and made $247 while eating breakfast. Here's how passive income actually works."

[INTRO]
"Forget the BS gurus. I'm showing you my actual income streams, real numbers, and how long each took to build."

[INCOME STREAM 1: Digital Products - $2,000/mo]
"I sell Notion templates and spreadsheets. Created them once 8 months ago. Gumroad handles everything."
- Time to build: 40 hours
- Monthly effort now: 2 hours
- Best seller: Budget tracker ($19, 100 sales/mo)

[INCOME STREAM 2: Affiliate Marketing - $1,500/mo]
"I wrote 20 blog posts reviewing software tools. Amazon Associates + ShareASale."
- Time to build: 60 hours
- Monthly effort now: 0 hours
- Best performer: "Best project management tools" post

[INCOME STREAM 3: YouTube Ad Revenue - $800/mo]
"My videos get 100K views/month. YouTube pays me automatically."
- Time to build: 6 months of weekly uploads
- Monthly effort now: 4 videos (8 hours)
- CPM: $8-12

[INCOME STREAM 4: Stock Dividends - $500/mo]
"$150K in dividend ETFs. Quarterly payments."
- Time to build: 3 years of saving/investing
- Monthly effort now: 0 hours
- Yield: 4% annually

[INCOME STREAM 5: Course Sales - $200/mo]
"Old course on Udemy. They handle marketing."
- Time to build: 80 hours (one time)
- Monthly effort now: 0 hours
- Price: $29, ~7 sales/mo

[THE TRUTH]
"This took 2 years to build. First year: $0. Second year: $1K/mo. This year: $5K/mo.
It's not fast, but it's real. And it compounds."

[ACTION STEPS]
1. Pick ONE stream
2. Give it 90 days of focused effort
3. Don't quit your job until you hit $2K/mo
4. Stack streams slowly

[CTA]
"Which stream should I deep dive next? Comment below. And grab my income tracker template—link below."`,
      estimatedViews: '100K-500K',
      estimatedRevenue: '$200-2,000'
    }
  };

  const generateContent = () => {
    if (contentType === 'blog') {
      const template = niche === 'tech' ? blogTemplates.tech : blogTemplates.finance;
      setGeneratedContent(template);
    } else if (contentType === 'youtube') {
      const script = niche === 'tech' ? youtubeScripts.tech : youtubeScripts.finance;
      setGeneratedContent(script);
    } else if (contentType === 'shorts') {
      setGeneratedContent({
        scripts: [
          {
            title: 'AI Tool That Saves 10 Hours/Week',
            script: '[0-3s] "This AI tool just saved me 10 hours this week"\n[3-8s] Shows ChatGPT automating email responses\n[8-15s] "Set it up in 5 minutes. Link in bio"\n[Hook: Time saved + instant value]'
          },
          {
            title: 'Side Hustle That Made $1K First Month',
            script: '[0-3s] "I made $1,000 my first month doing this"\n[3-10s] Show Etsy printables dashboard\n[10-15s] "Created 5 templates, Etsy did the rest. Tutorial coming"\n[Hook: Proof + curiosity]'
          },
          {
            title: '$0 to $100/Day Passive Income',
            script: '[0-3s] "$0 to $100/day in 60 days"\n[3-10s] Timeline showing growth chart\n[10-15s] "Started with free blog, added affiliates. Full guide in profile"\n[Hook: Transformation + timeline]'
          },
          {
            title: 'Why You\'re Broke (Money Mindset)',
            script: '[0-3s] "This is why you\'re broke"\n[3-8s] "You trade time for money. Rich people buy time with money"\n[8-15s] "Start here: automate one income source this month"\n[Hook: Provocative + solution]'
          },
          {
            title: 'Passive Income Tier List',
            script: '[0-3s] "Ranking passive income streams"\n[3-12s] Shows tier list: S-tier (digital products), A-tier (dividends), B-tier (real estate), F-tier (dropshipping)\n[12-15s] "What am I missing? Comment below"\n[Hook: Visual + debate]'
          }
        ]
      });
    } else if (contentType === 'calendar') {
      setGeneratedContent({
        weeks: [
          {
            week: 'Week 1',
            content: [
              'Mon: Blog post - "10 AI Tools for Productivity" + cross-post to Medium',
              'Wed: YouTube video - "I Automated My Business" + 3 shorts from video',
              'Fri: Twitter thread - "Passive income breakdown" + link to blog',
              'Daily: 2 shorts (TikTok, IG, YT)'
            ]
          },
          {
            week: 'Week 2',
            content: [
              'Mon: Blog post - "Side Hustles Under $100" + SEO optimization',
              'Wed: YouTube video - "$5K/mo passive income streams" + 3 shorts',
              'Fri: Email newsletter - "This Week in Income Hacking" + affiliate roundup',
              'Daily: 2 shorts + engage with comments'
            ]
          },
          {
            week: 'Week 3',
            content: [
              'Mon: Product launch - New Notion template + sales page',
              'Wed: YouTube video - "Notion template walkthrough" + demo',
              'Fri: Reddit AMA - r/passive_income + drive traffic to products',
              'Daily: 2 shorts promoting template'
            ]
          },
          {
            week: 'Week 4',
            content: [
              'Mon: Blog roundup - "Best posts of the month" + internal linking',
              'Wed: YouTube video - "Q&A: Your income questions answered"',
              'Fri: Analytics review + double down on top performers',
              'Weekend: Batch create next month\'s shorts (60 shorts = 10 hours)'
            ]
          }
        ]
      });
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-terminal-accent mb-4">
        📝 CONTENT CREATION ENGINE
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[
          { id: 'blog', label: 'BLOG POST', icon: FileText },
          { id: 'youtube', label: 'YT SCRIPT', icon: Video },
          { id: 'shorts', label: 'SHORTS (5X)', icon: Video },
          { id: 'calendar', label: '30-DAY CAL', icon: Calendar }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => { setContentType(id as any); setGeneratedContent(null); }}
            className={`terminal-border p-3 transition-all hover:bg-terminal-text/10 ${
              contentType === id ? 'bg-terminal-accent/20' : ''
            }`}
          >
            <Icon className="w-5 h-5 mx-auto mb-1" />
            <div className="text-xs">{label}</div>
          </button>
        ))}
      </div>

      {!generatedContent ? (
        <div className="terminal-border p-6 space-y-4">
          <div className="text-sm text-terminal-dim">SELECT NICHE:</div>
          <div className="flex gap-3">
            <button
              onClick={() => setNiche('tech')}
              className={`terminal-border px-6 py-3 ${niche === 'tech' ? 'bg-terminal-accent/20' : ''}`}
            >
              TECH / PRODUCTIVITY
            </button>
            <button
              onClick={() => setNiche('finance')}
              className={`terminal-border px-6 py-3 ${niche === 'finance' ? 'bg-terminal-accent/20' : ''}`}
            >
              FINANCE / PASSIVE INCOME
            </button>
          </div>

          {niche && (
            <button
              onClick={generateContent}
              className="terminal-border px-8 py-3 bg-terminal-text/10 hover:bg-terminal-text/20 w-full"
            >
              ⚡ GENERATE {contentType.toUpperCase()} CONTENT
            </button>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          {/* Blog Post */}
          {contentType === 'blog' && generatedContent.content && (
            <div className="terminal-border p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-lg font-bold text-terminal-accent">{generatedContent.title}</div>
                  <div className="text-xs text-terminal-dim mt-1">
                    EST. TRAFFIC: {generatedContent.estimatedTraffic} |
                    MONETIZATION: {generatedContent.monetizationPotential}
                  </div>
                </div>
                <button className="terminal-border px-3 py-1 text-xs hover:bg-terminal-text/10">
                  <Copy className="w-4 h-4" />
                </button>
              </div>

              <div className="terminal-border p-3 bg-terminal-bg">
                <div className="text-xs text-terminal-dim mb-2">SEO KEYWORDS:</div>
                <div className="flex flex-wrap gap-2">
                  {generatedContent.seoKeywords.map((kw: string, i: number) => (
                    <span key={i} className="text-xs terminal-border px-2 py-1">{kw}</span>
                  ))}
                </div>
              </div>

              <div className="terminal-border p-4 bg-terminal-bg max-h-96 overflow-y-auto text-xs whitespace-pre-wrap font-mono">
                {generatedContent.content}
              </div>

              <div className="flex gap-3">
                <button className="terminal-border px-4 py-2 hover:bg-terminal-text/10">
                  COPY TO CLIPBOARD
                </button>
                <button className="terminal-border px-4 py-2 hover:bg-terminal-text/10">
                  EXPORT .MD
                </button>
                <button
                  onClick={() => setGeneratedContent(null)}
                  className="terminal-border px-4 py-2 hover:bg-terminal-text/10"
                >
                  GENERATE NEW
                </button>
              </div>
            </div>
          )}

          {/* YouTube Script */}
          {contentType === 'youtube' && generatedContent.script && (
            <div className="terminal-border p-6 space-y-4">
              <div>
                <div className="text-lg font-bold text-terminal-accent">{generatedContent.title}</div>
                <div className="text-xs text-terminal-dim mt-1">
                  EST. VIEWS: {generatedContent.estimatedViews} |
                  EST. REVENUE: {generatedContent.estimatedRevenue}
                </div>
              </div>

              <div className="terminal-border p-3 bg-terminal-accent/10">
                <div className="text-xs font-bold mb-1">HOOK (FIRST 3 SEC):</div>
                <div className="text-sm">{generatedContent.hook}</div>
              </div>

              <div className="terminal-border p-4 bg-terminal-bg max-h-96 overflow-y-auto text-xs whitespace-pre-wrap">
                {generatedContent.script}
              </div>

              <div className="flex gap-3">
                <button className="terminal-border px-4 py-2">COPY SCRIPT</button>
                <button className="terminal-border px-4 py-2">EXPORT .TXT</button>
                <button onClick={() => setGeneratedContent(null)} className="terminal-border px-4 py-2">
                  GENERATE NEW
                </button>
              </div>
            </div>
          )}

          {/* Shorts */}
          {contentType === 'shorts' && generatedContent.scripts && (
            <div className="space-y-3">
              {generatedContent.scripts.map((short: any, i: number) => (
                <div key={i} className="terminal-border p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-terminal-accent text-sm">{short.title}</div>
                    <button className="text-xs terminal-border px-2 py-1">COPY</button>
                  </div>
                  <div className="text-xs whitespace-pre-wrap font-mono bg-terminal-bg p-3 terminal-border">
                    {short.script}
                  </div>
                </div>
              ))}
              <button
                onClick={() => setGeneratedContent(null)}
                className="terminal-border px-4 py-2 hover:bg-terminal-text/10 w-full"
              >
                GENERATE 5 MORE
              </button>
            </div>
          )}

          {/* Calendar */}
          {contentType === 'calendar' && generatedContent.weeks && (
            <div className="space-y-3">
              {generatedContent.weeks.map((week: any, i: number) => (
                <div key={i} className="terminal-border p-4">
                  <div className="font-bold text-terminal-accent mb-3">{week.week}</div>
                  <div className="space-y-2 text-xs">
                    {week.content.map((item: string, j: number) => (
                      <div key={j} className="pl-3 border-l-2 border-terminal-dim">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className="flex gap-3">
                <button className="terminal-border px-4 py-2 hover:bg-terminal-text/10 flex-1">
                  EXPORT CALENDAR
                </button>
                <button
                  onClick={() => setGeneratedContent(null)}
                  className="terminal-border px-4 py-2 hover:bg-terminal-text/10 flex-1"
                >
                  GENERATE NEW
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
