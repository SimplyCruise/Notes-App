import React from 'react'; 
import { useState } from 'react';
const AddNote = () => {
   const [noteText, setNoteText] = useState('');
   const characterLimit = 200;

   const handlechange = (e) => {
    if(characterLimit - event.target.value.length >= 0)
    setNoteText(e.target.value);
   };

   const handleSaveCLick = () => {
    if(noteText.trim().length > 0){
       /* handleAddNote(noteText);*/
        setNoteText('');
    }};

    return(
        <div className="note new">
            <textarea 
            rows="8"
            cols='10'
            placeholder="Type to add a new note...."
            onChange={handlechange}
            ></textarea>
            <div className="note-footer">
                <small>{characterLimit - noteText.length} Remaining</small>
                <button className="save" onClick={handleSaveCLick}>save</button>
            </div>
        </div>
    );
};

export default AddNote;