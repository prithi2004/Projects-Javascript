function addNote() {
  const noteInput = document.getElementById('noteInput');
  const notesContainer = document.getElementById('notesContainer');
  const noteText = noteInput.value.trim();
  if (noteText) {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      <span>${noteText}</span>
      <button class="delete-btn" onclick="deleteNote(this)">X</button>
    `;
    notesContainer.appendChild(noteDiv);
    noteInput.value = '';
    saveNotes();
  }
}

function deleteNote(btn) {
  btn.parentElement.remove();
  saveNotes();
}

function saveNotes() {
  const notes = [];
  document.querySelectorAll('.note span').forEach(note => {
    notes.push(note.textContent);
  });
  localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || '[]');
  notes.forEach(noteText => {
    const noteDiv = document.createElement('div');
    noteDiv.className = 'note';
    noteDiv.innerHTML = `
      <span>${noteText}</span>
      <button class="delete-btn" onclick="deleteNote(this)">X</button>
    `;
    document.getElementById('notesContainer').appendChild(noteDiv);
  });
}

window.onload = loadNotes;
