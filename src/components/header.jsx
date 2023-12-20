import React from "react";
import { Link } from "react-router-dom";

export default function Header({ back }) {
    return (
        <header className="header">
            <div className="width">
                {back && (
                    <Link to="/">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            width="48"
                        >
                            <path
                                fill="currentColor"
                                d="M36 24 L12 24 L18 18 L16.5 16.5 L10.5 24 L16.5 31.5 L18 30 L12 24 Z"
                            />
                        </svg>
                    </Link>
                )}
                <h1>
                    <Link to="/">CryptoTrack</Link>
                </h1>
            </div>
        </header>
    );
}
