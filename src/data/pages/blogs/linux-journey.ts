import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "25",
	numericId: 25,
	slug: "linux-journey",
	title: "My operating system journey: From Windows to Linux 🐧",
	description: "In this blog post, I will share my journey of switching from Windows to Linux, the challenges I faced, and the benefits I have experienced since making the switch.",
	date: "2025-06-06",
	link: "https://vonkprogramming.nl/blogs/linux-journey",
	content: `
I've used many different operating systems over the years. In the
good old days, I started with the beloved
Windows XP (https://en.wikipedia.org/wiki/Windows_XP)
. Windows XP was known for its stability and was ahead of its time in
user-friendliness and features; there was truly no competitor. In
those days, operating systems like
Linux (https://en.wikipedia.org/wiki/Linux)
were primarily used by diehard programmers who preferred a simple
interface over a more verbose experience. Things have changed,
however.

## Current state of operating systems

As Windows has progressed from Windows XP to
Vista (https://en.wikipedia.org/wiki/Windows_Vista)
, to
Windows 7 (https://en.wikipedia.org/wiki/Windows_7)
, to
Windows 10 (https://en.wikipedia.org/wiki/Windows_10)
, and now finally
Windows 11 (https://en.wikipedia.org/wiki/Windows_11)
, other operating systems have also made significant improvements. The
user interface of the desktop environment
Gnome (https://www.gnome.org/)
, which determines the interface you actually see on the, shas become
very user friendly.I would even like to argue that it can be used by
everyone nowadays, regardless of their technical savviness. Aside from
this,
MacOS (https://en.wikipedia.org/wiki/MacOS)
has also evolved into an amazing operating system, even bridging the
performance gap between MacBooks and other devices by introducing the
M1 processors.

[Image: Wondows-11-Start.jpg|700]

Figure 1: Windows 11 desktop environment

## My journey

I've stuck with Windows for a long time, even throughout getting
my bachelor's degree. While I did briefly experiment with
Linux Mint (https://linuxmint.com/)
in 2018, the real shift began when I received my first work laptop
from my employer, Quintor. It came with
Ubuntu (https://ubuntu.com/)
(Linux) by default! I decided to do some experiment with it and what I
found is that the developer experience on Ubuntu is a lot better.
Linux offers a lot more freedom in how you want to configure your
environment. If you want to use Ubuntu but dont like how Gnome looks
you can install a completely new desktop environment. Although I think
gnome would fit most people's idea of what a desktop environment
should provide. In the image below an example of how Ubuntu with Gnome
looks like.

[Image: Ubuntu_25.04_Plucky_Puffin_Desktop_English.png|700]

Figure 2: Ubuntu desktop environment

## Diving deeper into Linux

After discovering my love for Ubuntu, I grew curious about other
operating systems. So, the summer after my initial experience with
Ubuntu, I set up a dual boot. This prompts you to choose an operating
system when starting your laptop and allowed me to choose between
Debian and Ubuntu.

Debian (https://www.debian.org/)
is the underlying distribution that Ubuntu is built upon, which is why
Ubuntu is referred to as a Debian-based distribution. This means that
the original, open-source code of Debian was copied and then expanded
upon to create Ubuntu. Beyond Debian, there are also distributions
based on
Arch (https://archlinux.org/)
,
Fedora (https://www.fedoraproject.org/)
, and
Red Hat (https://www.redhat.com/en)
. In this diverse landscape, Debian is known for its stability and
reliability, while Arch, for example, is known for its rapid
development cycle and superior performance. Personally, I wanted a
dependable distribution but wanted to explore one level deeper.

When I switched to Debian, I also decided to experiment with a
different desktop environment, aiming to fully commit to being
productive. After some time with the
I3 window manager (https://i3wm.org/)
, I settled on
Regolith Desktop (https://regolith-desktop.com/). Regolith
is a window manager that can be installed on either Ubuntu or Debian.
It facilitates efficient window management primarily through keyboard
shortcuts, minimizing the need for a mouse. What makes Regolith
particularly appealing is that while it utilizes I3 under the hood, it
comes with a wealth of pre-configured settings. This is a significant
advantage, as configuring I3 from scratch can often be a
time-consuming process. Below is an image what Regolith looks like

[Image: regolith-empty.png|700]

Figure 3: Regolith desktop environment

## Trying MacOS

During my experimentation I got an assignment to work at ING bank,
where I got the choice: use a Windows laptop or try out a MacBook.
Since MacOS is also part of the unix family, just like Linux, I
decided to try it out. Since my experience with using Linux had been
so amazing. I really liked the experience, it gave both the benefits
of having good support like Windows, but also being able to use the
terminal how I wanted to. The new M1 processor that was in my Macbook
was also super fast! I did have to get used to the user experience and
I found that Gnome was actually easier to get into than MacOS, but
after a while I started to understand it and productivity started to
pick up. While I did like my experience with MacOS and I do prefer it
over windows I am still more a fan of Linux purely because it offers
higher customisability and I am not locked into buying everything from
Apple. Below is an image of what MacOS looks like

[Image: Big-Sur-About-This-Mac-scaled-1.jpg|700]

Figure 4: MacOS desktop environment

## Problems with Linux

I used this setup for about 1 to 2 years before getting a new laptop,
which unfortunately started to run into issues with this setup. Some
hardware in my new laptop did not have the proper drivers yet or
existing drivers were not working properly. I tried reinstalling about
3 times and still the same issues kept occurring. The issue I ran into
specifically was that my Wi-Fi was in random moments not turning on,
sometimes it was when starting my laptop, other times once my laptop
went into stand-by for even 1 second the Wi-Fi would just disappear
and it would not be able to detect anything anymore. But Ubuntu and
Debian keep getting updated so I thought this might be a temporary
issue and decided to switch back to Windows until it would work, and
it did! After about 5 to 6 months I installed Ubuntu again because I
missed the experience and all the problems were gone.

## My current setup

Since I have run into these issues I have decided to use the most
widely supported and used version of Linux which is Ubuntu. I am still
hesistant to try and install another desktop environment like
regolith, but I probably will try it again soon, luckily it should
work even better when installed on top of ubuntu! But it will take
some time to tweak everything and get up and running in a way that
will actually improve my productivity. The important thing to
acknowledge with using Linux, especially if you do decide to start
tweaking your system is that, linux is free if you do not value your
own time.

## Conclusion

While I do not necessarily say everyone should try to install Debian
and play around with different desktop environments I do encourage
everyone to at least try base Ubuntu. It is very user friendly and
with all the problems and bugs that windows 11 has been running into
lately I would like to argue that it is even more stable than Windows
at this point. The only problem might be that some software is not as
easy to install, but often the app store installed on ubuntu can be
used to find an open-source replacement for it. So don't be shy
and try it out!
`,
};

export default blog;
