import { CryptoBackground } from './components/CryptoBackground'
import { DashboardPreview } from './components/DashboardPreview'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { MarketGrowth } from './components/MarketGrowth'
import { ProfitPotential } from './components/ProfitPotential'
import { RegistrationForm } from './components/RegistrationForm'
import { SocialProof } from './components/SocialProof'
import { WhyChooseUs } from './components/WhyChooseUs'

export default function App () {
  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 relative'>
      <CryptoBackground />;
      <nav
        className='fixed top-0 left-0 right-0 z-50 bg-black

'
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex items-center justify-between h-16'>
            <div className='flex items-center gap-2'>
              {' '}
              <span className='font-bold text-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent'>
                $Bit Ai
              </span>
            </div>
            <div className='hidden md:flex items-center text-sm gap-8'>
              <a
                href='#HeroSection'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('HeroSection')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                HeroSection
              </a>
              <a
                href='#TrustBadges
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('TrustBadges')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                TrustBadges
              </a>
              <a
                href='#Stats
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('Stats')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                Stats
              </a>
              <a
                href='#HowItWorks
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('HowItWorks')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                HowItWorks
              </a>
              <a
                href='#WhyChooseUs
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('WhyChooseUs')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                WhyChooseUs
              </a>
              <a
                href='#RiskManagement
'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('RiskManagement')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary  hover:text-black transition-colors'
              >
                RiskManagement
              </a>
              <a
                href='#Testimonials

'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('Testimonials')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                Testimonials
              </a>

              <a
                href='#FAQ


'
                onClick={e => {
                  e.preventDefault()
                  document
                    .getElementById('FAQ')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className='text-primary hover:text-black transition-colors'
              >
                FAQ
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Hero />
      <MarketGrowth />
      <ProfitPotential />
      <HowItWorks />
      <WhyChooseUs />
      <DashboardPreview />
      <SocialProof />
      <RegistrationForm />
      <Footer />
    </div>
  )
}
