"use client";

import { useState } from "react";

const regions = [
  "South West",
  "North West",
  "West",
  "Centre",
  "East",
  "Littoral",
  "Adamawa",
  "Far North",
];

const values = [
  "Honesty",
  "Responsibility",
  "Equality",
  "Empathy",
  "Charity",
  "Commitment",
  "Success",
  "Respect",
  "Passion",
  "Self-sufficiency",
];

const programs = [
  {
    number: "01",
    icon: "people",
    title: "Youth & women empowerment",
    text: "Create opportunities for young people and women to build skills, confidence, and active roles in community life.",
    tag: "Opportunity",
  },
  {
    number: "02",
    icon: "health",
    title: "Health & wellbeing",
    text: "Promote sexual and reproductive health, HIV/AIDS and other STDs awareness, and informed choices for young people.",
    tag: "Health",
  },
  {
    number: "03",
    icon: "voice",
    title: "Good governance",
    text: "Encourage accountability, civic participation, and inclusive policies that make room for youth voices.",
    tag: "Participation",
  },
  {
    number: "04",
    icon: "shield",
    title: "Human rights & inclusion",
    text: "Challenge marginalization and inequality while standing with orphans, vulnerable children, and socially excluded people.",
    tag: "Dignity",
  },
];

const initiatives = [
  {
    image: "/images/training.jpg",
    alt: "Young people taking part in a classroom training session",
    label: "Empowerment",
    title: "BONET IT and Empowerment Training",
    className: "initiative-card initiative-card--wide",
  },
  {
    image: "/images/srhr-schools.jpg",
    alt: "A facilitator leading a sexual and reproductive health lesson in a school",
    label: "Health",
    title: "SRHR in Schools",
    className: "initiative-card initiative-card--tall",
  },
  {
    image: "/images/community-outreach.jpg",
    alt: "BONET community outreach team members",
    label: "Community",
    title: "Communal visit to orphanages",
    className: "initiative-card",
  },
  {
    image: "/images/youth-action.jpg",
    alt: "Community members gathered for a youth advocacy activity",
    label: "Advocacy",
    title: "Youth Community Action",
    className: "initiative-card",
  },
  {
    image: "/images/community-support.jpg",
    alt: "BONET team members meeting with a community member",
    label: "Social impact",
    title: "Project 50-50-50",
    className: "initiative-card",
  },
];

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="BONET home">
      <img src="/bonet-logo.png" alt="" width="132" height="55" />
    </a>
  );
}

