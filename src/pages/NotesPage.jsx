import { useState } from "react";
import { fakeData } from "../assets/fakeData";
import NoteCard from "../components/NoteCard";

const NotesPage = () => {
  const [notes, setNotes] = useState(fakeData);

  return (
    <div>
      {notes.map((note) => (
        <NoteCard
          key={note.$id}
          note={note}
          notes={notes}
          setNotes={setNotes}
        />
      ))}
    </div>
  );
};

export default NotesPage;
