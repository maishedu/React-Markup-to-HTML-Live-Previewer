import React from 'react';
import './toolbar.css';

function Toolbar({onFormat}) {
    const onInsertImageButtonClick = () => {
        const fileInput = document.createElement("input");
        fileInput.setAttribute("type", "file");
        fileInput.setAttribute("accept", "image/*");

        fileInput.addEventListener("change", (event) => {
            if (event.target.files && event.target.files[0]) {
                const reader = new FileReader();

                reader.onload = (e) => {
                    const imageUrl = e.target.result;
                    onFormat(imageUrl,"image");
                };

                reader.readAsDataURL(event.target.files[0]);
            }
        });

        fileInput.click();
    };
    return (
        <div className="toolbar">
            <button onClick={() => onFormat("**", "bold")}>B</button>
            <button onClick={() => onFormat("_", "italic")}>I</button>
            <button onClick={() => onFormat("<h1>", "heading")}>H</button>
            <button onClick={onInsertImageButtonClick}>Insert Image</button>
        </div>
    );
}

export default Toolbar;