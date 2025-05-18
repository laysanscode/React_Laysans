import React from "react";
import { motion } from "framer-motion";

const benefits = [
  {
    img: "./Static/Image/tech.jpeg",
    title: "Cutting-Edge Technology",
    desc: "We leverage the latest technologies to build innovative and scalable solutions.",
  },
  {
    img: "./Static/Image/RCS.jpeg",
    title: "Robust Cybersecurity",
    desc: "Top-notch security measures ensure data protection and prevent cyber threats.",
  },
  {
    img: "./Static/Image/cs.png",
    title: "24/7 IT Support",
    desc: "Dedicated support team is available round the clock for technical challenges.",
  },
  {
    img: "./Static/Image/cloud.jpeg",
    title: "Cloud Solutions",
    desc: "Scalable and flexible cloud services for efficient business operations.",
  },
];

const WhyChooseUs = () => (
  <section className="us_section layout_padding">
    <div className="container">
      <div className="heading_container text-center mb-4">
        <h2>Why Choose Us</h2>
      </div>
      <div className="us_container">
        <div className="row justify-content-center">
          {benefits.map((b, index) => (
            <motion.div
              key={index}
              className="col-lg-3 col-md-6 mb-4"
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and a small offset
              whileInView={{ opacity: 1, y: 0 }} // Fade in to full opacity when in view
              transition={{ duration: 0.8, delay: index * 0.3 }} // Delays each card's fade-in
              viewport={{ once: true, amount: 0.3 }} // Triggers animation when 30% of the element is visible
            >
              <div className="box text-center">
                <div className="img-box py-3">
                  <img className="img-fluid" src={b.img} alt={b.title} style={{ maxHeight: "200px", objectFit: "cover" }} />
                </div>
                <div className="detail-box">
                  <h5>{b.title}</h5>
                  <p>{b.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="text-center mt-3">
            <a type="button" href="/#/about" className="btn btn-outline-dark">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <br/>
  </section>
);

export default WhyChooseUs;
