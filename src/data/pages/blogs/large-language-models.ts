import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "18",
	numericId: 18,
	slug: "large-language-models",
	title: "The magic of Large Language Models 🪄",
	description: "Large Language Models have taken the world by storm, but how do they actually work? In this blog post I will talk about the magic behind Large Language Models.",
	date: "2024-11-12",
	link: "https://vonkprogramming.nl/blogs/large-language-models",
	content: `
Large language models, it is a very hot term right now. Since the
release of ChatGPT the whole world has become enchanted by this
technology, but how does it actually work? In this blog post I will
try to explain how large language models work in a way that’s
understandable for both technical and non-technical readers.

## How It Works

To explain how a large language model works I will first very
basically break down which steps are important to discuss and then go
into each one in the following paragraphs. The steps that are
important for a model are:

- Training: The model is fed with a huge amount of text, where it learns patterns in words and relationships between concepts. For example, it learns how an apple seed grows into a tree that eventually produces more apples. By recognizing these patterns, the model can identify useful information later when it encounters similar content.

- Receiving input: The model takes in text from a user and converts it into a form that it can match with its training data.

- Responding to input: The model generates a response based on the user's input.

## Training

A large language model needs to be trained on a huge amount of data to
be able to answer a wide range of questions. We want it to handle not
just questions about cars but also about animals, fruits, cities, and
more.

This requires a lot of diverse data, gathered from all kinds of
sources, which is then split into smaller parts called tokens. A token
might be a sentence like "Dogs are mammals," taken from a
larger text about animals. These tokens are then converted into
numerical values, because computers process numbers much more
efficiently than text. These values are called vectors, which
represent points in a multi-dimensional space. This sounds more
complicated than it is, you can think about it as a row in an excel
sheet where each column is a number in the vector and each row is a
separate vector. A vector is just a combination of multiple numbers.

## Encoding

When we give input to a language model, like “Explain how an apple
grows on a tree,” it’s in human readable text. But computers are
better with numbers, so encoding converts this input into numerical
data that the model can process efficiently.

## Pattern matching

Once the input is converted to vectors (combinations of numbers), the
model looks for patterns in these vectors to understand the context of
the question. For example, it identifies the relationship between
"apple," "grows," and "tree." Then,
based on similar patterns it has seen before, the model matches the
question with relevant content from its training. If the model was
trained on a book about growing fruits, it can pull knowledge from
that to respond to the user.

## Decoding

The model’s response is initially generated as numerical data, which
is better for computational purposes. But humans aren't great at
reading long strings of numbers, so decoding converts this output back
into readable text.

## Conclusion

This is a simplified look at how a large language model works, but it
covers the basics. This incredible technology has transformed our
world, giving everyone access to a personal assistant that knows a lot
about all kinds of topics! While it’s not perfect, it’s excellent for
simple tasks or for sharing information it’s been trained on.
`,
};

export default blog;
