import { LuStar, LuQuote } from 'react-icons/lu'

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Wedding Client',
    rating: 5,
    text: 'Isaac performed at our wedding reception and it was absolutely beautiful. He read the room perfectly and created the most magical atmosphere. Every guest commented on how wonderful the music was.',
  },
  {
    id: 2,
    name: 'James Okonkwo',
    role: 'Corporate Event Organiser',
    rating: 5,
    text: 'We hired Isaac for our annual corporate dinner and he was outstanding. Professional, punctual, and his playing elevated the entire evening. We will definitely be booking him again.',
  },
  {
    id: 3,
    name: 'Emily Clarke',
    role: 'Piano Student',
    rating: 5,
    text: 'Isaac is a fantastic teacher. He is patient, encouraging, and explains everything clearly. I started with no experience and within a few months I was playing songs I actually love.',
  },
  {
    id: 4,
    name: 'David Mensah',
    role: 'Private Function Client',
    rating: 5,
    text: 'Booked Isaac for a private birthday dinner and he was incredible. The guests were amazed. He has a real gift for connecting with the audience through his music.',
  },
  {
    id: 5,
    name: 'Rachel Thompson',
    role: 'Piano Student Parent',
    rating: 5,
    text: 'My daughter has been learning with Isaac for six months and her progress has been remarkable. He makes lessons fun and engaging while still being structured and effective.',
  },
  {
    id: 6,
    name: 'Marcus Webb',
    role: 'Restaurant Manager',
    rating: 5,
    text: 'Isaac performs at our restaurant regularly and our customers absolutely love him. He brings a warm and sophisticated atmosphere that keeps people coming back.',
  },
]

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <LuStar
          key={i}
          size={14}
          className={i < count ? 'text-gold-400 fill-gold-400' : 'text-cream/20'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">Testimonials</p>
        <h1 className="section-title mb-4">
          Client <em className="text-gold-400">Reviews</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-body text-lg text-cream/50 max-w-xl mt-6">
          What clients, students, and event organisers say about working with Isaac.
        </p>
      </section>

      {/* ── Stats Bar ────────────────────────────────────── */}
      <section className="border-y border-gold-500/10 bg-dark-800/50 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-3 gap-8 text-center">
          {[
            { value: '5.0', label: 'Average Rating' },
            { value: '100%', label: 'Would Recommend' },
            { value: '50+', label: 'Happy Clients' },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className="font-display text-4xl md:text-5xl gold-text mb-2">{value}</p>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Reviews Grid ─────────────────────────────────── */}
      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map(({ id, name, role, rating, text }) => (
            <div
              key={id}
              className="bg-dark-800 border border-gold-500/10 p-8 hover:border-gold-500/30 transition-all duration-300 group flex flex-col"
            >
              {/* Quote icon */}
              <LuQuote
                size={28}
                className="text-gold-500/30 mb-6 group-hover:text-gold-500/50 transition-colors duration-300"
              />

              {/* Review text */}
              <p className="font-body text-base text-cream/70 leading-relaxed flex-1 mb-8">
                {text}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-gold-500/10 mb-6" />

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-cream text-base">{name}</p>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase text-cream/40 mt-1">
                    {role}
                  </p>
                </div>
                <StarRating count={rating} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bottom note ──────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section max-w-3xl mx-auto text-center">
        <p className="section-label">Your Experience</p>
        <h2 className="section-title mb-6">
          Leave a <em className="text-gold-400">review</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="font-body text-lg text-cream/60 mt-6 mb-10">
          Worked with Isaac? He would love to hear your feedback.
          Get in touch or leave a review on social media.
        </p>

        <a
          href="https://instagram.com/kiizaizo"
          target="_blank"
          rel="noreferrer"
          className="btn-outline"
        >
          @kiizaizo on Instagram
        </a>
      </section>
    </>
  )
}