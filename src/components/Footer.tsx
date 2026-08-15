import { FooterOption1 } from "./footers/FooterOption1";
import { FooterOption2 } from "./footers/FooterOption2";
import { FooterOption3 } from "./footers/FooterOption3";
import { FooterOption4 } from "./footers/FooterOption4";
import { FooterOption5 } from "./footers/FooterOption5";

/**
 * Main Footer component wrapper.
 * Currently active: Footer Option 5 (SIGNATURE EDITORIAL INSET PANEL EDITION).
 * Switch between options whenever requested!
 * - Option 1: <FooterOption1 /> (Wine Plum Editorial Line Intro)
 * - Option 2: <FooterOption2 /> (Curved Sculpted Wave Contour & Arched Frame)
 * - Option 3: <FooterOption3 /> (Flowing 6-Photo Cinematic Film Ribbon)
 * - Option 4: <FooterOption4 /> (Compact 520px-650px Asymmetric 3-Block Grid)
 * - Option 5: <FooterOption5 /> (Inset Dark Panel on Warm Ivory Page with Arched Photo Cutout)
 */
export function Footer() {
  return <FooterOption5 />;
}
