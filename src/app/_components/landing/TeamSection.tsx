"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "./useInView";

const TEAM = [
    {
        name: "박소정",
        role: "Project Leader",
        desc: "프로젝트 총괄 및 기획",
        image: "/images/씩씩한병아리.png",
        accent: "#FF9F43",
    },
    {
        name: "이승환",
        role: "Backend Developer",
        desc: "API 설계 및 서버 개발",
        image: "/images/포스트그레스.png",
        accent: "#3B82F6",
    },
    {
        name: "이하성",
        role: "Backend Developer",
        desc: "데이터베이스 및 인프라",
        image: "/images/앙큼한 너구리.png",
        accent: "#22C55E",
    },
    {
        name: "김수연",
        role: "Frontend Developer",
        desc: "UI/UX 설계 및 프론트엔드",
        image: "/images/행복한 야우.png",
        accent: "#F43F5E",
    },
    {
        name: "정재훈",
        role: "Advisor",
        desc: "프로젝트 참관",
        image: "/images/듬직한 야우.png",
        accent: "#A855F7",
    },
];

export function TeamSection() {
    const { ref: sectionRef, visible } = useInView<HTMLDivElement>(0.1);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const stopAuto = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const startAuto = useCallback(() => {
        stopAuto();
        intervalRef.current = setInterval(() => {
            setIsFlipped(false);
            setActiveIndex((prev) => (prev + 1) % TEAM.length);
        }, 4000);
    }, [stopAuto]);

    useEffect(() => {
        if (visible) startAuto();
        return stopAuto;
    }, [visible, startAuto, stopAuto]);

    const goTo = (i: number) => {
        stopAuto();
        setIsFlipped(false);
        setActiveIndex(i);
        startAuto();
    };

    const handleFlip = () => {
        stopAuto();
        setIsFlipped((f) => !f);
        startAuto();
    };

    return (
        <section id="team" className="relative w-full bg-[#FAFAFA] px-5 py-20 md:px-40 lg:px-60 md:py-[140px] overflow-hidden">
            <div className="mx-auto max-w-[1040px]">
                <div
                    ref={sectionRef}
                    className={`pb-12 md:pb-20 transition-all duration-700 ease-out ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-[#999] text-[13px] font-medium tracking-[-0.39px] uppercase text-center">
                        Team
                    </p>
                    <h2 className="pt-4 text-[#111] text-center text-[26px] font-bold leading-[1.35] tracking-[-0.78px] md:text-[44px] md:leading-[1.3] md:tracking-[-1.32px]">
                        만든 사람들
                    </h2>
                </div>

                <div
                    className={`flex flex-col items-center gap-10 md:flex-row md:items-start md:gap-16 md:justify-center transition-all duration-700 delay-200 ease-out ${
                        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                    }`}
                >
                    {/* 카드 스택 */}
                    <div className="relative w-[280px] md:w-[320px] shrink-0">
                        {TEAM.map((m, i) => {
                            const isActive = i === activeIndex;
                            const behind = (i - activeIndex + TEAM.length) % TEAM.length;

                            if (behind > 3 && !isActive) return null;

                            return (
                                <div
                                    key={m.name}
                                    className="absolute top-0 left-0 w-[280px] md:w-[320px] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    style={{
                                        zIndex: isActive ? 10 : 5 - behind,
                                        transform: isActive
                                            ? "translateY(0) scale(1)"
                                            : `translateY(${behind * 14}px) scale(${1 - behind * 0.04})`,
                                        opacity: isActive ? 1 : behind <= 2 ? 0.3 - behind * 0.1 : 0,
                                        pointerEvents: isActive ? "auto" : "none",
                                    }}
                                >
                                    <div
                                        className="relative h-[380px] md:h-[420px] w-full cursor-pointer"
                                        style={{ perspective: "1000px" }}
                                        onClick={handleFlip}
                                    >
                                        <div
                                            className="relative h-full w-full transition-transform duration-500"
                                            style={{
                                                transformStyle: "preserve-3d",
                                                transform: isActive && isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                                            }}
                                        >
                                            {/* front */}
                                            <div
                                                className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white border border-[#EBEBEB] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
                                                style={{ backfaceVisibility: "hidden" }}
                                            >
                                                <div
                                                    className="mb-6 flex size-[130px] md:size-[150px] items-center justify-center overflow-hidden rounded-full"
                                                    style={{
                                                        background: `${m.accent}0A`,
                                                        border: `2px solid ${m.accent}20`,
                                                    }}
                                                >
                                                    <Image
                                                        src={m.image}
                                                        alt={m.name}
                                                        width={130}
                                                        height={130}
                                                        className="size-[110px] md:size-[130px] object-contain"
                                                    />
                                                </div>
                                                <h3 className="text-[#111] text-[22px] font-bold tracking-[-0.66px]">
                                                    {m.name}
                                                </h3>
                                                <p
                                                    className="pt-1.5 text-[14px] font-medium tracking-[-0.42px]"
                                                    style={{ color: m.accent }}
                                                >
                                                    {m.role}
                                                </p>
                                                <p className="pt-8 text-[12px] text-[#CCC] tracking-[-0.36px]">
                                                    카드를 눌러보세요
                                                </p>
                                            </div>

                                            {/* back */}
                                            <div
                                                className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl bg-white border border-[#EBEBEB] p-8 shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
                                                style={{
                                                    backfaceVisibility: "hidden",
                                                    transform: "rotateY(180deg)",
                                                }}
                                            >
                                                <div
                                                    className="mb-5 flex size-14 items-center justify-center rounded-full text-[20px] font-bold text-white"
                                                    style={{ background: m.accent }}
                                                >
                                                    {m.name[0]}
                                                </div>
                                                <h3 className="text-[#111] text-[22px] font-bold tracking-[-0.66px]">
                                                    {m.name}
                                                </h3>
                                                <p
                                                    className="pt-1.5 text-[14px] font-medium tracking-[-0.42px]"
                                                    style={{ color: m.accent }}
                                                >
                                                    {m.role}
                                                </p>
                                                <div className="mt-8 w-full rounded-2xl bg-[#F6F7FB] px-6 py-5 text-center">
                                                    <p className="text-[#787878] text-[15px] leading-6 tracking-[-0.45px]">
                                                        {m.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="h-[380px] md:h-[420px] w-full" />
                    </div>

                    {/* 멤버 리스트 */}
                    <div className="flex flex-col gap-1.5 w-full md:w-auto md:min-w-60 md:pt-4">
                        {TEAM.map((m, i) => (
                            <button
                                key={m.name}
                                onClick={() => goTo(i)}
                                className={`group flex items-center gap-4 rounded-[14px] px-5 py-4 text-left transition-all duration-300 ${
                                    i === activeIndex
                                        ? "bg-white shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
                                        : "hover:bg-white/60"
                                }`}
                            >
                                <div
                                    className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full transition-all duration-300"
                                    style={{
                                        boxShadow: i === activeIndex ? `0 0 0 2px ${m.accent}` : "none",
                                        background: `${m.accent}0A`,
                                    }}
                                >
                                    <Image
                                        src={m.image}
                                        alt={m.name}
                                        width={40}
                                        height={40}
                                        className={`size-9 object-contain transition-opacity duration-300 ${
                                            i === activeIndex ? "opacity-100" : "opacity-30 group-hover:opacity-60"
                                        }`}
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p
                                        className={`text-[14px] font-semibold tracking-[-0.42px] transition-colors duration-300 ${
                                            i === activeIndex ? "text-[#111]" : "text-[#CCC] group-hover:text-[#999]"
                                        }`}
                                    >
                                        {m.name}
                                        {i === 0 && <span className="ml-1">👑</span>}
                                    </p>
                                    <p
                                        className="text-[12px] tracking-[-0.36px] transition-colors duration-300"
                                        style={{ color: i === activeIndex ? m.accent : "#DDD" }}
                                    >
                                        {m.role}
                                    </p>
                                </div>
                                {i === activeIndex && (
                                    <div
                                        className="h-5 w-[3px] rounded-full shrink-0 transition-all duration-300"
                                        style={{ background: m.accent }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
