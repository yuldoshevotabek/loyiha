import React from 'react'

function InfoModal({ setModal, index, state, setState }) {
	function cancelNode() {
		setModal(false)
	}
	function deleteModal() {
		const deleteModal = state.data.filter(
			item => item.id !== state.data[index].id
		)
		setState({ data: deleteModal })

		setModal(false)
	}
	return (
		<div className='fixed top-0 w-[100%] h-[100%] inset-0 bg-white/30 backdrop-blur-sm z-40'>
			<div className='w-[500px] h-[200px] bg-amber-200 fixed left-[50%] top-[50%] transform -translate-x-1/2 -translate-y-1/2 rounded-2xl'>
				<i
					className='fa-solid fa-xmark absolute right-2 text-2xl cursor-pointer active:scale-95 top-2'
					onClick={cancelNode}
				></i>
				<div className='mt-5 ml-7'>
					<h1 className='text-[30px] font-[600]'>
						Name: {state.data[index].name}
					</h1>
					<h1 className='text-[30px]'>Age: {state.data[index].age}</h1>
				</div>
				<button
					onClick={deleteModal}
					className='w-35 ml-7 mt-3 rounded-[12px] cursor-pointer active:scale-95 transition-all ease-linear duration-300 h-[35px] bg-red-400'
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default InfoModal
