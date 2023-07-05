import React from "react";
import '../styles.css';
import type { AppProps } from 'next/app';
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
	// Check if pageProps has 'statusCode' property, which means an error has occured
	if (Object.hasOwn(pageProps, 'statusCode')) {
		// If yes, return the component as is
		return <Component {...pageProps} />
	} else {
		// Otherwise, wrap it in our custom Layout
		return (
			<Layout>
				<Component {...pageProps} />
			</Layout>
		)
	}
}