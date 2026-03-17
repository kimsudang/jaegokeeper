"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
                    : "bg-transparent"
            }`}
        >
            <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-5 md:px-10">
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-[#111] text-[18px] font-semibold tracking-[-0.54px]"
                >
                    재고키퍼
                </button>

                <div className="flex items-center gap-6 md:gap-8">
                    <button
                        onClick={() => scrollTo("#features")}
                        className="hidden md:block text-[14px] font-medium text-[#787878] tracking-[-0.42px] hover:text-[#111] transition-colors"
                    >
                        서비스
                    </button>
                    <button
                        onClick={() => scrollTo("#team")}
                        className="hidden md:block text-[14px] font-medium text-[#787878] tracking-[-0.42px] hover:text-[#111] transition-colors"
                    >
                        팀원
                    </button>
                    <Link
                        href="/login"
                        className="rounded-full bg-[#111] px-6 py-2.5 text-[14px] font-medium text-white tracking-[-0.42px] hover:bg-[#333] transition-colors"
                    >
                        시작하기
                    </Link>
                </div>
            </div>
        </nav>
    );
}
