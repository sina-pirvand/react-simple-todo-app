import { useState } from "react";

const AddNewNote = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = {
      title, //title:title
      description, //description:description
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="text-field"
          placeholder="Note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-field"
          placeholder="Note description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn--primary">Add Note</button>
      </form>
    </div>
  );
};
export default AddNewNote;
