import React, { useRef, useState } from "react";
import Link from "next/link";

interface dropdownItem {
	name: string,
	url: string,
}

export default function TopBar() {
	let dropdownRef = useRef<HTMLDivElement>(null);
	const [dropdownItems, setDropdownItems] = useState<dropdownItem[] | null>(null);
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

	if (dropdownItems === null) {
		fetch("/assets/dropdown-items.json")
		.then(response => {
			response.text()
			.then(text => setDropdownItems(JSON.parse(text)))
			.catch(_err => console.error("Couldn't parse dropdown items from JSON"))
		})
		.catch( 
			// Check if currently on client or server side
			typeof window !== 'undefined'
				// If on client side, log this error
				? console.error
				// Otherwise, don't pass anything
				: null
		)
	} else {
		console.log(dropdownItems)
	}

	return (
		<div className="topbar">
			<Link href="/">Home</Link>
			<div className="dropdown">
			<button onClick={handleDropdownClick} className="dropbtn" id="dropdown_button">{dropdownText}</button>
				<div ref={dropdownRef} id="myDropdown" className="dropdown-content">
					{dropdownItems !== null ? dropdownItems.length ? dropdownItems.map(item => <Link href={item.url} key={item.name}>{item.name}</Link>) : "Nothing here (yet...)" : "Couldn't fetch dropdown items"}
				</div>
			</div>
		</div>
	)
}