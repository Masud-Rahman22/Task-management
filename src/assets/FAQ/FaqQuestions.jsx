import { useEffect, useState } from "react";
import FAQ from "./FAQ";


const FaqQuestions = () => {
    const [info,setInfo] = useState([])
    useEffect(()=>{
        fetch('/FAQ.json')
        .then(res => res.json())
        .then(data => setInfo(data))
    },[])
    return (
        <div className=" w-3/4 mx-auto mt-20">
        <h1 className="text-purple-500 font-bold text-5xl text-center">Frequently asked questions</h1>
        <p className="text-white font-extralight text-2xl text-center mt-5">Welcome to TaskFlowPortal's FAQ section—an informative resource addressing common inquiries about our platform. Discover insights on task management functionalities, collaboration tools, security measures, and integrations. Tailored for both novices and experts, these concise answers streamline your understanding of our service. For personalized assistance, our dedicated support team is at your service. Explore how TaskFlowPortal simplifies task organization and boosts productivity through clear, insightful FAQs.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {
                info.map(questions => <FAQ key={questions.id} questions = {questions}></FAQ>)
            }
        </div>
    </div>
    );
};

export default FaqQuestions;