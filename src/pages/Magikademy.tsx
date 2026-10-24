import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, BookOpen, Clock, Sun, Leaf, Users, ArrowUpRight, Star } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const courses = [
  {
    title: '12 Rays of ALL Guide & Journal',
    desc: 'The Universal Light Language itself, the vocabulary of our Universe of ALL. Each Ray is a frequency and a teacher. This guide and journal invites beings to study by feeling color as consciousness, to trace the Rainbow Body of ALL, and to remember the sacred code that illuminates every path within the Magikademy.',
    exchange: '$12 or higher',
    status: 'Digital Guide',
    href: 'https://ko-fi.com/s/8e4c472f06',
    color: '#8b4fb5',
    external: true,
  },
  {
    title: 'Heartlight Time & Tools',
    desc: 'A living tool for tracking Ray frequencies, Heartlight cycles, and cosmic alignment. The Ray Dial is a Heartlight Alignment compass, attuned to the 12 Rays of ALL as they move through the sacred thresholds of the year.',
    exchange: 'Currently Free',
    status: 'Web App',
    href: 'https://hut.heartlightia.com/',
    color: '#2ab3c4',
    external: true,
  },
  {
    title: 'Ray Frequencies 101',
    desc: 'The open doorway. An introduction to the 12 Rays of ALL, their frequencies, and threshold cosmology. Beings first encounter the felt frequencies of our Universe of ALL, the Ray Feathers as living strands of the Universal Light Language, and the Heartlight System Map.',
    exchange: 'Free Introduction',
    status: 'Free Preview',
    href: 'https://morphoenix.org',
    color: '#5a4a9e',
    external: true,
  },
  {
    title: 'Hermetic Principles through the Morphoenix Lens',
    desc: 'The 7 Hermetic Principles from the Kybalion, taught through Zaria\'s unique quantum and multidimensional perspective. Each principle woven with its corresponding Ray frequency and the Universal Heartlight Remembrance of ALL that IS.',
    exchange: 'Included in Sacred Exchange',
    status: 'Course',
    href: 'https://morphoenix.org',
    color: '#6366f1',
    external: true,
  },
  {
    title: 'Healing Plant & Fungi Allies',
    desc: 'Our ancient sacred relationship with the nature. Herbs, Plant & Fungi Allies are living beings who offer their bodies as medicine, teacher, and doorway. They are allies, companions on the healing life journey. The living bridge between spirit and soil.',
    exchange: 'Included in Sacred Exchange',
    status: 'Course',
    href: 'https://morphoenix.org',
    color: '#3a9b6f',
    external: true,
  },
  {
    title: 'Ancestral Remembrance',
    desc: 'Practices for reconnecting with the wisdom carried in your lineage. Dreams are the night classroom where the Greater Higher Being, ancestors, and intermergent beings meet the student. Every being carries within their Heartlight the lineage of blood and star that whispers through the generations.',
    exchange: 'TBD',
    status: 'Coming Soon',
    href: null,
    color: '#9b59b6',
    external: false,
  },
  {
    title: 'Healing Through Art',
    desc: 'Art is prayer in pigment, sound, word, and form. Writing is spellcraft made visible. Music is frequency organized into time, a direct Ray transmission. This course explores art as a sacred technology for transformutation and remembrance.',
    exchange: 'TBD',
    status: 'Coming Soon',
    href: null,
    color: '#c4407a',
    external: false,
  },
  {
    title: 'Earth-Honoring Practices',
    desc: 'Living bridges between spirit and soil. Resources and practices for thriving in harmony with our Earth, including community gardens, cooperative formations, nature and wildlife stewardship, and the flourishing of local artists and healing ceremonies.',
    exchange: 'TBD',
    status: 'Coming Soon',
    href: null,
    color: '#d4b830',
    external: false,
  },
  {
    title: 'Morphoenix Energy Healing',
    desc: 'The central current of the Magikademy. Morphoenix Energy Healing works with the Ray Frequencies of Light, the Universal Light Language channeled through the Morphoenix. Personal, collective, ancestral, and ecological healing through attunement, alignment, and the transformutative power of the Heartlight.',
    exchange: 'TBD',
    status: 'Coming Soon',
    href: null,
    color: '#ff0099',
    external: false,
  },
];

