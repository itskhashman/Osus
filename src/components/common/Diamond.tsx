import type { CSSProperties } from "react";
import { colors } from "@/lib/theme";

type DiamondProps = {
  size?: number;
  color?: string;
  style?: CSSProperties;
};

export default function Diamond({
  size = 12,
  color = colors.accent,
  style,
}: DiamondProps) {
  return (
    <div
      className="h-(--diamond-size) w-(--diamond-size) shrink-0 rotate-45"
      style={
        {
          "--diamond-size": `${size}px`,
          "--diamond-color": color,
          ...style,
          backgroundColor: "var(--diamond-color)",
        } as CSSProperties
      }
    />
  );
}
