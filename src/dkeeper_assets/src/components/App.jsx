import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import {dkeeper} from "../../../declarations/dkeeper";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes((prevValue) => {
      dkeeper.createNote(note.title,note.content);
      return [note,...prevValue];
    });
  }

  useEffect(()=>{
    fetchData();
  },[]);

  async function fetchData(){
    const notesArray = await dkeeper.readNotes(); 
    setNotes(notesArray);
  }
  
  function deleteNote(id) {
    setNotes((prevValue) => {
      dkeeper.removeNote(id);
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <CreateArea addNotes={addNotes} />
        {notes.map((note, index) => (
          <Note
            key={index}
            id={index}
            deleteNote={deleteNote}
            title={note.title}
            content={note.content}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
