import { useSupabaseClient } from '@supabase/auth-helpers-react';
import React from 'react'
import { v4 as uuidv4 } from 'uuid'


const EmailWall = ({ user, getImages, images }) => {

	const supabase = useSupabaseClient();



	async function signOut() {
		const { error } = await supabase.auth.signOut();
		console.log(error)
	}

	async function uploadImage(e) {
		let file = e.target.files[0];

		const { data, error } = await supabase
			.storage
			.from('images')
			.upload(user.id + '/' + uuidv4(), file);

		if (data) {
			getImages();
		} else if (error) {
			console.log('Error uploading the image:', error.message);
		}
	}

	async function deleteImage(imageName) {
		const { error } = await supabase
			.storage
			.from('images')
			.remove([user.id + '/' + imageName])
		if (error) {
			console.log(error)
		} else {
			getImages()
		}
	}

	const CDNURL = "https://nlyccuuybuhzparldtfu.supabase.co/storage/v1/object/public/images/"
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

			<h1>
				you imageWall
			</h1>
			<button onClick={() => signOut()}>sing out</button>
			<p>current user: {user.email}</p>
			<br />
			<p>file button</p>
			<input type="file" accept="image/png, image/jpeg" onChange={(e) => uploadImage(e)} />
			<hr />
			<h3>Your Images</h3>

			<div style={{ display: 'flex', gap: '10px' }}>
				{images.map((image) => {
					return (
						<div key={CDNURL + user.id + '/' + image.name} style={{ display: 'flex', flexDirection: "column", height: "100%", width: "250px", border: '1px solid grey', padding: '10px', gap: '15px' }}>
							<img style={{ width: '100%', }} src={CDNURL + user.id + '/' + image.name} alt="" />
							<button onClick={() => deleteImage(image.name)}>delete image</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default EmailWall