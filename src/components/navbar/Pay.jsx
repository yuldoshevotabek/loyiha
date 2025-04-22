import React from 'react'

function Pay({ setPay }) {
	function payClick() {
		setPay(true)
	}
	return (
		<div className='h-[144px] mt-[85px] ml-[60px]'>
			<div>
				<h2 className='font-[600] text-[#FBDA00] text-[30px] leading-[40px]'>
					You need to pay a yearly fee of 0.3 ETH to purchase the node.
				</h2>
			</div>
			<div className='flex gap-[32px] mt-[15px]'>
				<div>
					<button
						onClick={payClick}
						className='w-[270px] h-[55px] hover:bg-[#FBDA00] rounded-[8px] border-solid border-1 border-[#FBDA00] text-[#FBDA00] hover:text-[#000000] text-[20px] font-[700] leading-[30px]  cursor-pointer active:scale-95 transition-transform ease-linear duration-300'
					>
						Pay with ETH
					</button>
				</div>
				<div>
					<button
						onClick={payClick}
						className='w-[270px] h-[55px] hover:bg-[#FBDA00] rounded-[8px] border-solid border-1 border-[#FBDA00] text-[#FBDA00] hover:text-[#000000] text-[20px] font-[700] leading-[30px] cursor-pointer active:scale-95 transition-transform ease-linear duration-300'
					>
						Pay with tokens
					</button>
				</div>
			</div>
			<div>
				<p className='text-[#FFFFFF] font-[500] text-[16px] leading-[26px] mt-[8px]'>
					By clicking on “Pay Now”, a Metamask pop-up will appear for processing
					the payment of 0.3 ETH to Shadow Node.
				</p>
			</div>
		</div>
	)
}

export default Pay
