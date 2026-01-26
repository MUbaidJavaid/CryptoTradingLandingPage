import React from 'react';
import { motion } from 'motion/react';
import { Brain, Shield, TrendingUp, Clock, Lock, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const features = [
  {
    icon: Brain,
    title: 'Advanced Market Analysis',
    description: 'AI-powered algorithms analyze millions of data points to identify profitable trading opportunities.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: TrendingUp,
    title: 'AI & Expert-Assisted Strategies',
    description: 'Combine cutting-edge AI technology with insights from professional crypto traders and analysts.',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
  },
  {
    icon: Shield,
    title: 'Risk Management Approach',
    description: 'Built-in risk controls, stop-loss mechanisms, and portfolio diversification strategies to protect capital.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Lock,
    title: 'Secure & Encrypted System',
    description: 'Bank-level encryption, 2FA authentication, and cold storage solutions ensure maximum security.',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
  },
  {
    icon: Clock,
    title: '24/7 Crypto Market Access',
    description: 'Trade anytime, anywhere. The crypto market never sleeps, and neither does our platform.',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Trusted by thousands of traders worldwide with millions in daily trading volume.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
  },
];

const tradingVolumeData = [
  { day: 'Mon', volume: 1.2 },
  { day: 'Tue', volume: 1.8 },
  { day: 'Wed', volume: 1.5 },
  { day: 'Thu', volume: 2.1 },
  { day: 'Fri', volume: 2.4 },
  { day: 'Sat', volume: 1.9 },
  { day: 'Sun', volume: 2.2 },
];

const successRateData = [
  { month: 'Jan', rate: 85 },
  { month: 'Feb', rate: 87 },
  { month: 'Mar', rate: 89 },
  { month: 'Apr', rate: 88 },
  { month: 'May', rate: 91 },
  { month: 'Jun', rate: 92 },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Why Us</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose Our Crypto Platform
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine advanced technology, expert insights, and robust security to provide 
            you with the best crypto trading experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border ${feature.borderColor} rounded-2xl p-6 hover:border-opacity-100 transition-all duration-300 hover:shadow-xl hover:shadow-${feature.color}/20`}
            >
              <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-7 h-7 ${feature.color}`} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trading Performance Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Daily Trading Volume */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Daily Trading Volume</h3>
            <p className="text-sm text-gray-400 mb-6">Average weekly performance (in billions)</p>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={tradingVolumeData}>
                  <defs>
                    <linearGradient id="volumeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="day" 
                    stroke="#6B7280"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    style={{ fontSize: '12px' }}
                    label={{ value: 'Volume ($B)', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                  />
                  <Bar 
                    dataKey="volume" 
                    fill="url(#volumeGradient)" 
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Trading Success Rate */}
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">Trading Success Rate</h3>
            <p className="text-sm text-gray-400 mb-6">Platform accuracy over 6 months (%)</p>
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={successRateData}>
                  <defs>
                    <linearGradient id="successGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A855F7" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <XAxis 
                    dataKey="month" 
                    stroke="#6B7280"
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis 
                    stroke="#6B7280"
                    style={{ fontSize: '12px' }}
                    domain={[80, 95]}
                    label={{ value: 'Success %', angle: -90, position: 'insideLeft', fill: '#9CA3AF' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="rate"
                    stroke="#A855F7"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#successGradient)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Trusted & Secure</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-sm font-semibold text-white">256-bit SSL</div>
                <div className="text-xs text-gray-400">Encryption</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-sm font-semibold text-white">2FA Protected</div>
                <div className="text-xs text-gray-400">Authentication</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-sm font-semibold text-white">Regulated</div>
                <div className="text-xs text-gray-400">Compliance</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-sm font-semibold text-white">24/7 Support</div>
                <div className="text-xs text-gray-400">Always Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}