import React from 'react';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Risk Disclosure */}
        <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 mb-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Risk Disclosure & Important Information</h3>
              <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
                <p>
                  <strong>Trading Risk:</strong> Cryptocurrency trading carries a high level of risk and may not be 
                  suitable for all investors. The high degree of leverage can work against you as well as for you. 
                  Before deciding to trade cryptocurrencies, you should carefully consider your investment objectives, 
                  level of experience, and risk appetite.
                </p>
                <p>
                  <strong>No Guarantees:</strong> Past performance is not indicative of future results. The possibility 
                  exists that you could sustain a loss of some or all of your initial investment. You should not invest 
                  money that you cannot afford to lose. All performance data, statistics, and testimonials shown on this 
                  platform are illustrative and for educational purposes only.
                </p>
                <p>
                  <strong>Educational Purpose:</strong> This platform provides information and tools for educational purposes. 
                  It should not be considered as financial advice. Always conduct your own research and consult with a 
                  qualified financial advisor before making any investment decisions.
                </p>
                <p>
                  <strong>Market Volatility:</strong> Cryptocurrency markets are highly volatile. Prices can fluctuate 
                  significantly in very short time periods. This volatility can result in substantial gains or losses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Press Kit</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Trading Guide</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Market Analysis</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">API Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Compliance</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">System Status</a></li>
            </ul>
          </div>
        </div>

        {/* Security Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 py-8 border-t border-white/10">
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm">SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Lock className="w-5 h-5 text-blue-400" />
            <span className="text-sm">Bank-Level Encryption</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Shield className="w-5 h-5 text-purple-400" />
            <span className="text-sm">PCI DSS Compliant</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">
            © 2026 CryptoTrade Platform. All rights reserved. This is a demonstration landing page for educational purposes.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Not financial advice. Always do your own research before investing in cryptocurrency.
          </p>
        </div>
      </div>
    </footer>
  );
}
