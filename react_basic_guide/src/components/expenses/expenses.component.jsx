import ExpenseItem from '../expenseItem/expense-item.component';
import './expenses.styled.scss';

const Expenses = ({ expenses }) => (
  <div className='expenses'>
    {expenses.map(expense => (
      <ExpenseItem {...expense} />
    ))}
  </div>
);
export default Expenses;
