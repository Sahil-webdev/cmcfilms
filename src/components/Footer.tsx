import { FooterOption1 } from "./footers/FooterOption1";
import { FooterOption2 } from "./footers/FooterOption2";
import { FooterOption3 } from "./footers/FooterOption3";

/**
 * Main Footer component wrapper.
 * Currently active: Footer Option 3 (CINEMATIC FILM RIBBON EDITION).
 * Switch between options whenever requested!
 * - Option 1: <FooterOption1 /> (Wine Plum Editorial Line)
 * - Option 2: <FooterOption2 /> (Curved Sculpted Wave Contour)
 * - Option 3: <FooterOption3 /> (Flowing Cinematic Film Ribbon)
 */
export function Footer() {
  return <FooterOption3 />;
}
