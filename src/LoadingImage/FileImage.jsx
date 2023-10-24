// import React, { useEffect, useState } from 'react'
// // import { supabase } from '../supabaseClient'

// // user
// import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
// import EmailWall from './EmailWall';


// const FileImage = () => {
// 	// USER
// 	const user = useUser();
// 	const supabase = useSupabaseClient();
// 	const [email, setEmail] = useState("")
// 	console.log(email)


// 	async function magicLinkLogin() {
// 		const { data, error } = await supabase.auth.signInWithOtp({
// 			email: email,

// 		});
// 		console.log(data)
// 		if (error) {
// 			console.log('error communicaton with supabase, make sure to use a real email address', error)
// 		} else {
// 			console.log('check you email for a supabase mage link to ', data)
// 		}

// 	}




// 	const [images, setImages] = useState([])

// 	async function getImages() {
// 		const { data, error } = await supabase
// 			.storage
// 			.from('images')
// 			.list(user?.id + '/', {
// 				limit: 100,
// 				offset: 0,
// 				sortBy: { column: "name", order: "asc" }
// 			});

// 		if (data !== null) {
// 			setImages(data)
// 		} else {
// 			console.log(error)
// 		}
// 	}


// 	useEffect(() => {
// 		if (user) {
// 			getImages()
// 		}
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [user])


// 	return (
// 		<div>
// 			{user === null ?
// 				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
// 					<h1>welcome to image</h1>
// 					<input type="email" placeholder='enter email'
// 						onChange={(e) => setEmail(e.target.value)} />
// 					<button onClick={() => magicLinkLogin()}>
// 						get magic link
// 					</button>
// 				</div>
// 				: <EmailWall user={user} getImages={getImages} images={images} />
// 			}

// 		</div>
// 	)
// }

// export default FileImage



import React, { useEffect, useState } from 'react'
// import { supabase } from '../supabaseClient'

// user
import { useUser, useSupabaseClient } from '@supabase/auth-helpers-react';
import EmailWall from './EmailWall';


const FileImage = () => {
	// USER
	const user = useUser();
	const supabase = useSupabaseClient();
	const [email, setEmail] = useState("")
	console.log(email)


	async function magicLinkLogin() {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: 'e1xample@email.com',
			password: 'example-password',
		})
		console.log(data)
		if (error) {
			console.log('error communicaton with supabase, make sure to use a real email address', error)
		} else {
			console.log('check you email for a supabase mage link to ', data)
		}
	}




	const [images, setImages] = useState([])

	async function getImages() {
		const { data, error } = await supabase
			.storage
			.from('images')
			.list(user?.id + '/', {
				limit: 100,
				offset: 0,
				sortBy: { column: "name", order: "asc" }
			});

		if (data !== null) {
			setImages(data)
		} else {
			console.log(error)
		}
	}


	useEffect(() => {
		if (user) {
			getImages()
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user])


	return (
		<div>
			{user === null ?
				<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
					<h1>welcome to image</h1>
					<input type="email" placeholder='enter email'
						onChange={(e) => setEmail(e.target.value)} />
					<button onClick={() => magicLinkLogin()}>
						get magic link
					</button>
				</div>
				: <EmailWall user={user} getImages={getImages} images={images} />
			}

		</div>
	)
}

export default FileImage











