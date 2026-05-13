import AOS from "aos";
import "aos/dist/aos.css";
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
    const hamburger =
      document.getElementById("hamburger");

    const navLinks =
      document.getElementById("navLinks");

    if (hamburger && navLinks) {

      hamburger.addEventListener(
        "click",
        () => {
          navLinks.classList.toggle("open");
        }
      );

      navLinks
        .querySelectorAll("a")
        .forEach((a) => {

          a.addEventListener(
            "click",
            () => {
              navLinks.classList.remove("open");
            }
          );

        });

    }

    // PARALLAX
    const orb =
      document.getElementById("parallaxOrb");

    const orb2 =
      document.getElementById("parallaxOrb2");

    const handleScroll = () => {

      const scrollY = window.scrollY;

      if (orb) {

        orb.style.transform =
          `translateY(${scrollY * 0.25}px)`;

      }

      if (orb2) {

        orb2.style.transform =
          `translateY(${scrollY * -0.15}px)`;

      }

      const navbar =
        document.getElementById("navbar");

      if (navbar) {

        if (window.scrollY > 60) {

          navbar.style.padding =
            "0.7rem 2rem";

        } else {

          navbar.style.padding =
            "1.2rem 2rem";

        }

      }

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  return (

    <div
      dangerouslySetInnerHTML={{
        __html: `

<div class="grid-bg"></div>

<!-- NAVBAR -->
<nav id="navbar">

  <div class="nav-logo">
    LP_
  </div>

  <ul class="nav-links" id="navLinks">

    <li>
      <a href="#about">About</a>
    </li>

    <li>
      <a href="#skills">Skills</a>
    </li>

    <li>
      <a href="#experience">Experience</a>
    </li>

    <li>
      <a href="#projects">Projects</a>
    </li>

    <li>
      <a href="#contact">Contact</a>
    </li>

  </ul>

  <button
    class="hamburger"
    id="hamburger"
  >

    <span></span>
    <span></span>
    <span></span>

  </button>

</nav>

<!-- HERO -->
<section
  id="hero"
  data-aos="fade-up"
>

  <div
    class="hero-orb"
    id="parallaxOrb"
  ></div>

  <div
    class="hero-orb2"
    id="parallaxOrb2"
  ></div>

  <div class="status">

    <span class="status-dot"></span>

    Available for opportunities

  </div>

  <div class="hero-eyebrow">
    Cloud & DevOps Engineer
  </div>

  <h1 class="hero-name">

    Lakshmi <br />

    <span>Priyanka.</span>

  </h1>

  <p class="hero-role">
    Building Infrastructure at Scale
  </p>

  <p class="hero-desc">

    Cloud-native architect focused on
    resilient systems,
    distributed infrastructure,
    Kubernetes,
    automation pipelines,
    and DevOps at scale.

  </p>

  <div class="hero-cta">

    <a
      href="#projects"
      class="btn btn-primary"
    >
      View My Work
    </a>

    <a
      href="/RESUME_PRIYANKA1.pdf"
      target="_blank"
      class="btn btn-outline"
    >
      View Resume
    </a>

  </div>

  <div class="hero-stats">

    <div class="hero-stat-card">

      <span>PROJECTS</span>

      <h3>7+</h3>

    </div>

    <div class="hero-stat-card">

      <span>CERTS</span>

      <h3>3+</h3>

    </div>

    <div class="hero-stat-card">

      <span>CGPA</span>

      <h3>8.9</h3>

    </div>

  </div>

</section>

<!-- ABOUT -->
<section id="about">

  <div class="container">

    <div
      class="section-label"
      data-aos="fade-up"
    >
      // my story
    </div>

    <h2
      class="section-title"
      data-aos="fade-up"
    >
      Who I Am
    </h2>

    <div
      class="section-divider"
      data-aos="fade-up"
    ></div>

    <div
      class="about-premium-card"
      data-aos="fade-up"
    >

      <div class="about-premium-content">

        <p>

          I'm Lakshmi Priyanka Bethampudi,
          a Cloud & DevOps Engineer
          passionate about scalable
          infrastructure,
          Kubernetes,
          automation,
          and distributed systems.

        </p>

        <p>

          My expertise spans Kubernetes,
          Terraform,
          Apache Kafka,
          CI/CD automation,
          observability platforms,
          and cloud-native systems.

        </p>

        <p>

          I enjoy building reliable,
          resilient,
          and highly scalable
          infrastructure
          for modern applications.

        </p>

      </div>

    </div>

  </div>

</section>

<!-- SKILLS -->
<section id="skills">

  <div class="container">

    <div
      class="section-label"
      data-aos="fade-up"
    >
      // technical expertise
    </div>

    <h2
      class="section-title"
      data-aos="fade-up"
    >
      Skills & Tools
    </h2>

    <div
      class="section-divider"
      data-aos="fade-up"
    ></div>

    <div class="skills-grid">

      <!-- CLOUD -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          Cloud Platforms
        </div>

        <div class="skill-tags">

          <span class="skill-tag">AWS</span>
          <span class="skill-tag">GCP</span>
          <span class="skill-tag">Cloud Run</span>
          <span class="skill-tag">Cloud Functions</span>
          <span class="skill-tag">Pub/Sub</span>
          <span class="skill-tag">Cloud Storage</span>
          <span class="skill-tag">IAM</span>
          <span class="skill-tag">VPC</span>

        </div>

      </div>

      <!-- DEVOPS -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          DevOps & Infrastructure
        </div>

        <div class="skill-tags">

          <span class="skill-tag">Docker</span>
          <span class="skill-tag">Kubernetes</span>
          <span class="skill-tag">Helm</span>
          <span class="skill-tag">Terraform</span>
          <span class="skill-tag">ArgoCD</span>
          <span class="skill-tag">GitOps</span>
          <span class="skill-tag">CI/CD</span>
          <span class="skill-tag">GitHub Actions</span>
          <span class="skill-tag">Linux</span>
          <span class="skill-tag">NGINX</span>

        </div>

      </div>

      <!-- STREAMING -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          Data & Streaming
        </div>

        <div class="skill-tags">

          <span class="skill-tag">Apache Kafka</span>
          <span class="skill-tag">Kafka Connect</span>
          <span class="skill-tag">Zookeeper</span>
          <span class="skill-tag">Redis</span>
          <span class="skill-tag">Elasticsearch</span>
          <span class="skill-tag">Kibana</span>

        </div>

      </div>

      <!-- OBSERVABILITY -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          Observability & Monitoring
        </div>

        <div class="skill-tags">

          <span class="skill-tag">Prometheus</span>
          <span class="skill-tag">Grafana</span>
          <span class="skill-tag">Monitoring</span>
          <span class="skill-tag">Logging</span>
          <span class="skill-tag">Metrics</span>

        </div>

      </div>

      <!-- PROGRAMMING -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          Programming & Backend
        </div>

        <div class="skill-tags">

          <span class="skill-tag">Python</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">REST APIs</span>
          <span class="skill-tag">Bash</span>

        </div>

      </div>

      <!-- DATABASE -->
      <div
        class="skill-category"
        data-aos="zoom-in"
      >

        <div class="skill-cat-title">
          Databases & Storage
        </div>

        <div class="skill-tags">

          <span class="skill-tag">PostgreSQL</span>
          <span class="skill-tag">MongoDB</span>
          <span class="skill-tag">MySQL</span>
          <span class="skill-tag">Persistent Volumes</span>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- EXPERIENCE -->
<section id="experience">

  <div class="container">

    <div
      class="section-label"
      data-aos="fade-left"
    >
      // experience
    </div>

    <h2
      class="section-title"
      data-aos="fade-left"
    >
      Internship
    </h2>

    <div
      class="section-divider"
      data-aos="fade-left"
    ></div>

    <div
      class="exp-card"
      data-aos="fade-left"
    >

      <div class="exp-top">

        <div>

          <h3>
            AWS Cloud Computing & DevOps Virtual Intern
          </h3>

          <p>
            Andhra Pradesh State Skill Development Corporation
          </p>

        </div>

        <div class="exp-badge">
          May 2025 - July 2025
        </div>

      </div>

      <ul class="exp-list">

        <li>
          Worked with AWS EC2,
          S3,
          IAM and VPC services.
        </li>

        <li>
          Built deployment workflows
          using Docker and CI/CD.
        </li>

        <li>
          Learned Linux administration
          and automation.
        </li>

        <li>
          Deployed Weather Forecast
          Application on AWS.
        </li>

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

    <div
      class="section-label"
      data-aos="fade-right"
    >
      // education
    </div>

    <h2
      class="section-title"
      data-aos="fade-right"
    >
      Academic Background
    </h2>

    <div
      class="section-divider"
      data-aos="fade-right"
    ></div>

    <div
      class="edu-card"
      data-aos="fade-right"
    >

      <div class="edu-left">

        <h3>
          B.Tech in Computer Science & Engineering
        </h3>

        <p>
          Aditya College of Engineering & Technology
        </p>

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

<!-- PROJECTS -->
<section id="projects">

  <div class="container">

    <div
      class="section-label"
      data-aos="fade-up"
    >
      // featured work
    </div>

    <h2
      class="section-title"
      data-aos="fade-up"
    >
      Projects
    </h2>

    <div
      class="section-divider"
      data-aos="fade-up"
    ></div>

    <div class="projects-grid">

      <!-- PROJECT 1 -->
      <div
        class="project-card"
        data-aos="fade-up"
      >

        <div class="project-number">
          01 / INFRASTRUCTURE
        </div>

        <h3 class="project-title">
          Multi-Region Kubernetes Platform
        </h3>

        <p class="project-desc">

          Production-grade Kubernetes platform
          designed for multi-region deployments,
          automated failover,
          and global load balancing.

        </p>

        <div class="project-stack">

          <span class="stack-tag">Kubernetes</span>
          <span class="stack-tag">Terraform</span>
          <span class="stack-tag">Helm</span>
          <span class="stack-tag">ArgoCD</span>

        </div>

        <div class="project-links">

          <a
            href="https://github.com/Priyanka05f0/multi-region-kubernetes-platform"
            target="_blank"
            class="project-link"
          >
            GitHub Repo
          </a>

          <a
            href="https://drive.google.com/file/d/1ZMIe38R3OuVCA4kEKksKQvZisDO3mYYB/view"
            target="_blank"
            class="project-link"
          >
            Demo Video
          </a>

        </div>

      </div>

    </div>

  </div>

</section>

<!-- CONTACT -->
<section
  id="contact"
  data-aos="fade-up"
>

  <div class="container">

    <div class="section-label">
      // get in touch
    </div>

    <h2 class="section-title">
      Let's Connect
    </h2>

    <div class="section-divider"></div>

    <div class="contact-links">

      <a
        href="mailto:lakshmipriyanakabethampudi.23@gmail.com"
        class="contact-link"
      >
        Email
      </a>

      <a
        href="https://github.com/Priyanka05f0"
        target="_blank"
        class="contact-link"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/lakshmi-priyanka-bethampudi-b776ba2aa/"
        target="_blank"
        class="contact-link"
      >
        LinkedIn
      </a>

    </div>

  </div>

</section>

<footer>

  Designed & Built by
  Lakshmi Priyanka Bethampudi

</footer>

        `
      }}
    />

  );

}

export default App;