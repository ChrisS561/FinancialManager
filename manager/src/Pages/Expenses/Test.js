import React from 'react'
import Expenses from "./Expenses" 
import "./Test.css"



export default function Test(props) {
  return (
    <div className='expenses'>
    <Expenses
    title={props.items[0].title}
    amount={props.items[0].amount}
    date={props.items[0].date}
    />
    <Expenses
    title={props.items[1].title}
    amount={props.items[1].amount}
    date={props.items[1].date}
    />
    <Expenses
    title={props.items[2].title}
    amount={props.items[2].amount}
    date={props.items[2].date}
    />
     <Expenses
    title={props.items[3].title}
    amount={props.items[3].amount}
    date={props.items[3].date}
    />
    </div>
  )
}
