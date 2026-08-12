import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "33",
	numericId: 33,
	slug: "european-cloud-challenges",
	title: "The challenges of European Cloud ☁️",
	description: "Recently, there has been a lot of discussion about the risks of European governments hosting their digital infrastructure on American cloud providers. While I agree with the security concerns, I believe many people overlook the challenges this transition will bring. In this blog post, I explore what makes providers like AWS, Azure, and Google Cloud special, the downsides of relying on them, and the difficulties in creating a European alternative.",
	date: "2026-01-31",
	link: "https://vonkprogramming.nl/blogs/european-cloud-challenges",
	content: `
Recently, I have seen a lot of LinkedIn posts and
coverage (https://nos.nl/artikel/2599837-nederlandse-cloud-binnen-handbereik-tweede-kamer-wil-haast-maken)
within the news about the risks of European governments hosting their
digital infrastructure on American cloud providers. As someone with a
decent understanding of the detail of cloud hosting and experience
with both American providers like
AWS (https://aws.amazon.com/) and
Azure (https://azure.microsoft.com/) and European
providers like Hetzner (https://www.hetzner.com/) and
Strato (https://strato.com/), it is very interesting to
read. I agree with the security risks stated in these articles. With
the world becoming more turbulent, it is good to have critical
infrastructure like governmental digital services within the EU.
However, I find that many people fail to see the actual challenge that
this transition will bring.

[Image: Dutch NOS article about European Cloud]

Dutch NOS article about European Cloud

  (translation: Dutch cloud 'within reach', House of Representatives
  wants to move quickly)

## What makes the "Big Three" special?

The reason many organisations choose AWS, Azure, or Google Cloud is
because they provide unique services that are simply not available yet
with European cloud providers.

AWS changed the industry by making it much easier to set up your
digital infrastructure. In the past, many providers required you to
fill out a form and wait for someone to manually approve and set up
your server. AWS allowed you to start immediately with just a few
clicks.

They stayed ahead by adding features like auto-scaling. This allows
you to set rules that automatically add more compute power when your
traffic increases and remove it when the rush is over. For a webshop
during a successful Christmas campaign, this prevents your website
from becoming sluggish. Instead of paying all year for all this power
that you rarely use, you only pay for the extra capacity when you
actually need it.

Another advantage is CloudFront, which works by caching your data in
locations all over the world. If your main server is in Frankfurt and
a customer in Australia wants to see your website, the request usually
has to travel across the world and back, which can take over 500ms.
CloudFront keeps a copy of your site in Australia so the user gets a
response in less than 50ms. This might not sound like much, but having
to wait half a second every time you click something gets annoying
fast.

Between automated tools for security and "managed" services
that handle traffic automatically, these providers remove a lot of
manual labor. While you still need experts to oversee everything,
these tools mean you need fewer people to keep a complex system
running. More importantly, the responsibility for keeping these
systems working stays with the provider rather than your own company.
This allows you to focus much more on developing your actual product
instead of worrying about every technical detail of your
infrastructure. For a European company, switching to a local provider
often means hiring more developers to build and manage these
underlying systems manually. This often increases costs beyond what it
would cost to use AWS and adds extra responsibilities that reduce the
amount of focus you can have on your own product.

[Image: The big three cloud providers]

The big three cloud providers: AWS, Azure, and Google Cloud

## The downside of the American giants

AWS, Azure, and Google Cloud all offer very appealing deals to get
started. They provide free credits and discounts that make the initial
costs almost zero. This allows a small company with just two or three
developers to have a complex infrastructure without needing an expert
who knows how to manually build a load balancer or manage low-level
network security. The developers still need to understand these
concepts in a broad sense, but they only need to know how to configure
the provider's tools and write code in their own framework.

However, as the company grows, these costs often rise quickly until
the cloud bill takes up a large chunk of the revenue. It is often only
at this stage that a company realizes the time it would have taken to
set up a simpler, self-managed infrastructure would have been worth
it. By the time this realization hits, it is often too late because
you are already caught in what is called vendor lock. Because European
alternatives often do not offer the same specific services, leaving
their system requires you to rewrite large parts of your software. It
becomes a choice between staying with a very expensive provider or
spending months of developer time just to move away.

Aside from the technical lock-in, there are significant privacy
concerns. Over the past decades, the American government has
introduced several laws that give them broad access to data held by US
companies. The CLOUD Act of 2018, for example, allows US law
enforcement to ask for data from US-based providers even if that data
is stored on servers in Europe. Additionally, Section 702 of the FISA
(Foreign Intelligence Surveillance Act) allows intelligence agencies
to monitor non-US persons outside the US for national security reasons
without a warrant.

Many organisations try to lower this risk by using the European data
centers provided by these American giants. While this is a safer way
to keep data physically within the EU, it does not actually take the
risk away. Because these servers are still managed and controlled by
the same American parent company, they are still subject to US laws.
While the US is a trusted partner, the possibility of a foreign
government having access to critical European infrastructure is a real
concern for many governments.

## The European alternative

While European alternatives offer many of the services that their US
competitors do, the transition is rarely simple. Companies like the
French Scaleway have made significant progress in this area. They
offer a range of modern tools, including serverless functions and
managed load balancers, which make it much easier for small teams to
set up complex infrastructure without managing the underlying hardware
themselves. Other providers like OVHcloud also offer managed
Kubernetes and database services that help bridge the gap.

A major benefit of these providers is that they offer high levels of
privacy and data protection. Because they are based in Europe, they
are bound by European law, which means the risk of another state
accessing your data is much lower. This makes them a safe and
compliant choice for anyone worried about foreign surveillance. These
companies also tend to be more personal. It is generally much easier
to get in touch with a real person and get help when you run into
issues, whereas with the giant American providers, you often feel like
just another number in a massive system.

For those looking for a different approach, other large alternatives
like Hetzner provide hosting at a much lower price but require you to
develop many of your own solutions. This costs extra time and gives
you more responsibility, though it does give you full control. The
financial argument for these providers is very strong. If you compare
the price of hosting a small virtual server, the American giants can
be nearly ten times more expensive for the same performance. If you
want to see the numbers, this
benchmark video (https://www.youtube.com/watch?v=Ps3AI1kTIR4)
shows how large the gap is.

However, even with these strong benefits, migrating into these
services is still hard. You are often already locked into the
ecosystem of the big three, and it is difficult to get out. Because
the US giants have such a head start, their tools are often more
integrated with each other, making the European versions feel less
"complete" in comparison. This friction is a major reason
why many companies stick with American providers despite the higher
costs and privacy concerns.

To find European alternatives you can also visit
European Alternatives (https://european-alternatives.eu/)

[Image: European cloud providers]

European cloud providers

## Challenges of creating a European alternative

This raises the question: why are there multiple large cloud providers
in the United States but no equivalent in Europe? Are Americans just
more inventive? I would argue the major difference is mostly in
segmentation. While the European Union makes European countries more
united, it is not at the same level as the United States. I have
experienced this myself when moving to Poland and living there for a
large part of the year over the last 2 years. There are big
differences in language, culture, rules and regulations.

While my home country of the Netherlands has a high proficiency in
English, there are many countries in Europe where even young people do
not speak English fluently. This makes doing business together much
more difficult than in a place with a single shared language.

It is also less appealing to invest in startups in different EU
country for several reasons. Communication with the company you have
invested in is often more difficult, and there are deep cultural
differences in how business is conducted. Furthermore, an investor
must contend with the rules and regulations of the startup's
country, which are often unfamiliar. Privacy rules are a good example
of the difference in rules and regulations. In Germany, these rules
are much stricter and more decentralized than in a country like
Cyprus. You have to read into the local context of every country to
understand the situation for a startup you want to invest in.

Beyond rules, there are cultural differences in how people buy
technical products. We see this in the hosting market where companies
like Hostinger from Lithuania or Scaleway from France have a modern
and sleek product. In contrast, the German company Hetzner has a more
old-school technical product. This appeals to the German market
because they often focus more on technical specifications and
reliability than on how the interface looks. These different mindsets
mean that a product that works in one country might not resonate in
another.

These differences make it very difficult to scale. In the US, scaling
from a state level to a national level is easier because the language
and laws stay the nearly same. In Europe, businesses scale country by
country. This is a slow process, and it often results in companies
only scaling to countries that have strong cultural similarities, such
as the Netherlands and Belgium. Because of this, many businesses
struggle to grow beyond a handful of countries and find it nearly
impossible to cover the whole of Europe. This often results in smaller
countries being skipped because the extra work required is not worth
the smaller amount of extra revenue. While this depends on the
specific market, in hosting, cultural nuances are perhaps less
important than in other sectors, the general rule remains. This is why
European companies often stay as regional leaders instead of growing
to the size of the American providers.

## Conclusion

There is a clear need to migrate essential government services into a
European cloud, and luckily this challenge is getting more attention
lately. This shift is driven both by governments pushing for
sovereignty and by businesses building alternatives to the dominant US
providers. While there is no easy path forward, the combined efforts
of these groups show that the transition is possible and will likely
lead to new, exciting products.

I truly hope that European governments will work together more closely
on this issue to create a new, high-quality solution together. Instead
of every country creating its own system separately, which would mean
doing the same work 27 times with varying success, we should combine
our strengths. If we learn from each other during these migrations, we
can build a world-class alternative together that fits our needs
perfectly and proves what we are capable of when we stand united.
`,
};

export default blog;
