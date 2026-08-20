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
  process1: img("69e082ebd0ecc5c0a053296a_Process%20Image%2001.webp"),
  process2: img("69e082ebd0ecc5c0a0532963_Process%20Image%2002.png"),
  process3: img("69e082ebd0ecc5c0a0532968_Process%20Image%2003.png"),
  dentist1: "/manus-storage/dentello-dentist_cc265215.jpg",
  dentist2: img("69e082ebd0ecc5c0a0532960_Team%20Image%2002.webp"),
  dentist3: img("69e082ebd0ecc5c0a0532961_Team%20Image%2003.webp"),
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

function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 24 }} whileInView={reduce ? undefined : { opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1], delay }}>{children}</motion.div>;
}

function SectionHeading({ children, action }: { children: React.ReactNode; action?: string }) {
  return <div className="section-heading"><h2>{children}</h2>{action && <a className="text-link" href="#contact">{action}<ArrowUpRight size={14} /></a>}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroImage = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!heroImage.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => gsap.to(heroImage.current, { yPercent: -8, ease: "none", scrollTrigger: { trigger: heroImage.current, start: "top bottom", end: "bottom top", scrub: true } }));
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
        <Reveal className="hero-copy"><p className="eyebrow">A MODERN DENTAL CLINIC</p><h1>Compassionate Dental Care with Smile Brighter</h1><div className="hero-meta"><div><p>Odio eget praesent a aliquam metus amet at. Varius tempus ac.</p><a className="btn" href="#contact">Book an appointment <ArrowUpRight size={15} /></a></div><div className="clinic-note"><strong>Dental Clinic</strong><span>Open: Mon–Sat &nbsp; | &nbsp; 9 AM - 6 PM</span></div></div></Reveal>
        <Reveal className="hero-portrait" delay={0.12}><img ref={heroImage} src={images.hero} alt="Dentist caring for a patient" /></Reveal>
        <Reveal className="hero-wide" delay={0.22}><img src={images.treatment} alt="Dental treatment in progress" /><div className="quote-card"><img src={images.dentist1} alt="Patient portrait" /><div><strong>Best dental care I've ever received!</strong><span>John D.</span></div></div></Reveal>
        <div className="scroll-cue"><span>Scroll down</span><span className="scroll-line" /></div>
      </section>

      <section id="services" className="section-pad services-section"><Reveal><SectionHeading action="View more services">Delivering excellence in dental care services</SectionHeading></Reveal><div className="service-rail">{services.map(([src, title], i) => <Reveal key={title} delay={i * .07} className="service-card"><img src={src} alt={title} /><div className="service-overlay"><span>{title}</span><ArrowUpRight size={17} /></div></Reveal>)}</div></section>

      <section id="about" className="section-pad about-section"><div className="about-copy"><Reveal><p className="eyebrow">WHY DENTELLO</p><h2>Expert Care for Lifelong Dental Health</h2><p>At Dentello, we believe a healthy smile is the foundation of a happy life. With our team of highly skilled dental professionals and state-of-the-art technology, every visit is shaped around your comfort.</p><a className="text-link" href="#contact">More about <ArrowUpRight size={14} /></a></Reveal><Reveal className="skill-card" delay={.12}><span>Skilled dentists</span><img src={images.dentist1} alt="Skilled dentist" /><ArrowUpRight size={16} /></Reveal></div><Reveal className="about-image" delay={.14}><img src={images.about} alt="Dentist smiling with patient" /></Reveal></section>

      <section className="trusted section-pad"><Reveal><h2>Trusted care exceptional results<br />every time</h2></Reveal><div className="trusted-stack"><img className="trust-back" src={images.trusted1} alt="Dental care result" /><img className="trust-mid" src={images.trusted2} alt="Dental care result" /><img className="trust-front" src={images.trusted3} alt="Dental care result" /></div></section>

      <section className="section-pad process"><Reveal><h2>Seamless dental experience from<br />start to finish</h2></Reveal><div className="process-grid">{[["01", "Oral Assessment", images.process1], ["02", "Teeth Restoration", images.process2], ["03", "Care Consultation", images.process3]].map(([num, title, photo], i) => <Reveal key={num} delay={i * .1} className="process-card"><div className="process-number">{num}<span>Step</span></div><h3>{title}</h3><p>Vitae pretium a faucibus elit dolor. Morbi quam venenatis sagittis.</p><img src={photo} alt={title} /></Reveal>)}</div></section>

      <section id="contact" className="cta-band"><div><p className="eyebrow">YOUR SMILE, YOUR STORY</p><h2>Book your consultation and transform smiles</h2><a className="btn btn-light" href="mailto:hello@dentello.com">Contact us <ArrowUpRight size={15} /></a></div><img src={images.cta} alt="Bright confident smile" /></section>

      <section className="section-pad patients"><Reveal><h2>Our patients share their<br />smiling journeys</h2></Reveal><div className="patient-story"><div className="story-copy"><div className="story-tabs"><span className="active">Sarah Williams</span><span>Guy Crona</span><span>Jake Lynch</span><span>Mark Thompson</span></div><p>“Dentello made my treatment feel simple, calm, and genuinely personal. The team listened first, explained every step, and helped me feel proud of my smile again.”</p><strong>Sarah Williams</strong><small>Smile makeover patient</small></div><div className="story-illustration"><img src="/manus-storage/dentello-smile_8546efd1.jpg" alt="Smiling patient" /></div></div></section>

      <section className="section-pad dentists"><Reveal><SectionHeading action="View more dentist">Trusted dentists dedicated to your smile</SectionHeading></Reveal><div className="dentist-grid">{[[images.dentist1, "Dr. Hannah Morris", "Founder & Chief Dentist"], [images.dentist2, "Chloe Simmons", "Children’s Dental Specialist"], [images.dentist3, "Rachel King", "Senior Dental Hygienist"]].map(([src, name, role]) => <Reveal className="dentist-card" key={name}><img src={src} alt={name} /><div><strong>{name}</strong><span>{role}</span></div></Reveal>)}</div></section>

      <section className="section-pad plans"><Reveal><h2>Explore our customizable dental care plans</h2></Reveal><div className="plan-grid">{plans.map((plan, i) => <Reveal className={`plan-card ${i === 1 ? "featured" : ""}`} key={plan.name} delay={i * .08}><p className="eyebrow">{plan.name}</p><strong className="price">{plan.price}</strong><a className="btn btn-plan" href="#contact">Get started</a><ul>{plan.items.map(item => <li key={item}><Star size={11} fill="currentColor" />{item}</li>)}</ul></Reveal>)}</div></section>

      <section id="blog" className="section-pad blog"><Reveal><SectionHeading action="View all blog">Expert tips for maintaining healthy teeth</SectionHeading></Reveal><div className="blog-grid"><article><img src={images.service3} alt="Family dental health" /><div><p className="eyebrow">BEST PRACTICES FOR FAMILY DENTAL HEALTH</p><strong>Make every smile a healthy habit.</strong><span>Esther Howard · Dec 22, 2024</span></div></article><article><img src={images.service2} alt="Technology in dental care" /><div><p className="eyebrow">HOW TECHNOLOGY IMPROVES DENTAL CARE</p><strong>Care shaped by better technology.</strong><span>Jenny Wilson · Dec 23, 2024</span></div></article></div></section>
    </main>

    <footer className="footer"><div className="footer-top"><div><a className="brand footer-brand" href="#top"><img src={img("69e082ebd0ecc5c0a0532942_Nav%20Logo.svg")} alt="" /><span>Dentello</span></a><h2>Your trusted partner in happiness and health.</h2></div><form onSubmit={(e) => e.preventDefault()}><label htmlFor="email">Stay in the loop</label><div><input id="email" placeholder="Enter your email" type="email" /><button className="btn" type="submit">Submit</button></div></form></div><div className="footer-bottom"><span>© 2025 Dentello. All rights reserved.</span><div><a href="#top">Home</a><a href="#about">About</a><a href="#contact">Contact</a><a href="#services">Services</a><a href="#blog">Blog</a></div></div></footer>
  </div>;
}
