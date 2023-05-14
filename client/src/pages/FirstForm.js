
import NavBar from "../components/NavBar";

import "../css/FirstForm.css"

import { useState, useEffect } from "react"

const initalDataForm = {
    coleges: "",
    class_plus: "",
    teacher_help: "",
    city:"",
    hobby: "",
    study_hours: "",
    concentration: "",
    teacher_comunication: ""
}

const FirstForm = ({userLogin, setUserLogin}) => {

    const [dataForm, setDataForm] = useState(initalDataForm);

    useEffect(() => {
        const sendData = async () => {
            try {
                const res = await fetch("http://localhost:5000/userData", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({token: window.localStorage.getItem("token")})
                });
    
                const data = await res.json();
    
                let userData = data.data;
                setUserLogin(userData);
                
                
            } catch (error) {
                console.log(error);
            }
        }
    
        sendData();
    }, [setUserLogin])

    initalDataForm.user_name = userLogin.last_name + ' ' + userLogin.first_name;
    console.log(initalDataForm);

    const handleChange = (e) => {
        const { name, value} = e.target;

        setDataForm((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(dataForm);

        const res = await fetch("http://localhost:5000/form1", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dataForm)
        });

        const data = await res.json();
        console.log(data);

        if(data.status === "ok"){
            console.log('Post created succesfully');
            setDataForm(initalDataForm)
        }

        else if(data.status === "error"){
            alert("Nu esti logat")
        }

    }

    return(
        <div>
            <NavBar />
            <div>
                <div>
                    <h2>FirstForm</h2>
                </div>
                <form className="firstForm">
                    <input onChange={handleChange} value={dataForm.coleges} type="text" name="coleges"/>
                    <input onChange={handleChange} value={dataForm.class_plus} type="text" name="class_plus"/>
                    <input onChange={handleChange} value={dataForm.teacher_help} type="text" name="teacher_help"/>
                    <input onChange={handleChange} value={dataForm.city} type="text" name="city"/>
                    <input onChange={handleChange} value={dataForm.hobby} type="text" name="hobby"/>
                    <input onChange={handleChange} value={dataForm.study_hours} type="text" name="study_hours"/>
                    <input onChange={handleChange} value={dataForm.concentration} type="text" name="concentration"/>
                    <input onChange={handleChange} value={dataForm.teacher_comunication} type="text" name="teacher_comunication"/>

                    <input type="submit" onClick={handleSubmit} value="Send"/>
                </form>
            </div>
        </div>
    )
}

export default FirstForm;