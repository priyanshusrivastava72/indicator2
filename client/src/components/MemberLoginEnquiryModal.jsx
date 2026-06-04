import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, Loader2, MessageSquare } from 'lucide-react';
import axios from 'axios';

export default function MemberLoginEnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: '',
    contactMethod: 'whatsapp',
    consent: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  // Reset form when modal opens or closes
  useEffect(() => {
    if (isOpen) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        enquiryType: '',
        message: '',
        contactMethod: 'whatsapp',
        consent: false
      });
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
      setCountdown(3);
    } else {
      // Reset submission state when modal closes
      setIsSubmitted(false);
      setIsSubmitting(false);
      setCountdown(3);
    }
  }, [isOpen]);

  // Handle ESC key close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Countdown timer on success submit
  useEffect(() => {
    let timer;
    if (isSubmitted && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isSubmitted && countdown === 0) {
      onClose();
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, countdown, onClose]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
    } else {
      let cleanPhone = formData.phone.replace(/\D/g, ''); // Extract only digits
      if (cleanPhone.length === 12 && cleanPhone.startsWith('91')) {
        cleanPhone = cleanPhone.slice(2); // Strip 91 country code
      }
      if (cleanPhone.length !== 10) {
        newErrors.phone = 'Phone number must be exactly 10 digits';
      }
    }

    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Please select an enquiry type';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message details are required';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must consent to be contacted';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setErrors((prev) => ({ ...prev, submit: '' }));

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/leads`, {
        ...formData,
        audienceType: 'member_enquiry',
      });

      if (response.data.success) {
        setIsSubmitted(true);
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: response.data.message || 'Submission failed. Please try again.',
        }));
      }
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      setErrors((prev) => ({
        ...prev,
        submit: error.response?.data?.message || 'Server error. Please check your network connection and try again.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="modal-overlay cursor-pointer" 
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="modal-content-card cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
          {/* Close Button X */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-500 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-gray-500 light:hover:text-gray-900 transition-colors p-1.5 rounded-lg hover:bg-white/5 cursor-pointer z-20"
          >
            <X size={16} />
          </button>

          <div className="modal-scroll-container">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.div
                  key="enquiry-form-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Form Header */}
                  <div className="mb-6 pr-6 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5">
                      <MessageSquare size={10} />
                      <span>Member Support & Sales</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                      Submit an Enquiry
                    </h3>
                    <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                      Have questions about our indicators, course curriculum, or account access? Send us an enquiry and we will get back to you.
                    </p>
                  </div>

                  {/* Onboarding Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div className="modal-form-group">
                      <label className="modal-label-text">Full Name <span className="text-red-400 font-bold">*</span></label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rohan Sharma"
                        className={`modal-input-field ${errors.fullName ? 'border-red-400 focus:border-red-400' : ''}`}
                      />
                      {errors.fullName && <span className="modal-error-message text-xs text-red-400 mt-1">{errors.fullName}</span>}
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Email Address <span className="text-red-400 font-bold">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rohan@gmail.com"
                          className={`modal-input-field ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                        {errors.email && <span className="modal-error-message text-xs text-red-400 mt-1">{errors.email}</span>}
                      </div>

                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Phone / WhatsApp <span className="text-red-400 font-bold">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 9876543210"
                          className={`modal-input-field ${errors.phone ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                        {errors.phone && <span className="modal-error-message text-xs text-red-400 mt-1">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Enquiry Type & Preferred Contact Method */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Enquiry Type <span className="text-red-400 font-bold">*</span></label>
                        <select
                          name="enquiryType"
                          value={formData.enquiryType}
                          onChange={handleChange}
                          className={`modal-input-field ${errors.enquiryType ? 'border-red-400 focus:border-red-400' : ''}`}
                        >
                          <option value="" disabled>Select Reason</option>
                          <option value="access_issue">Request Student Account Access</option>
                          <option value="buy_tools">Purchase Indicator Tools</option>
                          <option value="course_info">General Course Inquiry</option>
                          <option value="tech_support">Report Technical Issue</option>
                        </select>
                        {errors.enquiryType && <span className="modal-error-message text-xs text-red-400 mt-1">{errors.enquiryType}</span>}
                      </div>

                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Preferred Contact Method</label>
                        <select
                          name="contactMethod"
                          value={formData.contactMethod}
                          onChange={handleChange}
                          className="modal-input-field"
                        >
                          <option value="whatsapp">WhatsApp</option>
                          <option value="email">Email</option>
                          <option value="call">Phone Call</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Details */}
                    <div className="modal-form-group">
                      <label className="modal-label-text">Message / Enquiry Details <span className="text-red-400 font-bold">*</span></label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe how we can assist you..."
                        rows={3}
                        className={`modal-input-field min-h-[80px] py-2 ${errors.message ? 'border-red-400 focus:border-red-400' : ''}`}
                      />
                      {errors.message && <span className="modal-error-message text-xs text-red-400 mt-1">{errors.message}</span>}
                    </div>

                    {/* Consent checkbox */}
                    <div className="modal-form-group pt-1">
                      <div className="modal-checkbox-container flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id="member-consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className={`modal-checkbox-input mt-0.5 ${errors.consent ? 'accent-red-400' : ''}`}
                        />
                        <label htmlFor="member-consent" className="modal-checkbox-label cursor-pointer text-xs text-gray-400 leading-relaxed select-none">
                          I consent to the TradeCraft support team contacting me using the details provided. <span className="text-red-400 font-bold">*</span>
                        </label>
                      </div>
                      {errors.consent && <span className="modal-error-message text-xs text-red-400 mt-1 block">{errors.consent}</span>}
                      {errors.submit && (
                        <div className="text-red-400 text-xs font-mono text-center bg-red-500/10 border border-red-500/20 p-2.5 rounded-lg mt-3">
                          {errors.submit}
                        </div>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/5 dark:border-white/5 light:border-black/5 mt-6">
                      <button
                        type="button"
                        onClick={onClose}
                        disabled={isSubmitting}
                        className="px-5 py-2.5 rounded-xl border border-white/10 dark:border-white/10 light:border-black/10 text-gray-300 dark:text-gray-300 light:text-gray-600 font-semibold text-xs uppercase tracking-wider hover:bg-white/5 light:hover:bg-black/5 disabled:opacity-50 cursor-pointer transition-all"
                      >
                        Cancel
                      </button>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 disabled:opacity-80 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/25 transition-all"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Submit Inquiry</span>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="enquiry-success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  {/* Success checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/5"
                  >
                    <Check size={28} className="stroke-[3]" />
                  </motion.div>

                  {/* Success message */}
                  <h3 className="text-xl md:text-2xl font-display font-black text-white mb-3">
                    Inquiry Submitted!
                  </h3>

                  <p className="text-gray-300 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                    Thank you. Your inquiry regarding Member Access has been received. Our team will contact you within 24 hours.
                  </p>

                  {/* Redirection / Close indicator */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 light:bg-black/5 light:border-black/5 text-gray-400 text-xs font-medium">
                    <Loader2 size={12} className="animate-spin text-emerald-400" />
                    <span>
                      Closing this window in {countdown}s...
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
      )}
    </AnimatePresence>
  );
}
