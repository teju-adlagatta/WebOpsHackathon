//import logo from './logo.svg';
import FlashcardList from './FlashcardList.js';
import './app.css';
import React, {useState} from 'react'; 

function App() {
  const[flashcards, setFlashcards]= useState(SAMPLE_FLASHCARDS)
  return (
   
   <FlashcardList flashcards={flashcards} />

  );
}
const SAMPLE_FLASHCARDS=[
  {
    id:1,
    question: 'what is 2+2?' ,
    answer: '4',
    options:[
      '2',
      '3',
      '4',
      '5'
    ]
  },

  {
    id:2,
    question: 'what is 2-2?' ,
    answer: '0',
    options:[
      '1',
      '2',
      '3',
      '0'
    ]
  }
]

export default App;

