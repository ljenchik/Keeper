export default function Textarea(props) {
  return (
    <textarea
      name="content"
    //   value={note.content}
      placeholder="Take a note..."
      rows={props.rows}
    //   onChange={handleChange}
    />
  );
}
