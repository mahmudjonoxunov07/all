import { useState } from 'react';
import FilterBar from './FilterBar.jsx';
import ProjectList from './ProjectList.jsx';
import { projects } from '../data/projects.js';

function PortfolioProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [shortlist, setShortlist] = useState([]);
  const categories = [
    'All',
    ...new Set(projects.flatMap((project) => project.techStack)),
  ];
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.techStack.includes(activeFilter));

  function toggleShortlist(projectId) {
    setShortlist((current) =>
      current.includes(projectId)
        ? current.filter((id) => id !== projectId)
        : [...current, projectId],
    );
  }

  function clearShortlist() {
    setShortlist([]);
  }

  return (
    <div className="portfolio-gallery">
      <div className="project-toolbar">
        <FilterBar
          categories={categories}
          activeFilter={activeFilter}
          onSelectFilter={setActiveFilter}
        />
        <div className="shortlist-summary" aria-live="polite">
          <p className="project-count">
            Showing {visibleProjects.length} of {projects.length} projects
          </p>
          {shortlist.length > 0 && (
            <>
              <span className="shortlist-count">{shortlist.length} shortlisted</span>
              <button className="shortlist-clear" type="button" onClick={clearShortlist}>Clear</button>
            </>
          )}
        </div>
      </div>
      <ProjectList
        projects={visibleProjects}
        shortlist={shortlist}
        onToggleShortlist={toggleShortlist}
      />
    </div>
  );
}

export default PortfolioProjects;
