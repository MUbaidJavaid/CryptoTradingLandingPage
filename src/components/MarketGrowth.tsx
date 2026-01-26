import { Activity, TrendingUp } from 'lucide-react'
import { motion } from 'motion/react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

const historicalData = [
  { year: '2017', btc: 1000, eth: 100, market: 150 },
  { year: '2018', btc: 3500, eth: 250, market: 400 },
  { year: '2019', btc: 7200, eth: 450, market: 700 },
  { year: '2020', btc: 12000, eth: 800, market: 1200 },
  { year: '2021', btc: 35000, eth: 2100, market: 2800 },
  { year: '2022', btc: 28000, eth: 1650, market: 2100 },
  { year: '2023', btc: 42000, eth: 2400, market: 3200 },
  { year: '2024', btc: 49800, eth: 2650, market: 4100 }
]

export function MarketGrowth () {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden'>
      {/* Background Grid */}
      <div className='absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:50px_50px]'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full mb-6'>
            <Activity className='w-4 h-4 text-blue-400' />
            <span className='text-blue-400 text-sm font-medium'>
              Market Analysis
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
              Unstoppable Growth in the Crypto Market
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Crypto has entered a new era of massive expansion. Sharp market
            swings create powerful profit opportunities for those who know how
            to act at the right moment.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10'>
              <h3 className='text-xl font-semibold text-white mb-6'>
                Historical Market Growth (2017-2024)
              </h3>

              <div className='w-full h-80'>
                <ResponsiveContainer width='100%' height='100%'>
                  <AreaChart data={historicalData}>
                    <defs>
                      <linearGradient id='colorBtc' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                          offset='5%'
                          stopColor='#10B981'
                          stopOpacity={0.3}
                        />
                        <stop
                          offset='95%'
                          stopColor='#10B981'
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient id='colorEth' x1='0' y1='0' x2='0' y2='1'>
                        <stop
                          offset='5%'
                          stopColor='#3B82F6'
                          stopOpacity={0.3}
                        />
                        <stop
                          offset='95%'
                          stopColor='#3B82F6'
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray='3 3' stroke='#374151' />
                    <XAxis
                      dataKey='year'
                      stroke='#9CA3AF'
                      style={{ fontSize: '12px' }}
                    />
                    <YAxis stroke='#9CA3AF' style={{ fontSize: '12px' }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#1F2937',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '8px'
                      }}
                    />
                    <Area
                      type='monotone'
                      dataKey='btc'
                      stroke='#10B981'
                      strokeWidth={2}
                      fillOpacity={1}
                      fill='url(#colorBtc)'
                    />
                    <Area
                      type='monotone'
                      dataKey='eth'
                      stroke='#3B82F6'
                      strokeWidth={2}
                      fillOpacity={1}
                      fill='url(#colorEth)'
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className='grid grid-cols-2 gap-4 mt-6'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full'></div>
                  <div>
                    <div className='text-sm text-gray-400'>Bitcoin</div>
                    <div className='text-lg font-semibold text-white'>
                      +4,880%
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-blue-500 rounded-full'></div>
                  <div>
                    <div className='text-sm text-gray-400'>Ethereum</div>
                    <div className='text-lg font-semibold text-white'>
                      +2,550%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Insights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='space-y-6'
          >
            <div className='bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6'>
              <TrendingUp className='w-12 h-12 text-green-400 mb-4' />
              <h3 className='text-2xl font-bold text-white mb-3'>
                Market Swings = Profit Potential
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                Crypto volatility creates multiple chances to win daily. Those
                who understand the data turn rapid price movements into
                calculated opportunities.
              </p>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div className='bg-gray-800/40 backdrop-blur-sm border border-white/10 rounded-lg p-4'>
                <div className='text-3xl font-bold text-green-400 mb-2'>
                  $4.1T
                </div>
                <div className='text-sm text-gray-400'>Total Market Cap</div>
              </div>
              <div className='bg-gray-800/40 backdrop-blur-sm border border-white/10 rounded-lg p-4'>
                <div className='text-3xl font-bold text-blue-400 mb-2'>
                  24/7
                </div>
                <div className='text-sm text-gray-400'>Trading Access</div>
              </div>
            </div>

            <div className='bg-gray-800/40 backdrop-blur-sm border border-white/10 rounded-xl p-6'>
              <h4 className='text-lg font-semibold text-white mb-4'>
                Why Smart Traders Profit from Every Market Move
              </h4>
              <ul className='space-y-3'>
                <li className='flex items-start gap-3'>
                  <div className='w-1.5 h-1.5 bg-green-400 rounded-full mt-2'></div>
                  <p className='text-gray-300'>
                    Deep liquidity allows instant execution—anytime, anywhere
                  </p>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-1.5 h-1.5 bg-blue-400 rounded-full mt-2'></div>
                  <p className='text-gray-300'>
                    Hundreds of trading pairs unlock nonstop opportunities
                    across global exchanges
                  </p>
                </li>
                <li className='flex items-start gap-3'>
                  <div className='w-1.5 h-1.5 bg-purple-400 rounded-full mt-2'></div>
                  <p className='text-gray-300'>
                    Advanced analytics expose profitable trends before the crowd
                    reacts
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
