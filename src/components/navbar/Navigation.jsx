import React from 'react'

function Navigation({
	setStep,
	step,
	setTwoStep,
	twoStep,
	setThreeStep,
	threeStep,
}) {
	function basic() {
		setStep(true)
		setThreeStep(false)
		setTwoStep(false)
	}
	function adcanced() {
		setTwoStep(true)
		setStep(false)
		setThreeStep(false)
	}
	function full() {
		setThreeStep(true)
		setStep(false)
		setTwoStep(false)
	}
	return (
		<div className='w-[870px] h-[110px]  ml-[51px] flex flex-col justify-between'>
			<div className='h-[40px]'>
				<p className='font-[700] text-[#FBDA00] text-[30px] leading-[40px] '>
					Choose zkHive Node plan below
				</p>
			</div>
			<div className='flex justify-between'>
				<div
					onClick={basic}
					className={`w-[270px] ${
						step && ' bg-[#FBDA00] '
					} h-[55px] rounded-[8px] border-solid border-[#FBDA00] border-[2px] flex justify-center items-center cursor-pointer active:scale-95 transition-all ease-linear duration-300`}
				>
					<p
						className={`text-[20px] font-[700] leading-[30px]  ${
							step ? 'text-[#000]' : 'text-[#fbda00]'
						}`}
					>
						Basic
					</p>
				</div>
				<div
					onClick={adcanced}
					className={`w-[270px] ${
						twoStep && ' bg-[#FBDA00] '
					} h-[55px] rounded-[8px] border-solid border-[#FBDA00] border-[2px] flex justify-center items-center cursor-pointer active:scale-95 transition-all ease-linear duration-300`}
				>
					<p
						className={`text-[20px] font-[700] leading-[30px]  ${
							twoStep ? 'text-[#000]' : 'text-[#fbda00]'
						}`}
					>
						Advanced
					</p>
				</div>
				<div
					onClick={full}
					className={`w-[270px] ${
						threeStep && ' bg-[#FBDA00] '
					} h-[55px] rounded-[8px] border-solid border-[#FBDA00] border-[2px] flex justify-center items-center cursor-pointer active:scale-95 transition-all ease-linear duration-300`}
				>
					<p
						className={`text-[20px] font-[700] leading-[30px]  ${
							threeStep ? 'text-[#000]' : 'text-[#fbda00]'
						}`}
					>
						Full
					</p>
				</div>
			</div>
		</div>
	)
}

export default Navigation
