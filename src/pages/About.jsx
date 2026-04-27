import { LuMusic, LuGraduationCap, LuMapPin } from 'react-icons/lu'

const achievements = [
  {
    title: 'Academy of Contemporary Music',
    detail: 'Piano Performance — Graduate (2023–2026)',
  },
  {
    title: 'Richard Taunton Sixth Form College',
    detail: 'Music Performance & Music Production — A Levels (2021–2023)',
  },
  {
    title: 'Live Venues',
    detail: 'The 1865, Rivers Studios, Brixton Jam, London',
  },
  {
    title: 'Based in London',
    detail: 'Available in-person & online',
  },
]

const timeline = [
  {
    year: 'Early Years',
    title: 'Roots in Uganda',
    desc: "Originally from Uganda, Isaac's musical journey began through church and school choirs, developing a strong sense of musicality and performance from an early age.",
  },
  {
    year: 'Self-Taught',
    title: 'Guitar & Songwriting',
    desc: 'As his passion grew, Isaac taught himself guitar and developed skills in songwriting and vocal performance, shaping his creativity and musical understanding.',
  },
  {
    year: '2021',
    title: 'Richard Taunton College',
    desc: 'Began formal studies in Music Performance and Music Technology, developing technical skills, performance ability, and understanding of music production.',
  },
  {
    year: '2023',
    title: 'Academy of Contemporary Music',
    desc: 'Specialised in piano performance — refining technique, musical interpretation, and gaining experience performing alongside other musicians.',
  },
  {
    year: 'Now',
    title: 'Performer & Teacher',
    desc: 'Based in London, performing at weddings, corporate events, restaurants and venues, while teaching piano to beginners both in-person and online.',
  },
]

export default function About() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">About</p>
        <h1 className="section-title mb-4">
          Isaac <em className="text-gold-400">Kiiza</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40">
          Pianist · Live Performer · Piano Teacher · London, UK
        </p>
      </section>

      {/* ── Bio + Image ──────────────────────────────────── */}
      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Image placeholder */}


          <div className="relative">
                <div className="aspect-[3/4] border border-gold-500/40 overflow-hidden relative">

                    {/* ── Swap this URL with Isaac's real photo ── */}
                    <img
                    src="/images/iz2.jpg"
                    alt="Isaac Kiiza — Pianist"
                    className="w-full h-full object-cover object-center"
                    />

                    {/* Gold gradient overlay at bottom */}
                    <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(to top, #0a0a0a88 0%, transparent 50%)',
                    }}
                    />

                    {/* Corner accents */}
                    <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gold-400" />
                    <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold-400" />
                    <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gold-400" />
                    <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gold-400" />
                </div>

                {/* Offset gold frame behind */}
                <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-500/30 -z-10" />
                </div>




          {/* Bio text */}
          <div>
            <p className="section-label">Biography</p>
            <h2 className="font-display text-3xl text-cream mb-6">
              A journey shaped by <em className="text-gold-400">passion</em>
            </h2>
            <div className="space-y-5 font-body text-lg text-cream/70 leading-relaxed">
              <p>
                I am a London-based pianist and a graduate of the Academy of Contemporary
                Music, specialising in piano performance.
              </p>
              <p>
                Originally from Uganda, my musical journey began at an early age through
                church and school choirs, where I developed a strong sense of musicality
                and performance from an early age.
              </p>
              <p>
                As my passion for music grew, I began exploring instruments and taught
                myself how to play guitar, developing skills in songwriting and vocal
                performance which helped shape my creativity and musical understanding.
              </p>
              <p>
                My musical style blends gospel piano, contemporary pop arrangements, and
                expressive instrumental performance. I perform both as a solo pianist and
                within band settings, always focusing on musicality, creativity, and
                connection with the audience.
              </p>
              <p>
                Alongside performing, I am passionate about teaching piano to beginners,
                helping students build confidence, develop strong foundations, and enjoy
                the process of learning music.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────── */}
      <section className="page-section max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">My Journey</p>
          <h2 className="section-title">
            The road to <em className="text-gold-400">the keys</em>
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gold-500/20" />
          <div className="space-y-12">
            {timeline.map(({ year, title, desc }) => (
              <div key={year} className="flex gap-8">
                <div className="relative flex-shrink-0 w-14 flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-500 mt-1 ring-4 ring-dark-900" />
                </div>
                <div className="pb-4">
                  <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400">
                    {year}
                  </span>
                  <h3 className="font-display text-xl text-cream mt-1 mb-2">{title}</h3>
                  <p className="font-body text-base text-cream/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Achievements ─────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="section-label">Highlights</p>
          <h2 className="section-title">
            Education & <em className="text-gold-400">Experience</em>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map(({ title, detail }) => (
            <div
              key={title}
              className="bg-dark-800 border border-gold-500/10 p-8 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="w-8 h-px bg-gold-500 mb-6 group-hover:w-16 transition-all duration-300" />
              <h3 className="font-display text-lg text-cream mb-3">{title}</h3>
              <p className="font-sans text-sm text-cream/50">{detail}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}