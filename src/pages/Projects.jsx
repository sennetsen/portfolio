import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, A11y } from 'swiper/modules'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Projects.css'

const projects = [
  {
    title: 'Tambr — AI Audiobook iOS App',
    description:
      'Built and shipped Tambr as the second product under Prysm Creative Inc., an iOS app that converts PDFs, EPUBs, URLs, and raw text into AI-narrated audiobooks. Integrated TTS APIs with 25+ premium voices, end-to-end encrypted cloud sync across devices, and a tiered subscription model. Built with Swift and SwiftUI, with a focus on a clean reading-to-listening experience for users who want to consume content on the go.',
    tags: ['Swift', 'SwiftUI', 'AI/TTS APIs', 'Cloudflare Workers', 'iOS'],
    image: '/tambr_homepage.png',
    liveUrl: 'https://trytambr.com',
  },
  {
    title: 'Capital One — ML Risk Pipeline',
    description:
      'Engineered an end-to-end Kubernetes pipeline for a deep learning model using KFPlumber, an internal orchestration tool, to assess client risk based on Net Present Value and other proprietary financial indicators. Integrated a PyTorch model into the pipeline enabling scalable training and inference across distributed environments, and monitored pipeline cost using KubeCost and New Relic, reducing execution cost by 25% via Dask parallel compute optimizations.',
    tags: ['Kubernetes', 'AWS', 'PyTorch', 'Dask', 'KubeCost', 'New Relic', 'Python'],
    image: '/Capital-one-Logo-4.png',
  },
  {
    title: 'Prysm — Creator Economy Platform',
    description:
      'Co-founded Prysm Creative Inc. under Life Changing Labs accelerator\'s Summer 2024 cohort and launched Prysm, an online creator economy platform that enables creators to monetize fan requests across sectors. Conducted 100+ hours of user feedback interviews, attracted 45 creators with a combined following of over 2 million, and hired 2 interns to support product development. Built with React and Next.js on a PostgreSQL backend handling 300+ product transactions per day.',
    tags: ['React', 'Next.js', 'TypeScript', 'PostgreSQL', 'Figma', 'Agile'],
    image: '/prysm_homepage.png',
    repoUrl: 'https://github.com/sennetsen/prysm-app',
  },
  {
    title: 'MeOH Inc. — Carbon Emissions Tracker',
    description:
      'Structured a PostgreSQL database to collect client transactional records containing carbon emission information and implemented RESTful API endpoints to securely manage enterprise records, supporting over 150 API calls per minute. Developed a generative AI chatbot using Python to assist clients and reduced customer support response times by about 30%.',
    tags: ['Python', 'Java', 'PostgreSQL', 'OpenAI API', 'AWS EC2', 'Salesforce'],
    image: '/meOH_img.webp',
  },
  {
    title: 'ESW — Campus Food Waste Tracker',
    description:
      'Led development of a campus food waste tracking web app for Cornell University Engineers for a Sustainable World, a 75+ member sustainability project team. Expanded the Django backend and migrated the frontend to React, while managing finances and corporate sponsorships including Boeing as treasurer.',
    tags: ['Django', 'React', 'Python', 'JavaScript'],
    image: '/esw_logo.png',
  },
  {
    title: 'OFishl Fishing Tournament',
    description:
      'Developed OFishl, a fishing game built entirely in a functional paradigm using OCaml. Implemented game mechanics including audio, swimming, fish-catching, store transactions, and resource management. Achieved exceptional code coverage surpassing 95% with over 550 lines of test code, employing both glass-box and black-box testing strategies using OUnit and Bisect_ppx frameworks.',
    tags: ['OCaml', 'OUnit', 'Bisect_ppx', 'Functional Programming'],
    image: '/ofishl-ocaml-logo.png',
    repoUrl: 'https://github.com/sennetsen/ofishl',
  },
]

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const paginationRef = useRef(null)

  return (
    <div className="projects">
      <div className="projects-inner">
        <SectionTitle>My Projects</SectionTitle>

        <motion.div
          className="projects-carousel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <button
            ref={prevRef}
            type="button"
            className="carousel-btn carousel-btn-prev"
            aria-label="Previous project"
          >
            <FiChevronLeft />
          </button>
          <button
            ref={nextRef}
            type="button"
            className="carousel-btn carousel-btn-next"
            aria-label="Next project"
          >
            <FiChevronRight />
          </button>

          <Swiper
            modules={[EffectCoverflow, Navigation, Pagination, Keyboard, Mousewheel, A11y]}
            effect="coverflow"
            grabCursor
            centeredSlides
            loop
            slideToClickedSlide
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true, sensitivity: 1, releaseOnEdges: true }}
            slidesPerView="auto"
            spaceBetween={0}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 160,
              modifier: 1,
              slideShadows: false,
            }}
            a11y={{
              prevSlideMessage: 'Previous project',
              nextSlideMessage: 'Next project',
              paginationBulletMessage: 'Go to project {{index}}',
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current
              swiper.params.navigation.nextEl = nextRef.current
              swiper.params.pagination.el = paginationRef.current
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            pagination={{
              el: paginationRef.current,
              clickable: true,
              bulletClass: 'carousel-dot',
              bulletActiveClass: 'active',
              bulletElement: 'button',
            }}
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="projects-swiper"
          >
            {projects.map((project, i) => (
              <SwiperSlide key={i} className="project-slide">
                <div className="project-card">
                  <h3 className="project-title">{project.title}</h3>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <div className="project-image-placeholder">
                      <span>Project Image</span>
                    </div>
                  )}
                  {project.tags && (
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span className="project-tag" key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <p className="project-description">{project.description}</p>
                  {(project.liveUrl || project.repoUrl) && (
                    <div className="project-links">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn project-link-primary"
                        >
                          <FiExternalLink /> View Live
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link-btn project-link-secondary"
                        >
                          <FiGithub /> View Repo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div
          ref={paginationRef}
          className="carousel-dots"
          role="tablist"
          aria-label="Project navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        ></motion.div>

        <motion.div
          className="carousel-counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {String(activeIndex + 1).padStart(2, '0')}
          <span className="carousel-counter-divider">/</span>
          {String(projects.length).padStart(2, '0')}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
        >
          <Link to="/about" className="btn btn-primary">
            Explore More
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Connect With Me
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
