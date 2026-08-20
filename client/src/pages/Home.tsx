// Dentello full redesign: luxury healthcare editorialism, asymmetric composition, warm human microcopy, calm motion, and Dentello Aqua actions.
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, Menu, Star, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://cdn.prod.website-files.com/69e082ebd0ecc5c0a053200a/";
const img = (file: string) => `${CDN}${file}`;
const images = {
  hero: img("69e082ebd0ecc5c0a0532971_Hero%20Image%2001.webp"),
  videoPoster: img("69e082ebd0ecc5c0a0532971_Hero%20Image%2001.webp"),
  about: img("69e082ebd0ecc5c0a0532976_About%20Image%2001.webp"),
  service1: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1400&q=88",
  service2: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=88",
  service3: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=88",
  service4: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=1200&q=88",
  trusted1: img("69e082ebd0ecc5c0a0532972_Trast%20Image%2001.webp"),
  trusted2: img("69e082ebd0ecc5c0a0532969_Trast%20Image%2002.webp"),
  trusted3: img("69e082ebd0ecc5c0a053296d_Trast%20Image%2003.webp"),
  trusted4: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=900&q=85",
  process1: img("69e082ebd0ecc5c0a053296a_Process%20Image%2001.webp"),
  process2: img("69e082ebd0ecc5c0a0532963_Process%20Image%2002.png"),
  process3: img("69e082ebd0ecc5c0a0532968_Process%20Image%2003.png"),
  dentist1: "/manus-storage/dentello-dentist_cc265215.jpg",
  dentist2: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&w=900&q=85",
  dentist3: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=900&q=85",
  smile: "/manus-storage/dentello-smile_8546efd1.jpg",
};

