import { StrictMode, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './week13_1.css';
import './forms-design.css';

function CodeDisclosure({ children }) {
  return (
    <details className="code-disclosure">
      <summary>View code</summary>
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
          <p className="exercise-origin">WEEK 13_1 · MONDAY</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="exercise-description">{description}</p>
      <div className="exercise-demo">{children}</div>
      <CodeDisclosure>{code}</CodeDisclosure>
    </article>
  );
}

function SearchBar() {
  const [query, setQuery] = useState('');
  return (
    <div className="search-demo">
      <label htmlFor="search-demo">Search</label>
      <div className="search-row">
        <input
          id="search-demo"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
          maxLength={100}
        />
        <button type="button" onClick={() => setQuery('')}>Clear</button>
      </div>
      <p>Searching for: <strong>"{query}"</strong></p>
      <small>{query.length} / 100 characters</small>
    </div>
  );
}

function PreferenceForm() {
  const [country, setCountry] = useState('KR');
  const [bio, setBio] = useState('');
  const [agree, setAgree] = useState(false);
  return (
    <div className="preference-demo">
      <label htmlFor="country">Country
        <select id="country" value={country} onChange={(event) => setCountry(event.target.value)}>
          <option value="KR">South Korea</option>
          <option value="UZ">Uzbekistan</option>
          <option value="US">United States</option>
        </select>
      </label>
      <label htmlFor="bio">Short bio
        <textarea id="bio" value={bio} onChange={(event) => setBio(event.target.value)} rows={3} />
      </label>
      <label className="checkbox-label">
        <input type="checkbox" checked={agree} onChange={(event) => setAgree(event.target.checked)} />
        Receive updates
      </label>
      <p>{country} · {bio || 'No bio'} · {agree ? 'Subscribed' : 'Not subscribed'}</p>
    </div>
  );
}

function RegistrationForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  return (
    <div className="registration-demo">
      <label htmlFor="demo-name">Name
        <input id="demo-name" name="name" value={form.name} onChange={handleChange} />
      </label>
      <label htmlFor="demo-email">Email
        <input id="demo-email" name="email" type="email" value={form.email} onChange={handleChange} />
      </label>
      <label htmlFor="demo-password">Password
        <input id="demo-password" name="password" type="password" value={form.password} onChange={handleChange} />
      </label>
      <label htmlFor="demo-role">Role
        <select id="demo-role" name="role" value={form.role} onChange={handleChange}>
          <option value="student">Student</option>
          <option value="ta">Teaching Assistant</option>
        </select>
      </label>
      <p className="form-summary">Current role: <strong>{form.role}</strong></p>
    </div>
  );
}

function LoginExercise() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Enter a valid email address';
    }
    if (password.length < 8) {
      nextErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }
    setStatus('success');
  }

  return (
    <form className="login-demo" onSubmit={handleSubmit} noValidate>
      <label htmlFor="login-email">Email</label>
      <input
        id="login-email"
        type="email"
        value={email}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? 'login-email-error' : undefined}
        onChange={(event) => setEmail(event.target.value)}
      />
      {errors.email && <small className="field-error" id="login-email-error">{errors.email}</small>}

      <label htmlFor="login-password">Password</label>
      <input
        id="login-password"
        type="password"
        value={password}
        aria-invalid={Boolean(errors.password)}
        aria-describedby={errors.password ? 'login-password-error' : undefined}
        onChange={(event) => setPassword(event.target.value)}
      />
      {errors.password && <small className="field-error" id="login-password-error">{errors.password}</small>}

      <button type="submit">Sign in</button>
      {status === 'success' && <p className="success-message" role="status">Form submitted successfully.</p>}
    </form>
  );
}

function RefExercise() {
  const inputRef = useRef(null);
  const fileRef = useRef(null);
  const [fileName, setFileName] = useState('No file selected');

  function readFile() {
    const file = fileRef.current?.files[0];
    setFileName(file ? `${file.name} · ${Math.ceil(file.size / 1024)} KB` : 'No file selected');
  }

  return (
    <div className="ref-demo">
      <label htmlFor="focus-input">Search field
        <input id="focus-input" ref={inputRef} placeholder="Press the button to focus" />
      </label>
      <button type="button" onClick={() => inputRef.current?.focus()}>Focus input</button>
      <label htmlFor="profile-photo">Profile photo
        <input id="profile-photo" ref={fileRef} type="file" accept="image/*" onChange={readFile} />
      </label>
      <p className="file-name" role="status">{fileName}</p>
    </div>
  );
}

