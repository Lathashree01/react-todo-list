export function DeleteTodo({ todo, setTodos }) {
    function handleDeleteTodo() {
        
        const confirmed = window.confirm("Do you want to delete this?");
        if (confirmed) {
            setTodos(prevTodos => {
                return prevTodos.filter((t) => t.id !== todo.id);
            }
            )
        }
    }

    return (
        <span role="button"
            onClick={handleDeleteTodo}
            style={{
                color: 'red',
                fontWeight: 'bold',
                marginLeft: 10
            }}>
            x
        </span>
    );
}
