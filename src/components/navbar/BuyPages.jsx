import React from 'react'
import { Data } from './BuyPages'
function BuyPages() {
	return (
		<div className='w-[870px] h-[520px] ml-[60px] mt-[79px] flex justify-between'>
			{Data.map(item => {
				return (
					<div
						key={item.id}
						className='w-[270px] h-[520px] border-1 border-solid border-[#363607] rounded-[20px] text-[#FFF] flex flex-col items-center hover:border-[#FBDA00] hover:bg-[#1D1D03] hover:scale-102'
					>
						<img
							className='w-[56px] h-[56px] mb-[12px] mt-[24px]'
							src={item.img}
							alt={item.img}
						/>
						<p className='text-[#FBDA00] font-[700] text-[20px] leading-[30px] border-b-[3px] border-[#979797] border-solid w-[220px] text-center pb-[12px]'>
							{item.title}
						</p>
						<p className='text-[#FFFFFF] font-[700] text-[16px] leading-[26px] mt-[12px] mb-[12px]'>
							{item.minTitle}
						</p>
						<div className='w-[170px] h-[230px] flex flex-col gap-[6px] mb-[27px]'>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf1.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf1.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf2.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf2.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf3.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf3.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf4.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf4.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf5.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf5.para}
									</p>
								</div>
							</div>
							<div className='flex gap-1'>
								<div className='text-[#08F02D]'>
									<i className={item.paragraf6.check}></i>
								</div>
								<div>
									<p className='font-[400] text-[#979797] text-[14px] leading-[26px]'>
										{item.paragraf6.para}
									</p>
								</div>
							</div>
						</div>
						<button className='w-[220px] h-[48px] border-1 border-solid border-[#FBDA00] rounded-[8px] hover:bg-[#FBDA00] cursor-pointer active:scale-95 transition-transform ease-linear duration-300 text-[#FBDA00] text-[20px] font-[700] leading-[30px] hover:text-[#000000]'>
							{item.btnContent}
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default BuyPages
