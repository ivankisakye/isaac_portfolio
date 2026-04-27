import { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { LuMail, LuPhone, LuInstagram, LuSend, LuCheck, LuX } from 'react-icons/lu'

const contactInfo = [
  {
    icon: LuMail,
    label: 'Email',
    value: 'isaaackiiza805@gmail.com',
    href: 'mailto:isaaackiiza805@gmail.com',
  },
  {
    icon: LuPhone,
    label: 'Phone',
    value: '07312383505',
    href: 'tel:07312383505',
  },
  {
    icon: LuInstagram,
    label: 'Instagram',
    value: '@kiizaizo',
    href: 'https://instagram.com/kiizaizo',
  },
]

export default function Contact() {
  const formRef = useRef()
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  function validate(fields) {
    const e = {}
    if (!fields.name.trim()) e.name = 'Name is required'
    if (!fields.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = 'Enter a valid email'
    if (!fields.message.trim()) e.message = 'Message is required'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const fields = {
      name: formRef.current.user_name.value,
      email: formRef.current.user_email.value,
      message: formRef.current.message.value,
    }

    const errs = validate(fields)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setErrors({})
    setStatus('loading')

    emailjs
      .sendForm(
        'service_r7wssdv',
        'template_kwxl8mq',
        formRef.current,
        'Ro0zPz41guJrSwtkL'
      )
      .then(() => {
        setStatus('success')
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
      })
  }

  return (
    <>
      {/* ── Page Hero ────────────────────────────────────── */}
      <section className="pt-40 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <p className="section-label">Get In Touch</p>
        <h1 className="section-title mb-4">
          Contact <em className="text-gold-400">Isaac</em>
        </h1>
        <div className="divider-gold" />
        <p className="font-body text-lg text-cream/50 max-w-xl mt-6">
          For bookings, piano lessons, collaborations or any enquiries —
          fill in the form below or reach out directly.
        </p>
      </section>

      <section className="page-section pt-0 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── Contact Info ─────────────────────────────── */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <p className="section-label">Direct Contact</p>
              <h2 className="font-display text-2xl text-cream mb-6">
                Reach out <em className="text-gold-400">directly</em>
              </h2>
              <div className="divider-gold" />
            </div>

            <div className="space-y-4 mt-8">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-4 p-5 bg-dark-800 border border-gold-500/10 hover:border-gold-500/30 transition-all duration-300 group"
                >
                  <div className="w-9 h-9 flex-shrink-0 border border-gold-500/20 flex items-center justify-center text-gold-400 group-hover:border-gold-500/50 transition-all duration-300">
                    <Icon size={15} />
                  </div>
                  <div>
                    <p className="font-sans text-xs tracking-[0.3em] uppercase text-cream/40 mb-1">
                      {label}
                    </p>
                    <p className="font-body text-base text-cream/70 group-hover:text-cream transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Availability note */}
            <div className="bg-dark-800 border border-gold-500/10 p-6 mt-6">
              <div className="w-8 h-px bg-gold-500 mb-4" />
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-2">
                Availability
              </p>
              <p className="font-body text-base text-cream/60 leading-relaxed">
                Based in London. Available for events and lessons
                in-person across London and online worldwide.
              </p>
            </div>
          </div>

          {/* ── Contact Form ─────────────────────────────── */}
          <div className="lg:col-span-2">
            <div>
              <p className="section-label">Send a Message</p>
              <h2 className="font-display text-2xl text-cream mb-6">
                Let's <em className="text-gold-400">talk</em>
              </h2>
              <div className="divider-gold" />
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 mt-8">
              {/* Name */}
              <div>
                <label className="font-sans text-xs tracking-[0.3em] uppercase text-cream/50 block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Smith"
                  className={`w-full bg-dark-800 border px-5 py-4 font-body text-base text-cream placeholder-cream/20 outline-none transition-all duration-300 focus:border-gold-500/50 ${
                    errors.name ? 'border-red-500/50' : 'border-gold-500/10'
                  }`}
                />
                {errors.name && (
                  <p className="font-sans text-xs text-red-400 mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-sans text-xs tracking-[0.3em] uppercase text-cream/50 block mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  className={`w-full bg-dark-800 border px-5 py-4 font-body text-base text-cream placeholder-cream/20 outline-none transition-all duration-300 focus:border-gold-500/50 ${
                    errors.email ? 'border-red-500/50' : 'border-gold-500/10'
                  }`}
                />
                {errors.email && (
                  <p className="font-sans text-xs text-red-400 mt-2">{errors.email}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="font-sans text-xs tracking-[0.3em] uppercase text-cream/50 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell me about your event, enquiry or lesson request..."
                  className={`w-full bg-dark-800 border px-5 py-4 font-body text-base text-cream placeholder-cream/20 outline-none transition-all duration-300 focus:border-gold-500/50 resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-gold-500/10'
                  }`}
                />
                {errors.message && (
                  <p className="font-sans text-xs text-red-400 mt-2">{errors.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-dark-900/30 border-t-dark-900 rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <LuSend size={14} />
                    Send Message
                  </>
                )}
              </button>

              {/* Success message */}
              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-green-500/10 border border-green-500/20">
                  <LuCheck size={16} className="text-green-400 flex-shrink-0" />
                  <p className="font-sans text-sm text-green-400">
                    Message sent successfully! Isaac will get back to you soon.
                  </p>
                </div>
              )}

              {/* Error message */}
              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20">
                  <LuX size={16} className="text-red-400 flex-shrink-0" />
                  <p className="font-sans text-sm text-red-400">
                    Something went wrong. Please try emailing directly at isaaackiiza805@gmail.com
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}