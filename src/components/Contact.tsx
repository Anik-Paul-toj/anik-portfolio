import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';
import GooeyButton from './GooeyButton';
import './styles/Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Initialize EmailJS with your public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      
      // Prepare template parameters matching your EmailJS template
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject || 'Contact from Portfolio',
        user_message: formData.message,
        to_email: 'trojanik003@gmail.com' // Your email
      };
      
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      
      if (result.status === 200) {
        alert('✅ Message sent successfully! I will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Email sending failed');
      }
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
      const body = encodeURIComponent(
        `Hi Anik,\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}\n\n` +
        `Best regards,\n${formData.name}`
      );
      
      const mailtoLink = `mailto:trojanik003@gmail.com?subject=${subject}&body=${body}`;
      window.open(mailtoLink, '_blank');
      alert('📧 Email client opened as backup! Your message is ready to send.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'trojanik003@gmail.com',
      link: 'mailto:trojanik003@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 9126426769',
      link: 'tel:+919126426769'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'Kolkata, West Bengal, India',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/Anik-Paul-toj', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/anik-paul-2bb315265/', label: 'LinkedIn' },
    { icon: FaTwitter, url: 'https://twitter.com/yourusername', label: 'Twitter' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>Get In Touch</h2>
          <p>Let's work together on your next project</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Let's Connect</h3>
            <p>
              I'm always interested in hearing about new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="contact-icon">
                    {React.createElement(info.icon as any)}
                  </div>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {React.createElement(social.icon as any)}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  required
                ></textarea>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GooeyButton onClick={() => {
                  const fakeEvent = { preventDefault: () => {} } as React.FormEvent;
                  handleSubmit(fakeEvent);
                }}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </GooeyButton>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 