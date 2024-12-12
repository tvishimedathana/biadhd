import { useCallback, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged,signOut } from "firebase/auth"; // Import Firebase auth listener
import { auth } from "./firebase"; // Import your Firebase auth configuration
import { useSpring, animated } from "@react-spring/web";
import "./AllAssessments.css";

const AllAssessments = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(""); // Message to show confirmation

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
      }, 100); // Adjust speed of typing here (100ms per character)
  
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
              className={`nav-item ${window.location.pathname === "/about-us" ? "nav-item-active" : ""}`}
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

          {/* Conditionally render Login/Sign-Up or Log Out button */}
          <div className="contact-container">
            {isLoggedIn ? (
              <div className="nav-item" onClick={handleLogout}>
                Log Out
              </div>
            ) : (
              <div
                className={`nav-item ${
                  window.location.pathname === "/login" ? "nav-item-active" : ""
                }`}
                onClick={onButtonContainerClick5}
              >
                Login or Sign Up
              </div>
            )}
          </div>
        </div>

        {/* Main Content Section */}
        <animated.div style={fadeProps} className="content-wrapper">
          <div className="about-title">
            <h1>Take our Assessments!</h1>
            <p className="tagline">
              Click on our original, interactive, and dynamic assessments!
            </p>
          </div>

          <div className="content-sections">
            {/* Section Card with Berry Blitz */}
            <div className="section-wrapper">
              <div className="section-card berry-blitz-card">
                <div className="image-container">
                  <img
                    className="berry-blitz-button"
                    alt="Berry Blitz"
                    src="/image-1@2x.png"
                    onClick={() =>
                      newTab("http://berryblitz.neurohealthalliance.org")
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <p
                      className="overlay-text"
                      onClick={() =>
                        newTab("http://berryblitz.neurohealthalliance.org")
                      }
                    >
                      Can you collect all of the fruits while avoiding the shurikens? This
                      energetic, intense game will test your reflexes and ability to process
                      information quickly as well as demanding your constant attention, as
                      the fruits you will be collecting will keep changing! Collecting the
                      right fruits without being hit by the shurikens will grant you points.
                      If you collect the wrong fruits, you will gain no points. If you get
                      hit by the shurikens, the game round will end. Collect points to
                      answer assessment questions.
                    </p>
                  </div>
                </div>
              </div>
              <h2 className="game-title">Berry Blitz</h2>
            </div>

            {/* Section Card with Magic Castle */}
            <div className="section-wrapper">
              <div className="section-card magic-castle-card">
                <div className="image-container">
                  <img
                    className="berry-blitz-button"
                    alt="Magic Castle"
                    src="/magic-castle@2x.png"
                    onClick={() =>
                      newTab("http://127.0.0.1:5500/src/pages/BerryBlitz/index.html")
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <p className="overlay-text">Game Coming Soon!</p>
                  </div>
                </div>
              </div>
              <h2 className="game-title">Magic Castle</h2>
            </div>

            {/* Section Card for Another Game */}
            <div className="section-wrapper">
              <div className="section-card">
                <div className="image-container">
                  <img
                    className="berry-blitz-button"
                    alt="Mystery Adventure"
                    src="/screenshot-20240825-213042-1@2x.png"
                    onClick={() =>
                      newTab("http://127.0.0.1:5500/src/pages/BerryBlitz/index.html")
                    }
                    style={{ cursor: "pointer" }}
                  />
                  <div className="overlay">
                    <p className="overlay-text">Game Coming Soon!</p>
                  </div>
                </div>
              </div>
              <h2 className="game-title">Kitchen Quest</h2>
            </div>
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

export default AllAssessments;
