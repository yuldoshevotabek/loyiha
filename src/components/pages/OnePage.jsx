import React from 'react'

function OnePage() {
	return (
		<div>
			<div className='bg-[#000000] min-h-screen'>
				<h1 className='font-[700] text-[60px] leading-[80px] text-[#FBDA00] text-center pt-[56px] mb-10'>
					ZKHIVE NODE DAPP
				</h1>
				<div className='flex items-center flex-col'>
					<div className='w-[1064px] flex flex-wrap gap-[24px]'>
						<div className='w-[520px] h-[300px] flex gap-[24px]'>
							<div className='w-[248px] flex flex-col justify-between'>
								<div className='border-1 border-[#545433] border-solid w-[248px] h-[138px] rounded-[24px] flex flex-col justify-center items-center'>
									<div>
										<p className='text-[#FBDA00] text-[40px] font-[800] leading-[50px]'>
											23
										</p>
									</div>
									<div>
										<p className='text-[#FFFFFF] font-[400] text-[20px] leading-[30px]'>
											Viruses detected
										</p>
									</div>
								</div>
								<div className='border-1 border-[#545433] border-solid w-[248px] h-[138px] rounded-[24px] flex flex-col justify-center items-center'>
									<div>
										<p className='text-[#FBDA00] text-[40px] font-[800] leading-[50px]'>
											12hrs
										</p>
									</div>
									<div>
										<p className='text-[#FFFFFF] font-[400] text-[20px] leading-[30px]'>
											Node uptime
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='border-1 border-[#545433] border-solid w-[248px] h-[100%] rounded-[24px] flex flex-col justify-center items-center'>
									<div>
										<p className='text-[#FBDA00] text-[40px] font-[800] leading-[50px]'>
											56
										</p>
									</div>
									<div>
										<p className='text-[#FFFFFF] font-[400] text-[20px] leading-[30px]'>
											Number of Scans
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='w-[520px] h-[300px] border-1 border-[#545433] border-solid rounded-[24px] flex flex-col justify-center items-center gap-[57px]'>
							<div>
								<div>
									<p className='text-[#FBDA00] font-[800] text-[48px] leading-[68px] '>
										0.15 ETH
									</p>
								</div>
								<div>
									<p className='font-[600] text-[30px] text-[#FFFFFF] leading-[40px] '>
										Node earnings
									</p>
								</div>
							</div>
							<div>
								<button className='bg-[#FBDA00] rounded-[12px] w-[472px] h-[58px] px-[20px] py-[12px] cursor-pointer active:scale-95 transition-all ease-linear duration-300'>
									<p className='font-[700] text-[#000000] text-[24px] leading-[34px]'>
										Claim now
									</p>
								</button>
							</div>
						</div>
						<div className='w-[520px] h-[300px] border-1 border-[#363607] border-solid rounded-[24px] bg-[#363607] flex flex-col justify-center items-center relative'>
							<img
								className='absolute w-[119px] h-[141px] -top-[20px] -left-[19px] -rotate-12'
								src='/imgs/portfolio.svg'
								alt='beeImg'
							/>
							<div>
								<p className='font-[700] text-[#FBDA00] text-[30px] leading-[40px]'>
									Node name
								</p>
							</div>
							<div>
								<p className='text-[#FFFFFF] font-[400] text-[20px] leading-[30px]'>
									000xx00x0xxxxxxX00000xxxx0
								</p>
							</div>
							<img
								className='absolute w-[128px] h-[152px] -right-[25px] -bottom-[30px] rotate-19'
								src='/imgs/portfolio.svg'
								alt='beeImg'
							/>
						</div>
						<div className='w-[520px] h-[300px] flex flex-col justify-between'>
							<div className='w-[100%] h-[138px] flex justify-between'>
								<div className='border-1 border-[#545433] border-solid w-[248px] h-[138px] rounded-[24px] flex flex-col justify-center items-center'>
									<div className='w-[118px] h-[40px] flex justify-between items-center'>
										<div className='w-[15px] h-[15px] rounded-[50%] bg-[#08F02D]'></div>
										<h4 className='text-[#08F02D] font-[700] text-[30px] leading-[40px]'>
											Active
										</h4>
									</div>
									<div>
										<p className='text-[#FFFFFF] text-[20px] leading-[30px] font-[400]'>
											Node Status
										</p>
									</div>
								</div>
								<div className='border-1 border-[#545433] border-solid w-[248px] h-[138px] rounded-[24px] flex flex-col justify-center items-center'>
									<div>
										<p className='font-[800] text-[#FBDA00] text-[40px] leading-[50px] '>
											001
										</p>
									</div>
									<div>
										<p className='font-[400] text-[#FFFFFF] text-[20px] leading-[30px] '>
											Node Type
										</p>
									</div>
								</div>
							</div>
							<div>
								<div className='border-1 border-[#545433] border-solid w-[100%] h-[138px] rounded-[24px]'></div>
							</div>
						</div>
					</div>
					<footer className='flex h-[34px] items-center gap-[12px] mt-[124px]	'>
						<div>
							<img src='/imgs/Footer.svg' alt='footerImg' />
						</div>
						<div>
							<p
								className='text-[#FFFFFF] font-[500] text-[24px] leading-[34
						px]'
							>
								2024 SVPN Node. All Rights Reserved
							</p>
						</div>
					</footer>
				</div>
			</div>
		</div>
	)
}

export default OnePage
