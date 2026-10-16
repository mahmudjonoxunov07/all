const guideData = {
  week2: {
    number: 'WEEK 02 · MONDAY', title: 'HTML Fundamentals', subtitle: 'The document skeleton, text, links, lists, and images: the building blocks of every web page.', topics: [
      ['01','What is HTML?','HTML describes page structure. CSS controls appearance; JavaScript controls behaviour.','<h1>Hello, web!</h1>\n<p>HTML gives this content structure.</p>'],
      ['02','DOCTYPE declaration','Put the HTML5 doctype first so browsers use standards mode.','<!doctype html>'],
      ['03','The body element','The body contains all content visible in the page.','<body>\n  <h1>Visible content</h1>\n</body>'],
      ['04','Headings h1–h6','Use headings in a meaningful hierarchy; do not choose a heading for its default size.','<h1>Page title</h1>\n<h2>Section</h2>\n<h3>Subsection</h3>'],
      ['05','The head section','The head stores page metadata, stylesheet links, and the document title.','<head>\n  <meta charset="utf-8">\n  <title>My page</title>\n</head>'],
      ['06','meta charset UTF-8','UTF-8 supports multilingual text; place the charset declaration near the start of head.','<meta charset="utf-8">'],
      ['07','The title element','Title text appears in the browser tab and search results, not in the page body.','<title>Kim Jisoo · Web Portfolio</title>'],
      ['08','The lang attribute','Declare the primary language so assistive technology can pronounce the page correctly.','<html lang="en">'],
      ['09','Paragraphs and block elements','Paragraphs form text blocks; source whitespace collapses in normal HTML flow.','<p>A paragraph can contain <strong>inline content</strong>.</p>'],
      ['10','Inline elements and span','Inline elements flow with text. Span is a neutral inline wrapper for styling or scripting.','<p>Make <span class="highlight">this phrase</span> stand out.</p>'],
      ['11','strong','Strong marks important content, not merely bold styling.','<p><strong>Submit by Friday.</strong></p>'],
      ['12','em','Em marks spoken emphasis; use it when stress changes the meaning.','<p>You <em>must</em> save your work.</p>'],
      ['13','Void elements and br','Void elements have no closing tag. Use br for meaningful line breaks, not layout spacing.','<img src="photo.jpg" alt="A student at a desk">\n<br>'],
      ['14','Links and href','An anchor needs href. Destinations may be external, local, fragment, email, or phone links.','<a href="#contact">Contact</a>'],
      ['15','target blank','New-tab links should include rel="noopener noreferrer".','<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit example</a>'],
      ['16','Unordered lists','Use ul when item order does not matter; its children are list items.','<ul><li>HTML</li><li>CSS</li></ul>'],
      ['17','Ordered lists','Use ol when sequence matters; the browser supplies the numbering.','<ol><li>Plan</li><li>Build</li><li>Test</li></ol>'],
      ['18','List items','Each li represents one item and belongs inside ul or ol.','<li><a href="/projects">Projects</a></li>'],
      ['19','Images and src','The img element is void. Give it a source and dimensions when known.','<img src="images/lab.jpg" alt="Students working in a lab" width="400" height="300">'],
      ['20','The alt attribute','Write concise, contextual alternative text; use alt="" for decorative images.','<img src="chart.png" alt="Scores rose from 72 to 91 over four weeks">'],
      ['21','The id attribute','An id is unique in a document and can be used by fragment links and JavaScript.','<section id="contact">Contact details</section>'],
      ['22','The class attribute','Classes are reusable labels for styling or scripting.','<article class="card featured">Project</article>'],
      ['23','HTML comments','Comments are visible in page source, so never put secrets in them.','<!-- Main page content -->'],
      ['24','Block vs inline','Block elements start a new flow; inline elements sit within text. CSS can change display behaviour.','<p>Block with <a href="#">an inline link</a>.</p>'],
      ['25','Complete page','A valid page starts with doctype and declares language, metadata, title, and body.','<!doctype html>\n<html lang="en">\n<head><meta charset="utf-8"><title>Page</title></head>\n<body><h1>Hello</h1></body>\n</html>']
    ], exercises: [
      ['E1','The HTML Skeleton','Create the minimum valid page with the requested title and heading.','<!doctype html>\n<html lang="en">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Hello, Gachon!</h1>\n</body>\n</html>'],
      ['E2','Headings, Paragraphs and Emphasis','Use a heading hierarchy and semantic emphasis in a hobby description.','<h1>Photography</h1>\n<h2>Why I Love It</h2>\n<p>Photography helps me notice <strong>small details</strong> in everyday life. I enjoy the patience of composing each frame.</p>\n<h2>How to Start</h2>\n<p>Begin with a phone camera and practice in natural light. Try <em>bokeh</em> by focusing on a nearby subject.</p>'],
      ['E3','Navigation List with Links','A navigation landmark containing five list links.','<nav aria-label="Main navigation">\n  <ul>\n    <li><a href="#">Home</a></li>\n    <li><a href="#">About Me</a></li>\n    <li><a href="#">My Projects</a></li>\n    <li><a href="#">Skills</a></li>\n    <li><a href="#">Contact</a></li>\n  </ul>\n</nav>'],
      ['E4','Image with Meaningful alt Text','Alternative text describes the hypothetical image, not the image URL.','<img src="https://picsum.photos/400/300"\n     alt="University students collaborating on laptops in a bright study room"\n     width="400" height="300">'],
      ['E5','Complete Profile Page','A self-contained profile using headings, image alternative text, a list, a secure external link, and footer.','<!doctype html>\n<html lang="en">\n<head><meta charset="utf-8"><title>Kim Jisoo · Profile</title></head>\n<body>\n  <main>\n    <h1>Kim Jisoo</h1>\n    <img src="https://picsum.photos/200/200" alt="Student portrait in a university garden" width="200" height="200">\n    <p>I study <strong>web programming</strong> and enjoy <em>building useful things</em>.</p>\n    <h2>My Skills</h2>\n    <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n    <a href="https://www.gachon.ac.kr" target="_blank" rel="noopener noreferrer">Gachon University</a>\n  </main>\n  <footer><p>&copy; 2026 Kim Jisoo</p></footer>\n</body>\n</html>'],
      ['E6','Fix the Broken HTML','Correct the heading close tag, nesting, anchor destination, image source, and list item closures.','<!doctype html>\n<html lang="en">\n<head><meta charset="utf-8"><title>My Blog</title></head>\n<body>\n  <h1>My Blog</h1>\n  <p>Welcome! I write about <strong>web development</strong>.</p>\n  <p>See my <a href="https://github.com">GitHub</a>.</p>\n  <img src="photo.jpg" alt="A view of my workspace">\n  <ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>\n</body>\n</html>'],
      ['E7','Ordered Steps with Nested List','A tutorial with unordered materials and ordered steps; emphasis marks warning and manner.','<h1>Make a Simple Web Page</h1>\n<h2>What You Need</h2>\n<ul><li>Text editor</li><li>Web browser</li><li>index.html file</li><li>Internet connection</li><li>Curiosity</li></ul>\n<h2>Steps</h2>\n<ol>\n  <li>Create a new file named index.html.</li>\n  <li>Add the HTML document skeleton.</li>\n  <li><strong>Do not forget the doctype.</strong></li>\n  <li>Write a heading and a paragraph.</li>\n  <li>Open the file in your browser and <em>carefully</em> check the result.</li>\n</ol>'],
      ['E8','My Favourites Gallery','Three cards with distinct image URLs, descriptive text, and secure external links.','<h1>My Favourites</h1>\n<section class="card"><h2>Book: The Little Prince</h2><img src="https://picsum.photos/300/200?random=1" alt="Illustrated book cover"><p>A <strong>thoughtful</strong> story about friendship. I enjoy its <em>simple language</em>.</p><a href="https://en.wikipedia.org/wiki/The_Little_Prince" target="_blank" rel="noopener noreferrer">Learn more</a></section>\n<section class="card"><h2>Film: Spirited Away</h2><img src="https://picsum.photos/300/200?random=2" alt="Fantasy film scene"><p>A <strong>memorable</strong> animated film. Its world feels <em>rich and strange</em>.</p><a href="https://en.wikipedia.org/wiki/Spirited_Away" target="_blank" rel="noopener noreferrer">Learn more</a></section>\n<section class="card"><h2>Website: MDN</h2><img src="https://picsum.photos/300/200?random=3" alt="Web development reference"><p>MDN is a <strong>reliable</strong> reference. I use it to learn <em>web standards</em>.</p><a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Learn more</a></section>']
    ]
  },
  week2_2: {
    number: 'WEEK 02 · FRIDAY', title: 'Semantic HTML', subtitle: 'Choose elements for what their content means, not just how you want them to look.', topics: [
      ['01','What is semantic HTML?','Semantic tags communicate structure to browsers, search engines, and assistive technology.','<header><h1>My site</h1><nav>...</nav></header>'],
      ['02','header','Introductory content for a page or section; a page can have multiple headers.','<header><h1>Course notes</h1></header>'],
      ['03','nav','A landmark for major navigation. Give multiple nav landmarks distinct labels.','<nav aria-label="Main navigation"><a href="#topics">Topics</a></nav>'],
      ['04','main','The unique dominant content of the page; use one visible main.','<main id="main-content">Page-specific content</main>'],
      ['05','footer','Information about its nearest page or section, such as author or copyright.','<footer><p>&copy; 2026 Gachon University</p></footer>'],
      ['06','section','A thematic grouping that normally has a heading.','<section><h2>About</h2><p>Related content.</p></section>'],
      ['07','article','Self-contained content that could stand alone or be distributed independently.','<article><h2>Post title</h2><p>Post content.</p></article>'],
      ['08','aside','Tangentially related content that is useful but not essential to the main flow.','<aside aria-label="Related links"><h2>More reading</h2></aside>'],
      ['09','div','A generic grouping element when no semantic element fits, often for layout.','<div class="grid">...</div>'],
      ['10','figure','Self-contained content such as an image, diagram, or code sample.','<figure><img src="map.png" alt="Campus map"><figcaption>Campus map</figcaption></figure>'],
      ['11','figcaption','Visible caption for a figure; it is the first or last child of figure.','<figcaption>Figure 1: Page structure</figcaption>'],
      ['12','time','Human-readable date with a machine-readable datetime value.','<time datetime="2026-10-16">October 16, 2026</time>'],
      ['13','address','Contact information for the nearest article or page.','<address><a href="mailto:hello@example.edu">hello@example.edu</a></address>'],
      ['14','mark','Text relevant in a particular context, such as a search match.','<p>Search result: <mark>semantic HTML</mark></p>'],
      ['15','abbr','An abbreviation with its expansion in the title attribute.','<abbr title="Cascading Style Sheets">CSS</abbr>'],
      ['16','blockquote','A block-level quotation from another source; cite may hold the source URL.','<blockquote cite="https://example.org"><p>Quoted text.</p></blockquote>'],
      ['17','q','A short inline quotation; the browser supplies quotation marks.','<p>She said <q>keep learning</q>.</p>'],
      ['18','cite','The title of a creative work, not the author name or source URL.','<p>Read <cite>Weaving the Web</cite>.</p>'],
      ['19','code','Inline technical text. Pair with pre for a multi-line code block.','<p>Use <code>display: grid</code>.</p>'],
      ['20','pre','Preserves whitespace and line breaks; pair with code for code samples.','<pre><code>const answer = 42;</code></pre>'],
      ['21','details and summary','A native disclosure control. Summary is the visible label; open starts expanded.','<details open><summary>Show answer</summary><p>Answer text.</p></details>'],
      ['22','dialog','Native popup. showModal() opens a modal; Escape closes it.','<dialog id="confirm"><p>Continue?</p></dialog>'],
      ['23','ARIA role','Use native semantic elements first; add role only when needed for custom widgets.','<div role="alert">Saved successfully</div>'],
      ['24','Landmarks and accessibility','header, nav, main, aside, and footer expose useful navigation landmarks.','<a href="#main-content" class="skip-link">Skip to content</a>'],
      ['25','Complete semantic page','Combine native landmarks and content-specific elements into a coherent outline.','<header>...</header>\n<main><article>...</article></main>\n<footer>...</footer>']
    ], exercises: [
      ['E1','Convert Div Soup to Semantic HTML','Replace structural wrapper divs with header, nav, main, article, aside, and footer.','<header>\n  <h1>Gachon Blog</h1>\n  <nav aria-label="Main navigation"><a href="/">Home</a> <a href="/posts">Posts</a></nav>\n</header>\n<main>\n  <article><h2>My First Post</h2><p>Today I learned about semantic HTML...</p></article>\n  <aside><h2>Recent Posts</h2><ul><li>Intro to HTML</li></ul></aside>\n</main>\n<footer><p>&copy; 2026</p></footer>'],
      ['E2','Blog Article with header and footer','Use a time element and separate article metadata from the post body.','<article>\n  <header><h2>Learning to Build for the Web</h2><p>By Kim Jisoo · <time datetime="2026-10-16">October 16, 2026</time></p></header>\n  <p>I enjoy learning <strong>how the web works</strong>. A good page is both useful and <em>clear</em>.</p>\n  <p>Semantic elements help readers and browsers understand the content.</p>\n  <footer><p>Tags: HTML · Learning</p></footer>\n</article>'],
      ['E3','Figure, figcaption and time','A page with an image figure, a machine-readable date, and a code figure.','<figure>\n  <img src="https://picsum.photos/400/250?random=10" alt="Colourful abstract shapes in blue and red" width="400" height="250">\n  <figcaption>Figure 1: An abstract colour study.</figcaption>\n</figure>\n<p>Prepared on <time datetime="2026-10-16">October 16, 2026</time>.</p>\n<figure>\n  <pre><code>&lt;!doctype html&gt;\n&lt;html lang="en"&gt;\n&lt;head&gt;\n  &lt;meta charset="utf-8"&gt;\n  &lt;title&gt;Example&lt;/title&gt;\n&lt;/head&gt;\n&lt;body&gt;&lt;/body&gt;\n&lt;/html&gt;</code></pre>\n  <figcaption>Listing 1: A minimal HTML skeleton.</figcaption>\n</figure>'],
      ['E4','FAQ with details and summary','Four native disclosure controls inside a headed section; first one starts open.','<section><h2>Web Programming FAQ</h2>\n  <details open><summary>What is HTML?</summary><p>HTML describes the structure and meaning of page content.</p></details>\n  <details><summary>What does CSS do?</summary><p>CSS controls the presentation and layout of a page.</p></details>\n  <details><summary>What is JavaScript?</summary><p>JavaScript adds behaviour and interactivity.</p></details>\n  <details><summary>Why use semantic elements?</summary><p>They improve structure, accessibility, and maintainability.</p></details>\n</section>'],
      ['E5','Full Semantic Portfolio Page','A concise semantic portfolio with the requested landmarks, content sections, and contact details.','<header><h1>Kim Jisoo</h1><nav aria-label="Main navigation"><a href="#about">About</a> <a href="#projects">Projects</a> <a href="#skills">Skills</a> <a href="#contact">Contact</a></nav></header>\n<main>\n<section id="about"><h2>About Me</h2><figure><img src="https://picsum.photos/200/200" alt="Student portrait in a campus garden" width="200" height="200"><figcaption>Web Programming student</figcaption></figure><p>I study at <abbr title="Gachon University">GU</abbr> and am learning <mark>front-end development</mark>.</p></section>\n<section id="projects"><h2>Projects</h2><article><header><h3>Course Workbook</h3><p><time datetime="2026-10">October 2026</time></p></header><p>A study site built with semantic HTML.</p></article></section>\n<aside id="skills"><h2>Skills</h2><ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul></aside>\n<section id="contact"><h2>Contact</h2><address><a href="mailto:jisoo@example.edu">jisoo@example.edu</a></address></section>\n</main><footer><p>&copy; 2026 Kim Jisoo</p></footer>'],
      ['E6','Fix Semantic Errors','Use visible header rather than head, nav rather than navigation, add image alt, use a related-content aside, and keep the page footer at page level.','<header><h1>My Blog</h1><nav aria-label="Main navigation"><a href="/">Home</a></nav></header>\n<main>\n  <article><h2>Semantic HTML</h2><figure><img src="img.jpg" alt="A diagram of semantic page regions"><figcaption>Semantic page regions</figcaption></figure></article>\n  <aside aria-label="Related topics"><h2>Topics</h2></aside>\n</main>\n<footer><p>Related: <a href="/html">HTML Guide</a></p></footer>'],
      ['E7','Quotation and Citation Page','Use q for the inline quote, blockquote for longer quotations, and cite for work titles.','<h1>Inspirational Quotes</h1>\n<p>Tim Berners-Lee reminds us <q>The web is more a social creation than a technical one.</q></p>\n<blockquote><p>It always seems impossible until it is done.</p><footer>— <cite>Nelson Mandela</cite></footer></blockquote>\n<blockquote><p>Stay hungry. Stay foolish.</p><footer>— <cite>Whole Earth Catalog</cite></footer></blockquote>\n<details><summary>About these quotes</summary><p>These quotations are commonly attributed to their sources. W3C means <abbr title="World Wide Web Consortium">W3C</abbr>, the standards organization for the web.</p></details>'],
      ['E8','News Article — All Semantic Elements','A complete article outline using each required semantic element.','<header><h1>How the Open Web Keeps Evolving</h1><nav aria-label="Main navigation"><a href="#story">Technology</a></nav></header>\n<main><article id="story"><header><h2>New tools put web standards in focus</h2><p><time datetime="2026-10-16">October 16, 2026</time></p></header>\n<figure><img src="https://picsum.photos/760/360?random=18" alt="Developers collaborating around a computer"><figcaption>Teams build accessible experiences together.</figcaption></figure>\n<section><h2>Background</h2><p>The <abbr title="World Wide Web Consortium">W3C</abbr> publishes standards that support an open web. Developers use <code>HTML</code> to describe page content.</p></section>\n<section><h2>Analysis</h2><p>Accessible defaults help more people use the web. <mark>Small semantic choices have lasting value.</mark></p></section>\n<blockquote><p>The power of the Web is in its universality.</p><footer>— <cite>Tim Berners-Lee</cite></footer></blockquote>\n<aside><h2>Key Facts</h2><ul><li>HTML structures content</li><li>Standards aid interoperability</li></ul></aside><footer><p>Tags: Web · Standards</p></footer></article></main><footer><p>&copy; 2026 Course Workbook</p></footer>']
    ]
  },
  week3: {
    number: 'WEEK 03 · MONDAY', title: 'CSS Introduction', subtitle: 'Selectors, colour, type, the box model, display, specificity, and a complete stylesheet.', topics: [
      ['01','What is CSS?','Cascading Style Sheets controls presentation, while HTML provides structure.','h1 { color: #087e68; }'],
      ['02','Three ways to add CSS','External files are best for real sites; internal styles suit demos; inline styles are a last resort.','<link rel="stylesheet" href="styles.css">'],
      ['03','CSS syntax','A rule has a selector followed by declarations in braces.','p { color: #172522; line-height: 1.6; }'],
      ['04','Universal selector','The universal selector matches all elements; a box-sizing reset is a common use.','*, *::before, *::after { box-sizing: border-box; }'],
      ['05','ID selector','An ID selector targets one unique element, but class selectors are usually easier to maintain.','#main-title { color: teal; }'],
      ['06','Class selector','Reusable classes are the primary way to style components.','.card { padding: 1rem; }'],
      ['07','Type selector','Type selectors establish broad defaults for an element type.','p { line-height: 1.7; }'],
      ['08','color','The color property changes text and currentColor; it does not fill the background.','body { color: #172522; }'],
      ['09','background-color','Set readable foreground/background contrast together.','.notice { color: #172522; background-color: #d5f277; }'],
      ['10','Hex colors','Hex colors encode red, green, and blue channels as #RRGGBB.','.swatch { background: #087e68; }'],
      ['11','RGB colors','RGB channels range from 0–255; alpha adds transparency.','color: rgb(8, 126, 104);\nbackground: rgba(8, 126, 104, .15);'],
      ['12','font-size','Use rem for scalable type; em is relative to the parent size.','body { font-size: 1rem; }\nh1 { font-size: 2rem; }'],
      ['13','font-weight','Numeric weights are available when the selected font supports them.','strong { font-weight: 700; }'],
      ['14','font-style','Use italic for visual style and em for semantic emphasis.','.caption { font-style: italic; }'],
      ['15','text-align','Text-align controls text inside a box, not the position of the box itself.','h1 { text-align: center; }'],
      ['16','Box model: padding','Padding is the space between content and border.','padding: 10px 20px;'],
      ['17','Box model: margin','Margin is space outside the border; margin-inline: auto centers a fixed-width block.','width: 20rem;\nmargin: 0 auto;'],
      ['18','Box model width','Border-box sizing includes padding and border in the declared width.','*, *::before, *::after { box-sizing: border-box; }'],
      ['19','display: block','Block elements start a new line and can take explicit dimensions.','a { display: block; }'],
      ['20','display: none','display:none removes layout space; visibility:hidden keeps it.','.is-hidden { display: none; }'],
      ['21','display: flex','Flexbox aligns items along one main axis; gap spaces them.','.row { display: flex; gap: 1rem; align-items: center; }'],
      ['22','CSS specificity','IDs outrank classes, which outrank type selectors; avoid escalating specificity.','/* Prefer a reusable class */\n.card-title { color: teal; }'],
      ['23','Which selector wins?','The highest specificity wins; equal specificity is decided by source order.','p { color: gray; }\n.note { color: teal; }'],
      ['24','CSS comments','CSS comments use slash-star syntax and are not JavaScript comments.','/* Navigation styles */\nnav { display: flex; }'],
      ['25','Putting it together','Organize a stylesheet into reset, base, layout, and component rules.','body { margin: 0; font-family: sans-serif; }\n.container { max-width: 60rem; margin: auto; }']
    ], exercises: [
      ['E1','Style Your First Heading','Green centered heading and muted, readable paragraph.','h1 { color: #15803d; text-align: center; font-size: 2.5rem; }\np { color: #64748b; font-size: 1.1rem; }'],
      ['E2','Three Ways — Spot the Difference','Update the inline declaration and add the requested internal rules.','<p style="color: #7c3aed;">Inline styled paragraph</p>\n<style>\n  h2 { color: #0369a1; }\n  body { font-family: sans-serif; }\n</style>'],
      ['E3','Color Palette Card','A five-swatch Flexbox row with labelled colours.','<div class="palette">\n  <div class="swatch" style="background:#087e68">#087E68</div>\n  <div class="swatch" style="background:#e9785c">#E9785C</div>\n  <div class="swatch" style="background:#172522">#172522</div>\n  <div class="swatch" style="background:#4682b4">#4682B4</div>\n  <div class="swatch" style="background:#d5f277;color:#172522">#D5F277</div>\n</div>\n<style>.palette{display:flex;flex-wrap:wrap;gap:12px}.swatch{padding:18px 14px;border-radius:8px;color:white;font-weight:700}</style>'],
      ['E4','Box Model Explorer','Nested boxes make margin, border, padding, and content visible.','<div class="margin">Margin<div class="border">Border<div class="padding">Padding<div class="content">Content</div></div></div></div>\n<style>.margin{background:#fbbf24;padding:24px;text-align:center}.border{background:#334155;padding:12px;margin:12px;color:white}.padding{background:#7dd3fc;padding:18px;color:#172522}.content{background:#a78bfa;padding:20px;color:white}</style>'],
      ['E5','Fix the Broken CSS','Correct colon, declaration separator, comment syntax, and property spelling.','/* corrected stylesheet */\nh1 { color: teal; font-size: 2rem; }\np { background-color: #eef; margin: 1rem; }'],
      ['E6','Flexbox Navigation Bar','Space the logo and links apart and add a visible hover colour.','<nav class="nav"><strong>GACHON</strong><div><a href="#home">Home</a><a href="#about">About</a><a href="#work">Work</a></div></nav>\n<style>.nav{display:flex;justify-content:space-between;align-items:center;background:#1e293b;padding:16px 24px;color:white}.nav div{display:flex;gap:20px}.nav a{color:white;text-decoration:none}.nav a:hover{color:#10b981}</style>'],
      ['E7','Profile Card with CSS','A compact profile card with a centred avatar, divider, and reusable skill badges.','<article class="profile"><div class="avatar">K</div><h1>Kim Jisoo</h1><p>Web Programming Student</p><hr><div class="skills"><span>HTML</span><span>CSS</span><span>Flexbox</span></div></article>\n<style>body{background:#f0fdf4;font-family:sans-serif}.profile{max-width:420px;margin:40px auto;padding:28px;background:white;border:1px solid #bbf7d0;border-radius:8px;text-align:center}.avatar{width:80px;height:80px;margin:auto;border-radius:50%;display:grid;place-items:center;background:#15803d;color:white;font-size:2rem}.profile h1{font-size:1.5rem}.profile p{color:#64748b}.skills{display:flex;justify-content:center;gap:8px;flex-wrap:wrap}.skills span{padding:5px 12px;border-radius:99px;background:#dcfce7;color:#15803d}</style>'],
      ['E8','Full Style Sheet from Scratch','A responsive page structure with base styles, flex navigation, hero, skills grid, and footer.','<header><nav><strong>JISOO</strong><a href="#skills">Skills</a></nav></header><main><section class="hero"><h1>Hello, I am Jisoo.</h1><p>I study web programming at Gachon University.</p><a href="#skills">Explore my skills</a></section><section id="skills" class="grid"><article>HTML</article><article>CSS</article><article>JavaScript</article></section></main><footer>© 2026 Kim Jisoo</footer>\n<style>*{box-sizing:border-box}body{margin:0;font:16px/1.6 sans-serif;color:#172522}header,footer{padding:20px 8%;background:#172522;color:white}nav{display:flex;justify-content:space-between}nav a{color:white}.hero{padding:70px 8%;background:#e7f4ec}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;padding:32px 8%}.grid article{padding:24px;background:#d5f277}@media(max-width:600px){.grid{grid-template-columns:1fr}}</style>']
    ]
  },
  week3_2: {
    number: 'WEEK 03 · FRIDAY', title: 'CSS Advanced', subtitle: 'Positioning, pseudo-elements, transitions, animation, variables, responsive layouts, and Grid.', topics: [
      ['01','static and relative','Static is normal flow. Relative offsets shift visually while reserving the original space.','.relative { position: relative; top: 10px; }'],
      ['02','absolute','Absolute positioning removes an element from flow and anchors it to its nearest positioned ancestor.','.card { position: relative; }\n.badge { position: absolute; top: 0; right: 0; }'],
      ['03','fixed and sticky','Fixed anchors to the viewport; sticky behaves normally until its scroll threshold.','nav { position: fixed; inset: 0 0 auto; }\nh2 { position: sticky; top: 0; }'],
      ['04','z-index and overflow','Stacking contexts affect z-index; overflow controls content outside the box.','.panel { position: relative; z-index: 2; overflow: auto; }'],
      ['05','Pseudo-classes','Pseudo-classes select an interaction or structural state; preserve visible focus.','button:hover { background: teal; }\nbutton:focus-visible { outline: 3px solid orange; }'],
      ['06','Pseudo-elements','Before and after generate styled content; content is required.','.label::after { content: " *"; color: crimson; }'],
      ['07','Transitions','Put transitions on the base state so changes animate in both directions.','.card { transition: transform .2s ease; }\n.card:hover { transform: translateY(-4px); }'],
      ['08','Animations and keyframes','Keyframes define an animation; reduced-motion preferences should be respected.','@keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }\n.hero { animation: fade-in .5s ease both; }'],
      ['09','CSS variables','Custom properties centralize tokens and can be overridden in themes.',' :root { --primary: #087e68; }\n.button { background: var(--primary); }'],
      ['10','Media queries','Use responsive breakpoints and user preferences such as reduced motion or dark mode.','@media (min-width: 640px) { .grid { grid-template-columns: repeat(3, 1fr); } }'],
      ['11','Advanced Flexbox','Wrap, flex sizing, order, and align-self handle flexible one-dimensional layouts.','.row { display: flex; flex-wrap: wrap; gap: 1rem; }\n.item { flex: 1 1 12rem; }'],
      ['12','CSS Grid','Grid handles two-dimensional layouts; minmax and repeat create adaptable tracks.','.grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }'],
      ['13','border-radius and box-shadow','Corner radii shape boxes; restrained shadows can establish depth.','.card { border-radius: 8px; box-shadow: 0 4px 16px #17252220; }'],
      ['14','inherit keyword','inherit copies the parent computed value; initial and unset are distinct reset values.','.child { color: inherit; }'],
      ['15','Putting it together','Combine design tokens, responsive Grid, positioned badges, and restrained motion.','.card { position: relative; transition: transform .2s; }\n.card:hover { transform: translateY(-4px); }']
    ], exercises: [
      ['E1','Position the Badge','The parent establishes the positioning context; the badge is placed in its upper-right corner.','<article class="card"><span class="badge">SALE</span><h2>Course materials</h2></article>\n<style>.card{position:relative;width:280px;height:180px;padding:24px;border:2px solid teal;border-radius:12px;background:white}.badge{position:absolute;top:10px;right:10px;padding:4px 12px;border-radius:999px;background:teal;color:white}</style>'],
      ['E2','Hover Card with Transition','The transition belongs to the base state, so both hover-in and hover-out animate.','.card { transition: transform .25s ease, box-shadow .25s ease; }\n.card:hover { transform: translateY(-6px); box-shadow: 0 12px 28px rgba(8, 126, 104, .25); }'],
      ['E3','Loading Spinner with keyframes','Use a transparent top border and rotate the circle continuously.','@keyframes spin { to { transform: rotate(360deg); } }\n.spinner { width:50px; height:50px; border:4px solid #99f6e4; border-top-color:#0f766e; border-radius:50%; animation:spin .8s linear infinite; }\n@media (prefers-reduced-motion: reduce) { .spinner { animation-duration: 2s; } }'],
      ['E4','CSS Variables Theme','Define the design tokens once and override colours for dark preference.','<style>\n:root{--primary:#087e68;--accent:#e9785c;--bg:#f5f7f3;--text:#172522;--radius:8px;--space:1rem}\n@media(prefers-color-scheme:dark){:root{--primary:#79d7bd;--accent:#ffad92;--bg:#172522;--text:#f5f7f3}}\nbody{margin:0;padding:var(--space);background:var(--bg);color:var(--text);font-family:sans-serif}\nbutton,.card{padding:var(--space);border-radius:var(--radius)}button{background:var(--primary);color:var(--bg);border:0}.card{margin-top:var(--space);border:1px solid var(--accent)}\n</style>\n<button>Save</button><article class="card">Theme-aware card</article>'],
      ['E5','Fixed Navigation Bar','A fixed bar needs a content offset so it does not cover the page.','<nav class="top-nav"><strong>GACHON</strong><div><a href="#about">About</a><a href="#work">Work</a></div></nav><main><h1>My page</h1><p>Scroll to explore.</p></main>\n<style>.top-nav{position:fixed;inset:0 0 auto;z-index:10;display:flex;justify-content:space-between;padding:16px 24px;background:#1e293b;color:white}.top-nav div{display:flex;gap:20px}.top-nav a{color:white;text-decoration:none}.top-nav a:hover{color:#14b8a6}main{padding:80px 24px;min-height:150vh}</style>'],
      ['E6','Responsive Grid Page','One column by default, three at the desktop breakpoint; card titles use a pseudo-element.','<section class="cards"><article class="card">HTML</article><article class="card">CSS</article><article class="card">JavaScript</article></section>\n<style>:root{--brand:#087e68;--surface:white;--page:#f5f7f3}body{background:var(--page)}.cards{display:grid;grid-template-columns:1fr;gap:16px}.card{padding:24px;background:var(--surface);border:1px solid var(--brand);transition:transform .2s}.card::before{content:"✦ ";color:var(--brand)}.card:hover{transform:translateY(-4px)}@media(min-width:640px){.cards{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(prefers-color-scheme:dark){:root{--surface:#263631;--page:#172522}}</style>'],
      ['E7','Complete CSS Advanced Portfolio Page','The page combines design tokens, fixed navigation, an animated hero, responsive skills, and a sticky section heading.','<header class="nav">JISOO <nav><a href="#about">About</a><a href="#skills">Skills</a></nav></header><main><section class="hero" id="about"><h1>Kim Jisoo</h1><p>Web Programming student · Gachon University</p></section><section id="skills"><h2 class="sticky-title">Skills</h2><div class="skills"><article>HTML</article><article>CSS</article><article>JavaScript</article></div></section></main>\n<style>:root{--ink:#172522;--brand:#087e68;--paper:#f5f7f3;--tile:#d5f277}*{box-sizing:border-box}body{margin:0;background:var(--paper);color:var(--ink);font:16px sans-serif}.nav{position:fixed;inset:0 0 auto;z-index:5;display:flex;justify-content:space-between;padding:16px 6%;background:var(--ink);color:white}.nav nav{display:flex;gap:20px}.nav a{color:white}.hero{padding:120px 8% 80px;animation:enter .7s ease both}.hero h1{font-size:3rem}@keyframes enter{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}.sticky-title{position:sticky;top:52px;padding:14px 8%;background:var(--paper)}.skills{display:grid;grid-template-columns:1fr;gap:14px;padding:20px 8% 100px}.skills article{padding:24px;background:var(--tile)}.skills article::before{content:"✦ ";color:var(--brand)}@media(min-width:640px){.skills{grid-template-columns:repeat(3,1fr)}}@media(prefers-color-scheme:dark){:root{--ink:#f5f7f3;--brand:#79d7bd;--paper:#172522;--tile:#29423a}}@media(prefers-reduced-motion:reduce){.hero{animation:none}}</style>']
    ]
  },
  week4: {
    number: 'WEEK 04 · FRIDAY', title: 'JavaScript DOM & Events', subtitle: 'Select page elements, update content safely, respond to events, and create dynamic interfaces.', topics: [
      ['01','What is the DOM?','The browser represents the page as a tree of objects that JavaScript can inspect and update.','document.querySelector("h1").textContent = "Hello";'],
      ['02','Selecting by ID','getElementById returns one element or null. IDs should be unique.','const heading = document.getElementById("greeting");'],
      ['03','querySelector','querySelector returns the first match; querySelectorAll returns a NodeList.','document.querySelectorAll(".item").forEach(item => console.log(item));'],
      ['04','textContent','textContent reads or writes plain text and is the safe default for user-provided text.','message.textContent = userInput;'],
      ['05','innerHTML','innerHTML parses markup. Use only for trusted, controlled HTML to avoid XSS.','box.innerHTML = "<strong>Trusted template</strong>";'],
      ['06','classList','Add, remove, toggle, or inspect CSS classes without changing inline styles.','card.classList.toggle("active");'],
      ['07','addEventListener','Attach an event callback without inline HTML event attributes.','button.addEventListener("click", () => count++);'],
      ['08','The event object','The callback receives an event with target, type, key, and other event details.','input.addEventListener("input", event => console.log(event.target.value));'],
      ['09','preventDefault','Cancel a default browser action, commonly form submission or link navigation.','form.addEventListener("submit", event => { event.preventDefault(); });'],
      ['10','Bubbling and delegation','A parent listener can handle events from current and future children.','list.addEventListener("click", event => { if (event.target.matches(".delete")) event.target.closest("li").remove(); });'],
      ['11','createElement and append','Create, configure, then insert a DOM element. Use textContent for plain user text.','const item = document.createElement("li");\nitem.textContent = "New item";\nlist.append(item);'],
      ['12','Removing elements','Element.remove() removes a node from the document.','document.querySelector(".to-delete")?.remove();']
    ], exercises: [
      ['E1','Click Counter with Color Change','Count button clicks; after five, apply the done class and show a message.','<button id="counter">Click me: <span id="count">0</span></button><p id="message"></p>\n<style>.done{background:#16803c;color:white}</style>\n<script>let total=0;const button=document.querySelector("#counter");button.addEventListener("click",()=>{total++;document.querySelector("#count").textContent=total;if(total>=5){button.classList.add("done");document.querySelector("#message").textContent="Congratulations!";}});</script>'],
      ['E2','Dark Mode Toggle Card','Toggle the class and keep the button label synchronized with its state.','<article id="profile"><h2>Kim Jisoo</h2><p>Web Programming student</p><button id="theme-toggle" type="button">Use dark mode</button></article>\n<style>#profile{padding:20px;background:white;color:#172522}#profile.dark{background:#172522;color:white}</style>\n<script>const profile=document.querySelector("#profile");const toggle=document.querySelector("#theme-toggle");toggle.addEventListener("click",()=>{profile.classList.toggle("dark");toggle.textContent=profile.classList.contains("dark")?"Use light mode":"Use dark mode";});</script>'],
      ['E3','Interactive To-Do List','A form handles Enter and click submission; one delegated listener removes any item.','<form id="todo-form"><label for="todo-input">New task</label><input id="todo-input" required><button>Add</button></form><ul id="todo-list"></ul>\n<script>const form=document.querySelector("#todo-form");const input=document.querySelector("#todo-input");const list=document.querySelector("#todo-list");form.addEventListener("submit",event=>{event.preventDefault();const text=input.value.trim();if(!text)return;const item=document.createElement("li");const label=document.createElement("span");label.textContent=text;const remove=document.createElement("button");remove.type="button";remove.className="delete-btn";remove.textContent="Remove";item.append(label,remove);list.append(item);input.value="";input.focus();});list.addEventListener("click",event=>{if(event.target.matches(".delete-btn"))event.target.closest("li").remove();});</script>'],
      ['E4','Live Search Filter','Filter existing rows on input; assigning display does not alter the underlying text.','<label for="search">Search students</label><input id="search"><ul><li class="student">Ari Kim</li><li class="student">Min Park</li><li class="student">Jisoo Lee</li></ul>\n<script>const search=document.querySelector("#search");const students=document.querySelectorAll(".student");search.addEventListener("input",event=>{const term=event.target.value.trim().toLowerCase();students.forEach(student=>{student.hidden=!student.textContent.toLowerCase().includes(term);});});</script>']
    ]
  }
};

