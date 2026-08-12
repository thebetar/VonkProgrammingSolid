import { accent, color, muted } from "@/lib/ansi";

export interface OsConfig {
  osName: string;
  promptUser: string;
}

export const os: OsConfig = {
  osName: "VonkOS",
  promptUser: "guest",
};

export function getPrompt(): string {
  return `${color.brightGreen(`${os.promptUser}@${os.osName}`)}${color.brightBlue(":~$")} `;
}

/** Align command help rows: yellow command + optional args, then description. */
function helpLine(
  command: string,
  args: string,
  description: string,
  width = 42,
): string {
  const visible = `${command}${args}`;
  const pad = " ".repeat(Math.max(2, width - visible.length));
  return `  ${color.yellow(command)}${args}${pad}${description}`;
}

export function getWelcomeText(): string[] {
  return [
    color.bold(color.brightGreen(`Welcome to ${os.osName}`)),
    "",
    color.white(
      "This is Lars Vonk's portfolio website, presented as a terminal interface.",
    ),
    color.white("Use the commands below to explore content."),
    "",
    color.brightCyan("Commands:"),
    helpLine("help", "", "Show this message again"),
    helpLine("about", "", "About me"),
    helpLine("contact", "", "Contact details"),
    helpLine("blog list", " [page <n|next|prev>]", "List blogs (newest first)"),
    helpLine("blog get", " <id|slug|latest>", "Show a full blog post"),
    helpLine("experience list", " [page <n|next|prev>]", "List experience"),
    helpLine("experience get", " <id>", "Show one role"),
    helpLine("projects list", " [page <n|next|prev>]", "List projects"),
    helpLine("projects get", " <id>", "Show one project"),
    helpLine("education list", " [page <n|next|prev>]", "List education"),
    helpLine("education get", " <id>", "Show one entry"),
    helpLine("skills list", "", "Top skills"),
    helpLine("skills get", " <category|categories>", "Skills by category"),
    helpLine("resume get", " <short|long> <en|nl>", "Resume text"),
    helpLine("resume get", " … [--download|-d]", "Also download PDF"),
    helpLine("resume help", "", "Resume options"),
    "",
    muted(
      `Tip: ${accent("blog get latest")}  ·  share: ${accent("/blogs/<slug>")}  ·  ${accent("resume get long en")}`,
    ),
    "",
  ];
}
