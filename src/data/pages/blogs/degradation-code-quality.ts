import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "12",
	numericId: 12,
	slug: "degradation-code-quality",
	title: "The degradation of code quality 📉",
	description: "Have you also noticed that software seems to have more and more bugs and big crashes seem to occur more often? In this blog post I will talk about the challenges that come with guaranteeing high code quality.",
	date: "2024-07-27",
	link: "https://vonkprogramming.nl/blogs/degradation-code-quality",
	content: `
Recently there was a big outage with the whole crowdstrike drama, but
I think this was not one incident. I have noticed that over the years
the quality of software has gone down a lot and I think there are some
key mistakes that lead to these kind of problems. I think companies
want to deliver features to fast and this has created an expectation
from users to get this. This speed of development however has come at
a cost, we have gone from quality of quantity to quantity over
quality.

I think the following four reason are the causes of the degradation of
software

- Agile working

- Competition

- Quality assurance

- Developer self confidence

## Agile working

I think Agile working has a part to play in these problems because it
creates a system where features are prioritised. The idea is to break
up a project into small separate tasks which on their own provide
delivarables. This causes two problems however.

Firstly, getting stuck in an endless cycle of new requirements and
user stories which cause the end product to never finish on time (or
not at all). Secondly, the focus is on amount of story points burnt
and features delivered. This causes a team to be seen as not
performing well if they don't burn a lot of story points. This
creates the insentive to rush things and not check the quality too
much. This goes well most of the time since there are still checks and
balances but the error rate does go up, even a decrease from 99%
working code to 96% is already a 4 times increase in errors.

I think Agile in it's base is not the issue here however, I think
the meassuring of performance from a team in story points burnt is.
The quality should always be checked and on release the development
team has to be sure that nothing will break.

## Competition

The world is becoming more and more digitalised and every online
product now has multiple options to choose from. This creates
competition that might not have been there before.

When the competition is pumping out features at a high speed it is a
very logical thought that your product also should start doing
this,since otherwise you will fall behind. But in my opinion there is
no way to lose users faster than have a service that is not working.
This should always be kept in mind.

## Quality assurance

Quality assurance experts are becoming more and more important
nowadays, companies are starting to take notice of the problem.
However in a lot of companies there is no one dedicated to this single
task. I think having a good quality assurance expert who is only
focussed on checking code from development teams is a must in todays
world of development. A very important note to make of this comment is
that the quality assurance expert should not write it's own
features since reviewing your own code always happens less thoroughly.

## Developer self confidence

It is only logical that the business wants more and more features, it
wants to beat the competition of course, as mentioned before. Their
role is to push the development teams to try and create these many
features. Developers saldy have a tendency to break under this
pressure that the business puts on them and makes promises and
timelines that are unachievable. This can be avoided by a simple no.
This simple no is hard to say however because it has to be
conclusively said by the whole team. Getting your team to unite and
have a strong sense of self confidence to say no whenever the business
asks for too much is vital. Otherwise the time per feature goes down
which hurts the quality.

## Conclusion

I am afraid that this trend will continue into the future, luckily
however some companies are switching to put more emphasis on having a
culture where quality is put over quantity again. Where the reliablity
and availability of the service is the key selling point and where
they have the right people in place to guarantee that features that
are published are of high quality and will not cause problems.
`,
};

export default blog;
