import React from "react";
import "./ExpenseItem.css";
import { ExpenseDate } from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ id, title, amount, date }) => {
  return (
    <>
      {
        <Card className="expense-item" key={id}>
          <div>
            <ExpenseDate date={date} />
          </div>
          <div className="expense-item__description">
            <h2>{title}</h2>
          </div>
          <div className="expense-item__price">{`$${amount}`}</div>
        </Card>
      }
    </>
  );
};

export default ExpenseItem;
