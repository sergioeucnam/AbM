import { useForm } from "./hooks/useForm.jsx"

const initialForm = {
    nombres: '',
    apellidos: '',
    email: '',
    telefono: '',
    nro_documento: '',
    direccion: '',
    fecha_nacimiento: '',
    sexo: '',
    id_pais: '',
    id_ciudad: '',
    id_barrio: ''
}
const validationsForm = (form) => {
    let errors = {}
    const nameRegEx = /^[a-zA-Z ]{3,15}$/;
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const phoneRegEx = /^[0-9]{9,10}$/;
    const documentRegEx = /^[0-9]{6,9}$/;
    // addressRegEx a to z 0-9 - _ . , ; : / ? = + space
    const addressRegEx = /^[a-zA-Z0-9-_.,;:/?=+ ]{3,50}$/;
    // const addressRegEx = /^[a-zA-Z0-9 ]{3,50}$/;
    function calcularEdad(fecha_nacimiento) {
        let today = new Date();
        let birthDay = new Date(fecha_nacimiento);
        let age = today.getFullYear() - birthDay.getFullYear();
        let m = today.getMonth() - birthDay.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDay.getDate())) {
            age--;
        }
        return age;
    }
    if (!form.nombres.trim()) {
        errors.nombres = 'Nombre es requerido'
    } else if (!nameRegEx.test(form.nombres)) {
        errors.nombres = 'Nombre debe tener entre 3 y 15 caracteres, solo letras permitidas'
    }
    if (!form.apellidos) {
        errors.apellidos = 'Apellido es requerido'
    } else if (!nameRegEx.test(form.apellidos)) {
        errors.apellidos = 'Apellido debe tener entre 3 y 15 caracteres, solo letras permitidas'
    }
    if (!form.email) {
        errors.email = 'Email es requerido'
    }
    else if (!emailRegEx.test(form.email)) {
        errors.email = 'Email no es valido'
    }
    if (!form.telefono) {
        errors.telefono = 'Telefono es requerido'
    }
    else if (!phoneRegEx.test(form.telefono)) {
        errors.telefono = 'Telefono debe tener 10 digitos'
    }
    if (!form.nro_documento) {
        errors.nro_documento = 'Documento es requerido'
    }
    else if (!documentRegEx.test(form.nro_documento)) {
        errors.nro_documento = 'Documento debe tener entre 6 y 9 digitos'
    }
    if (!form.direccion) {
        errors.direccion = 'Direccion es requerido'
    }
    else if (!addressRegEx.test(form.direccion)) {
        errors.direccion = 'Direccion debe tener entre 3 y 50 caracteres, solo letras y numeros permitidos'
    }
    if (!form.fecha_nacimiento) {
        errors.fecha_nacimiento = 'Fecha de nacimiento es requerido'
    } else if (form.fecha_nacimiento > new Date()) {
        errors.fecha_nacimiento = 'Fecha de nacimiento no puede ser mayor a la actual'
    } else if (form.fecha_nacimiento < new Date(1900, 0, 1)) {
        errors.fecha_nacimiento = 'Fecha de nacimiento no puede ser menor a 1/1/1900'
    } else if (calcularEdad(form.fecha_nacimiento) < 18) {
        errors.fecha_nacimiento = 'Usted debe ser mayor de edad para registrarse'
    }
    if (!form.sexo) {
        errors.sexo = 'Debe ser una de las opciones'
    }
    if (!form.id_pais) {
        errors.id_pais = 'Pais es requerido'
    }
    if (!form.id_ciudad) {
        errors.id_ciudad = 'Ciudad es requerido'
    }
    if (!form.id_barrio) {
        errors.id_barrio = 'Barrio es requerido'
    }
    return errors;
}

const CreateForm = () => {

    const { form, errors, handleChange, handleBlur, handleSubmit } = useForm(initialForm, validationsForm)

    return (
        <div className="container-md ">
            <h2>Agregar postulante</h2>
            <form onSubmit={handleSubmit}
                className='row g-3'
            >

                <div className='col-md-4'>
                    <input type="text" name="nombres" placeholder="Nombre" onBlur={handleBlur} onChange={handleChange} defaultValue={form.nombres} className='form-control' />
                    {errors.nombres && <p id="passwordHelpInline" className="form-text">{errors.nombres}</p>}
                </div>
                <div className='col-md-4'>

                    <input type="text" name="apellidos" placeholder="Apellido" onBlur={handleBlur} onChange={handleChange} defaultValue={form.apellidos} className='form-control' />
                    {errors.apellidos && <p id="passwordHelpInline" className="form-text">{errors.apellidos}</p>}

                </div>
                <div className="col-md-4">

                    <input type="text" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange}
                        defaultValue={form.email} className='form-control' />
                    {errors.email && <p id="passwordHelpInline" className="form-text">{errors.email}</p>}

                </div>
                <div className="col-md-4">
                    <input type="text" name="telefono" placeholder="Telefono" onBlur={handleBlur} onChange={handleChange}
                        defaultValue={form.telefono} className='form-control' />
                    {errors.telefono && <p id="passwordHelpInline" className="form-text">{errors.telefono}</p>}
                </div>

                <div className="col-md-4">
                    <input type="text" name="nro_documento" placeholder="Nro Documento" onBlur={handleBlur} onChange={handleChange}
                        defaultValue={form.nro_documento} className='form-control' />
                    {errors.nro_documento && <p id="passwordHelpInline" className="form-text">{errors.nro_documento}</p>}
                </div>
                <div className="col-md-6">

                    <input type="text" name="direccion" placeholder="Direccion" onBlur={handleBlur} onChange={handleChange}
                        defaultValue={form.direccion} className='form-control' />
                    {errors.direccion && <p id="passwordHelpInline" className="form-text">{errors.direccion}</p>}
                </div>
                <div className="col-md-6">

                    <input type="date" name="fecha_nacimiento" placeholder="Fecha Nacimiento" onBlur={handleBlur} onChange={handleChange}
                        defaultValue={form.fecha_nacimiento} className='form-control' />
                    {errors.fecha_nacimiento && <p id="passwordHelpInline" className="form-text">{errors.fecha_nacimiento}</p>}

                </div>
                <div className="col-md-6">

                    <select onChange={handleChange} onBlur={handleBlur} name='sexo' className="form-select">
                        <option selected>Seleccione una opcion</option>
                        <option defaultValue="M" className='form-control'>M</option>
                        <option defaultValue="F" className='form-control'>F</option>
                    </select>
                    {errors.sexo && <p id="passwordHelpInline" class="form-text">{errors.sexo}</p>}
                </div>
                <div className="col-md-6">

                    <input type='text' name='id_pais' placeholder='Pais' onChange={handleChange} onBlur={handleBlur} className='form-control' />
                    {errors.id_pais && <p id="passwordHelpInline" className="form-text">{errors.id_pais}</p>}
                </div>
                <div className="col-md-6">

                    <input type='text' name='id_ciudad' placeholder='Ciudad' onChange={handleChange} onBlur={handleBlur} className='form-control' />
                    {errors.id_ciudad && <p id="passwordHelpInline" className="form-text">{errors.id_ciudad}</p>}
                </div>
                <div className="col-md-6">

                    <input type='text' name='id_barrio' placeholder='Barrio' onChange={handleChange} onBlur={handleBlur} className='form-control' />
                    {errors.id_barrio && <p id="passwordHelpInline" className="form-text">{errors.id_barrio}</p>}
                </div>

                <button type="submit" defaultValue='send' className="btn btn-dark text-bg-dark p-3">Submit</button>
            </form >
        </div >
    )
}
export default CreateForm;