const services = [
  {
    name: 'Heartlight Connection Consultation Call',
    desc: 'A first connection. We feel the resonance together and discern the path forward. This is a complimentary call to sense whether the Magikademy and your journey align.',
    price: 'Free',
    duration: '20 minutes',
    format: 'Online video or phone',
    color: '#dfff42',
  },
  {
    name: 'Online Energy Reading and Healing',
    desc: 'Ray frequency reading and Morphoenix Energy Healing. Zaria reads your Ray frequencies, identifies Lux and Umbra states, and offers Morphoenix Energy Healing aligned with your Heartlight. Includes a recorded summary.',
    price: 'Sliding scale based on income',
    duration: '60 minutes',
    format: 'Online video session',
    color: '#3a9b6f',
  },
  {
    name: 'Ray Astrology Consultation',
    desc: 'A Ray Astrology reading using your Gaian Birth chart and the Heartlight System Map. Zaria reads your birth Ray frequencies, Lux and Umbra states, polar complements, and Ray cycles. Includes a recorded summary and your Ray Orb alignment.',
    price: 'Sliding scale based on income',
    duration: '75 minutes',
    format: 'Online video session',
    color: '#5a4a9e',
  },
  {
    name: 'Heartlight Spiritual Guidance',
    desc: 'Ongoing spiritual guidance and mentorship for your remembrance journey. Sessions are tailored to where you are on the Heartlight System Map, incorporating Ray frequencies, ancestral remembrance, and healing magik practices.',
    price: 'Sliding scale based on income',
    duration: '45 to 60 minutes per session',
    format: 'Online video or phone',
    color: '#8b4fb5',
  },
  {
    name: 'Ancestral Rememberance Sessions',
    desc: 'A guided rememberance into the wisdom carried in your lineage. Zaria holds space for your ancestral roots to speak through you, weaving dreams, channelings, and the felt presence of those who walked before you into your living journey.',
    price: 'Sliding scale based on income',
    duration: '60 to 90 minutes',
    format: 'Online video session',
    color: '#9b59b6',
  },
];

