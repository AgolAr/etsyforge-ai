"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  TrendingUp, 
  Image as ImageIcon, 
  Zap,
  ArrowRight,
  Clock,
  Star,
  Palette,
  FileText
} from "lucide-react";

export default function DashboardPage() {
  const { user, isLoaded } = useUser();

  // Show loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
          <span className="text-slate-400">Loading dashboard...</span>
        </div>
      </div>
    );
  }

  const stats = [
    { name: "Projects Created", value: "12", change: "+3", icon: Palette, color: "indigo" },
    { name: "AI Generations", value: "48", change: "+12", icon: Sparkles, color: "purple" },
    { name: "Assets Stored", value: "156", change: "+8", icon: ImageIcon, color: "emerald" },
    { name: "Credits Used", value: "64%", change: "of 100", icon: Zap, color: "yellow" },
  ];

  const recentProjects = [
    { id: 1, name: "Minimalist Weekly Planner", type: "Planner", status: "completed", date: "2 hours ago", thumbnail: "📝" },
    { id: 2, name: "Budget Tracker Workbook", type: "Workbook", status: "in_progress", date: "Yesterday", thumbnail: "💰" },
    { id: 3, name: "Wedding Invitation Suite", type: "Printable", status: "completed", date: "3 days ago", thumbnail: "💒" },
  ];

  const quickActions = [
    { name: "Create from Template", description: "Start with a proven design", icon: Palette, href: "/dashboard/templates", color: "indigo" },
    { name: "AI Idea Generator", description: "Get product ideas", icon: Sparkles, href: "/dashboard/ideas", color: "purple" },
    { name: "Optimize Listing", description: "Improve Etsy SEO", icon: FileText, href: "/dashboard/optimizer", color: "emerald" },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold text-white">
            Welcome back, {user?.firstName || "Creator"}!
          </h1>
          <p className="text-slate-400 mt-1">
            Ready to create something amazing today?
          </p>
        </div>
        <Link
          href="/dashboard/create"
          className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity glow"
        >
          <Sparkles className="w-5 h-5" />
          Create New Product
        </Link>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-2xl glass glass-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-${stat.color}-500/20 flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
              </div>
              <span className="text-sm text-emerald-400 font-medium">{stat.change}</span>
            </div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-slate-400 mt-1">{stat.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <motion.div
              key={action.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
            >
              <Link
                href={action.href}
                className="flex items-start gap-4 p-6 rounded-2xl glass glass-hover group"
              >
                <div className={`w-12 h-12 rounded-xl bg-${action.color}-500/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <action.icon className={`w-6 h-6 text-${action.color}-400`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                    {action.name}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">{action.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Projects */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">Recent Projects</h2>
          <Link href="/dashboard/projects" className="text-sm text-indigo-400 hover:text-indigo-300 flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="space-y-3">
          {recentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <Link
                href={`/dashboard/projects/${project.id}`}
                className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-2xl">
                  {project.thumbnail}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white group-hover:text-indigo-400 transition-colors">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-slate-400">{project.type}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className={`text-sm ${project.status === 'completed' ? 'text-emerald-400' : 'text-yellow-400'}`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{project.date}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-emerald-500/10 border border-indigo-500/20"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-white">Upgrade to Creator Plan</h3>
              <p className="text-sm text-slate-400">Get unlimited AI generations and 10GB storage</p>
            </div>
          </div>
          <Link
            href="/dashboard/billing"
            className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity"
          >
            Upgrade Now
          </Link>
        </div>
      </motion.div>
    </div>
  );
}