const weekLinks = [
  ['week2','02.01','HTML Fundamentals'],
  ['week2_2','02.02','Semantic HTML'],
  ['week3','03.01','CSS Introduction'],
  ['week3_2','03.02','CSS Advanced'],
  ['week4','04.01','JavaScript DOM & Events']
];

function escapeHTML(value) {
  return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}

function createPreviewDocument(sample) {
  const parsed = new DOMParser().parseFromString(sample, 'text/html');
  const styles = [...parsed.querySelectorAll('style')].map(style => style.textContent).join('\n');
  const scripts = [...parsed.querySelectorAll('script')].map(script => script.textContent).join('\n');
  parsed.querySelectorAll('style, script').forEach(element => element.remove());

  let markup = parsed.body.innerHTML;
  let previewStyles = styles;
  let previewScripts = scripts;
  const isRawCode = !/^\s*</.test(sample);
  const isJavaScript = isRawCode && (
    /\b(?:document|window|console|const|let|var|if|for|function)\b|=>|\.addEventListener\s*\(|\.(?:textContent|innerHTML|classList|append|remove)\b/.test(sample)
  );
  const containsMarkup = markup.trim().length > 0;
  const isCSS = !isJavaScript && !scripts && (
    (!containsMarkup && styles.trim().length > 0) ||
    (isRawCode && /[{}:;]/.test(sample))
  );

  if (isCSS) {
    previewStyles = previewStyles.trim() ? previewStyles : sample;
    markup = `<main class="css-preview">
      <h1 id="main-title">Output preview</h1>
      <p class="note">A paragraph styled by the sample.</p>
      <nav><strong>GACHON</strong><a href="#">Home</a><a href="#">About</a></nav>
      <button type="button">Preview button</button>
      <article class="card"><span class="badge">NEW</span><h2 class="card-title">Sample card</h2><p>Card content</p></article>
      <div class="notice">Notice</div>
      <div class="swatch">Colour swatch</div>
      <div class="row"><span class="item">One</span><span class="item">Two</span><span class="item">Three</span></div>
      <div class="grid"><span class="item">Grid one</span><span class="item">Grid two</span><span class="item">Grid three</span></div>
      <div class="relative">Positioning example<span class="badge">Badge</span></div>
    </main>`;
  } else if (isJavaScript) {
    previewScripts = sample;
    markup = `<main class="js-preview">
      <h1 id="greeting">Interactive output</h1>
      <p id="message">JavaScript output appears here.</p>
      <label for="input">Type to interact</label><input id="input" placeholder="Type here">
      <button id="button" type="button">Click to interact</button>
      <p>Click count: <output id="count">0</output></p>
      <article id="card" class="card"><h2 class="card-title">Sample card</h2><button id="theme-toggle" type="button">Toggle</button></article>
      <div id="box" class="box">Content box</div>
      <form id="form"><label for="todo-input">New task</label><input id="todo-input"><button type="submit">Add</button></form>
      <ul id="list"><li class="item to-delete">Remove me <button class="delete" type="button">Remove</button></li></ul>
      <ul><li class="student">Ari Kim</li><li class="student">Min Park</li><li class="student">Jisoo Lee</li></ul>
      <pre id="console-output" aria-label="Console output"></pre>
    </main>
    <script>
      window.message = document.querySelector('#message');
      window.userInput = 'Preview text';
      window.button = document.querySelector('#button');
      window.card = document.querySelector('#card');
      window.input = document.querySelector('#input');
      window.form = document.querySelector('#form');
      window.list = document.querySelector('#list');
      window.box = document.querySelector('#box');
      window.count = 0;
      const previewConsole = document.querySelector('#console-output');
      console.log = (...values) => { previewConsole.textContent += values.map(String).join(' ') + '\\n'; };
    </script>`;
  }

  const securityPolicy = `<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src https: data:; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'none'; form-action 'none'; base-uri 'none'">`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8">${securityPolicy}<meta name="viewport" content="width=device-width, initial-scale=1"><style>
    * { box-sizing: border-box; }
    body { margin: 0; padding: 20px; color: #172522; background: #fff; font: 15px/1.5 system-ui, sans-serif; }
    img { max-width: 100%; height: auto; }
    button, input { font: inherit; }
    .css-preview > * { margin: 0 0 12px; }
    .css-preview .card, .css-preview .notice, .css-preview .swatch, .css-preview .item, .css-preview .relative, .js-preview .card, .js-preview .box { padding: 12px; border: 1px solid #dce4dc; }
    .css-preview .relative { position: relative; }
    .css-preview .row, .css-preview .grid { display: flex; gap: 8px; }
    .css-preview .badge { display: inline-block; }
    .js-preview { display: grid; gap: 12px; }
    .js-preview h1, .js-preview p, .js-preview ul { margin: 0; }
    #console-output:empty { display: none; }
  </style><style>${previewStyles}</style></head><body>${markup}<script>${previewScripts}</script><script>
    const reportPreviewHeight = () => parent.postMessage({ type: 'preview-height', height: document.documentElement.scrollHeight }, '*');
    new ResizeObserver(reportPreviewHeight).observe(document.documentElement);
    window.addEventListener('load', reportPreviewHeight);
    reportPreviewHeight();
  </script></body></html>`;
}

function renderGuide() {
  const key = new URLSearchParams(window.location.search).get('week') || 'week2';
  const guide = guideData[key] || guideData.week2;
  const nav = document.querySelector('#week-nav');
  const content = document.querySelector('#guide-content');

  nav.innerHTML = weekLinks.map(([id, number, title]) => `<a class="guide-nav-link" href="guide.html?week=${id}" ${id === key ? 'aria-current="page"' : ''}><span>${number}</span><span>${title}</span></a>`).join('');

  const preview = (title, sample) => `<div class="output-preview"><iframe title="${escapeHTML(title)} output" sandbox="allow-scripts" srcdoc="${escapeHTML(createPreviewDocument(sample))}"></iframe></div>`;
  const exercises = guide.exercises.map(([number, title, , answer]) => `<article class="exercise" id="${number.toLowerCase()}"><h3><span>${number}</span>${escapeHTML(title)}</h3>${preview(title, answer)}</article>`).join('');

  content.innerHTML = `<header class="guide-hero"><div class="guide-kicker"><span>K0126002</span><span>${guide.number}</span><span>Gachon University</span></div><h1>${escapeHTML(guide.title)}</h1></header><section class="guide-section exercise-section" id="exercises"><h2>Task output</h2>${exercises}</section>`;

  window.addEventListener('message', event => {
    if (event.data?.type !== 'preview-height') return;
    const frame = [...content.querySelectorAll('.output-preview iframe')]
      .find(previewFrame => previewFrame.contentWindow === event.source);
    const height = Number(event.data.height);
    if (frame && Number.isFinite(height)) {
      frame.style.height = `${Math.max(120, Math.min(height, 1800))}px`;
    }
  });

  document.title = `${guide.title} · Course Workbook`;
}

renderGuide();
