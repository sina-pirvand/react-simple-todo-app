const NoteList = ({ notes, deleteNote, completeNote }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          deleteNote={deleteNote}
          completeNote={completeNote}
        />
      ))}
    </div>
  );
};

const NoteItem = ({ note, deleteNote, completeNote }) => {
  return (
    <div className={`note-item ${note.completed ? "completed" : ""}`}>
      <div className="note-item__header">
        <div>
          <p className="title">{note.title}</p>
          <p className="desc">{note.description}</p>
        </div>
        <div className="actions">
          <button onClick={() => deleteNote(note.id)}>❌</button>
          <input
            type="checkbox"
            name={note.title}
            id={note.id}
            value={note.id}
            checked={note.completed}
            onClick={() => {
              completeNote(note.id);
            }}
          />
        </div>
      </div>
      <div className="note-item__footer">
        {new Date(note.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
};
export default NoteList;
