import React, { useState } from 'react'

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
	return (
		<div className='w-[300px] h-[300px] bg-amber-100 absolute left-3 top-10 z-100'>
			<label className='absolute w-[70px] h-[70px] bg-red-400 rounded-[50%] left-3 top-3 flex items-center justify-center'>
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
					<label className='absolute left-23 top-13'>
						<input type='file' onChange={imgChange} className='hidden' />
						<i className='fa-solid fa-camera-rotate text-[25px]'></i>
					</label>
				</div>
			)}
			<div className='border-1 border-solid border-red-400 mt-25'>
				<div>
					<label className='font-[600] text-[20px] mr-2'>FirstName:</label>
					<input
						type='text'
						placeholder='...'
						className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
					/>
				</div>
				<div>
					<label className='font-[600] text-[20px] mr-2'>LastName:</label>
					<input
						type='text'
						placeholder='...'
						className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
					/>
				</div>
				<div>
					<label className='font-[600] text-[20px] mr-2'>Age:</label>
					<input
						type='number'
						placeholder='...'
						className='outline-none border-1 border-solid border-[#000] rounded-2xl pl-2'
					/>
				</div>
			</div>
			<i
				className='fa-solid fa-xmark absolute right-2 text-2xl cursor-pointer active:scale-95 top-2'
				onClick={cancelProfil}
			></i>
		</div>
	)
}

export default Profil
