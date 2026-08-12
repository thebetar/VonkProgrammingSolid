import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "36",
	numericId: 36,
	slug: "password-policy",
	title: "What is a good password? 🔒",
	description: "Passwords are the key to your online identity and data. In this blog, I will explain what makes a good password, why using just one password is risky, and how a password manager can help you stay secure in an increasingly dangerous online world.",
	date: "2026-05-21",
	link: "https://vonkprogramming.nl/blogs/password-policy",
	content: `
[Image: Secure]

Passwords are essential to securing your important data. It is
important that you and only you can access your bank details, get into
your government account, or are able to send messages to friends on
WhatsApp, Facebook, or Instagram. However, a lot of people are
vulnerable to getting their password hacked!

If you want to hack a person, a little research can often make it
quite easy. Find out their birthday, addresses where they lived, and
perhaps what their dog's name is. While this information sounds
quite personal, if you analyze someone's online social media
account, this information is often quite easy to find. With this
information, you can then try a combination of what you found, and for
many people, that is their password for many things.

## What is a good password?

Good passwords should be random and long. The most basic way of
getting access to someone else's account is using a combination of
information as mentioned before, or brute forcing the account by
attempting every possible combination. If your password is random and
long, this will take forever and make it basically infeasible to hack
your account. If your password is long enough, it might even take
years or decades.

A long random password does not mean making a long sentence out of the
aforementioned facts like the name of your child, their birth year, an
exclamation mark, your address, etc. This is still easily guessable. A
good tip is to use a password generator; if you look up "password
generator" on Google, you will find many options.

[Image: Password generator]

  Example of a password generator, made by
  Bitwarden (https://www.bitwarden.com/password-generator)

## Is one good password enough?

Even if you have created a password that fits all these criteria,
having just one password is still a risk. In my career as a web
developer, I have heard stories about older webshops that have not
been updated for 15 years that still use unsafe ways to store
passwords. If you ordered some shoes from that store 10 years ago and
forgot that you created an account, you are vulnerable. If they get
hacked, you get hacked. It is best to use many different passwords.
This is why using a password manager is a good solution. But the
classic notes app on your phone or an actual notebook is also good
enough. As long as you don't use just one password for everything.

## What is a password manager?

Personally, the only password I know and am able to reproduce is the
one for my password manager. A password manager is a simple
application that is secured using a password. See it as a notes app
locked by a password dedicated to passwords. Each note is the username
and password for that website or app. Password managers also allow you
to easily generate a random password that you can use whenever you
create a new account on a new website. This ensures that you have a
long randomized password that is different on every website. This
means that if one website gets hacked or one password gets leaked, the
damage is minimal. They might only find out about those unfashionable
shoes you bought 10 years ago (no, I don't have any personal
experience).

[Image: Password manager]

  Example of a password manager, made by
  Proton (https://proton.me/pass)

## Why is this important?

While the risk of having one password that might be easy to guess is
talked about a lot, I don't think a lot of people understand the
actual risk and the high chance of a hack actually happening. Websites
get hacked every day. Even big software firms get hacked every other
week nowadays. So it is important to secure your accounts now by
giving them all long generated passwords. Don't let them access
your bank account using Welcome123, and don't let them scam your
friends because they got into your e-mail using JohnDoe2000. This is
all bad practice and could happen to you.

## What are the next steps?

If I advise you to immediately block your whole weekend to adopt a
password manager and start changing all your passwords into randomly
generated passwords, you will most likely end up not doing it. EVEN
THOUGH THIS WOULD BE THE BEST! So what I would advise is the
following. Do set up a password manager; this is quite easy and there
are multiple good options out there,
Bitwarden (https://bitwarden.com/)
,
Lastpass (https://www.lastpass.com/)
,
Protonpass (https://proton.me/pass)
, and many more. Then after setting this up, make sure you at least
change the passwords for the following essential services so you have
your most important bases covered:

- Your email: with your e-mail bad actors can use forgot password on nearly any other service and change your password, if your e-mail gets hacked almost everything can get hacked.

- Your bank: luckily most banks have extra layers of protection but better safe than sorry. It would be horrible to wake up one day and see that all the money that you have worked so hard for is gone.

- Your government account: there are many important things that you can do and also undo in government applications, it depends of course on which country you live in but changing this is essential to prevent things like identity theft.

- Your Google Account: often people use login through Google for all kinds of services. This means that if someone gets access to your Google Account they also get access to these services. On top of this if you have an android phone it means that your Google Photos are also vulnerable and can be accessed by a potential bad actor.

- Your Icloud Account: same reason for Google Account only for Apple users

- Your social media: your social media account allows communication from a bad actor with your friends, access to your old messages and the ability to post content on your account. The biggest risk here is that your friends think they are messaging with you while actually there is someone else behind the keyboard making them vulnerable to attacks.

After changing this, give yourself a pat on the back, you are done for
now and you can continue later if you feel like it but you are now,
mostly secure.

[Image: Secure]

## Conclusion

Passwords are the key to your online identity and data. Nowadays, that
is as important as the key to your house and continues to become more
important by the week. The occurrences of hacking have gone up
significantly in the last few years, with AI making it easier and the
geopolitical situation in the world making more people motivated to
cause chaos. Please at least lock your house. It really is more
important than ever to do this minimal amount of work to secure
yourself.

I would also like to encourage everyone reading this blog who is
already secured to motivate the people around you to at least do the
minimum described in the previous paragraph. Your wife, your
girlfriend, your parents, your grandparents; they might still be
vulnerable and the statistics don't lie.
In the Netherlands alone, 1 in 7 people suffered from cybercrime (https://fondsslachtofferhulp.nl/cijfers-cybercrime-in-nederland/)
. That figure is ridiculously high; don't be one of them or allow
your loved ones to be part of them.
`,
};

export default blog;
