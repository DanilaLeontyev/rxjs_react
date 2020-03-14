import React, { useState, useEffect } from 'react'
import { BehaviorSubject } from 'rxjs'

const counter$ = new BehaviorSubject(0);

const inc = (bs: BehaviorSubject<number>) => {
  console.log(bs.getValue());
  bs.next(bs.getValue() + 1);
}

const dec = (bs: BehaviorSubject<number>) => bs.next(bs.getValue() - 1);

const IncBtn = ({ bs }: { bs: BehaviorSubject<number> }) => <button value="+" onClick={() => inc(bs)} />
const DecBtn = ({ bs }: { bs: BehaviorSubject<number> }) => <button value="-" onClick={() => dec(bs)} />

const Counter = ({ bs }: { bs: BehaviorSubject<number> }) => {
  const [counter, setCounter] = useState(bs.getValue());
  useEffect(() => {
    console.log('subscribing');
    const sub = bs.subscribe((val) => {
      console.log(val);
      setCounter(val);
    });

    return () => sub.unsubscribe();
  }, [bs])
  return (
    <>
      {counter}
      <IncBtn bs={bs} />
      <DecBtn bs={bs} />
      <button onClick={() => setCounter(counter + 1)} />
    </>
  )
}
function App() {
  return (
    <div className="App">
      <Counter bs={counter$} />
    </div>
  );
}