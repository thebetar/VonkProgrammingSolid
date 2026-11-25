export const content = () => (
  <>
    <p>
      AI and neural networks are everywhere, but actually creating one
      yourself is still out of reach for most people. It usually means you
      need to know how to code or use expensive tools. I wanted to change
      that.
    </p>
    <p>
      ZenuwNet is a web app that lets you build and train your own neural
      network model without any programming skills.
    </p>
    <a href="https://zenunet.nl" target="_blank" rel="noreferrer">
      Check it out here
    </a>
    <h2 id="building-neural-networks-without-code-meet-zenuwnet">
      Building Neural Networks Without Code: Meet ZenuwNet
    </h2>
    <p>
      AI and neural networks are everywhere, but actually creating one
      yourself is still out of reach for most people. It usually means you
      need to know how to code or use expensive tools. I wanted to change
      that.
    </p>
    <p>
      ZenuwNet is a web app that lets you build and train your own neural
      network model without any programming skills.
    </p>
    <h2 id="creating-your-first-model">Creating your first model</h2>
    <p>
      In my previous blog post, I explained how neural networks work and
      which concepts are important to understand them. I’ve implemented all
      those ideas into this app. Creating your own neural network is pretty
      simple. Just follow these steps:
    </p>
    <ul>
      <li>
        <p>Select one of the example datasets</p>
      </li>
      <li>
        <p>Create a model based on this dataset</p>
      </li>
      <li>
        <p>Start training the model using the right training settings</p>
      </li>
      <li>
        <p>That’s it, you’ve got a trained model</p>
      </li>
    </ul>
    <h2 id="data-model">Data model</h2>
    <p>
      Inside ZenuwNet there are two main things to keep in mind: Datasets
      and Models.
    </p>
    <h2 id="datasets">Datasets</h2>
    <p>
      Datasets represent the training data. You can start by choosing one of
      the example datasets. Once you get the hang of it, you can even add
      your own.
    </p>
    <p>A dataset has:</p>
    <ul>
      <li>
        <p>
          Input features: these are the values that describe each row of
          data. For example, in the simple cat vs dog dataset, the features
          are weight and size of each animal
        </p>
      </li>
      <li>
        <p>
          Output classes: these are the categories each row belongs to. For
          the same dataset, it’s either “cat” or “dog”
        </p>
      </li>
      <li>
        <p>
          Total rows: the number of entries your dataset contains. In the
          cat vs dog example, it’s the number of animals that were measured
          and labeled
        </p>
      </li>
    </ul>
    <h2 id="models">Models</h2>
    <p>
      Models are the actual neural networks. You create a model based on a
      dataset. The input and output neurons are automatically set based on
      the dataset, but you can customize a few other things:
    </p>
    <ul>
      <li>
        <p>
          Number of hidden layers: how many layers the data passes through
          before a decision is made. For most problems, one hidden layer is
          enough
        </p>
      </li>
      <li>
        <p>
          Neurons per layer: how many neurons each layer has. A good rule of
          thumb is to have at least as many neurons as input features
        </p>
      </li>
      <li>
        <p>
          Activation function: this decides how the neuron values are
          scaled. It plays an important role in keeping the model stable
          during training
        </p>
      </li>
    </ul>
    <p>
      While training, the model also logs extra data like loss after each
      training iteration, accuracy, and a confusion matrix. You can view all
      of this on the analyse page to see how the training progressed.
    </p>
    <h2 id="future-plans">Future plans</h2>
    <p>
      Right now, the app only supports basic neural networks that use linear
      transformations. Here&#39;s what I want to add next:
    </p>
    <ul>
      <li>
        <p>
          More advanced model progression so you can build more complex
          networks as you learn
        </p>
      </li>
      <li>
        <p>
          Support for different layer types like convolution, dropout, and
          maybe even recurrent layers
        </p>
      </li>
      <li>
        <p>Sharing of datasets to the community</p>
      </li>
      <li>
        <p>Functionality to export trained models to real code, like:</p>
        <ul>
          <li>
            <p>PyTorch</p>
          </li>
          <li>
            <p>TensorFlow</p>
          </li>
          <li>
            <p>A standalone Python script you can run or build on top of</p>
          </li>
        </ul>
      </li>
    </ul>

    <a href="https://zenunet.nl" target="_blank" rel="noreferrer">
      Check it out here
    </a>
  </>
);
