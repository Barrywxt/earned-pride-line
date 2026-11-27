// make.fun - One Line of Earned Pride
// Entry: one line, 1-240 characters, a quiet earned moment of pride
import fs from 'node:fs';
import path from 'node:path';
const line = "After forty years of night shifts, Dad hung up his uniform himself, not because anyone told him to, but because the girl he trained did the whole round alone tonight, and did it right.";
// The competition's entry gate: a single line, 1-240 characters, not only whitespace.
const len = [...line].length;
if (!line.trim() || len < 1 || len > 240 || line.includes('\n')) {
  throw new Error('Line must be a single line of 1-240 characters and not only whitespace');
}
const dir = process.env.OUTPUT_DIR || '/output';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, 'entry.txt'), line, 'utf8');
// Read back and confirm what was written is exactly the line.
// v2: also assert no trailing newline, which the entry gate forbids.
const written = fs.readFileSync(path.join(dir, 'entry.txt'), 'utf8');
if (written !== line || written.endsWith('\n')) {
  throw new Error(`Wrote ${[...written].length} chars, expected ${len} with no trailing newline`);
}
console.log(`Wrote pride line (${len} chars) to ${path.join(dir, 'entry.txt')}`);
