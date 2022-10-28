import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Form.css'

const Form1 = ({createOrder}) => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const [var_disable,cambiar_disable]=useState(false);
	return (
		<>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
                    correo2: '',
                    telefono: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}else if(valores.correo !== valores.correo2)
                    {
                        errores.correo='Por favor ingresar el mismo correo'
                    }
                    if(valores.nombre !== '' && valores.correo !== '' && valores.telefono !== ''){
                        cambiar_disable(true)
                    }else{
                        cambiar_disable(false)
                    }

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
                    const buyer = {
                        name: valores.nombre,
                        email: valores.correo,
                        telf: valores.telefono
                    }
                     createOrder(buyer);
                     resetForm();
					console.log('Formulario enviado');


					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
			>
				{( {errors}, valores ) => (
					<Form className="formulario">
						<div>
							<label htmlFor="nombre">Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="John Doe"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

                        <div>
							<label htmlFor="correo">Correo</label>
							<Field
								type="text" 
								id="correo2" 
								name="correo2" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo2" component={() => (<div className="error2">{errors.correo2}</div>)} />
						</div>
                        <div>
							<label htmlFor="telfono">Telefono</label>
							<Field
								type="text" 
								id="telefono" 
								name="telefono" 
								placeholder="955422889" 
							/>
							<ErrorMessage name="telefono" component={() => (<div className="telefono">{errors.correo2}</div>)} />
						</div>

                       {(var_disable) ? <button type="submit">Enviar</button> : <button className='desactivado' disabled={true} type="submit">Enviar</button>}
						
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
		</>
	);
}
 
export default Form1;