import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "My battery's at 1%, and I'm deleting your eSIM and forgetting your face — no number, no codes. Good luck proving you're you.";
// The phone erases its owner's identity on the way out: eSIM and Face ID, both gone.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
