import React, { useRef, useState } from "react";
import Link from "next/link";

export default function TopBar() {
	let dropdownRef = useRef<HTMLDivElement>(null);
	const [dropdownText, setDropdowntext] = useState("My creations +");

	function handleDropdownClick() {
		if (dropdownRef.current !== null) {
			if (dropdownRef.current.classList.toggle("show")) {
				setDropdowntext("My creations -")
			} else {
				setDropdowntext("My creations +")
			}
		}
	}

	return (
		<div className="topbar">
			<Link href="/">Home</Link>
			<div className="dropdown">
			<button onClick={handleDropdownClick} className="dropbtn" id="dropdown_button">{dropdownText}</button>
				<div ref={dropdownRef} id="myDropdown" className="dropdown-content">
					
				</div>
			</div>
		</div>
	)
}