import { useState } from "react";
import {
    createNewUser,
    // deleteUser 
} from "../../actions/actions.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";

export const useForm = (initialForm, validateForm) => {
    const { id } = useParams()
    // const user = useSelector(state => state.users.find(user => user.id === id))
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const dispatch = useDispatch();
    // const history = useHistory();
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleBlur = (e) => {
        handleChange(e);
        setErrors(validateForm(form))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateForm(form));
        if (Object.keys(errors).length === 0) {
            alert("Enviando datos :D")
            setIsSubmitting(true)
            dispatch(createNewUser(form))
            // history.push('/')
        } else { return alert('Datos incorrectos') }
    }
    // const handleEdit = (e) => {
    //     e.preventDefault();
    //     setErrors(validateForm(form));
    //     if (Object.keys(errors).length === 0) {
    //         alert("Enviando datos :D");
    //         setIsSubmitting(true);
    //         dispatch(deleteUser(user))
    //         dispatch(createNewUser(form));
    //     } else { return alert('Datos incorrectos') }
    // }
    return {
        form, errors, handleChange, handleBlur, handleSubmit,
        // handleEdit
    }
}