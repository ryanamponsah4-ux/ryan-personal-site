let triggerElement = null;

function getFocusableElements(container) {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
}

function trapFocus(event) {
  const modal = document.getElementById('project-modal');
  const focusable = getFocusableElements(modal);
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.key === 'Tab') {
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  if (event.key === 'Escape') {
    closeModal();
  }
}

export function openModal(project, cardElement) {
  const modal = document.getElementById('project-modal');
  triggerElement = cardElement;

  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-category').textContent = project.categoryLabel;
  document.getElementById('modal-description').textContent = project.description;
 
  const modalImage = document.getElementById('modal-image');
if (modalImage) {
  modalImage.src = project.image;
  modalImage.alt = project.title;
}
  modal.hidden = false;
  document.addEventListener('keydown', trapFocus);

  const closeButton = document.getElementById('modal-close');
  closeButton.focus();
}

export function closeModal() {
  const modal = document.getElementById('project-modal');
  modal.hidden = true;
  document.removeEventListener('keydown', trapFocus);

  if (triggerElement) {
    triggerElement.focus();
    triggerElement = null;
  }
}

export function initModal() {
  const modal = document.getElementById('project-modal');
  if (!modal) return;

  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
}