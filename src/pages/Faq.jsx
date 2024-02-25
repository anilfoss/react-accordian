import React from "react";
import Accordian from "../components/Accordian";

const faqData = [
    {
        question: "What is Lorem Ipsum?",
        answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        question: "Why do we use it?",
        answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
        question: "Where does it come from?",
        answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
        question: "Is it readable English?",
        answer: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.",
    },
];

const Faq = () => {
    return (
        <>
            {faqData.map((item, index) => {
                return (
                    <Accordian
                        key={index}
                        title={item.question}
                        body={item.answer}
                    />
                );
            })}
        </>
    );
};

export default Faq;
