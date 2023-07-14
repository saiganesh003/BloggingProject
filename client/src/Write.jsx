import React from 'react'
import ReactDOM from 'react-dom/client'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';

function Write() {
  const [value, setValue] = useState('');
  console.log(value);
    return (
      <>
        <div className="add">
          <div className="content">
            <input placeholder='Title'/>
            <div className="editorContainer">
              <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
            </div>
            
          </div>
          <div className="menu">
            <div className="item">
              <h1>Publish</h1>
              <span><b>Status:</b> draft</span>
              <span><b>Visibility:</b> public</span>
              {/* <br/> */}
              <input className='file' type="file" id="file"/>
              <label className="file" htmlFor="file">Upload image</label>
              <div className="buttons">
                <button>Save as Draft</button>
                <button>Update</button>
              </div>
            </div>
            <div className="item">
              <h1>Category</h1>
              <div className="cat">
                <input type="radio" id='art'/>
                <label htmlFor='art'>Art</label>
              </div>
              <div className="cat">
                <input type="radio" id='science'/>
                <label htmlFor='art'>Science</label>
              </div>
              
              <div className="cat">
                <input type="radio" id='technology'/>
                <label htmlFor='art'>Technology</label>
              </div>
              
              <div className="cat">
                <input type="radio" id='cinema'/>
                <label htmlFor='art'>Cinema</label>
              </div>
              <div className="cat">
                <input type="radio" id='Design'/>
                <label htmlFor='art'>Design</label>
              </div>
              <div className="cat">
                <input type="radio" id='Food'/>
                <label htmlFor='art'>Food</label>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Write
  