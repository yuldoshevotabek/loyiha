import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import Profil from '../pages/modal/Profil'
import './header.css'

function Header({ changeLng }) {
	const [profil, setProfil] = useState(false)
	function profilMenuClick() {
		setProfil(true)
	}
	const changeLngClick = e => {
		changeLng(e.target.value)
	}

	const { t } = useTranslation()
	return (
		<div className='flex justify-center'>
			{profil ? <Profil setProfil={setProfil} /> : ''}
			<div className='border-solid border-[#000000] bg-[#363607] mt-10 border-1 w-[1360px] h-[90px] flex justify-between px-[22px] items-center'>
				<div
					onClick={profilMenuClick}
					className='flex w-[157px] h-[70px] items-center font-[500] text-[30px] leading-[40px]'
				>
					<div className='active:scale-95'>
						<img src='/imgs/vite.svg' alt='viteImg' />
						<img
							className='cursor-pointer'
							src='../../../src/components/header/imgs/portfolio.svg'
							alt='portfolio'
						/>
					</div>
					<div>
						<a href='#' className='text-[#FBDA00]'>
							zkHive
						</a>
					</div>
				</div>
				<div className='flex gap-[44px] '>
					<ul className='flex gap-[21px] text-[#FFFFFF] font-[500] text-[20px] leading-[30px]  pt-[8px]'>
						<li className='hover:text-[#FBDA00] hover:border-b-1 border-solid border-[#FBDA00] h-[43px]'>
							<NavLink to='/'>{t('home')}</NavLink>
						</li>
						<li className='hover:text-[#FBDA00] hover:border-b-1 border-solid border-[#FBDA00] h-[43px]'>
							<a href='#'>{t('buyVpn')}</a>
						</li>
						<li className='hover:text-[#FBDA00] hover:border-b-1 border-solid border-[#FBDA00] h-[43px]'>
							<NavLink to='/buyNode'>{t('buyNode')}</NavLink>
						</li>
						<li className='hover:text-[#FBDA00] hover:border-b-1 border-solid border-[#FBDA00] h-[43px]'>
							<NavLink to='/node'>{t('myNode')}</NavLink>
						</li>
					</ul>

					<select
						onChange={changeLngClick}
						className='outline-none cursor-pointer text-[20px]'
					>
						<option value='en'>English</option>
						<option value='uz'>Uzbek</option>
					</select>
					<button className='w-[220px] h-[46px] border-1 border-[#FBDA00] border-solid rounded-[8px] px-[21px] py-[6px] bg-[#FBDA00] cursor-pointer active:scale-95 transition-all duration-300 ease-linear'>
						<p className='text-[#000000] text-[20px] font-[500] leading-[30px]'>
							0dxkjhd....JeB73m
						</p>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
