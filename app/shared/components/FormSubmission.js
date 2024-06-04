"use client"
import React, { useEffect, useState } from 'react';
import BlueGradient from './BlueGradient';
import OrangeGradient from './OrangeGradient';
import Image from 'next/image';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { getFormApi } from '../api';
import Modal from '@/app/shared/components/Modal';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const FormSubmission = ({ name, orderHideHandler, id }) => {
    const [form, setForm] = useState(null);
    const [data, setData] = useState({
        response: [],
        email: "",
        username: "",
        selected: name,
        key: id
    });
    const [otherAnswers, setOtherAnswers] = useState([]);
    const [questionStates, setQuestionStates] = useState([]);
    const OTHER_OPTION = "Other";



    const clickHandlerOne = (questionIndex) => {
        const updatedStates = [...questionStates];
        updatedStates[questionIndex] = true;
        setQuestionStates(updatedStates);
    };

    const closeHandlerOne = (questionIndex) => {
        const updatedStates = [...questionStates];
        updatedStates[questionIndex] = false;
        setQuestionStates(updatedStates);
    };

    useEffect(() => {
        getFormApi({ id: id }).then(res => {
            setForm(res);
            const initialResponses = res.form.map((question, index) => ({
                question: question.question,
                en_answer: question.answer[0]?.answer || ""
            }));
            setData(prevData => ({
                ...prevData,
                response: initialResponses
            }));
            setQuestionStates(Array(res.form.length).fill(false));
        });
    }, [id]);

    const handleChange = (questionIndex, answerIndex, otherValue = "") => {
        const selectedQuestion = form.form[questionIndex].question;
        let selectedAnswer;

        if (answerIndex === -1) {
            selectedAnswer = otherValue;
        } else {
            selectedAnswer = form.form[questionIndex].answer[answerIndex].answer;
        }

        setData(prevData => {
            const updatedResponse = [...prevData.response];
            updatedResponse[questionIndex] = {
                question: selectedQuestion,
                en_answer: selectedAnswer
            };
            return {
                ...prevData,
                response: updatedResponse
            };
        });

        if (answerIndex === -1) {
            setOtherAnswers(prevOtherAnswers => {
                const updatedOtherAnswers = [...prevOtherAnswers];
                updatedOtherAnswers[questionIndex] = otherValue;
                return updatedOtherAnswers;
            });
        }
    };
    const handleSave = async () => {
        try {
            const response = await axios.post("https://api-one-global.code-ox.com/api/form-submit", data, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
                    "Access-Control-Allow-Credentials": true
                }
            });

            if (response.data.success) {
                enqueueSnackbar('Request successful!', { variant: 'success', anchorOrigin: { vertical: "top", horizontal: "right" } });
                setData({
                    response: [],
                    email: "",
                    username: "",
                    selected: name,
                    key: id
                });
                orderHideHandler();
            } else {
                enqueueSnackbar('Request failed. Please try again.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
            }
        } catch (error) {
            console.log(error);
            enqueueSnackbar('An error occurred. Please try again.', { variant: 'error', anchorOrigin: { vertical: "top", horizontal: "right" } });
        }
    };

    return (
        <Modal hideHandler={orderHideHandler} className='relative z-50'>
            <div className="flex item-center justify-center relative z-50">
                <div className='absolute mt-36 -left-12 h-[300px] w-[300px] md:block hidden -z-10'>
                    <BlueGradient />
                </div>
                <div className="block p-5">
                    <div className="flex justify-center items-center">
                        <Image src='/og_logo.png' alt="" className="w-28" width={100} height={100} />
                    </div>
                    <div className="md:w-[650px] mt-4">
                        <p className="md:text-[30px] text-[18px] font-medium text-center leading-[29px] text-[#4C4C4D]">{"Hi, thank you for your interest in our course. We'd like to ask some questions before we proceed with the next step."}</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="block p-3 mt-4">
                            <div>
                                {form?.form?.map((question, questionIndex) => (
                                    <div key={questionIndex}>
                                        {!questionStates[questionIndex] && (
                                            <div onClick={() => clickHandlerOne(questionIndex)} className='w-full lg:w-[510px] h-12 border rounded-full border-[#242222] pl-1 lg:pl-2 lg:pr-5 md:pr-1 pr-1 font-medium text-[#4C4C4D] md:justify-start justify-center items-center mb-4 sm:text-base bg-white flex'>
                                                <p className='w-full lg:h-auto md:text-[14px] text-[13px] leading-tight p-2 font-bold'>{question.question}</p>
                                                <p><IoMdArrowDropdown className="h-6 w-6" /></p>
                                            </div>
                                        )}
                                        {questionStates[questionIndex] && (
                                            <div className='w-full lg:w-[510px] h-full border rounded-2xl border-[#242222] pl-1 lg:pl-2 lg:pr-5 md:pr-1 pr-1 font-medium text-[#4C4C4D] md:justify-start mb-4 sm:text-base bg-white'>
                                                <div className="justify-center items-center flex">
                                                    <p className='w-full lg:h-auto md:text-[14px] text-[13px] leading-tight p-2 font-bold'>{question.question}</p>
                                                    <p><IoMdArrowDropup onClick={() => closeHandlerOne(questionIndex)} className="h-6 w-6" /></p>
                                                </div>
                                                {question.answer.map((ans, ansIndex) => (
                                                    <div key={ansIndex} className="ml-3 p-2 md:text-[14px] text-[13px]">
                                                        <div className="font-bold flex items-center gap-4">
                                                            <input
                                                                type="radio"
                                                                name={`question-${questionIndex}`}
                                                                value={ans.answer}
                                                                checked={data.response[questionIndex]?.en_answer === ans.answer}
                                                                onChange={() => handleChange(questionIndex, ansIndex)}
                                                            />
                                                            <h3>{ans.answer}</h3>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="ml-3 p-2 md:text-[14px] text-[13px]">
                                                    <div className="font-bold flex items-center gap-4">
                                                        <input
                                                            type="radio"
                                                            name={`question-${questionIndex}`}
                                                            value={OTHER_OPTION}
                                                            checked={data.response[questionIndex]?.en_answer === otherAnswers[questionIndex]}
                                                            onChange={() => handleChange(questionIndex, -1)}
                                                        />
                                                        <h3>{OTHER_OPTION}</h3>
                                                    </div>
                                                    {data.response[questionIndex]?.en_answer === otherAnswers[questionIndex] && (
                                                        <input
                                                            type="text"
                                                            value={otherAnswers[questionIndex]}
                                                            onChange={(e) => handleChange(questionIndex, -1, e.target.value)}
                                                            className="border rounded p-2 w-full mt-2"
                                                            placeholder="Enter your answer"
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-5">
                        <input type="text" name="name" placeholder="Enter your name" className="border rounded-full p-2 lg:w-[510px] w-full" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })} />
                        <input type="email" name="email" placeholder="Enter your email" className="border rounded-full p-2 lg:w-[510px] w-full" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    </div>
                    <div className="flex items-center justify-center mt-10">
                        <button className="border border-[#FF8500] text-[#4C4C4D] text-[25px] rounded-full px-11" onClick={handleSave}>submit</button>
                    </div>
                </div>
                <div className='absolute mt-36 -right-10 h-[300px] w-[300px] md:block hidden -z-10'>
                    <OrangeGradient />
                </div>
            </div>
        </Modal>
    );
}

export default FormSubmission;
