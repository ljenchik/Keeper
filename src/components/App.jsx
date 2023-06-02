import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {  useState } from "react";


export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note, index) => index !== id));
  }


  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => <Note key={index} index={index} title={note.title} content={note.content} onDelete={() => deleteNote(index)}/> )}
      <Footer />
    </div>
  );
}
