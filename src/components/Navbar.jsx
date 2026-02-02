import { useState } from 'react';
import { FaHardHat } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Machinery', href: '#machinery' },
	{ name: 'Contact', href: '#contact' },
	];

	const handleScroll = (e, href) => {
	e.preventDefault();
	const element = document.querySelector(href);
	if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	return (
		<nav className="fixed w-full bg-slate-900 shadow-lg z-50">
			<div className="w-full bg-transparent">
				<div className="w-full max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-20">
					{/* Logo */}
					<div className="flex items-center space-x-3">
						<div className="bg-amber-500 p-2 rounded-lg">
							<FaHardHat className="text-slate-900 text-2xl" />
						</div>
						<div className="flex flex-col">
							<span className="text-white font-bold text-xl leading-tight">DECO</span>
							<span className="text-amber-500 text-xs font-semibold">Construction Company</span>
						</div>
		  </div>

		  {/* Desktop Navigation */}
					<div className="hidden md:flex items-center gap-8 md:gap-10 lg:gap-12">
						{navLinks.map((link) => (
							<a
				key={link.name}
				href={link.href}
				onClick={(e) => handleScroll(e, link.href)}
								className="text-gray-300 hover:text-amber-500 transition-colors duration-300 font-medium"
							>
								{link.name}
							</a>
						))}
					</div>
					{/* Mobile menu button */}
					<div className="md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-gray-300 hover:text-amber-500 transition-colors"
						>
							{isOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isOpen && (
				<div className="md:hidden bg-slate-800">
					<div className="px-4 pt-2 pb-4 space-y-2">
						{navLinks.map((link) => (
							<a
								key={link.name}
				href={link.href}
				onClick={(e) => handleScroll(e, link.href)}
				className="block text-gray-300 hover:text-amber-500 hover:bg-slate-700 px-3 py-2 rounded-md transition-all duration-300 font-medium"
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
			)}
		</nav>
	);
};

export default Navbar;
