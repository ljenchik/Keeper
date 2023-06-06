import DeleteIcon from '@mui/icons-material/Delete';

export default function Note(props) {

const handleDelete = () => {
    props.onDelete(props.index);
}

    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button type="button" onClick={handleDelete}><DeleteIcon /></button>
        </div>
    )
}