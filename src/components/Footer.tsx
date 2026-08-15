import { FooterOption1 } from "./footers/FooterOption1";
import { FooterOption2 } from "./footers/FooterOption2";

/**
 * Main Footer component wrapper.
 * Currently active: Footer Option 2 (CREATIVE CINEMATIC CURVED SCULPT EDITION).
 * Switch between options whenever requested!
 * - Option 1: <FooterOption1 />
 * - Option 2: <FooterOption2 />
 */
export function Footer() {
  return <FooterOption2 />;
}
