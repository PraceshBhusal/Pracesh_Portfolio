
import {
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Network,
  Server,
  Code2,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import profilePhoto from "../assets/images/profile.jpg";
import "../styles/about.css";

const About = () => {
  const focusAreas = [
    {
      number: "01",
      title: "IT Administration",
      description:
        "Managing IT operations, user access, troubleshooting, and organizational technology.",
      icon: ShieldCheck,
    },
    {
      number: "02",
      title: "Infrastructure & Networking",
      description:
        "Working with servers, networks, firewalls, connectivity, and system reliability.",
      icon: Network,
    },
    {
      number: "03",
      title: "Systems & Applications",
      description:
        "Developing and improving practical web applications and business workflows with modern tools and AI-assisted development.",
      icon: Code2,
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-topline">
          <span className="section-eyebrow">ABOUT ME</span>
          <span className="about-topline-note">
            IT OPERATIONS / TECHNOLOGY
          </span>
        </div>

        <div className="about-heading">
          <h2>
            Technology that works.
            <br />
            <span>Systems that serve a purpose.</span>
          </h2>

          <p className="about-lead">
            I work at the intersection of IT administration, infrastructure,
            security, and practical software solutions—helping organizations
            maintain reliable systems and improve the way they work.
          </p>
        </div>

        <div className="about-main">
          <aside className="about-sidebar">
            <div className="about-photo-wrap">
              <img
                src={profilePhoto}
                alt="Pracesh Bhusal"
                loading="lazy"
              />

              <div className="about-photo-overlay">
                <span className="about-photo-name">
                  PRACESH BHUSAL
                </span>
                <span className="about-photo-role">
                  IT ADMINISTRATION
                </span>
              </div>
            </div>

            <div className="about-location">
              <span className="about-location-icon">
                <MapPin size={16} strokeWidth={1.7} />
              </span>

              <div>
                <span className="about-label">BASED IN</span>
                <strong>{personalInfo.location}</strong>
              </div>
            </div>

            <a className="about-contact-link" href="#contact">
              <span>Let's connect</span>
              <ArrowUpRight size={18} />
            </a>
          </aside>

          <div className="about-content">
            <div className="about-intro">
              <span className="about-section-index">01 / PROFILE</span>

              <h3>
                Reliable IT operations.
                <br />
                <span>Practical digital solutions.</span>
              </h3>

              <p>
                My primary focus is IT administration and infrastructure:
                keeping systems operational, managing networks and security,
                resolving technical issues, and supporting the technology
                people depend on every day.
              </p>

              <p>
                Alongside IT operations, I work on web applications and
                business systems using technologies such as React, Laravel,
                PHP, and MySQL. I also use AI-assisted development tools to
                help build, understand, and improve software for real-world
                requirements.
              </p>
            </div>

            <div className="about-role-strip">
              <div>
                <span className="about-label">PRIMARY ROLE</span>
                <strong>IT Administrator</strong>
              </div>

              <div>
                <span className="about-label">WORKING ACROSS</span>
                <strong>Infrastructure & Software</strong>
              </div>
            </div>

            <div className="about-focus">
              <div className="about-focus-heading">
                <span className="about-section-index">
                  02 / AREAS OF FOCUS
                </span>
                <span className="about-focus-count">03 AREAS</span>
              </div>

              <div className="about-focus-list">
                {focusAreas.map((area) => {
                  const Icon = area.icon;

                  return (
                    <article
                      className="about-focus-item"
                      key={area.number}
                    >
                      <span className="about-focus-number">
                        {area.number}
                      </span>

                      <div className="about-focus-icon">
                        <Icon size={20} strokeWidth={1.6} />
                      </div>

                      <div className="about-focus-copy">
                        <h4>{area.title}</h4>
                        <p>{area.description}</p>
                      </div>

                      <ArrowUpRight
                        className="about-focus-arrow"
                        size={18}
                        strokeWidth={1.5}
                      />
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="about-bottom-note">
              <span className="about-note-mark" aria-hidden="true">
                +
              </span>

              <p>
                My approach is straightforward: understand the problem,
                choose appropriate tools, and deliver solutions that are
                useful, maintainable, and reliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;