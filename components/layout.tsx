import React, { ReactNode } from "react";

import TopBar from "./topBar";
import Footer from "./footer";
import LeftSide from "./left-side";
import RightSide from "./right-side";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({children}: LayoutProps): JSX.Element {
	return (
		<div className="layout">
			<TopBar/>
			<div className="horizontal-align page-center">
				<LeftSide/>
					{children}
				<RightSide/>
			</div>
			<Footer/>
		</div>
	)
}