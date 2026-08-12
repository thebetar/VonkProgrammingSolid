import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "29",
	numericId: 29,
	slug: "ai-thoughts",
	title: "My views on AI and the future 🤖",
	description: "Artificial Intelligence, you've probably heard this term over a thousand times already. But what is the current state of the technology? Where is it going? What are the good and the bad things about it? In my latest blog I talk about my views on this topic and dive into what I think the technology can do now, and what it will be able to do in the near future.",
	date: "2025-10-18",
	link: "https://vonkprogramming.nl/blogs/ai-thoughts",
	content: `
I think at this point we are all familiar with tools like
Chatgpt (https://chat.openai.com/)
. I would like to say that probably most people who read this blog are
daily users of Chatgpt or tools similar to it like
Gemini (https://gemini.google.com/app)
,
Claude (https://claude.ai/)
or others.

These tools have changed the way people work over the last couple of
years. All of this while adoption of these tools is still growing
rapidly. More use cases are being found every day, while the
technology itself is also improving.

With this improvement there has been a lot of talk about artificial
general intelligence or artificial super intelligence which will not
only improve efficiency but actually replace jobs. Artificial general
intelligence describes a state of AI where it will be able to perform
at the same level as a human expert, while artificial super
intelligence describes AI that has surpassed human experts in their
fields. When or if these moments will be reached in the coming years
or even ever is still up for debate. One thing has to be taken into
account however is that the people saying super AI will arrive
tomorrow often have a direct benefit in the enthousiasm it creates
around these tools.

[Image: AI growth]

## The pros

Large language models are amazing at ingesting a large amount of
information and providing knowledge about this in a well structured
way. It can provide the exact information you need at the exact level
you understand it at. This is another step up from the internet which
already changed the way information is found and ingested. The
internet changed the world from a world where the challenge was
finding the correct information by going to a library or asking around
within your network to now filtering information from the thousands of
articles you can find about nearly every topic. This is a big shift
from finding information to filtering information. This filtering can
be quite a challenge since finding the article that talks about what
you want to know, at the level of knowledge that you have about the
topic can be tricky. Especially if you factor in that some articles
can also contain faulty information. Large language models completely
change this. While faulty information is still a big issue because
ensuring that all the data used during training is correct is a near
impossible task, and who decides what is the correct and what
isn't. But what is sure is that large language models are amazing
at finding the right topic you are looking for and format in a way
that represents your level of understanding.

Another great use case is rewriting text. Since large language models
have analysed a lot of scientific and literary texts it can generate
responses that are well structured and grammatically correct. This is
perfect for converting raw notes and scribbles that were written down
during a brainstorm session into a well structured text. I use this
technique for writing my blogs, improve e-mails and create
documentation. It allows you to write down your thoughts directly
without worrying about if the sentences flow nicely together or if
your grammar is completely correct. It makes it a lot more enjoyable
to write notes or blogs or other documents.

Finally large language models are also great at translating text.
Since it does not only know the vocabulary translation of a word but
understands the actual meaning of a text. It can accurately translate
into a large number of languages making it better at this task than
other tools like Google Translate. This is especially useful in
languages that are structured quite differently to other languages. In
my current pursue of learning Polish I have noticed this many times
already that the translation that tools like google translate provide
can be quite off. Especially if they don't provide a direct
translation but first translate the language internally to English and
then from English to Polish (which Google Translate is known to do for
Polish).

[Image: AI translation]

## The cons

Large language models are AI models in the end and while they achieve
high accuracy it is not 100% accuracy. This means that you cannot rely
fully on the responses that a large language model provides, it is
wrong sometimes. Add to this that large language models tend to have a
confirmation bias stemming from how they were made. This can make it
challenging to find the correct way to phrase your questions, leaving
out all the presumptions.

Secondly, large language models seem to be very smart because they
emulate what textual response your question should have based on text
that it was trained on. This can make it seem intelligent but in the
end it is just a prediction of what word is next in the sentence. The
question is if this is real intelligence or is it just mimicing having
it's own thoughts by combining previous texts into a response that
the user finds acceptable.

## The future

While I do think the idea that the future where AI will surpass human
intelligence is far away, I do think that there are many use cases
where it could still be adopted and add massive value.

Recently the advancements in robotics using the same compute power
that has been fueled by the AI boom have gotten quite impressive.
Companies like Unitree have completely functional humanoid robots that
cost less than 20.000 euros. While this might sound like a lot of
money, if this technology progresses to a completely functional robot
that could clean your house, get your groceries, cook your food, this
seems like a bargain. Another adoption of this technology could be
manual labor. Since these robots are in the shape of a human they can
use tools that were designed for humans, even tools that were designed
thousands of years ago like a shovel.

[Image: Unitree robot]

With tools like the
Model Context Protocol (https://modelcontextprotocol.io/)
current large language models can get access to external tools
providing answers based on your own data allowing it to answer
questions about your own business for instance improving things like
Wiki's. It can access an excel sheet hosting within
google sheets (https://docs.google.com/spreadsheets)
reading the data and even writing to it. These tools already exist of
course but the ways to use it are increasing all the time. There might
be a future where you don't have to use input devices like a mouse
or keyboard anymore and you are only the manager of your own personal
AI that will complete your tasks based on your instructions. Do not
worry creativity is still something that is hard to solve for large
language models so they will need you to guide them for the
foreseeable future.

[Image: Gemini Google Sheets]

## Conclusion

While I do think there are a lot of claims made about AI that are
still far into the future it doesn't take away from the amazing
usefullness of this tool now. I see many comparissons to when the
internet first got adopted. This adoption is going a lot faster
however because the internet is already in place providing fast and
easy access to everyone with an active connection. But many sectors
will be defined by who can adopt the technology the best, find the
best use cases and make their service more feature rich and cheaper
due to higher work efficiency. Not using the technology or finding out
what new ways there are outside of the way you are currently using the
technology can leave you less productive than other people who do use
the technology to it's maximum usefulness, so go out and try some
new stuff, I promise it will be a fun journey.

To end off on a positive note, I think this technology is making it
easier to create new things in your own image. It is giving power to
the user to do more work, learn new skills and create new products.
`,
};

export default blog;
