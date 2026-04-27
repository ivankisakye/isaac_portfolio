import { Link } from 'react-router-dom'
import { LuArrowRight, LuMusic } from 'react-icons/lu'

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}





      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background layers */}





        {/* Background layers */}

                {/* Base dark */}
                <div className="absolute inset-0 bg-dark-900" />

                {/* Hero image with opacity */}
                <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage:
                    "url('/images/iz4.jpg')",
                    opacity: 0.35,
                }}
                />

                {/* Dark gradient top and bottom so text is readable */}
                <div
                className="absolute inset-0"
                style={{
                    background:
                    'linear-gradient(to bottom, #0a0a0a 0%, #0a0a0a44 25%, #0a0a0a44 75%, #0a0a0a 100%)',
                }}
                />

                {/* Gold radial glow */}
                <div
                className="absolute inset-0"
                style={{
                    background:
                    'radial-gradient(ellipse 70% 50% at 50% 50%, #c9953a15 0%, transparent 70%)',
                }}
                />

                {/* Subtle horizontal lines overlay */}
                <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                    'repeating-linear-gradient(0deg, transparent, transparent 80px, #c9953a 80px, #c9953a 81px)',
                }}
                />






        {/* Decorative side lines */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-30">
          <div className="w-px h-24 bg-gold-500" />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400"
            style={{ writingMode: 'vertical-rl' }}
          >
            Pianist
          </span>
          <div className="w-px h-24 bg-gold-500" />
        </div>

        <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 opacity-30">
          <div className="w-px h-24 bg-gold-500" />
          <span
            className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400"
            style={{ writingMode: 'vertical-rl' }}
          >
            London
          </span>
          <div className="w-px h-24 bg-gold-500" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p
            className="section-label mb-8"
            style={{ animation: 'fadeInDown 0.8s ease both' }}
          >
            Welcome
          </p>



                {/*
                
                
                <h1
                  className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] text-cream leading-none tracking-tight mb-4"
                  style={{ animation: 'fadeInUp 1s ease both 0.2s' }}
                >
                  Isaac
                </h1>
                <h1
                  className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tight mb-8 italic gold-text"
                  style={{ animation: 'fadeInUp 1s ease both 0.35s' }}
                >
                  Kiiza
                </h1>
                
                
                */}
          




          <p
            className="font-sans text-xs tracking-[0.4em] uppercase text-cream/40 mb-14"
            style={{ animation: 'fadeInUp 1s ease both 0.5s' }}
          >
            Pianist &nbsp;·&nbsp; Live Performer &nbsp;·&nbsp; Piano Teacher
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ animation: 'fadeInUp 1s ease both 0.65s' }}
          >
            <Link to="/contact" className="btn-primary">
              Book Now
            </Link>
            <Link to="/portfolio" className="btn-outline flex items-center gap-2">
              View Portfolio <LuArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <span className="font-sans text-xs tracking-[0.3em] uppercase text-cream/25">
            Scroll
          </span>
          <div className="w-px h-14 bg-gradient-to-b from-gold-500/60 to-transparent animate-pulse" />
        </div>
      </section>






      {/* ── Intro ────────────────────────────────────────── */}
      <section className="page-section max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Image */}





          {/* Image */}
                <div className="relative order-2 md:order-1">
                <div className="aspect-[3/4] border border-gold-500/40 overflow-hidden relative">

                    {/* ── Swap this URL with Isaac's real photo ── */}
                    <img
                    src="/images/iz2.jpg"
                    alt="Isaac Kiiza — Pianist"
                    className="w-full h-full object-cover object-center"
                    />

                    {/* Gold overlay tint */}
                    <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, #0a0a0a88 0%, transparent 50%)',
                    }}
                    />

                    {/* Corner accents — gold border stays on */}
                    <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400" />
                    <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400" />
                    <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400" />
                    <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400" />
                </div>

                {/* Offset gold frame behind */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/30 -z-10" />
                </div>






          {/* Text */}


          <div className="order-1 md:order-2">
            <p className="section-label">-</p>
            <h2 className="section-title mb-4">
              Music that moves{' '}
              <em className="text-gold-400">the soul</em>
            </h2>
            <div className="divider-gold" />
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-5">
              Hi, I’m Isaac Kiiza – a London-based pianist and a graduate of the Academy of 
              Contemporary Music, specialising in live music for events and piano lessons for beginners. 
            </p>
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-5">
              I perform at a wide range of events including weddings, private functions, corporate events, 
              restaurants, and live music venues. My aim is to create a refined, engaging, and memorable 
              musical atmosphere that enhances every occasion. 
            </p>

            <p className="font-body text-lg text-cream/70 leading-relaxed mb-10">
              My repertoire blends gospel piano, contemporary pop arrangements, and expressive 
              instrumental covers, allowing me to adapt to different audiences and settings with ease. 
            </p>
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-10">
              Alongside performing, I offer piano lessons for beginners, helping both young learners and 
              adults build strong musical foundations, confidence, and enjoyment in playing the piano.
            </p>
            <p className="font-body text-lg text-cream/70 leading-relaxed mb-10">
              Whether you are looking for live music for your event or starting your journey on the piano, I 
              provide a professional and reliable service tailored to your needs.
            </p>

            <Link to="/about" className="btn-outline">
              Read Full Story
            </Link>
          </div>
        </div>
      </section>


      

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="border-y border-gold-500/10 bg-dark-800/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'ACM', label: 'Graduate' },
            { value: '2+', label: 'Years Performing' },
            { value: '£25', label: 'Per Lesson' },
            { value: '∞', label: 'Passion for Music' },
          ].map(({ value, label }) => (
            <div key={label} className="group">
              <p className="font-display text-4xl md:text-5xl gold-text mb-2">{value}</p>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Teaser ──────────────────────────────── */}
      <section className="page-section max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">What I Offer</p>
          <h2 className="section-title">
            Services tailored to <em className="text-gold-400">you</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Live Piano Performance',
              desc: 'Professional performances for weddings, corporate events, private functions, hotels, restaurants, and live venues across London.',
              link: '/services',
            },
            {
              title: 'Piano Lessons',
              desc: 'Structured, enjoyable lessons for beginners of all ages. Available in-person in London or online. £25 per hour.',
              link: '/services',
            },
          ].map(({ title, desc, link }) => (
            <div
              key={title}
              className="bg-dark-800 border border-gold-500/10 p-10 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="w-8 h-px bg-gold-500 mb-6 group-hover:w-16 transition-all duration-500" />
              <h3 className="font-display text-2xl text-cream mb-4">{title}</h3>
              <p className="font-body text-base text-cream/60 leading-relaxed mb-8">{desc}</p>
              <Link
                to={link}
                className="flex items-center gap-2 font-sans text-xs tracking-[0.3em] uppercase text-gold-400 hover:text-gold-300 transition-colors duration-300"
              >
                Learn More <LuArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section text-center max-w-3xl mx-auto">
        <p className="section-label">Ready to work together?</p>
        <h2 className="section-title mb-6">
          Let's create something{' '}
          <em className="text-gold-400">memorable</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="font-body text-lg text-cream/60 mb-10 mt-6">
          Whether you need live music for your event or want to start
          learning the piano — get in touch and let's talk.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>
          <Link to="/services" className="btn-outline flex items-center gap-2">
            View Services <LuArrowRight size={14} />
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}