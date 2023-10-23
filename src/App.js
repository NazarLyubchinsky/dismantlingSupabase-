// import React, { useState } from "react";
// import { BsFillTrashFill } from 'react-icons/bs';
// import { MdDoneOutline } from 'react-icons/md';
// import { FaStar } from 'react-icons/fa';
import './style.scss'
// import Vanta from "./Vanta";
// import { useEffect } from "react";
// import { supabase } from "./supabaseClient";
import FileImage from "./LoadingImage/FileImage";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";




function App() {


	// function data(date) {
	// 	return new Intl.DateTimeFormat('en-En', {
	// 		day: '2-digit',
	// 		month: 'long',
	// 		year: 'numeric',
	// 	}).format(new Date(date))
	// }

	// const [name, setName] = useState("")
	// const [description, setDescription] = useState("")
	// const [products, setProducts] = useState([])


	// useEffect(() => {
	// 	getProducts()
	// }, [])

	// async function getProducts() {
	// 	try {
	// 		const { data, error } = await supabase
	// 			.from("products")
	// 			.select("*")
	// 			.limit(10)
	// 		if (error) throw error;
	// 		if (data != null) {
	// 			setProducts(data);
	// 		}
	// 	} catch (error) {
	// 		alert(error.message)
	// 	}
	// }


	// async function createProduct() {
	// 	try {
	// 		const { data, error } = await supabase
	// 			.from("products")
	// 			.insert([
	// 				{
	// 					name: name,
	// 					description: description
	// 				}
	// 			])
	// 			.single()
	// 		console.log(data)

	// 		if (error) throw error;
	// 		window.location.reload()
	// 	} catch (error) {
	// 		console.log(error.message)
	// 	}
	// }

	// const handleNameChange = (e) => {
	// 	setName(e.target.value);
	// }

	// const handleDescriptionChange = (e) => {
	// 	setDescription(e.target.value);
	// }



	return (
		<>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/" element={<FileImage />}></Route>
			</Routes>
		</>
		// <div className="App">
		// 	<div className="content">

		// 		{/* data */}
		// 		<div style={{ background: '#fff' }}>
		// 			{
		// 				products.map((product, idx) => (
		// 					<div key={idx} style={{ color: 'red' }}>
		// 						{product.name}
		// 					</div>
		// 				))
		// 			}
		// 			<input onBlur={handleNameChange} type="text" />
		// 			<input onBlur={handleDescriptionChange} type="text" />
		// 			<button onClick={() => createProduct()}>
		// 				go
		// 			</button>
		// 			<br />
		// 			<FileImage />
		// 		</div>



		// 		<div>
		// 			<h2 className='data__title'>{data(new Date())}</h2>
		// 			<h1 className='title'>Todo List</h1>
		// 			<span className='count'> 10 tasks  to done 2
		// 			</span>
		// 		</div>

		// 		<form className='form'>
		// 			<input maxLength='15' minLength={4} className='input' required type="text" />
		// 			<button className='add__btn' type='submit'>Add</button>
		// 		</form>

		// 		{/*<h3 className='empty'>Ваш список задач пуст !!!</h3>*/}

		// 		<ul className='list'>
		// 			<li className='item'>
		// 				<span>sda</span>

		// 				<span className='text'>ad</span>
		// 				<div className='list__btns'>
		// 					<button className='btn' type={"button"}><MdDoneOutline />
		// 					</button>
		// 					<button className='btn' type='button'><FaStar />
		// 					</button>
		// 					<button className='btn' type='button'><BsFillTrashFill /></button>
		// 				</div>
		// 			</li>
		// 			<li className='item'>
		// 				<span>sda</span>

		// 				<span className='text'>ad</span>
		// 				<div className='list__btns'>
		// 					<button className='btn' type={"button"}><MdDoneOutline />
		// 					</button>
		// 					<button className='btn' type='button'><FaStar />
		// 					</button>
		// 					<button className='btn' type='button'><BsFillTrashFill /></button>
		// 				</div>
		// 			</li>
		// 			<li className='item'>
		// 				<span>sda</span>

		// 				<span className='text'>ad</span>
		// 				<div className='list__btns'>
		// 					<button className='btn' type={"button"}><MdDoneOutline />
		// 					</button>
		// 					<button className='btn' type='button'><FaStar />
		// 					</button>
		// 					<button className='btn' type='button'><BsFillTrashFill /></button>
		// 				</div>
		// 			</li>

		// 		</ul>

		// 		<input className='search' type="search" placeholder='enter task' />

		// 		<div className='footer__btns'>
		// 			<div className='footer__btns-left'>
		// 				<button className='btn__footer' type='button'>All</button>
		// 				<button className='btn__footer' type='button'><MdDoneOutline /></button>
		// 				<button className='btn__footer' type='button'><FaStar /></button>
		// 			</div>
		// 			<div className='footer__btns-right'>
		// 				<button className='delete__all-btn' type='button'>Delete All <MdDoneOutline /></button>
		// 			</div>
		// 		</div>
		// 	</div>
		// 	<Vanta />
		// </div>

	);
}

export default App;
