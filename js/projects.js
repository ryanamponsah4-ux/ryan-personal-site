export const projects = [
  {
    id: 1,
    title: 'RyanVisuals — Brand Identity',
    category: 'branding',
    categoryLabel: 'Branding',
    description: 'A complete visual identity concept exploring logo design, typography, color direction, and a consistent brand system.',
    image: 'assets/images/project1.jpg'
  },
  {
    id: 2,
    title: 'GREEN EXPO \'26 — Campaign Design',
    category: 'marketing-advertising',
    categoryLabel: 'Marketing & Advertising Design',
    description: 'A visual campaign concept created for a school environmental event, including promotional graphics and a cohesive event identity.',
    image: 'assets/images/project2.jpg'
  },
  {
    id: 3,
    title: 'Ryan Personal Site — Portfolio Development',
    category: 'web-development',
    categoryLabel: 'Web Development',
    description: 'A responsive personal portfolio built from scratch with semantic HTML, custom CSS, and JavaScript.',
    image: 'assets/images/project3.jpg'
  }
];

function createCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.dataset.category = project.category;
  card.dataset.id = project.id;
  card.tabIndex = 0;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View details for ${project.title}`);

  card.innerHTML = `
    <img
      class="project-card__image"
      src="${project.image}"
      alt="${project.title}"
      loading="lazy"
      width="400"
      height="250"
    >
    <div class="project-card__body">
      <h3 class="project-card__title">${project.title}</h3>
      <p class="project-card__category">${project.categoryLabel}</p>
    </div>
  `;

  return card;
}

export function renderCards(list = projects) {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = '';

  if (list.length === 0) {
    grid.innerHTML = '<p class="projects__empty">No projects match your search.</p>';
    return;
  }

  list.forEach(project => {
    grid.appendChild(createCard(project));
  });
}

export function initProjects() {
  renderCards();
}

function filterProjects(searchTerm, category) {
  return projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'all' || project.category === category;
    return matchesSearch && matchesCategory;
  });
}

function handleFilterChange() {
  const searchInput = document.getElementById('project-search');
  const categorySelect = document.getElementById('project-category');

  const searchTerm = searchInput.value;
  const category = categorySelect.value;

  const filtered = filterProjects(searchTerm, category);
  renderCards(filtered);
}

function initFilterControls() {
  const controls = document.querySelector('.projects__controls');
  if (!controls) return;

  controls.addEventListener('input', handleFilterChange);
  controls.addEventListener('change', handleFilterChange);
}