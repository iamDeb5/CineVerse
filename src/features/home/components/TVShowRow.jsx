import { useRef } from "react";
import TVShowCard from "./TVShowCard";

function TVShowRow({ title, shows }) {
	const scrollRef = useRef();

	const scrollLeft = () => {
		scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
	};

	const scrollRight = () => {
		scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
	};
	return (
		<div className='px-12 py-10 text-white'>
			{/* Header */}
			<div className='flex justify-between items-start mb-4'>
				{/* Left */}
				<div>
					<h2 className='text-2xl font-bold'>{title}</h2>
					<p className='text-sm text-gray-400'>
						Binge-worthy series for the weekend
					</p>
				</div>

				{/* Right */}
				<span className='text-sm text-gray-400 cursor-pointer'>View All →</span>
			</div>

			{/* Scroll */}
			<div
				ref={scrollRef}
				className='flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory'
			>
				{shows.map((show) => (
					<div key={show.id} className='snap-start'>
						<TVShowCard show={show} />
					</div>
				))}
			</div>
		</div>
	);
}

export default TVShowRow;
