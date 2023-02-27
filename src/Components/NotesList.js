import React from 'react';
import Note from './Note';
import AddNote from './AddNotes';


const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {

    return (

        <div className="notes-list">
            {notes.map((note) => (
                <Note
                    id={notes.id}
                    text={notes.text}
                    date={notes.date}
                    handleDeleteNote={handleDeleteNote}
                />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;