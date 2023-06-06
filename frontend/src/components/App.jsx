import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState, useEffect } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      fetch(`http://localhost:3001/notes`, {
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (response) => {
        if (response.ok) {
          const notesList = await response.json();
          setNotes(notesList);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addNote = async (note) => {
    try {
      await fetch("http://localhost:3001/notes", {
        method: "POST",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        if (response.ok) {
        const data = await response.json();
        const note =  {title: data.title, content: data.content}
        setNotes([...notes, note]);
        }
        else {
          console.log("Bad response!");
        }
      })
    } catch (error) {
      return error;
    }
  };

  const deleteNote = async (id, note) => {
    try {
      await fetch("http://localhost:3001/notes", {
        method: "DELETE",
        body: JSON.stringify(note),
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then (async (response) => {
        if (response.ok) {
          const newNotes = notes.filter((item, index) => index !== id);
          setNotes(newNotes);
        }
        else {
          console.log("Bad response!");
        }
      })
    } catch (error) {
      return error;
    }
  };

  if (notes) {
    return (
      <div>
        <Header />
        <CreateArea onAdd={addNote} />
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            onDelete={() => deleteNote(index, note)}
          />
        ))}
        <Footer />
      </div>
    );
  } else {
    return <h1>Loading ...</h1>;
  }
}
