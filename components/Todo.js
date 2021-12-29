import { IconButton, ListItem, ListItemText } from '@mui/material'
import { deleteDoc, doc } from '@firebase/firestore'
import { useContext } from 'react'
import moment from 'moment'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreVerticon from '@mui/icons-material/MoreVert'
import { db } from '../firebase'
import { TodoContext } from '../pages/TodoContext'
const Todo = ({ id, timestamp, title, detail }) => {
  const { showAlert, todo, setTodo } = useContext(TodoContext)
  const deleteTodo = async (id, e) => {
    e.stopPropagation()
    const docRef = doc(db, 'todos', id)
    await deleteDoc(docRef)
    showAlert('error', `Todo with id ${id} deleted successfully`)
  }
  return (
    <ListItem
      onClick={() => setTodo({ id, title, detail, timestamp })}
      sx={{ mt: 3, boxShadow: 3 }}
      style={{ backgroundColor: '#fafafa' }}
      secondaryAction={
        <>
          <IconButton onClick={(e) => deleteTodo(id, e)}>
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <MoreVerticon />
          </IconButton>
        </>
      }
    >
      <ListItemText
        primary={title}
        secondary={moment(timestamp).format('MMMM do, yyyy')}
      />
    </ListItem>
  )
}

export default Todo
