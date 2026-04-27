import { useState } from 'react'
import { LuMusic } from 'react-icons/lu'

const categories = ['All', 'Weddings', 'Corporate', 'Venues', 'Teaching']

const items = [
  {
    id: 1,
    title: 'Wedding Reception',
    category: 'Weddings',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
  },
  {
    id: 2,
    title: 'Corporate Dinner',
    category: 'Corporate',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80',
  },
  {
    id: 3,
    title: 'Live at The 1865',
    category: 'Venues',
    location: 'Southampton',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  },
  {
    id: 4,
    title: 'Private Function',
    category: 'Weddings',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=800&q=80',
  },
  {
    id: 5,
    title: 'Rivers Studios Session',
    category: 'Venues',
    location: 'Southampton',
    image: '/images/iz2.jpg',
  },
  {
    id: 6,
    title: 'Brixton Jam',
    category: 'Venues',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
  },
  {
    id: 7,
    title: 'Hotel Performance',
    category: 'Corporate',
    location: 'London',
    image: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
  },
  {
    id: 8,
    title: 'Piano Lesson Showcase',
    category: 'Teaching',
    location: 'London',
    image: '/images/iz1.jpg',
  },
  {
    id: 9,
    title: 'Restaurant Evening',
    category: 'Corporate',
    location: 'London',
    image: '/images/iz1.jpg',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered =
    active === 'All' ? items : items.filter((item) => item.category === active)

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">My Work</p>
        <h1 className="section-title mb-4">
          Performance <em className="text-gold-400">Portfolio</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-body text-lg text-cream/50 max-w-xl mt-6">
          A collection of performances, events, and musical moments across
          London and beyond.
        </p>
      </section>

      {/* ── Filter Tabs ───────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`font-sans text-xs tracking-[0.3em] uppercase px-6 py-2 border transition-all duration-300 ${
                active === cat
                  ? 'bg-gold-500 text-dark-900 border-gold-500'
                  : 'border-gold-500/20 text-cream/50 hover:border-gold-500/50 hover:text-cream'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────── */}
      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(({ id, title, category, location, image }) => (
            <div
              key={id}
              className="group relative aspect-square bg-dark-700 border border-gold-500/10 overflow-hidden hover:border-gold-500/40 transition-all duration-500"
            >
              {/* Image */}
              {image ? (
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <LuMusic size={40} className="text-gold-500/20" />
                </div>
              )}

              {/* Dark overlay always slightly visible */}
              <div className="absolute inset-0 bg-dark-900/30 group-hover:bg-dark-900/70 transition-all duration-500" />

              {/* Corner accents */}
              <span className="absolute top-3 left-3 w-5 h-5 border-t border-l border-gold-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="absolute top-3 right-3 w-5 h-5 border-t border-r border-gold-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-gold-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <span className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-gold-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Hover text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-3">
                  {category}
                </span>
                <h3 className="font-display text-xl text-cream mb-2">{title}</h3>
                <p className="font-sans text-xs text-cream/60">{location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-24">
            <LuMusic size={40} className="text-gold-500/20 mx-auto mb-4" />
            <p className="font-sans text-sm text-cream/30 tracking-[0.3em] uppercase">
              No items found
            </p>
          </div>
        )}
      </section>

      {/* ── Note ─────────────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section max-w-3xl mx-auto text-center">
        <p className="section-label">Want to see more?</p>
        <h2 className="section-title mb-6">
          Follow the <em className="text-gold-400">journey</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="font-body text-lg text-cream/60 mt-6">
          More photos and performance highlights on Instagram{' '}
          <a
            href="https://instagram.com/kiizaizo"
            target="_blank"
            rel="noreferrer"
            className="text-gold-400 hover:text-gold-300 transition-colors duration-300"
          >
            @kiizaizo
          </a>
        </p>
      </section>
    </>
  )
}