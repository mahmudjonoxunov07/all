import { useEffect, useState } from 'react';
import '../../portfolio.css';
import './style.css';
import './week11_2.css';

const initialTasks = [
  { id: 1, title: 'Review component props' },
  { id: 2, title: 'Practice state updates' },
  { id: 3, title: 'Build something small' },
];

const initialCompletedTasks = [
  { id: 1, title: 'Read the React lesson', completed: true },
  { id: 2, title: 'Try the counter', completed: false },
  { id: 3, title: 'Update the task list', completed: false },
];

function CodeDisclosure({ children }) {
  return (
    <details className="code-disclosure">
      <summary>View React example</summary>
      <pre><code>{children}</code></pre>
    </details>
  );
}

function Exercise({ number, id, title, description, code, children }) {
  return (
    <article className="exercise-card" id={id}>
      <div className="exercise-heading">
        <span className="exercise-number">{number}</span>
        <div>
          <p className="exercise-origin">Week 11_2 · React state &amp; events</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="exercise-description">{description}</p>
      <div className="exercise-demo state-exercise-demo">{children}</div>
      <CodeDisclosure>{code}</CodeDisclosure>
    </article>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [tasks, setTasks] = useState(initialTasks);
  const [draft, setDraft] = useState('');
  const [nextTaskId, setNextTaskId] = useState(4);
  const [showDetails, setShowDetails] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(initialCompletedTasks);
  const [taskFilter, setTaskFilter] = useState('all');
  const [profile, setProfile] = useState({ name: '', email: '' });
  const [profileMessage, setProfileMessage] = useState('');
  const [note, setNote] = useState(() => localStorage.getItem('week11-note') || '');

  useEffect(() => {
    localStorage.setItem('week11-note', note);
  }, [note]);

  function addTask(event) {
    event.preventDefault();
    const title = draft.trim();

    if (!title) return;

    setTasks((currentTasks) => [...currentTasks, { id: nextTaskId, title }]);
    setNextTaskId((currentId) => currentId + 1);
    setDraft('');
  }

  function removeTask(taskId) {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== taskId));
  }

  function toggleCompletedTask(taskId) {
    setCompletedTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function clearCompletedTasks() {
    setCompletedTasks((currentTasks) =>
      currentTasks.filter((task) => !task.completed)
    );
  }

  const visibleCompletedTasks = completedTasks.filter((task) => {
    if (taskFilter === 'active') return !task.completed;
    if (taskFilter === 'done') return task.completed;
    return true;
  });

  function updateProfile(event) {
    const { name: fieldName, value } = event.target;
    setProfile((currentProfile) => ({ ...currentProfile, [fieldName]: value }));
  }

  function saveProfile(event) {
    event.preventDefault();
    const cleanName = profile.name.trim();
    const cleanEmail = profile.email.trim();

    if (!cleanName || !cleanEmail) {
      setProfileMessage('Please enter both name and email.');
      return;
    }

    if (!cleanEmail.includes('@')) {
      setProfileMessage('Please enter an email containing @.');
      return;
    }

    setProfileMessage(`Saved ${cleanName}'s profile.`);
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="../../index.html" aria-label="Coursework home">XH<span>.</span></a>
        <nav className="site-nav" aria-label="Week 11_2 navigation">
          <a href="#practice">Practice</a>
          <a href="./index.html">Week 11_1</a>
        </nav>
        <a className="header-link" href="../../portfolio.html">Portfolio <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WEEK 11_2 <span className="eyebrow-divider">/</span> REACT STATE &amp; EVENTS</p>
              <h2 id="practice-title">Make the interface respond.</h2>
            </div>
            <p className="section-note">Practice updating the screen from user input with React state and event handlers.</p>
          </div>

          <div className="exercise-grid">
            <Exercise
              number="E1"
              id="counter"
              title="Update state with a counter"
              description="Use a functional state update so each click uses the latest count."
              code={`const [count, setCount] = useState(0);

<button onClick={() => setCount((value) => value + 1)}>
  Add one
</button>`}
            >
              <div className="state-counter">
                <output className="state-counter-value" aria-live="polite">{count}</output>
                <div className="state-actions">
                  <button className="state-button" type="button" onClick={() => setCount((value) => value - 1)}>
                    Decrease
                  </button>
                  <button className="state-button state-button-primary" type="button" onClick={() => setCount((value) => value + 1)}>
                    Add one
                  </button>
                  <button className="state-text-button" type="button" onClick={() => setCount(0)}>
                    Reset
                  </button>
                </div>
              </div>
            </Exercise>

            <Exercise
              number="E2"
              id="controlled-input"
              title="Keep an input in sync"
              description="A controlled input stores its value in state and updates a preview as you type."
              code={`const [name, setName] = useState('');

<input
  value={name}
  onChange={(event) => setName(event.target.value)}
/>
<p>Hello, {name || 'there'}!</p>`}
            >
              <div className="state-form">
                <label className="state-label" htmlFor="preview-name">Your name</label>
                <input
                  className="state-input"
                  id="preview-name"
                  type="text"
                  maxLength={40}
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Type a name"
                />
                <p className="state-preview" aria-live="polite">
                  Hello, <strong>{name.trim() || 'there'}</strong>!
                </p>
              </div>
            </Exercise>

            <Exercise
              number="E3"
              id="task-list"
              title="Add and remove list items"
              description="Update arrays immutably, give each item a stable ID, and handle form submission."
              code={`function addTask(event) {
  event.preventDefault();
  const title = draft.trim();
  if (!title) return;

  setTasks((current) => [...current, { id: nextId, title }]);
  setDraft('');
}

setTasks((current) => current.filter((task) => task.id !== taskId));`}
            >
              <div className="state-task-demo">
                <form className="state-task-form" onSubmit={addTask}>
                  <label className="visually-hidden" htmlFor="new-task">New task</label>
                  <input
                    className="state-input"
                    id="new-task"
                    type="text"
                    value={draft}
                    onChange={(event) => setDraft(event.target.value)}
                    placeholder="Add a practice task"
                  />
                  <button className="state-button state-button-primary" type="submit" disabled={!draft.trim()}>
                    Add
                  </button>
                </form>
                {tasks.length > 0 ? (
                  <ul className="state-task-list">
                    {tasks.map((task) => (
                      <li key={task.id}>
                        <span>{task.title}</span>
                        <button
                          className="state-remove-button"
                          type="button"
                          onClick={() => removeTask(task.id)}
                          aria-label={`Remove ${task.title}`}
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="state-empty">No tasks yet. Add one to get started.</p>
                )}
              </div>
            </Exercise>

            <Exercise
              number="E4"
              id="conditional-content"
              title="Show and hide content"
              description="Use a boolean state value to reveal optional content and expose the control state accessibly."
              code={`const [isOpen, setIsOpen] = useState(false);

<button
  aria-expanded={isOpen}
  onClick={() => setIsOpen((open) => !open)}
>
  {isOpen ? 'Hide details' : 'Show details'}
</button>
{isOpen && <p>More information goes here.</p>}`}
            >
              <div className="state-toggle-demo">
                <button
                  className="state-button state-button-primary"
                  type="button"
                  aria-expanded={showDetails}
                  aria-controls="extra-details"
                  onClick={() => setShowDetails((current) => !current)}
                >
                  {showDetails ? 'Hide details' : 'Show details'}
                </button>
                <div id="extra-details" hidden={!showDetails}>
                  {showDetails && (
                    <p className="state-details">
                      State lets React update just the part of the interface that changed.
                    </p>
                  )}
                </div>
              </div>
            </Exercise>

            <Exercise
              number="E5"
              id="completed-tasks"
              title="Complete and filter tasks"
              description="Use object updates to mark tasks complete, then filter the list by status."
              code={`function toggleCompletedTask(taskId) {
  setCompletedTasks((currentTasks) =>
    currentTasks.map((task) =>
      task.id === taskId
        ? { ...task, completed: !task.completed }
        : task
    )
  );
}`}
            >
              <div className="completed-task-demo">
                <div className="task-filter-buttons" aria-label="Filter tasks">
                  {[
                    ['all', 'All'],
                    ['active', 'Active'],
                    ['done', 'Done'],
                  ].map(([value, label]) => (
                    <button
                      className="task-filter-button"
                      type="button"
                      key={value}
                      aria-pressed={taskFilter === value}
                      onClick={() => setTaskFilter(value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <ul className="completed-task-list">
                  {visibleCompletedTasks.map((task) => (
                    <li key={task.id}>
                      <label>
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleCompletedTask(task.id)}
                        />
                        <span className={task.completed ? 'task-is-complete' : ''}>
                          {task.title}
                        </span>
                      </label>
                    </li>
                  ))}
                </ul>
                {visibleCompletedTasks.length === 0 && (
                  <p className="state-empty">No tasks match this filter.</p>
                )}
                <button
                  className="state-text-button"
                  type="button"
                  onClick={clearCompletedTasks}
                  disabled={!completedTasks.some((task) => task.completed)}
                >
                  Clear completed
                </button>
              </div>
            </Exercise>

            <Exercise
              number="E6"
              id="profile-form"
              title="Validate a controlled form"
              description="Keep two fields in one object and show a simple message after submission."
              code={`const [profile, setProfile] = useState({
  name: '',
  email: '',
});

function updateProfile(event) {
  setProfile((current) => ({
    ...current,
    [event.target.name]: event.target.value,
  }));
}`}
            >
              <form className="profile-form" onSubmit={saveProfile} noValidate>
                <label className="state-label" htmlFor="profile-name">Name</label>
                <input
                  className="state-input"
                  id="profile-name"
                  name="name"
                  value={profile.name}
                  onChange={updateProfile}
                  placeholder="Your name"
                />
                <label className="state-label" htmlFor="profile-email">Email</label>
                <input
                  className="state-input"
                  id="profile-email"
                  name="email"
                  type="email"
                  value={profile.email}
                  onChange={updateProfile}
                  placeholder="you@example.com"
                />
                <button className="state-button state-button-primary" type="submit">
                  Save profile
                </button>
                {profileMessage && (
                  <p className="profile-message" role="status">{profileMessage}</p>
                )}
              </form>
            </Exercise>

            <Exercise
              number="E7"
              id="saved-note"
              title="Save a note in the browser"
              description="Use an effect to save state with localStorage whenever the note changes."
              code={`const [note, setNote] = useState(() =>
  localStorage.getItem('week11-note') || ''
);

useEffect(() => {
  localStorage.setItem('week11-note', note);
}, [note]);`}
            >
              <div className="saved-note-demo">
                <label className="state-label" htmlFor="saved-note-input">
                  Quick note
                </label>
                <textarea
                  className="state-textarea"
                  id="saved-note-input"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="Type something..."
                  rows="4"
                />
                <div className="saved-note-actions">
                  <p className="saved-note-status" aria-live="polite">
                    {note ? 'Saved in this browser' : 'Nothing saved yet'}
                  </p>
                  <button
                    className="state-text-button"
                    type="button"
                    onClick={() => setNote('')}
                    disabled={!note}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </Exercise>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-home" href="../../index.html">Coursework home <span aria-hidden="true">↑</span></a>
        <a href="./index.html">Week 11_1 <span aria-hidden="true">↗</span></a>
        <span>WEEK 11_2 <span aria-hidden="true">·</span> REACT STATE &amp; EVENTS</span>
      </footer>
    </div>
  );
}

export default App;
