import React from 'react';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import * as yup from 'yup';
const phoneRegExp =
	/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
	name: yup.string().required(),
	phone: yup
		.string()
		.matches(phoneRegExp, 'Phone number is not valid')
		.required(),
	password: yup
		.string()
		.min(8, 'Password must be 8 characters long')
		.matches(/[0-9]/, 'Password requires a number')
		.matches(/[a-z]/, 'Password requires a lowercase letter')
		.matches(/[A-Z]/, 'Password requires an uppercase letter')
		.matches(/[^\w]/, 'Password requires a symbol')
		.required(),
	gender: yup.string().required('Gender is Required!'),
	date: yup.date().required(),
	income: yup.string().required(),
	about: yup
		.string()
		.min(20, 'Too short!')
		.max(500, 'Too long string!')
		.required(),
	facebook: yup
		.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			'Enter correct url!'
		)
		.required('Please enter website'),
	twitter: yup
		.string()
		.matches(
			/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
			'Enter correct url!'
		)
		.required('Please enter website'),
	hobbies: yup
		.array()
		.of(
			yup
				.string('String is required!')
				.min(3, 'Too short!')
				.max(20, 'Too long!')
				.required('Hobbies required!')
		)
		.min(1, 'At least one hobby required!')
		.required('Required!'),
});

const Registration = () => {
	return (
		<Formik
			validationSchema={schema}
			initialValues={{
				name: '',
				phone: '',
				password: '',
				gender: '',
				date: '',
				income: '',
				about: '',
				facebook: '',
				twitter: '',
				hobbies: [],
			}}
			onSubmit={(values) => {
				console.log(values);
			}}>
			{({ values }) => (
				<Form>
					<label htmlFor=''>Full Name: </label>
					<Field name='name' type='text' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='name' />
					</div>
					<br /> <br />
					<label htmlFor=''>Phone: </label>
					<Field name='phone' type='number' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='phone' />
					</div>
					<br /> <br />
					<label htmlFor=''>Password: </label>
					<Field name='password' type='password' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='password' />
					</div>
					<br /> <br />
					<label htmlFor=''>Gender: </label>
					<label htmlFor=''>Male</label>
					<Field name='gender' value='Male' type='radio' />
					<label htmlFor=''>Female</label>
					<Field name='gender' value='Female' type='radio' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='gender' />
					</div>
					<br /> <br />
					<label htmlFor=''>Date: </label>
					<Field name='date' type='date' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='date' />
					</div>
					<br /> <br />
					<label htmlFor=''>Income: </label>
					<Field name='income' as='select'>
						<option value='100000'>1 Lac TK</option>
						<option value='200000'>2 Lac TK</option>
						<option value='300000'>3 Lac TK</option>
						<option value='500000'>5 Lac TK</option>
						<option value='1000000'>10 Lac TK</option>
						<option value='2000000'>20 Lac TK</option>
					</Field>
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='income' />
					</div>
					<br /> <br />
					<label htmlFor=''>About You: </label>
					<Field name='about' as='textarea' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='about' />
					</div>
					<br /> <br />
					<label htmlFor=''>Facebook Link: </label>
					<Field name='facebook' type='social' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='facebook' />
					</div>
					<br /> <br />
					<label htmlFor=''>Twitter Link: </label>
					<Field name='twitter' type='social' />
					<br />
					<div style={{ color: 'red' }}>
						<ErrorMessage name='twitter' />
					</div>
					<br /> <br />
					<FieldArray
						name='hobbies'
						render={(arrayHelpers) => (
							<div>
								{values.hobbies && values.hobbies.length > 0 ? (
									values.hobbies.map((hobby, index) => (
										<div key={index}>
											<Field name={`hobbies.${index}`} />
											{/* <div style={{ color: 'red' }}>
												<ErrorMessage name={`hobbies.${index}`} />
											</div> */}
											<button
												type='button'
												onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
											>
												-
											</button>
											<button
												type='button'
												onClick={() =>
													arrayHelpers.insert(index, '')
												} // insert an empty string at a position
											>
												+
											</button>
										</div>
									))
								) : (
									<button
										type='button'
										onClick={() => arrayHelpers.push('')}>
										{/* show this when user has removed all friends from the list */}
										Add a hobbies
									</button>
								)}
							</div>
						)}
					/>
					<div style={{ color: 'red' }}>
						<ErrorMessage name={`hobbies`} />
					</div>
					<br />
					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default Registration;