function WizardExercise() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    role: 'Student',
    subscribe: false,
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  const stepValid =
    step === 1
      ? form.name.trim().length >= 2 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
      : step === 2
        ? form.username.length >= 3 &&
          !form.username.includes(' ') &&
          form.password.length >= 8 &&
          form.confirmPassword === form.password
        : true;

  return (
    <div className="wizard-demo">
      <p className="step-progress">Step {step} of 3</p>
      {step === 1 && (
        <div className="wizard-fields">
          <label htmlFor="wizard-name">Name
            <input id="wizard-name" name="name" value={form.name} onChange={handleChange} />
          </label>
          <label htmlFor="wizard-email">Email
            <input id="wizard-email" name="email" type="email" value={form.email} onChange={handleChange} />
          </label>
        </div>
      )}
      {step === 2 && (
        <div className="wizard-fields">
          <label htmlFor="wizard-username">Username
            <input id="wizard-username" name="username" value={form.username} onChange={handleChange} />
          </label>
          <label htmlFor="wizard-password">Password
            <input id="wizard-password" name="password" type="password" value={form.password} onChange={handleChange} />
          </label>
          <label htmlFor="wizard-confirm">Confirm password
            <input id="wizard-confirm" name="confirmPassword" type="password" value={form.confirmPassword} onChange={handleChange} />
          </label>
        </div>
      )}
      {step === 3 && (
        <div className="wizard-review">
          <fieldset>
            <legend>Role</legend>
            {['Student', 'TA', 'Instructor'].map((role) => (
              <label className="radio-label" key={role}>
                <input type="radio" name="role" value={role} checked={form.role === role} onChange={handleChange} />
                {role}
              </label>
            ))}
          </fieldset>
          <label className="checkbox-label">
            <input type="checkbox" name="subscribe" checked={form.subscribe} onChange={handleChange} />
            Subscribe to newsletter
          </label>
          <dl>
            <div><dt>Name</dt><dd>{form.name}</dd></div>
            <div><dt>Email</dt><dd>{form.email}</dd></div>
            <div><dt>Username</dt><dd>{form.username}</dd></div>
          </dl>
        </div>
      )}
      <div className="wizard-actions">
        <button type="button" disabled={step === 1} onClick={() => setStep((value) => value - 1)}>Previous</button>
        {step < 3 ? (
          <button type="button" disabled={!stepValid} onClick={() => setStep((value) => value + 1)}>Next</button>
        ) : (
          <button type="button" onClick={() => console.log(form)}>Submit</button>
        )}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="../../index.html" aria-label="Coursework home">MO<span>.</span></a>
        <nav aria-label="Page navigation">
          <a href="#samples">Samples</a>
          <a href="#exercises">Exercises</a>
          <a href="#quiz">Quiz</a>
        </nav>
        <a className="header-link" href="../../index.html">Coursework <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="lesson-hero" aria-labelledby="lesson-title">
          <p className="eyebrow">WEEK 13_1 <span>/</span> MONDAY</p>
          <h1 id="lesson-title">React Forms<br /><em>&amp; controlled inputs</em></h1>
          <p className="lesson-intro">
            Make forms predictable: React owns the value, the change event updates state,
            and submit logic stays in JavaScript.
          </p>
          <p className="author-credit">MAHMUDJON OKHUNOV <span>·</span> WEB PROGRAMMING</p>
          <div className="render-flow" aria-label="Controlled input flow">
            <span><b>1</b> value</span>
            <i>→</i>
            <span><b>2</b> onChange</span>
            <i>→</i>
            <span><b>3</b> setState</span>
          </div>
        </section>

        <section className="section" id="samples" aria-labelledby="samples-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SAMPLES</p>
              <h2 id="samples-title">React controls the value.</h2>
            </div>
            <p className="section-note">Start with controlled inputs. Reach for refs only when the DOM itself is required.</p>
          </div>
          <div className="sample-grid">
            <article className="sample-card">
              <p className="sample-label">CONTROLLED · TEXT</p>
              <h3>Search bar</h3>
              <SearchBar />
              <CodeDisclosure>{`const [query, setQuery] = useState('');
<input
  value={query}
  onChange={event => setQuery(event.target.value)}
/>`}</CodeDisclosure>
            </article>
            <article className="sample-card">
              <p className="sample-label">SELECT · TEXTAREA · CHECKBOX</p>
              <h3>Preferences</h3>
              <PreferenceForm />
              <CodeDisclosure>{`<select value={country} onChange={handleChange}>
<textarea value={bio} onChange={handleChange} />
<input type="checkbox" checked={agree}
  onChange={event => setAgree(event.target.checked)} />`}</CodeDisclosure>
            </article>
            <article className="sample-card sample-wide">
              <p className="sample-label">OBJECT STATE · SHARED HANDLER</p>
              <h3>Registration fields</h3>
              <RegistrationForm />
              <CodeDisclosure>{`const { name, value, type, checked } = event.target;
setForm(previous => ({
  ...previous,
  [name]: type === 'checkbox' ? checked : value,
}));`}</CodeDisclosure>
            </article>
          </div>
        </section>

        <section className="section exercise-section" id="exercises" aria-labelledby="exercise-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">EXERCISES</p>
              <h2 id="exercise-title">Practice the full form pattern.</h2>
            </div>
            <p className="section-note">Try validation, DOM refs, and a multi-step wizard on the working page.</p>
          </div>

          <div className="exercise-grid">
            <Exercise
              number="E1"
              id="login-validation"
              title="Submit and validate"
              description="Prevent the browser reload, collect errors in an object, and show accessible inline feedback."
              code={`function handleSubmit(event) {
  event.preventDefault();
  const nextErrors = validate();
  setErrors(nextErrors);
  if (Object.keys(nextErrors).length === 0) {
    setStatus('success');
  }
}`}
            >
              <LoginExercise />
            </Exercise>

            <Exercise
              number="E2"
              id="ref-and-files"
              title="Use refs for DOM and files"
              description="Use a ref to focus an input and read the file chosen by an uncontrolled file input."
              code={`const inputRef = useRef(null);
inputRef.current.focus();

const file = fileRef.current.files[0];`}
            >
              <RefExercise />
            </Exercise>

            <Exercise
              number="E3"
              id="registration-wizard"
              title="Build a 3-step registration"
              description="Keep one form object across steps, validate before Next is enabled, and review all values at the end."
              code={`const stepValid =
  step === 1
    ? nameValid && emailValid
    : step === 2
      ? usernameValid && passwordValid
      : true;`}
            >
              <WizardExercise />
            </Exercise>
          </div>
        </section>

        <section className="quiz-section" id="quiz" aria-labelledby="quiz-title">
          <p className="eyebrow">QUICK CHECK</p>
          <h2 id="quiz-title">Which choice is controlled?</h2>
          <div className="quiz-options">
            <p>A · <code>&lt;input defaultValue="Kim" /&gt;</code></p>
            <p>B · <code>{'<input ref={inputRef} />'}</code></p>
            <p className="quiz-answer">C · <code>&lt;input value={'{name}'} onChange={'{event => setName(event.target.value)}'} /&gt;</code></p>
            <p>D · <code>&lt;input type="file" /&gt;</code></p>
          </div>
          <p className="quiz-reason"><strong>C is correct.</strong> Both <code>value</code> and <code>onChange</code> keep the DOM value synchronized with React state.</p>
        </section>

        <section className="takeaways" aria-labelledby="takeaway-title">
          <p className="eyebrow">KEY TAKEAWAYS</p>
          <h2 id="takeaway-title">Five rules to remember</h2>
          <ol>
            <li><b>01</b><span>Controlled inputs use value or checked.</span></li>
            <li><b>02</b><span>One handler can update many fields by name.</span></li>
            <li><b>03</b><span>Always prevent the default submit reload.</span></li>
            <li><b>04</b><span>Empty errors object means valid.</span></li>
            <li><b>05</b><span>Use refs for focus and file inputs.</span></li>
          </ol>
        </section>
      </main>

      <footer className="site-footer">
        <a href="../../index.html">Coursework home <span aria-hidden="true">↑</span></a>
        <a href="./index.html">React Forms <span aria-hidden="true">↗</span></a>
        <span>MAHMUDJON OKHUNOV · WEEK 13_1</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