export function Magikademy() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero */}
        <section className="relative pt-20 sm:pt-28 pb-12 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 45%, #6366f1 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background: 'radial-gradient(ellipse 50% 30% at 50% 60%, #fad144 0%, transparent 50%)',
            }}
          />
          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-ray-indigo)] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Healing Arts Magik University
              </span>
              <h1 className="font-display text-[2.5rem] sm:text-[3.5rem] text-[var(--color-solar-gold)] leading-tight mb-6" style={{ textShadow: 'var(--text-shadow-hero)' }}>
                Morphoenix Magikademy
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.25rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[700px] mx-auto mb-10">
                A spiritual nonprofit organization and mystery magik school where beings remember how we live in harmony with one another, Gaia, Luna, Sol, and beyond. The Rays of ALL serve as the guiding code, illuminating every path of sacred learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  to="/12-rays-guide-and-journal"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 transition-all duration-300"
                >
                  <BookOpen className="w-4 h-4" />
                  Explore the Curriculum
                </Link>
                <a
                  href="https://morphoenix.org/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-ray-indigo)]/15 border border-[var(--color-ray-indigo)]/30 text-[var(--color-ray-indigo)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-ray-indigo)]/25 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                  Request a Session
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-indigo)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-ray-indigo)] mb-3">
                <Star className="w-3.5 h-3.5" />
                Why the Magikademy Exists
              </span>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--color-solar-gold)] leading-tight mb-6">
                Mission & Purpose
              </h2>
            </div>
            <div className="reveal space-y-6 max-w-[700px] mx-auto">
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/75 leading-relaxed">
                Morphoenix Magikademy is a sanctuary of sacred remembrance and co-creative learning, kindled from the Heartlight that glows within every sovereign being. We stand as a spiritual communion, a living library, and a breathing threshold where the Art of Life unfolds in harmony with Gaia, Luna, Sol, and the infinite chorus beyond.
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/75 leading-relaxed">
                The Rays of ALL serve as the guiding code for the Magikademy, illuminating every decision, curriculum, and gathering with the Heartlight's Greatest & Highest Good. Many spiritual and religious ordinances are shared here, and the unanimous agreement upon upholding the sanctity and thrival of ALL the Living guides our path. This is a scholarly place of cosmogenesis, as the Library of Alexandria once held space for the wisdom of ages.
              </p>
              <p className="font-body text-[1.05rem] text-[var(--text-secondary)]/75 leading-relaxed">
                Beings may study here and choose their unique study path of aligned studies, while the Magikademy co-creates foundations for beings to achieve a degree within one's aligned pathway. Guides and teachers offer curriculum aligned with our sacred code. Every being here arrives already whole, and every being here is both learner and guide.
              </p>
              <p className="font-body text-[1rem] text-[var(--color-solar-gold)]/80 italic text-center mt-4">
                We are ALL students and teachers. We are ALL caregivers and carebeings. 🩵
              </p>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-indigo)]/10">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-ray-indigo)] mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                Living Curriculum
              </span>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--color-solar-gold)] leading-tight mb-4">
                Aligned Study Pathways
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/65 max-w-[600px] mx-auto">
                Beings choose their unique study path. Every path is sacred, and every gate is open. Once beings join through the Sacred Exchange, they gain access to everything the Magikademy has to offer.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {courses.map((course, i) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: course.color + '50' }}
                  className="reveal group rounded-2xl border bg-[var(--bg-card)] backdrop-blur-sm p-6 transition-all duration-400"
                  style={{ borderColor: course.color + '20' }}
                >
                  <div className="h-1 w-full rounded-full mb-4" style={{ background: course.color }} />
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-[1.05rem] text-[var(--color-solar-gold)]">
                      {course.title}
                    </h3>
                    <span
                      className="shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] uppercase tracking-[0.1em] font-ui"
                      style={{
                        backgroundColor: course.color + '15',
                        color: course.color,
                        border: `1px solid ${course.color}30`,
                      }}
                    >
                      {course.status}
                    </span>
                  </div>
                  <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/65 leading-relaxed mb-4">
                    {course.desc}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[var(--color-ray-indigo)]/10">
                    <span className="font-ui text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: course.color }}>
                      {course.exchange}
                    </span>
                    {course.href ? (
                      <a
                        href={course.href}
                        target={course.external ? '_blank' : undefined}
                        rel={course.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1 text-[0.7rem] font-ui uppercase tracking-[0.1em] hover:underline"
                        style={{ color: course.color }}
                      >
                        Explore
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[0.7rem] font-ui uppercase tracking-[0.1em] text-[var(--text-secondary)]/40">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-indigo)]/10">
          <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
            <div className="reveal text-center mb-10">
              <span className="inline-flex items-center gap-2 font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-ray-indigo)] mb-3">
                <Heart className="w-3.5 h-3.5" />
                Sacred Offerings
              </span>
              <h2 className="font-display text-[1.8rem] sm:text-[2.2rem] text-[var(--color-solar-gold)] leading-tight mb-4">
                Healing Sessions and Readings
              </h2>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/65 max-w-[600px] mx-auto">
                Each session is a personalized journey to expand your Heartlight, awaken your innate gifts, and align you with the sacredness and interconnectedness of ALL that IS. Sliding scale based on income honors access for ALL beings.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -3, borderColor: svc.color + '50' }}
                  className="reveal group rounded-2xl border bg-[var(--bg-card)] backdrop-blur-sm p-6 transition-all duration-400"
                  style={{ borderColor: svc.color + '20' }}
                >
                  <div className="h-1 w-full rounded-full mb-4" style={{ background: svc.color }} />
                  <h3 className="font-display text-[1.05rem] text-[var(--color-solar-gold)] mb-2">
                    {svc.name}
                  </h3>
                  <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/65 leading-relaxed mb-3">
                    {svc.desc}
                  </p>
                  <div className="space-y-1 mb-4 text-[0.75rem] font-body text-[var(--text-secondary)]/60">
                    <p className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5" style={{ color: svc.color }} />
                      {svc.duration}
                    </p>
                    <p className="flex items-center gap-2">
                      <Sun className="w-3.5 h-3.5" style={{ color: svc.color }} />
                      {svc.format}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[var(--color-ray-indigo)]/10">
                    <span className="font-ui text-[0.7rem] uppercase tracking-[0.1em]" style={{ color: svc.color }}>
                      {svc.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="reveal mt-8 text-center">
              <a
                href="https://morphoenix.org/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.8rem] font-semibold uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 transition-all duration-300"
              >
                <Heart className="w-4 h-4" />
                Request a Session
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Sacred Exchange */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-indigo)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal p-8 rounded-2xl border border-[var(--color-solar-gold)]/20 bg-[var(--bg-card)] text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-solar-gold)]/10 border border-[var(--color-solar-gold)]/25 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-[var(--color-solar-gold)]" />
                </div>
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Sacred Exchange
                </h2>
              </div>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed max-w-[600px] mx-auto mb-4">
                The Magikademy honors sacred economics. Your contribution flows from your income on a smooth progressive curve. This preserves access for ALL beings while inviting abundance from those who carry it. The accessibility floor is $4 per month as a minimum aligned exchange.
              </p>
              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/60 leading-relaxed max-w-[600px] mx-auto mb-6">
                Once beings join through the Sacred Exchange, they gain access to everything the Magikademy has to offer, as is aligned and resonant. One flowing circle, one living web.
              </p>
              <a
                href="https://morphoenix.org/booking"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-solar-gold)]/15 border border-[var(--color-solar-gold)]/30 text-[var(--color-solar-gold)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-solar-gold)]/25 transition-all duration-300"
              >
                Explore the Sacred Exchange
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Heartlight Collective Interconnection */}
        <section className="relative py-12 sm:py-16 border-t border-[var(--color-ray-indigo)]/10">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal p-8 rounded-2xl border border-[var(--color-ray-indigo)]/20 bg-gradient-to-br from-[var(--bg-card)] to-[var(--bg-page)]/60 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-ray-indigo)]/10 border border-[var(--color-ray-indigo)]/25 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[var(--color-ray-indigo)]" />
                </div>
                <h2 className="font-display text-[1.6rem] text-[var(--color-solar-gold)]">
                  Heartlight Collective Interconnection
                </h2>
              </div>
              <p className="font-body text-[1rem] text-[var(--text-secondary)]/70 leading-relaxed max-w-[600px] mx-auto mb-4">
                Morphoenix Magikademy is a sovereign interdependent node in the Heartlight Collective web. The Magikademy carries the Ray frequencies, the Heartlight Time and Tools, the sacred texts and guides, the channelings and teachings that support beings on their healing life journey.
              </p>
              <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/65 leading-relaxed max-w-[600px] mx-auto mb-6">
                As a vendor within the Cooperative, the Magikademy flows through invitation. Offerings are shared as contributions to the collective field. Resource sharing flows through the Assurance model. The Magikademy is one voice in the Collective chorus.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                  to="/heartlight"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-ray-indigo)]/15 border border-[var(--color-ray-indigo)]/30 text-[var(--color-ray-indigo)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-ray-indigo)]/25 transition-all duration-300"
                >
                  <Users className="w-4 h-4" />
                  Heartlight Collective
                </Link>
                <a
                  href="https://morphoenix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-heartlight-green)]/10 border border-[var(--color-heartlight-green)]/25 text-[var(--color-heartlight-green)] font-ui text-[0.75rem] uppercase tracking-[0.12em] hover:bg-[var(--color-heartlight-green)]/20 transition-all duration-300"
                >
                  <Leaf className="w-4 h-4" />
                  Visit morphoenix.org
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}