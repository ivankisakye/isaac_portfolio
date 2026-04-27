import { useRef, useState } from 'react'
import { LuPlay, LuPause, LuVolume2, LuVolumeX } from 'react-icons/lu'

const videos = [
  {
    id: 1,
    title: 'Gospel Piano Improvisation',
    description: 'Expressive gospel piano improvisation showcasing creativity and musicality.',
    src: '/videos/isaacvid1.mp4',
    category: 'Gospel',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80', // fixed
  },
  {
    id: 2,
    title: 'Contemporary Pop Arrangement',
    description: 'A contemporary pop piano arrangement demonstrating technique and style.',
    src: '/videos/isaacvid2.mp4',
    category: 'Pop',
    thumbnail: 'https://images.unsplash.com/photo-1552422535-c45813c61732?w=800&q=80',
  },
  {
    id: 3,
    title: 'Live Performance at The 1865',
    description: 'Live solo piano performance recorded at The 1865, Southampton.',
    src: '/videos/isaacvid1.mp4',
    category: 'Live',
    thumbnail: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&q=80',
  },
  {
    id: 4,
    title: 'Instrumental Cover',
    description: 'Expressive instrumental piano cover showcasing interpretation and feeling.',
    src: '/videos/isaacvid2.mp4',
    category: 'Cover',
    thumbnail: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80',
  },
  {
    id: 5,
    title: 'Band Performance — Brixton Jam',
    description: 'Collaborative band performance recorded at Brixton Jam, London.',
    src: '/videos/isaacvid1.mp4',
    category: 'Live',
    thumbnail: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
  },
  {
    id: 6,
    title: 'Piano Technique Showcase',
    description: 'Full playthrough demonstrating scales, chords and expressive playing.',
    src: '/videos/isaacvid2.mp4',
    category: 'Technique',
    thumbnail: 'https://images.unsplash.com/photo-1466654754583-7c010b872da8?w=800&q=80',
  },
]

function VideoCard({ title, description, src, category, thumbnail }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [started, setStarted] = useState(false)

  function togglePlay() {
    if (!started) setStarted(true)
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  function toggleMute() {
    videoRef.current.muted = !videoRef.current.muted
    setMuted(!muted)
  }

  return (
    <div className="group bg-dark-800 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 overflow-hidden">

      {/* Video area */}
      <div className="relative aspect-video overflow-hidden bg-dark-900">

        {/* Thumbnail shown before play */}
        {!started && (
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Video element */}
        <video
          ref={videoRef}
          src={src}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${started ? 'opacity-100' : 'opacity-0'}`}
          onEnded={() => setPlaying(false)}
          playsInline
        />

        {/* Dark overlay */}
        <div className={`absolute inset-0 transition-all duration-300 ${playing ? 'bg-transparent' : 'bg-dark-900/40'}`} />

        {/* Play / Pause button center */}
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center group/play"
          aria-label={playing ? 'Pause' : 'Play'}
        >
          <div
            className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300
              border-gold-400/60 text-gold-400 bg-dark-900/50
              group-hover/play:border-gold-400 group-hover/play:scale-110 ${playing ? 'opacity-0 group-hover/play:opacity-100' : 'opacity-100'}`}
          >
            {playing ? <LuPause size={18} /> : <LuPlay size={18} className="ml-1" />}
          </div>
        </button>

        {/* Mute button bottom right */}
        {started && (
          <button
            onClick={toggleMute}
            className="absolute bottom-3 right-3 w-8 h-8 flex items-center justify-center border border-gold-500/30 text-gold-400/70 hover:text-gold-400 hover:border-gold-500/60 transition-all duration-300 bg-dark-900/60"
            aria-label={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <LuVolumeX size={13} /> : <LuVolume2 size={13} />}
          </button>
        )}

        {/* Category badge */}
        <div className="absolute top-3 left-3 bg-dark-900/70 border border-gold-500/20 px-3 py-1">
          <span className="font-sans text-xs tracking-[0.2em] uppercase text-gold-400/80">
            {category}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display text-lg text-cream mb-2">{title}</h3>
        <p className="font-body text-sm text-cream/50 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function Videos() {
  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">Watch & Listen</p>
        <h1 className="section-title mb-4">
          Performance <em className="text-gold-400">Showcase</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-body text-lg text-cream/50 max-w-xl mt-6">
          A selection of piano performances across different musical styles and
          settings — from intimate studio sessions to live stage performances.
        </p>
      </section>

      {/* ── Video Grid ───────────────────────────────────── */}
      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </section>

      {/* ── Bottom note ──────────────────────────────────── */}
      <section className="border-t border-gold-500/10 page-section max-w-3xl mx-auto text-center">
        <p className="section-label">Stay Updated</p>
        <h2 className="section-title mb-6">
          More videos <em className="text-gold-400">coming soon</em>
        </h2>
        <div className="divider-gold mx-auto" />
        <p className="font-body text-lg text-cream/60 mt-6">
          Follow on Instagram{' '}
          <a
            href="https://instagram.com/kiizaizo"
            target="_blank"
            rel="noreferrer"
            className="text-gold-400 hover:text-gold-300 transition-colors duration-300"
          >
            @kiizaizo
          </a>{' '}
          for the latest performance clips and updates.
        </p>
      </section>
    </>
  )
}