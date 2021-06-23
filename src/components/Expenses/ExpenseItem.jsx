import React from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ expenses }) => {
  const renderedItems = expenses.map((expense) => (
    <Card className="expense-item" key={expense.id}>
      <div>
        <ExpenseDate date={expense.date} />
      </div>
      <div className="expense-item__description">
        <h2>{expense.title}</h2>
      </div>
      <div className="expense-item__price">{`$${expense.amount}`}</div>
    </Card>
  ));

  return <>{renderedItems}</>;
};

export default ExpenseItem;
