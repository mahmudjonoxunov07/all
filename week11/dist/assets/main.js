import"./course-design-D5mO0D-C.js";import{j as e,r as h,c as g}from"./client-CrowJ5J7.js";import{P as f}from"./PortfolioProjects-D5DzirMV.js";function p({title:i,children:s}){return e.jsxs("article",{className:"mini-card content-card",children:[e.jsx("p",{className:"card-kicker",children:"REUSABLE CARD"}),e.jsx("h3",{children:i}),e.jsx("div",{className:"card-content",children:s})]})}function m({type:i,message:s}){return s?e.jsx("p",{className:`demo-alert alert-${i}`,role:"status",children:s}):null}function N(){const[i,s]=h.useState(null);return e.jsxs("div",{className:"conditional-demo",children:[e.jsx(m,{type:"error",message:i?"":"You are signed out."}),e.jsx(m,{type:"success",message:i?"You are signed in.":""}),e.jsxs("div",{className:"welcome-panel",children:[i&&e.jsxs("p",{children:["Welcome back, ",i.name,"."]}),!i&&e.jsx("p",{children:"Sign in to see your dashboard."}),e.jsx("button",{className:"filter-button",type:"button",onClick:()=>s(i?null:{name:"Mahmudjon"}),children:i?"Sign out":"Sign in"})]})]})}function o({name:i="World"}){return e.jsxs("p",{className:"greeting",children:["Hello, ",i,"!"]})}const b=["all","success","warning","info"];function k({notifications:i}){const[s,n]=h.useState("all"),a=s==="all"?i:i.filter(({type:r})=>r===s);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"notification-controls",role:"group","aria-label":"Filter notifications",children:[b.map(r=>e.jsx("button",{className:"notification-filter-button",type:"button","aria-pressed":s===r,onClick:()=>n(r),children:r==="all"?"Show all":r},r)),e.jsxs("span",{className:"notification-count","aria-live":"polite",children:[a.length," ",a.length===1?"item":"items"]})]}),a.length>0?e.jsx("ul",{className:"notification-list",children:a.map(({id:r,type:c,message:l})=>{const x=c==="success"?"✅":c==="warning"?"⚠️":"ℹ️";return e.jsxs("li",{className:`notification notification-${c}`,children:[e.jsx("span",{className:"notification-icon","aria-hidden":"true",children:x}),e.jsx("span",{children:l})]},r)})}):e.jsx("p",{className:"notification-empty",role:"status",children:"No notifications to show."})]})}function u({name:i,price:s,rating:n,inStock:a}){return e.jsxs("article",{className:`mini-card product-card${a?"":" is-sold-out"}`,children:[e.jsx("p",{className:"card-kicker",children:"PRODUCT"}),e.jsx("h3",{children:i}),e.jsxs("p",{className:"product-price",children:["₩",s.toLocaleString("ko-KR")]}),e.jsxs("p",{className:"product-rating",children:[e.jsxs("span",{"aria-hidden":"true",children:["★".repeat(Math.floor(n)),"☆".repeat(5-Math.floor(n))]}),e.jsxs("span",{children:[n," / 5 stars"]})]}),e.jsx("p",{className:"stock-status",children:a?"In stock":"Out of stock"})]})}function j({name:i,role:s,email:n}){const a=i.split(/\s+/).map(r=>r[0]).join("").slice(0,2);return e.jsxs("article",{className:"mini-card profile-demo-card",children:[e.jsx("span",{className:"profile-initials","aria-hidden":"true",children:a}),e.jsxs("div",{children:[e.jsx("p",{className:"card-kicker",children:"PROFILE"}),e.jsx("h3",{children:i}),e.jsx("p",{children:s}),n&&e.jsx("a",{href:`mailto:${n}`,children:n})]})]})}function v({name:i,studentId:s,major:n,year:a,gpa:r}){return e.jsxs("article",{className:"mini-card profile-card",children:[e.jsxs("div",{className:"card-header",children:[e.jsx("h3",{className:"student-name",children:i}),e.jsxs("span",{className:"student-id",children:["ID: ",s]})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Major:"})," ",n]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Year:"})," ",a]}),e.jsxs("p",{children:[e.jsx("strong",{children:"GPA:"})," ",r.toFixed(1)]})]})]})}function y({students:i}){return e.jsx("ul",{className:"grade-list",children:i.map(s=>e.jsxs("li",{children:[e.jsx("span",{children:s.name}),e.jsx("strong",{children:s.grade})]},s.id))})}const d={name:"Mahmudjon Okhunov",role:"Computer Engineering student",email:""},w=[{id:"sample-100",name:"Sample Student 1",studentId:"DEMO-100",major:"Computer Engineering",year:1,gpa:3.8},{id:"sample-101",name:"Sample Student 2",studentId:"DEMO-101",major:"Computer Engineering",year:1,gpa:3.8},{id:"sample-102",name:"Sample Student 3",studentId:"DEMO-102",major:"Computer Engineering",year:2,gpa:3.6}],S=[{id:"saved",type:"success",message:"Your profile was saved."},{id:"deadline",type:"warning",message:"The project deadline is approaching."},{id:"materials",type:"info",message:"New lecture notes are available."}],C=[{id:"s-01",name:"Jordan Lee",grade:"A"},{id:"s-02",name:"Taylor Kim",grade:"B+"},{id:"s-03",name:"Morgan Park",grade:"A-"}];function E({children:i}){return e.jsxs("details",{className:"code-disclosure",children:[e.jsx("summary",{children:"View React example"}),e.jsx("pre",{children:e.jsx("code",{children:i})})]})}function t({number:i,id:s,origin:n,title:a,description:r,code:c,children:l}){return e.jsxs("article",{className:"exercise-card",id:s,children:[e.jsxs("div",{className:"exercise-heading",children:[e.jsx("span",{className:"exercise-number",children:i}),e.jsxs("div",{children:[e.jsx("p",{className:"exercise-origin",children:n}),e.jsx("h3",{children:a})]})]}),e.jsx("p",{className:"exercise-description",children:r}),e.jsx("div",{className:"exercise-demo",children:l}),e.jsx(E,{children:c})]})}function P(){return e.jsxs("div",{className:"page-shell",children:[e.jsxs("header",{className:"site-header",children:[e.jsxs("a",{className:"wordmark",href:"../../index.html","aria-label":"Coursework home",children:["MO",e.jsx("span",{children:"."})]}),e.jsx("nav",{className:"site-nav","aria-label":"Week 11 navigation",children:e.jsx("a",{href:"#practice",children:"Practice"})}),e.jsxs("a",{className:"header-link",href:"../../portfolio.html",children:["Portfolio ",e.jsx("span",{"aria-hidden":"true",children:"↗"})]})]}),e.jsxs("main",{id:"main-content",children:[e.jsxs("section",{className:"course-hero","aria-labelledby":"course-title",children:[e.jsxs("p",{className:"course-overline",children:["MAHMUDJON OKHUNOV ",e.jsx("span",{children:"·"})," WEB PROGRAMMING"]}),e.jsxs("h1",{id:"course-title",children:["Build once.",e.jsx("br",{}),e.jsx("em",{children:"Reuse everywhere."})]}),e.jsx("p",{children:"Week 11 · React components, props, and reusable interface patterns."}),e.jsxs("a",{href:"#practice",children:["Explore the exercises ",e.jsx("span",{"aria-hidden":"true",children:"↓"})]})]}),e.jsxs("section",{className:"section practice-section",id:"practice","aria-labelledby":"practice-title",children:[e.jsxs("div",{className:"section-heading",children:[e.jsxs("div",{children:[e.jsxs("p",{className:"eyebrow",children:["WEEK 11_1 ",e.jsx("span",{className:"eyebrow-divider",children:"/"})," REACT COMPONENTS & PROPS"]}),e.jsx("h2",{id:"practice-title",children:"Exercises and homework, tried live."})]}),e.jsx("p",{className:"section-note",children:"The three class exercises and both homework tasks run as React components."})]}),e.jsxs("div",{className:"exercise-grid",children:[e.jsx(t,{number:"E1",id:"profile-card",origin:"Week 11_1 · Exercise 1",title:"A profile card built from props",description:"Pass a name, role, and optional email into one reusable profile card.",code:`function ProfileCard({ name, role, email }) {
  return (
    <article>
      <span>{name.split(' ').map(part => part[0]).join('')}</span>
      <h3>{name}</h3>
      <p>{role}</p>
      {email && <a href={\`mailto:\${email}\`}>{email}</a>}
    </article>
  );
}`,children:e.jsxs("div",{className:"demo-card-grid",children:[e.jsx(j,{name:"Course Instructor",role:"Instructor",email:"instructor@example.edu"}),e.jsx(j,{name:d.name,role:d.role,email:d.email})]})}),e.jsx(t,{number:"E2",id:"notifications",origin:"Week 11_1 · Exercise 2",title:"Conditional icons in a notification list",description:"Map notifications by ID, show an icon by type, and filter the list interactively.",code:`{notifications.map(({ id, type, message }) => {
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
})}`,children:e.jsx(k,{notifications:S})}),e.jsx(t,{number:"E3",id:"children",origin:"Week 11_1 · Exercise 3",title:"A reusable card with children",description:"Keep the card wrapper reusable while passing different content through children.",code:`function Card({ title, children }) {
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
<Card title="Homework"><p>Build a portfolio gallery.</p></Card>`,children:e.jsxs("div",{className:"demo-card-grid",children:[e.jsx(p,{title:"Lecture topics",children:e.jsxs("ul",{children:[e.jsx("li",{children:"Components"}),e.jsx("li",{children:"Props"}),e.jsx("li",{children:"State"})]})}),e.jsx(p,{title:"Homework",children:e.jsx("p",{children:"Build a portfolio gallery with reusable project cards and technology filters."})})]})}),e.jsx(t,{number:"HW1",id:"student-card",origin:"Week 11_1 · Homework 1",title:"A student directory with five props",description:"Render three profile cards using a student ID, major, numeric year, and numeric GPA.",code:`function StudentCard({ name, studentId, major, year, gpa }) {
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
))}`,children:e.jsx("div",{className:"student-card-grid",children:w.map(({id:i,...s})=>e.jsx(v,{...s},i))})}),e.jsx(t,{number:"HW2",id:"portfolio-gallery",origin:"Week 11_1 · Homework 2",title:"A portfolio gallery with technology filters",description:"Filter the projects below by technology. The same React gallery powers the project list on the portfolio.",code:`const categories = [
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
<ProjectList projects={visibleProjects} />`,children:e.jsx(f,{})}),e.jsx(t,{number:"P1",id:"first-component",origin:"Extra practice · Components",title:"One greeting component, multiple props",description:"Render the same component with default and custom names.",code:`function Greeting({ name = 'World' }) {
  return <p>Hello, {name}!</p>;
}

<Greeting />
<Greeting name="Ari" />
<Greeting name="Sam" />`,children:e.jsxs("div",{className:"greeting-stack",children:[e.jsx(o,{}),e.jsx(o,{name:"Ari"}),e.jsx(o,{name:"Sam"})]})}),e.jsx(t,{number:"P2",id:"product-card",origin:"Extra practice · Conditional UI",title:"A product card with stock status",description:"Format a price, show a rating, and change the stock label from a boolean prop.",code:`function ProductCard({ name, price, rating, inStock }) {
  return (
    <article>
      <h3>{name}</h3>
      <p>{price.toLocaleString('ko-KR')}원</p>
      <p>{rating} / 5 stars</p>
      <p>{inStock ? 'In stock' : 'Out of stock'}</p>
    </article>
  );
}`,children:e.jsxs("div",{className:"demo-card-grid product-grid",children:[e.jsx(u,{name:"Wireless Earbuds",price:89e3,rating:4.5,inStock:!0}),e.jsx(u,{name:"USB-C Hub",price:45e3,rating:3.5,inStock:!1})]})}),e.jsx(t,{number:"P3",id:"lists",origin:"Extra practice · Rendering arrays",title:"A list with stable keys",description:"Render each record by its ID instead of using an array position as the key.",code:`<ul>
  {students.map((student) => (
    <li key={student.id}>
      {student.name} — {student.grade}
    </li>
  ))}
</ul>`,children:e.jsx(y,{students:C})}),e.jsx(t,{number:"P4",id:"conditional",origin:"Extra practice · State and conditional rendering",title:"Switch between signed-out and signed-in UI",description:"Use null, &&, and a ternary to switch between both states.",code:`if (!message) return null;

{user && <p>Welcome, {user.name}.</p>}
{!user && <p>Please sign in.</p>}

<button onClick={() => setUser(user ? null : { name: 'Mahmudjon' })}>
  {user ? 'Sign out' : 'Sign in'}
</button>`,children:e.jsx(N,{})})]})]})]}),e.jsxs("footer",{className:"site-footer",children:[e.jsxs("a",{className:"footer-home",href:"../../index.html",children:["Coursework home ",e.jsx("span",{"aria-hidden":"true",children:"↑"})]}),e.jsxs("a",{href:"../../portfolio.html",children:["Mahmudjon Okhunov ",e.jsx("span",{"aria-hidden":"true",children:"↗"})]}),e.jsxs("span",{children:["WEEK 11_1 ",e.jsx("span",{"aria-hidden":"true",children:"·"})," REACT COMPONENTS & PROPS"]})]})]})}g.createRoot(document.getElementById("root")).render(e.jsx(h.StrictMode,{children:e.jsx(P,{})}));
