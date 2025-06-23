import { useEffect, useState } from 'react';
import { fetchTodos } from '../api/todoApi';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: aliceblue;
  padding: 20px;
  width: 500px;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  width: 450px;
`;

const StyledLi = styled.li`
  background-color: white;
  border-radius: 10px;
  
`;


function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data.records || []);
    };
    loadTodos();
  }, []);

  return (
    <Container> 
      <h2>투두 리스트</h2>
      <StyledUl>
        {todos.map((item, index) => (
          <StyledLi key={item.id || index}>
            <hr />
            <strong>제목:</strong> {item.fields?.name}  <br />
            <strong>내용:</strong> {item.fields?.content}  <br />
            <strong>작성자:</strong> {item.fields?.writer}  <br />
            <strong>작성일:</strong> {new Date(item.createdTime).toLocaleString('ko-KR')}
            <hr />
          </StyledLi>
        ))}
      </StyledUl>
    </Container> 
  );
}

export default TodoList;
