import Message from "../Message";

const NoteStatusBar = ({ notes }) => {
  const allNotes = notes.length;
  const completedNotes = notes.filter((note) => note.completed).length;
  const pendingNotes = allNotes - completedNotes;

  if (!allNotes) return <Message>No Todo Added Yet.</Message>;
  return (
    <ul className="note-status">
      <li>
        All <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Pending <span>{pendingNotes}</span>
      </li>
    </ul>
  );
};
export default NoteStatusBar;
