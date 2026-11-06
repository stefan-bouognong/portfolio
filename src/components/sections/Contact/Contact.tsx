import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ArrowUpRight, 
  Loader2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, DribbbleIcon } from '../../common/Icons';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const contactChannels = [
    {
      icon: <Mail size={18} strokeWidth={2} />,
      label: 'Email Professionnel',
      value: 'stefanbouognong@gmail.com',
      href: 'mailto:stefanbouognong@gmail.com',
      action: 'Envoyer un email direct',
    },
    {
      icon: <Phone size={18} strokeWidth={2} />,
      label: 'Téléphone & WhatsApp',
      value: '+237 658 58 21 35',
      href: 'tel:+237658582135',
      action: 'Appel direct ou message',
    },
    {
      icon: <MapPin size={18} strokeWidth={2} />,
      label: 'Localisation',
      value: 'Yaoundé, Cameroun',
      href: 'https://maps.google.com/?q=Yaoundé,Cameroun',
      action: 'Heure locale (GMT+1)',
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/stefan-bouognong',
      icon: <GithubIcon size={18} />,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/stefan-mouope-3655b62bb',
      icon: <LinkedinIcon size={18} />,
    },
    {
      name: 'Twitter',
      href: 'https://twitter.com',
      icon: <TwitterIcon size={18} />,
    },
    {
      name: 'Dribbble',
      href: 'https://dribbble.com',
      icon: <DribbbleIcon size={18} />,
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a project subject or topic';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief message about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters long';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1400));
      console.log('Project inquiry submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 6000);
    } catch {
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 6000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={`contact section ${isVisible ? 'contact--visible' : ''}`} ref={sectionRef}>
      <div className="container">
        
        {/* Editorial Section Header */}
        <div className="section-header">
          <div className="section-eyebrow">06 // GET IN TOUCH</div>
          <h2 className="section-title">Have a project in mind? Let's make it happen.</h2>
          <p className="section-description">
            Whether you have a digital product to build, a creative collaboration in mind, or simply an idea worth exploring, I'd love to hear from you.
          </p>
        </div>

        {/* Contact Split Grid */}
        <div className="contact__grid">
          
          {/* Left Column: Direct Inquiries & Social Ecosystem */}
          <div className="contact__info-card">
            
            <div className="contact__info-header">
              <span className="tag-mono">DIRECT CHANNELS</span>
              <h3 className="contact__info-title">Let's Talk About Your Project</h3>
              <p className="contact__info-desc">
                I am currently open to select client projects, design system consultations, and technical collaborations. I respond promptly within 24 hours.
              </p>
            </div>

            {/* Channels List */}
            <div className="contact__channels-list">
              {contactChannels.map((channel, idx) => (
                <a
                  key={idx}
                  href={channel.href}
                  className="contact__channel-item"
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={channel.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <div className="contact__channel-icon-wrap">
                    {channel.icon}
                  </div>
                  
                  <div className="contact__channel-details">
                    <span className="contact__channel-label">{channel.label}</span>
                    <span className="contact__channel-value">{channel.value}</span>
                    <span className="contact__channel-action">{channel.action}</span>
                  </div>

                  <ArrowUpRight size={16} className="contact__channel-arrow" />
                </a>
              ))}
            </div>

            {/* Social Channels */}
            <div className="contact__social-block">
              <span className="contact__social-label">Professional Profiles:</span>
              <div className="contact__social-row">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__social-link"
                    aria-label={s.name}
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Refined Functional Inquiry Form */}
          <div className="contact__form-card">
            <h3 className="contact__form-heading">Send a Direct Message</h3>
            
            <form onSubmit={handleSubmit} className="contact__form" noValidate>
              
              {/* Name Field */}
              <div className="contact__form-group">
                <label htmlFor="contact-name" className="contact__label">
                  Your Name <span className="contact__required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Marie Laurent"
                  className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                />
                {errors.name && (
                  <span className="contact__error-text">{errors.name}</span>
                )}
              </div>

              {/* Email Field */}
              <div className="contact__form-group">
                <label htmlFor="contact-email" className="contact__label">
                  Email Address <span className="contact__required">*</span>
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                />
                {errors.email && (
                  <span className="contact__error-text">{errors.email}</span>
                )}
              </div>

              {/* Subject Field */}
              <div className="contact__form-group">
                <label htmlFor="contact-subject" className="contact__label">
                  Subject / Project Scope <span className="contact__required">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Healthcare Application UI/UX Redesign"
                  className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                />
                {errors.subject && (
                  <span className="contact__error-text">{errors.subject}</span>
                )}
              </div>

              {/* Message Field */}
              <div className="contact__form-group">
                <label htmlFor="contact-message" className="contact__label">
                  Project Details <span className="contact__required">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your timeline, objectives, and any relevant background..."
                  className={`contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                />
                {errors.message && (
                  <span className="contact__error-text">{errors.message}</span>
                )}
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn--primary contact__submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="contact__spinner" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Let's Talk About Your Project</span>
                    <Send size={16} strokeWidth={2.2} />
                  </>
                )}
              </button>

              {/* Feedback States */}
              {submitStatus === 'success' && (
                <div className="contact__status-msg contact__status-msg--success" role="alert">
                  <CheckCircle2 size={18} className="contact__status-icon" />
                  <span>Thank you! Your message has been received. I will reply shortly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="contact__status-msg contact__status-msg--error" role="alert">
                  <AlertCircle size={18} className="contact__status-icon" />
                  <span>An unexpected issue occurred. Please email directly at stefanmouope72@gmail.com</span>
                </div>
              )}

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
