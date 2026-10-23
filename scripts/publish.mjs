// Publish only generated static output, preserving the existing gh-pages history.
import { execFileSync, spawnSync } from "node:child_process";
import {
  mkdtempSync,
  readdirSync,
  rmSync,
  cpSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
const root = resolve(import.meta.dirname, "..");
const gh = process.env.GH_PATH || "gh";
const hasGh = spawnSync(gh, ["--version"], { stdio: "ignore" }).status === 0;
const prefix = hasGh
  ? ["-c", `credential.helper=!${gh} auth git-credential`]
  : [];
const git = (args, cwd = root) =>
  execFileSync("git", [...prefix, ...args], { cwd, encoding: "utf8" }).trim();
if (git(["status", "--porcelain"]))
  throw new Error("Commit source changes before publishing.");
const origin = git(["remote", "get-url", "origin"]);
if (
  !/^https:\/\/github\.com\/KoreyoshiE\/koreyoshie\.github\.io(?:\.git)?$/.test(
    origin,
  )
)
  throw new Error("Unexpected publishing repository.");
const source = git(["rev-parse", "HEAD"]);
const staging = mkdtempSync(join(tmpdir(), "han-che-pages-"));
try {
  git([
    "clone",
    "--depth",
    "1",
    "--single-branch",
    "--branch",
    "gh-pages",
    origin,
    staging,
  ]);
  for (const file of readdirSync(staging))
    if (file !== ".git")
      rmSync(join(staging, file), { recursive: true, force: true });
  cpSync(join(root, "dist"), staging, { recursive: true });
  writeFileSync(join(staging, ".nojekyll"), "");
  writeFileSync(join(staging, "source-version.txt"), source + "\n");
  git(["config", "user.name", "Han Che"], staging);
  git(
    ["config", "user.email", "177992833+KoreyoshiE@users.noreply.github.com"],
    staging,
  );
  git(["add", "."], staging);
  if (git(["status", "--porcelain"], staging)) {
    git(
      ["commit", "-m", `Publish portfolio from ${source.slice(0, 12)}`],
      staging,
    );
    git(["push", "origin", "gh-pages"], staging);
  }
  console.log(
    `Published source ${source}; inspect GitHub Pages build before claiming it is live.`,
  );
} finally {
  rmSync(staging, { recursive: true, force: true });
}
