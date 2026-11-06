import type { Product } from "@/domain/product";
import accessories from "@/assets/products/accessories.jpg";
import controlPanel from "@/assets/products/control_panel.jpg";
import flowMeters from "@/assets/products/flow_meters.jpg";
import pumps from "@/assets/products/pumps.png";
import valves from "@/assets/products/valves.jpg";

export const products: Product[] = [
  { slug: "pumps", image: pumps },
  { slug: "valves", image: valves },
  { slug: "panels", image: controlPanel },
  { slug: "meters", image: flowMeters },
  { slug: "accessories", image: accessories },
];
