"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
    const [entered, setEntered] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setEntered(true), 100);
        return () => clearTimeout(t);
    }, []);

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 flex w-full flex-col items-center gap-5 px-5 md:px-[100px]">
                <p
                    className={`text-[#3B82F6] text-[14px] font-medium tracking-[-0.42px] md:text-[16px] transition-all duration-700 ease-out ${
                        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    소규모 매장을 위한 올인원 솔루션
                </p>

                <h1
                    className={`text-center text-[#111] text-[32px] font-semibold leading-[140%] tracking-[-0.96px] md:text-[56px] md:leading-[140%] md:tracking-[-1.68px] transition-all duration-700 delay-150 ease-out ${
                        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    복잡한 재고 관리,
                    <br />
                    이제 심플하게
                </h1>

                <p
                    className={`text-center text-[#787878] text-[14px] leading-[22px] tracking-[-0.42px] md:text-[18px] md:leading-[27px] md:tracking-[-0.54px] transition-all duration-700 delay-300 ease-out ${
                        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    입출고 관리부터 알바 스케줄링까지
                    <br />
                    하나의 플랫폼에서 관리하세요
                </p>

                <div
                    className={`pt-5 flex flex-col items-center gap-4 transition-all duration-700 delay-500 ease-out ${
                        entered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                    }`}
                >
                    <Link
                        href="/login"
                        className="w-full max-w-[335px] md:max-w-[400px] rounded-full bg-[#111] px-10 py-4 text-center text-[16px] font-semibold text-white tracking-[-0.48px] md:text-[18px] hover:bg-[#333] transition-colors"
                    >
                        무료로 시작하기
                    </Link>
                    <Link
                        href="/signup"
                        className="text-[#787878] text-[14px] font-medium tracking-[-0.42px] underline underline-offset-4 hover:text-[#111] transition-colors"
                    >
                        회원가입
                    </Link>
                </div>
            </div>
        </section>
    );
}
