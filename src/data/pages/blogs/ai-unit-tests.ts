import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "32",
	numericId: 32,
	slug: "ai-unit-tests",
	title: "Vibe Coding Needs a Vibe Check 🎯",
	description: "Writing unit tests for all your code is not something every developer or company has the time or resources to do. However they can ensure that your code works as expected and prevent production issues. In this blog post I will discuss how using AI you can easily generate unit tests for your codebase and increase your test coverage with minimal effort.",
	date: "2025-12-27",
	link: "https://vonkprogramming.nl/blogs/ai-unit-tests",
	content: `
I remember when I was just starting out at Quintor that the concept of
writing unit tests for most of your core functionality was new to me.
I understood why it was important but the time it took to write all
these tests felt like a massive pain. But I persisted and once I
started working in large companies where testing is done religiously
it became second nature!

That changed however once I started working on smaller projects again.
I tried to combine a freelance job with studying for my master's
degree. The projects were smaller, the clients had tighter budgets and
the speed required just did not fit with the idea of writing unit
tests for everything. This dynamic has stayed mostly the same, but my
approach to it is changing now, especially after reading the amazing
book
"Clean Code" (http://cleancoder.com/products)
by Robert C. Martin, better known as Uncle Bob within the programming
community.

[Image: Clean Code book cover]

"Clean Code" book cover

## Lessons from "Clean Code"

The book was written way before the advent of AI assisted programming
and mainly talks about languages like Java and C++. Most developers
nowadays work using Python and Javascript but I think it still holds
very true. Writing code has multiple phases which you go through with
every iteration of new code you write. First your main goal is to fix
the bug or create the functionality that is required. Then you start
refactoring your code to adhere to coding standards, make it readable
and simplify it. Finally you write unit tests so you can be sure that
if you change something at a later stage the functionality still
works!

I have noticed however that within smaller companies or startups these
guidelines are followed less strictly in the name of velocity. Partly
I understand this way of thinking but it also increases the chance of
things going wrong in production.

## The "Vibe Coding" Risk

This risk is actually getting bigger. On top of the usual risks we now
have AI and "vibe coding" adding to the pile. A moment of
laziness can cause an AI hallucination to slip through and cause
production crashes. We have gotten to the point where more and more
developers let AI write their code for them and they just work as a
code reviewer of what the AI has written.

## AI as the Solution

There is a solution however. Writing code using AI or using AI as an
assistant when writing code yourself has increased the efficiency of
most developers nowadays. You can easily ask your AI assistant for a
specific algorithm or how a problem is often solved using a specific
tool. It can recite a common fix it found on the internet and help you
complete your work faster.

One new task I have found that AI is very good at is writing unit
tests for functionality that already exists! Unit tests are quite easy
to understand and adjust after the AI has generated them. My biggest
struggle was often finding how to mock a specific function or how to
handle a specific edge case with a testing framework. But AI can
generate all of this for you. You can just focus on what things are
actually tested, what parameters are passed to the functions, what
values are returned by the mocks and what expected values should be
returned.

## Quality for Every Budget

This allows any developer or team who previously felt they did not
have the time to spend on writing all these unit tests to finally
start implementing these quality checks, regardless of team size or
budget. You can create a simple pipeline with a code coverage rule
which checks if your tests cover a specific percentage of your code.

I think this also mitigates one of the major issues that have been
observed from increased usage of AI. We know it can cause more issues
to occur if we are not careful. But if you have unit tests for every
method and test multiple different paths and ways it can return a
value you can decrease the chance of an issue occuring.

## Final words

I think anyone using AI extensively to write code should adopt this
way of work. Yes it decreases the amount of tasks you can complete in
a day slightly but you can be more certain that the tasks you do
finish are actually functional code that does not cause issues in
other parts of the application.

And like I mentioned earlier in this blog, it does not even take up
that much time. You can just work like you normally work. Then you ask
your AI assistant to see all the code you have written since the last
commit and to create or update unit tests accordingly. You can get
some coffee while it is going. After a short check to see if the tests
are actually good and adhere to the coding style in the rest of the
project you can just go on to your next task like previously.
`,
};

export default blog;
