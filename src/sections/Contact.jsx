import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { personalInfo } from "../data/portfolioData";
import "../styles/contact.css";

const Contact = () => {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-heading">
            <span className="section-eyebrow">08 — Contact</span>

            <h2>
              Have a project,
              <br />
              system or idea?
            </h2>

            <p>
              Whether you need help with IT infrastructure, a web application,
              business software or technical support, feel free to get in
              touch.
            </p>
          </div>

          <div className="contact-details">
            <a
              href={`mailto:${personalInfo.email}`}
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Mail size={19} />
              </span>

              <span>
                <small>Email</small>
                <strong>{personalInfo.email}</strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            <a
              href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
              className="contact-detail"
            >
              <span className="contact-detail-icon">
                <Phone size={19} />
              </span>

              <span>
                <small>Phone</small>
                <strong>{personalInfo.phone}</strong>
              </span>

              <ArrowUpRight size={18} />
            </a>

            <div className="contact-detail">
              <span className="contact-detail-icon">
                <MapPin size={19} />
              </span>

              <span>
                <small>Location</small>
                <strong>{personalInfo.location}</strong>
              </span>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="contact-github"
            >
              <span>GitHub</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;