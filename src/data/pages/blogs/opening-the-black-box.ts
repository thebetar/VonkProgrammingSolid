import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "37",
	numericId: 37,
	slug: "opening-the-black-box",
	title: "Opening the Black Box 📦",
	description: "Understanding concepts like TCP, messaging queues, and encryption on a conceptual level is often enough for day-to-day work. But once you try to recreate them yourself, you quickly realise how much more ingenious these tools really are. In this blog, I share what I've learned by opening the black box and building my own versions of the fundamentals we use every day.",
	date: "2026-07-30",
	link: "https://vonkprogramming.nl/blogs/opening-the-black-box",
	content: `
[Image: Opening the Black Box]

  As a software engineer there are many different things you need to
  know, whether you are a network engineer, web developer, data
  engineer, data scientist, devops engineer, systems engineer or any
  other of the hundreds of job titles; there are many things to know
  that are unique to each role and many that overlap between different
  roles.

  Many of these concepts are taught on a conceptual level during any
  computer science related course. Things like TCP, HTTP, DNS, Load
  balancing, Messaging Queues, Serverless functions and others are
  talked about during the various lectures. For nearly all use cases it
  is more than enough to understand conceptually how for instance TCP
  works, you know that it first establishes the TCP connection with a
  handshake and then ensures each packet is delivered correctly. But
  recently I've found that if you try to recreate these protocols,
  tools and concepts they are often more ingenious than it seems.

## Recreating the Black Box

  Recently I have picked up the hobby of recreating basic programming
  concepts myself in different programming languages I wanted to use
  more (or sometimes some languages I already have a lot of experience
  in, but just felt like using that day). I initially started this hobby
  because I wanted to have a nice programming challenge for myself to
  deepen my knowledge on new languages, sharpen my skills and most of
  all keep my programming skills alive without using AI to write most of
  my code. But I've found that this set of programming challenges is
  more than just a nice way to do any of the aforementioned, you learn
  specific considerations that you never thought of before.

### Messaging Queue

  A good example is my attempt to create my own messaging queue. After
  having used RabbitMQ and AWS SQS before I understood the concept of
  being able to publish a message to a message queue and being able to
  subscribe to receive these messages with a different service, thus
  creating a nice line of communication. But once you start creating
  your own messaging queue you start to realise that you have to deal
  with way more than a simple queue, you have to think about how to
  handle messages that were sent at the same time (concurrency), how you
  can offer enormous throughput (scalability), how you can keep multiple
  instances in sync and much more.

### Encryption

  Another project I've tackled is encryption. I already had a pretty
  good understanding of how even more complex topics like asymmetric
  encryption used in end-to-end encryption work (where you have one key
  to encrypt the data and another to decrypt the data) but during this
  project I got to understand what level of encryption you can create
  and what the caveats are when considering security versus performance.

### Compression

  The next project I tackled was to create my own implementation of a
  basic compression tool. Compression is used everywhere, from zipping
  the content sent to your browser to reduce network load to storing
  archived files on your system to save space. What I've learnt is
  that compression algorithms work by replacing characters or patterns
  that occur most often by a reference (that is much shorter in length)
  to a dictionary which results in the total amount of characters used
  being reduced radically. For instance if you would replace every
  "the" in a piece of text with a reference to it like
  "~", this already reduces every occurrence of
  "the" by 2 characters!

### Database

  One project that has shown me that the concept works way more complex
  than it might seem initially is databases. I knew that the entire
  querying language behind it is complex but the way data is stored in a
  way that is as efficient as possible is a rabbit hole that just keeps
  going. Add on top of that the way most SQL based databases figure out
  which index should be used for what query, how indexes are created and
  stored. This only scratches the surface however, there's also the
  write-ahead log which tracks the changes, the nodes which actually
  store the data, concurrency, transactions (with rollback). My current
  implementation is quite basic but I hope to finish a basic version
  which at least implements the node tree successfully.

### Others

Some of the other projects that I've tackled until now are:

- The TCP protocol

- Network speed tests

- Hashing

- Cron job scheduler

[Image: Vonk Utils on GitHub]

    Current collection of utilities I have created on
    GitHub (https://github.com/thebetar/vonk-utils)

## Learning new languages

  These projects are also great gateways into learning new languages,
  especially for things such as protocols it makes more sense to write
  them in languages like C, C++ and Rust, which are languages you
  don't really touch as a Full-Stack developer (like myself). Added
  to that, since you know the concept of how the protocol works the
  logic part is mostly done for you; you just need to implement it.

  Every language has its way to solve problems, while some languages
  have similar methods to solve a problem like C# and Java, some
  languages are wildly different like C and Python. Solving problems in
  these different paradigms that languages introduce makes you look at
  problems in different ways and potentially understand why a tool you
  use does it a certain way, and if you feel like you need to understand
  it more, you can just create a basic version of it yourself.

[Image: Top programming languages on GitHub over time]

    Most used 10 programming languages on GitHub, data from
    InnovationGraph (https://innovationgraph.github.com/global-metrics/programming-languages)

## Conclusion

  As I've discussed in my previous blog posts I think these side
  projects serve an important purpose for a software engineer. They keep
  programming fun, you get to use new tools, learn new things and can do
  it at your own pace.
`,
};

export default blog;
