import React from 'react'

function Check({ check, setCheck }) {
	function checkClick() {
		setCheck(true)
	}
	return (
		<div className='h-[110px] ml-[60px] mt-[87px] flex flex-col justify-between'>
			<div>
				<h1 className='text-[#FBDA00] font-[700] text-[30px] leading-[40px] '>
					Do you hold at least a 0.25% Supply of SVPN tokens?
				</h1>
			</div>
			<div>
				<button
					onClick={checkClick}
					className={`w-[270px] ${
						check ? 'bg-[#08F02D]' : 'bg-[#FBDA00]'
					} h-[55px] rounded-[8px]  cursor-pointer active:scale-95 transition-all duration-300 ease-linear text-[#000000] font-[700] text-[20px] leading-[30px] `}
				>
					{check ? 'Checked' : 'Check'}
				</button>
			</div>
		</div>
	)
}

export default Check
