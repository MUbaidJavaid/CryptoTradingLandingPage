import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { TrendingUp, Activity, DollarSign, Target } from 'lucide-react';

const performanceData = [
  { time: '00:00', value: 10000 },
  { time: '04:00', value: 10850 },
  { time: '08:00', value: 11200 },
  { time: '12:00', value: 12100 },
  { time: '16:00', value: 11900 },
  { time: '20:00', value: 13400 },
  { time: '24:00', value: 14200 },
];

const miniChartData = [
  { value: 45 },
  { value: 52 },
  { value: 48 },
  { value: 65 },
  { value: 58 },
  { value: 73 },
  { value: 68 },
  { value: 82 },
];

export function DashboardPreview() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6">
            <Activity className="w-4 h-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Live Platform Preview</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Live Market Insights & Analytics
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get access to real-time market data, advanced analytics, and performance tracking 
            all in one powerful dashboard.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Dashboard Mockup */}
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-2xl rounded-3xl border border-white/10 p-4 sm:p-8 shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Trading Dashboard</h3>
                <p className="text-gray-400">Real-time performance metrics</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-400">Live</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-sm text-gray-400">Win Rate</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">87.3%</div>
                <div className="text-xs text-green-400">+2.4% this week</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span className="text-sm text-gray-400">Accuracy</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">92.1%</div>
                <div className="text-xs text-blue-400">Signal accuracy</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                  <span className="text-sm text-gray-400">Total Profit</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">$14.2K</div>
                <div className="text-xs text-purple-400">+42% growth</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm text-gray-400">Active Trades</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">23</div>
                <div className="text-xs text-cyan-400">Across 8 pairs</div>
              </div>
            </div>

            {/* Main Chart */}
            <div className="bg-black/40 rounded-2xl p-6 mb-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Portfolio Performance</h4>
                  <p className="text-sm text-gray-400">Last 24 hours</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-400">+42.0%</div>
                  <div className="text-sm text-gray-400">$4,200 profit</div>
                </div>
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={performanceData}>
                    <defs>
                      <linearGradient id="performanceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis 
                      dataKey="time" 
                      stroke="#6B7280"
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis 
                      stroke="#6B7280"
                      style={{ fontSize: '12px' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#10B981"
                      strokeWidth={3}
                      fillOpacity={1}
                      fill="url(#performanceGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Live Trading Signals */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-black/40 border border-green-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">BTC/USDT</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded">BUY</span>
                </div>
                <div className="text-xl font-bold text-white mb-2">$49,842</div>
                <div className="h-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={miniChartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#10B981"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-green-400 mt-2">+3.2% (24h)</div>
              </div>

              <div className="bg-black/40 border border-blue-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">ETH/USDT</span>
                  <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs font-semibold rounded">HOLD</span>
                </div>
                <div className="text-xl font-bold text-white mb-2">$2,654</div>
                <div className="h-12 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={miniChartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-blue-400 mt-2">+2.8% (24h)</div>
              </div>

              <div className="bg-black/40 border border-purple-500/30 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-400">SOL/USDT</span>
                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs font-semibold rounded">WATCH</span>
                </div>
                <div className="text-xl font-bold text-white mb-2">$124.32</div>
                <div className="h-12">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={miniChartData}>
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#A855F7"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="text-xs text-purple-400 mt-2">+5.1% (24h)</div>
              </div>
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-6 right-4 bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 rounded-full shadow-lg border border-green-400/30"
          >
            <div className="text-sm font-semibold text-white">✨ Real-time Data</div>
          </motion.div>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 italic">
            * Dashboard preview shows illustrative performance metrics for demonstration purposes
          </p>
        </motion.div>
      </div>
    </section>
  );
}