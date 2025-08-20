'use client';

import './resume.css';
import { Mail, Phone, MapPin, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Resume() {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    setImageLoaded(true);
  }, []);

  return (
    <div className="resume-container">
      <div className="resume-page">
        {/* Header Section */}
        <header className="resume-header">
          <div className="header-left">
            <h1 className="name">ADAN SAFEER</h1>
            <p className="title">Front End Developer</p>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="icon" size={14} />
                <span>(+92) 3124165364</span>
              </div>
              <div className="contact-item">
                <MapPin className="icon" size={14} />
                <span>Abbottabad</span>
              </div>
              <div className="contact-item">
                <Mail className="icon" size={14} />
                <a href="mailto:akraj25085@gmail.com">akraj25085@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="header-right">
            <div className="profile-photo-container">
              {imageLoaded ? (
                <Image
                  src="/Project.jpg" 
                  alt="Adan Safeer Profile"
                  className="profile-photo"
                  width={120}
                  height={150}
                  priority
                  style={{ objectFit: 'cover' }}
                />
              ) : (
                <div className="profile-photo-placeholder">
                  <div className="profile-initials">AS</div>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="resume-body">
          {/* Left Column */}
          <div className="left-column">
            {/* Summary Section */}
            <section className="resume-section">
              <h2 className="section-title">SUMMARY</h2>
              <p className="summary-text">
                Ambitious front end developer ready to use my growing skills in front-end development. 
                I have a solid understanding of modern programming languages and best practices. I enjoy 
                coming up with creative solutions to support company marketing goals. I&apos;m good at handling 
                the details that go into web development, like planning and security. I communicate well, 
                work well with others, and am flexible. I&apos;m motivated, hard-working, and can succeed both 
                in teams and when working alone.
              </p>
            </section>

            {/* Skills Section */}
            <section className="resume-section">
              <h2 className="section-title">SKILLS:</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>React.js</h3>
                </div>
                <div className="skill-category">
                  <h3>Responsiveness</h3>
                </div>
                <div className="skill-category">
                  <h3>Tailwind css</h3>
                </div>
                <div className="skill-category">
                  <h3>Node.js</h3>
                </div>
                <div className="skill-category">
                  <h3>JavaScript</h3>
                </div>
                <div className="skill-category">
                  <h3>HTML5</h3>
                </div>
                <div className="skill-category">
                  <h3>Supabase (db)</h3>
                </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="resume-section">
              <h2 className="section-title">PROJECTS :</h2>
              <div className="project-item">
                <h3 className="project-title">
                  <ExternalLink size={14} className="inline-icon" />
                  <a href="https://shop-steel-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Ecommerce Shop - https://shop-steel-six.vercel.app/
                  </a>
                </h3>
                <p className="project-description">Modern shop built with Next.js and Tailwind CSS</p>
              </div>
              <div className="project-item">
                <h3 className="project-title">
                  <ExternalLink size={14} className="inline-icon" />
                  <a href="https://weather-site-theta-beige.vercel.app" target="_blank" rel="noopener noreferrer">
                    Weather Dashboard - https://weather-site-theta-beige.vercel.app
                  </a>
                </h3>
                <p className="project-description">Real-time weather monitoring with forecasts</p>
              </div>
              <div className="project-item">
                <h3 className="project-title">
                  <ExternalLink size={14} className="inline-icon" />
                  <a href="https://blood-donation-flame.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Blood Donation Platform - https://blood-donation-flame.vercel.app/
                  </a>
                </h3>
                <p className="project-description">Property listing and management system</p>
              </div>
              <div className="project-item">
                <h3 className="project-title">
                  <ExternalLink size={14} className="inline-icon" />
                  <a href="https://landing-pag-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Landing Page - https://landing-pag-three.vercel.app/
                  </a>
                </h3>
                <p className="project-description">Just for practise application</p>
              </div>
            </section>

            {/* Experience Section */}
            <section className="resume-section">
              <h2 className="section-title">EXPERIENCE</h2>
              
              <div className="experience-item">
                <h3 className="job-title">Codeband</h3>
                <p className="job-meta">07/2024 - 10/2024 • Abbottabad</p>
                <p className="job-description">
                  Internship in React JS<br />
                  Responsibilities:<br />
                  Developed solutions based on Figma mock-ups.<br />
                  Ensure a professional approach to deliver a final product that meets the desired criteria.
                </p>
              </div>

              <div className="experience-item">
                <h3 className="job-title">Codeband</h3>
                <p className="job-meta">12/2023 - 03/2024 • Abbottabad</p>
                <p className="job-description">
                  Internship in Web Development (HTML, CSS, JavaScript)
                </p>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* Education Section */}
            <section className="resume-section">
              <h2 className="section-title">EDUCATION</h2>
              
              <div className="education-item">
                <h3 className="degree">BS SOFTWARE ENGINEERING</h3>
                <p className="school">Comsats University</p>
                <p className="location">Dhamtor Campus</p>
                <p className="date">• 01/04/2023 - continue</p>
                <p className="gpa">GPA: 2.9 / 4.0</p>
              </div>

              <div className="education-item">
                <h3 className="degree">F.S.C COMPUTER SCIENCE</h3>
                <p className="school">Army Public School And College,Abbottabad</p>
                <p className="date">• 12/04/2018 - 04/10/2020</p>
              </div>
            </section>

            {/* Languages Section */}
            <section className="resume-section">
              <h2 className="section-title">LANGUAGES</h2>
              
              <div className="language-item">
                <div className="language-header">
                  <span className="language-name">Urdu</span>
                  <div className="language-level">
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                  </div>
                </div>
                <p className="language-label">Native</p>
              </div>

              <div className="language-item">
                <div className="language-header">
                  <span className="language-name">English</span>
                  <div className="language-level">
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot filled"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                </div>
                <p className="language-label">Intermediate</p>
              </div>
            </section>

            {/* Find Me Online Section */}
            <section className="resume-section">
              <h2 className="section-title">FIND ME ONLINE</h2>
              
              <div className="social-links">
                <div className="social-item">
                  <Github size={16} className="social-icon" />
                  <span className="social-label">GitHub</span>
                  <a href="https://github.com/AdanSafeer25085" target="_blank" rel="noopener noreferrer">
                    github.com/adan-rajpoot
                  </a>
                </div>

                <div className="social-item">
                  <div className="whatsapp-icon">📱</div>
                  <span className="social-label">WhatsApp</span>
                  <span className="social-value">(+92) 3124165364</span>
                </div>

                <div className="social-item">
                  <div className="linkedin-icon">in</div>
                  <span className="social-label">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/adan-safeer-7a8757342/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/adan-safeer-7a8757342
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Print Button - Hidden in print */}
      <div className="print-controls">
        <button onClick={() => window.print()} className="print-button">
          Download as PDF
        </button>
      </div>
    </div>
  );
}