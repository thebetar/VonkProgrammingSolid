import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "19",
	numericId: 19,
	slug: "rebuilding-website",
	title: "Rebulding my personal website 🛠️",
	description: "Like every 1 to 2 years I recently decided to rebuild my website again using another framework. This time I chose to use Solid.js to replace my old Astro.js setup. In this blog post I will talk about my experience setting everything up and the reasons why I chose Solid.js.",
	date: "2024-11-24",
	link: "https://vonkprogramming.nl/blogs/rebuilding-website",
	content: `
I recently recreated my website in a different technology stack. I do
this every 1 to 2 years as a mini challenge to try one of the new
options that the technologies within the frontend world bring. This
time I went from Astro.js to Solid.js.

## Why Solid.js

Solid.js is a very minimalist framework. I’ve seen many benchmarks
over the years comparing the speeds of different frameworks, and
Solid.js has always been at the top (Astro.js is also very highly
rated). One of the benchmarks I use is this. I also encountered the
problem with Astro.js that when problems arise, it can be difficult to
find a forum post with someone who has the same issue. This is due to
the community that works with Astro.js being smaller than frameworks
like React.js or Vue.js.

When starting with a fresh setup, you often don’t encounter big
problems, so I can’t speak about this for Solid.js yet, but the
community does seem bigger.

## Why Rebuilding

A portfolio website is a very easy and simple project. It doesn’t
require a deep understanding of a framework to build but just enough
to be able to make some pretty cool stuff. This is why rebuilding your
own website every now and then when you have some time is a great
idea.

It’s an easy sandbox environment to experiment with, the time to
finish can be stretched as far as you want, and it will result in you
being able to boast that you built your website in the newest,
hottest, most modern stack.

## Lessons Learned

What really stood out with Solid.js this time around was how much
optimization was included. Features like fine-grained reactivity and
efficient rendering are already included automatically, so I didn’t
have to spend extra time on enhancing performance. That alone made it
feel like a step up from some of the other frameworks I’ve used
before.

Another big advantage was that Solid.js works with Vite by default.
Having Vite as the default bundler made everything faster and easier,
from setting up the project to adding plugins. Vite's ecosystem is
quite big and makes it easy to find plugins that can enhance
performance even more, like compressing your build files with gzip to
make the files that need to be delivered to the client's browser
just a little bit smaller.

On top of that, I liked how familiar the syntax was, it’s very similar
to React.js. It cost me less time to figure out how to do things and I
could spend more time actually building.

## Conclusion

I think it’s good for all developers who have some free time on their
hands to take these small challenges. They’re fun, increase your
knowledge, and they give you another excuse to experiment with new
tools in the development world. So, why not? Your future self will
thank you, and your portfolio will look that much shinier in the
process.
`,
};

export default blog;
