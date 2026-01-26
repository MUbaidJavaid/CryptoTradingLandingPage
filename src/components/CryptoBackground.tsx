import React from 'react';
import { motion } from 'motion/react';

const cryptoSymbols = ['₿', 'Ξ', '◈', '⟠', 'Ł', '◉', '⬡', '◊', 'Ð', '⬢', 'Ӿ'];

export function CryptoBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated floating crypto symbols - MORE VISIBLE */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute font-bold"
          style={{
            fontSize: `${Math.random() * 80 + 40}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            color: i % 3 === 0 ? 'rgba(16, 185, 129, 0.25)' : i % 3 === 1 ? 'rgba(59, 130, 246, 0.25)' : 'rgba(168, 85, 247, 0.25)',
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.25, 0.4, 0.25],
            rotate: [0, 360],
          }}
          transition={{
            duration: Math.random() * 8 + 8,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {cryptoSymbols[Math.floor(Math.random() * cryptoSymbols.length)]}
        </motion.div>
      ))}

      {/* Binary code stream - MORE VISIBLE */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute font-mono text-xs leading-relaxed"
          style={{
            left: `${i * 12.5}%`,
            top: '-10%',
            color: 'rgba(59, 130, 246, 0.15)',
          }}
          animate={{
            y: ['0vh', '110vh'],
          }}
          transition={{
            duration: Math.random() * 12 + 12,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        >
          {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join('\n')}
        </motion.div>
      ))}

      {/* Hexagonal grid pattern - MORE VISIBLE */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" fill="none" stroke="#10B981" strokeWidth="1.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Blockchain nodes connecting - MORE VISIBLE */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 bg-purple-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        >
          <motion.div
            className="absolute inset-0 bg-purple-500/40 rounded-full"
            animate={{
              scale: [1, 4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.25,
            }}
          />
        </motion.div>
      ))}

      {/* Large background crypto symbols - MORE VISIBLE */}
      <motion.div
        className="absolute top-20 left-10 text-9xl font-bold"
        style={{ color: 'rgba(16, 185, 129, 0.12)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      >
        ₿
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-20 text-9xl font-bold"
        style={{ color: 'rgba(59, 130, 246, 0.12)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
      >
        Ξ
      </motion.div>
      <motion.div
        className="absolute top-1/2 left-1/3 text-9xl font-bold"
        style={{ color: 'rgba(168, 85, 247, 0.12)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
      >
        ◈
      </motion.div>
      <motion.div
        className="absolute top-1/4 right-1/4 text-9xl font-bold"
        style={{ color: 'rgba(16, 185, 129, 0.12)' }}
        animate={{ rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: 'linear' }}
      >
        ⬡
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-9xl font-bold"
        style={{ color: 'rgba(59, 130, 246, 0.12)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 55, repeat: Infinity, ease: 'linear' }}
      >
        ◊
      </motion.div>

      {/* Animated grid lines */}
      <div className="absolute inset-0" style={{ opacity: 0.08 }}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.3)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>
    </div>
  );
}
