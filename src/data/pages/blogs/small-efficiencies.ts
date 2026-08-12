import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "3",
	numericId: 3,
	slug: "small-efficiencies",
	title: "Small efficiencies add up",
	description: "Working fast and efficient is important. Doing more in less time while impressing your colleagues is amazing. I will dive into what small and easy improvements every developer can make to work more efficiently and save time in the long run which can be spent on other things (most likely more coding!)",
	date: "2024-05-11",
	link: "https://vonkprogramming.nl/blogs/small-efficiencies",
	content: `
Being efficient is very important as a developer. There are many tools
  we love because they reduce the amount of time that we need to ship
  some software to production. Think about AI coding assistants making
  you code very mundane tasks a lot faster, or pipelines which
  transformed having to publish every time you finish a new version into
  just writing a pipeline template once and seeing the magic happen!
  While all these tools are great a lot of programmers still do not get
  the maximum value out of the possible efficiency boosts that exist.

## The heaven of efficiency

  Maybe some of you know the tools that are most famous for efficiency
  but I will describe them in this article anyway and give my opinion on
  them. The main tools which many consider to maximise effienciency
  while writing code on your own system are:

- TMUX

- NEOVIM

- I3

- fuzzyfinder

  These tools all seem scary at first but they offer a big efficiency
  boost once they are controlled. However in my personal opinion when
  starting out with finding efficiencies these are not the tools you
  should go for. This is because some of them are hard to learn and this
  makes them scary. I am an avid proponent of learning in steps and
  finding which efficiencies can be found in your current workflow or
  with small adjustments that are quick to learn. From the list above I
  think TMUX and fuzzyfinder still fall into this category since they
  can be easily used in your current environment. While Neovim and i3
  are very good to get the maximum value out of every hour spend
  programming, they do take a lot of time to configure and learn.

## Easy efficiency wins

  As described above I don't want to make this article about what is
  the best way to increase efficiency and end up changing no one's
  workflow since the step to change is too big. I am currently still in
  the process of learning neovim myself and am still using visual studio
  code as my daily driver.

  The easiest win for every developer or even every person using a
  computer is to learn the shortcuts that the programs you use often
  provide. Even if you are using something like Microsoft word. I have
  started doing this a while ago, when trying to learn all the visual
  studio code shortcuts and it has increased my productivity
  tremendously! I can now switch between tabs, open workspaces, search
  files, open projects, select everything I want and more without ever
  touching my mouse. My personal rule is to "
  try to reach a state where I do not need my mouse
  ".

  Secondly I have tried to create pipelines for my own projects. I have
  done this using the very easy to set up tool of github actions. Using
  this has two big benefits. One, every time you publish a new version
  you do not have to follow all the steps of publishing. But more
  importantly benefit two, you will get experience writing pipelines
  which can be a very valuable skill in your career.

  Thirdly do not be afraid to experiment. This might sound weird since
  in the previous text I described trying new things to be scary but
  trying scary things and deciding they are not for you is still
  valuable. A good example for me is that I have tried i3 which is a
  very bare and mimimal tiling window manager and the pure minimalism
  was not for me. I like to have some basic things like a graphical
  interface to manage my settings. But after trying it I did see the
  great value in having a tiling window manager where switching between
  windows is only a shortcut instead of cycling through all your windows
  using alt + tab. So I am now trying regolith and enjoying
  it a lot.

## AI assistant

  Using an AI assistant when writing code has become very popular in the
  last years. It can greatly reduce the time spent on writing code.
  Especially when writing more redundant code or when using a new
  programming language where the syntax is still unclear. The AI
  assistant tools takes a hint from what you are writing and generates
  what you most likely want to write which is more than often correct.
  This increases the speed of development greatly.

  However in recent years there has also been some criticism with the
  quality of code going down and when learning a new language it can
  obstruct the learning process since the AI assistant can write all the
  code just based on comments. This mostly works in popular languages
  like Javascript and Python. I think however that investing in an AI
  assistant is great value since the speed of writing code is greatly
  increased by almost 100%. This makes you able to do more work in less
  time and only for a couple of euros (or dollars) per month. The time
  saved to the cost of the tool greatly favours paying for the tool.

## Efficiency mindset

  The mindset I have for efficiency is that I am willing to take some
  time to improve my efficiency if in the long run it will save me time.
  This is a fine balance between a tool taking a lot of hours to learn
  but not saving a lot of time and learning a shortcut taking up no time
  at all but having massive efficiency gains. This is also why I have up
  till now not taken the leap to start with neovim since the time spent
  on learning the tool and actually becoming more efficienct with it is
  in my perspective very big compared to when the efficiencies will pay
  off. Even though visual studio code loves to consume all the memory my
  laptop has and more.

  The constant mindset of improving as can also be read in my other blog
  posts is something very central to my developer journey, I try to
  always find new ways but in a way that I can stick to them.

## Some of my favourite shortcuts

  As described before I love shortcuts. They make my
  workflow a lot more efficient. Some of my favourite shortcuts for
  visual studio code are the following

- ctrl + p to open a file

- ctrl + r to open a project

- ctrl + n to open a new tab

- F2 rename symbol

- ctrl + p  to open a file

- ctrl + $(number) switch to workspace

- alt + $(number) switch to file in workspace

Many more can be found here

- Linux: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf

- Windows: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf

- MacOS: https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
`,
};

export default blog;
