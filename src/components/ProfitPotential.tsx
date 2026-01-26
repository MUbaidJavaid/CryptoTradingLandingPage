import { DollarSign, PieChart, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const weeklyData = [
  { week: 'Week 1', profit: 2.3 },
  { week: 'Week 2', profit: 4.1 },
  { week: 'Week 3', profit: 3.2 },
  { week: 'Week 4', profit: 5.8 }
]

const monthlyData = [
  { month: 'Jan', crypto: 18.5, traditional: 1.2 },
  { month: 'Feb', crypto: 15.2, traditional: 0.8 },
  { month: 'Mar', crypto: 22.8, traditional: 1.5 },
  { month: 'Apr', crypto: 19.4, traditional: 1.1 },
  { month: 'May', crypto: 24.6, traditional: 1.3 },
  { month: 'Jun', crypto: 21.3, traditional: 0.9 }
]

export function ProfitPotential () {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>
      {/* Background Elements */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full mb-6'>
            <DollarSign className='w-4 h-4 text-green-400' />
            <span className='text-green-400 text-sm font-medium'>
              Performance Metrics
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent'>
              Visualize the Profit Potential
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Discover how data-driven crypto trading strategies are designed to
            generate returns. Results shown are illustrative, based on
            historical market performance.
          </p>
        </motion.div>

        {/* Weekly Performance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10 mb-8'
        >
          <div className='flex items-center justify-between mb-8'>
            <div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Weekly Growth Performance
              </h3>
              <p className='text-gray-400'>
                Illustrative weekly profit percentage based on historical data
              </p>
            </div>
            <div className='text-right'>
              <div className='text-3xl font-bold text-green-400'>+15.4%</div>
              <div className='text-sm text-gray-400'>Average Monthly</div>
            </div>
          </div>

          <div className='w-full h-80'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={weeklyData}>
                <defs>
                  <linearGradient id='barGradient' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#10B981' />
                    <stop offset='100%' stopColor='#3B82F6' />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                <XAxis
                  dataKey='week'
                  stroke='#9CA3AF'
                  style={{ fontSize: '14px' }}
                />
                <YAxis
                  stroke='#9CA3AF'
                  style={{ fontSize: '14px' }}
                  label={{
                    value: 'Profit %',
                    angle: -90,
                    position: 'insideLeft',
                    fill: '#9CA3AF'
                  }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px'
                  }}
                  formatter={value => [`${value}%`, 'Profit']}
                />
                <Bar
                  dataKey='profit'
                  fill='url(#barGradient)'
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid lg:grid-cols-2 gap-8'
        >
          {/* Chart */}
          <div className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-8 border border-white/10'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Crypto vs Traditional Investing
            </h3>
            <p className='text-gray-400 mb-6'>
              Monthly return comparison (illustrative)
            </p>

            <div className='w-full h-80'>
              <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                  <XAxis
                    dataKey='month'
                    stroke='#9CA3AF'
                    style={{ fontSize: '12px' }}
                  />
                  <YAxis
                    stroke='#9CA3AF'
                    style={{ fontSize: '12px' }}
                    label={{
                      value: 'Return %',
                      angle: -90,
                      position: 'insideLeft',
                      fill: '#9CA3AF'
                    }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1F2937',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px'
                    }}
                    formatter={value => [`${value}%`, '']}
                  />
                  <Line
                    type='monotone'
                    dataKey='crypto'
                    name='Crypto Trading'
                    stroke='#10B981'
                    strokeWidth={3}
                    dot={{ fill: '#10B981', r: 5 }}
                  />
                  <Line
                    type='monotone'
                    dataKey='traditional'
                    name='Traditional'
                    stroke='#6B7280'
                    strokeWidth={3}
                    dot={{ fill: '#6B7280', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className='flex items-center justify-center gap-8 mt-6'>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-green-500 rounded'></div>
                <span className='text-sm text-gray-300'>Crypto Trading</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='w-4 h-4 bg-gray-500 rounded'></div>
                <span className='text-sm text-gray-300'>
                  Traditional Investing
                </span>
              </div>
            </div>
          </div>

          {/* ROI Infographics */}
          <div className='space-y-6'>
            <div className='bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/40 rounded-2xl p-6'>
              <TrendingUp className='w-12 h-12 text-green-400 mb-4' />
              <h4 className='text-xl font-bold text-white mb-2'>
                Potential Monthly ROI
              </h4>
              <div className='text-4xl font-bold text-green-400 mb-2'>
                12-25%
              </div>
              <p className='text-gray-300'>
                Based on active trading strategies in favorable market
                conditions
              </p>
            </div>

            <div className='bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/40 rounded-2xl p-6'>
              <PieChart className='w-12 h-12 text-blue-400 mb-4' />
              <h4 className='text-xl font-bold text-white mb-2'>
                Diversified Approach
              </h4>
              <div className='space-y-3 mt-4'>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-300'>Major Coins</span>
                    <span className='text-white font-semibold'>60%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full'
                      style={{ width: '60%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-300'>Altcoins</span>
                    <span className='text-white font-semibold'>30%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full'
                      style={{ width: '30%' }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-300'>Stablecoins</span>
                    <span className='text-white font-semibold'>10%</span>
                  </div>
                  <div className='w-full bg-gray-700 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-purple-400 to-purple-500 h-2 rounded-full'
                      style={{ width: '10%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-gray-800/40 backdrop-blur-sm border border-yellow-500/30 rounded-xl p-4'>
              <p className='text-xs text-yellow-400/80 leading-relaxed'>
                <strong>Disclaimer:</strong> Performance data shown is
                illustrative and based on historical market conditions. Past
                performance does not guarantee future results. Cryptocurrency
                trading involves substantial risk of loss.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
