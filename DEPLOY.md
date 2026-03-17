# 🚀 Deploy EtsyForge AI to Vercel

## ✅ Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `etsyforge-ai`
3. Make it **Public** or **Private**
4. **DO NOT** initialize with README (we already have one)
5. Click **Create repository**

## ✅ Step 2: Push Code to GitHub

Copy these commands and run in your terminal:

```bash
cd /data/.openclaw/workspace-orion/projects/etsyforge-ai/code

# Add your GitHub repo
git remote add origin https://github.com/YOUR_USERNAME/etsyforge-ai.git

# Push the code
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## ✅ Step 3: Deploy on Vercel

### Option A: Vercel Dashboard (Easiest)

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select `etsyforge-ai` from the list
4. Click **Import**

### Configure Project:
- **Framework Preset:** Next.js
- **Root Directory:** `./`
- **Build Command:** `next build`
- **Output Directory:** `.next`

### Add Environment Variables:

Click **Environment Variables** and add:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

Get your Clerk keys from: https://dashboard.clerk.dev

5. Click **Deploy**

## ✅ Step 4: Done!

Your app will be live at:
- `https://etsyforge-ai.vercel.app`
- Or your custom domain

## 🔄 Auto-Deploy

Every time you push to GitHub, Vercel will automatically redeploy!

```bash
# Make changes
git add .
git commit -m "Update feature"
git push

# Vercel auto-deploys! 🎉
```

## 🆘 Troubleshooting

### Build Fails?
- Check environment variables are set
- Check Clerk keys are correct
- View build logs in Vercel dashboard

### Auth Not Working?
- Verify Clerk keys in environment variables
- Check redirect URLs match your domain
- Enable the domain in Clerk dashboard

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Clerk Docs: https://clerk.dev/docs

---

**Your app is ready to deploy!** 🎉