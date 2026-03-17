"use client";

export function MockInventory() {
    return (
        <div className="w-full rounded-2xl bg-white border border-[#EBEBEB] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F5F5]">
                <span className="text-[13px] font-semibold text-[#111] tracking-[-0.39px]">재고 현황</span>
                <span className="text-[11px] text-[#BBB] tracking-[-0.33px]">오늘</span>
            </div>
            <div className="flex flex-col gap-3 pt-4">
                {[
                    { name: "콜라 500ml", qty: 24, color: "#3B82F6", pct: 80 },
                    { name: "생수 2L", qty: 8, color: "#F59E0B", pct: 30 },
                    { name: "삼각김밥", qty: 3, color: "#EF4444", pct: 10 },
                ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3">
                        <span className="text-[12px] text-[#666] tracking-[-0.36px] w-20 shrink-0">{item.name}</span>
                        <div className="flex-1 h-1.5 rounded-full bg-[#F5F5F5] overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all duration-1000"
                                style={{ width: `${item.pct}%`, background: item.color }}
                            />
                        </div>
                        <span className="text-[12px] font-medium text-[#111] tracking-[-0.36px] w-7 text-right">{item.qty}</span>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-1.5 pt-4">
                <span className="h-1.5 w-1.5 rounded-full bg-[#EF4444] animate-pulse" />
                <span className="text-[11px] text-[#EF4444] tracking-[-0.33px]">삼각김밥 재고 부족</span>
            </div>
        </div>
    );
}

export function MockRequest() {
    return (
        <div className="w-full rounded-2xl bg-white border border-[#EBEBEB] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F5F5]">
                <span className="text-[13px] font-semibold text-[#111] tracking-[-0.39px]">요청 목록</span>
                <span className="rounded-full bg-[#3B82F6] px-2 py-0.5 text-[10px] text-white font-medium">2건</span>
            </div>
            <div className="flex flex-col gap-2.5 pt-4">
                {[
                    { item: "종이컵 1000개", by: "김수연", status: "대기중", statusColor: "#F59E0B" },
                    { item: "물티슈 50팩", by: "이하성", status: "승인됨", statusColor: "#22C55E" },
                ].map((r) => (
                    <div key={r.item} className="flex items-center justify-between rounded-xl bg-[#FAFAFA] px-4 py-3">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-[12px] font-medium text-[#111] tracking-[-0.36px]">{r.item}</span>
                            <span className="text-[11px] text-[#BBB] tracking-[-0.33px]">{r.by}</span>
                        </div>
                        <span className="text-[11px] font-medium tracking-[-0.33px]" style={{ color: r.statusColor }}>{r.status}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function MockBoard() {
    return (
        <div className="w-full rounded-2xl bg-white border border-[#EBEBEB] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 pb-4 border-b border-[#F5F5F5]">
                <span className="rounded-md bg-[#111] px-2 py-0.5 text-[10px] text-white font-medium">공지</span>
                <span className="rounded-md bg-[#F5F5F5] px-2 py-0.5 text-[10px] text-[#999] font-medium">자유</span>
            </div>
            <div className="flex flex-col gap-3 pt-4">
                {[
                    { title: "3월 재고 정리 안내", date: "03.15", isNotice: true },
                    { title: "이번주 근무표 확인해주세요", date: "03.14", isNotice: true },
                    { title: "냉장고 정리 부탁드려요", date: "03.13", isNotice: false },
                ].map((p) => (
                    <div key={p.title} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            {p.isNotice && <span className="h-1.5 w-1.5 rounded-full bg-[#3B82F6]" />}
                            <span className="text-[12px] text-[#333] tracking-[-0.36px]">{p.title}</span>
                        </div>
                        <span className="text-[11px] text-[#CCC] tracking-[-0.33px]">{p.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function MockSchedule() {
    const days = ["월", "화", "수", "목", "금", "토", "일"];
    return (
        <div className="w-full rounded-2xl bg-white border border-[#EBEBEB] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F5F5]">
                <span className="text-[13px] font-semibold text-[#111] tracking-[-0.39px]">이번주 스케줄</span>
                <span className="text-[11px] text-[#BBB] tracking-[-0.33px]">3월 3주차</span>
            </div>
            <div className="grid grid-cols-7 gap-1 pt-4">
                {days.map((d, i) => (
                    <div key={d} className="flex flex-col items-center gap-1.5">
                        <span className="text-[10px] text-[#BBB] tracking-[-0.3px]">{d}</span>
                        <div className="flex flex-col gap-0.5 w-full items-center">
                            {i < 5 && (
                                <div
                                    className="h-[18px] w-full rounded-sm"
                                    style={{
                                        background: i === 2 ? "#F59E0B20" : "#3B82F620",
                                        border: `1px solid ${i === 2 ? "#F59E0B40" : "#3B82F640"}`,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center gap-4 pt-3">
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-[#3B82F6]/20 border border-[#3B82F6]/40" />
                    <span className="text-[10px] text-[#999]">오전</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-sm bg-[#F59E0B]/20 border border-[#F59E0B]/40" />
                    <span className="text-[10px] text-[#999]">오후</span>
                </div>
            </div>
        </div>
    );
}

export function MockDashboard() {
    return (
        <div className="w-full rounded-2xl bg-white border border-[#EBEBEB] p-5 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-between pb-4 border-b border-[#F5F5F5]">
                <span className="text-[13px] font-semibold text-[#111] tracking-[-0.39px]">오늘의 매장</span>
                <span className="text-[11px] text-[#BBB] tracking-[-0.33px]">3월 17일</span>
            </div>
            <div className="grid grid-cols-2 gap-3 pt-4">
                {[
                    { label: "총 재고", value: "142", sub: "+3", color: "#3B82F6" },
                    { label: "부족 품목", value: "2", sub: "-1", color: "#EF4444" },
                    { label: "대기 요청", value: "3", sub: "", color: "#F59E0B" },
                    { label: "출근 인원", value: "4/5", sub: "", color: "#22C55E" },
                ].map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#FAFAFA] px-3.5 py-3 flex flex-col gap-1">
                        <span className="text-[10px] text-[#999] tracking-[-0.3px]">{s.label}</span>
                        <div className="flex items-end gap-1">
                            <span className="text-[20px] font-bold text-[#111] tracking-[-0.6px] leading-none">{s.value}</span>
                            {s.sub && (
                                <span className="text-[10px] font-medium tracking-[-0.3px] pb-0.5" style={{ color: s.color }}>
                                    {s.sub}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export const MOCK_COMPONENTS = [MockInventory, MockRequest, MockBoard, MockSchedule, MockDashboard];
