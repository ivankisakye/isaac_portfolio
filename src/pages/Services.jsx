import { LuMusic4, LuGraduationCap, LuCalendar, LuMail } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: LuMusic4,
    title: 'Live Piano Performance',
    price: 'Custom Quote',
    priceNote: 'Get in touch to discuss your event',
    description:
      'Professional piano performances for a wide range of events, creating a refined and engaging musical atmosphere that enhances the experience and leaves a lasting impression on your guests.',
    features: [
      'Weddings',
      'Corporate events',
      'Private functions',
      'Hotels and restaurants',
      'Live music venues',
    ],
  },
  {
    icon: LuGraduationCap,
    title: 'Piano Lessons',
    price: '£25',
    priceNote: 'per hour',
    description:
      'Structured, enjoyable lessons designed to build strong musical foundations for both young learners and adults. Available in-person in London or online.',
    features: [
      'Fundamental technique & hand coordination',
      'Reading and understanding sheet music',
      'Scales, chords & chord progressions',
      'Ear training & interval recognition',
      'Rhythm, timing & groove',
      'Musical expression & interpretation',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">What I Offer</p>
        <h1 className="section-title mb-4">
          My <em className="text-gold-400">Services</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-body text-lg text-cream/50 max-w-xl mt-6">
          Whether you need live music for your event or want to start learning the piano,
          I provide a professional and reliable service tailored to your needs.
        </p>
      </section>

      {/* ── Service Cards ─────────────────────────────────── */}
      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {services.map(({ icon: Icon, title, price, priceNote, description, features }) => (
            <div
              key={title}
              className="bg-dark-800 border border-gold-500/10 p-10 hover:border-gold-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Icon */}
              <div className="w-12 h-12 border border-gold-500/20 flex items-center justify-center text-gold-400 mb-8 group-hover:border-gold-500/50 transition-all duration-300">
                <Icon size={22} />
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl text-cream mb-4">{title}</h2>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-display text-4xl gold-text">{price}</span>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40">
                  {priceNote}
                </span>
              </div>

              {/* Divider */}
              <div className="w-full h-px bg-gold-500/10 mb-6" />

              {/* Description */}
              <p className="font-body text-base text-cream/60 leading-relaxed mb-8">
                {description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-1">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                    <span className="font-sans text-sm text-cream/60">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link to="/contact" className="btn-outline text-center mt-auto">
                Get in Touch
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom CTA ───────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section max-w-3xl mx-auto text-center">
        <LuCalendar size={32} className="text-gold-500/40 mx-auto mb-6" />
        <p className="section-label">Ready to book?</p>
        <h2 className="section-title mb-6">
          Let's discuss <em className="text-gold-400">your needs</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="font-body text-lg text-cream/60 mb-10 mt-6">
          For bookings, availability, and personalised quotes — get in touch
          and I'll get back to you as soon as possible.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary">
            Book Now
          </Link>

          <a
            href="mailto:isaaackiiza805@gmail.com"
            className="btn-outline flex items-center gap-2"
          >
            <LuMail size={14} /> isaaackiiza805@gmail.com
          </a>
        </div>
      </section>
    </>
  )
}