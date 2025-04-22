import React from 'react'

function Payment({ setPay }) {
	function btnClick() {
		setPay(false)
	}
	return (
		<div className='w-[835px] h-[477px] flex flex-col items-center border-solid border-red-400 border-1 m-auto mt-[161px] mb-[289px]'>
			<h1 className='text-[#08F02D] font-[700] text-[50px] leading-[60px] '>
				Congratulations
			</h1>
			<div className='w-[763px] h-[92px] font-[600] leading-[46px] text-[34px] text-[#FFFFFF] text-center mt-3'>
				You have successfully purchased a node. Welcome to Shadow Node!
			</div>
			<hr className='bg-[#ACB3CF] h-1 w-[775px] mt-10' />
			<div>
				<p className='font-[500] text-[#FFFFFF] text-[24px] leading-[34px] text-center w-[736px] mt-10'>
					Your node will be set up within 3 to 6 hours. After this time, you can
					connect your wallet to access the node dashboard.
				</p>
			</div>
			<button
				onClick={btnClick}
				className='w-[775px] h-[62px] bg-[#FBDA00] mt-10 text-[#000000] font-[700] text-[30px] leading-[30px]  cursor-pointer active:scale-95 transition-all duration-300 ease-linear'
			>
				Go to My Nodes
			</button>
		</div>
	)
}

export default Payment
