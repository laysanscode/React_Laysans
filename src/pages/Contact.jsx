'use client';

import React, { useState, useEffect } from 'react';  // import useEffect
import { motion } from 'framer-motion';
import Chat from '../Elements/Chat';

function Contact() {
  // Scroll to top on component mount to prevent auto scroll down
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState(null);
  const [responseType, setResponseType] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert('All fields are required.');
      return;
    }

    setSubmitting(true);
    setResponseMessage(null);

    try {
      const res = await fetch('https://laysans-solutions-api.onrender.com/mail/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      const data = await res.json();
      setResponseType('success');
      setResponseMessage(data.message || 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error(error);
      setResponseType('error');
      setResponseMessage(`An error occurred: ${error.message}`);
    } finally {
      setSubmitting(false);
      setTimeout(() => setResponseMessage(null), 5000);
    }
  };

  return (
    <>
      <section>
        <div className="parllax1 mb-4">
          <div className="about">
            <div className="info text-center">
              <h3>Contact Us</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact code">
        <a
          href="https://api.whatsapp.com/send?phone=919500272207"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <motion.div
          className="container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="row my-5 align-items-stretch">
            {/* Left column */}
            <motion.div
              className="col-lg-4 contact-info d-flex flex-column"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-uppercase mb-4">Get in Touch</h4>
              <div className="address pb-2">
                <iframe
                  title="Laysans Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3889.2203186081083!2d80.1200975750751!3d12.893549987414689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDUzJzM2LjgiTiA4MMKwMDcnMjEuNiJF!5e0!3m2!1sen!2sin!4v1742842396798!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  tabIndex="-1"  // prevent focus auto scroll
                  style={{ border: 0, borderRadius: '8px', width: '100%', height: '200px' }}
                ></iframe>
              </div>
              <div className="email mb-3">
                <i className="fa-solid fa-envelope fa-2x text-primary"></i>
                <h5>Email:</h5>
                <p>contact@laysans.com</p>
              </div>
              <div className="phone">
                <i className="fa-solid fa-phone fa-2x text-primary"></i>
                <h5>Phone Number:</h5>
                <p>+91 9500262207</p>
              </div>
            </motion.div>

            {/* Right column */}
            <motion.div
              className="col-lg-8 mt-5 mt-lg-0 contact-form d-flex flex-column"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-uppercase mb-4">Send Us a Message</h4>
              <form onSubmit={handleSubmit} className="php-email-form flex-grow-1">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control py-3"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      name="email"
                      className="form-control py-3"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    name="subject"
                    className="form-control py-3"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="8"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <br />
                <div className="text-center">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>

              {responseMessage && (
                <div
                  className={`alert mt-4 text-center p-3 ${
                    responseType === 'success' ? 'alert-success' : 'alert-danger'
                  }`}
                >
                  {responseMessage}
                </div>
              )}
            </motion.div>
          </div>
          <Chat />
        </motion.div>
      </section>
    </>
  );
}

export default Contact;
