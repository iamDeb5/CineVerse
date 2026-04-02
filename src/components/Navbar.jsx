import { Search, Bell } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { searchMulti } from "../features/home/homeAPI.js";
import { useNavigate } from "react-router-dom";

function Navbar() {
	const [query, setQuery] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [debouncedQuery, setDebouncedQuery] = useState("");
	const [results, setResults] = useState([]);

	const navigate = useNavigate();

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncedQuery(query);
		}, 500); // delay

		return () => clearTimeout(timer);
	}, [query]);

	useEffect(() => {
		const fetchData = async () => {
			if (debouncedQuery.trim().length > 0) {
				const data = await searchMulti(debouncedQuery);
				setResults(data);
			} else {
				setResults([]);
			}
		};

		fetchData();
	}, [debouncedQuery]);

	useEffect(() => {
		if (debouncedQuery.trim()) {
			console.log("Search API call:", debouncedQuery);
		}
	}, [debouncedQuery]);

	useEffect(() => {
		if (results.length > 0) {
			console.log("Results:", results);
		}
	}, [results]);

	return (
		<div className='fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10'>
			<div className='flex items-center justify-between px-8 h-[64px] text-white'>
				{/* Logo */}
				<h1 className='text-xl font-bold text-[#A7F3D0] cursor-pointer'>
					CineVerse
				</h1>

				{/* Nav Links */}
				<div className='hidden md:flex gap-8 text-sm text-[#A7F3D0]'>
					<span className='hover:text-white cursor-pointer'>Movies</span>
					<span className='hover:text-white cursor-pointer'>TV Shows</span>
					<span className='hover:text-white cursor-pointer'>People</span>
				</div>

				{/* Right Section */}
				<div className='flex items-center gap-4'>
					<div className='relative flex items-center'>
						{/* Search Icon */}
						<button
							className='cursor-pointer'
							onClick={() => setShowSearch(!showSearch)}
						>
							<Search size={20} />
						</button>

						{/* Input */}
						<input
							type='text'
							placeholder='Search titles...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							onBlur={() => {
								if (!query) setShowSearch(false);
							}}
							className={`bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm outline-none transition-all duration-300 ${
								showSearch
									? "w-[200px] opacity-100 ml-2"
									: "w-0 opacity-0 ml-0 overflow-hidden"
							}`}
						/>

						{results.length > 0 && showSearch && (
							<div className='absolute top-12 right-0 w-[300px] bg-black/80 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg p-2 z-50'>
								{results.slice(0, 6).map((item) => (
									<div
										onClick={() => {
											if (
												item.media_type === "movie" ||
												item.media_type === "tv"
											) {
												navigate(
													`/${item.media_type}/${item.id}`,
												);
											}
											setShowSearch(false);
											setQuery("");
										}}
										key={item.id}
										className='flex items-center gap-3 p-2 rounded-lg hover:bg-white/10 cursor-pointer transition'
									>
										{/* Image */}
										<img
											src={
												item.poster_path || item.profile_path
													? `https://image.tmdb.org/t/p/w92${
															item.poster_path ||
															item.profile_path
														}`
													: "https://via.placeholder.com/50"
											}
											alt={item.title || item.name}
											className='w-10 h-14 object-cover rounded'
										/>

										{/* Info */}
										<div className='flex flex-col'>
											<span className='text-sm font-medium'>
												{item.title || item.name}
											</span>

											<span className='text-xs text-gray-400 capitalize'>
												{item.media_type}
											</span>
										</div>
									</div>
								))}
							</div>
						)}
					</div>

					<Bell className='cursor-pointer' size={20} />

					{/* Profile */}
					<div className='w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-black font-bold cursor-pointer'>
						K
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
