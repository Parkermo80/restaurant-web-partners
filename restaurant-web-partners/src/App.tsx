function RWPLogo({ size = 'md', light = false }: { size?: 'sm' | 'md' | 'lg'; light?: boolean }) {
  const heights = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-24',
  } as const;

  const gold = '#d8b27a';
  const text = light ? '#111827' : '#ffffff';

  return (
    <svg
      viewBox="0 0 980 180"
      className={`${heights[size]} w-auto`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Restaurant Web Partners logo"
    >
      <circle cx="88" cy="90" r="52" stroke={gold} strokeWidth="5" fill="none" />
      <line x1="70" y1="58" x2="70" y2="82" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      <line x1="82" y1="58" x2="82" y2="82" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      <line x1="94" y1="58" x2="94" y2="82" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      <line x1="82" y1="82" x2="82" y2="138" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      <line x1="114" y1="60" x2="114" y2="136" stroke={gold} strokeWidth="5" strokeLinecap="round" />
      <path d="M114 60 C126 72, 126 108, 114 124" stroke={gold} strokeWidth="5" strokeLinecap="round" fill="none" />
      <line x1="154" y1="42" x2="154" y2="138" stroke={gold} strokeWidth="4" />
      <rect x="192" y="46" width="242" height="88" stroke={gold} strokeWidth="4" fill="none" />
      <text x="225" y="108" fill={gold} fontSize="78" fontFamily="Georgia, Times New Roman, serif">RWP</text>
      <text x="474" y="76" fill={text} fontSize="31" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.5">RESTAURANT</text>
      <text x="474" y="112" fill={text} fontSize="31" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.5">WEB</text>
      <text x="474" y="148" fill={text} fontSize="31" fontWeight="700" fontFamily="Arial, sans-serif" letterSpacing="1.5">PARTNERS</text>
    </svg>
  );
}

