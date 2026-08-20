// Dentello editorial minimalism: asymmetric healthcare layouts, DM Serif Display headlines, Manrope UI copy, Dentello Aqua actions, restrained motion.
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Menu, Star, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://cdn.prod.website-files.com/69e082ebd0ecc5c0a053200a/";
const img = (file: string) => `${CDN}${file}`;
const images = {
  hero: "/manus-storage/dentello-hero_080373ab.jpg",
  treatment: img("69e082ebd0ecc5c0a0532971_Hero%20Image%2001.webp"),
  service1: img("69e082ebd0ecc5c0a05322ac_Service%20Image%2008.webp"),
  service2: img("69e082ebd0ecc5c0a05322ab_Service%20Image%2007.webp"),
  service3: img("69e082ebd0ecc5c0a05322aa_Service%20Image%2006.webp"),
  service4: img("69e082ebd0ecc5c0a05322a9_Service%20Image%2005.webp"),
  about: img("69e082ebd0ecc5c0a0532976_About%20Image%2001.webp"),
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
  cta: "/manus-storage/dentello-smile_8546efd1.jpg",
};

const services = [
  [images.service1, "Teeth Whitening"],
  [images.service2, "Dental Implants"],
  [images.service3, "Smile Makeover"],
  [images.service4, "Orthodontic Treatment"],
];
const plans = [
  { name: "Basic Care Plan", price: "$25/month", items: ["2 Exams & X-rays", "Fluoride treatment", "Priority booking", "10% off procedures"] },
  { name: "Premium Care Plan", price: "$45/month", items: ["4 Exams & X-rays", "Emergency visits", "Whitening session", "20% off procedures"] },
  { name: "Standard Care Plan", price: "$35/month", items: ["3 Exams & X-rays", "Cleaning & polish", "Priority booking", "15% off procedures"] },
];

const patientJourneys = [
  { name: "Sarah Williams", role: "Smile makeover patient", image: images.cta, quote: "Dentello made my treatment feel simple, calm, and genuinely personal.", detail: "A considered smile makeover journey shaped around comfort, clarity, and confidence." },
  { name: "Guy Crona", role: "Restorative care journey", image: images.trusted2, quote: "Explore a guided care journey from first consultation to a confident next step.", detail: "Clear explanations and gentle pacing help every appointment feel more manageable." },
  { name: "Jake Lynch", role: "Preventive care journey", image: images.trusted1, quote: "Discover a calmer approach to long-term dental health.", detail: "Small, consistent habits and thoughtful follow-up support a healthier smile over time." },
  { name: "Mark Thompson", role: "Comfort-first treatment", image: images.trusted3, quote: "See how modern care can feel more human and reassuring.", detail: "From technology to touch, each detail is designed around patient comfort." },
];

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay }}>{children}</motion.div>;
}

