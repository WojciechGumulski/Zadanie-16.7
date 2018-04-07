import React from 'react';
import style from './TodoList.css';
import Item from '../components/Todo';

const TodoList = props => {
  	const listElements = props.list.map(element =>
  		<Item key={element.id} id={element.id} remove={props.clear.bind(this)} name={element.text} />)
  		return (
    	<ol className={style.TodoList}>{listElements}</ol>
  		)
}

export default TodoList;