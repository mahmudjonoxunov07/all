function ProjectCard({
  title,
  description,
  techStack,
  githubLink,
  demoLink,
  caseStudyLink,
  domain,
  number,
  id,
  isShortlisted = false,
  onToggleShortlist,
}) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-category">{domain}</span>
        <span className="project-number">{number}</span>
      </div>
      <div className="project-details">
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <ul className="project-tech-list" aria-label={`${title} technologies`}>
            {techStack.map((technology) => (
              <li className="project-tech-tag" key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
        <div className="project-actions">
          {onToggleShortlist && (
            <button
              className="project-shortlist-button"
              type="button"
              aria-pressed={isShortlisted}
              onClick={() => onToggleShortlist(id)}
            >
              <span aria-hidden="true">{isShortlisted ? '−' : '+'}</span>
              {isShortlisted ? 'Shortlisted' : 'Shortlist'}
            </button>
          )}
          {caseStudyLink ? (
            <a
              className="project-link"
              href={caseStudyLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Read the ${title} case study`}
            >
              <span>Case study</span>
              <span aria-hidden="true">↗</span>
              <span className="visually-hidden"> (opens in a new tab)</span>
            </a>
          ) : (
            <>
              {githubLink && (
                <a
                  className="project-link"
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} on GitHub`}
                >
                  <span>GitHub</span>
                  <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              )}
              {demoLink && (
                <a
                  className="project-link"
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${title}`}
                >
                  <span>Live project</span>
                  <span aria-hidden="true">↗</span>
                  <span className="visually-hidden"> (opens in a new tab)</span>
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
