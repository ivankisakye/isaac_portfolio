import { LuDownload, LuMapPin, LuMail, LuPhone, LuInstagram } from 'react-icons/lu'

const education = [
  {
    year: '2023 – 2026',
    institution: 'Academy of Contemporary Music',
    qualification: 'Piano Performance — Graduate',
    detail: 'Specialised in piano performance, refining technique, musical interpretation, and collaborative musicianship.',
  },
  {
    year: '2021 – 2023',
    institution: 'Richard Taunton Sixth Form College',
    qualification: 'Music Performance & Music Technology — A Levels',
    detail: 'Developed technical skills, performance ability, and understanding of music production.',
  },
]

const experience = [
  {
    title: 'Solo Piano Performances',
    location: 'London Train Stations',
    desc: 'Regular solo piano performances connecting with commuters and audiences in public spaces across London.',
  },
  {
    title: 'Band Performance',
    location: 'Brixton Jam, London',
    desc: 'Collaborative band performance showcasing ensemble playing, stage presence, and musicality.',
  },
  {
    title: 'Live at The 1865',
    location: 'Southampton',
    desc: 'Solo and band performances at one of Southampton\'s most respected live music venues.',
  },
  {
    title: 'Rivers Studios',
    location: 'Southampton',
    desc: 'Studio and live performance sessions demonstrating versatility across different musical settings.',
  },
  {
    title: 'University Ensemble Performances',
    location: 'Academy of Contemporary Music',
    desc: 'Live showcases and ensemble performances as part of undergraduate studies.',
  },
  {
    title: 'Piano Teacher',
    location: 'London — In-person & Online',
    desc: 'Teaching piano to young beginners and adult beginners, focusing on technique, theory, ear training, and musical expression.',
  },
]

const skills = [
  'Piano Performance',
  'Gospel Piano Improvisation',
  'Pop Piano Arrangements',
  'Instrumental Interpretation',
  'Live Performance & Stage Presence',
  'Collaborative Musicianship',
  'Piano Teaching',
  'Music Technology',
  'Songwriting',
  'Guitar',
  'Ear Training',
  'Music Notation',
]

export default function CV() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">Curriculum Vitae</p>
        <h1 className="section-title mb-4">
          Isaac <em className="text-gold-400">Kiiza</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40 mt-4">
          Pianist · Live Performer · Piano Teacher
        </p>
      </section>

      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Left Column ──────────────────────────────── */}
          <div className="lg:col-span-1 space-y-10">

            {/* Contact Info */}
            <div className="bg-dark-800 border border-gold-500/10 p-8">
              <h2 className="font-display text-xl text-cream mb-6">Contact</h2>
              <div className="space-y-4">
                {[
                  { icon: LuMapPin, text: 'London, United Kingdom' },
                  { icon: LuMail, text: 'isaaackiiza805@gmail.com' },
                  { icon: LuPhone, text: '07312383505' },
                  { icon: LuInstagram, text: '@kiizaizo' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3">
                    <Icon size={14} className="text-gold-400 mt-1 flex-shrink-0" />
                    <span className="font-sans text-sm text-cream/60">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-dark-800 border border-gold-500/10 p-8">
              <h2 className="font-display text-xl text-cream mb-6">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-sans text-xs tracking-[0.15em] uppercase px-3 py-1 border border-gold-500/20 text-cream/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <button
              onClick={() => window.print()}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <LuDownload size={14} />
              Download CV
            </button>
          </div>

          {/* ── Right Column ─────────────────────────────── */}
          <div className="lg:col-span-2 space-y-16">

            {/* Professional Summary */}
            <div>
              <p className="section-label">Summary</p>
              <h2 className="font-display text-2xl text-cream mb-6">
                Professional <em className="text-gold-400">Profile</em>
              </h2>
              <div className="divider-gold" />
              <p className="font-body text-lg text-cream/70 leading-relaxed mt-6">
                A London-based pianist and graduate of the Academy of Contemporary Music,
                specialising in piano performance. Experienced in performing at a range of
                live settings including gospel piano, contemporary pop arrangements, and
                instrumental performances — both as a solo pianist and in band settings.
                Passionate about teaching piano to beginners, helping students build
                confidence, develop strong musical foundations, and enjoy the process of
                learning music.
              </p>
            </div>

            {/* Education */}
            <div>
              <p className="section-label">Academic</p>
              <h2 className="font-display text-2xl text-cream mb-6">
                <em className="text-gold-400">Education</em>
              </h2>
              <div className="divider-gold" />
              <div className="space-y-8 mt-8">
                {education.map(({ year, institution, qualification, detail }) => (
                  <div
                    key={institution}
                    className="border-l border-gold-500/20 pl-6 hover:border-gold-500/50 transition-all duration-300"
                  >
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400">
                      {year}
                    </span>
                    <h3 className="font-display text-lg text-cream mt-1 mb-1">
                      {institution}
                    </h3>
                    <p className="font-sans text-sm text-cream/50 mb-3">{qualification}</p>
                    <p className="font-body text-base text-cream/50 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <p className="section-label">Performance & Teaching</p>
              <h2 className="font-display text-2xl text-cream mb-6">
                <em className="text-gold-400">Experience</em>
              </h2>
              <div className="divider-gold" />
              <div className="space-y-8 mt-8">
                {experience.map(({ title, location, desc }) => (
                  <div
                    key={title}
                    className="border-l border-gold-500/20 pl-6 hover:border-gold-500/50 transition-all duration-300"
                  >
                    <h3 className="font-display text-lg text-cream mb-1">{title}</h3>
                    <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400">
                      {location}
                    </span>
                    <p className="font-body text-base text-cream/50 leading-relaxed mt-3">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="bg-dark-800 border border-gold-500/10 p-8">
              <h2 className="font-display text-xl text-cream mb-3">References</h2>
              <p className="font-body text-base text-cream/50">
                Available upon request.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}