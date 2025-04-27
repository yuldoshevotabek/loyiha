import React from 'react'

function ProfilInfo({ name, setSave }) {
	function btnClick() {
		setSave(false)
	}
	return (
		<div className='flex flex-col items-center gap-2'>
			<p>Name: {name.name}</p>
			<p>LastName: {name.lastName}</p>
			<p>Age: {name.age}</p>
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
