import { useState, ùseState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value || !category) return;
        addTodo(value, category);
        setValue('');
        setCategory('');

        console.log(value, category);
    };

    return (
        <div className="todoForm">
            <h2>Create tasks</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter the title"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="">Choose a category</option>
                    <option value="Work">Work</option>
                    <option value="Personal">Personal</option>
                    <option value="Studies">Studies</option>
                </select>
                <button>Create</button>
            </form>
        </div>
    );
};

export default TodoForm;
