export default function (state, action) {
    switch (action.type) {

        case 'add':
            return [
                ...state,
                {
                    isDone: false,
                    title: action.payload.title,
                    priority: 'NONE',
                    key: action.payload.key,
                    id: action.payload.key,
                }
            ]

        case 'handleCheck':
            return state.map(todo => {
                if (todo.id === action.payload) todo.isDone = !todo.isDone;
                return todo;
            });

        case 'remove':
            return state.filter(todo => todo.id !== action.payload);

        case 'changePriority':
            return state.map(todo => {
                if (todo.id === action.payload.id) todo.priority = action.payload.priority;
                return todo;
            });

        default:
            return state;
    }
}