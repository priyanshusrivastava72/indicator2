import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, Loader2 } from 'lucide-react';

export default function AudienceFormModal({ isOpen, onClose, audience, onSubmitSuccess }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectCountdown, setRedirectCountdown] = useState(3);

  // Reset form state when modal opens or audience changes
  useEffect(() => {
    if (isOpen && audience) {
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        consent: false,
        // Audience specific defaults
        ...(audience.id === 'students' && {
          college: '',
          course: '',
          yearOfStudy: '',
          careerGoal: '',
          prevKnowledge: '',
        }),
        ...(audience.id === 'professionals' && {
          profession: '',
          experience: '',
          incomeRange: '',
          weeklyTime: '',
          financialGoal: '',
        }),
        ...(audience.id === 'investors' && {
          marketExp: '',
          investmentExp: '',
          marketsFollowed: '',
          knowledgeLevel: '',
          learningObjective: '',
        }),
        ...(audience.id === 'beginners' && {
          studiedBefore: '',
          usedTradingView: '',
          interestArea: '',
          challenge: '',
        }),
      });
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
      setRedirectCountdown(3);
    }
  }, [isOpen, audience]);

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

  // Handle countdown trigger on success
  useEffect(() => {
    let timer;
    if (isSubmitted && redirectCountdown > 0) {
      timer = setTimeout(() => {
        setRedirectCountdown((prev) => prev - 1);
      }, 1000);
    } else if (isSubmitted && redirectCountdown === 0) {
      onClose();
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, redirectCountdown, onClose, onSubmitSuccess]);

  if (!audience) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Common Required Validations
    if (!formData.fullName || !formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    // Email Validations
    if (!formData.email) {
      newErrors.email = 'Email Address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    // Phone Validations
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const phoneRegex = /^\+?[\d\s\-]{10,15}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s+/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
      }
    }

    // Consent checkbox Validation
    if (!formData.consent) {
      newErrors.consent = 'You must agree to the educational contact consent terms';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate premium backend network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  // Render Audience Specific Form Fields
  const renderAudienceFields = () => {
    switch (audience.id) {
      case 'students':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  placeholder="e.g. 20"
                  className="modal-input-field"
                />
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Year of Study</label>
                <select
                  name="yearOfStudy"
                  value={formData.yearOfStudy || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="Post-Graduate">Post-Graduate</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">College / University Name</label>
              <input
                type="text"
                name="college"
                value={formData.college || ''}
                onChange={handleChange}
                placeholder="e.g. Delhi University"
                className="modal-input-field"
              />
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Course / Degree</label>
              <input
                type="text"
                name="course"
                value={formData.course || ''}
                onChange={handleChange}
                placeholder="e.g. B.Com (Hons)"
                className="modal-input-field"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Previous Market Knowledge?</label>
                <select
                  name="prevKnowledge"
                  value={formData.prevKnowledge || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Option</option>
                  <option value="Yes">Yes, basic concepts</option>
                  <option value="No">No, absolute beginner</option>
                </select>
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Career Goal</label>
                <input
                  type="text"
                  name="careerGoal"
                  value={formData.careerGoal || ''}
                  onChange={handleChange}
                  placeholder="e.g. Financial Analyst"
                  className="modal-input-field"
                />
              </div>
            </div>
          </>
        );

      case 'professionals':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  placeholder="e.g. 28"
                  className="modal-input-field"
                />
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Years of Experience</label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience || ''}
                  onChange={handleChange}
                  placeholder="e.g. 4 Years"
                  className="modal-input-field"
                />
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Current Profession</label>
              <input
                type="text"
                name="profession"
                value={formData.profession || ''}
                onChange={handleChange}
                placeholder="e.g. Software Engineer"
                className="modal-input-field"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Monthly Income Range</label>
                <select
                  name="incomeRange"
                  value={formData.incomeRange || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Range</option>
                  <option value="Under ₹50k">Under ₹50,000</option>
                  <option value="₹50k - ₹1L">₹50,000 - ₹1,00,000</option>
                  <option value="₹1L - ₹2L">₹1,00,000 - ₹2,00,000</option>
                  <option value="Over ₹2L">Over ₹2,00,000</option>
                </select>
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Weekly Learning Time</label>
                <select
                  name="weeklyTime"
                  value={formData.weeklyTime || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Availability</option>
                  <option value="2-4 Hours">2 - 4 Hours/Week</option>
                  <option value="5-8 Hours">5 - 8 Hours/Week</option>
                  <option value="10+ Hours">10+ Hours/Week</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Primary Financial Goal</label>
              <input
                type="text"
                name="financialGoal"
                value={formData.financialGoal || ''}
                onChange={handleChange}
                placeholder="e.g. Structured secondary income stream"
                className="modal-input-field"
              />
            </div>
          </>
        );

      case 'investors':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  placeholder="e.g. 35"
                  className="modal-input-field"
                />
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Market Experience</label>
                <input
                  type="text"
                  name="marketExp"
                  value={formData.marketExp || ''}
                  onChange={handleChange}
                  placeholder="e.g. 2 Years in Equities"
                  className="modal-input-field"
                />
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Current Investment Experience</label>
              <input
                type="text"
                name="investmentExp"
                value={formData.investmentExp || ''}
                onChange={handleChange}
                placeholder="e.g. Mutual Funds, SIPs, Direct Equities"
                className="modal-input-field"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Markets Followed</label>
                <input
                  type="text"
                  name="marketsFollowed"
                  value={formData.marketsFollowed || ''}
                  onChange={handleChange}
                  placeholder="e.g. Nifty, BankNifty, Crypto"
                  className="modal-input-field"
                />
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Knowledge Level</label>
                <select
                  name="knowledgeLevel"
                  value={formData.knowledgeLevel || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Main Learning Objective</label>
              <input
                type="text"
                name="learningObjective"
                value={formData.learningObjective || ''}
                onChange={handleChange}
                placeholder="e.g. Mastery over price action & support/resistance"
                className="modal-input-field"
              />
            </div>
          </>
        );

      case 'beginners':
        return (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  placeholder="e.g. 22"
                  className="modal-input-field"
                />
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Primary Interest Area</label>
                <input
                  type="text"
                  name="interestArea"
                  value={formData.interestArea || ''}
                  onChange={handleChange}
                  placeholder="e.g. Chart analysis basics"
                  className="modal-input-field"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Studied Markets Before?</label>
                <select
                  name="studiedBefore"
                  value={formData.studiedBefore || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="modal-form-group col-span-2 sm:col-span-1">
                <label className="modal-label-text">Used TradingView Before?</label>
                <select
                  name="usedTradingView"
                  value={formData.usedTradingView || ''}
                  onChange={handleChange}
                  className="modal-input-field"
                >
                  <option value="" disabled>Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>

            <div className="modal-form-group">
              <label className="modal-label-text">Biggest Challenge Getting Started</label>
              <input
                type="text"
                name="challenge"
                value={formData.challenge || ''}
                onChange={handleChange}
                placeholder="e.g. Fear of risk or lack of structured roadmap"
                className="modal-input-field"
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="modal-overlay cursor-pointer" 
          onClick={onClose}
          onTouchEnd={onClose}
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="modal-content-card cursor-default"
            onClick={(e) => e.stopPropagation()}
            onTouchEnd={(e) => e.stopPropagation()}
          >
          {/* Close button X */}
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
                  key="form-view"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Form Header */}
                  <div className="mb-6 pr-6 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5">
                      <Sparkles size={10} />
                      <span>SaaS Onboarding Flow</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white leading-tight">
                      Start as a {audience.title}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1.5 leading-relaxed">
                      Complete this profile setup to customize your course logic, charting setup, and risk management parameters.
                    </p>
                  </div>

                  {/* Onboarding Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Common Fields */}
                    <div className="modal-form-group">
                      <label className="modal-label-text">Full Name <span className="text-red-400 font-bold">*</span></label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName || ''}
                        onChange={handleChange}
                        placeholder="e.g. Rohan Sharma"
                        className={`modal-input-field ${errors.fullName ? 'border-red-400 focus:border-red-400' : ''}`}
                      />
                      {errors.fullName && <span className="modal-error-message">{errors.fullName}</span>}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Email Address <span className="text-red-400 font-bold">*</span></label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email || ''}
                          onChange={handleChange}
                          placeholder="e.g. rohan@gmail.com"
                          className={`modal-input-field ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                        {errors.email && <span className="modal-error-message">{errors.email}</span>}
                      </div>

                      <div className="modal-form-group col-span-2 sm:col-span-1">
                        <label className="modal-label-text">Phone Number <span className="text-red-400 font-bold">*</span></label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone || ''}
                          onChange={handleChange}
                          placeholder="e.g. +91 9876543210"
                          className={`modal-input-field ${errors.phone ? 'border-red-400 focus:border-red-400' : ''}`}
                        />
                        {errors.phone && <span className="modal-error-message">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Audience Specific Custom Fields */}
                    {renderAudienceFields()}

                    {/* Consent Checkbox */}
                    <div className="modal-form-group pt-2">
                      <div className="modal-checkbox-container">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent || false}
                          onChange={handleChange}
                          className={`modal-checkbox-input ${errors.consent ? 'accent-red-400' : ''}`}
                        />
                        <label htmlFor="consent" className="modal-checkbox-label cursor-pointer">
                          I agree to be contacted regarding the TradeCraft educational program and learning curriculum setups. <span className="text-red-400 font-bold">*</span>
                        </label>
                      </div>
                      {errors.consent && <span className="modal-error-message block mt-1">{errors.consent}</span>}
                    </div>

                    {/* Action Footer */}
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
                            <span>Processing...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Plan</span>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-view"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="py-8 text-center flex flex-col items-center"
                >
                  {/* Success Circle and Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.15 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/5"
                  >
                    <Check size={28} className="stroke-[3]" />
                  </motion.div>

                  {/* Success Text */}
                  <h3 className="text-xl md:text-2xl font-display font-black text-white mb-3">
                    Profile Onboarding Complete!
                  </h3>
                  
                  <p className="text-gray-300 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
                    Thank you. Your personalized learning plan request has been received.
                  </p>

                  {/* Redirection indicator */}
                  <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-white/5 border border-white/5 light:bg-black/5 light:border-black/5 text-gray-400 text-xs font-medium">
                    <Loader2 size={12} className="animate-spin text-emerald-400" />
                    <span>
                      Redirecting to curriculum pricing in {redirectCountdown}s...
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
