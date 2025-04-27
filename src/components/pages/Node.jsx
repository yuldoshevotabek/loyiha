import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddNewNode from './modal/AddNewNode'
import InfoModal from './modal/InfoModal'

function Node() {
	const [add, setAdd] = useState(false)
	const [modal, setModal] = useState(false)
	const [index, setIndex] = useState(null)

	const [state, setState] = useState(() => {
		const stored = localStorage.getItem('nodes')
		return stored ? { data: JSON.parse(stored) } : { data: [] }
	})

	useEffect(() => {
		localStorage.setItem('nodes', JSON.stringify(state.data))
	}, [state])

	const addForm = (e, item) => {
		e.preventDefault()
		setState(prevState => ({
			data: [...prevState.data, { ...item, id: uuidv4() }],
		}))
	}

	const modalClick = index => {
		setIndex(index)
		setModal(true)
	}
	return (
		<div className='bg-[#000000] min-h-screen'>
			{add && <AddNewNode addForm={addForm} setAdd={setAdd} />}
			{modal && (
				<InfoModal
					setModal={setModal}
					index={index}
					state={state}
					setState={setState}
				/>
			)}
			<h1 className='pt-[56px] text-[#FBDA00] font-[700] text-[60px] leading-[80px] text-center'>
				My Nodes
			</h1>
			<div className='w-[1140px] flex flex-wrap gap-[20px] mt-[37px]  m-auto h-[500px] overflow-auto'>
				<div
					className='w-[360px] h-[240px] rounded-[20px] border-1 border-solid border-[#363607] bg-[#FBDA00] flex items-center justify-center cursor-pointer active:scale-95 transition-all ease-linear duration-300'
					onClick={() => setAdd(true)}
				>
					<div className='w-[217px] h-[120px] flex flex-col justify-between items-center '>
						<div>
							<i className='fa-solid fa-plus w-[60px] h-[60px] text-[65px]'></i>
						</div>
						<div className='h-10'>
							<p className='text-[#000000] font-[700] text-[30px] leading-[40px] text-center'>
								Add New Node
							</p>
						</div>
					</div>
				</div>
				{state.data
					.slice()
					.reverse()
					.map((item, index) => (
						<div
							key={item.id}
							onClick={() => modalClick(index)}
							className='w-[360px] h-[240px] rounded-[20px] border-[1px] border-solid border-[#FBDA00] flex items-center justify-center flex-col hover:scale-105 hover:border-[#363607] cursor-pointer active:scale-100 transition-all ease-linear duration-200'
						>
							<p className=' text-center font-[700] text-[#FBDA00] text-[40px] leading-[50px] uppercase '>
								{item.name}
							</p>
							<p className='text-[#FFF] text-[20px]'>{item.age} yosh</p>
						</div>
					))}
			</div>
			<div className='m-auto w-[1128px] pb-[117px] mt-[80px] bg-[#000]'>
				<div className='w-[489px] h-[66px] rounded-[12px] bg-[#FBDA00] flex items-center justify-center   cursor-pointer active:scale-95 transition-all ease-linear duration-300'>
					<p className='font-[700] text-[#000000] text-[24px] leading-[34px]'>
						Click here to see more Nodes...
					</p>
				</div>
			</div>
		</div>
	)
}

export default Node
