import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import BuyPages from '../navbar/BuyPages.jsx'
import Check from '../navbar/Check.jsx'
import NavBar from '../navbar/NavBar'
import Navigation from '../navbar/Navigation'
import Next from '../navbar/Next.jsx'
import Pay from '../navbar/Pay.jsx'
import Payment from '../navbar/Payment.jsx'

function BuyNode() {
	const [step, setStep] = useState(false)
	const [twoStep, setTwoStep] = useState(false)
	const [threeStep, setThreeStep] = useState(false)
	const [check, setCheck] = useState(false)
	const [next, setNext] = useState(false)
	const [pay, setPay] = useState(false)
	const { t } = useTranslation()
	return (
		<div className='bg-[#000000] min-h-screen'>
			<h1 className='font-[700] text-[#FBDA00] text-[60px] leading-[80px] text-center pt-[56px]'>
				{t('buyNodeS')}
			</h1>
			{pay ? (
				<Payment setPay={setPay} />
			) : (
				<div className='w-[1130px]  m-auto mt-[78px]'>
					<div className='flex'>
						<NavBar
							setNext={setNext}
							setCheck={setCheck}
							setStep={setStep}
							setTwoStep={setTwoStep}
							setThreeStep={setThreeStep}
							step={step}
							twoStep={twoStep}
							threeStep={threeStep}
							check={check}
							next={next}
						/>
						<div>
							<Navigation
								setStep={setStep}
								step={step}
								setTwoStep={setTwoStep}
								twoStep={twoStep}
								setThreeStep={setThreeStep}
								threeStep={threeStep}
							/>
							{step || threeStep || twoStep ? (
								<Check setCheck={setCheck} check={check} />
							) : (
								<BuyPages />
							)}
							{check ? <Next setNext={setNext} /> : ''}
							{next ? <Pay setPay={setPay} /> : ''}
						</div>
					</div>
				</div>
			)}
			<footer className='flex items-center gap-3 mt-[149px] m-auto w-[498px] pb-[21px]'>
				<div>
					<img src='/imgs/copyRight.svg' alt='copyRight' />
				</div>
				<div>
					<p className='text-[#FFFFFF] font-[500] text-[24px] leading-[34px] '>
						2024 Shadow Node. All Rights Reserved
					</p>
				</div>
			</footer>
		</div>
	)
}

export default BuyNode
