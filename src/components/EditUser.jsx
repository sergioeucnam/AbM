// import { useParams } from "react-router-dom"
// import { useForm } from "./hooks/useForm.jsx"
// import { useSelector } from "react-redux/es/exports.js"


// const validationsForm = (form) => {
//     let errors = {}
//     const nameRegEx = /^[a-zA-Z ]{3,15}$/;
//     const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     const phoneRegEx = /^[0-9]{9,10}$/;
//     const documentRegEx = /^[0-9]{6,9}$/;
//     const addressRegEx = /^[a-zA-Z0-9 ]{3,50}$/;
//     if (!form.nombres.trim()) {
//         // setError({ ...error, name: 'Name is required' })
//         errors.nombres = 'Nombre es requerido'
//     } else if (!nameRegEx.test(form.nombres)) {
//         // setError({ ...error, name: 'Name must be between 3 and 15 characters, only letter allowed' })
//         errors.nombres = 'Nombre debe tener entre 3 y 15 caracteres, solo letras permitidas'
//     }

//     if (!form.apellidos) {
//         // setError({ ...error, lastname: 'Lastname is required' })
//         errors.apellidos = 'Apellido es requerido'
//     } else if (!nameRegEx.test(form.apellidos)) {
//         // setError({ ...error, lastname: 'Lastname must be between 3 and 15 characters, only letter allowed' })
//         errors.apellidos = 'Apellido debe tener entre 3 y 15 caracteres, solo letras permitidas'
//     }
//     if (!form.email) {
//         // setError({ ...error, email: 'Email is required' })
//         errors.email = 'Email es requerido'
//     }
//     else if (!emailRegEx.test(form.email)) {
//         // setError({ ...error, email: 'Email is not valid' })
//         errors.email = 'Email no es valido'
//     }
//     if (!form.telefono) {
//         // setError({ ...error, phone: 'Phone is required' })
//         errors.telefono = 'Telefono es requerido'
//     }
//     else if (!phoneRegEx.test(form.telefono)) {
//         // setError({ ...error, phone: 'Phone must be 10 digits' })
//         errors.telefono = 'Telefono debe tener 10 digitos'
//     }
//     if (!form.nro_documento) {
//         // setError({ ...error, document: 'Document is required' })
//         errors.nro_documento = 'Documento es requerido'
//     }
//     else if (!documentRegEx.test(form.nro_documento)) {
//         // setError({ ...error, document: 'Document must be between 6 and 9 digits' })
//         errors.nro_documento = 'Documento debe tener entre 6 y 9 digitos'
//     }
//     if (!form.direccion) {
//         // setError({ ...error, address: 'Address is required' })
//         errors.direccion = 'Direccion es requerido'
//     }
//     else if (!addressRegEx.test(form.direccion)) {
//         // setError({ ...error, address: 'Address must be between 3 and 50 characters, only letter and number allowed' })
//         errors.direccion = 'Direccion debe tener entre 3 y 50 caracteres, solo letras y numeros permitidos'
//     }
//     if (!form.fecha_nacimiento) {
//         // setError({ ...error, fecha_nacimiento: 'Birthdate is required' })
//         errors.fecha_nacimiento = 'Fecha de nacimiento es requerido'
//     }
//     if (!form.sexo) {
//         // setError({ ...error, sexo: 'Must be one of the options' })
//         errors.sexo = 'Debe ser una de las opciones'
//     }
//     if (!form.id_pais) {
//         // setError({ ...error, id_pais: 'Country is required' })
//         errors.id_pais = 'Pais es requerido'
//     }
//     if (!form.id_ciudad) {
//         // setError({ ...error, id_ciudad: 'City is required' })
//         errors.id_ciudad = 'Ciudad es requerido'
//     }
//     if (!form.id_barrio) {
//         // setError({ ...error, id_barrio: 'Neighborhood is required' })
//         errors.id_barrio = 'Barrio es requerido'
//     }
//     return errors;
// }


// const EditUser = () => {

//     const id = useParams()
//     console.log(id, 'id capturado');
//     const user = useSelector(state => state.users.find(element => element.id_postulante == id))
//     console.log(user, 'usuario capturado');

