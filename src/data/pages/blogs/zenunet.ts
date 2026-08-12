import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "24",
	numericId: 24,
	slug: "zenunet",
	title: "ZenuNet: An easy way to create your own neural network",
	description: "",
	date: "2025-04-18",
	link: "https://vonkprogramming.nl/blogs/zenunet",
	content: `
AI and neural networks are everywhere, but actually creating one
  yourself is still out of reach for most people. It usually means you
  need to know how to code or use expensive tools. I wanted to change
  that.

  ZenuwNet is a web app that lets you build and train your own neural
  network model without any programming skills.

Check it out here (https://zenunet.nl)

## Building Neural Networks Without Code: Meet ZenuwNet

  AI and neural networks are everywhere, but actually creating one
  yourself is still out of reach for most people. It usually means you
  need to know how to code or use expensive tools. I wanted to change
  that.

  ZenuwNet is a web app that lets you build and train your own neural
  network model without any programming skills.

## Creating your first model

  In my previous blog post, I explained how neural networks work and
  which concepts are important to understand them. I’ve implemented all
  those ideas into this app. Creating your own neural network is pretty
  simple. Just follow these steps:

- Select one of the example datasets

- Create a model based on this dataset

- Start training the model using the right training settings

- That’s it, you’ve got a trained model

## Data model

  Inside ZenuwNet there are two main things to keep in mind: Datasets
  and Models.

## Datasets

  Datasets represent the training data. You can start by choosing one of
  the example datasets. Once you get the hang of it, you can even add
  your own.

A dataset has:

- Input features: these are the values that describe each row of data. For example, in the simple cat vs dog dataset, the features are weight and size of each animal

- Output classes: these are the categories each row belongs to. For the same dataset, it’s either “cat” or “dog”

- Total rows: the number of entries your dataset contains. In the cat vs dog example, it’s the number of animals that were measured and labeled

## Models

  Models are the actual neural networks. You create a model based on a
  dataset. The input and output neurons are automatically set based on
  the dataset, but you can customize a few other things:

- Number of hidden layers: how many layers the data passes through before a decision is made. For most problems, one hidden layer is enough

- Neurons per layer: how many neurons each layer has. A good rule of thumb is to have at least as many neurons as input features

- Activation function: this decides how the neuron values are scaled. It plays an important role in keeping the model stable during training

  While training, the model also logs extra data like loss after each
  training iteration, accuracy, and a confusion matrix. You can view all
  of this on the analyse page to see how the training progressed.

## Future plans

  Right now, the app only supports basic neural networks that use linear
  transformations. Here's what I want to add next:

- More advanced model progression so you can build more complex networks as you learn

- Support for different layer types like convolution, dropout, and maybe even recurrent layers

- Sharing of datasets to the community

- Functionality to export trained models to real code, like: PyTorch

- TensorFlow

- A standalone Python script you can run or build on top of

Check it out here (https://zenunet.nl)
`,
};

export default blog;
