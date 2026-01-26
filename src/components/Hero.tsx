import React, { useState } from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ArrowRight, Lock, Mail, User, Phone, BarChart2 } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const btcData = [
  { time: '00:00', btc: 42000, eth: 2200 },
  { time: '04:00', btc: 43500, eth: 2280 },
  { time: '08:00', btc: 43200, eth: 2250 },
  { time: '12:00', btc: 45800, eth: 2420 },
  { time: '16:00', btc: 46200, eth: 2450 },
  { time: '20:00', btc: 48500, eth: 2580 },
  { time: '24:00', btc: 49800, eth: 2650 },
];

export function Hero() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form submitted:', formData);
    // Scroll to main registration section or show success
    document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/2 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-96 h-96 bg-green-500/20 rounded-full blur-3xl -bottom-48 left-1/2 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium">Live Crypto Market Analysis</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                Unlock the Potential
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                of Crypto Markets
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Harness data-driven crypto trading strategies powered by advanced market analysis. 
              Join thousands of traders capitalizing on market opportunities 24/7.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/50"
              >
                Start Trading Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => document.getElementById('hero-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300"
              >
                Register Now
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-green-400">98.7%</div>
                <div className="text-sm text-gray-400">Platform Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">$2.4B+</div>
                <div className="text-sm text-gray-400">Trading Volume</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">150K+</div>
                <div className="text-sm text-gray-400">Active Traders</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Registration Form with Chart Background */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            id="hero-form"
          >
            {/* Chart Background Layer */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-30">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95"></div>
              <div className="relative h-full p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Market Trends</h3>
                  </div>
                  <div className="flex gap-3">
                    <div className="text-right">
                      <div className="text-xs text-gray-400">BTC</div>
                      <div className="text-xs font-semibold text-green-400">+18.5%</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">ETH</div>
                      <div className="text-xs font-semibold text-blue-400">+20.4%</div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={btcData}>
                      <defs>
                        <linearGradient id="colorBtcHeroBg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.6}/>
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorEthHeroBg" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.6}/>
                          <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis 
                        dataKey="time" 
                        stroke="#6B7280" 
                        style={{ fontSize: '10px' }}
                        hide
                      />
                      <YAxis 
                        stroke="#6B7280" 
                        style={{ fontSize: '10px' }}
                        hide
                      />
                      <Area
                        type="monotone"
                        dataKey="btc"
                        stroke="#10B981"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorBtcHeroBg)"
                      />
                      <Area
                        type="monotone"
                        dataKey="eth"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorEthHeroBg)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Registration Form - Foreground */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-xl rounded-2xl p-8 border border-green-500/30 shadow-2xl">
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 rounded-full shadow-lg"
              >
                <div className="text-xs font-semibold text-white">🔥 Limited Offer</div>
              </motion.div>

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Start Trading Today</h3>
                <p className="text-sm text-gray-400">Get 3 months premium free - Register now!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="hero-fullName" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      id="hero-fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-10 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="hero-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="email"
                      id="hero-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-10 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number <span className="text-gray-500">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="tel"
                      id="hero-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-10 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Experience Level */}
                <div>
                  <label htmlFor="hero-experience" className="block text-sm font-medium text-gray-300 mb-2">
                    Trading Experience *
                  </label>
                  <div className="relative">
                    <BarChart2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <select
                      id="hero-experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-lg px-10 py-3 text-white text-sm focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/20 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select your experience</option>
                      <option value="beginner">Beginner - New to trading</option>
                      <option value="intermediate">Intermediate - Some experience</option>
                      <option value="advanced">Advanced - Experienced trader</option>
                      <option value="professional">Professional - Full-time trader</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 hover:from-green-600 hover:via-blue-600 hover:to-purple-600 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02]"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Trust Note */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-400 pt-2">
                  <Lock className="w-3 h-3 text-green-400" />
                  <span>Your information is secure & confidential</span>
                </div>
              </form>

              {/* Additional Trust Indicators */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>✓ No credit card required</span>
                  <span>✓ 24/7 support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
