'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  useEffect(() => {
    
    const fetchClients = async () => {
      try {
        const response = await fetch('https://laysans-solutions-api.onrender.com/client/');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const renderPlaceholders = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="col-lg-4 col-xl-6 portfolio-item filter-web mb-4">
        <div className="portfolio-wrap">
          <div className="placeholder-box" />
          <div className="portfolio-info text-start p-3">
            <h4 className="placeholder-title" />
            <div className="portfolio-links mt-2">
              <span className="placeholder-link" />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderClients = () => {
    return clients.map((client, index) => (
      <motion.div
        key={index}
        className="col-lg-4 col-xl-6 portfolio-item filter-web mb-4"
        initial={{ opacity: 0 }} // Start as invisible
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 0.8 }} // Duration of the fade-in effect
        viewport={{ once: true }} // Trigger only once when it enters the viewport
      >
        <div className="portfolio-wrap">
          <iframe
            className="embed-responsive-item"
            src={client.Link}
            allowFullScreen
            scrolling="no"
            style={{
              width: '100%',
              height: '300px',
              border: 'none',
            }}
            title={client.Productname}
          ></iframe>
          <div className="overlay-hover">
            <h4 className="text-white text-center">{client.Productname}</h4>
            <div className="portfolio-links mt-2">
              <a
                href={client.Link}
                target="_blank"
                rel="noopener noreferrer"
                title={client.name}
                className="text-white"
              >
                <i className="fas fa-link fa-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    ));
  };

  return (
    <>
      <section>
        <div className="parllax1">
          <div className="about">
            <div className="info">
              <h3>Our Clients</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="services code">
        <a
          href="https://api.whatsapp.com/send?phone=919500272207"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <div className="container my-4">
          <h2 className="text-center">Trusted by Leading Brands</h2>
          <br />
          <div className="row portfolio-container" id="clientList">
            {loading ? renderPlaceholders() : renderClients()}
          </div>
        </div>
      </section>
    </>
  );
}