const services = [
  [images.service1, "Preventive care", "A calmer foundation for lifelong oral health."],
  [images.service2, "Restorative dentistry", "Precision care that feels considered."],
  [images.service3, "Smile design", "Subtle changes, confident results."],
  [images.service4, "Family dentistry", "Thoughtful care for every generation."],
];
const plans = [
  { name: "Essential", price: "$25", note: "per month", items: ["2 exams & x-rays", "Fluoride treatment", "Priority booking"] },
  { name: "Complete", price: "$45", note: "per month", items: ["4 exams & x-rays", "Emergency visits", "Whitening session"] },
  { name: "Family", price: "$35", note: "per month", items: ["3 exams & x-rays", "Cleaning & polish", "15% off procedures"] },
];
const patientJourneys = [
  { name: "Sarah Williams", role: "Smile makeover", image: images.smile, quote: "Dentello made my treatment feel simple, calm, and genuinely personal.", detail: "A considered smile makeover shaped around comfort, clarity, and confidence." },
  { name: "Guy Crona", role: "Restorative care", image: images.trusted2, quote: "Clear explanations made every next step feel manageable.", detail: "A guided care journey with gentle pacing from consultation to follow-up." },
  { name: "Jake Lynch", role: "Preventive care", image: images.trusted1, quote: "The first dental visit I actually looked forward to.", detail: "Small, consistent habits and thoughtful follow-up for a healthier smile." },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: .72, ease: [0.23, 1, 0.32, 1], delay }}>{children}</motion.div>;
}
function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow">{children}</p>; }
function ActionLink({ children }: { children: React.ReactNode }) { return <a className="text-link" href="#contact">{children}<ArrowUpRight size={14} /></a>; }

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePatient, setActivePatient] = useState(0);
  const parallaxRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      if (parallaxRef.current) gsap.to(parallaxRef.current, { yPercent: -8, ease: "none", scrollTrigger: { trigger: parallaxRef.current, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(".section-intro, .service-feature, .service-small, .expert-copy > *, .expert-visual, .trusted-panel, .timeline-item, .patient-editorial, .dentist-card, .plan-card, .journal-feature, .journal-small");
        if (items.length) gsap.fromTo(items, { y: 26 }, { y: 0, duration: .72, stagger: .07, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } });
      });
      gsap.fromTo(".footer-content > *", { y: 18 }, { y: 0, duration: .65, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: ".footer", start: "top 82%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  return <div className="site-shell">
    <header className="site-nav"><a className="brand" href="#top"><img src={img("69e082ebd0ecc5c0a0532942_Nav%20Logo.svg")} alt="" /><span>Dentello</span></a><nav className={menuOpen ? "nav-links is-open" : "nav-links"}>{["About", "Services", "Patients", "Journal"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav><a className="btn btn-small nav-cta" href="#contact">Book appointment <ArrowUpRight size={13} /></a><button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></header>

    <main id="top">
      <section className="hero-new section-pad"><div className="hero-new-grid"><div className="hero-copy"><Reveal><Eyebrow>Independent dental studio / Since 2009</Eyebrow><h1>Care that makes<br /><em>smiles feel</em> brighter.</h1><p className="hero-lede">Modern dentistry with a softer point of view. We take the time to make every visit feel clear, calm, and completely yours.</p><div className="hero-actions"><a className="btn custom-btn" href="#contact">Book an appointment <ArrowUpRight size={15} /></a><span className="hero-note">Open Mon–Sat <i /> 9 AM–6 PM</span></div></Reveal><div className="hero-stamp"><span>01</span><strong>Human care,<br />considered deeply.</strong></div></div><div className="hero-art"><Reveal className="hero-portrait"><img ref={parallaxRef} src={images.hero} alt="Dentist caring for a patient" /><span className="image-tag">Care, in focus ↗</span></Reveal><Reveal className="hero-video-new" delay={.12}><video autoPlay muted loop playsInline preload="metadata" poster={images.videoPoster} aria-label="Muted dental care video"><source src="https://res.cloudinary.com/gn8mdjia/video/upload/f_auto,q_auto/18203708-hd_1920_1080_60fps.mp4" type="video/mp4" /></video></Reveal><div className="hero-quote"><span>“</span><p>Best dental care<br />I've ever received.</p><small>John D. / patient</small></div></div></div><div className="hero-scroll"><span>Scroll to explore</span><ArrowDown size={16} /></div></section>

      <section className="manifesto"><div className="manifesto-inner"><Eyebrow>The Dentello difference</Eyebrow><h2>Exceptional dentistry,<br /><span>delivered by people who care.</span></h2><p>Every detail is designed to help you feel more informed, more comfortable, and more confident in your smile.</p></div><div className="manifesto-number">02</div></section>

      <section id="services" data-gsap-section className="section-pad services-new"><div className="section-intro"><div><Eyebrow>01 / Services</Eyebrow><h2>Thoughtful care<br />for every smile.</h2></div><ActionLink>Explore services</ActionLink></div><div className="service-mosaic"><Reveal className="service-feature"><img src={services[0][0]} alt={services[0][1]} /><div><Eyebrow>Featured care</Eyebrow><h3>{services[0][1]}</h3><p>{services[0][2]}</p><ArrowUpRight size={20} /></div></Reveal><div className="service-stack">{services.slice(1).map(([src, title, desc], i) => <Reveal className="service-small" delay={i * .08} key={title}><img src={src} alt={title} /><div><span>0{i + 2}</span><h3>{title}</h3><ArrowUpRight size={16} /></div></Reveal>)}</div></div></section>

      <section id="about" data-gsap-section className="section-pad expert-new"><div className="expert-visual"><Reveal><img src={images.about} alt="Dentist smiling with patient" /></Reveal><div className="expert-caption">Patient-first care<br />from first hello to follow-up.</div></div><div className="expert-copy"><Reveal><Eyebrow>02 / Expertise</Eyebrow><h2>Care that feels<br /><em>human</em> first.</h2><p>We combine experienced hands, modern technology, and a little more time listening. The result is dentistry that feels as good as it looks.</p><ActionLink>Meet our approach</ActionLink></Reveal><div className="expert-metrics"><div><strong>15+</strong><span>years of experience</span></div><div><strong>4.9</strong><span>patient experience</span></div><div><strong>01</strong><span>care philosophy</span></div></div></div></section>

      <section data-gsap-section className="trusted-new section-pad"><div className="section-intro"><div><Eyebrow>03 / Results</Eyebrow><h2>Trusted care.<br />Exceptional results.</h2></div><p>Hover to move through the moments that matter.</p></div><div className="trusted-row">{[images.trusted1, images.trusted2, images.trusted3, images.trusted4].map((src, i) => <div className="trusted-panel" key={src}><img src={src} alt={`Dental care result ${i + 1}`} /><div className="trusted-caption"><span>0{i + 1}</span><strong>{["Gentle care", "Modern precision", "Confident smiles", "Thoughtful follow-up"][i]}</strong></div></div>)}</div></section>

      <section data-gsap-section className="section-pad timeline-new"><div className="section-intro"><div><Eyebrow>04 / Your visit</Eyebrow><h2>A better dental<br />experience, end to end.</h2></div><p>Simple steps. Clear answers. No surprises.</p></div><div className="timeline-track">{[["01", "Listen first", "We start with your story, not a clipboard.", images.process1], ["02", "Make a plan", "A clear route forward, shaped around you.", images.process2], ["03", "Care well", "Thoughtful treatment and calm follow-up.", images.process3]].map(([num, title, desc, photo], i) => <Reveal className="timeline-item" delay={i * .08} key={num}><div className="timeline-top"><span>{num}</span><span>Step</span></div><img src={photo} alt={title} /><h3>{title}</h3><p>{desc}</p></Reveal>)}</div></section>

      <section id="contact" className="cta-new"><div className="cta-new-copy"><Eyebrow>Your smile, your story</Eyebrow><h2>Ready for a<br /><em>better</em> visit?</h2><p>Book a consultation and discover dental care with a little more humanity.</p><a className="btn btn-light" href="mailto:hello@dentello.com">Book a consultation <ArrowUpRight size={15} /></a></div><div className="cta-new-image"><img src={images.smile} alt="Confident smiling patient" /><span>Start with a conversation ↗</span></div></section>

      <section id="patients" data-gsap-section className="section-pad patients-new"><div className="section-intro"><div><Eyebrow>05 / Patient stories</Eyebrow><h2>Smiles have<br />stories too.</h2></div><p>Real journeys. Real people. A softer way through care.</p></div><div className="patient-editorial"><div className="patient-words"><div className="story-tabs" role="tablist" aria-label="Patient journeys">{patientJourneys.map((journey, i) => <button key={journey.name} className={i === activePatient ? "active" : ""} role="tab" aria-selected={i === activePatient} onClick={() => setActivePatient(i)}>{journey.name}</button>)}</div><div className="story-panel" key={patientJourneys[activePatient].name}><span className="quote-mark">“</span><p>{patientJourneys[activePatient].quote}</p><strong>{patientJourneys[activePatient].name}</strong><small>{patientJourneys[activePatient].role}</small><span className="story-detail">{patientJourneys[activePatient].detail}</span></div></div><div className="patient-image"><img src={patientJourneys[activePatient].image} alt={`${patientJourneys[activePatient].name} journey`} /><span>Patient journey / 0{activePatient + 1}</span></div></div></section>

      <section data-gsap-section className="section-pad team-new"><div className="section-intro"><div><Eyebrow>06 / The team</Eyebrow><h2>Good people<br />behind good care.</h2></div><ActionLink>Meet the team</ActionLink></div><div className="team-grid"><Reveal className="dentist-card team-lead"><img src={images.dentist1} alt="Dr. Hannah Morris" /><div><strong>Dr. Hannah Morris</strong><span>Founder / Chief dentist</span><small>Preventive care & restorative dentistry</small></div></Reveal><Reveal className="dentist-card"><img src={images.dentist2} alt="Chloe Simmons" /><div><strong>Chloe Simmons</strong><span>Children's specialist</span><small>Gentle care for growing smiles</small></div></Reveal><Reveal className="dentist-card"><img src={images.dentist3} alt="Rachel King" /><div><strong>Rachel King</strong><span>Senior hygienist</span><small>Confident routines, made simple</small></div></Reveal></div></section>

      <section data-gsap-section className="section-pad plans-new"><div className="section-intro"><div><Eyebrow>07 / Care plans</Eyebrow><h2>Good care should<br />feel simple.</h2></div><p>Choose a rhythm that keeps your smile moving in the right direction.</p></div><div className="plans-list">{plans.map((plan, i) => <Reveal className={`plan-card ${i === 1 ? "featured" : ""}`} key={plan.name} delay={i * .08}><div><Eyebrow>{plan.name}</Eyebrow><strong className="price">{plan.price}<small>/{plan.note}</small></strong></div><p>{plan.items[0]}</p><ul>{plan.items.slice(1).map(item => <li key={item}><Star size={11} fill="currentColor" />{item}</li>)}</ul><a className="btn btn-plan" href="#contact">Choose plan <ArrowUpRight size={14} /></a></Reveal>)}</div></section>

      <section id="journal" data-gsap-section className="section-pad journal-new"><div className="section-intro"><div><Eyebrow>08 / Journal</Eyebrow><h2>Notes for a<br />healthier smile.</h2></div><ActionLink>Read the journal</ActionLink></div><div className="journal-grid"><Reveal className="journal-feature"><img src={images.service4} alt="Family dental health" /><div><Eyebrow>Family dental health / 5 min read</Eyebrow><h3>Make every smile a healthy habit.</h3><span>Esther Howard · Dec 22, 2024</span></div></Reveal><Reveal className="journal-small"><img src={images.service3} alt="Technology in dental care" /><div><Eyebrow>Better technology / 4 min read</Eyebrow><h3>Care shaped by better technology.</h3><span>Jenny Wilson · Dec 23, 2024</span></div></Reveal></div></section>
    </main>

    <footer className="footer-new"><div className="footer-content"><div className="footer-brand-block"><a className="brand footer-brand" href="#top"><img src={img("69e082ebd0ecc5c0a0532942_Nav%20Logo.svg")} alt="" /><span>Dentello</span></a><h2>Exceptional care.<br /><em>Humanly delivered.</em></h2><p>Thoughtful dentistry for people who want to feel looked after.</p></div><div className="footer-links"><div><span>Explore</span><a href="#about">About</a><a href="#services">Services</a><a href="#patients">Patients</a></div><div><span>Visit</span><a href="#contact">Book a visit</a><a href="#journal">Journal</a><a href="mailto:hello@dentello.com">Email us</a></div><div><span>Find us</span><small>Mon–Sat / 9 AM–6 PM</small><small>hello@dentello.com</small><small>Made for every smile.</small></div></div><a className="footer-orb" href="#contact"><span>🙂</span><strong>Smile<br />brighter</strong><ArrowUpRight size={18} /></a></div><div className="footer-bottom"><span>© 2025 Dentello Care</span><span>Designed with care / Back to top ↑</span></div></footer>
  </div>;
}
