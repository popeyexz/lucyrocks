# LUCY.ROCKS - Affiliate Sales System

## 🌐 Live Site
**URL:** https://455a652f.lucy-rocks.pages.dev
**Domain:** lucy.rocks (pending DNS propagation)

## 🤖 Automation
**Every 12 hours (11:19 PM IST):**
- Posts fresh products to Twitter @Popeyexzzzzz
- Checks Systeme.io for new leads
- Verifies site is live
- Logs activity

**Agent ID:** `034befeb-9033-44ee-9ac3-f3cc18367261`

## 📦 Commands

```bash
# Process Amazon links
python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py amazon <link1> <link2> <link3>

# Create digital product
python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py digital --name "Product" --price 29 --url "..."

# Deploy site
python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py deploy

# Check status
python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py check
```

## 🔑 APIs Connected
- ✅ Google AI (Gemini 2.5 Flash + Imagen)
- ✅ Systeme.io (Affiliate + Payments)
- ✅ Cloudflare (DNS + Pages)
- ✅ Twitter/X (@Popeyexzzzzz)

## 💰 Affiliate Tags
- Amazon: `?tag=lucyrocks-21`
- Systeme.io: `sa022320608285706b053d2048a5a52f8ed77a9d9a`

## 📊 Commission Rates (Amazon)
| Category | Rate |
|----------|------|
| Luxury Beauty, Books, Fine Jewelry | 8% |
| Home, Kitchen, Grocery | 5% |
| Electronics, PCs | 3% |
| Fashion | 4% |
| Toys, Video Games | 3% |

## 🚀 Quick Start

1. **Sell Amazon products:**
   ```bash
   python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py amazon https://amzn.to/xxx https://amzn.to/yyy
   ```

2. **Sell digital product (Notion template, PDF, etc):**
   ```bash
   python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py digital --name "Notion Life OS" --price 199 --url "https://notion.so/..."
   ```

3. **Check everything:**
   ```bash
   python3 /home/workspace/Skills/affiliate-bot/scripts/affiliate_sales.py check
   ```

## 📁 Files
- `/home/workspace/lucy.rocks/` - Website source
- `/home/workspace/Skills/affiliate-bot/` - Automation scripts
- `/home/workspace/affiliate-log.txt` - Activity log
