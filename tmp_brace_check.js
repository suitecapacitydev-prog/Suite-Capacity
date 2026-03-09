const fs = require('fs');
const code = fs.readFileSync('src/components/wizard/revenue-baseline-step.tsx', 'utf8');
let stack = [];
let inString = null;
let escaped = false;
for (let i = 0; i < code.length; i++) {
  const ch = code[i];
  if (inString) {
    if (escaped) { escaped = false; continue; }
    if (ch === '\\') { escaped = true; continue; }
    if (ch === inString) { inString = null; continue; }
    continue;
  }
  if (ch === '"' || ch === "'" || ch === '`') { inString = ch; continue; }
  if (ch === '/' && code[i+1] === '/') { while (i < code.length && code[i] !== '\n') i++; continue; }
  if (ch === '/' && code[i+1] === '*') { i += 2; while (i < code.length && !(code[i] === '*' && code[i+1] === '/')) i++; i++; continue; }
  if (ch === '{' || ch === '(' || ch === '[') stack.push({ ch, i });
  if (ch === '}' || ch === ')' || ch === ']') {
    const last = stack.pop();
    if (!last) {
      console.log('Unmatched closing', ch, 'at', i);
      break;
    }
    const match = { '}': '{', ')': '(', ']': '[' }[ch];
    if (last.ch !== match) {
      console.log('Mismatched', last.ch, 'vs', ch, 'at', i);
      break;
    }
  }
}
if (stack.length > 0) {
  const last = stack[stack.length - 1];
  console.log('Unclosed', last.ch, 'at', last.i);
} else {
  console.log('All balanced');
}
