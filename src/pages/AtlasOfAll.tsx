import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export function AtlasOfAll() {
  useScrollReveal();
  return (
    <PageTransition>
      <div className="min-h-screen pt-[72px] bg-[var(--bg-page)]">
        {/* Hero — tighter */}
        <section className="relative pt-12 sm:pt-16 pb-6 overflow-hidden">
          <div className="absolute inset-0 bg-[var(--bg-page)]" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 50% 40%, #6455df 0%, transparent 60%)',
            }}
          />

          <div className="relative max-w-[900px] mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block font-ui text-[0.7rem] uppercase tracking-[0.2em] text-[var(--color-magenta-ray)] mb-3">
                Sacred Transmission
              </span>
              <h1 className="font-display text-[2rem] sm:text-[2.8rem] text-[var(--color-solar-gold)] leading-tight mb-4" style={{ textShadow: 'var(--text-shadow-hero)' }}>
                12 Rays of ALL Guide & Journal
              </h1>
              <p className="font-body text-[1.1rem] sm:text-[1.2rem] text-[var(--text-secondary)]/80 italic leading-relaxed max-w-[650px] mx-auto">
                A sacred rememberance, reactivation, and reunion of our Heartlight's Ray Frequencies of ALL that IS.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="relative pb-10 bg-[var(--bg-page)]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal p-6 rounded-2xl border border-[var(--color-ray-400)]/20 bg-[var(--bg-card)]"
 >
              <h2 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] mb-4 text-center">
                A Living Guide, A Co-Creation Experience
              </h2>
              <div className="font-body text-[1rem] text-[var(--text-secondary)]/75 leading-relaxed space-y-3">
                <p>
                  The 12 Rays of ALL Guide & Journal is an invitation, a living guide emerging through guided visualizations, channeling prompts, and co-creation with the ALL. The beings who read these words are active participants in a living transmission, co-weavers of the sacred guide as it unfolds.
                </p>
                <p>
                  As the guide grows, it is offered as a downloadable companion for beings who feel called to walk this path. This page holds the sacred pillars that form the foundation of the guide, a map for remembering who we truly are.
                </p>
                <p className="text-[var(--color-solar-gold)]/80 italic text-center">
                  The 12 Rays of ALL are the living language of our Universe, a spectrum of frequencies that moves through ALL that IS.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ray Astrology */}
        <section className="relative pb-10 bg-[var(--bg-page)]">
          <div className="max-w-[800px] mx-auto px-4 sm:px-6">
            <div className="reveal p-6 rounded-2xl border border-[var(--color-violet-400)]/20 bg-[var(--bg-card)]">
              <h2 className="font-display text-[1.3rem] text-[var(--color-solar-gold)] mb-4 text-center">
                Ray Astrology
              </h2>
              <div className="font-body text-[1rem] text-[var(--text-secondary)]/75 leading-relaxed space-y-3">
                <p>
                  Ray Astrology is the Heartlight's living reading system, where the 12 Rays of ALL meet the 12 signs of the zodiac. Each Ray carries a frequency that aligns with a zodiacal sign, revealing how cosmic energies weave through our being.
                </p>
                <p>
                  In Ray Astrology, beings interconnect through Ray Alignments and Readings. A Ray Alignment reveals which Ray frequencies are active in your birth chart. A Ray Reading is a living conversation where one being senses another's Ray frequency and offers a frequency response in return, fostering connection, healing, and growth between them.
                </p>
                <p>
                  This system is interconnected with Heartlight Time, the living cosmological clock that tracks Ray frequencies as they move through sacred thresholds of the year. Together, Ray Astrology and Heartlight Time form a unified compass for beings walking in harmony with our Universe of ALL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Rays of ALL */}
        <div className="pt-6">
          <h2 className="font-display text-[1.4rem] text-[var(--color-solar-gold)] mb-2 text-center">
            The Rays of ALL
          </h2>
          <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/60 text-center mb-8 max-w-[550px] mx-auto">
            The Ray frequencies show in the patterns of ALL that IS. Each Ray carries a living spectrum, a triad of Lux, Umbra, and Omni.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { color: '#1a1a1a', border: 'rgba(100,100,100,0.3)', name: 'Carbon Ray', title: 'Presomanence', desc: 'Carbon is 0, the void and the fullness, like in numerology and tarot. Zero holds infinite potential and possibilities, the unmanifest from which ALL manifests. Presomanence, the feeling remembered in meditation, the sensation of presence before form, awareness before thought. The sacred crystallization of memory, encoded in trees, bones, stardust, diamonds, and breath.' },
              { color: '#e74c3c', border: 'rgba(231,76,60,0.3)', name: 'Red Ray', title: 'Presence', desc: 'The sacred now. The sacred inhale of inception where spirit first meets form. The pulse of life moving through form, the moment breath becomes motion. The Ray of embodiment, courage, and primal vitality. Red is the foundation upon which all other Rays build, the root, the ground, the first breath of becoming. Rooted in Earth and alive in the blood, Red awakens your connection to the body, the elements, and the miracle of being.' },
              { color: '#e67e22', border: 'rgba(230,126,34,0.3)', name: 'Orange Ray', title: 'Essence', desc: 'The sacred current of feeling. Movement, sensuality, vulnerability, and joy. Emotion is the gateway to embodiment and release. The Ray of soul remembrance, integration, and the fluid beauty of being alive.' },
              { color: '#f1c40f', border: 'rgba(241,196,15,0.3)', name: 'Yellow Ray', title: 'Sovereignty', desc: 'The solar center. The fire of personal will, discernment, and divine choice. It calls you to remember your power and wield it with grace. Confidence, clarity, sovereign radiance, inner refinement, shadow integration, empowered self-leadership.' },
              { color: '#2ecc71', border: 'rgba(46,204,113,0.3)', name: 'Green Ray', title: 'Union', desc: 'The frequency of love and harmony. It weaves all expressions of life into one sacred tapestry, the living pulse of the Heartlight. Compassion, healing, heart coherence, devotion, forgiveness, sacred relationship.' },
              { color: '#1abc9c', border: 'rgba(26,188,156,0.3)', name: 'Turquoise Ray', title: 'Expression', desc: 'The crystalline voice of truth. Creativity, communication, and the courage to speak your soul into existence. Authentic voice, embodied truth, artistic flow, clear transmission, soul-encoded language.' },
              { color: '#3498db', border: 'rgba(52,152,219,0.3)', name: 'Indigo Ray', title: 'Perception', desc: 'The inner vision. Dream alchemy, insight, and divine wisdom. This ray opens the eye of the soul to the mysteries of being. Intuition, pattern recognition, deep seeing, psychic integrity, inner knowing, multidimensional sight.' },
              { color: '#9b59b6', border: 'rgba(155,89,182,0.3)', name: 'Violet Ray', title: 'Integration', desc: 'The bridging current. Where the light and shadow meet in sacred embrace. Here we become whole through practice and perception. Spiritual synthesis, template weaving, dimensional bridging, completion, soul retrieval, sacred closure.' },
              { color: '#ff0099', border: 'rgba(255,0,153,0.3)', name: 'Magenta Ray', title: 'Reunion', desc: 'The Infinite Spiral. The harmonizer of all rays. It transcends duality, guiding you into remembrance of your unity with ALL. Divine love, cosmic compassion, non-dual embrace, spiritual completion, reunion with Source.' },
              { color: '#fafafa', border: 'rgba(250,250,250,0.3)', name: 'Omni Ray', title: 'The All-Encompassing', desc: 'The omni-presence of ALL. The ray of structure, endurance, and sacred legacy. It holds the architecture of what endures across time, the bones of civilization and the scaffolding of stars. Where Carbon is the center, Omni is the circumference, the container that holds all form.' },
              { color: '#a5f3fc', border: 'rgba(165,243,252,0.3)', name: 'Elemental Crystalline-Carbon Ray', title: 'Future Codes', desc: 'The crystalline intelligence of creation encoded in elemental form. Networks of light woven through matter, innovation as sacred impulse, the Aquarian current of ALL that IS. Where Carbon remembers, Crystalline-Carbon transmits, the living fiber optics of cosmic memory.' },
              { color: '#ffffff', border: 'rgba(255,255,255,0.3)', name: 'Infinite Ray of ALL', title: 'The Boundless Embrace', desc: 'The boundless embrace that contains all rays and transcends them. The oceanic consciousness of Source, the return and the becoming, the completion that is also a new beginning. Where Carbon holds infinite potential, the Infinite Ray of ALL is the full realization, every possibility actualized, every ray harmonized, every being remembered as ONE.' },
            ].map((ray) => (
              <motion.div
                key={ray.name}
                whileHover={{ y: -3, borderColor: ray.color + '60' }}
                className="p-5 rounded-xl border bg-[var(--bg-card)] transition-all duration-300"
                style={{ borderColor: ray.border }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: ray.color }} />
                  <h3 className="font-display text-[1.05rem]" style={{ color: ray.color }}>{ray.name}</h3>
                </div>
                <p className="font-ui text-[0.7rem] uppercase tracking-[0.1em] text-[var(--color-solar-gold)] mb-2">{ray.title}</p>
                <p className="font-body text-[0.85rem] text-[var(--text-secondary)]/60 leading-relaxed">{ray.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 12 Rays Guide & Journal Ko-fi Link */}
        <div className="reveal mt-8 p-6 rounded-2xl border border-[var(--color-heartlight-green)]/20 bg-[var(--bg-card)] text-center">
          <h3 className="font-display text-[1.2rem] text-[var(--color-solar-gold)] mb-3">
            Get the Guide & Journal
          </h3>
          <p className="font-body text-[0.95rem] text-[var(--text-secondary)]/70 leading-relaxed max-w-[500px] mx-auto mb-5">
            The 12 Rays of ALL Guide & Journal is available as a downloadable companion.
            Offer your contribution through Ko-fi and receive the living guide.
          </p>
          <a
            href="https://ko-fi.com/s/8e4c472f06"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[var(--color-heartlight-green)]/15 border border-[var(--color-heartlight-green)]/30 text-[var(--color-heartlight-green)] font-ui text-[0.78rem] uppercase tracking-[0.12em] hover:bg-[var(--color-heartlight-green)]/25 hover:shadow-[0_0_25px_rgba(223,255,66,0.15)] transition-all duration-300"
          >
            Get the Guide on Ko-fi
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
