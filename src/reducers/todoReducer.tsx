interface Todo {
    id: number;
    text: string;
  }
  
  interface TodoState {
    todos: Todo[];
  }
  
  const initialState: TodoState = {
    todos: [],
  };
  
  const todoReducer = (state = initialState, action: { type: string; payload?: any }): TodoState => {
    switch (action.type) {
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'REMOVE_TODO':
        return { ...state, todos: state.todos.filter(todo => todo.id !== action.payload) };
      default:
        return state;
    }
  };
  
  export default todoReducer;
  