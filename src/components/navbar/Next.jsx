import React from 'react'

function Next({ setNext }) {
	function nextClick() {
		setNext(true)
	}
	return (
		<div className='h-[110px]  ml-[60px] mt-[85px] flex flex-col justify-between'>
			<div>
				<h2 className='font-[700] text-[#FBDA00] text-[30px] leading-[40px]'>
					Supply (0.45%)
				</h2>
			</div>
			<div className='flex gap-[30px] items-center'>
				<button
					onClick={nextClick}
					className='bg-[#FBDA00] rounded-[8px] w-[270px] h-[55px] font-[700] text-[#000000] text-[20px] leading-[30px] cursor-pointer active:scale-95 transition-all ease-linear duration-300'
				>
					Next
				</button>
				<p className='text-[#08F02D] font-[500] text-[20px] leading-[30px]'>
					Your staked amount is sufficient to purchase a node.
				</p>
			</div>
		</div>
	)
}

export default Next
