import React, { useState } from 'react'
import ProfilInfo from './Profil-Info'

function Profil({ setProfil }) {
	function cancelProfil() {
		setProfil(false)
	}
	const [selectIMg, setSelectImg] = useState(null)
	function imgChange(e) {
		const file = e.target.files[0]
		if (file) {
			const imageUrl = URL.createObjectURL(file)
			setSelectImg(imageUrl)
		}
	}
	const [save, setSave] = useState(false)
	const [name, setName] = useState({ name: '', lastName: '', age: '' })
	const handleInput = e => {
		const { name, value } = e.target
		setName(prev => ({ ...prev, [name]: value }))
	}
	const btnClick = () => {
		setSave(true)
	}
	return (
		<div className='w-[300px] h-[300px] bg-amber-100 absolute left-3 top-10 z-100'>
			<label className='absolute w-[70px] h-[70px] bg-red-400 rounded-[50%] left-3 top-3 flex items-center justify-center cursor-pointer active:scale-95'>
				<input type='file' onChange={imgChange} className='hidden' />
				<i className='fa-solid fa-camera-rotate text-2xl text-[#FFF]'></i>
			</label>
			{selectIMg && (
				<div>
					<img
						src={selectIMg}
						alt='profilImg'
						className='w-[70px] h-[70px] z-40 rounded-[50%] absolute top-3 left-3 bg-amber-300'
					/>
					<label className='absolute left-23 top-13 cursor-pointer active:scale-95'>
						<input type='file' onChange={imgChange} className='hidden' />
						<i className='fa-solid fa-camera-rotate text-[25px]'></i>
					</label>
				</div>
			)}
			<div className=' mt-25 '>
				{save ? (
					<ProfilInfo name={name} setSave={setSave} />
				) : (
					<div className='flex flex-col items-center gap-2'>
						<div>
							<input
								onChange={handleInput}
								type='text'
								name='name'
								placeholder='FirstName'
								className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
							/>
						</div>
						<div>
							<input
								onChange={handleInput}
								type='text'
								name='lastName'
								placeholder='LastName'
								className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
							/>
						</div>
						<div>
							<input
								onChange={handleInput}
								name='age'
								type='number'
								placeholder='Age'
								className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
							/>
						</div>
						<button
							onClick={btnClick}
							className='w-25 bg-green-600 text-[18px] font-[600] rounded-[10px] cursor-pointer active:scale-95'
						>
							Saqlash
						</button>
					</div>
				)}
			</div>
			<i
				className='fa-solid fa-xmark absolute right-2 text-2xl cursor-pointer active:scale-95 top-2'
				onClick={cancelProfil}
			></i>
		</div>
	)
}

export default Profil
