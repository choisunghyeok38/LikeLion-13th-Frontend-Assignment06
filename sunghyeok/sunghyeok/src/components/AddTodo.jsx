import { useState } from 'react';
import { addTodo, fetchTodos } from '../api/todoApi';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Form = styled.form`
    background-color: aliceblue;
    width: 500px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

const Button = styled.button`
    background-color: lightblue;
`;

const getFormattedDate = () => {
    return new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true
    }).format(new Date());
};

function AddTodo() {
    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const [writer, setWriter] = useState('');
    const [date] = useState(getFormattedDate());

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim() || !writer.trim() || !task.trim()) {
            alert('모든 항목을 입력하세요');
            return;
        }

        const newTodo = {
            fields: {
                name: title,
                content: task,
                writer: writer,
                date: date,
            }
        };

        try {
            await addTodo(newTodo);
            const data = await fetchTodos();
            console.log('과제 등록 성공!', JSON.stringify(data, null, 2));
            navigate('/');
        } catch (error) {
            console.error('등록실패ㅠㅠ', error);
        }
    };

    return (
        <div>
            <h2>과제 등록</h2>
            <Form onSubmit={handleSubmit}>
                제목:<br />
                <input type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <br />
                작성자: <br />
                <input type="text"
                value={writer}
                onChange={(e) => setWriter(e.target.value)}
                />
                <br />
                내용: <br />
                <input type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)} 
                /> <br />
                <Button type='submit'>등록</Button>
            </Form>
        </div>
    );
}



export default AddTodo;