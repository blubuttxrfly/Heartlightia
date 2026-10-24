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
