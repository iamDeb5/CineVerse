function FeaturedSection({ movies }) {
	if (!movies || movies.length === 0) return null;

	const mainMovie = movies[0] || {};
	const sideMovies = movies.slice(1, 3);

	return (
		<div className='px-10 py-12 text-white'>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{/* LEFT BIG CARD */}
				<div className='md:col-span-2 relative h-[300px] rounded-2xl overflow-hidden group cursor-pointer'>
					<img
						src={
							mainMovie.backdrop_path
								? `https://image.tmdb.org/t/p/original${mainMovie.backdrop_path}`
								: "https://via.placeholder.com/500x300"
						}
						alt={mainMovie.title}
						className='w-full h-full object-cover group-hover:scale-105 transition duration-500'
					/>

					{/* Overlay */}
					<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition duration-500 group-hover:from-black/90' />

					{/* Content */}
					<div className='absolute bottom-6 left-6'>
						<p className='text-xs text-[#9DD2BB] mb-1'>DIRECTOR'S CUT</p>

						<h2 className='text-2xl font-bold mb-2'>{mainMovie.title}</h2>

						<p className='text-sm text-gray-300 max-w-md'>
							Explore the cinematic journey of this year’s most
							groundbreaking auteur.
						</p>
					</div>
				</div>

				{/* RIGHT SIDE CARDS */}
				<div className='flex flex-col gap-6'>
					{sideMovies.map((movie, index) => (
						<div
							key={movie.id}
							className='relative h-[140px] rounded-2xl overflow-hidden group cursor-pointer bg-white/5 backdrop-blur transition duration-300 hover:bg-white/10 hover:scale-[1.02]'
						>
							<img
								src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
								alt={movie.title}
								className='w-full h-full object-cover opacity-60'
							/>

							{/* Content */}
							<div className='absolute inset-0 flex items-center justify-between px-4'>
								<div>
									<h3 className='text-sm font-semibold'>
										{index === 0
											? "New Releases"
											: "Curator’s Choice"}
									</h3>

									<p className='text-xs text-gray-300'>
										{index === 0
											? "Just added to the collection"
											: "Hand-picked cinematic gems"}
									</p>
								</div>

								<span className='text-lg transition transform group-hover:translate-x-1'>
									→
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FeaturedSection;
