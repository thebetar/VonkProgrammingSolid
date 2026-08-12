import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "27",
	numericId: 27,
	slug: "matrices",
	title: "How matrices took over the world 🌍",
	description: "Matrices are often considered as a pain during your studies, but they are actually used everywhere! 3D rendering, neural networks and simulations all use matrices to perform their calculations. In this blog I will explain how they work and where they are used.",
	date: "2025-07-11",
	link: "https://vonkprogramming.nl/blogs/matrices",
	content: `
If you've studied computer science, math or any studies which has
advanced math you have heard of them and probably have nightmares
about doing manual calculations with them, MATRICES. During my studies
I certainly experienced the same. I was always wondering why this
mathematical concept was focussed on so much, but once the lessons
about neural networks and computer graphics started it clicked!
Matrices are used for so many things within computer science without
most people realising it! All neural networks that you see from a
simple model that can see if a picture is of a dog or a cat to the
advanced models like ChatGPT; they all use matrix operations. Even the
screen that you are currently reading this on has used matrix
operations to display this information to you.

## Basics of matrix multiplication

For those who don't know it yet, or where it's been years ago
that they last touched a matrix a brief explanation.

Matrix multiplication works by multiplying every cell in a row of one
matrix to every cell in a column of another matrix and then taking the
sum of these values to create a new value which will be placed in the
resulting matrix. This continues by taking the same row and the next
column till the end of the second matrix is reached after which you
should continue to the next row and start over. Once you reach the end
matrix you are all done! Below are two images to show how this works,
taken from the amazing educational website
mathisfun (https://www.mathsisfun.com) .

[Image: Matrix multiplication step 2]

  Image taken from
  Mathisfun (https://www.mathsisfun.com/algebra/matrix-multiplying.html)

[Image: Matrix multiplication step 2]

  Image taken from
  Mathisfun (https://www.mathsisfun.com/algebra/matrix-multiplying.html)

## Where matrices live

Matrices were invented in the
1850s (https://en.wikipedia.org/wiki/Matrix_(mathematics)#History)
to solve linear transformations. This sounds more complicated than it
is, it basically describes a transformation of an object in for
instance a 2-dimensional space. Below is a simple example of such a
transformation where the letter F is changed to a sheared version of
itself.

[Image: Linear transformation example]

  Linear transformation in a 2-dimensional space, image taken from
  Mathisfun (https://https://www.mathsisfun.com/algebra/matrix-transform.html)

This concept is more powerful than you would initially think, since
this is the basis to describe any graphics rendering on your screen.
On a website once you scroll the computer decides where all current
things on your screen should go using these linear transformations.
Every animation you see uses these linear transformations. Especially
videogames use
3D rendering (https://en.wikipedia.org/wiki/3D_rendering)
where a large number of linear transformations are used to display the
world.

Neural networks also use this concept for training models and using
models. While less convenient, matrices can describe all the weights
of a neural network. It is also used to train the model using the
backpropagation algorithm which heavily relies on matrix operations.

## Who deals with matrices

Your graphics card is your best friend when it comes to performing all
these matrix operations. As you can imagine having to do all these
multplications, additions, millions of times can be quite the
challenge. Processors with 4 to 8 cores need to do all these
operations with just 4 to 8 calculations at a time! You can think of
the cores in a processor as genius mathematicians who are able to do
math computations very fast. But just imagine having to do millions of
these multiplications every second just to show something on the
screen. Processors have gotten so fast that it can easily handle this
for every day tasks, but once you try to train any AI model or run a
video game it starts to struggle. Because these 4 to 8 geniuses just
cant handle the amount of computations. This is where the graphics
card comes in it has a huge numbers of cores. The recently released
RTX5050 which is the low end model of NVidia's new GPU line up
already has 2560 cores! These cores are less efficient than these 4 to
8 cores of the processors however but you can imagine that 2560 high
school children who are good at math will be faster than 4 to 8 math
geniuses in doing millions of operations.

For operations like training an AI model or playing a video games your
PC notices that it needs to do a huge amount of calculations and
starts to assign these tasks to the graphics card. This speeds up the
process by a factor of 10, when running a language model locally this
is the difference between having to wait for 10 seconds for an answer
or just 1.

## Conclusion

Matrices are everywhere describing an ungodly amount of
multiplications and additions at the same time. In the basis it's
actually quite easy but the scale is unfathomable and can start to
give you an admiration for how fast computers have actually become. I
hope this blog has given you a basic understanding of how matrices
work and how and where they are used so you can inpsire others next
time you are talking with your colleagues at the coffee machine.
`,
};

export default blog;
