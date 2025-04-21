import React, { useState } from 'react'

function AddNewNode({ setAdd, addForm }) {
	function cancelNode() {
		setAdd(false)
	}
	const [state, setState] = useState({ name: '', age: '' })
	const changeHandlerInput = e => {
		const { name, value } = e.target
		setState(prev => ({ ...prev, [name]: value }))
	}
	const { name, age } = state
	console.log(typeof name)

	function btnClick(e) {
		if (
			name == null ||
			name == undefined ||
			name == '' ||
			age == '' ||
			age == null ||
			age == undefined
		) {
			alert('Hamma joyni toldiring')
		} else if (typeof name == 'number') {
			alert('Ismingizni Yozing.')
		} else if (age < 18) {
			alert('siz yoshsiz')
		} else if (age > 80) {
			alert('siz qarisiz')
		} else {
			addForm(e, { name, age })
			setAdd(false)
		}
	}
	return (
		<div className='fixed top-0 w-[100%] h-[100%] inset-0 bg-white/30 backdrop-blur-sm z-40'>
			<div className='w-[400px] h-[400px] bg-amber-300 fixed left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
				<i
					className='fa-solid fa-xmark absolute right-2 text-2xl cursor-pointer active:scale-95 top-2'
					onClick={cancelNode}
				></i>
				<form className='text-center mt-22'>
					<div>
						<input
							type='text'
							name='name'
							value={state.name}
							onChange={changeHandlerInput}
							placeholder='Ismingizni Yozing...'
							className='w-[70%] h-[35px] outline-none border-[1px] border-solid border-[#000000] rounded-[10px] pl-2 pr-2 placeholder:text-[#000] mb-3'
						/>
					</div>
					<div>
						<input
							type='number'
							value={state.age.slice(0, 2)}
							name='age'
							onChange={changeHandlerInput}
							placeholder='Yoshingizni Yozing...'
							className='w-[70%] h-[35px] outline-none border-[1px] border-solid border-[#060404] rounded-[10px] pl-2 pr-2 placeholder:text-[#000]'
						/>
					</div>
				</form>
				<button
					onClick={btnClick}
					className='w-50 ml-25 bg-green-600 rounded-[5px] cursor-pointer active:scale-95 mt-10  h-8'
				>
					<p className='font-[500] text-[#000] text-[20px]'>Qo'shish</p>
				</button>
			</div>
		</div>
	)
}

export default AddNewNode
