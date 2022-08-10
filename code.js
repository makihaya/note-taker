function createNote(){
    const deleteNote = document.createElement("span");
      deleteNote.innerHTML = "🗑";
      deleteNote.classList.add("delete-p");
    
    const noteDisplay = document.getElementById("note-display");
    const note = document.createElement("textarea");
      note.classList.add("note");
    
    const colorChoice = document.getElementById("select-color");
    const color = colorChoice.options[colorChoice.selectedIndex].text;
  
    if(color == "White"){
       note.classList.add("white");
    } else if (color == "Pink"){
       note.classList.add("pink");
    } else if (color == "Yellow"){
       note.classList.add("yellow");
    } else if (color == "Green"){
       note.classList.add("green");
    } else if (color == "Blue"){
       note.classList.add("blue");
    } else if (color == "Purple"){
       note.classList.add("purple");
    }
   
    noteDisplay.appendChild(note);
    noteDisplay.appendChild(deleteNote);
   
    deleteNote.addEventListener("click", ()=>{
      noteDisplay.removeChild(note);
      noteDisplay.removeChild(deleteNote);
    });
  };
  
  
  clear.addEventListener("click", ()=>{
    document.getElementById("note-display").innerHTML = "";
  });
  