"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Sparkles,
  Target,
  Calendar,
  MessageSquare,
  BarChart3,
  Smartphone,
  Wand2,
  CheckCircle,
  Users,
  Play,
  Rocket,
  Star,
  Shield,
  RotateCcw,
  Headphones,
  Twitter,
  Linkedin,
  Github,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Brain className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">TaskCamp</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                How it Works
              </a>
              <a
                href="#demo"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Demo
              </a>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Get Started Free
              </Button>
            </div>

            <button className="md:hidden" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  How it Works
                </a>
                <a
                  href="#demo"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Demo
                </a>
                <Button className="bg-primary text-white hover:bg-primary/90 w-full">
                  Get Started Free
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <motion.div {...fadeInUp}>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20 mb-6">
                <Sparkles className="h-4 w-4 mr-2" />
                Powered by GPT-4
              </Badge>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Stop Managing Tasks.
                <br />
                <span className="gradient-text">Start Thinking Smart.</span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TaskCamp doesn't just store your to-dos — it thinks with you.
                Our AI breaks down complex goals, sets priorities, and creates
                actionable plans so you can focus on what matters most.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 text-lg px-8 py-4"
                >
                  <Rocket className="h-5 w-5 mr-2" />
                  Start Free Trial
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Play className="h-5 w-5 mr-2" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-accent mr-2" />
                  No credit card required
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 text-accent mr-2" />
                  10,000+ happy users
                </div>
              </div>
            </motion.div> */}

            {/* <motion.div {...fadeIn} className="lg:animate-float">
              <img
                src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern productivity workspace"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Most To-Do Apps Fail
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional task managers only store your tasks — they don't help
              you think, plan, or prioritize.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Problem Side */}
            <motion.div
              className="bg-red-50 border border-red-200 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-red-600 mb-4">
                <X className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-red-700 mb-6">
                Traditional To-Do Apps
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">
                    Vague tasks like "Plan the presentation" with no breakdown
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">
                    No sense of priority or urgency
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">
                    Manual task entry and organization
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2" />
                  <span className="text-gray-700">
                    Decision fatigue and task overwhelm
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-primary mb-4">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                TaskCamp AI Solution
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Brain className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700">
                    AI breaks tasks into clear, actionable subtasks
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700">
                    Smart priority assignment with deadlines
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700">
                    Natural language input - describe what you want
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-1" />
                  <span className="text-gray-700">
                    AI creates daily schedules based on your goals
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              AI-Powered Productivity Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of task management with GPT-4 integration
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart Add Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mb-6">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Smart Add</h3>
                  <p className="text-gray-600 mb-6">
                    Describe your goal in plain English. AI automatically breaks
                    it down into actionable subtasks with estimated time and
                    priority.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-2">Example input:</p>
                    <p className="font-medium mb-3">
                      "Prepare for the marketing presentation next week"
                    </p>
                    <p className="text-sm text-gray-500 mb-2">AI generates:</p>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Research competitor strategies (2h)</li>
                      <li>• Create slide outline (1h)</li>
                      <li>• Design presentation slides (3h)</li>
                      <li>• Practice and rehearse (1h)</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Plan My Day Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent to-green-500 rounded-xl flex items-center justify-center mb-6">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Plan My Day</h3>
                  <p className="text-gray-600 mb-6">
                    One click creates an optimized daily schedule based on your
                    tasks, deadlines, and estimated time requirements.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-2">
                      Today's AI Schedule:
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>9:00 AM - Research phase</span>
                        <Badge variant="destructive">High</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>11:00 AM - Email responses</span>
                        <Badge className="bg-yellow-500">Medium</Badge>
                      </div>
                      <div className="flex justify-between">
                        <span>2:00 PM - Design mockups</span>
                        <Badge variant="destructive">High</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smart Prioritization Feature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary to-pink-500 rounded-xl flex items-center justify-center mb-6">
                    <BarChart3 className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    Smart Prioritization
                  </h3>
                  <p className="text-gray-600 mb-6">
                    AI analyzes deadlines, task complexity, and dependencies to
                    automatically assign priorities and suggest optimal work
                    order.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500 mb-2">
                      AI Priority Analysis:
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <span>Client deadline tomorrow</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span>Blocks other team members</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span>Can be done anytime</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">See TaskCamp in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Clean, intuitive interface designed for maximum productivity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="TaskCamp dashboard interface mockup"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wand2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Natural Language Input
                  </h3>
                  <p className="text-gray-600">
                    Just type "I need to prepare for my presentation" and watch
                    AI create a complete action plan.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Smart Analytics</h3>
                  <p className="text-gray-600">
                    Track productivity patterns and get AI insights on how to
                    optimize your workflow.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Smartphone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Works Everywhere</h3>
                  <p className="text-gray-600">
                    Seamless sync across all devices with offline support for
                    when you're on the go.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">How TaskCamp Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From chaos to clarity in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Person typing on laptop"
                className="rounded-xl shadow-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Describe Your Goal</h3>
              <p className="text-gray-600">
                Tell TaskCamp what you want to accomplish in plain English. No
                complex forms or structures required.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-secondary to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="AI processing and analysis visualization"
                className="rounded-xl shadow-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">AI Does the Thinking</h3>
              <p className="text-gray-600">
                Our GPT-4 engine analyzes your goal and creates actionable
                subtasks with priorities and time estimates.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300"
                alt="Team celebrating task completion"
                className="rounded-xl shadow-lg mx-auto mb-6 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-bold mb-3">Execute & Succeed</h3>
              <p className="text-gray-600">
                Follow your personalized action plan and watch your productivity
                soar. TaskCamp keeps you focused and on track.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of professionals who've transformed their
              productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "TaskCamp completely changed how I approach my work. Instead
                    of feeling overwhelmed by vague tasks, I now have clear
                    action plans that actually get me to my goals."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      SM
                    </div>
                    <div>
                      <p className="font-semibold">Sarah Martinez</p>
                      <p className="text-gray-500 text-sm">Product Manager</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "The AI prioritization is incredible. It knows exactly what
                    I should work on first based on deadlines and impact. I've
                    never been this organized."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      DK
                    </div>
                    <div>
                      <p className="font-semibold">David Kim</p>
                      <p className="text-gray-500 text-sm">Startup Founder</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-6 italic">
                    "I just describe what I need to do in natural language and
                    TaskCamp handles the rest. It's like having a personal
                    productivity assistant."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      LJ
                    </div>
                    <div>
                      <p className="font-semibold">Lisa Johnson</p>
                      <p className="text-gray-500 text-sm">
                        Marketing Director
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who've discovered the power of
              AI-assisted task management. Start your free trial today — no
              credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg"
              >
                <Rocket className="h-5 w-5 mr-2" />
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Book a Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-8 text-indigo-200 text-sm">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                Enterprise-grade security
              </div>
              <div className="flex items-center">
                <RotateCcw className="h-4 w-4 mr-2" />
                Cancel anytime
              </div>
              <div className="flex items-center">
                <Headphones className="h-4 w-4 mr-2" />
                24/7 support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                  <Brain className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">TaskCamp</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The AI-powered task manager that thinks with you. Built with
                Next.js 14, Supabase, and OpenAI to revolutionize how you
                approach productivity.
              </p>
              <div className="flex space-x-4">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-white p-2"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              &copy; 2024 TaskCamp. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