function SectionHeading({ children, action }: { children: React.ReactNode; action?: string }) {
  return <div className="section-heading"><h2>{children}</h2>{action && <a className="text-link" href="#contact">{action}<ArrowUpRight size={14} /></a>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePatient, setActivePatient] = useState(0);
  const heroImage = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!heroImage.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.to(heroImage.current, { yPercent: -8, ease: "none", scrollTrigger: { trigger: heroImage.current, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.utils.toArray<HTMLElement>("[data-gsap-section]").forEach((section) => {
        const items = section.querySelectorAll<HTMLElement>(".section-heading, .service-card, .about-copy > *, .about-image, .trusted-row > *, .process-card, .patient-story, .dentist-card, .plan-card, .blog-grid article");
        if (!items.length) return;
        gsap.fromTo(items, { y: 28 }, { y: 0, duration: .72, stagger: .08, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 82%", once: true } });
      });
      gsap.fromTo(".footer-top > *", { y: 22 }, { y: 0, duration: .7, stagger: .12, ease: "power3.out", scrollTrigger: { trigger: ".footer", start: "top 82%", once: true } });
    });
    return () => ctx.revert();
  }, []);

  return <div className="site-shell">
    <header className="site-nav">
      <a className="brand" href="#top"><img src={img("69e082ebd0ecc5c0a0532942_Nav%20Logo.svg")} alt="" /><span>Dentello</span></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"}>{["Home", "About", "Contact", "Services", "Blog"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <a className="btn btn-small nav-cta" href="#contact">Contact us</a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
    </header>

    <main id="top">
      <section className="hero section-pad">
        <div className="hero-container">
          <div className="hero-left">
            <Reveal className="hero-title-block"><p className="eyebrow">A MODERN DENTAL CLINIC</p><h1 className="hero-title">Compassionate Dental Care with Smile Brighter</h1></Reveal>
            <Reveal className="hero-subgrid" delay={0.1}><div className="cta-block"><p className="cta-text">Odio eget praesent a aliquam metus amet at. Varius tempus ac.</p><a href="#contact" className="btn custom-btn">Book an appointment <ArrowUpRight size={15} /></a></div><div className="info-badge"><h3>Dental Clinic</h3><p>Open: Mon–Sat &nbsp;|&nbsp; 9 AM - 6 PM</p></div></Reveal>
            <Reveal className="hero-image-left" delay={0.18}><img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=85" alt="Dental examination" /></Reveal>
          </div>
          <div className="hero-right">
            <Reveal className="hero-image-right" delay={0.12}><img ref={heroImage} src={img("69e082ebd0ecc5c0a0532971_Hero%20Image%2001.webp")} alt="Patient receiving treatment" /></Reveal>
            <Reveal className="review-card" delay={0.2}><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=85" alt="John D." className="avatar" /><div className="review-text"><p className="quote">&quot;Best dental care I've ever received!&quot;</p><span className="author">John D.</span></div></Reveal>
            <div className="scroll-indicator"><span>Scroll down</span><div className="arrow">↓</div></div>
          </div>
        </div>
      </section>

      <section id="services" data-gsap-section className="section-pad services-section"><Reveal><SectionHeading action="View more services">Delivering excellence in dental care services</SectionHeading></Reveal><div className="service-rail">{services.map(([src, title], i) => <Reveal key={title} delay={i * .07} className="service-card"><img src={src} alt={title} /><div className="service-overlay"><span>{title}</span><ArrowUpRight size={17} /></div></Reveal>)}</div></section>

      <section id="about" data-gsap-section className="section-pad about-section"><div className="about-copy"><Reveal><p className="eyebrow">WHY DENTELLO</p><h2>Expert Care for Lifelong Dental Health</h2><p>At Dentello, we believe a healthy smile is the foundation of a happy life. With our team of highly skilled dental professionals and state-of-the-art technology, every visit is shaped around your comfort.</p><a className="text-link" href="#contact">More about <ArrowUpRight size={14} /></a></Reveal><Reveal className="skill-card" delay={.12}><span>Skilled dentists</span><img src={images.dentist1} alt="Skilled dentist" /><ArrowUpRight size={16} /></Reveal></div><Reveal className="about-image" delay={.14}><img src={images.about} alt="Dentist smiling with patient" /></Reveal></section>

      <section data-gsap-section className="trusted section-pad"><Reveal><h2>Trusted care exceptional results<br />every time</h2><p className="trusted-hint">Hover a result to explore</p></Reveal><div className="trusted-row">{[images.trusted1, images.trusted2, images.trusted3, images.trusted4].map((src, i) => <div className={`trusted-panel ${i === 1 ? "is-featured" : ""}`} key={src}><img src={src} alt={`Dental care result ${i + 1}`} /><div className="trusted-caption"><span>0{i + 1}</span><strong>{["Gentle care", "Modern precision", "Confident smiles", "Thoughtful follow-up"][i]}</strong></div></div>)}</div></section>

      <section data-gsap-section className="section-pad process"><Reveal><h2>Seamless dental experience from<br />start to finish</h2></Reveal><div className="process-grid">{[["01", "Oral Assessment", images.process1], ["02", "Teeth Restoration", images.process2], ["03", "Care Consultation", images.process3]].map(([num, title, photo], i) => <Reveal key={num} delay={i * .1} className="process-card"><div className="process-number">{num}<span>Step</span></div><h3>{title}</h3><p>Vitae pretium a faucibus elit dolor. Morbi quam venenatis sagittis.</p><img src={photo} alt={title} /></Reveal>)}</div></section>

      <section id="contact" className="cta-band"><div><p className="eyebrow">YOUR SMILE, YOUR STORY</p><h2>Book your consultation and transform smiles</h2><a className="btn btn-light" href="mailto:hello@dentello.com">Contact us <ArrowUpRight size={15} /></a></div><img src={images.cta} alt="Bright confident smile" /></section>

      <section data-gsap-section className="section-pad patients"><Reveal><h2>Our patients share their<br />smiling journeys</h2></Reveal><div className="patient-story"><div className="story-copy"><div className="story-tabs" role="tablist" aria-label="Patient journeys">{patientJourneys.map((journey, i) => <button key={journey.name} className={i === activePatient ? "active" : ""} role="tab" aria-selected={i === activePatient} onClick={() => setActivePatient(i)}>{journey.name}</button>)}</div><div className="story-panel" key={patientJourneys[activePatient].name}><p>“{patientJourneys[activePatient].quote}”</p><strong>{patientJourneys[activePatient].name}</strong><small>{patientJourneys[activePatient].role}</small><span className="story-detail">{patientJourneys[activePatient].detail}</span></div></div><div className="story-illustration"><img src={patientJourneys[activePatient].image} alt={`${patientJourneys[activePatient].name} journey`} /></div></div></section>

      <section data-gsap-section className="section-pad dentists"><Reveal><SectionHeading action="View more dentist">Trusted dentists dedicated to your smile</SectionHeading></Reveal><div className="dentist-grid">{[[images.dentist1, "Dr. Hannah Morris", "Founder & Chief Dentist"], [images.dentist2, "Chloe Simmons", "Children’s Dental Specialist"], [images.dentist3, "Rachel King", "Senior Dental Hygienist"]].map(([src, name, role]) => <Reveal className="dentist-card" key={name}><img src={src} alt={name} /><div><strong>{name}</strong><span>{role}</span></div></Reveal>)}</div></section>

      <section data-gsap-section className="section-pad plans"><Reveal><h2>Explore our customizable dental care plans</h2></Reveal><div className="plan-grid">{plans.map((plan, i) => <Reveal className={`plan-card ${i === 1 ? "featured" : ""}`} key={plan.name} delay={i * .08}><p className="eyebrow">{plan.name}</p><strong className="price">{plan.price}</strong><a className="btn btn-plan" href="#contact">Get started</a><ul>{plan.items.map(item => <li key={item}><Star size={11} fill="currentColor" />{item}</li>)}</ul></Reveal>)}</div></section>

      <section id="blog" data-gsap-section className="section-pad blog"><Reveal><SectionHeading action="View all blog">Expert tips for maintaining healthy teeth</SectionHeading></Reveal><div className="blog-grid"><article><img src={images.service3} alt="Family dental health" /><div><p className="eyebrow">BEST PRACTICES FOR FAMILY DENTAL HEALTH</p><strong>Make every smile a healthy habit.</strong><span>Esther Howard · Dec 22, 2024</span></div></article><article><img src={images.service2} alt="Technology in dental care" /><div><p className="eyebrow">HOW TECHNOLOGY IMPROVES DENTAL CARE</p><strong>Care shaped by better technology.</strong><span>Jenny Wilson · Dec 23, 2024</span></div></article></div></section>
    </main>

    <footer data-gsap-section className="footer"><div className="footer-top"><div><a className="brand footer-brand" href="#top"><img src={img("69e082ebd0ecc5c0a0532942_Nav%20Logo.svg")} alt="" /><span>Dentello</span></a><h2>Your trusted partner in happiness and health.</h2></div><form onSubmit={(e) => e.preventDefault()}><label htmlFor="email">Stay in the loop</label><div><input id="email" placeholder="Enter your email" type="email" /><button className="btn" type="submit">Submit</button></div></form></div><div className="footer-bottom"><span>© 2025 Dentello. All rights reserved.</span><div><a href="#top">Home</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#services">Services</a><a href="#blog">Blog</a></div></div></footer>
  </div>;
}
