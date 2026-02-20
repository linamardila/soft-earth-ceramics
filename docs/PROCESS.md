# PROCESS.md

## What I Built
I added a dark mode toggle to Soft Earth Ceramics, a pottery studio website. 
The toggle button sits in the header and switches the site between light and 
dark color schemes. It saves the user's preference to localStorage so it 
persists on refresh, and also respects the user's OS-level color scheme 
preference via prefers-color-scheme.

## How Micro-Iteration Felt
At first it felt a little slow compared to just asking the AI to build the 
whole thing at once. But I noticed that working one step at a time made it 
easier to catch problems early. When something looked off — like the footer 
not changing colors or the tagline being hard to read in dark mode — I could 
fix it immediately instead of untangling a mess of changes all at once. By 
the end it felt more controlled than my usual approach.

## What Self-Review Caught
The self-review step was genuinely useful. On Step 4, when Copilot wrote the 
JS toggle logic, the self-review caught that scripts.js wasn't even linked in 
index.html — meaning the toggle would have done nothing at all. It also 
flagged the flash-of-incorrect-theme (FOUC) issue, where users briefly see 
the wrong theme on first load before JS runs. Both of these would have been 
annoying bugs to debug later.

## Tool Impressions
Copilot Agent inside VS Code felt natural because everything stayed in one 
place — my code, the terminal, and the AI chat were all in the same window. 
I didn't have to switch between a browser and my editor. The agent mode was 
particularly useful because it could read and edit files directly instead of 
just suggesting code to copy and paste.

## Self-Review Patterns
Copilot consistently caught accessibility issues and edge cases during 
self-review — things like missing ARIA state updates, the .sr-only CSS helper 
not being defined, and keyboard focus styles. It was thorough on the 
technical side. What it didn't flag on its own was visual issues like the 
footer not updating colors and the tagline being hard to read in dark mode — 
I caught those myself by actually looking at the site in the browser.

## Browser Tool vs CLI Comparison
Having used Claude Code CLI previously, the biggest difference is context. 
CLI tools feel more powerful for larger projects where you need the AI to 
understand your whole codebase at once. Copilot Agent in VS Code felt better 
suited for focused, contained tasks like this one. The browser-based approach 
was easier to get started with and kept the workflow simple. CLI tools give 
you more control but have a steeper learning curve.

## When to Use Micro-Iteration
Micro-iteration makes sense when you're adding a feature to an existing 
project and don't want to break things that already work. It's also good when 
you're learning something new and want to understand each piece before moving 
on. I'd skip it for very small one-off changes or when prototyping something 
throwaway where speed matters more than quality.