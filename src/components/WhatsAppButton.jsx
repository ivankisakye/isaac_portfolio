import { LuMessageCircle } from 'react-icons/lu'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/447312383505?text=Hi%20Isaac%2C%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Outer pulse ring */}
    
      <span
        className="absolute inset-0 rounded-full bg-gold-500/20"
        style={{ animation: 'softPing 2s ease-out infinite' }}
        />

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full bg-gold-500 flex items-center justify-center
          shadow-[0_0_30px_rgba(201,149,58,0.5)]
          hover:bg-gold-400 hover:shadow-[0_0_40px_rgba(201,149,58,0.7)]
          transition-all duration-300 hover:scale-110 active:scale-95"
        style={{ animation: 'gentleBounce 4s ease-in-out infinite' }}
      >
        <LuMessageCircle size={24} className="text-dark-900" />
      </div>

      {/* Tooltip */}
      <div
        className="absolute right-16 top-1/2 -translate-y-1/2 bg-dark-800 border border-gold-500/20
          px-4 py-2 whitespace-nowrap opacity-0 group-hover:opacity-100
          transition-all duration-300 pointer-events-none
          translate-x-2 group-hover:translate-x-0"
      >
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream">
          Chat on WhatsApp
        </p>
        <p className="font-sans text-xs text-gold-400 mt-0.5">
          Quick response guaranteed
        </p>
      </div>

      <style>{`
        @keyframes gentleBounce {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>
    </a>
  )
}