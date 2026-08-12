import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "34",
	numericId: 34,
	slug: "agentic-coding",
	title: "Agentic coding, a new layer of abstraction 🤖",
	description: "AI agents are advancing fast, while the introduction of ChatGPT was already a massive shift in how a lot of work was done, the improvements have kept coming. AI agents are doing more and more of the work and becoming impressively good at it as well. I think it is time to stop criticising using a lot of AI in your work and start thinking of ways to streamline using these agents. How to create guardrails so these agents can be used to effectively make us do more work while not generating AI slop.",
	date: "2026-03-15",
	link: "https://vonkprogramming.nl/blogs/agentic-coding",
	content: `
I have recently been spending time using Anthropic’s Claude 4.6 Opus,
and I have to say, it has won me over. I have long been skeptical of
the narrative that AI will simply "take over" coding and
change software development at a fundamental level. However, I am
beginning to realize we are at an important point in modern history.
If it isn't here today, it is certainly coming soon. Software
engineering is changing, but that doesn't mean we are becoming
obsolete; rather, we are moving into a new layer of abstraction.

## The Shift to Architecture

Writing code has never been easier. You can now analyse the problem,
find some initial context like what modules, services or components
are useful to know about to solve the issue and then just provide all
this initial research to an agent like Claude. Even if you do not let
agents generate your code yet it will still be able to analyse the
context and suggest a potential solution which you can implement
yourself or let it implement. I think there will be a day where this
step of taking the user’s request and analysing the context to
implement a solution will all be done by agents.

This means that software engineering is evolving into an architectural
role. A deep understanding of best practices, how to build scalable
and maintainable applications and how to write clean code is more
essential than ever because you must be able to guide your tools
effectively. I think manual coding will become a secondary task (if it
isn’t already). It will mostly be used to correct a mistake or guide
your agent into a certain way of implementing a solution.

Version control tools like Git also allow you to easily let the agent
make all kinds of changes and being able to review what exact changes
were made. Current models are now sophisticated enough to mirror your
personal coding style, provided you give them clear boundaries. In
many modern IDEs, this is managed through an agents.md
file, which is a standard for defining the "ground rules" of
your workspace.

## The Power of agents.md

The flexibility of AI agents is their greatest strength, but it is
also a vulnerability. Without specific context or constraints, they
can easily miss nuances or create different solutions using different
styles of codes or methods of implementation within the same project.
This is why a standardized ruleset, whether via agents.md
or another method, is vital.

I have found immense value in adding simple instructions like:
"Run all unit tests after finalizing changes" and
"Ensure unit test coverage remains above 95%." It
sounds basic, but the number of issues I have caught because an agent
automatically ran a test suite and caught its own mistake is
significant. This is why i strongly recommend to write a rigorous
rules file to force adherence to your standards.

[Image: Agents.md illustration]

Example of a simple agents.md file

## The Resurgence of Unit Testing

I have noticed that the way we write unit tests usually depends on the
size of the company. In larger organizations, there are often strict
rules to ensure high code coverage for every new feature. However, in
smaller companies with smaller budgets, writing extensive tests is
often skipped because there is little room for it due to time or
financial constraints.

With agents, I think this trade-off is no longer necessary. The time
it takes to create these tests has gone down so much that there is
really no reason to disregard high code coverage. It prevents so many
issues that it should simply be a standard part of the workflow now.
Especially when using AI agents to write more code which, let’s be
honest, in a lazy moment is easy to miss certain inconsistencies.

[Image: Unit testing illustration]

Example of a Pytest run

## Learning the Fundamentals in an AI World

While agents are remarkably effective, it is important to understand
how to structure a project and write maintainable code. This requires
a good understanding of concepts like abstraction, knowing which code
to split into new modules and how to write logic that is functional
but, most importantly, readable. A solution can be written in a
thousand different ways that "work," but the real challenge
lies in making it readable, maintainable and scalable, these are not
just buzz words they actually matter.

I learned most of these skills myself by actually writing code,
following courses, and experimenting with project structures in many
side projects. This often meant scaffolding a new application just to
see which methods felt best as the project scaled. You need to know
where to find specific logic and easily extend on it, even when a
project grows to over a thousand files.

The best way to describe this is the "Keep It Simple Stupid"
(KISS) method. Do not overcomplicate your solution. I find it is best
to write functional code that solves the issue first, then refactor it
until it is simple and easy to read. If a solution becomes so complex
that you have to spend a lot of time explaining it to a colleague, you
have likely overcomplicated it. This does not mean to write as little
lines of code as possible sometimes the simpler way is to split a
complex if statement into a function with a clear name of what
conditional is being tested. It needs to be simple to understand as
well.

All these fundamentals are more important than ever when using agents.
You are now the reviewer, software architect and team lead, and you
are responsible for publishing code that is easy to maintain, can be
extended upon and most importantly understood by the next person
working on it (which might also be you after not touching the code for
2 years). While the task of actually writing the initial solution is
often offloaded to the AI, current models are not always great at
keeping things simple (I am looking at you GPT-5.4). It is your job to
ensure the final result remains clean.

## Maintaining the Craft Through Side Projects

While agents boost productivity, they do not necessarily sharpen these
ever important skills; in fact, they might cause them to atrophy if
you aren't careful. To counter this, the value of
"agentless" side projects has never been higher. See it as
training like for sports, it is not to actually gain direct value but
it does help you perform better when it actually matters.

Most developers have personal projects fueled by curiosity rather than
deadlines. These are the perfect environments to work manually,
sharpen your ability to recognize good architecture, and keep your
"coding muscles" strong without using agents or with reduced
use of them. During work hours, efficiency is the priority, and using
an agent to generate logic is usually the right choice. But in your
own time, the act of writing code manually is how you remain a master
of the craft. It does not matter if your private dashboard that shows
the values of your sensors is done this weekend or by the end of this
month.

[Image: Github public side projects]

My (public) side projects on Github

## Looking Ahead

We might not be at the point of total transformation yet, but the
models are becoming remarkably capable. We are approaching a threshold
where these tools will be so integrated into the professional standard
that choosing not to use them will simply mean being left behind. I
think it is time to embrace this way of working, but also think
critically about how we can work responsibly, by keeping the quality
of software high.

In the coming years many new agents will arise with ever increasing
quality, many new methodologies on how to use them and create guard
rails to give the agents the freedom to solve problems without risking
production outages due to missing context. I was feeling down in the
past months about feeling that my hard earned software engineering
skills were becoming less valuable, but recently I have become more
optimistic again due to looking at it more as an evolution than as the
end of software engineering. Many influencial software engineers like
Linus Torvalds, Bjarne Stroustrup and Guido van Rossum are also
positive about the evolution of the field of software engineering,
while also all cautioning for letting these agents generate code
without supervision of a software engineer who has a deep
understanding of the fundamentals discussed in this blog.

So let me end on this, the field of software engineering is at an
important step in it’s evolution which brings a lot of exciting and
sometimes also scary changes with it, but if you adapt you will be
able to become essential in the next years to come in software.
`,
};

export default blog;
