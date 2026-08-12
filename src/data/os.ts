import { accent, color, getWrapWidth, muted, wrapText } from "@/lib/ansi";

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

/**
 * Help row: yellow command, magenta `(alias)`, then args.
 * Spacing: `command (alias)` then two spaces before args.
 */
function helpLines(
  command: string,
  alias: string,
  args: string,
  description: string,
): string[] {
  const aliasText = `(${alias})`;
  const argsPart = args ? `  ${args}` : "";
  const visible = `${command} ${aliasText}${argsPart}`;
  const width = getWrapWidth();
  const commandLine = `  ${color.yellow(command)} ${color.magenta(aliasText)}${argsPart}`;

  // Narrow screens: put the description on its own indented line.
  if (width < 56 || visible.length + 4 + description.length > width) {
    return [commandLine, muted(`    ${description}`)];
  }

  const pad = " ".repeat(Math.max(2, 56 - visible.length));
  return [`${commandLine}${pad}${muted(description)}`];
}

function tipLines(): string[] {
  return [
    muted("Tip:"),
    `  latest blog       ${accent("blog get latest")}`,
    `  see experience    ${accent("experience list")}`,
    `  see resume        ${accent("resume get default")}`,
  ];
}

export function getWelcomeText(): string[] {
  return [
    color.bold(color.brightGreen(`Welcome to ${os.osName}`)),
    "",
    ...wrapText(
      "This is Lars Vonk's portfolio website, presented as a terminal interface.",
    ).map((line) => color.white(line)),
    ...wrapText("Use the commands below to explore content.").map((line) =>
      color.white(line),
    ),
    "",
    color.brightCyan("Commands:"),
    ...helpLines("help", "h", "", "Show this message again"),
    ...helpLines("about", "a", "", "About me"),
    ...helpLines("contact", "c", "", "Contact details"),
    ...helpLines(
      "blog",
      "b",
      "list [page <n|next|prev>]",
      "List blogs (newest first)",
    ),
    ...helpLines("blog", "b", "get <id|slug|latest>", "Show a full blog post"),
    ...helpLines(
      "experience",
      "ex",
      "list [page <n|next|prev>]",
      "List experience",
    ),
    ...helpLines("experience", "ex", "get <id>", "Show one role"),
    ...helpLines(
      "projects",
      "p",
      "list [page <n|next|prev>]",
      "List projects",
    ),
    ...helpLines("projects", "p", "get <id>", "Show one project"),
    ...helpLines(
      "education",
      "ed",
      "list [page <n|next|prev>]",
      "List education",
    ),
    ...helpLines("education", "ed", "get <id>", "Show one entry"),
    ...helpLines("skills", "s", "list", "Top skills"),
    ...helpLines(
      "skills",
      "s",
      "get <category|categories>",
      "Skills by category",
    ),
    ...helpLines("resume", "r", "get default", "Default resume (long en)"),
    ...helpLines(
      "resume",
      "r",
      "get <short|long> <en|nl> [--download|-d]",
      "Resume text",
    ),
    ...helpLines("resume", "r", "help", "Resume options"),
    "",
    ...tipLines(),
    "",
  ];
}
