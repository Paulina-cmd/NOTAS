function TaskList({ tasks, onDelete, onEdit }) {
  const listStyle = {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#f4f4f4",
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "10px",
  };

  const buttonEdit = {
    padding: "6px 10px",
    marginRight: "10px",
    background: "#2196f3",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const buttonDelete = {
    padding: "6px 10px",
    background: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <ul style={listStyle}>
      {tasks.map((task) => (
        <li key={task.id} style={itemStyle}>
          <span>{task.title}</span>

          <div>
            <button style={buttonEdit} onClick={() => onEdit(task)}>
              Editar
            </button>

            <button style={buttonDelete} onClick={() => onDelete(task.id)}>
              Eliminar
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
