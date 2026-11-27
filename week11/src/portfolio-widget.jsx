import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import PortfolioProjects from './components/PortfolioProjects.jsx';

function ProjectBrief() {
  const [brief, setBrief] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-project-brief');
      return saved
        ? JSON.parse(saved)
        : { name: '', email: '', projectType: '', details: '' };
    } catch {
      return { name: '', email: '', projectType: '', details: '' };
    }
  });
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('portfolio-project-brief', JSON.stringify(brief));
  }, [brief]);

  function updateBrief(event) {
    const { name, value } = event.target;
    setBrief((current) => ({ ...current, [name]: value }));
  }

  function submitBrief(event) {
    event.preventDefault();
    if (!brief.name.trim() || !brief.email.includes('@') || !brief.details.trim()) {
      setMessage('Please add your name, a valid email, and a few project details.');
      return;
    }
    setMessage(`Thanks, ${brief.name.trim()}. Your brief is saved and ready to send.`);
  }

  const emailSubject = encodeURIComponent(`Project inquiry: ${brief.projectType || 'New project'}`);
  const emailBody = encodeURIComponent(
    `Name: ${brief.name}\nEmail: ${brief.email}\nProject type: ${brief.projectType || 'Not selected'}\n\n${brief.details}`,
  );

  return (
    <form className="project-brief-form" onSubmit={submitBrief} noValidate>
      <div className="brief-fields">
        <label>
          <span>Name</span>
          <input name="name" value={brief.name} onChange={updateBrief} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" value={brief.email} onChange={updateBrief} placeholder="you@example.com" />
        </label>
        <label>
          <span>Project type</span>
          <select name="projectType" value={brief.projectType} onChange={updateBrief}>
            <option value="">Choose one</option>
            <option>Full-stack web app</option>
            <option>AI product</option>
            <option>Frontend interface</option>
            <option>Something else</option>
          </select>
        </label>
      </div>
      <label className="brief-details">
        <span>What would you like to build?</span>
        <textarea
          name="details"
          value={brief.details}
          onChange={updateBrief}
          rows="3"
          placeholder="A short overview, timeline, or goal..."
        />
      </label>
      <div className="brief-actions">
        <button className="brief-save-button" type="submit">Save brief</button>
        {brief.name && brief.email && brief.details && (
          <a
            className="brief-email-link"
            href={`mailto:xushnudbek76n@gmail.com?subject=${emailSubject}&body=${emailBody}`}
          >
            Open email <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
      {message && <p className="brief-message" role="status">{message}</p>}
    </form>
  );
}

const projectsRoot = document.getElementById('portfolio-projects-root');
if (projectsRoot) createRoot(projectsRoot).render(<PortfolioProjects />);

const contactRoot = document.getElementById('portfolio-contact-root');
if (contactRoot) createRoot(contactRoot).render(<ProjectBrief />);
