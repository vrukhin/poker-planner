import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <h1>Poker Planner</h1>
    <Vote></Vote>
    </>
  )
}

function Poker() {}

function Vote({ taskKey }) {
  taskKey = "KEY-XXX";
  return(
    <>
    <h2>Vote for task: { taskKey }</h2>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    <Voter></Voter>
    </>
  );
}

function Voter({ username }) {
  username = "username";
  return(
    <div className='voter'>
      <h3>{username}</h3>
      <div className='vote-buttons'>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
        <VoteButton></VoteButton>
      </div>
    </div>
  );
}

function VoteButton(){
  // possible values: 1, 2, 3, 5, 8, 13, 20, 40
  return (
    <button className='vote-button'>{"0"}</button>
  );
}

export default App
