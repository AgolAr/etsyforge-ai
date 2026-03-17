"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Palette, Rocket, ChevronRight, Star } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gradient">EtsyForge AI</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-slate-300 hover:text-white transition-colors">Features</Link>
              <Link href="#pricing" className="text-sm text-slate-300 hover:text-white transition-colors">Pricing</Link>
              <Link href="#testimonials" className="text-sm text-slate-300 hover:text-white transition-colors">Testimonials</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm text-slate-300 hover:text-white transition-colors">Sign In</Link>
              <Link href="/signup" className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-hover mb-8"
            >
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-slate-300">Now with AI Design Studio</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">Create Digital Products</span>
              <br />
              <span className="text-gradient">with AI Magic</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10">
              The AI operating system for Etsy sellers. Generate ideas, design planners & printables, 
              optimize listings, and scale your digital product business.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/signup" className="group px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 text-white font-semibold text-lg hover:opacity-90 transition-all flex items-center gap-2 glow">
                Start Creating Free
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#demo" className="px-8 py-4 rounded-xl glass glass-hover text-white font-semibold text-lg flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Watch Demo
              </Link>
            </div>

            <p className="mt-6 text-sm text-slate-500">No credit card required. Free plan available.</p>
          </motion.div>

          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 relative"
          >
            <div className="relative rounded-2xl overflow-hidden glass glow">
              <div className="aspect-[16/9] bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                    <Palette className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-slate-400">AI Design Studio Preview</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Everything You Need to <span className="text-gradient">Scale</span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              From idea generation to Etsy listing, EtsyForge AI handles the entire workflow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glass glass-hover group"
              >
                <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, <span className="text-gradient">Transparent</span> Pricing
            </h2>
            <p className="text-slate-400">Start free, scale as you grow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-8 rounded-2xl ${plan.popular ? 'glass glow border-indigo-500/50' : 'glass'} flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-slate-300 text-sm">
                      <Rocket className="w-4 h-4 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.ctaLink}
                  className={`w-full py-3 rounded-xl text-center font-medium transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:opacity-90'
                      : 'glass glass-hover text-white'
                  }`}
                >
                  {plan.ctaText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">EtsyForge AI</span>
            </div>
            <p className="text-slate-500 text-sm">
              © 2025 EtsyForge AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "AI Idea Lab",
    description: "Generate winning product ideas based on trends, competition, and your niche.",
    icon: Sparkles,
    bgColor: "bg-indigo-500/20",
    iconColor: "text-indigo-400",
  },
  {
    title: "Design Studio",
    description: "Canva-style editor with AI-powered design tools and templates.",
    icon: Palette,
    bgColor: "bg-purple-500/20",
    iconColor: "text-purple-400",
  },
  {
    title: "Listing Optimizer",
    description: "Auto-generate SEO titles, tags, and descriptions that rank on Etsy.",
    icon: Rocket,
    bgColor: "bg-emerald-500/20",
    iconColor: "text-emerald-400",
  },
  {
    title: "Asset Library",
    description: "Organize all your designs, fonts, and brand assets in one place.",
    icon: Zap,
    bgColor: "bg-yellow-500/20",
    iconColor: "text-yellow-400",
  },
  {
    title: "Brand Kit",
    description: "Store logos, colors, and fonts for consistent brand identity.",
    icon: Star,
    bgColor: "bg-pink-500/20",
    iconColor: "text-pink-400",
  },
  {
    title: "Etsy Export",
    description: "Download ready-to-list product packs with optimized files.",
    icon: ChevronRight,
    bgColor: "bg-cyan-500/20",
    iconColor: "text-cyan-400",
  },
];

const pricingPlans = [
  {
    name: "Free",
    price: "£0",
    period: "/mo",
    features: [
      "3 projects",
      "10 AI generations",
      "Basic templates",
      "100MB storage",
    ],
    ctaText: "Get Started",
    ctaLink: "/signup",
    popular: false,
  },
  {
    name: "Creator",
    price: "£29",
    period: "/mo",
    features: [
      "Unlimited projects",
      "100 AI generations",
      "All templates",
      "10GB storage",
      "Priority support",
    ],
    ctaText: "Start Creating",
    ctaLink: "/signup?plan=creator",
    popular: true,
  },
  {
    name: "Pro",
    price: "£79",
    period: "/mo",
    features: [
      "Everything in Creator",
      "Unlimited AI generations",
      "50GB storage",
      "API access",
      "Team collaboration",
    ],
    ctaText: "Go Pro",
    ctaLink: "/signup?plan=pro",
    popular: false,
  },
];