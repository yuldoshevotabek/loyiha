import React from 'react'

function NavBar({
	step,
	twoStep,
	threeStep,
	check,
	next,
	setStep,
	setThreeStep,
	setTwoStep,
	setCheck,
	setNext,
}) {
	function oneClick() {
		setStep(false)
		setThreeStep(false)
		setTwoStep(false)
		setCheck(false)
		setNext(false)
	}
	function twoClick() {
		setCheck(false)
		setNext(false)
	}
	function threeClick() {
		setNext(false)
	}
	return (
		<div className='h-[695px] w-[201px]  flex flex-col justify-between relative'>
			<div className='border-1  flex justify-between items-center'>
				<div>
					<p className='text-[#FBDA00] font-[700] text-[30px] leading-[40px] '>
						Step
					</p>
				</div>
				<div>
					<div className='relative w-[100px] h-[110px] flex items-center justify-center cursor-pointer active:scale-95'>
						<img
							onClick={oneClick}
							src={
								step || twoStep || threeStep
									? '/imgs/hexagon2.svg'
									: '/imgs/hexagon.svg'
							}
							alt='hexagon'
						/>
						<p
							className={` ${
								step || threeStep || twoStep
									? 'text-[#000000]'
									: 'text-[#FBDA00]'
							} font-[700] text-[40px] leading-[50px] absolute`}
						>
							1
						</p>
					</div>
				</div>
				<div
					className={`w-[6px] h-[89px] ${
						step || threeStep || twoStep ? 'bg-[#FBDA00]' : 'bg-[#454511]'
					}   absolute top-[109px] right-[49px]`}
				></div>
			</div>
			<div className='border-1  flex justify-between items-center'>
				<div>
					<p
						className={` ${
							step || threeStep || twoStep ? 'text-[#FBDA00]' : 'text-[#454511]'
						} font-[700] text-[30px] leading-[40px] `}
					>
						Step
					</p>
				</div>
				<div>
					<div className='relative w-[100px] h-[110px] flex items-center justify-center cursor-pointer active:scale-95'>
						<img
							onClick={twoClick}
							src={
								step || threeStep || twoStep
									? check
										? '/imgs/hexagon2.svg'
										: '/imgs/hexagon.svg'
									: '/imgs/hexagon1.svg'
							}
							alt='hexagon'
						/>
						<p
							className={`${
								step || threeStep || twoStep
									? check
										? 'text-[#000000]'
										: 'text-[#FBDA00]'
									: 'text-[#454511]'
							} font-[700] text-[40px] leading-[50px] absolute`}
						>
							2
						</p>
					</div>
				</div>
				<div
					className={`w-[6px] ${
						check ? 'bg-[#FBDA00]' : 'bg-[#454511]'
					} h-[89px] bg-[#454511] absolute top-[304px] right-[49px]`}
				></div>
			</div>
			<div className='border-1  flex justify-between items-center'>
				<div>
					<p
						className={` ${
							check ? 'text-[#FBDA00]' : 'text-[#454511]'
						} font-[700] text-[30px] leading-[40px] `}
					>
						Step
					</p>
				</div>
				<div>
					<div className='relative w-[100px] h-[110px] flex items-center justify-center cursor-pointer active:scale-95'>
						<img
							onClick={threeClick}
							src={
								check
									? next
										? '/imgs/hexagon2.svg'
										: '/imgs/hexagon.svg'
									: '/imgs/hexagon1.svg'
							}
							alt='hexagon'
						/>
						<p
							className={` ${
								check
									? next
										? 'text-[#000000]'
										: 'text-[#FBDA00]'
									: 'text-[#454511]'
							} font-[700] text-[40px] leading-[50px] absolute`}
						>
							3
						</p>
					</div>
				</div>
				<div
					className={`w-[6px] ${
						next ? 'bg-[#FBDA00]' : 'bg-[#454511]'
					} h-[89px] bg-[#454511] absolute top-[499px] right-[49px]`}
				></div>
			</div>
			<div className=' flex justify-between items-center'>
				<div>
					<p
						className={` ${
							next ? 'text-[#FBDA00]' : 'text-[#454511]'
						} font-[700] text-[30px] leading-[40px] `}
					>
						Step
					</p>
				</div>
				<div>
					<div className='relative w-[100px] h-[110px] flex items-center justify-center cursor-pointer active:scale-95'>
						<img
							src={next ? '/imgs/hexagon.svg' : '/imgs/hexagon1.svg'}
							alt='hexagon'
						/>
						<p
							className={` ${
								next ? 'text-[#FBDA00]' : 'text-[#454511]'
							} font-[700] text-[40px] leading-[50px] absolute`}
						>
							4
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NavBar