export default function HospitalityGrowthAgencyWebsite() {
  const processSteps = [
    ['01', 'Strategy Call', 'We start with a conversation about your restaurant, your goals, challenges, operations, and what growth looks like for you.'],
    ['02', 'Custom Game Plan', 'We build a tailored strategy specific to your business and collaborate with our tech partner to design the right digital foundation for long-term growth.'],
    ['03', 'Review & Refine', 'We meet together to walk through the plan, designs, timelines, and deliverables. Your questions shape the final plan to ensure it is the right fit.'],
    ['04', 'Onboard & Kickoff', 'Once everything is approved, we finalize the agreement and kick things off. Your project timeline officially begins.'],
    ['05', 'Build, Launch & Grow', 'We execute the plan, keep you informed every step of the way, and deliver monthly reporting so you can see real, measurable growth.'],
  ] as const;

  const serviceLinks = [
    ['Services', '#services'],
    ['Our Process', '#process'],
    ['About', '#about'],
    ['Partnership', '#partnership'],
  ] as const;

  const serviceCards = [
    ['Websites', 'Premium websites built for how restaurants actually operate.'],
    ['SEO', 'Stronger search visibility that helps the right guests find you first.'],
    ['Reputation', 'Review systems designed to strengthen trust before guests ever arrive.'],
  ] as const;

  const proofCards = [
    ['10+ years digital marketing', 'A decade of hands-on experience building stronger digital positioning for hospitality brands.'],
    ['$270K hospitality sales annually proof', 'Real hospitality performance that reflects operational awareness and revenue understanding.'],
    ['Restaurant management experience', 'A practical understanding of how restaurants operate, serve, and grow from the inside.'],
    ['Built for long-term hospitality businesses', 'Designed for owners who value consistency, trust, and sustainable growth over time.'],
  ] as const;

  const partnershipCards = [
    ['Direct strategic guidance throughout the project', 'You always have a real point of contact for ideas, strategy, questions, and opportunities worth elevating — someone who understands restaurant operations, guest behavior, and where digital decisions directly influence profit.'],
    ['Monthly visibility reporting with clear performance insight', 'Easy-to-follow reporting that shows what is improving and where momentum is building.'],
  ] as const;

  const contactEmail = 'hello@restaurantwebpartners.com';

  return (
    <div className="min-h-screen bg-[#f7f4ee] text-[#121826]">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#05070b]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-4 text-white">
            <RWPLogo size="md" />
          </div>
          <nav className="hidden items-center gap-10 text-sm font-medium text-white/90 md:flex">
            {serviceLinks.map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-[#d8b27a]">
                {label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md border border-[#d8b27a]/70 px-5 py-3 text-sm uppercase tracking-[0.12em] text-white transition hover:bg-[#d8b27a] hover:text-[#111827]"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-[#05070b] text-white">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80"
            alt="Premium restaurant interior"
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,11,0.94),rgba(5,7,11,0.78),rgba(5,7,11,0.52))]" />
          <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex rounded-full border border-[#d8b27a]/40 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b27a]">
                Restaurant websites • SEO • Review trust
              </div>
              <h1 className="max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
                Digital Strategy Built for
                <br />
                Restaurants That Want Real Growth.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
                Websites, SEO, and reputation systems designed around how restaurants actually operate.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="#contact"
                  className="rounded-sm bg-[#c79a5b] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-[#111827] transition hover:bg-[#d8b27a]"
                >
                  Book a Strategy Call
                </a>
                <a
                  href="#services"
                  className="rounded-sm border border-white/30 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-[#d8b27a] hover:text-[#d8b27a]"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#f7f4ee]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto mb-12 flex max-w-3xl flex-col items-center text-center">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[3px] w-20 rounded-full bg-[#c79a5b]" />
                <span className="h-2 w-2 rounded-full bg-[#c79a5b]" />
              </div>
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#111827] sm:text-5xl lg:text-6xl">
                About The Founder
              </h2>
            </div>

            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-xl border border-[#eadfce] bg-white p-10 shadow-xl flex items-center justify-center min-h-[360px] sm:min-h-[460px] lg:min-h-[520px]">
                <div className="text-center">
                  <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#a66f14]">Founder</div>
                  <div className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-[#111827]">Parker Morris</div>
                  <div className="mt-4 h-[2px] w-20 bg-[#c79a5b] mx-auto" />
                  <div className="mt-5 text-lg leading-8 text-[#4b5563] max-w-sm">
                    Hospitality experience combined with digital growth strategy built specifically for restaurants.
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-[#a66f14]">
                  Founder & Digital Growth Strategist
                </div>
                <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#111827] lg:text-4xl">
                  Bridging hospitality experience with high-performance digital marketing.
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-9 text-[#4b5563]">
                  I’m passionate about helping restaurants, cafés, and hospitality brands attract more guests, build trust, and grow revenue through smart websites, SEO, and reputation systems.
                </p>
                <p className="mt-5 max-w-2xl text-lg leading-9 text-[#4b5563]">
                  With a background in restaurant management and over a decade in digital marketing, I understand both sides of the business — operations and growth — and use that perspective to drive real, measurable results.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {proofCards.map(([title, copy], index) => (
                <div key={title} className="rounded-sm border border-[#eadfce] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <div className="flex gap-6">
                    <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#f3eee7] text-2xl font-semibold text-[#a66f14] sm:flex">
                      {index === 0 ? '↗' : index === 1 ? '$' : index === 2 ? '◡' : '✓'}
                    </div>
                    <div>
                      <div className="text-2xl font-semibold leading-tight text-[#111827]">{title}</div>
                      <div className="mt-3 text-base leading-8 text-[#4b5563]">{copy}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="bg-white border-t border-[#eadfce]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.26em] text-[#c79a5b]">Services</div>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.03em] text-[#171717]">Built for how restaurants actually grow.</h2>
              <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-[#4b5563]">
                Every hospitality business requires a different level of digital work depending on where things stand today. That is why every engagement begins with a direct conversation — so we can understand what needs attention now, what should be prioritized first, and where stronger digital systems can create the most practical value.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {serviceCards.map(([title, copy]) => (
                <div key={title} className="rounded-sm border border-[#eadfce] bg-[#fcfaf6] p-8 shadow-sm">
                  <div className="text-2xl font-semibold text-[#111827]">{title}</div>
                  <div className="mt-4 h-[2px] w-16 bg-[#c79a5b]" />
                  <div className="mt-5 text-base leading-8 text-[#4b5563]">{copy}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="bg-[#f7f4ee]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c79a5b]">Our Process</div>
              <h2 className="mt-5 text-5xl font-medium tracking-[-0.03em] text-[#171717]">What Working Together Looks Like</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-[#4b5563]">
                A clear, collaborative process built to create real results for your restaurant.
              </p>
            </div>

            <div className="mt-14 hidden items-stretch gap-5 xl:flex">
              {processSteps.map(([num, title, copy], index) => (
                <div key={num} className="flex items-stretch gap-5">
                  <div className="flex-1 rounded-sm border border-[#d8b27a] bg-white p-7 shadow-sm">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#c79a5b] text-2xl font-semibold text-white">
                      {num}
                    </div>
                    <div className="mt-6 text-[34px] font-medium leading-tight tracking-[-0.03em] text-[#171717]">{title}</div>
                    <div className="mt-4 h-[2px] w-14 bg-[#c79a5b]" />
                    <div className="mt-6 text-base leading-8 text-[#4b5563]">{copy}</div>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="flex items-center justify-center text-5xl text-[#c79a5b]">→</div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-14 grid gap-6 xl:hidden">
              {processSteps.map(([num, title, copy], index) => (
                <div key={num} className="rounded-sm border border-[#d8b27a] bg-white p-7 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#c79a5b] text-2xl font-semibold text-white">
                      {num}
                    </div>
                    <div className="flex-1">
                      <div className="text-2xl font-medium tracking-[-0.02em] text-[#171717]">{title}</div>
                      <div className="mt-3 h-[2px] w-14 bg-[#c79a5b]" />
                      <div className="mt-4 text-base leading-8 text-[#4b5563]">{copy}</div>
                    </div>
                  </div>
                  {index < processSteps.length - 1 && <div className="mt-5 text-center text-4xl text-[#c79a5b]">↓</div>}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-sm border border-[#d8b27a] bg-white p-8 shadow-sm">
              <div className="flex flex-col gap-5 md:flex-row md:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d8b27a] text-xl font-semibold text-[#111827]">✓</div>
                <div>
                  <div className="text-3xl font-semibold tracking-[-0.02em] text-[#171717]">You are Never in the Dark</div>
                  <div className="mt-3 text-lg leading-8 text-[#4b5563]">
                    Clear communication, ongoing updates, and a partner who understands how restaurant operations, guest behavior, and digital decisions connect to profit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="partnership" className="bg-[#05070b] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-8">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c79a5b]">Built together. Built for restaurants.</div>
              <h2 className="mt-6 max-w-2xl text-5xl font-medium leading-[1.08] tracking-[-0.03em] text-white">
                Big-Picture Strategy. Technical Excellence. Stronger Results.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-white/80">
                Our partnership with Worktop gives us the technical depth to build high-performing websites and systems designed specifically for the hospitality industry. That means premium website development, SEO-focused site architecture, technical maintenance, and consistent reporting — while strategy and communication remain focused on what actually matters to restaurant owners.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {partnershipCards.map(([title, copy]) => (
                  <div key={title} className="rounded-sm border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                    <div className="text-xl font-semibold text-white">{title}</div>
                    <div className="mt-3 text-sm leading-7 text-white/70">{copy}</div>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-10 inline-flex rounded-sm bg-[#c79a5b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#111827] transition hover:bg-[#d8b27a]"
              >
                Learn More
              </a>
            </div>

            <div className="flex items-center justify-center rounded-sm border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
              <RWPLogo size="lg" />
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#e7dfd2] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:px-8">
          <div>
            <div className="flex items-center gap-4">
              <RWPLogo size="sm" light />
            </div>
            <div className="mt-8 text-sm font-semibold uppercase tracking-[0.26em] text-[#c79a5b]">Start the conversation</div>
            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.1] tracking-[-0.03em] text-[#171717]">
              Ready to see where your restaurant could be stronger online?
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#4b5563]">
              Send a quick note and we will review where your website, SEO, and reputation systems can better support visibility, trust, and long-term growth.
            </p>
            <a
              href={`mailto:${contactEmail}`}
              className="mt-8 inline-flex rounded-sm border border-[#c79a5b] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#1f2937] transition hover:bg-[#fffaf2]"
            >
              Email Directly
            </a>
          </div>

          <form action={`mailto:${contactEmail}`} method="post" encType="text/plain" className="rounded-sm border border-[#eadfce] bg-[#fcfaf6] p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                Name
                <input name="name" className="rounded-sm border border-[#eadfce] bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#c79a5b]" placeholder="Your name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#111827]">
                Restaurant
                <input name="restaurant" className="rounded-sm border border-[#eadfce] bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#c79a5b]" placeholder="Restaurant name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#111827] sm:col-span-2">
                Email
                <input name="email" type="email" className="rounded-sm border border-[#eadfce] bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#c79a5b]" placeholder="you@example.com" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-[#111827] sm:col-span-2">
                What would you like help improving?
                <textarea name="message" className="min-h-[140px] rounded-sm border border-[#eadfce] bg-white px-4 py-3 text-base font-normal outline-none transition focus:border-[#c79a5b]" placeholder="Website, SEO, reviews, monthly support, or overall digital growth..." />
              </label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-sm bg-[#c79a5b] px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#111827] transition hover:bg-[#d8b27a]">
              Send Inquiry
            </button>
            <p className="mt-4 text-center text-sm leading-6 text-[#6b7280]">
              You will work directly with someone who understands restaurant operations and digital growth.
            </p>
          </form>
        </div>
      </footer>
    </div>
  );
}
