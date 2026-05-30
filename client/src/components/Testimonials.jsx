import React, { useEffect, useState, useRef } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      text: "The risk management framework alone paid for the course in my first week. Finally, a system that focuses on capital protection instead of gambling.",
      initials: "AR",
      name: "Aryan R.",
      role: "Software Engineer"
    },
    {
      text: "I've bought three other courses before this. They all felt like scams. This is the first time I've learned a repeatable process. The indicator is a game-changer.",
      initials: "SM",
      name: "Sneha M.",
      role: "College Student"
    },
    {
      text: "No fluff, no flashy cars, just pure market mechanics. I went from losing money consistently to being profitable for 3 months straight.",
      initials: "KP",
      name: "Karan P.",
      role: "Business Owner"
    }
  ];

  // Counter component for animated stats
  const Counter = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!statsVisible) return;

      let startTime = null;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeOut = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);
        
        setCount(Math.floor(end * easeOut));

        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end); // Ensure we end exactly on the target
        }
      };

      requestAnimationFrame(animate);
    }, [statsVisible, end, duration]);

    return <span>{count}{suffix}</span>;
  };

  return (
    <section className="section bg-secondary">
      <div className="container text-center fade-up">
        <h2 className="test-title">From our students.</h2>

        <div className="test-grid">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="test-card fade-up"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="quote-mark">&ldquo;</div>
              <p className="test-text">{review.text}</p>
              
              <div className="test-divider"></div>
              
              <div className="test-author">
                <div className="test-avatar">{review.initials}</div>
                <div className="test-author-info">
                  <div className="test-name">{review.name}</div>
                  <div className="test-role">{review.role}</div>
                </div>
                <div className="test-stars">★★★★★</div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-container fade-up" ref={statsRef}>
          <div className="stat-item">
            <div className="stat-number">
              {statsVisible ? <Counter end={2000} suffix="+" /> : "0+"}
            </div>
            <div className="stat-label">Students</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">
              4.8 / 5
            </div>
            <div className="stat-label">Rating</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">
              {statsVisible ? <Counter end={6} /> : "0"}
            </div>
            <div className="stat-label">Phases</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
