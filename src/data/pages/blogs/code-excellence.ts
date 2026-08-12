import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "1",
	numericId: 1,
	slug: "code-excellence",
	title: "How to achieve code excellence",
	description: "What are the key principles of code excellence? What rules to adhere to and what tools to use? This blog post will delve deep into the world of writing excellent code, click read more to find out.",
	date: "2024-04-24",
	link: "https://vonkprogramming.nl/blogs/code-excellence",
	content: `
Being able to solve problems is a very important part of being a
  developer, but we have all ran into the problem that when we go back
  to our code 2 months later it can seem quite cryptic. Unless of course
  your code is excellent!

  In this blog I will go over my tricks to keep my code readable and the
  quality high!

## Introduction

In this blog I will go over the following concepts:

- Code splitting

- Never nesting

- Variable and function names

- Linting

- Testing

- Comments

- Fix problem quick and dirty, then refactor

  In the end I will go into why I think having a sustainable plan for
  yourself is important, since following all rules religiously most
  likely will end up having you not follow them at all anymore in the
  long-term.

## Code splitting

  We have all learnt initially that functions used so logic does not
  have to repeated, this of course is a very important use case for
  functions!

  However functions can also greatly increase the readability of your
  code. Long if statements or big functions can become unreadable since
  a lot of context has to be remembered. While splitting it up in small
  readable and rememberable chunks makes it easier to understand.

  This can be done for instace by changing a big if statement like

    person.age > 65 && person.nationality === 'NL'
    && person.working === true

  into a function by moving this if statement to a function and calling
  it
   ifEligibleForDiscount. This describes what you mean to
  do with this functionality and cleans up the code block of the
  function.

  When this is done over an entire code base it can keep the code more
  readable especially when going back to it after a while since function
  names are often more descriptive than code.

## Never nesting

  Never nesting is the concept of keeping the layers within your code as
  low as possible. This is to remove the complexity of reading over what
  a function performs. This can be done both by early returns and code
  splitting. When too many layers are used it can be easy to lose
  oversight of which layer is currently used.

  Early returns are the idea of instead of using

    if(x === true )  some_logic "}

  using

    if(x === false)  return "} some_logic

  which does not add an extra layer of nesting.

  I recommend watching the video from

    CodeAesthetic (https://www.youtube.com/watch?v=CFRhGnuXG-4)
  to know more!

## Variable and function names

  Naming in programming should describe what the variable will be used
  for or what the function should do. Renaming variables and functions
  after the program is functional is an important part of keeping
  everything nice and readable. Variable names should include their
  context and what they are used for.

## Linting

  Linting is an integral part of writing qualitative code. Using tools
  like eslint for javascript are amazing to achieve this
  task. It is important however to set the right linting tools and not
  be too nice on yourself when creating the configuration of this
  linter. Strict rules will reduce the speed at which you can write code
  but will in the longterm create better quality of code.

## Comments

  Comments are important for describing function or variables which need
  more context than can be given in a single name. If the rules above
  are adhered however comments should not be necessary for every
  function and can be written for more complex function. It is best
  practise to write comments for all your code, but a sustainable way if
  there is a time constraint is to at least write it for all complex
  functions where the context might be a little unclear later on.

## Fix problem quick and dirty, then refactor

  This is one of my favourite rules which I apply to almost all my
  problems. If there is a problem it is not a crime to create some code
  in the quick and dirty way to fix the problem. However the problem
  starts to arise when after the code works the steps to make the code
  of high quality and sustainable are not taken. It is very alluring to
  finish quickly and call it a day but the time investment to improve
  the code by using the rules described in this blog is most of the time
  minimal and will reduce time spend decyphering later.

## Sustainability

  I have had many points where I tried to follow all the rules when
  writing my code. In my perspective writing perfect code is very hard
  and time consuming and I do not think it is a sustainable goal for
  most developers. That is why I think it is an important rule to find
  what works and is easy to apply so the maximum value to time ratio can
  be achieved. The rules described in this document are minimal but they
  are easy to implement and thus will be easier to stick to, which in
  the development world is very important. There will be many people out
  there telling you how to do it better, and maybe they will be right.
  But in the end having good rules which you can stick to is the most
  important.
`,
};

export default blog;
