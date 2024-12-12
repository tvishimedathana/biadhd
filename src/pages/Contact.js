import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onButtonContainerClick1 = useCallback(() => {
    navigate("/all-assessments");
  }, [navigate]);

  const onButtonContainerClick2 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onButtonContainerClick3 = useCallback(() => {
    navigate("/adhd-resources");
  }, [navigate]);

  const onButtonContainerClick4 = useCallback(() => {
    navigate("/your-results");
  }, [navigate]);

  const onButtonContainerClick5 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const newTab = (url) => {
    window.open(url);
  };

  // Animation for fading in content
  const fadeProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 800 },
  });

    // Typing Animation States and Logic
    const [isTyping, setIsTyping] = useState(false);
    const [typedText, setTypedText] = useState("");
    const footerRef = useRef(null);
  
    const fullText =
      "ADDHDR: integrating gamification and dynamic questionnaires to simplify the diagnosis process";
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsTyping(true);
          }
        },
        { threshold: 0.5 } // Detects when 50% of the element is visible
      );
      if (footerRef.current) {
        observer.observe(footerRef.current);
      }
      return () => observer.disconnect();
    }, []);
  
    useEffect(() => {
      if (!isTyping) return;
  
      let index = 0;
      setTypedText(""); // Reset text when animation starts
      const typingInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
        }
      }, 100); // Adjust speed of typing here (100ms per characters)
  
      return () => clearInterval(typingInterval);
    }, [isTyping]);

  return (
    <div className="contact-us-page">
      <div className="home">
      {/* Header Section */}
        <div className="header">
          {/* Container for ADHDR */}
          <div className="adhdr-container">
            <div
              className={`nav-item ${window.location.pathname === "/" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick5}
            >
              ADHDR
            </div>
          </div>

          {/* Container for About */}
          <div className="about-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick2}
            >
              About Us
            </div>
          </div>

          {/* Container for Your Results */}
          <div className="results-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item" : ""}`}
              onClick={onButtonContainerClick4}
            >
              Your Results
            </div>
          </div>

          {/* Container for ADHD Resources */}
          <div className="resources-container">
            <div
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item" : ""}`}
              onClick={onButtonContainerClick3}
            >
              ADHD Resources
            </div>
          </div>

          {/* Container for Contact */}
          <div className="contact-container">
            <div
              className={`nav-item ${window.location.pathname === "/contact" ? "nav-item-active" : ""}`}
              onClick={onButtonContainerClick}
            >
              Contact Us
            </div>
          </div>
        </div>

        {/* Main Content Section */}
        <animated.div style={fadeProps} className="content-wrapper">
          <div className="about-title">
            <h1>Contact Page Being Built!</h1>
            <p className="tagline">
            But If You Have Any Questions Feel Free to Email Us and Let us Know!
            </p>
            <p className="tagline">
            Email Address: adhdaiassist@asdrp.org
            </p>
          </div>
        </animated.div>

        {/* Footer Section */}
        <div className="navigation-footer1" ref={footerRef}>
          <div className="adhdr3">
            <p className="adhdr4">
              {typedText}
              {typedText.length < fullText.length && <span className="ellipsis">...</span>}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;