//     const prevForm = {
//         nombres: user.nombres,
//         apellidos: user.apellidos,
//         email: user.email,
//         telefono: user.telefono,
//         nro_documento: user.nro_documento,
//         direccion: user.direccion,
//         fecha_nacimiento: user.fecha_nacimiento,
//         sexo: user.sexo,
//         id_pais: user.id_pais,
//         id_ciudad: user.id_ciudad,
//         id_barrio: user.id_barrio
//     }
//     const { form, errors, handleChange, handleBlur, handleEdit } = useForm(prevForm, validationsForm)

//     return (
//         <div className="container-md ">
//             <h2>Editar postulante</h2>
//             <form onSubmit={handleEdit}
//                 className='row g-3'
//             >

//                 <div className='col-md-4'>
//                     <input type="text" name="nombres" placeholder="Nombre" onBlur={handleBlur} onChange={handleChange} defaultValue={form.nombres} className='form-control' />
//                     {errors.nombres && <p id="passwordHelpInline" className="form-text">{errors.nombres}</p>}
//                 </div>
//                 <div className='col-md-4'>

//                     <input type="text" name="apellidos" placeholder="Apellido" onBlur={handleBlur} onChange={handleChange} defaultValue={form.apellidos} className='form-control' />
//                     {errors.apellidos && <p id="passwordHelpInline" className="form-text">{errors.apellidos}</p>}

//                 </div>
//                 <div className="col-md-4">

//                     <input type="text" name="email" placeholder="Email" onBlur={handleBlur} onChange={handleChange}
//                         defaultValue={form.email} className='form-control' />
//                     {errors.email && <p id="passwordHelpInline" className="form-text">{errors.email}</p>}

//                 </div>
//                 <div className="col-md-4">
//                     <input type="text" name="telefono" placeholder="Telefono" onBlur={handleBlur} onChange={handleChange}
//                         defaultValue={form.telefono} className='form-control' />
//                     {errors.telefono && <p id="passwordHelpInline" className="form-text">{errors.telefono}</p>}
//                 </div>

//                 <div className="col-md-4">
//                     <input type="text" name="nro_documento" placeholder="Nro Documento" onBlur={handleBlur} onChange={handleChange}
//                         defaultValue={form.nro_documento} className='form-control' />
//                     {errors.nro_documento && <p id="passwordHelpInline" className="form-text">{errors.nro_documento}</p>}
//                 </div>
//                 <div className="col-md-6">

//                     <input type="text" name="direccion" placeholder="Direccion" onBlur={handleBlur} onChange={handleChange}
//                         defaultValue={form.direccion} className='form-control' />
//                     {errors.direccion && <p id="passwordHelpInline" className="form-text">{errors.direccion}</p>}
//                 </div>
//                 <div className="col-md-6">

//                     <input type="date" name="fecha_nacimiento" placeholder="Fecha Nacimiento" onBlur={handleBlur} onChange={handleChange}
//                         defaultValue={form.fecha_nacimiento} className='form-control' />
//                     {errors.fecha_nacimiento && <p id="passwordHelpInline" className="form-text">{errors.fecha_nacimiento}</p>}

//                 </div>
//                 <div className="col-md-6">

//                     <select onChange={handleChange} onBlur={handleBlur} name='sexo' className="form-select">
//                         <option selected>Seleccione una opcion</option>
//                         <option defaultValue="M" className='form-control'>M</option>
//                         <option defaultValue="F" className='form-control'>F</option>
//                     </select>
//                     {errors.sexo && <p id="passwordHelpInline" class="form-text">{errors.sexo}</p>}
//                 </div>
//                 <div className="col-md-6">

//                     <input type='text' name='id_pais' placeholder='Pais' onChange={handleChange} onBlur={handleBlur} className='form-control' />
//                     {errors.id_pais && <p id="passwordHelpInline" className="form-text">{errors.id_pais}</p>}
//                 </div>
//                 <div className="col-md-6">

//                     <input type='text' name='id_ciudad' placeholder='Ciudad' onChange={handleChange} onBlur={handleBlur} className='form-control' />
//                     {errors.id_ciudad && <p id="passwordHelpInline" className="form-text">{errors.id_ciudad}</p>}
//                 </div>
//                 <div className="col-md-6">

//                     <input type='text' name='id_barrio' placeholder='Barrio' onChange={handleChange} onBlur={handleBlur} className='form-control' />
//                     {errors.id_barrio && <p id="passwordHelpInline" className="form-text">{errors.id_barrio}</p>}
//                 </div>

//                 <button type="submit" defaultValue='send' className="btn btn-primary">Submit</button>
//             </form >
//         </div >
//     )
// }
// export default EditUser;