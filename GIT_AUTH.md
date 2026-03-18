# 🔐 Git Push Authentication

## Option 1: Use Personal Access Token (Recommended)

### Step 1: Create GitHub Token
1. Go to https://github.com/settings/tokens
2. Click **Generate new token (classic)**
3. Give it a name: "EtsyForge Deploy"
4. Select scopes: **repo** (full control of private repositories)
5. Click **Generate token**
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Configure Git with Token

Run this command (replace YOUR_TOKEN with the actual token):

```bash
cd /data/.openclaw/workspace-orion/projects/etsyforge-ai/code
git config --global --add safe.directory /data/.openclaw/workspace-orion/projects/etsyforge-ai/code
git remote set-url origin https://AgolAr:YOUR_TOKEN@github.com/AgolAr/etsyforge-ai.git
git push -u origin main
```

---

## Option 2: SSH Key (More Secure)

If you have SSH keys set up:

```bash
git remote set-url origin git@github.com:AgolAr/etsyforge-ai.git
git push -u origin main
```

---

## Option 3: Push from Local Machine

If the above doesn't work, push from your local computer:

```bash
# On your local machine
git clone https://github.com/AgolAr/etsyforge-ai.git
cd etsyforge-ai

# Copy all files from the server (use SCP or manually copy)
# Then:
git add .
git commit -m "Initial commit"
git push origin main
```

---

## 🚀 After Push: Deploy to Vercel

Once pushed, go to https://vercel.com/new and:
1. Import `AgolAr/etsyforge-ai`
2. Add environment variables
3. Deploy!

---

**Which option would you like to try?**
- Option 1 (Token) - easiest
- Option 2 (SSH) - if you have keys
- Option 3 (Local) - fallback