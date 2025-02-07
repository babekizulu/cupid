//libs
import {useState} from "react";
//icons
import { IoIosSend } from "react-icons/io";

function Start() {
    //state management
    const [name, setName] = useState('');
    const [res1, setRes1] = useState('');
    const [res2, setRes2] = useState('');
    const [res3, setRes3] = useState('');
    const [res4, setRes4] = useState('');
    const [res5, setRes5] = useState('');
    const [res6, setRes6] = useState('');
    const [res7, setRes7] = useState('');
    const [res8, setRes8] = useState('');
    const [dialogue, setDialogue] = useState(0);
    //handlers
    const onChangeHandler = (e) => {
        setName(e.target.value);
    }
    const res1Handler = (e) => {
        setRes1(e.target.value);
    }
    const res2Handler = (e) => {
        setRes2(e.target.value);
    }
    const res3Handler = (e) => {
        setRes3(e.target.value);
    }
    const res4Handler = (e) => {
        setRes4(e.target.value);
    }
    const res5Handler = (e) => {
        setRes5(e.target.value)
    }
    const res6Handler = (e) => {
        setRes6(e.target.value)
    }
    const res7Handler = (e) => {
        setRes7(e.target.value)
    }
    const res8Handler = (e) => {
        setRes8(e.target.value)
    }
    const onKeyDownHandler = (e) => {
        if(e.key === 'Enter') {
            setDialogue(dialogue+1)
        }
    }
    const handleDialogue = () => {
        if(dialogue === 0) {
            return (
                <div>
                    <div className="dialogue">
                        <p>Enter your name below</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={name} type="text" onChange={(e) => onChangeHandler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 1) {
            return (
               <div>
                    <div className="dialogue">
                        <p>Hey {name}, I'm Cupid. I'm here to make your valentines day special!</p>
                    </div>
                    <div className="dialogue">
                        <p>If you could have dinner with any fictional character, who would it be?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res1} type="text" onChange={(e) => res1Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
               </div>
            )
        }
        if(dialogue === 2) {
            return (
                <div>
                    <div className="dialogue">
                        <p>{res1} is an interesting choice... What would you talk about?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res2} type="text" onChange={(e) => res2Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 3) {
            return (
                <div>
                    <div className="dialogue">
                        <p>That would be a good conversation to have! Would you split the bill or would {res1} pay?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res3} type="text" onChange={(e) => res3Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 4) {
            return (
                <div>
                    <div className="dialogue">
                        <p>Good choice. </p>
                    </div>
                    <div className="dialogue">
                        <p>What's your dream travel destination?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res4} type="text" onChange={(e) => res4Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 5) {
            return (
                <div>
                    <div className="dialogue">
                        <p>What places would you visit in {res4}?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res5} type="text" onChange={(e) => res5Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 6) {
            return (
                <div>
                    <div className="dialogue">
                        <p>It's amazing how many beautiful places there are in the world that most people may never get to see...</p>
                    </div>
                    <div className="dialogue">
                        <p>I wish there was some way we could make travelling easier and more accessible to everyone.</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res6} type="text" onChange={(e) => res6Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 7) {
            return (
                <div>
                    <div className="dialogue">
                        <p>What's your ideal valentines date?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res7} type="text" onChange={(e) => res7Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 8) {
            return (
                <div>
                    <div className="dialogue">
                        <p>That sounds like a great date! I don't have memory capabilities, but if I did, I would keep that in mind for future dates.</p>
                    </div>
                    <div className="dialogue">
                        <p>I'm glad you're here with me today.</p>
                    </div>
                    <div className="dialogue">
                        <p>What's one thing you find attractive in a person?</p>
                    </div>
                    <div className="reponse-container">
                        <input className="response" value={res8} type="text" onChange={(e) => res8Handler(e)} onKeyDown={(e) => onKeyDownHandler(e)}/>
                        <IoIosSend className='send-icon' onClick={() => setDialogue(dialogue+1)}/>
                    </div>
                </div>
            )
        }
        if(dialogue === 9) {
            return (
                <div>
                    <div className="dialogue">
                        <p>That's a great trait to have! I think I'd be attracted to that too.</p>
                    </div>
                    <div className="dialogue">
                        <p>It's been a pleasure talking with you today. Hopefully we can continue this conversation in the future when I've been updated.</p>
                    </div>
                    <div className="dialogue">
                        <p>By the way, the guy that developed me has a huge crush on you. He's been working on me for a few weeks now and he really wanted to impress you.</p>
                    </div>
                </div>
            )
        }

    }
    return (
        <div className="page">
            {handleDialogue()}
        </div>
    );
};

export default Start;