import { readFileSync } from "node:fs";
import { test } from "node:test";
import assert from "node:assert/strict";

const homepage = readFileSync(new URL("../src/pages/index.astro", import.meta.url), "utf8");

test("homepage uses the Windows 98 desktop concept", () => {
  assert.match(homepage, /win98-desktop/);
  assert.match(homepage, /About Me/);
  assert.match(homepage, /What I like to work on/);
});

test("homepage includes Adnan's current research identity", () => {
  assert.match(homepage, /IBM Research/);
  assert.match(homepage, /long-horizon\s+agents/i);
  assert.match(homepage, /semantic data pipelines/i);
});

test("homepage exposes expected profile links", () => {
  assert.match(homepage, /scholar\.google\.com/);
  assert.match(homepage, /github\.com\/adnanqidwai/);
  assert.match(homepage, /linkedin\.com\/in\/adnanqidwai/);
});

test("homepage uses the black and off-white Win98 palette", () => {
  assert.match(homepage, /--desktop-bg:\s*#111111/);
  assert.match(homepage, /--window-bg:\s*#e6e2d8/);
  assert.doesNotMatch(homepage, /#008080/i);
});

test("homepage uses a fixed organized desktop layout", () => {
  assert.match(homepage, /desktop-layout/);
  assert.match(homepage, /grid-template-areas/);
  assert.match(homepage, /grid-area:\s*about/);
  assert.match(homepage, /grid-area:\s*work/);
  assert.match(homepage, /grid-area:\s*papers/);
  assert.doesNotMatch(homepage, /style="left:/);
});

test("homepage does not render bottom dock or start menu chrome", () => {
  assert.doesNotMatch(homepage, /class="taskbar"/);
  assert.doesNotMatch(homepage, /class="start-menu"/);
  assert.doesNotMatch(homepage, /data-start-toggle/);
});

test("homepage does not render the readme window", () => {
  assert.doesNotMatch(homepage, /readme-window/);
  assert.doesNotMatch(homepage, /README\.TXT/);
  assert.doesNotMatch(homepage, /grid-area:\s*readme/);
});

test("work interests section relies on the interactive thread panel only", () => {
  assert.match(homepage, /data-thread-output/);
  assert.doesNotMatch(homepage, /work-list/);
});

test("work interest threads use the revised research descriptions", () => {
  assert.match(
    homepage,
    /data-thread="planning"[\s\S]*data-thread="retrieval"[\s\S]*data-thread="enterprise"[\s\S]*data-thread="semantic"[\s\S]*data-thread="multimodal"/
  );
  assert.match(homepage, /rich context layer for agents/i);
  assert.match(homepage, /planning in agents/i);
  assert.match(homepage, /unsolvability detection/i);
  assert.doesNotMatch(homepage, /frontier models fail \(0%\)/i);
  assert.doesNotMatch(homepage, /humans succeed/i);
  assert.match(homepage, /multi-index/i);
  assert.match(homepage, /improve recall/i);
  assert.match(homepage, /Pareto optimality/i);
  assert.match(homepage, /cost\/accuracy/i);
  assert.match(homepage, /VLM understanding and robustness/i);
  assert.doesNotMatch(homepage, /structured and unstructured enterprise data into grounded knowledge for AI-assisted BI/i);
});

test("homepage uses the provided profile image", () => {
  assert.match(homepage, /\/about_me\/me\.jpeg/);
  assert.doesNotMatch(homepage, /ADNAN\.BMP/);
  assert.doesNotMatch(homepage, /filter:\s*grayscale\(100%\)/);
});
