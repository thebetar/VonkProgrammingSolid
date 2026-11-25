export const content = () => (
  <>
    <p>
      With the rise of AI, the concept of neural networks in computer
      science has grown significantly. But how do they actually work?
    </p>
    <p>
      Well, they’re quite simple at their core. However, when you put a lot
      of simple things together, they can start to seem overwhelming.
    </p>
    <h2 id="-the-first-neural-network-">
      <strong>The First Neural Network</strong>
    </h2>
    <p>
      The first neural network in IT was theorized by{" "}
      <a
        href="https://en.wikipedia.org/wiki/Frank_Rosenblatt"
        target="_blank"
      >
        Frank Rosenblatt
      </a>
      . He wrote a book about the{" "}
      <a href="https://en.wikipedia.org/wiki/Perceptron" target="_blank">
        perceptron
      </a>{" "}
      functions which describes a simple neural network with a single layer
      of neurons that could learn to recognize basic shapes. It works as
      will be explain more in the next chapter by feeding in some input
      values and adjusting the weights of these inputs based on the errors
      it makes. In 1957, he even conducted experiments and managed to
      achieve basic shape detection in images. This was done by implementing
      the same kind of base logic that modern neural networks use. But with
      only a few neurons and a few layers, due to the limited computational
      power available at the time.
    </p>
    <p>
      This was the big challenge back then. Immense computational power for
      that time period was required to train such a model. But look at where
      we are today processors have evolved from a few transistors to{" "}
      <a
        href="https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)"
        target="_blank"
      >
        billions of them
      </a>
      . A budget phone today has more computational power than the computers
      that sent people to the moon.
    </p>
    <h2 id="-how-does-a-neural-network-work-">
      <strong>How Does a Neural Network Work?</strong>
    </h2>
    <p>
      As mentioned before, a neural network is fundamentally simple. It
      takes in input values performs some multiplication on these input
      values and gets an output value. For example let’s say we want to
      differentiate between a dog and a cat. The input features in this case
      could be observable characteristics like the number of legs, size, and
      weight.
    </p>
    <p>
      The neural network receives a lot of data about what is has to predict
      or classify; in this instance it is trained with many examples of cats
      and dogs, each described by their features (e.g., 4 legs, 5kg, 45cm
      long). Initially, the network assigns random values to the weights,
      which describe how strong these features are taken into account for
      the output of the neural network. At first, the predictions will be
      wrong, but the network learns by adjusting these weights based on its
      errors and using some loss function to calculate a value to add or
      subtract from the weights.
    </p>
    <p>
      This process continues across all training examples until the network
      starts to recognize patterns. Some features, like the number of legs,
      may turn out to be less useful (since both cats and dogs have four),
      while others, like the weight-to-size ratio, could be more important.
      The network automatically assigns more importance to relevant
      features.
    </p>
    <p>
      Finally the network will output a value lets say in our example a
      value between 0 and 1 where 0 is a cat and 1 is a dog. The network
      will output a value based on the weights it has learned during
      training. This output value is the most important for calculating the
      adjustment value of the weights by the loss function. This is done by
      comparing the output value of the model to the expected value for
      instance when you give data about a dog and the model predicts it is a
      cat, you can adjust the weights that next time it gets similar
      features it will predict it is a dog.
    </p>
    <p>
      This is a simplified explanation, but it illustrates the core concept.
      There’s a lot more math behind how the network updates its weights
      this process is called backpropagation. If you’re interested in the
      details, search for{" "}
      <a
        href="https://en.wikipedia.org/wiki/Backpropagation"
        target="_blank"
      >
        &quot;backpropagation&quot;
      </a>{" "}
      to learn more.
    </p>
    <h2 id="-ai-terms-">
      <strong>AI Terms</strong>
    </h2>
    <p>
      Now that we’ve covered the basics, let’s go over some key terms used
      in neural networks:
    </p>
    <ul>
      <li>
        <p>
          <strong>Input:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Input layer</strong>: This is the first layer of the
              network, where raw data is fed into the model. In our example,
              this includes the characteristics of an animal. In image
              classification, each pixel could be an input feature.
            </p>
          </li>
          <li>
            <p>
              <strong>Input feature</strong>: A piece of information used to
              make predictions or classifications.
            </p>
          </li>
          <li>
            <p>
              <strong>Training data:</strong> data that is used to define
              what features mean what class
            </p>
          </li>
          <li>
            <p>
              <strong>Test data:</strong> data to verify that the model
              makes accurate predictions after training, this is a separate
              dataset to prevent the model becoming to specialised on the
              training data
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <strong>Hidden:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Hidden layer</strong>: This is the intermediate layer
              where input values undergo transformations. The network
              applies mathematical operations to extract patterns and
              insights from the raw data.
            </p>
          </li>
          <li>
            <p>
              <strong>Weights</strong>: The values used to multiply input
              features, determining their importance. Weights are adjusted
              during training to improve accuracy.
            </p>
          </li>
        </ul>
      </li>
      <li>
        <p>
          <strong>Output:</strong>
        </p>
        <ul>
          <li>
            <p>
              <strong>Output layer</strong>: This is the final layer that
              produces the network’s prediction or classification. Based on
              the transformed data from the hidden layers, it delivers the
              final result.
            </p>
          </li>
          <li>
            <p>
              <strong>Activation function</strong>: A function applied to
              outputs to help shape predictions, such as scaling values
              between 0 and 1.
            </p>
          </li>
          <li>
            <p>
              <strong>Class:</strong> Which value is the final output and
              what does it mean, in the example given the classes would be
              cat and dog
            </p>
          </li>
          <li>
            <p>
              <strong>Loss function:</strong> A function that calculates the
              difference between the predicted output and the actual output.
              This difference is used to adjust the weights.
            </p>
          </li>
        </ul>
      </li>
    </ul>
    <p>
      <img
        src="/assets/images/blogs/neural-networks/simple_neural_network.jpg"
        alt="Simple Neural Network"
        width="791"
        height="388"
      />
    </p>
    <h2 id="-what-can-be-done-">
      <strong>What Can Be Done?</strong>
    </h2>
    <p>
      After reading this blog, you hopefully have a better understanding of
      neural networks and how they classify data. Even if you’re not a
      programmer, you might now feel more comfortable discussing the basics
      with others who work with AI.
    </p>
    <p>
      For those who do want to experiment, Python is a great starting point.
      With libraries like TensorFlow or PyTorch, you can build simple models
      and train them on datasets from platforms like Kaggle. Many
      beginner-friendly tutorials are available to guide you through the
      process step by step.
    </p>
    <p>
      Whether you just want to understand neural networks better or start
      experimenting with code, this knowledge gives you a solid foundation
      to explore further.
    </p>
    <h2 id="-conclusion-">
      <strong>Conclusion</strong>
    </h2>
    <p>
      I hope this blog has made neural networks easier to understand and has
      sparked your interest in training one yourself. This technology is set
      to revolutionize industries in the coming years, and understanding the
      fundamentals will help you grasp what is and isn’t possible. Now go
      out there and impress people with your new techy vocabulary!
    </p>
  </>
);
