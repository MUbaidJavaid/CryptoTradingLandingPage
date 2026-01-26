import { Globe, Star, TrendingUp, Users } from 'lucide-react'
import { motion } from 'motion/react'

const testimonials = [
  {
    name: 'Michael Chen',
    role: 'Day Trader',
    avatar: '👨‍💼',
    rating: 5,
    text: "The platform's AI-driven insights have completely transformed my trading approach. I've seen consistent returns over the past 6 months."
  },
  {
    name: 'Sarah Williams',
    role: 'Crypto Investor',
    avatar: '👩‍💻',
    rating: 5,
    text: 'Finally, a crypto platform that combines powerful analytics with an intuitive interface. The risk management tools are excellent.'
  },
  {
    name: 'David Rodriguez',
    role: 'Professional Trader',
    avatar: '👨‍🔬',
    rating: 5,
    text: "Real-time market signals and advanced charting tools give me the edge I need. Best platform I've used in my 8 years of trading."
  },
  {
    name: 'Emma Thompson',
    role: 'Portfolio Manager',
    avatar: '👩‍🎨',
    rating: 5,
    text: 'The security features and 24/7 support give me peace of mind. My portfolio has grown significantly since joining this platform.'
  },
  {
    name: 'James Anderson',
    role: 'Swing Trader',
    avatar: '👨‍🚀',
    rating: 5,
    text: 'Exceptional platform! The automated strategies and market analysis have helped me identify opportunities I would have missed.'
  },
  {
    name: 'Lisa Park',
    role: 'Financial Analyst',
    avatar: '👩‍💼',
    rating: 5,
    text: 'The data-driven approach and transparent performance metrics make this the most trustworthy crypto trading platform available.'
  }
]

const stats = [
  {
    icon: Users,
    value: '150,000+',
    label: 'Active Traders',
    color: 'text-blue-400'
  },
  {
    icon: TrendingUp,
    value: '2.4M+',
    label: 'Trades Analyzed',
    color: 'text-green-400'
  },
  { icon: Globe, value: '120+', label: 'Countries', color: 'text-purple-400' }
]

export function SocialProof () {
  return (
    <section className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden'>
      {/* Background */}
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-full blur-3xl'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <div className='inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6'>
            <Star className='w-4 h-4 text-yellow-400' />
            <span className='text-yellow-400 text-sm font-medium'>
              Trusted by Thousands
            </span>
          </div>

          <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
            <span className='bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent'>
              Join Our Growing Community
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-3xl mx-auto'>
            Join thousands of traders who put their trust in our platform. See
            real experiences and insights from our active crypto community.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='grid md:grid-cols-3 gap-8 mb-16'
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className='bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center'
            >
              <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4`} />
              <div className='text-4xl font-bold text-white mb-2'>
                {stat.value}
              </div>
              <div className='text-gray-400'>{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className='bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300'
            >
              {/* Rating */}
              <div className='flex gap-1 mb-4'>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className='w-5 h-5 fill-yellow-400 text-yellow-400'
                  />
                ))}
              </div>

              {/* Text */}
              <p className='text-gray-300 leading-relaxed mb-6'>
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className='flex items-center gap-3'>
                <div className='w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl'>
                  {testimonial.avatar}
                </div>
                <div>
                  <div className='font-semibold text-white'>
                    {testimonial.name}
                  </div>
                  <div className='text-sm text-gray-400'>
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mt-16 text-center'
        >
          <div className='inline-flex items-center gap-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-full px-8 py-4'>
            <div className='flex -space-x-2'>
              <div className='w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-xl border-2 border-gray-900'>
                😊
              </div>
              <div className='w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-xl border-2 border-gray-900'>
                🚀
              </div>
              <div className='w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-xl border-2 border-gray-900'>
                💎
              </div>
            </div>
            <div className='text-left'>
              <div className='text-lg font-semibold text-white'>
                4.9/5 Average Rating
              </div>
              <div className='text-sm text-gray-400'>
                Based on 12,400+ reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
