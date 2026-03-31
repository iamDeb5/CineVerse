function Footer() {
	return (
		<footer className='px-12 py-10 text-gray-400'>
			<div className='flex flex-col md:flex-row justify-between items-center gap-6'>
				{/* Left */}
				<div>
					<h2 className='text-white font-semibold text-lg'>CineVerse</h2>
					<p className='text-xs mt-1'>
						© 2026 CineVerse. Data provided by TMDB.
					</p>
				</div>

				{/* Links */}
				<div className='flex gap-6 text-sm'>
					<span className='cursor-pointer hover:text-white'>
						Privacy Policy
					</span>
					<span className='cursor-pointer hover:text-white'>
						Terms of Service
					</span>
					<span className='cursor-pointer hover:text-white'>
						API Documentation
					</span>
					<span className='cursor-pointer hover:text-white'>
						Contact Support
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
