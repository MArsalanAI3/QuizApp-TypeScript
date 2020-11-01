import React from 'react';

export type Quiz = {
    category: string
    type: string
    difficulty: string
    question: string
    correct_answer: string
    incorrect_answers: string[]
}

export type QuestionType ={
    question:string;
    answer:string;
    option:string[]
    correct_answer: string

}

export type questionPropsType={
    question:string
    options:string[]
    callback:(e:React.FormEvent<EventTarget> , ans:string)=>void
}
