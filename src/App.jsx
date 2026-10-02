import React, { useEffect, useState } from "react";
import Onboarding from "./Onboarding";
import "./App.css";

const subjects = {
  Mathematics: [
    "Algebra",
    "Geometry",
    "Trigonometry",
    "Statistics",
  ],
  English: [
    "Grammar",
    "Vocabulary",
    "Reading",
    "Writing",
  ],
  "Data Science": [
    "Data Basics",
    "Data Visualization",
    "Statistics",
    "Machine Learning",
  ],
  "Computer Science": [
    "Programming",
    "Data Structures",
    "Algorithms",
    "Web Development",
  ],
};

const contentLibrary = {
  Algebra: {
    title: "Algebra",
    description:
      "Understand variables, expressions and equations through simple examples.",
    modes: {
      video: "Video lesson coming from your learning-content database.",
      audio: "Audio explanation for learners who prefer listening.",
      keywords:
        "Variable • Expression • Equation • Constant • Coefficient",
      exercise: "Solve simple equations using step-by-step practice.",
    },
  },

  Grammar: {
    title: "English Grammar",
    description:
      "Learn grammar using short explanations, examples and practice.",
    modes: {
      video: "Animated grammar lesson.",
      audio: "Listen to a simple grammar explanation.",
      keywords: "Noun • Verb • Adjective • Tense • Sentence",
      exercise: "Choose the correct grammatical form.",
    },
  },

  Programming: {
    title: "Programming",
    description:
      "Build programming concepts using visual examples and small challenges.",
    modes: {
      video: "Visual programming lesson.",
      audio: "Listen to the concept explained step-by-step.",
      keywords: "Logic • Variable • Function • Loop • Condition",
      exercise: "Complete a small programming challenge.",
    },
  },
};

