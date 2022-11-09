import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
const Registration = () => {
	return (
		<Formik
			initialValues={{
				name: '',
				phone: '',
				password: '',
				date: '',
				income: '',
				aboutYou: '',
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
					<br /> <br />
					<label htmlFor=''>Phone: </label>
					<Field name='phone' type='number' />
					<br /> <br />
					<label htmlFor=''>Password: </label>
					<Field name='password' type='password' />
					<br /> <br />
					<label htmlFor=''>Gender: </label>
					<label htmlFor=''>Male</label>
					<Field name='gender' value='Male' type='radio' />
					<label htmlFor=''>Female</label>
					<Field name='gender' value='Female' type='radio' />
					<br /> <br />
					<label htmlFor=''>Date: </label>
					<Field name='date' type='date' />
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
					<br /> <br />
					<label htmlFor=''>About You: </label>
					<Field name='aboutYou' as='textarea' />
					<br /> <br />
					<label htmlFor=''>Facebook Link: </label>
					<Field name='social.facebook' type='social' />
					<br /> <br />
					<label htmlFor=''>Twitter Link: </label>
					<Field name='social.twitter' type='social' />
					<br /> <br />
					<FieldArray
						name='hobbies'
						render={(arrayHelpers) => (
							<div>
								{values.hobbies && values.hobbies.length > 0 ? (
									values.hobbies.map((hobby, index) => (
										<div key={index}>
											<Field name={`hobbies.${index}`} />
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
					<button type='submit'>Submit</button>
				</Form>
			)}
		</Formik>
	);
};

export default Registration;
