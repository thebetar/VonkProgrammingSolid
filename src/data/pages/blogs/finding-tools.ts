import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "5",
	numericId: 5,
	slug: "finding-tools",
	title: "The right tool for the job 🔨",
	description: "Finding the right tool for the job can be difficult. Finding the optimal tool is even more difficult. In this blog post I go into my views on finding the right tool and what are important things to take into account.",
	date: "2024-05-24",
	link: "https://vonkprogramming.nl/blogs/finding-tools",
	content: `
Within the world of development a lot of people have very strong
opinions about what is the best tool or programming language.
You'll hear them say things like "the best code editor is
X", or "the best programming language is Y". I think
this is a wrong approach to finding the best tool. Every tool be it a
programming language, code editor, operating system, etc; has it's
own ups and downsides. There is no tool that solves all problems in a
good way. I have tried a lot of tools over the years to find out if I
can find this impossible ideal tool. But eventually I found out that
there is no ideal tool. In this article I will go into the aspects of
choosing tools.

## Development time versus optimal choices

Nowadays a lot of tools are built using tools that are to say it
nicely, less than optimal. But the decision to use these is mostly
time or money based. Developing an optimal tool will cost more time,
be more difficult and overall cost more money. This can be best
observed in most modern desktop application being developed in
Electron or something similar. For people who do not know what
electron is, it is a tool where a program can be written using the
tools you would use to make a website. The resulting program will be a
headless browser that runs this web application. The big advantage of
this is that the developers that worked on the website can also easily
work on the desktop application and that it is cross platform by
default. A lot of code can even be reused. However chrome is known to
be resource hungry and when running multiple of these desktop
applications, your computer will quickly run out of available memory.
But developing this entire tool in Java or C# would cost a lot more
time and would require a company to hire new developers for this
purpose, if they did not have these skills in house yet.

Another example is since the ease of use of cloud hosting that was
introduced by amazon web services, microsoft azure and others. It is
now often the case that spending time and resources on creating an
efficient service is more expensive than a service that can be made
quickly but is not optimal and can be cheaply run on a server in the
cloud. Since the cost of running a server is now so low, bad code is
insentivised.

## Simple problems do not need complex solutions

While the above paragraph goes into a rise in non-optimal lower
performance solutions. There are situations where the opposite
applies. If the requirements don't require high performance, just
do it the simple way. A lot of developers like building complex
systems, but when someone asks for a solution to a simple problem. It
is easier for both the developer and the person asking for his or her
problem to be solved to have a simple solution. A simple portfolio
website or webshop does not need to be built using react with a
complex server using java. Wordpress or shopify will do the job and
reduce the development time greatly. Since the performance difference
and added flexibilty are not necessary. They should not be used
(unless in the future it will be a requirement).

However don't get stuck trying to fix all your solution using
these easy to use tools, sometimes a problem does require a more
complex, more performant tool to get the job done.

## Getting stuck in your comfort zone

Since every problem has a specific set of tools which are best to fix
the problem, efficiency or quality-wise. Many people choose one tool
and keep using it for years, specialising and becoming very proficient
in fixing that problem. Being familiar with a tool is great and can
give many benefits, but don't get stuck using non-optimal tools
just because you have been using it for a long time, times change and
new ways to solve problems get released every day.

Experimenting is important to finding the best tool. I also used
notepad++ for development purposes longer than I am comfortable
admitting, but the moment I switched to a more fully fledged
developement environment I realised how many hours I had wasted using
a tool with none of the niceties that these tools did have. It's
the same with using linux for me. While I am not saying Linux is
better than Windows, because it depends. I am saying that trying more
than one operating system in your journey is good to see what other
flavours are out there. You also don't taste one kind of food and
because it is nice keep eating that for the rest of your life.

What I am trying to say with this is that at your work it is good to
specialise in a tool and become very good at it, but you should also
spend some time experimenting with other tools that solve the same
problem or diversify even more and learn how to solve other kinds of
problems as well.

## Don't be afraid to start over

Something else I have witnessed a couple of times and have also been
guilty of myself is choosing a tool because it is exciting new
technology and you want to try it. This is a good way to think, but
when doing this be aware that it might turn out that the tool cannot
solve the problem at all or not in a correct way. If this happens,
that is fine, lessons were learnt. But do not be afraid to scrap the
project and rebuild it using something that you know will work (not
neccessarily that one tool you always use but something you are more
comfortable with).

I know it feels very bad to throw hard work into the trash, but it is
part of the process. No one likes to do it, but it has to be done.

## Finding the right tool

In programming solutions finding the right tool comes down to some
aspects of the requirements. What is the complexity, what is the time
and money constraint, what knowledge do the developers currently have.
These are all the important ways to select a tool. I have tried many
programming languages over the years and in my experience the
following languages have the following advantages

- Javascript: easy-to-use and very fast to ship to production, it is also very versatile when creating user applications. It can also be used to create server.

- Python: easy-to-use and very fast to ship to production, it is very versatile in creating scripts, machine learning setups and other things.

- C: more challenging to use and longer time to ship to production, but the performance is very high. If there is a problem which needs to run fast, this is the best choice

- Go: a good middle ground between easier languages and performant languages, it is fairly easy to use and for most cases has more than enough performance to solve the problem.

- Java: a solid language that has been around for a long time, if an advanced application has to be built and run for years without change, this might be the best solution

There are of course other languages but I think these would still fall
into the category of being similar to the advantages listed here, for
instance Rust has similar advantages to C. C# has similar advantages
to Java, etc.

These examples show that for different situations different solutions
can be good and no solution is the best for all problems.

## Conclusion

While I think nowadays a lot of solutions are built less than optimal
because getting more compute power using cloud hosting is cheap, this
is fine for most cases. However it is good to keep thinking if the
problem does not require a more performant solution and not always
choose the same tool just because it is comfortable.
`,
};

export default blog;
