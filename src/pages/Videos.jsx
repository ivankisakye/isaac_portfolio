import { useRef, useState } from 'react'
import { LuPlay, LuPause, LuVolume2, LuVolumeX, LuX } from 'react-icons/lu'

const videos = [
  {
    id: 1,
    title: 'Contemporary Pop Arrangement',
    description: 'A contemporary pop piano arrangement demonstrating technique and style.',
    src: '/videos/isaacvid1.mp4',
    category: 'Pop',
    thumbnail: 'images/thumbnail.png',
  },
  {
    id: 2,
    title: 'Gospel Piano Improvisation',
    description: 'Expressive gospel piano improvisation showcasing creativity and musicality.',
    src: '/videos/isaacvid2.mp4',
    category: 'Gospel',
    thumbnail: 'images/thumbnail.png',
  },
  {
    id: 3,
    title: 'Piano Covers',
    description: 'Elegant piano renditions across genres, crafted to inspire.',
    src: '/videos/isaacvid1.mp4',
    category: 'Live Covers',
    thumbnail: 'images/thumbnail.png',
  },
  {
    id: 4,
    title: 'Instrumental Cover',
    description: 'Expressive instrumental piano cover showcasing interpretation and feeling.',
    src: '/videos/isaacvid2.mp4',
    category: 'Cover',
    thumbnail: 'images/thumbnail.png',
  },
  {
    id: 5,
    title: 'Band Performance — Brixton Jam',
    description: 'Collaborative band performance recorded at Brixton Jam, London.',
    src: '/videos/isaacvid1.mp4',
    category: 'Live',
    thumbnail: 'images/thumbnail.png',
  },
  {
    id: 6,
    title: 'Piano Technique Showcase',
    description: 'Full playthrough demonstrating scales, chords and expressive playing.',
    src: '/videos/isaacvid2.mp4',
    category: 'Technique',
    thumbnail: 'images/thumbnail.png',
  },
]

function VideoCard({ title, description, src, category, thumbnail, onPlay }) {
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

  function handlePlayClick() {
    onPlay({ title, src, thumbnail, category })
  }

  return (
    <div className="group bg-dark-800 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 overflow-hidden">

      {/* Video area */}
      <div className="relative aspect-video overflow-hidden bg-dark-900 cursor-pointer" onClick={handlePlayClick}>

        {/* Thumbnail shown before play */}
        {!started && (
          <img
            src={thumbnail}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        {/* Video element (hidden, used for preview on card - now we use modal) */}
        <video
          ref={videoRef}
          src={src}
          className="hidden"
          playsInline
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-dark-900/60 transition-all duration-300 group-hover:bg-dark-900/40" />

        {/* Play button center */}
        <div
          className="absolute inset-0 flex items-center justify-center"
        >
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-300
              border-gold-400/60 text-gold-400 bg-dark-900/50
              group-hover:border-gold-400 group-hover:scale-110"
          >
            <LuPlay size={18} className="ml-1" />
          </div>
        </div>

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

// Modal component for full-screen video playback
function VideoModal({ video, onClose }) {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(true)
  const [muted, setMuted] = useState(false)

  function togglePlay() {
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
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full border border-gold-500/30 text-gold-400/70 hover:text-gold-400 hover:border-gold-500/60 transition-all duration-300 bg-black/50 flex items-center justify-center"
        aria-label="Close video"
      >
        <LuX size={20} />
      </button>

      {/* Video container - wide but elegant */}
      <div 
        className="relative w-full max-w-6xl mx-4 animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video wrapper with elegant aspect ratio (16:9 but slightly wider feel) */}
        <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gold-500/20 bg-black">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <video
              ref={videoRef}
              src={video.src}
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              onEnded={() => setPlaying(false)}
              playsInline
            />
          </div>

          {/* Custom controls overlay - minimal and elegant */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={togglePlay}
              className="w-10 h-10 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500/20 hover:border-gold-400 transition-all duration-300 flex items-center justify-center"
              aria-label={playing ? 'Pause' : 'Play'}
            >
              {playing ? <LuPause size={16} /> : <LuPlay size={16} className="ml-0.5" />}
            </button>
            
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full border border-gold-500/40 text-gold-400 hover:bg-gold-500/20 hover:border-gold-400 transition-all duration-300 flex items-center justify-center"
              aria-label={muted ? 'Unmute' : 'Mute'}
            >
              {muted ? <LuVolumeX size={16} /> : <LuVolume2 size={16} />}
            </button>

            <div className="flex-1" />

            {/* Video title */}
            <div className="text-cream/80 font-display text-sm tracking-wide">
              {video.title}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Videos() {
  const [activeVideo, setActiveVideo] = useState(null)

  function handlePlayVideo(video) {
    setActiveVideo(video)
  }

  function handleCloseModal() {
    setActiveVideo(null)
  }

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
            <VideoCard key={video.id} {...video} onPlay={handlePlayVideo} />
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

      {/* Video Modal */}
      {activeVideo && (
        <VideoModal video={activeVideo} onClose={handleCloseModal} />
      )}
    </>
  )
}