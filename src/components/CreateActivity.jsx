import React, {useState} from "react";
import {createActivity} from "../api";
import {getToken, getUser} from "../auth";

const NewActivityForm = ({setAllActivity, allActivity}) => {
const [title, setTitle] = useState('')
const [description, setDescription] = useState('')


    return (
        <div className="new-Activity-component-main-container">
            <form
                id="newActivitySubmit"
                onSubmit={async (event)=>{
                    event.preventDefault();
                    try {
                        const token = getToken();
                        const user = getUser();
                        console.log(token,user,"!!!!!!!!")
                        const createNewActivity = await createActivity(title, description);
                        setAllActivity([createNewActivity, ...allActivity]);
                        console.log("button works")

                    } catch (error) {
                        console.log(error)
                    }
                }}
            >
                <h2>Create Activity Here</h2>
                <fieldset className="auth-component_input">
                <label htmlFor="title">Title: </label>
                <input
                id="title"
                type="text"
                placeholder="enter title"
                value={title}
                onChange={(event)=> {
                    setTitle(event.target.value);
                }}
                ></input>
            </fieldset>

            <fieldset className="auth-component_input">
                <label htmlFor="description">Description: </label>
                <input
                id="description"
                type="text"
                placeholder="enter description"
                value={description}
                onChange={(event)=> {
                    setDescription(event.target.value);
                }}
                ></input>
            </fieldset>
            
 
            <button type="submit" id="newActivitySubmit"
            >Submit Activity</button>
            </form>

        </div>
    );
}

export default NewActivityForm;  