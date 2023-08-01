// 新增 app/search/QueryText
"use client";
import { useSearchParams } from "next/navigation";

export default function SearchText() {
    const searchParams = useSearchParams();
    const q = searchParams.get("q");
    return <>{q}</>;
}
