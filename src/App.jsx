import AOS from "aos";
import "aos/dist/aos.css";
import React from 'react'
import './App.css'
import { useEffect } from "react";
import "./index.css";

function App() {

  useEffect(() => {

    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // NAVBAR
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    if (hamburger && navLinks) {
      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
      });
      navLinks.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => {
          navLinks.classList.remove("open");
        });
      });
    }

    // PARALLAX
    const orb = document.getElementById("parallaxOrb");
    const orb2 = document.getElementById("parallaxOrb2");

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (orb) orb.style.transform = `translateY(${scrollY * 0.25}px)`;
      if (orb2) orb2.style.transform = `translateY(${scrollY * -0.15}px)`;
      const navbar = document.getElementById("navbar");
      if (navbar) {
        navbar.style.padding = window.scrollY > 60 ? "0.7rem 2rem" : "1.2rem 2rem";
      }
    };

    window.addEventListener("scroll", handleScroll);

    // RESUME BUTTON — ensure it always opens in new tab
    const resumeBtn = document.querySelector('a[aria-label="View Resume"]');
    if (resumeBtn) {
      resumeBtn.addEventListener("click", (e) => {
        e.preventDefault();
        window.open("/RESUME_PRIYANKA1.pdf", "_blank");
      });
    }

    // ANCHOR SCROLL FIX — handles all href="#section" links reliably
    const NAVBAR_HEIGHT = 80;

    const handleAnchorClick = (e) => {
      const href = e.currentTarget.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const top = target.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    };

    // Attach to every anchor link on the page (runs after HTML is injected)
    const allAnchors = document.querySelectorAll('a[href^="#"]');
    allAnchors.forEach((a) => a.addEventListener("click", handleAnchorClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      allAnchors.forEach((a) => a.removeEventListener("click", handleAnchorClick));
    };

  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `

<div class="grid-bg"></div>

<!-- NAVBAR -->
<nav id="navbar">
  <div class="nav-logo">LP_</div>
  <ul class="nav-links" id="navLinks">
    <li><a href="#about">About</a></li>
    <li><a href="#skills">Skills</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
  <button class="hamburger" id="hamburger" aria-label="Open Navigation Menu">
    <span></span><span></span><span></span>
  </button>
</nav>

<!-- HERO -->
<section id="hero" data-aos="fade-up">
  <div class="hero-orb" id="parallaxOrb"></div>
  <div class="hero-orb2" id="parallaxOrb2"></div>
  <div class="status">
    <span class="status-dot"></span>
    Available for opportunities
  </div>
  <div class="hero-eyebrow">Cloud & DevOps Engineer</div>
  <div class="hero-image-wrapper">
    <img src="/profile.webp" alt="Lakshmi Priyanka" class="hero-image" width="180" height="180" loading="eager" decoding="async" />
  </div>
  <h1 class="hero-name">
    Lakshmi <br /><span>Priyanka Bethampudi.</span>
  </h1>
  <p class="hero-role">Building Infrastructure at Scale</p>
  <p class="hero-desc">
    Cloud-native architect focused on resilient systems, distributed infrastructure, Kubernetes, automation pipelines, and DevOps at scale.
  </p>
  <div class="hero-cta">
    <a href="#projects" class="btn btn-primary" aria-label="View My Projects">View My Work</a>
    <a href="/RESUME_PRIYANKA1.pdf" target="_blank" rel="noreferrer" class="btn btn-outline" aria-label="View Resume" onclick="window.open('/RESUME_PRIYANKA1.pdf','_blank');return false;">View Resume</a>
  </div>
  <div class="hero-stats">
    <div class="hero-stat-card"><span>PROJECTS</span><h3>7+</h3></div>
    <div class="hero-stat-card"><span>CERTS</span><h3>3+</h3></div>
    <div class="hero-stat-card"><span>CGPA</span><h3>8.9</h3></div>
  </div>
</section>

<!-- ABOUT -->
<section id="about">
  <div class="container">
    <div class="section-label" data-aos="fade-up">// my story</div>
    <h2 class="section-title" data-aos="fade-up">Who I Am</h2>
    <div class="section-divider" data-aos="fade-up"></div>
    <div class="about-premium-card" data-aos="fade-up">
      <div class="about-premium-content">
        <p>I'm Lakshmi Priyanka Bethampudi, a Cloud & DevOps Engineer passionate about scalable infrastructure, Kubernetes, automation, and distributed systems.</p>
        <p>My expertise spans Kubernetes, Terraform, Apache Kafka, CI/CD automation, observability platforms, and cloud-native systems.</p>
        <p>I enjoy building reliable, resilient, and highly scalable infrastructure for modern applications.</p>
      </div>
    </div>
  </div>
</section>

<!-- SKILLS (redesigned) -->
<section id="skills">
  <div class="container">
    <div class="section-label" data-aos="fade-up">// technical expertise</div>
    <h2 class="section-title" data-aos="fade-up">Skills & Tools</h2>
    <div class="section-divider" data-aos="fade-up"></div>

    <div class="skills-grid-v2">

      <!-- Cloud & Infrastructure -->
      <div class="skill-card-v2" data-aos="fade-up" data-aos-delay="0">
        <div class="skill-card-header">
          <span class="skill-icon">&#9729;</span>
          <span class="skill-cat-label cloud">CLOUD &amp; INFRASTRUCTURE</span>
        </div>
        <div class="skill-tags-v2">
          <span class="skill-tag-v2">AWS EC2</span>
          <span class="skill-tag-v2">AWS EKS</span>
          <span class="skill-tag-v2">AWS Lambda</span>
          <span class="skill-tag-v2">AWS S3</span>
          <span class="skill-tag-v2">AWS Route 53</span>
          <span class="skill-tag-v2">GCP Cloud Functions</span>
          <span class="skill-tag-v2">GCP Pub/Sub</span>
          <span class="skill-tag-v2">GCP VPC</span>
          <span class="skill-tag-v2">GCP BigQuery</span>
          <span class="skill-tag-v2">IAM</span>
        </div>
        <div class="skill-progress-list">
          <div class="skill-progress-item">
            <span>Cloud Computing</span><span class="pct">72%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:72%"></div></div>
          </div>
          <div class="skill-progress-item">
            <span>DevOps</span><span class="pct">81%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:81%"></div></div>
          </div>
        </div>
      </div>

      <!-- DevOps & Infrastructure -->
      <div class="skill-card-v2" data-aos="fade-up" data-aos-delay="100">
        <div class="skill-card-header">
          <span class="skill-icon blockchain">&#128279;</span>
          <span class="skill-cat-label blockchain">DEVOPS &amp; TOOLS</span>
        </div>
        <div class="skill-tags-v2">
          <span class="skill-tag-v2">Docker</span>
          <span class="skill-tag-v2">Kubernetes</span>
          <span class="skill-tag-v2">Helm</span>
          <span class="skill-tag-v2">Terraform</span>
          <span class="skill-tag-v2">ArgoCD</span>
          <span class="skill-tag-v2">GitOps</span>
          <span class="skill-tag-v2">GitHub Actions</span>
          <span class="skill-tag-v2">CI/CD</span>
          <span class="skill-tag-v2">Jenkins</span>
          <span class="skill-tag-v2">Ansible</span>
          <span class="skill-tag-v2">NGINX</span>
          <span class="skill-tag-v2">Linux</span>
        </div>
        <div class="skill-progress-list">
          <div class="skill-progress-item">
            <span>Container Orchestration</span><span class="pct">84%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:84%"></div></div>
          </div>
          <div class="skill-progress-item">
            <span>CI/CD Pipelines</span><span class="pct">79%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:79%"></div></div>
          </div>
        </div>
      </div>

      <!-- Backend & Data -->
      <div class="skill-card-v2" data-aos="fade-up" data-aos-delay="200">
        <div class="skill-card-header">
          <span class="skill-icon backend">&#9889;</span>
          <span class="skill-cat-label backend">BACKEND &amp; DATA</span>
        </div>
        <div class="skill-tags-v2">
          <span class="skill-tag-v2">Python</span>
          <span class="skill-tag-v2">Node.js</span>
          <span class="skill-tag-v2">JavaScript</span>
          <span class="skill-tag-v2">REST APIs</span>
          <span class="skill-tag-v2">Bash</span>
          <span class="skill-tag-v2">Apache Kafka</span>
          <span class="skill-tag-v2">Kafka Connect</span>
          <span class="skill-tag-v2">Redis</span>
          <span class="skill-tag-v2">Elasticsearch</span>
          <span class="skill-tag-v2">Zookeeper</span>
        </div>
        <div class="skill-progress-list">
          <div class="skill-progress-item">
            <span>Backend Development</span><span class="pct">78%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:78%"></div></div>
          </div>
          <div class="skill-progress-item">
            <span>Data Engineering</span><span class="pct">68%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:68%"></div></div>
          </div>
        </div>
      </div>

      <!-- Observability & Monitoring -->
      <div class="skill-card-v2" data-aos="fade-up" data-aos-delay="300">
        <div class="skill-card-header">
          <span class="skill-icon ai">&#128161;</span>
          <span class="skill-cat-label ai">OBSERVABILITY &amp; DB</span>
        </div>
        <div class="skill-tags-v2">
          <span class="skill-tag-v2">Prometheus</span>
          <span class="skill-tag-v2">Grafana</span>
          <span class="skill-tag-v2">Kibana</span>
          <span class="skill-tag-v2">SonarQube</span>
          <span class="skill-tag-v2">PostgreSQL</span>
          <span class="skill-tag-v2">MongoDB</span>
          <span class="skill-tag-v2">MySQL</span>
          <span class="skill-tag-v2">Persistent Volumes</span>
        </div>
        <div class="skill-progress-list">
          <div class="skill-progress-item">
            <span>Monitoring &amp; Logging</span><span class="pct">81%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:81%"></div></div>
          </div>
          <div class="skill-progress-item">
            <span>Databases</span><span class="pct">75%</span>
            <div class="progress-bar-track"><div class="progress-bar-fill" style="width:75%"></div></div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section id="experience">
  <div class="container">
    <div class="section-label" data-aos="fade-left">// experience</div>
    <h2 class="section-title" data-aos="fade-left">Internship</h2>
    <div class="section-divider" data-aos="fade-left"></div>
    <div class="exp-card" data-aos="fade-left">
      <div class="exp-top">
        <div>
          <h3>AWS Cloud Computing & DevOps Virtual Intern</h3>
          <p>Andhra Pradesh State Skill Development Corporation</p>
        </div>
        <div class="exp-badge">May 2025 - July 2025</div>
      </div>
      <ul class="exp-list">
        <li>Worked with AWS EC2, S3, IAM and VPC services.</li>
        <li>Built deployment workflows using Docker and CI/CD.</li>
        <li>Learned Linux administration and automation.</li>
        <li>Deployed Weather Forecast Application on AWS.</li>
      </ul>
      <div class="project-stack">
        <span class="stack-tag">AWS</span>
        <span class="stack-tag">EC2</span>
        <span class="stack-tag">S3</span>
        <span class="stack-tag">Docker</span>
        <span class="stack-tag">Linux</span>
        <span class="stack-tag">CI/CD</span>
      </div>
    </div>
  </div>
</section>

<!-- EDUCATION -->
<section id="education">
  <div class="container">
    <div class="section-label" data-aos="fade-right">// education</div>
    <h2 class="section-title" data-aos="fade-right">Academic Background</h2>
    <div class="section-divider" data-aos="fade-right"></div>
    <div class="edu-card" data-aos="fade-right">
      <div class="edu-left">
        <h3>B.Tech in Computer Science & Engineering</h3>
        <p>Aditya College of Engineering & Technology</p>
        <div class="edu-tags">
          <span>2023 - 2027</span>
          <span>CGPA: 8.9</span>
          <span>Kakinada, Andhra Pradesh</span>
        </div>
      </div>
      <div class="cgpa-box">
        <small>CGPA</small>
        <h2>8.9</h2>
        <span>/ 10.0</span>
      </div>
    </div>
  </div>
</section>

<!-- PROJECTS (redesigned) -->
<section id="projects">
  <div class="container">
    <div class="section-label" data-aos="fade-up">// featured work</div>
    <h2 class="section-title proj-title-v2" data-aos="fade-up">Cloud &amp; DevOps Projects</h2>
    <p class="proj-subtitle" data-aos="fade-up">Production-grade projects built with real-world infrastructure — each designed for scalability and resilience.</p>
    <div class="section-divider" data-aos="fade-up"></div>

    <!-- Featured Project 01 -->
    <div class="proj-featured-card" data-aos="fade-up">
      <div class="proj-featured-visual">
        <div class="proj-feat-icon">&#9881;</div>
        <div class="proj-feat-num">01</div>
      </div>
      <div class="proj-featured-info">
        <div class="proj-meta-row">
          <span class="proj-number-label">PROJECT_01</span>
          <span class="proj-score">&#11088; 87 / 100</span>
        </div>
        <h3 class="proj-feat-title">Multi-Region Kubernetes Platform</h3>
        <p class="proj-feat-desc">
          Deployed a highly available Kubernetes cluster across multiple geographic regions with automated failover and Istio service mesh. Implemented cross-region load balancing and health checks, achieving 99.9% uptime during simulated region failures.
        </p>
        <div class="proj-stack-v2">
          <span class="stack-tag-v2">Kubernetes</span>
          <span class="stack-tag-v2">AWS EKS</span>
          <span class="stack-tag-v2">Istio</span>
          <span class="stack-tag-v2">Docker</span>
          <span class="stack-tag-v2">Helm</span>
          <span class="stack-tag-v2">Multi-Region</span>
        </div>
        <div class="proj-links-v2">
          <a href="https://github.com/Priyanka05f0/multi-region-kubernetes-platform" target="_blank" rel="noopener noreferrer" class="proj-link-btn github">
            <span>&#128279;</span> GitHub
          </a>
          <a href="https://drive.google.com/file/d/1ZMIe38R3OuVCA4kEKksKQvZisDO3mYYB/view" target="_blank" rel="noopener noreferrer" class="proj-link-btn demo">
            &#9654; Demo Video
          </a>
          <span class="proj-approved">&#10003; Partnr Approved</span>
        </div>
      </div>
    </div>

    <!-- Projects Grid 02-04 -->
    <div class="proj-grid-v2">

      <!-- Project 02 -->
      <div class="proj-card-v2" data-aos="fade-up" data-aos-delay="0">
        <div class="proj-card-top">
          <span class="proj-number-label">PROJECT_02</span>
          <span class="proj-score">&#11088; 91 / 100</span>
        </div>
        <h3 class="proj-card-title">Real-Time Log Processing Pipeline with Kafka &amp; Docker</h3>
        <p class="proj-card-desc">
          Built a scalable real-time log ingestion and processing system using Kafka as the message backbone. Implemented producers, consumers, and stream processors with Docker orchestration, achieving high-throughput log analytics.
        </p>
        <div class="proj-stack-v2">
          <span class="stack-tag-v2">Apache Kafka</span>
          <span class="stack-tag-v2">Docker</span>
          <span class="stack-tag-v2">Node.js</span>
          <span class="stack-tag-v2">MongoDB</span>
          <span class="stack-tag-v2">Stream Processing</span>
        </div>
        <div class="proj-links-v2">
          <a href="https://github.com/Priyanka05f0/kafka-log-pipeline" target="_blank" rel="noopener noreferrer" class="proj-link-btn github">
            <span>&#128279;</span> GitHub
          </a>
          <a href="https://drive.google.com/file/d/1VsvdCwE5Ybrqj5ST0mYLTm53ad1KwV4S/view" target="_blank" rel="noopener noreferrer" class="proj-link-btn demo">
            &#9654; Demo Video
          </a>
        </div>
        <span class="proj-approved block-approved">&#10003; Partnr Approved</span>
      </div>

      <!-- Project 03 -->
      <div class="proj-card-v2" data-aos="fade-up" data-aos-delay="100">
        <div class="proj-card-top">
          <span class="proj-number-label">PROJECT_03</span>
          <span class="proj-score">&#11088; 80 / 100</span>
        </div>
        <h3 class="proj-card-title">Serverless Image Processing Pipeline on GCP</h3>
        <p class="proj-card-desc">
          Designed and deployed a serverless image processing pipeline using Google Cloud Functions and Pub/Sub messaging. Images are automatically resized, compressed, and stored upon upload — fully event-driven with zero server management.
        </p>
        <div class="proj-stack-v2">
          <span class="stack-tag-v2">GCP Cloud Functions</span>
          <span class="stack-tag-v2">Pub/Sub</span>
          <span class="stack-tag-v2">Cloud Storage</span>
          <span class="stack-tag-v2">Python</span>
          <span class="stack-tag-v2">Serverless</span>
        </div>
        <div class="proj-links-v2">
          <a href="https://github.com/Priyanka05f0/serverless-image-pipeline" target="_blank" rel="noopener noreferrer" class="proj-link-btn github">
            <span>&#128279;</span> GitHub
          </a>
          <a href="https://drive.google.com/file/d/1nd3wpC6YGq090YVGQamd7rzQuZsoJxns/view" target="_blank" rel="noopener noreferrer" class="proj-link-btn demo">
            &#9654; Demo Video
          </a>
        </div>
        <span class="proj-approved block-approved">&#10003; Partnr Approved</span>
      </div>

      <!-- Project 04 -->
      <div class="proj-card-v2" data-aos="fade-up" data-aos-delay="200">
        <div class="proj-card-top">
          <span class="proj-number-label">PROJECT_04</span>
          <span class="proj-score">&#11088; 87 / 100</span>
        </div>
        <h3 class="proj-card-title">Highly Available Stateful Platform on Kubernetes</h3>
        <p class="proj-card-desc">
          Architected a production-grade stateful application platform on Kubernetes with persistent volume claims, StatefulSets, automated failover, and horizontal pod autoscaling. Designed for zero-downtime deployments and disaster recovery.
        </p>
        <div class="proj-stack-v2">
          <span class="stack-tag-v2">Kubernetes</span>
          <span class="stack-tag-v2">StatefulSets</span>
          <span class="stack-tag-v2">PVC</span>
          <span class="stack-tag-v2">HPA</span>
          <span class="stack-tag-v2">Docker</span>
        </div>
        <div class="proj-links-v2">
          <a href="https://github.com/Priyanka05f0/ha-platform" target="_blank" rel="noopener noreferrer" class="proj-link-btn github">
            <span>&#128279;</span> GitHub
          </a>
        </div>
        <span class="proj-approved block-approved">&#10003; Partnr Approved</span>
      </div>

    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" data-aos="fade-up">
  <div class="container">
    <div class="section-label">// get in touch</div>
    <h2 class="section-title">Let's Connect</h2>
    <div class="section-divider"></div>
    <div class="contact-links">
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lakshmipriyanakabethampudi.23@gmail.com" target="_blank" rel="noreferrer" class="contact-link">Email</a>
      <a href="https://github.com/Priyanka05f0" target="_blank" class="contact-link" aria-label="Open GitHub Profile">GitHub</a>
      <a href="https://www.linkedin.com/in/lakshmi-priyanka-bethampudi-b776ba2aa/" target="_blank" class="contact-link" aria-label="Open LinkedIn Profile">LinkedIn</a>
    </div>
  </div>
</section>

<footer>
  Designed & Built by Lakshmi Priyanka Bethampudi
</footer>

<style>
/* ========== SKILLS V2 ========== */
.skills-grid-v2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
}
@media (max-width: 768px) {
  .skills-grid-v2 { grid-template-columns: 1fr; }
}

.skill-card-v2 {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 1.6rem;
  transition: border-color 0.3s, transform 0.3s;
}
.skill-card-v2:hover {
  border-color: rgba(0,230,255,0.25);
  transform: translateY(-3px);
}

.skill-card-header {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
}

.skill-icon {
  font-size: 1.1rem;
}

.skill-cat-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.skill-cat-label.cloud   { color: #00e6ff; }
.skill-cat-label.blockchain { color: #a78bfa; }
.skill-cat-label.backend { color: #fbbf24; }
.skill-cat-label.ai      { color: #34d399; }

.skill-tags-v2 {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
}

.skill-tag-v2 {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  color: #cbd5e1;
  font-size: 0.72rem;
  padding: 0.3rem 0.75rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
  transition: background 0.2s, border-color 0.2s;
}
.skill-tag-v2:hover {
  background: rgba(0,230,255,0.08);
  border-color: rgba(0,230,255,0.3);
  color: #00e6ff;
}

.skill-progress-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.skill-progress-item {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0 0.5rem;
}
.skill-progress-item span:first-child {
  font-size: 0.75rem;
  color: #94a3b8;
  font-family: 'Courier New', monospace;
  grid-column: 1;
}
.skill-progress-item .pct {
  font-size: 0.75rem;
  color: #00e6ff;
  font-family: 'Courier New', monospace;
  grid-column: 2;
}
.progress-bar-track {
  grid-column: 1 / -1;
  height: 3px;
  background: rgba(255,255,255,0.08);
  border-radius: 99px;
  overflow: hidden;
  margin-top: 4px;
}
.progress-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #00e6ff, #00ff99);
  border-radius: 99px;
  transition: width 1.2s ease;
}

/* ========== PROJECTS V2 ========== */
.proj-title-v2 { font-size: clamp(2rem, 5vw, 3rem); }

.proj-subtitle {
  color: #94a3b8;
  font-size: 0.95rem;
  max-width: 560px;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

/* Featured card */
.proj-featured-card {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: 0;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 2rem;
  background: rgba(255,255,255,0.02);
  transition: border-color 0.3s;
}
.proj-featured-card:hover { border-color: rgba(0,230,255,0.2); }

@media (max-width: 768px) {
  .proj-featured-card { grid-template-columns: 1fr; }
}

.proj-featured-visual {
  background: rgba(255,255,255,0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 300px;
  overflow: hidden;
}
.proj-feat-icon {
  font-size: 4rem;
  z-index: 2;
  filter: drop-shadow(0 0 24px rgba(0,230,255,0.4));
}
.proj-feat-num {
  position: absolute;
  font-size: 10rem;
  font-weight: 900;
  color: rgba(255,255,255,0.03);
  line-height: 1;
  user-select: none;
  font-family: 'Courier New', monospace;
}

.proj-featured-info {
  padding: 2rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.proj-meta-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.proj-number-label {
  font-size: 0.7rem;
  color: #64748b;
  font-family: 'Courier New', monospace;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.proj-score {
  background: rgba(0,230,255,0.1);
  border: 1px solid rgba(0,230,255,0.25);
  color: #00e6ff;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-family: 'Courier New', monospace;
}

.proj-feat-title, .proj-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #f1f5f9;
  line-height: 1.3;
  margin: 0;
}

.proj-feat-desc, .proj-card-desc {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.7;
}

.proj-stack-v2 {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.stack-tag-v2 {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  color: #94a3b8;
  font-size: 0.7rem;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  font-family: 'Courier New', monospace;
}

.proj-links-v2 {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.proj-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 0.45rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s, opacity 0.2s;
}
.proj-link-btn:hover { transform: translateY(-2px); opacity: 0.85; }
.proj-link-btn.github {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  color: #e2e8f0;
}
.proj-link-btn.demo {
  background: rgba(236, 72, 153, 0.15);
  border: 1px solid rgba(236,72,153,0.4);
  color: #f472b6;
}

.proj-approved {
  font-size: 0.75rem;
  color: #00e6ff;
  font-weight: 600;
  font-family: 'Courier New', monospace;
}
.block-approved {
  display: block;
  margin-top: 0.5rem;
}

/* Projects grid */
.proj-grid-v2 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}
@media (max-width: 960px) {
  .proj-grid-v2 { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .proj-grid-v2 { grid-template-columns: 1fr; }
}

.proj-card-v2 {
  background: rgba(255,255,255,0.025);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 16px;
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  transition: border-color 0.3s, transform 0.3s;
}
.proj-card-v2:hover {
  border-color: rgba(0,230,255,0.2);
  transform: translateY(-4px);
}

.proj-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

        `
      }}
    />
  );
}

export default App;
