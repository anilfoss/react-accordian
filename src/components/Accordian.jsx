import React, { useRef, useState } from "react";

const Accordian = ({ title, body }) => {
    const [accordianOpen, setAccordianOpen] = useState(false);

    const refHeight = useRef(null);

    const handleAccordian = () => {
        setAccordianOpen(!accordianOpen);

        if (!accordianOpen) {
            refHeight.current.style.height =
                refHeight.current.scrollHeight + "px";
        } else {
            refHeight.current.style.height = "0px";
        }
    };

    return (
        <>
            <div className="bg-slate-200 inline-block mb-4 w-full rounded-md">
                <button
                    className="font-semibold text-left ps-4 pe-10 py-3 w-full relative"
                    onClick={handleAccordian}
                >
                    {title}
                    <span className="text-2xl px-3 absolute inset-y-0111 top-1/2 right-0 -translate-y-1/2">
                        {accordianOpen ? "-" : "+"}
                    </span>
                </button>
                <div
                    ref={refHeight}
                    className={`px-4 overflow-y-hidden transition-all ease-in-out duration-300 ${
                        accordianOpen ? "mb-3" : "mb-0"
                    }`}
                    style={{ height: "0px" }}
                >
                    {body}
                </div>
            </div>
        </>
    );
};

export default Accordian;
