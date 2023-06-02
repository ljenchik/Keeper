import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Textarea from "./Textarea";

export default function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });
  const [expanded, setExpanded] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setNote({ ...note, [name]: value });
  };

  const handleAddNote = () => {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    setExpanded(false);
  };

  const handleExpansion = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {expanded &&
            <input
              name="title"
              placeholder="Title"
              value={note.title}
              onChange={handleChange}
            /> }
            
            <textarea
              name="content"
              value={note.content}
              placeholder="Take a note..."
              rows={expanded ? 3 : 1}
              onChange={handleChange}
              onClick={handleExpansion}
            />
            <Zoom in={expanded ? true : false} >
              <Fab type="button" onClick={handleAddNote}>
                <AddIcon />
              </Fab>
            </Zoom>
      </form>
    </div>
  );
}
