function TVShowCard({ show }) {
	return (
		<div className='min-w-[260px] rounded-xl overflow-hidden group cursor-pointer'>
			{/* Image */}
			<img
				src={
					show.backdrop_path
						? `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
						: "https://via.placeholder.com/500x300"
				}
				alt={show.name}
				className='w-full h-[140px] object-cover transition duration-300 group-hover:scale-105'
			/>

			{/* Info */}
			<div className='mt-2'>
				<h3 className='text-sm font-semibold'>{show.name}</h3>
				<p className='text-xs text-gray-400'>Season • Genre</p>
			</div>
		</div>
	);
}

export default TVShowCard;
