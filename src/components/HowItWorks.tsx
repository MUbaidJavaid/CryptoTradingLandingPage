import { BarChart3, UserPlus, Wallet, Zap } from 'lucide-react'
import { motion } from 'motion/react'
import { Area, AreaChart, Line, LineChart, ResponsiveContainer } from 'recharts'

const steps = [
  {
    icon: UserPlus,
    title: 'Register & Unlock the Platform',
    description:
      'Sign up in minutes and get instant access to a powerful, all-in-one crypto trading platform built for speed and precision.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'from-green-500/10 to-emerald-500/10',
    borderColor: 'border-green-500/30'
  },
  {
    icon: BarChart3,
    title: 'Market Analysis & Smart Signals',
    description:
      'Stay ahead with real-time market insights, deep technical analysis, and algorithm-powered trading signals designed to spot opportunities early.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30'
  },
  {
    icon: Zap,
    title: 'Smart Trade Execution',
    description:
      'Execute trades confidently using intelligent tools, advanced order systems, and built-in risk management features.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-500/10 to-pink-500/10',
    borderColor: 'border-purple-500/30'
  },
  {
    icon: Wallet,
    title: 'Monitor & Withdraw Anytime',
    description:
      'Track your portfolio performance live and withdraw your funds smoothly whenever you choose—full control, full transparency.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-500/10 to-red-500/10',
    borderColor: 'border-orange-500/30'
  }
]

const miniChartData = [
  { value: 40 },
  { value: 55 },
  { value: 48 },
  { value: 70 },
  { value: 62 },
  { value: 85 },
  { value: 78 },
  { value: 92 }
]

export function HowItWorks () {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(168,85,247,0.1),transparent_50%)]'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full mb-6'>
            <Zap className='w-4 h-4 text-purple-400' />
            <span className='text-purple-400 text-sm font-medium'>
              Simple Process
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
              How Crypto Trading Works
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Start trading crypto in four powerful steps. Our platform is built
            to be fast, simple, and effective—whether you’re just starting or
            already experienced.
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='relative'
            >
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className='hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-white/20 to-transparent z-0'></div>
              )}

              <div
                className={`relative bg-gradient-to-br ${step.bgColor} backdrop-blur-sm border ${step.borderColor} rounded-2xl p-6 h-full hover:scale-105 transition-transform duration-300`}
              >
                {/* Step Number */}
                <div className='absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 border border-white/20 rounded-full flex items-center justify-center'>
                  <span className='text-lg font-bold text-white'>
                    {index + 1}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <step.icon className='w-8 h-8 text-white' />
                </div>

                {/* Content */}
                <h3 className='text-xl font-bold text-white mb-3'>
                  {step.title}
                </h3>
                <p className='text-gray-300 leading-relaxed mb-4'>
                  {step.description}
                </p>

                {/* Mini Chart */}
                <div className='h-16 mt-4 w-full'>
                  <ResponsiveContainer width='100%' height='100%'>
                    <AreaChart data={miniChartData}>
                      <defs>
                        <linearGradient
                          id={`gradient${index}`}
                          x1='0'
                          y1='0'
                          x2='0'
                          y2='1'
                        >
                          <stop
                            offset='5%'
                            stopColor={
                              index === 0
                                ? '#10B981'
                                : index === 1
                                ? '#3B82F6'
                                : index === 2
                                ? '#A855F7'
                                : '#F59E0B'
                            }
                            stopOpacity={0.3}
                          />
                          <stop
                            offset='95%'
                            stopColor={
                              index === 0
                                ? '#10B981'
                                : index === 1
                                ? '#3B82F6'
                                : index === 2
                                ? '#A855F7'
                                : '#F59E0B'
                            }
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type='monotone'
                        dataKey='value'
                        stroke={
                          index === 0
                            ? '#10B981'
                            : index === 1
                            ? '#3B82F6'
                            : index === 2
                            ? '#A855F7'
                            : '#F59E0B'
                        }
                        strokeWidth={2}
                        fillOpacity={1}
                        fill={`url(#gradient${index})`}
                        dot={false}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trading Stats with Charts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-16 grid md:grid-cols-3 gap-6'
        >
          {[
            {
              label: 'BTC/USDT',
              value: '$49,842',
              change: '+3.2%',
              color: '#10B981'
            },
            {
              label: 'ETH/USDT',
              value: '$2,654',
              change: '+2.8%',
              color: '#3B82F6'
            },
            {
              label: 'SOL/USDT',
              value: '$124.32',
              change: '+5.1%',
              color: '#A855F7'
            }
          ].map((coin, i) => (
            <div
              key={i}
              className='bg-black/40 border border-white/10 rounded-xl p-4'
            >
              <div className='flex items-center justify-between mb-3'>
                <span className='text-sm text-gray-400'>{coin.label}</span>
                <span
                  className='text-sm font-semibold'
                  style={{ color: coin.color }}
                >
                  {coin.change}
                </span>
              </div>
              <div className='text-2xl font-bold text-white mb-3'>
                {coin.value}
              </div>
              <div className='h-20 w-full'>
                <ResponsiveContainer width='100%' height='100%'>
                  <LineChart data={miniChartData}>
                    <Line
                      type='monotone'
                      dataKey='value'
                      stroke={coin.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='text-center mt-16'
        >
          <button
            onClick={() =>
              document
                .getElementById('registration-form')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
            className='px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/50'
          >
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  )
}
