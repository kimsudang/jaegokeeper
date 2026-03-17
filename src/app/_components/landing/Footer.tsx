"use client";

export function Footer() {
    return (
        <footer className="w-full bg-[#F5F5F5] px-5 py-12 md:px-40 lg:px-60 md:py-16 border-t border-[#EBEBEB]">
            <div className="mx-auto flex max-w-[1040px] flex-col items-center gap-6 md:flex-row md:justify-between">
                <div className="flex flex-col items-center md:items-start gap-1.5">
                    <span className="text-[#111] text-[16px] font-bold tracking-[-0.48px]">
                        재고키퍼
                    </span>
                    <span className="text-[#999] text-[13px] tracking-[-0.39px]">
                        소규모 매장을 위한 재고 관리 솔루션
                    </span>
                </div>
                <p className="text-[#CCC] text-[12px] tracking-[-0.36px]">
                    &copy; 2026 JaegoKeeper. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
