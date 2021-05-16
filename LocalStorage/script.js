showNotes();
var addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {
  e.preventDefault();

  let addMessage = document.getElementById('message');

  if (addMessage.value === '') {
    alert('No Notes added');
  } else {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
      notesObj = [];
    } else {
      notesObj = JSON.parse(notes);
    }

    notesObj.push(addMessage.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));

    addMessage.value = '';

    showNotes();
  }
});

function showNotes() {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  let html = '';
  notesObj.forEach(function (element, index) {
    html += `<div class="col-6 mt-2">
        <div class="card">
            <div class="card-body">
              <h5 class="card-title">Note ${index + 1}</h5>
              <p class="card-text">${element}</p>
              <a href="#" class="btn btn-danger" id=${index} onclick="deleteNote(this.id)">Delete Note</a>
            </div>
        </div>
    </div>`;
  });

  let notesElm = document.getElementById('notes');
  if (notesObj.length !== 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `<div class="col-6 mt-2">No Notes Available</div>`;
  }
}

//delete note
function deleteNote(index) {
  let notes = localStorage.getItem('notes');

  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notesObj));
  showNotes();
}
