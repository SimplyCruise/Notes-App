import React from 'react'
import { useState } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './Components/NotesList';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: '15/02/2023',
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: '19/02/2023',
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: '25/02/2023',
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: '27/02/2023',
    },
  ]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      text:text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
   const newNotes = notes.filter(()=> notes.id !== id);
    setNotes(newNotes)
  }

  return (
    <div className='container'>
      <NotesList notes={notes}
       handleAddNote={addNote}
        />
    </div>
  )

};

export default App;