function ProgramIcon({ kind }: { kind: string }) {
  if (kind === "health") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 27s-10-5.8-10-13a5.5 5.5 0 0 1 10-3.1A5.5 5.5 0 0 1 26 14c0 7.2-10 13-10 13Z" />
        <path d="M12 16h8M16 12v8" />
      </svg>
    );
  }
  if (kind === "voice") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 5a10 10 0 0 0-5.4 18.4L10 28l5.2-2.7A10 10 0 1 0 16 5Z" />
        <path d="M11 16h10M16 11v10" />
      </svg>
    );
  }
  if (kind === "shield") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16 4 26 8v7c0 6.3-4.3 10.8-10 13-5.7-2.2-10-6.7-10-13V8l10-4Z" />
        <path d="m11.5 16 3 3 6-6" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="12" cy="11" r="4" />
      <circle cx="22" cy="13" r="3" />
      <path d="M4 26c.8-4.5 3.7-7 8-7s7.2 2.5 8 7M20 20c3.8-.2 6.5 2 7 6" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M10 4l6 6-6 6" />
    </svg>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <BrandMark />
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`primary-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
          onClick={closeMenu}
        >
          <a className="nav-link is-current" href="#home">Home</a>
          <a className="nav-link" href="#about">About us</a>
          <a className="nav-link" href="#programs">Programs</a>
          <a className="nav-link" href="#initiatives">Initiatives</a>
          <a className="nav-link" href="#contact">Contact</a>
          <a className="button button--small button--nav" href="#contact">Donate now</a>
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      <span className="heading-rule" aria-hidden="true" />
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-photo"
            src="/images/hero-team_0a435c9e.jpg"
            alt="BONET youth and volunteers gathered outdoors in Cameroon"
            fetchPriority="high"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content page-shell">
            <p className="hero-kicker"><span className="kicker-dot" /> Youth-led in Cameroon · Est. 2010</p>
            <h1 id="hero-title">Empowering Cameroon’s youth for a brighter future.</h1>
            <p className="hero-copy">
              Big Steps Outreach Network brings young people and communities together to build a more equitable, healthy, and inclusive Cameroon.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#contact">
                Donate now <span className="button-heart" aria-hidden="true">♡</span>
              </a>
              <a className="button button--outline-light" href="#impact">Our impact</a>
            </div>
            <div className="hero-trust">
              <span className="trust-line" />
              <span>Youth voices. Community action. Lasting change.</span>
            </div>
          </div>
          <a className="hero-scroll" href="#impact" aria-label="Scroll to BONET's impact">
            <span />
          </a>
        </section>

        <section className="impact-strip" id="impact" aria-label="BONET's reach">
          <div className="impact-inner page-shell">
            <div className="impact-intro">
              <p className="eyebrow">Small steps. Shared progress.</p>
              <h2>Rooted in community.<br /><span>Growing across Cameroon.</span></h2>
            </div>
            <div className="impact-stat">
              <strong>50,000<span>+</span></strong>
              <span>people directly reached</span>
            </div>
            <div className="impact-stat">
              <strong>8</strong>
              <span>regions across Cameroon</span>
            </div>
            <div className="impact-stat impact-stat--year">
              <strong>2010</strong>
              <span>founded by young people</span>
            </div>
          </div>
        </section>

        <section className="story-section section-space" id="about">
          <div className="story-grid page-shell">
            <div className="story-visual">
              <img
                src="/images/community-visit.jpg"
                alt="BONET team members meeting with a community member"
                loading="lazy"
              />
              <div className="photo-caption">
                <span className="caption-icon" aria-hidden="true">↗</span>
                <span>Working alongside communities<br /><strong>Since 2010</strong></span>
              </div>
              <span className="visual-outline" aria-hidden="true" />
            </div>
            <div className="story-content">
              <p className="eyebrow">Who we are</p>
              <h2>Every young person deserves the chance to thrive.</h2>
              <p className="story-lede">
                Founded in 2010, Big Steps Outreach Network (BONET) is a youth-led association working to strengthen the voices, choices, and opportunities of young people and women.
              </p>
              <p className="story-body">
                We work to advance good governance and human rights, and to address marginalization, inequality, HIV/AIDS, and other STDs—especially where young people and vulnerable communities are too often left out.
              </p>
              <div className="vision-card">
                <span className="vision-mark" aria-hidden="true">✳</span>
                <div>
                  <h3>Our vision</h3>
                  <p>We envision a Cameroon and Africa where young people actively contribute to the development and sustainability of their communities, gain and share valuable skills for growth and productive adulthood, move from obscurity to greater security, and have equal opportunities to realize their potential.</p>
                </div>
              </div>
              <div className="registration-line">
                <span className="registration-dot" /> Registered association <strong>No: 000762/ADR/J06/BAPP</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section" aria-labelledby="values-title">
          <div className="page-shell values-layout">
            <div className="values-intro">
              <p className="eyebrow">How we work</p>
              <h2 id="values-title">Our values move us forward.</h2>
              <p>We bring honesty, empathy, and commitment to every step—so that people can lead change with dignity.</p>
            </div>
            <div className="values-list" aria-label="BONET values">
              {values.map((value, index) => (
                <span className={`value-pill${index < 2 ? " value-pill--accent" : ""}`} key={value}>
                  <span className="value-dot" aria-hidden="true" />{value}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="programs-section section-space" id="programs">
          <div className="page-shell">
            <SectionHeading
              eyebrow="What we do"
              title="Big steps toward inclusive progress."
              description="We work across connected areas to help young people and communities shape a fairer future."
            />
            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.number}>
                  <div className="program-topline">
                    <span className="program-icon"><ProgramIcon kind={program.icon} /></span>
                    <span className="program-number">{program.number}</span>
                  </div>
                  <p className="program-tag">{program.tag}</p>
                  <h3>{program.title}</h3>
                  <p className="program-copy">{program.text}</p>
                  <a className="learn-link" href="#contact">Learn more <ArrowRight /></a>
                </article>
              ))}
            </div>
            <div className="region-row">
              <div className="region-heading">
                <span className="region-symbol" aria-hidden="true">◎</span>
                <span><strong>Across eight regions</strong><small>From the South West to the Far North</small></span>
              </div>
              <div className="region-tags">
                {regions.map((region) => <span key={region}>{region}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section className="initiatives-section section-space" id="initiatives">
          <div className="page-shell">
            <div className="initiatives-heading">
              <SectionHeading
                eyebrow="On the ground"
                title="Recent initiatives"
                description="A look at BONET’s work through direct action and community involvement."
                align="left"
              />
              <a className="button button--outline-blue" href="#programs">View all work <ArrowRight /></a>
            </div>
            <div className="initiative-grid">
              {initiatives.map((item) => (
                <article className={item.className} key={item.title}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <div className="initiative-shade" aria-hidden="true" />
                  <div className="initiative-caption">
                    <span className="initiative-label">{item.label}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mission-band" aria-labelledby="mission-quote">
          <div className="mission-decoration mission-decoration--one" aria-hidden="true" />
          <div className="mission-decoration mission-decoration--two" aria-hidden="true" />
          <div className="mission-content">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p className="eyebrow">Our commitment</p>
            <blockquote id="mission-quote">
              “Taking steps today to change lives tomorrow. Our vision is a Cameroon where youth lead the way toward equity, health, and dignity for all.”
            </blockquote>
            <span className="quote-attribution">— A BONET leadership vision</span>
          </div>
        </section>

        <section className="mission-section section-space">
          <div className="mission-card page-shell">
            <div className="mission-card-label"><span className="mission-icon" aria-hidden="true">↗</span> Our mission</div>
            <div className="mission-card-content">
              <h2>Make space for every young voice.</h2>
              <p>
                BONET motivates young people to advocate for inclusive policies—especially orphans and vulnerable children, people who are physically challenged, and those who are socially excluded—and works so their voices are heard at national, regional, and global platforms.
              </p>
            </div>
            <a className="button button--primary" href="#contact">Take a step with us <ArrowRight /></a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner page-shell">
            <div>
              <p className="eyebrow">Be part of the next big step</p>
              <h2>Young people belong in every decision that shapes their future.</h2>
            </div>
            <div className="contact-action">
              <p>Stand with youth-led community action. Message BONET to discuss giving, volunteering, and partnership opportunities.</p>
              <a className="button button--white" href="https://www.facebook.com/BigStepsOutreachNetwork/" target="_blank" rel="noreferrer noopener">Contact BONET <ArrowRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main page-shell">
          <div className="footer-brand-block">
            <BrandMark />
            <p>Big steps, changing lives.<br />Empowering the youth of Cameroon through participation, inclusion, and advocacy.</p>
            <span className="footer-reg">Reg. No: 000762/ADR/J06/BAPP</span>
          </div>
          <div className="footer-links">
            <div>
              <h2>Explore</h2>
              <a href="#about">About BONET</a>
              <a href="#programs">Our programs</a>
              <a href="#initiatives">Initiatives</a>
            </div>
            <div>
              <h2>Take part</h2>
              <a href="#contact">Support our work</a>
              <a href="#contact">Volunteer</a>
              <a href="#contact">Partnerships</a>
            </div>
          </div>
          <a className="button button--primary footer-cta" href="#contact">Donate now <span aria-hidden="true">♡</span></a>
        </div>
        <div className="footer-bottom page-shell">
          <span>© 2026 BONET Organization. Big Steps, Changing Lives.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
