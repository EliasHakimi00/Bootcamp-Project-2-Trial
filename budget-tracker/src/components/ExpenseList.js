// import React from 'react';
// import ExpenseItem from './ExpenseItem';

// const ExpenseList = () => {
//     const expenses = [
//         {id:1231222, name: "Clothes Shopping", cost: 50},
//         {id:1231222, name: "Grocery Shopping", cost: 250},
//         {id:1231222, name: "Transportation", cost: 70},
//         {id:1231222, name: "Fuel", cost: 40},
//         {id:1231222, name: "Rent", cost: 750},
//         {id:1231222, name: "Miscellaneous", cost: 20},
//         {id:1231222, name: "Child Care", cost: 180},
//     ];

//     return (
//         <ul className='list-group'>
//             {expenses.map((expense) => (
//                 <ExpenseItem 
//                     id={expense.id}
//                     name={expense.name}
//                     cost={expense.cost} />
//             ))} 
//         </ul>
//     )
// }

// export default ExpenseList

import React, { useContext, useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { expenses } = useContext(AppContext);

	const [filteredExpenses, setfilteredExpenses] = useState(expenses || []);

	useEffect(() => {
		setfilteredExpenses(expenses);
	}, [expenses]);

	const handleChange = (event) => {
		const searchResults = expenses.filter((filteredExpense) =>
			filteredExpense.name.toLowerCase().includes(event.target.value)
		);
		setfilteredExpenses(searchResults);
	};

	return (
		<>
			<input
				type='text'
				class='form-control mb-2 mr-sm-2'
				placeholder='Type to search...'
				onChange={handleChange}
			/>
			<ul class='list-group mt-3 mb-3'>
				{filteredExpenses.map((expense) => (
					<ExpenseItem
						id={expense.id}
						name={expense.name}
						cost={expense.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;