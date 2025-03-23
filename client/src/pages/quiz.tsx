import {motion} from "framer-motion";
import {useNavigate, useParams} from "react-router-dom";
import {SUBJECTS} from "../constants/subjects.ts";
import {FormEvent, useEffect, useState} from "react";
import Preloader from "../components/preloader.tsx";
import {IQuizQuestion} from "../shared/types.ts";
import {API_ROUTES, ROUTES} from "../constants/routes.tsx";
import {Loader} from "lucide-react";
import {waitForTransactionReceipt, writeContract} from "@wagmi/core";
import {eth_config} from "../config/ethconfig.ts";
import {studentRegistryABI, studentRegistryAddress} from "../constants/contract_details.ts";

const QuizComp = () => {
    const {token} = useParams();
    const [topic, setTopic] = useState<string | null>(token && ((token as unknown as number) < SUBJECTS.length) && SUBJECTS[token as unknown as number] || null)
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [quizMode, setQuizMode] = useState(false)
    const [questions, setQuestions] = useState<IQuizQuestion[]>([]);
    const [responses, setResponses] = useState<string[]>([]);
    const [lockForm, setLockForm] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (topic === null) {
            setError("Error 404 - No subject found for this request");
        }
    }, [topic]);

    const startQuiz = () => {
        setQuizMode(true);
        setLoading(true);
        fetch(API_ROUTES, {
            method: "POST",
            body: JSON.stringify({
                topic
            }),
            headers: {
                "content-type": "application/json"
            }
        }).then(r => r.json())
            .then(r => {
                const resp = r as { questions: IQuizQuestion[] };
                setQuestions(resp.questions)
            })
            .catch(err => {
                setError(err.message || "Something went wrong!");
                console.error(err)
            }).finally(() => setLoading(false))
    }
    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validate responses
        if(responses.length !== questions.length){
            alert("Please answer all questions");
            return;
        }
        //validate if all responses are filled
        if (responses.some((response) => response === "")) {
            alert("Please answer all questions");
            return;
        }

        let score = 0;
        questions.forEach((question, index) => {
            if (question.answer === responses[index]) {
                score++;
            }
        });
        setLockForm(true);
        writeContract(eth_config, {
            abi: studentRegistryABI,
            address: studentRegistryAddress,
            functionName: "takeQuiz",
            args: [
                score
            ]
        }).then((r) => {
            waitForTransactionReceipt(eth_config, {
                hash: r
            }).then(res => {
                console.log(res)
                navigate(ROUTES.mentorsSuggestions)
            }).catch(err => {
                alert(err.message || "Something went wrong!");
                console.error(err);
            }).finally(() => setLockForm(false))
        }).catch(err => {
            alert(err.message || "Something went wrong!");
            console.error(err);
            setLockForm(false)
        })
    }
    return (
        <div className={'my-12'}>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
            >
                {
                    error && <div
                        className={'bg-red-500 flex justify-between text-white rounded-lg border border-white p-4'}
                    >
                        {error || "Oops! Something went wrong!"}
                        <button onClick={() => window.location.reload()} className={'p-1 border rounded-lg px-2'}>
                            Try again
                        </button>
                    </div>
                    || <>
                        {
                            !quizMode && <div>
                                <h2 className="text-2xl font-semibold mb-4">Ready to start?</h2>
                                <p className="text-gray-600 mb-8">
                                    Take a quick assessment to help us find the perfect mentor for
                                    you. {token && ((token as unknown as number) < SUBJECTS.length) && `(Topic: ${SUBJECTS[token as unknown as number]})`}
                                </p>
                                <button
                                    onClick={startQuiz}
                                    className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
                                >
                                    Start Assessment
                                </button>
                            </div>
                            || <>
                                {
                                    !loading && <form onSubmit={handleFormSubmit}>
                                        <h1 className={'text-lg font-semibold'}>{topic} Quiz</h1>
                                        <div className={'mt-3'}>
                                            {questions.map((question, index) => (<div key={index}>
                                                <label className={'block text-sm font-medium text-gray-700 mb-2'}>
                                                    {index + 1}) {question.question}
                                                </label>
                                                <div className="grid gap-1 pb-3">
                                                    {
                                                        question.options.map((opt, i) => <label key={i}
                                                                                                className={'flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50'}>
                                                            <input
                                                                type="radio"
                                                                value={opt}
                                                                onChange={(e) => {
                                                                    const newResponses = [...responses];
                                                                    newResponses[index] = e.target.value;
                                                                    setResponses(newResponses);
                                                                }}
                                                                name={index.toString()}
                                                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                                                            />
                                                            <span className="ml-2">{opt}</span>
                                                        </label>)
                                                    }
                                                </div>
                                            </div>))}
                                        </div>
                                        <div className={'flex justify-end'}>
                                            <button disabled={lockForm} className={'bg-blue-700 flex items-center justify-center text-white p-1.5 px-4 rounded-lg'}>
                                                {lockForm && <Loader className={'size-4 mr-1 animate-spin'} />} {lockForm ? "Evaluating..." : "Submit"}
                                            </button>
                                        </div>
                                    </form>
                                    || <Preloader className={'h-[30dvh]'}/>
                                }
                            </>
                        }
                    </>
                }
            </motion.div>
        </div>
    )
};

export default QuizComp;