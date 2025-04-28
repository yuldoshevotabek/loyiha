import React from 'react'

function ProfilInfo({ namee, setSave }) {
	function btnClick() {
		setSave(false)
	}
	const { name, lastName, age } = namee
	return (
		<div className='flex flex-col items-center gap-2'>
			<p>Name: {name}</p>
			<p>LastName: {lastName}</p>
			<p>Age: {age}</p>
			<button
				onClick={btnClick}
				className='w-25 bg-green-600 text-[18px] font-[600] rounded-[10px] cursor-pointer active:scale-95'
			>
				Tahrirlash
			</button>
		</div>
	)
}

export default ProfilInfo
