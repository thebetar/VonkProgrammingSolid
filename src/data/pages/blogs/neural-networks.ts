import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "23",
	numericId: 23,
	slug: "neural-networks",
	title: "Neural Networks: A Beginner’s Guide 🧠",
	description: "",
	date: "2025-02-28",
	link: "https://vonkprogramming.nl/blogs/neural-networks",
	content: `
With the rise of AI, the concept of neural networks in computer
science has grown significantly. But how do they actually work?

Well, they’re quite simple at their core. However, when you put a lot
of simple things together, they can start to seem overwhelming.

## The First Neural Network

The first neural network in IT was theorized by
Frank Rosenblatt (https://en.wikipedia.org/wiki/Frank_Rosenblatt)
. He wrote a book about the
perceptron (https://en.wikipedia.org/wiki/Perceptron)
functions which describes a simple neural network with a single layer
of neurons that could learn to recognize basic shapes. It works as
will be explain more in the next chapter by feeding in some input
values and adjusting the weights of these inputs based on the errors
it makes. In 1957, he even conducted experiments and managed to
achieve basic shape detection in images. This was done by implementing
the same kind of base logic that modern neural networks use. But with
only a few neurons and a few layers, due to the limited computational
power available at the time.

This was the big challenge back then. Immense computational power for
that time period was required to train such a model. But look at where
we are today processors have evolved from a few transistors to
billions of them (https://en.wikipedia.org/wiki/Blackwell_(microarchitecture))
. A budget phone today has more computational power than the computers
that sent people to the moon.

## How Does a Neural Network Work?

As mentioned before, a neural network is fundamentally simple. It
takes in input values performs some multiplication on these input
values and gets an output value. For example let’s say we want to
differentiate between a dog and a cat. The input features in this case
could be observable characteristics like the number of legs, size, and
weight.

The neural network receives a lot of data about what is has to predict
or classify; in this instance it is trained with many examples of cats
and dogs, each described by their features (e.g., 4 legs, 5kg, 45cm
long). Initially, the network assigns random values to the weights,
which describe how strong these features are taken into account for
the output of the neural network. At first, the predictions will be
wrong, but the network learns by adjusting these weights based on its
errors and using some loss function to calculate a value to add or
subtract from the weights.

This process continues across all training examples until the network
starts to recognize patterns. Some features, like the number of legs,
may turn out to be less useful (since both cats and dogs have four),
while others, like the weight-to-size ratio, could be more important.
The network automatically assigns more importance to relevant
features.

Finally the network will output a value lets say in our example a
value between 0 and 1 where 0 is a cat and 1 is a dog. The network
will output a value based on the weights it has learned during
training. This output value is the most important for calculating the
adjustment value of the weights by the loss function. This is done by
comparing the output value of the model to the expected value for
instance when you give data about a dog and the model predicts it is a
cat, you can adjust the weights that next time it gets similar
features it will predict it is a dog.

This is a simplified explanation, but it illustrates the core concept.
There’s a lot more math behind how the network updates its weights
this process is called backpropagation. If you’re interested in the
details, search for
"backpropagation" (https://en.wikipedia.org/wiki/Backpropagation)
to learn more.

## AI Terms

Now that we’ve covered the basics, let’s go over some key terms used
in neural networks:

- Input: Input layer: This is the first layer of the network, where raw data is fed into the model. In our example, this includes the characteristics of an animal. In image classification, each pixel could be an input feature.

- Input feature: A piece of information used to make predictions or classifications.

- Training data: data that is used to define what features mean what class

- Test data: data to verify that the model makes accurate predictions after training, this is a separate dataset to prevent the model becoming to specialised on the training data

- Hidden: Hidden layer: This is the intermediate layer where input values undergo transformations. The network applies mathematical operations to extract patterns and insights from the raw data.

- Weights: The values used to multiply input features, determining their importance. Weights are adjusted during training to improve accuracy.

- Output: Output layer: This is the final layer that produces the network’s prediction or classification. Based on the transformed data from the hidden layers, it delivers the final result.

- Activation function: A function applied to outputs to help shape predictions, such as scaling values between 0 and 1.

- Class: Which value is the final output and what does it mean, in the example given the classes would be cat and dog

- Loss function: A function that calculates the difference between the predicted output and the actual output. This difference is used to adjust the weights.

[Image: Simple Neural Network]

## What Can Be Done?

After reading this blog, you hopefully have a better understanding of
neural networks and how they classify data. Even if you’re not a
programmer, you might now feel more comfortable discussing the basics
with others who work with AI.

For those who do want to experiment, Python is a great starting point.
With libraries like TensorFlow or PyTorch, you can build simple models
and train them on datasets from platforms like Kaggle. Many
beginner-friendly tutorials are available to guide you through the
process step by step.

Whether you just want to understand neural networks better or start
experimenting with code, this knowledge gives you a solid foundation
to explore further.

## Conclusion

I hope this blog has made neural networks easier to understand and has
sparked your interest in training one yourself. This technology is set
to revolutionize industries in the coming years, and understanding the
fundamentals will help you grasp what is and isn’t possible. Now go
out there and impress people with your new techy vocabulary!
`,
};

export default blog;
