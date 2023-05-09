import React,{useState,useEffect} from 'react';
import './blogeditor.css';
import {marked} from "marked";
import  * as DOMPurify from 'dompurify';
import Toolbar from "../toolbar/toolbar";
import Swal from "sweetalert2";



function Blogeditor(props) {
    //state management
    const [input, setInput] = useState("");
    const [preview, setPreview] = useState("");
    const [theme, setTheme] = useState('light');

//load draft if it exists
    useEffect(()=>{
        const draft = localStorage.getItem("draft");
        if(draft){
            setInput(draft);
            setPreview(DOMPurify.sanitize(marked(draft)));
        }
    },[])

//On typing save content to the state
    const handleChange = (event)=>{
        setInput(event.target.value);
        //preview state sanitize and convert markup to HTML
        setPreview(DOMPurify.sanitize(marked(event.target.value)));
    }
    //format texts
    const handleFormat = (syntax,type)=>{
        //select  start position of the highlighted text
        const selectionStart = document.querySelector(".markdown-input").selectionStart;
        //select end position of the highlighted text
        const selectionEnd = document.querySelector(".markdown-input").selectionEnd;
        //get full highlighted text
        const selectedText = input.substring(selectionStart, selectionEnd);

        let newText = "";
//Transform the input text by including the formatting to the highlighted texts
        if (type == "heading") {
            newText = input.substring(0, selectionStart) + syntax + " " + selectedText + "\n" + input.substring(selectionEnd);
        }if(type === "image"){
            const imageSyntax = `![alt text](${syntax})`;
            newText = input.substring(0, selectionStart) + marked(imageSyntax) + input.substring(selectionEnd);
        } else {
            newText = input.substring(0, selectionStart) + syntax + selectedText + syntax + input.substring(selectionEnd);
        }
        setInput(newText);
        setPreview(DOMPurify.sanitize(marked(newText)));

    }
    //save draft to local storage
    const saveDraft = ()=>{
        localStorage.setItem("draft",input);
        Swal.fire({
            icon: 'success',
            title: 'Successful',
            text: 'Draft Saved Successfully'
        })
    }
    //publish and clear text area
    const publishBlog = ()=>{
         localStorage.setItem("blog",input);
         localStorage.removeItem("draft");
        Swal.fire({
            icon: 'success',
            title: 'Successful',
            text: 'Blog Published Successfully'
        })
         setInput("");
         setPreview("");
    }
    //switch between light and dark theme
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={`section__blogeditor ${theme}`}>
            <div className="blog-editor">
                <Toolbar  onFormat={handleFormat}/>
                    <textarea
                        className={`markdown-input ${theme}`}
                        value={input}
                        rows="50" cols="70"
                        onChange={handleChange}
                        placeholder="Write your blog post in Markdown format here..."
                    />
                <div className="buttons">
                    <button onClick={()=>saveDraft()}>Save Draft</button>
                    <button onClick={()=>publishBlog()}>Publish</button>
                </div>
            </div>
            <div className="preview__viewer">
                <div className="preview__viewer-buttons">
                    <button onClick={()=>toggleTheme()}>
                        {`Toggle ${theme == 'light' ? 'dark mode':'light mode' }`}
                    </button>
                </div>
                <div className={`preview ${theme}`}>
                    <div
                        dangerouslySetInnerHTML={{__html: preview}}
                    />
                </div>
            </div>

        </div>
    );
}

export default Blogeditor;