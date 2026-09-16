import { FadeUp } from "@/components/portfolio/ui/FadeUp";
import { NOW_CONSTANTS } from "@/lib/constants/now.constants";

export function NowView() {
  return (
    <FadeUp delayMs={60} className="max-w-[74ch]">
      <h2 className="text-muted mb-3 text-[0.68rem] tracking-[0.14em]">
        {NOW_CONSTANTS.LABEL}
      </h2>
      {NOW_CONSTANTS.LINES.map((line, index) => (
        <p
          key={line}
          className={`text-pretty ${
            index === 0 ? "mb-2.5 text-[0.95rem]" : "text-muted mb-2.5"
          }`}
        >
          {line}
        </p>
      ))}
    </FadeUp>
  );
}
