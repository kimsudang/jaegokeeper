"use client";

import { useInView } from "./useInView";
import { MOCK_COMPONENTS } from "./MockUIs";

const FEATURES = [
    {
        num: "01",
        title: "실시간 재고 현황",
        desc: "입출고를 기록하면 재고가 자동으로 반영됩니다.\n부족한 재고는 알림으로 미리 알려드려요.",
    },
    {
        num: "02",
        title: "재고 요청 시스템",
        desc: "필요한 물품을 요청하고, 승인까지\n하나의 흐름으로 처리하세요.",
    },
    {
        num: "03",
        title: "게시판",
        desc: "공지사항, 자유글을 한곳에서.\n매장 내 소통을 쉽게 만듭니다.",
    },
    {
        num: "04",
        title: "알바생 관리",
        desc: "출퇴근 기록과 스케줄 관리를\n한 화면에서 확인하세요.",
    },
    {
        num: "05",
        title: "대시보드",
        desc: "오늘의 매장 현황을 한눈에.\n필요한 정보만 깔끔하게.",
    },
];

function FeatureRow({
    feature,
    index,
    isLast,
}: {
    feature: (typeof FEATURES)[0];
    index: number;
    isLast: boolean;
}) {
    const { ref, visible } = useInView<HTMLDivElement>(0.3);
    const MockComponent = MOCK_COMPONENTS[index];

    return (
        <div
            ref={ref}
            className={`group transition-all duration-600 ease-out ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div className={`flex flex-col md:flex-row md:items-center gap-5 md:gap-8 py-8 md:py-10 ${
                !isLast ? "border-b border-[#EBEBEB]" : ""
            }`}>
                <div className="flex items-start gap-4 md:gap-8 flex-1">
                    <span className="text-[#DDD] text-[14px] font-mono font-medium tracking-[-0.42px] md:w-[50px] shrink-0 pt-1">
                        {feature.num}
                    </span>
                    <div className="flex-1">
                        <h3 className="text-[#111] text-[20px] md:text-[24px] font-bold tracking-[-0.6px] md:tracking-[-0.72px] group-hover:text-[#3B82F6] transition-colors duration-300">
                            {feature.title}
                        </h3>
                        <p className="pt-2 text-[#999] text-[14px] md:text-[15px] leading-[22px] md:leading-6 tracking-[-0.42px] whitespace-pre-line">
                            {feature.desc}
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-[300px] shrink-0">
                    <MockComponent />
                </div>
            </div>
        </div>
    );
}

export function Features() {
    const { ref: titleRef, visible: titleVisible } = useInView<HTMLDivElement>(0.2);

    return (
        <section id="features" className="w-full bg-[#FAFAFA] px-5 py-[60px] md:px-40 lg:px-60 md:py-[100px]">
            <div className="mx-auto max-w-[1100px]">
                <div
                    ref={titleRef}
                    className={`pb-10 md:pb-16 transition-all duration-700 ease-out ${
                        titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                >
                    <p className="text-[#999] text-[13px] font-medium tracking-[-0.39px] uppercase">
                        Features
                    </p>
                    <h2 className="pt-4 text-[#111] text-[26px] font-bold leading-[1.35] tracking-[-0.78px] md:text-[44px] md:leading-[1.3] md:tracking-[-1.32px]">
                        매장 운영에 필요한
                        <br />
                        모든 것을 담았습니다
                    </h2>
                </div>

                <div className="flex flex-col">
                    {FEATURES.map((f, i) => (
                        <FeatureRow key={f.num} feature={f} index={i} isLast={i === FEATURES.length - 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}
