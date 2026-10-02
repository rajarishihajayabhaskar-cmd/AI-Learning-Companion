import React, { useState } from "react";

function Onboarding({ onComplete, onBack }) {
  const [step, setStep] = useState(1);

  const [form, setForm] = useState({
    name: "",
    age: "",
    grade: "",
    interests: [],
    learningPreference: "",
    pace: "",
    language: "",
  });

  const updateForm = (field, value) => {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  const toggleInterest = (interest) => {
    setForm((previous) => ({
      ...previous,
      interests: previous.interests.includes(interest)
        ? previous.interests.filter(
            (item) => item !== interest
          )
        : [...previous.interests, interest],
    }));
  };

  const nextStep = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      onComplete(form);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      onBack();
    }
  };

  const recommendedMode =
    form.learningPreference === "Visual"
      ? "Visual-first learning"
      : form.learningPreference === "Audio"
      ? "Audio-first learning"
      : form.learningPreference === "Practice"
      ? "Practice-first learning"
      : "Flexible learning";

  return (
    <div className="onboarding-page">

      <div className="onboarding-glow glow-one" />
      <div className="onboarding-glow glow-two" />

      <header className="onboarding-header">

        <button
          className="back-button"
          onClick={previousStep}
        >
          ← Back
        </button>

        <div className="onboarding-logo">
          NEURO<span>LEARN</span>
        </div>

        <span className="step-counter">
          {step} / 5
        </span>

      </header>

      <div className="progress-track">
        <div
          className="progress-fill"
          style={{
            width: `${step * 20}%`,
          }}
        />
      </div>

      <main className="onboarding-container">

        {/* STEP 1 */}

        {step === 1 && (
          <div className="onboarding-card">

            <span className="eyebrow">
              STEP 01 · ABOUT YOU
            </span>

            <h1>
              Let's get to know
              <span> you.</span>
            </h1>

            <p>
              Just a few simple details will help us create
              a learning space that feels comfortable for you.
            </p>

            <div className="form-group">
              <label>Your name</label>

              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  updateForm("name", e.target.value)
                }
                placeholder="Enter your name"
              />
            </div>

            <div className="two-column">

              <div className="form-group">
                <label>Age</label>

                <input
                  type="number"
                  value={form.age}
                  onChange={(e) =>
                    updateForm("age", e.target.value)
                  }
                  placeholder="Your age"
                />
              </div>

              <div className="form-group">
                <label>Grade / Year</label>

                <input
                  type="text"
                  value={form.grade}
                  onChange={(e) =>
                    updateForm("grade", e.target.value)
                  }
                  placeholder="e.g. Grade 10"
                />
              </div>

            </div>

          </div>
        )}

        {/* STEP 2 */}

        {step === 2 && (
          <div className="onboarding-card">

            <span className="eyebrow">
              STEP 02 · INTERESTS
            </span>

            <h1>
              What do you
              <span> enjoy?</span>
            </h1>

            <p>
              Select anything that sounds interesting.
              There are no right or wrong answers.
            </p>

            <div className="choice-grid">

              {[
                ["🎥", "Videos"],
                ["🎧", "Audio"],
                ["🎨", "Visuals"],
                ["🎮", "Games"],
                ["📖", "Stories"],
                ["🧩", "Puzzles"],
                ["✏️", "Writing"],
                ["🔬", "Experiments"],
              ].map(([icon, label]) => (
                <button
                  key={label}
                  className={
                    form.interests.includes(label)
                      ? "choice-card selected"
                      : "choice-card"
                  }
                  onClick={() =>
                    toggleInterest(label)
                  }
                >
                  <span>{icon}</span>
                  {label}
                </button>
              ))}

            </div>

          </div>
        )}

        {/* STEP 3 */}

        {step === 3 && (
          <div className="onboarding-card">

            <span className="eyebrow">
              STEP 03 · YOUR LEARNING STYLE
            </span>

            <h1>
              How would you like
              <span> to learn?</span>
            </h1>

            <p>
              Choose what usually helps you understand
              something faster.
            </p>

            <div className="preference-list">

              {[
                [
                  "Visual",
                  "🎥",
                  "I understand better when I can see it.",
                ],
                [
                  "Audio",
                  "🎧",
                  "I understand better when I hear it.",
                ],
                [
                  "Practice",
                  "🎮",
                  "I understand better by trying it.",
                ],
                [
                  "Mixed",
                  "🧠",
                  "I like a combination of different methods.",
                ],
              ].map(([value, icon, text]) => (
                <button
                  key={value}
                  className={
                    form.learningPreference === value
                      ? "preference-card selected"
                      : "preference-card"
                  }
                  onClick={() =>
                    updateForm(
                      "learningPreference",
                      value
                    )
                  }
                >
                  <span className="preference-icon">
                    {icon}
                  </span>

                  <span>
                    <strong>{value}</strong>
                    <small>{text}</small>
                  </span>

                  <span className="radio">
                    {form.learningPreference === value
                      ? "●"
                      : "○"}
                  </span>

                </button>
              ))}

            </div>

            <div className="privacy-note">
              🔒 Your preferences help personalize your
              experience. They are not labels or diagnoses.
            </div>

          </div>
        )}

        {/* STEP 4 */}

        {step === 4 && (
          <div className="onboarding-card">

            <span className="eyebrow">
              STEP 04 · LANGUAGE
            </span>

            <h1>
              Choose your
              <span> language.</span>
            </h1>

            <p>
              You can change this later from your profile.
            </p>

            <div className="language-grid">

              {[
                ["English", "EN"],
                ["தமிழ்", "தமிழ்"],
                ["हिन्दी", "हि"],
                ["తెలుగు", "తె"],
              ].map(([language, symbol]) => (
                <button
                  key={language}
                  className={
                    form.language === language
                      ? "language-card selected"
                      : "language-card"
                  }
                  onClick={() =>
                    updateForm("language", language)
                  }
                >
                  <strong>{symbol}</strong>
                  <span>{language}</span>
                </button>
              ))}

            </div>

          </div>
        )}

        {/* STEP 5 */}

        {step === 5 && (
          <div className="onboarding-card final-step">

            <div className="success-orb">
              <div>NL</div>
            </div>

            <span className="eyebrow">
              STEP 05 · YOUR JOURNEY
            </span>

            <h1>
              Your learning journey
              <span> starts here.</span>
            </h1>

            <p>
              We've created a starting point based on the
              preferences you shared.
            </p>

            <div className="recommendation-box">

              <span>RECOMMENDED FOR YOU</span>

              <strong>
                {recommendedMode}
              </strong>

              <p>
                NeuroLearn can still switch between video,
                audio, visual summaries and interactive
                practice whenever you need them.
              </p>

            </div>

            <div className="profile-summary">

              <div>
                <span>Name</span>
                <strong>
                  {form.name || "Learner"}
                </strong>
              </div>

              <div>
                <span>Language</span>
                <strong>
                  {form.language || "English"}
                </strong>
              </div>

              <div>
                <span>Preference</span>
                <strong>
                  {form.learningPreference || "Flexible"}
                </strong>
              </div>

            </div>

          </div>
        )}

        <div className="onboarding-actions">

          <button
            className="primary-button"
            onClick={nextStep}
          >
            {step === 5
              ? "Enter NeuroLearn →"
              : "Continue →"}
          </button>

        </div>

      </main>

    </div>
  );
}

export default Onboarding;