import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const SendEmail = () => {
    const [name, setName] = useState({
        message:'',
        name:'',
        email:''
    })
    const handleValue=(e)=>{
        setName((value)=>({
            ...value,
            [e.target.name]: e.target.value,
        }))
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_4bc29mm',
            'template_iqotqx7',
            // {
            //     name: "a",
            //     message: "a",
            //     email: "hoangzhv@gmail.com",
            // },
            name,
            'XdsBdSlkm97V9U5Il')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form id="form" onSubmit={sendEmail}>
            <div className="field">
                <label htmlFor="name">name</label>
                <input type="text" onChange={handleValue} name="name" id="name" />
            </div>
            <div className="field">
                <label htmlFor="message">message</label>
                <input type="text" onChange={handleValue} name="message" id="message" />
            </div>
            <div className="field">
                <label htmlFor="email">email</label>
                <input type="text" onChange={handleValue} name="email" id="email" />
            </div>
            <input type="submit" id="button" defaultValue="Send Email" />
        </form>

    );
};