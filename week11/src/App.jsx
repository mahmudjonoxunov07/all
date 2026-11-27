import myPhoto from '../../assets/xushnudbek.jpg';
import '../../portfolio.css';
import Card from './components/Card.jsx';
import ConditionalDemo from './components/ConditionalDemo.jsx';
import Greeting from './components/Greeting.jsx';
import NotificationList from './components/NotificationList.jsx';
import PortfolioProjects from './components/PortfolioProjects.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import StudentCard from './components/StudentCard.jsx';
import StudentList from './components/StudentList.jsx';
import { notifications, profile, studentProfiles, studentsForList } from './data/exercises.js';
import './style.css';

function CodeDisclosure({ children }) {
  return (
    <details className="code-disclosure">
      <summary>View React example</summary>
      <pre><code>{children}</code></pre>
    </details>
  );
}

function Exercise({ number, id, origin, title, description, code, children }) {
  return (
    <article className="exercise-card" id={id}>
      <div className="exercise-heading">
        <span className="exercise-number">{number}</span>
        <div>
          <p className="exercise-origin">{origin}</p>
          <h3>{title}</h3>
        </div>
      </div>
      <p className="exercise-description">{description}</p>
      <div className="exercise-demo">{children}</div>
      <CodeDisclosure>{code}</CodeDisclosure>
    </article>
  );
}

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="wordmark" href="../../index.html" aria-label="Coursework home">XH<span>.</span></a>
        <nav className="site-nav" aria-label="Week 11 navigation">
          <a href="#practice">Practice</a>
        </nav>
        <a className="header-link" href="../../portfolio.html">Portfolio <span aria-hidden="true">↗</span></a>
      </header>

      <main id="main-content">
        <section className="section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WEEK 11_1 <span className="eyebrow-divider">/</span> REACT COMPONENTS &amp; PROPS</p>
              <h2 id="practice-title">Exercises and homework, tried live.</h2>
            </div>
            <p className="section-note">The three class exercises and both homework tasks run as React components.</p>
          </div>

          <div className="exercise-grid">
            <Exercise
              number="E1"
              id="profile-card"
              origin="Week 11_1 · Exercise 1"
              title="A profile card with a default avatar"
              description="Pass profile details into a reusable card; the first card uses its default avatar."
              code={`function ProfileCard({ name, role, email, avatarUrl = defaultAvatar }) {
  return (
    <article>
      <img src={avatarUrl} alt="" />
      <h3>{name}</h3>
      <p>{role}</p>
      <a href={\`mailto:\${email}\`}>{email}</a>
    </article>
  );
}`}
            >
              <div className="demo-card-grid">
                <ProfileCard name="Course Instructor" role="Instructor" email="instructor@example.edu" />
                <ProfileCard
                  name={profile.name}
                  role={profile.role}
                  email={profile.email}
                  avatarUrl={myPhoto}
                />
              </div>
            </Exercise>

            <Exercise
              number="E2"
              id="notifications"
              origin="Week 11_1 · Exercise 2"
              title="Conditional icons in a notification list"
              description="Map notifications by ID, show an icon by type, and filter the list interactively."
              code={`{notifications.map(({ id, type, message }) => {
  const icon = type === 'success'
    ? '✅'
    : type === 'warning'
      ? '⚠️'
      : 'ℹ️';

  return (
    <li key={id} className={\`notification-\${type}\`}>
      <span aria-hidden="true">{icon}</span>
      {message}
    </li>
  );
})}`}
            >
              <NotificationList notifications={notifications} />
            </Exercise>

            <Exercise
              number="E3"
              id="children"
              origin="Week 11_1 · Exercise 3"
              title="A reusable card with children"
              description="Keep the card wrapper reusable while passing different content through children."
              code={`function Card({ title, children }) {
  return (
    <section className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}

<Card title="Lecture topics">
  <ul><li>Components</li><li>Props</li></ul>
</Card>
<Card title="Homework"><p>Build a portfolio gallery.</p></Card>`}
            >
              <div className="demo-card-grid">
                <Card title="Lecture topics">
                  <ul><li>Components</li><li>Props</li><li>State</li></ul>
                </Card>
                <Card title="Homework">
                  <p>Build a portfolio gallery with reusable project cards and technology filters.</p>
                </Card>
              </div>
            </Exercise>

            <Exercise
              number="HW1"
              id="student-card"
              origin="Week 11_1 · Homework 1"
              title="A student directory with five props"
              description="Render three profile cards using a student ID, major, numeric year, and numeric GPA."
              code={`function StudentCard({ name, studentId, major, year, gpa }) {
  return (
    <article className="profile-card">
      <div className="card-header">
        <h3 className="student-name">{name}</h3>
        <span className="student-id">ID: {studentId}</span>
      </div>
      <div className="card-body">
        <p>Major: {major}</p>
        <p>Year: {year}</p>
        <p>GPA: {gpa.toFixed(1)}</p>
      </div>
    </article>
  );
}

{studentProfiles.map(({ id, ...student }) => (
  <StudentCard key={id} {...student} />
))}`}
            >
              <div className="student-card-grid">
                {studentProfiles.map(({ id, ...student }) => (
                  <StudentCard key={id} {...student} />
                ))}
              </div>
            </Exercise>

            <Exercise
              number="HW2"
              id="portfolio-gallery"
              origin="Week 11_1 · Homework 2"
              title="A portfolio gallery with technology filters"
              description="Filter the projects below by technology. The same React gallery powers the project list on the portfolio."
              code={`const categories = [
  'All',
  ...new Set(projects.flatMap((project) => project.techStack)),
];

const visibleProjects = activeFilter === 'All'
  ? projects
  : projects.filter((project) => project.techStack.includes(activeFilter));

<FilterBar
  categories={categories}
  activeFilter={activeFilter}
  onSelectFilter={setActiveFilter}
/>
<ProjectList projects={visibleProjects} />`}
            >
              <PortfolioProjects />
            </Exercise>

            <Exercise
              number="P1"
              id="first-component"
              origin="Extra practice · Components"
              title="One greeting component, multiple props"
              description="Render the same component with default and custom names."
              code={`function Greeting({ name = 'World' }) {
  return <p>Hello, {name}!</p>;
}

<Greeting />
<Greeting name="Ari" />
<Greeting name="Sam" />`}
            >
              <div className="greeting-stack">
                <Greeting />
                <Greeting name="Ari" />
                <Greeting name="Sam" />
              </div>
            </Exercise>

            <Exercise
              number="P2"
              id="product-card"
              origin="Extra practice · Conditional UI"
              title="A product card with stock status"
              description="Format a price, show a rating, and change the stock label from a boolean prop."
              code={`function ProductCard({ name, price, rating, inStock }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{price.toLocaleString('ko-KR')}원</p>
      <p>{rating} / 5 stars</p>
      <p>{inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
}`}
            >
              <div className="demo-card-grid product-grid">
                <ProductCard name="Wireless Earbuds" price={89000} rating={4.5} inStock />
                <ProductCard name="USB-C Hub" price={45000} rating={3.5} inStock={false} />
              </div>
            </Exercise>

            <Exercise
              number="P3"
              id="lists"
              origin="Extra practice · Rendering arrays"
              title="A list with stable keys"
              description="Render each record by its ID instead of using an array position as the key."
              code={`<ul>
  {students.map((student) => (
    <li key={student.id}>
      {student.name} — {student.grade}
    </li>
  ))}
</ul>`}
            >
              <StudentList students={studentsForList} />
            </Exercise>

            <Exercise
              number="P4"
              id="conditional"
              origin="Extra practice · State and conditional rendering"
              title="Switch between signed-out and signed-in UI"
              description="Use null, &&, and a ternary to switch between both states."
              code={`if (!message) return null;

{user && <p>Welcome, {user.name}.</p>}
{!user && <p>Please sign in.</p>}

<button onClick={() => setUser(user ? null : { name: 'Xushnudbek' })}>
  {user ? 'Sign out' : 'Sign in'}
</button>`}
            >
              <ConditionalDemo />
            </Exercise>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <a className="footer-home" href="../../index.html">Coursework home <span aria-hidden="true">↑</span></a>
        <a href="../../portfolio.html">Xushnudbek <span aria-hidden="true">↗</span></a>
        <span>WEEK 11_1 <span aria-hidden="true">·</span> REACT COMPONENTS &amp; PROPS</span>
      </footer>
    </div>
  );
}

export default App;