function App() {
  const [screen, setScreen] = useState("splash");
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [learningMode, setLearningMode] = useState("video");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  useEffect(() => {
    const savedProfile = localStorage.getItem("neurolearnProfile");

    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
      setLoggedIn(true);
    }

    const timer = setTimeout(() => {
      setScreen("home");
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const finishOnboarding = (data) => {
    localStorage.setItem("neurolearnProfile", JSON.stringify(data));

    setProfile(data);
    setLoggedIn(true);
    setScreen("dashboard");
  };

  const handleStartLearning = () => {
    if (loggedIn) {
      setScreen("dashboard");
    } else {
      setScreen("onboarding");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("neurolearnProfile");

    setProfile(null);
    setLoggedIn(false);
    setScreen("home");
  };

  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    setSelectedTopic(null);
    setScreen("topics");
  };

  const selectTopic = (topic) => {
    setSelectedTopic(topic);
    setScreen("content");
  };

  const goHome = () => {
    setScreen("home");
  };

  /* ---------------- SPLASH SCREEN ---------------- */

  if (screen === "splash") {
    return (
      <div className="splash-screen">
        <div className="splash-drop">
          <span>N</span>
          <span>L</span>
        </div>

        <div className="splash-brand">NEUROLEARN</div>

        <p className="splash-tagline">
          Learn your way. Grow at your pace.
        </p>
      </div>
    );
  }

  /* ---------------- ONBOARDING ---------------- */

  if (screen === "onboarding") {
    return (
      <Onboarding
        onComplete={finishOnboarding}
        onBack={goHome}
      />
    );
  }

  /* ---------------- HOME ---------------- */

  if (screen === "home") {
    return (
      <div className="app-shell public-home">

        <nav className="navbar">
          <div
            className="nav-logo"
            onClick={goHome}
          >
            NEURO<span>LEARN</span>
          </div>

          <div className="nav-links">
            <button onClick={goHome}>Home</button>
            <button
              onClick={() =>
                document
                  .getElementById("how-it-works")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              How it works
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("learning-lab")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learning Lab
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </button>
          </div>

          <button
            className="nav-cta"
            onClick={handleStartLearning}
          >
            {loggedIn ? "Start Learning" : "Get Started"}
          </button>
        </nav>

        <main>

          {/* HERO */}

          <section className="hero-section">

            <div className="hero-content">

              <div className="hero-pill">
                ✦ AI-powered personalized learning
              </div>

              <h1>
                Every mind learns
                <span> differently.</span>
              </h1>

              <p>
                NeuroLearn creates a flexible learning experience
                that adapts to how you understand, explore and
                remember information.
              </p>

              <div className="hero-actions">
                <button
                  className="primary-button"
                  onClick={handleStartLearning}
                >
                  {loggedIn
                    ? "Continue Learning"
                    : "Start Your Journey"}
                  <span>→</span>
                </button>

                <button
                  className="secondary-button"
                  onClick={() =>
                    document
                      .getElementById("how-it-works")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Explore NeuroLearn
                </button>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>∞</strong>
                  <span>Learning paths</span>
                </div>

                <div>
                  <strong>4+</strong>
                  <span>Learning modes</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Personalization</span>
                </div>
              </div>

            </div>

            {/* 3D ATOM */}

            <div className="atom-area">

              <div className="atom-glow" />

              <div className="atom">

                <div className="orbit orbit-one">
                  <div className="electron">✦</div>
                </div>

                <div className="orbit orbit-two">
                  <div className="electron">◆</div>
                </div>

                <div className="orbit orbit-three">
                  <div className="electron">●</div>
                </div>

                <div className="orbit orbit-four">
                  <div className="electron">✦</div>
                </div>

                <div className="atom-core">
                  <span>NL</span>
                </div>

              </div>

              <div className="floating-card card-one">
                🎧 Audio
              </div>

              <div className="floating-card card-two">
                🎮 Interactive
              </div>

              <div className="floating-card card-three">
                🎥 Video
              </div>

              <div className="floating-card card-four">
                ✎ Visual
              </div>

            </div>

          </section>

          {/* HOW IT WORKS */}

          <section
            className="section"
            id="how-it-works"
          >
            <div className="section-heading">
              <span>HOW IT WORKS</span>

              <h2>
                One platform.
                <br />
                <em>Your way of learning.</em>
              </h2>

              <p>
                NeuroLearn adapts the learning experience instead
                of expecting every learner to learn in exactly
                the same way.
              </p>
            </div>

            <div className="steps-grid">

              <div className="info-card">
                <div className="card-number">01</div>
                <div className="big-icon">👤</div>
                <h3>Tell us about you</h3>
                <p>
                  Build your learning profile with simple,
                  comfortable questions.
                </p>
              </div>

              <div className="info-card">
                <div className="card-number">02</div>
                <div className="big-icon">🧠</div>
                <h3>Discover your style</h3>
                <p>
                  NeuroLearn identifies learning preferences
                  without putting labels on the learner.
                </p>
              </div>

              <div className="info-card">
                <div className="card-number">03</div>
                <div className="big-icon">⚡</div>
                <h3>Learn your way</h3>
                <p>
                  Choose videos, audio, keywords, visuals,
                  exercises and interactive activities.
                </p>
              </div>

            </div>
          </section>

          {/* LEARNING LAB */}

          <section
            className="learning-lab"
            id="learning-lab"
          >

            <div className="lab-text">
              <span>THE LEARNING LAB</span>

              <h2>
                One topic.
                <br />
                <em>Many ways to understand it.</em>
              </h2>

              <p>
                A concept doesn't have to be explained only one
                way. NeuroLearn can transform the same topic into
                different learning experiences.
              </p>

              <div className="mode-list">
                <div>🎥 <span>Visual lessons</span></div>
                <div>🎧 <span>Audio explanations</span></div>
                <div>🔑 <span>Keyword summaries</span></div>
                <div>🎮 <span>Interactive practice</span></div>
              </div>
            </div>

            <div className="lab-visual">

              <div className="lab-orbit">
                <div className="lab-center">
                  <span>LEARN</span>
                </div>

                <div className="lab-node node-a">🎥</div>
                <div className="lab-node node-b">🎧</div>
                <div className="lab-node node-c">🔑</div>
                <div className="lab-node node-d">🎮</div>
              </div>

            </div>

          </section>

          {/* ABOUT */}

          <section
            className="about-section"
            id="about"
          >
            <div>
              <span>ABOUT NEUROLEARN</span>

              <h2>
                Learning shouldn't
                <br />
                feel one-size-fits all.
              </h2><h1></h1>
            </div>

            <p>
              NeuroLearn is designed around a simple idea:
              different learners may understand the same concept
              through completely different experiences.
              Our goal is to create a more flexible,
              accessible and engaging learning environment.
            </p>
          </section>

        </main>

        <footer>
          <div className="nav-logo">
            NEURO<span>LEARN</span>
          </div>

          <p>
            Learn differently. Learn confidently.
          </p>

          <span>© 2026 NeuroLearn</span>
        </footer>

      </div>
    );
  }

  /* ---------------- DASHBOARD ---------------- */

  if (screen === "dashboard") {
    return (
      <div className="dashboard">

        <aside className="sidebar">

          <div className="sidebar-logo">
            NEURO<span>LEARN</span>
          </div>

          <button
            className="side-link active"
            onClick={() => setScreen("dashboard")}
          >
            ◈ <span>Dashboard</span>
          </button>

          <button
            className="side-link"
            onClick={() => setScreen("subjects")}
          >
            ◉ <span>Subjects</span>
          </button>

          <button className="side-link">
            ✓ <span>Assessments</span>
          </button>

          <button className="side-link">
            ◌ <span>Progress</span>
          </button>

          <button className="side-link">
            ⚙ <span>Settings</span>
          </button>

          <div className="sidebar-bottom">
            <button
              className="emergency-button"
              onClick={() =>
                alert(
                  "Support options will be connected to the backend."
                )
              }
            >
              ⚠ Support
            </button>
          </div>

        </aside>

        <main className="dashboard-main">

          <header className="dashboard-header">

            <div>
              <span className="eyebrow">
                YOUR LEARNING SPACE
              </span>

              <h1>
                Welcome back,
                <span>
                  {" "}
                  {profile?.name || "Learner"}!
                </span>
              </h1>

              <p>
                Ready to continue learning your way?
              </p>
            </div>

            <div className="profile-menu">
              <div className="avatar">
                {(profile?.name || "L")
                  .charAt(0)
                  .toUpperCase()}
              </div>

              <div>
                <strong>
                  {profile?.name || "Learner"}
                </strong>

                <small>
                  {profile?.grade || "Learner"}
                </small>
              </div>

              <button onClick={handleLogout}>
                ↪
              </button>
            </div>

          </header>

          <section className="dashboard-hero">

            <div>
              <span>YOUR LEARNING DNA</span>

              <h2>
                Learn in the way
                <br />
                that works for you.
              </h2>

              <p>
                Your learning space is ready. Explore subjects,
                choose a topic and let NeuroLearn help you
                understand it.
              </p>

              <button
                className="primary-button"
                onClick={() => setScreen("subjects")}
              >
                Explore Subjects →
              </button>
            </div>

            <div className="dashboard-orb">
              <div className="mini-orbit mini-one" />
              <div className="mini-orbit mini-two" />
              <div className="mini-core">NL</div>
            </div>

          </section>

          <section className="dashboard-grid">

            <div
              className="dashboard-card clickable"
              onClick={() => setScreen("subjects")}
            >
              <span>01</span>
              <h3>Subjects</h3>
              <p>
                Explore subjects and choose what you want
                to learn.
              </p>
              <b>Open →</b>
            </div>

            <div className="dashboard-card">
              <span>02</span>
              <h3>Assessments</h3>
              <p>
                Check your understanding through adaptive
                activities.
              </p>
              <b>Coming soon</b>
            </div>

            <div className="dashboard-card">
              <span>03</span>
              <h3>Progress</h3>
              <p>
                Track your learning journey and achievements.
              </p>
              <b>Coming soon</b>
            </div>

          </section>

        </main>

        {/* CHATBOT */}

        <button
          className="chat-button"
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? "×" : "✦"}
        </button>

        {chatOpen && (
          <div className="chatbot">

            <div className="chat-header">
              <div className="chat-avatar">NL</div>
              <div>
                <strong>NeuroBot</strong>
                <small>Learning assistant</small>
              </div>
            </div>

            <div className="chat-body">
              <div className="bot-message">
                Hi! 👋 I'm NeuroBot.
                <br />
                What would you like help with?
              </div>

              {chatMessage && (
                <div className="user-message">
                  {chatMessage}
                </div>
              )}
            </div>

            <div className="chat-input">
              <input
                value={chatMessage}
                onChange={(e) =>
                  setChatMessage(e.target.value)
                }
                placeholder="Ask something..."
              />

              <button
                onClick={() => setChatMessage("")}
              >
                ↑
              </button>
            </div>

          </div>
        )}

      </div>
    );
  }

  /* ---------------- SUBJECTS ---------------- */

  if (screen === "subjects") {
    return (
      <DashboardWrapper
        profile={profile}
        onDashboard={() => setScreen("dashboard")}
        onLogout={handleLogout}
      >
        <div className="content-page">

          <span className="eyebrow">
            YOUR SUBJECTS
          </span>

          <h1>
            What do you want to
            <span> explore?</span>
          </h1>

          <p className="page-description">
            Choose any subject. NeuroLearn does not assume
            what you are good or weak at.
          </p>

          <div className="subject-grid">

            {Object.keys(subjects).map((subject, index) => (
              <button
                key={subject}
                className="subject-card"
                onClick={() => selectSubject(subject)}
              >
                <span>0{index + 1}</span>

                <div className="subject-icon">
                  {index === 0
                    ? "∑"
                    : index === 1
                    ? "Aa"
                    : index === 2
                    ? "◈"
                    : "</>"}
                </div>

                <h3>{subject}</h3>

                <p>
                  {subjects[subject].length} learning topics
                </p>

                <b>Explore →</b>
              </button>
            ))}

          </div>

        </div>
      </DashboardWrapper>
    );
  }

  /* ---------------- TOPICS ---------------- */

  if (screen === "topics") {
    return (
      <DashboardWrapper
        profile={profile}
        onDashboard={() => setScreen("dashboard")}
        onLogout={handleLogout}
      >
        <div className="content-page">

          <button
            className="back-button"
            onClick={() => setScreen("subjects")}
          >
            ← Subjects
          </button>

          <span className="eyebrow">
            {selectedSubject}
          </span>

          <h1>
            Choose a <span>topic.</span>
          </h1>

          <p className="page-description">
            Pick anything you want to understand.
            There is no "weak subject" label here.
          </p>

          <div className="topic-list">

            {subjects[selectedSubject]?.map(
              (topic, index) => (
                <button
                  key={topic}
                  className="topic-card"
                  onClick={() => selectTopic(topic)}
                >
                  <div className="topic-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div>
                    <h3>{topic}</h3>

                    <p>
                      Explore this topic your way
                    </p>
                  </div>

                  <span>→</span>
                </button>
              )
            )}

          </div>

        </div>
      </DashboardWrapper>
    );
  }

  /* ---------------- LEARNING CONTENT ---------------- */

  if (screen === "content") {

    const content =
      contentLibrary[selectedTopic] ||
      {
        title: selectedTopic,
        description:
          "Your personalized learning content will appear here.",
        modes: {
          video: "Video lesson",
          audio: "Audio explanation",
          keywords: "Key concepts",
          exercise: "Interactive exercise",
        },
      };

    return (
      <DashboardWrapper
        profile={profile}
        onDashboard={() => setScreen("dashboard")}
        onLogout={handleLogout}
      >

        <div className="content-page">

          <button
            className="back-button"
            onClick={() => setScreen("topics")}
          >
            ← {selectedSubject}
          </button>

          <span className="eyebrow">
            LEARNING CONTENT
          </span>

          <h1>
            {content.title}
          </h1>

          <p className="page-description">
            {content.description}
          </p>

          <div className="learning-mode-tabs">

            {[
              ["video", "🎥", "Video"],
              ["audio", "🎧", "Audio"],
              ["keywords", "🔑", "Keywords"],
              ["exercise", "🎮", "Practice"],
            ].map(([key, icon, label]) => (
              <button
                key={key}
                className={
                  learningMode === key
                    ? "mode-tab active"
                    : "mode-tab"
                }
                onClick={() => setLearningMode(key)}
              >
                {icon} {label}
              </button>
            ))}

          </div>

          <div className="lesson-card">

            <div className="lesson-visual">

              {learningMode === "video" && (
                <div className="video-placeholder">
                  <div className="play-circle">▶</div>
                  <span>VIDEO LESSON</span>
                </div>
              )}

              {learningMode === "audio" && (
                <div className="audio-placeholder">
                  <div className="audio-wave">
                    〰〰〰〰〰
                  </div>
                  <span>Audio explanation</span>
                </div>
              )}

              {learningMode === "keywords" && (
                <div className="keyword-visual">
                  {content.modes.keywords
                    .split("•")
                    .map((word) => (
                      <span key={word}>
                        {word.trim()}
                      </span>
                    ))}
                </div>
              )}

              {learningMode === "exercise" && (
                <div className="exercise-visual">
                  <div>🧠</div>
                  <strong>Ready to practice?</strong>
                  <p>
                    Interactive exercises will appear here.
                  </p>
                </div>
              )}

            </div>

            <div className="lesson-info">

              <span className="lesson-label">
                {learningMode.toUpperCase()}
              </span>

              <h2>
                Learn {content.title}
              </h2>

              <p>
                {content.modes[learningMode]}
              </p>

              <div className="lesson-actions">
                <button className="primary-button">
                  Continue →
                </button>

                <button
                  className="secondary-button"
                  onClick={() => setScreen("topics")}
                >
                  Change topic
                </button>
              </div>

            </div>

          </div>

        </div>

      </DashboardWrapper>
    );
  }

  return null;
}

/* ---------------- DASHBOARD WRAPPER ---------------- */

function DashboardWrapper({
  children,
  profile,
  onDashboard,
  onLogout,
}) {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div
          className="sidebar-logo"
          onClick={onDashboard}
        >
          NEURO<span>LEARN</span>
        </div>

        <button
          className="side-link"
          onClick={onDashboard}
        >
          ◈ <span>Dashboard</span>
        </button>

        <button className="side-link">
          ◉ <span>Subjects</span>
        </button>

        <button className="side-link">
          ✓ <span>Assessments</span>
        </button>

        <button className="side-link">
          ◌ <span>Progress</span>
        </button>

        <button className="side-link">
          ⚙ <span>Settings</span>
        </button>

        <div className="sidebar-bottom">
          <button className="emergency-button">
            ⚠ Support
          </button>
        </div>

      </aside>

      <main className="dashboard-main">

        <header className="dashboard-topbar">

          <button
            className="mobile-back"
            onClick={onDashboard}
          >
            ←
          </button>

          <div className="topbar-logo">
            NEURO<span>LEARN</span>
          </div>

          <div className="profile-menu">

            <div className="avatar">
              {(profile?.name || "L")
                .charAt(0)
                .toUpperCase()}
            </div>

            <div>
              <strong>
                {profile?.name || "Learner"}
              </strong>

              <small>
                {profile?.grade || "Learner"}
              </small>
            </div>

            <button onClick={onLogout}>
              ↪
            </button>

          </div>

        </header>

        {children}

      </main>

    </div>
  );
}

export default App;