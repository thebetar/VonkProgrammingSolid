export const content = () => (
  <>
    <p>
      <img
        src="/assets/images/blogs/mcp-tools/mcp-hub.webp"
        alt="You talk to your AI agent, which connects to your e-mail, chat, task board, code, files and meetings using MCP"
        width="1600"
        height="900"
        fetchpriority="high"
      />
    </p>

    <p>
      I think most people reading this are already using AI in some way in
      their workflow. It helps to improve e-mails, summarise long texts,
      write code and do all kinds of other things. But until recently I was
      still the one providing most of the context to the model myself, and
      writing a good prompt that described exactly what was necessary was
      the part that took the most work. If I forgot a detail the result
      would miss that detail as well, so I spent a lot of time describing
      the situation, the goal and how I wanted the output to look.
    </p>
    <p>
      The annoying part is that most of this context already existed
      somewhere else. I would copy the message I had received into the AI
      chat window, find the user story on the task board that it was about
      and copy that in as well, add some explanation of my own on top and
      describe how I wanted my message to sound. Then I took the output,
      pasted it back into the conversation and sent it. It worked, but I was
      basically the copy and paste layer between my AI and my own tools.
      This is not needed anymore.
    </p>

    <p>
      <img
        src="/assets/images/blogs/mcp-tools/before-after.webp"
        alt="Before MCP you copy the message and user story yourself, with MCP your agent reads them for you"
        width="1600"
        height="800"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>Before MCP you collect the context yourself, with MCP your agent does it for you</p>
    </blockquote>

    <h2 id="what-is-mcp">What is MCP?</h2>
    <p>
      The thing that changes this is the{" "}
      <a href="https://modelcontextprotocol.io/" target="_blank">
        Model Context Protocol
      </a>
      , or MCP for short. MCP is a protocol that gives your AI assistant
      access to tools, so it can look up the information it needs by itself
      and do something with the result. For instance it can read an e-mail
      that asks about the status of your work, check the files in your
      OneDrive to find out how far along you are and write a good draft
      reply based on that. I think most of us send this kind of e-mail all
      the time.
    </p>
    <p>
      The way this works is quite simple. An MCP server offers a list of
      tools, and for every tool it describes in plain text what the tool can
      do, together with the input it expects and the output it returns. Your
      AI reads these descriptions and decides by itself when a tool is
      useful to complete your request. See it as a menu of actions that you
      hand to your assistant, where you decide what is on the menu.
    </p>

    <p>
      <img
        src="/assets/images/blogs/mcp-tools/tool-menu.webp"
        alt="An e-mail MCP server offering the tools read_email, search_emails, create_draft and send_email"
        width="1600"
        height="960"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>A simplified example of the tools an e-mail MCP server could offer to your agent</p>
    </blockquote>
    <p>
      Tools like{" "}
      <a href="https://claude.com/product/claude-code" target="_blank">
        Claude Code
      </a>
      ,{" "}
      <a href="https://openai.com/codex/" target="_blank">
        Codex
      </a>{" "}
      and{" "}
      <a href="https://cursor.com/" target="_blank">
        Cursor
      </a>{" "}
      all support this out of the box. Adding a server is usually a single
      command or a few lines of configuration, in Claude Code for instance
      you can use <code>claude mcp add</code> and then check your
      connections with <code>/mcp</code> (see{" "}
      <a href="https://code.claude.com/docs/en/mcp" target="_blank">
        the documentation
      </a>
      ). Often you do not even have to build anything yourself, since a lot
      of services like GitHub and Jira offer their own MCP server by now.
    </p>

    <h2 id="connecting-your-work">Connecting your work</h2>
    <p>
      Think about how much of your work is spread over different places. The
      discussions are in{" "}
      <a href="https://slack.com/" target="_blank">
        Slack
      </a>{" "}
      and in your e-mail, the tasks are on a board in{" "}
      <a href="https://www.atlassian.com/software/jira" target="_blank">
        Jira
      </a>
      ,{" "}
      <a
        href="https://azure.microsoft.com/en-us/products/devops"
        target="_blank"
      >
        Azure DevOps
      </a>{" "}
      or whatever you use, and your code and its issues live on{" "}
      <a href="https://github.com/" target="_blank">
        GitHub
      </a>
      . All of these can be connected to your agent.
    </p>
    <p>
      I wrote a blog a while back about{" "}
      <a href="/blogs/connected-stacks" target="_self">
        why context is important
      </a>{" "}
      when working in a team. A developer who does not know who the users
      are or which systems their product talks to will make worse decisions.
      AI works exactly the same way. The more context it has the better the
      result, and MCP takes away the part where you have to deliver all of
      that context by hand.
    </p>
    <p>
      This also changes what a prompt looks like. Where I used to paste in
      the message and the user story and explain the whole situation around
      them, I can now ask something like{" "}
      <em>
        &quot;write a message that answers the last question from my
        colleague and include the current status of the user story it is
        about&quot;
      </em>
      . My agent has access to the chat with my colleagues, the task board
      and the codebase, so it reads the conversation, looks up the story,
      checks the code and writes the message. I still read it before it is
      sent of course, but most of the work of writing a good prompt was
      collecting everything around the question, and that part is now done
      for me.
    </p>
    <p>
      The same goes for code. An agent can read a GitHub issue, look through
      the codebase and come back with a proposed solution, without me having
      to explain the problem in a chat window first. This fits well with the
      way of working I described in my blog about{" "}
      <a href="/blogs/agentic-coding" target="_self">
        agentic coding
      </a>
      .
    </p>

    <h2 id="meetings-that-create-work">Meetings that create work</h2>
    <p>
      A meeting usually leaves you with two things, a bunch of decisions and
      a list of things that someone still has to do. I think the second part
      is where it often goes wrong. Someone has to write the notes, someone
      has to turn them into tasks and in the busy days after a meeting this
      easily gets pushed back until half of what was agreed on is forgotten.
    </p>
    <p>
      AI meeting note apps can take care of a big part of this. While you
      are in the meeting they listen along and write everything down, which
      gives you a full transcript of what was said and a short summary with
      the most important points. This already saves a lot of time, but it
      gets really interesting once you connect it to your agent. You can
      hand it the transcript and the summary and ask it to create the tasks,
      put them on your board or prepare the next step, like drafting the
      follow up e-mail to the customer. You end a meeting and the tickets
      for everything that was agreed on are already waiting for you, with
      the context of the meeting attached to them.
    </p>

    <p>
      <img
        src="/assets/images/blogs/mcp-tools/meeting-flow.webp"
        alt="A meeting becomes a transcript and a summary, which your agent turns into tickets and a draft follow up e-mail"
        width="1600"
        height="560"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>Meeting notes that turn into work, ready for you to check</p>
    </blockquote>
    <p>
      I have written before that{" "}
      <a href="/blogs/taking-notes" target="_self">
        taking notes is a real superpower
      </a>
      . This takes it a step further, since your notes do not just sit in a
      folder anymore but can actually start the work that follows. One thing
      to keep in mind is that everyone in the meeting should be okay with
      being recorded and transcribed, especially when customers are
      involved.
    </p>

    <h2 id="letting-ai-do-the-discovery">Letting AI do the discovery</h2>
    <p>
      An agent can also help with finding out what to work on next. Give it
      access to the internet and it can follow the developments within your
      field for you. It can read the blog posts, articles and release notes
      that you never get around to and turn the things that are relevant for
      your product into a list of ideas, basically the first version of a
      new backlog.
    </p>
    <p>
      Not every idea on this list will be a good one, so it still has to be
      refined by you and your team. But instead of new ideas depending on
      who happened to read an interesting article that week, you get a
      steady stream of suggestions that you can discuss and prioritise.
    </p>

    <h2 id="what-is-left-for-us">What is left for us?</h2>
    <p>
      If you follow this line of thinking a lot of the work in between
      disappears, like the copying, the summarising and the administration.
      The tasks that remain are:
    </p>
    <ul>
      <li>
        <p>
          Having the meeting, so actually talking to your colleagues and
          customers
        </p>
      </li>
      <li>
        <p>Prioritising the tasks</p>
      </li>
      <li>
        <p>
          Finding out what is important to the business and the customer, so
          what actually creates value
        </p>
      </li>
      <li>
        <p>Checking the final work that the AI delivered</p>
      </li>
    </ul>
    <p>
      I think this is a good place to end up. The first three are about
      understanding people and what they need, which is something your agent
      can only guess at. The last one is the same lesson as in my blog about{" "}
      <a href="/blogs/ai-unit-tests" target="_self">
        vibe coding
      </a>
      . The more work is done by AI the easier it is to miss a mistake in a
      lazy moment, so reviewing becomes one of the most important parts of
      the job.
    </p>

    <h2 id="be-careful-what-you-connect">Be careful what you connect</h2>
    <p>
      Giving an AI access to your e-mail, your chats and your code is
      powerful, but it also means that mistakes can have real consequences.
      These are the things I keep in mind:
    </p>
    <ul>
      <li>
        <p>
          Only add MCP servers that you trust, you are giving them access to
          your data
        </p>
      </li>
      <li>
        <p>
          Set the right permissions for your agent. If writing is not
          necessary give it read-only access, and use fine-grained access
          where you can, for instance so your agent is able to create a
          draft of an e-mail but not able to send it. That way you can read
          the draft and press send yourself
        </p>
      </li>
      <li>
        <p>
          For the actions that do change something, let the agent ask for
          your approval first, at least until you trust the setup
        </p>
      </li>
      <li>
        <p>
          Keep tokens and API keys out of the config files that you commit
          to git
        </p>
      </li>
      <li>
        <p>
          Remember that your agent reads everything you connect, including
          e-mails from other people. A message can contain text that tries
          to give instructions to your AI (this is called{" "}
          <a
            href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/"
            target="_blank"
          >
            prompt injection
          </a>
          ), which is one more reason to check what goes out under your name
        </p>
      </li>
      <li>
        <p>
          Start small, connect one or two tools first and expand from there
        </p>
      </li>
    </ul>
    <p>
      Fine-grained access deserves a bit more explanation. Every MCP server
      has its own methods, like <code>read_email</code>,{" "}
      <code>search_emails</code>, <code>create_draft</code> and{" "}
      <code>send_email</code> in the example from earlier. For each of these
      methods you can define whether your agent can just run it, has to ask
      for your permission first or is not allowed to use it at all. On top
      of that many services let you set the connection itself to read
      access, read and write access or blocked. This gives you an extra
      layer, because even if your agent wants to do something it should not
      do the connection simply does not allow it.
    </p>

    <p>
      <img
        src="/assets/images/blogs/mcp-tools/permissions.webp"
        alt="Permissions for an e-mail connection that can create drafts but not send, and a read-only task board connection"
        width="1600"
        height="800"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>Example of fine-grained and read-only permissions for your agent</p>
    </blockquote>

    <h2 id="how-common-is-this-already">How common is this already?</h2>
    <p>
      To see how common this way of working already is I looked up some
      numbers:
    </p>
    <ul>
      <li>
        <p>
          In a{" "}
          <a href="https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work" target="_blank">
            Stack Overflow survey
          </a>{" "}
          from April 2026 among 1,100 developers and other professionals,
          59% said they use AI agents at work, compared to 31% a year
          earlier. Daily use went from 14% to 37%
        </p>
      </li>
      <li>
        <p>
          The same survey shows that people stay careful, 63% rarely or
          never let agents run entirely on autopilot and 60% block agents
          from making changes that were not approved
        </p>
      </li>
      <li>
        <p>
          According to{" "}
          <a href="https://stacklok.com/resources/state-of-mcp-in-software-2026/" target="_blank">
            Stacklok
          </a>{" "}
          nearly half of the software companies they surveyed use MCP in
          production, with 19% already using it broadly
        </p>
      </li>
      <li>
        <p>
          The rules are still catching up. In a{" "}
          <a href="https://fleetdm.com/industry-news/onetrust-ai-governance-report-unapproved-agents" target="_blank">
            OneTrust survey
          </a>{" "}
          among 1,200 decision-makers, 87% of the organisations encourage
          their employees to use AI agents while only 47% say they have
          clear governance in place
        </p>
      </li>
    </ul>
    <p>
      So for developers agents and MCP are becoming normal quickly, but
      giving an agent access to your messages and your task board is still
      new for most companies. Check what the rules are at your work before
      you connect everything.
    </p>

    <h2 id="conclusion">Conclusion</h2>
    <p>
      MCP is the next step in making AI tools more useful. AI becomes a lot
      more helpful once it stops being a chat window that you have to feed
      and becomes part of the places where your work already lives.
    </p>
    <p>
      I also think this shows where we are heading, towards using computers
      in a completely different way. Nowadays we open an application, click
      through its interface and do the work ourselves. I expect that user
      interfaces will more and more become something that is used by AI
      agents, while you as a user only interact with your own agent and
      connect the tools to it that you need for the job at hand. About a
      year ago I wrote in my blog about{" "}
      <a href="/blogs/ai-thoughts" target="_self">
        my views on AI and the future
      </a>{" "}
      that you might one day only be the manager of your own personal AI,
      and with MCP that future feels a lot closer.
    </p>
    <p>
      We are not there yet, but you can already start today. Pick one tool,
      for example your task board or GitHub, and ask your agent to do
      something that you would normally do by hand. I think you will be
      surprised by how quickly it becomes part of your routine.
    </p>
    <p>
      I am curious which tools you would connect first, so let me know in
      the comments or <a href="/contact">send me a message</a>!
    </p>
  </>
);
