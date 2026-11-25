export const content = () => (
  <>
    <h2 id="introduction">Introduction</h2>
    <p>
      Recently, I finished writing my master&#39;s thesis for the{" "}
      <a href="https://eng.pw.edu.pl/" target="_blank">
        Warsaw University of Technology
      </a>
      . I chose a topic that would challenge me in a new field, one I was
      interested in but had little prior experience with:{" "}
      <strong>Radio Signals!</strong> I discovered this topic after a
      discussion with one of my favourite professors at the university, who
      teaches this subject in addition to the neural network course I took
      with him.
    </p>
    <p>
      The world of radio signals is much deeper and more interesting than it
      initially seems. There are many different frequencies used and many
      different transmission methods, each bringing its own challenges.
      However, one thing every expert on radio signals can tell you is that
      the spectrum is slowly becoming congested! While some frequencies are
      barely used, others are becoming increasingly crowded, for instance,
      the frequencies used by the Wi-Fi in your house.
    </p>
    <p>
      Wi-Fi can be transmitted across a spectrum around the 2.4GHz frequency
      or around the 5GHz frequency. While the 5GHz frequency mitigates many
      issues, not everyone uses it yet. With the number of data-transmitting
      devices potentially increasing in the near future, even this might not
      be enough soon!
    </p>
    <h2 id="how-it-works-">How it works?</h2>
    <p>
      Radio signals transmit data using radio waves, which utilize different
      frequencies to send and receive information. First, two devices agree
      on which frequency to use, and then they start sending data to each
      other accordingly. However, if another pair of devices decides to send
      data over the same frequency, interference occurs. This can cause
      mistakes in the transmission.
    </p>
    <p>
      Within the spectrum around 2.4GHz, there are only 4 non-overlapping
      channels available to communicate data! This means that if 5 or more
      devices are communicating at the same time, interference will occur,
      and this is assuming everyone is properly using the free channels,
      which is often not the case. This transmission chaos can be observed
      in the diagram below, which is a basic scan of used channels in the
      Wi-Fi 2.4GHz spectrum in my apartment while writing this blog.
    </p>
    <p>
      <img
        src="/assets/images/blogs/spectrum-sensing/wifi-scan.webp"
        alt="Wi-Fi spectrum scan from residential apartment"
        class="max-w-md"
        width="951"
        height="1500"
      />
    </p>
    <blockquote>
      <p>2.4GHz Wi-Fi spectrum in ordinary residential apartment</p>
    </blockquote>
    <h2 id="what-to-do-">What to do?</h2>
    <p>
      As described before, the additional 5GHz spectrum already alleviates
      much of this problem. It contains 12 non-overlapping channels compared
      to just 4. It can even reduce the width of its channels to include 25
      non-overlapping options. However, this solution is more of a temporary
      relief than a permanent fix. If the number of devices increases again,
      we could run out of space once more, for instance, in high-density
      urban areas where many apartments cover a small geographical area.
    </p>
    <p>
      This is where my research topic comes in. Channel selection is often
      done quite passively, resulting in a slow process of finding available
      channels. This often leads to selecting channels that have become
      occupied since the sensing began. Below is an image of how the
      spectrum looks when recorded over time; frequencies with a strong
      signal are drawn in red. In this diagram, it is clearly visible that
      there is transmission around channel 8. While this is visible to the
      naked eye, deriving this mathematically can be quite a challenge and
      requires significant computing power.
    </p>
    <p>
      <img
        src="/assets/images/blogs/spectrum-sensing/spectrum-example.webp"
        alt="Diagram showing transmission over Wi-Fi channel 7, 8, 9 and 10 centering around 8"
        width="610"
        height="470"
        loading="lazy"
        decoding="async"
      />
    </p>
    <blockquote>
      <p>
        Diagram showing transmission over Wi-Fi channel 7, 8 and 9 centering
        around 8
      </p>
    </blockquote>
    <p>
      Old methods use mathematical models to derive which channel is
      available and which isn&#39;t; however, they are not particularly fast
      and are very vulnerable to background noise. A good solution for this
      challenge would be to use a simple neural network that
      &quot;listens&quot; to all the data being sent around a certain
      frequency and attempts to classify which channel is best for
      transmission. This pre-trained model would be simpler to run than
      current methods, generate results faster, and be more resilient to
      background noise. I’m not just saying this; I have the numbers to
      prove it! If you want to read the proof, you can send me an email at{" "}
      <a href="mailto:info@vonkprogramming.nl">info@vonkprogramming.nl</a>.
    </p>
    <h2 id="my-findings">My findings</h2>
    <p>
      I tried using multiple neural network models to classify which channel
      was optimal for transmitting data, or more specifically, to classify
      which channels currently had other devices using them so those
      channels could be avoided. The models used were:
    </p>
    <ul>
      <li>
        <p>Support Vector Machine on time-based data</p>
      </li>
      <li>
        <p>Support Vector Machine on frequency-based data</p>
      </li>
      <li>
        <p>Convolutional Neural Network on time-based data</p>
      </li>
      <li>
        <p>Convolutional Support Vector Machine on time-based data</p>
      </li>
    </ul>
    <p>
      These models all performed surprisingly well, especially the last
      model, which combined the advantages of feature extraction using
      convolution with the classification strength of the Support Vector
      Machine. These models achieved over 90% accuracy in a multitude of
      experiments. Below, an example of a result can be seen. The quality of
      the diagram is lower because it uses fewer data points, as it was
      found that this still resulted in high accuracy.
    </p>
    <p>
      <img
        src="/assets/images/blogs/spectrum-sensing/model-result.webp"
        alt="Image showing model classification result based on data points"
        width="1286"
        height="564"
        loading="lazy"
        decoding="async"
      />
    </p>
    <blockquote>
      <p>
        a) shows the transmission over a spectrum that contains only 4
        channels while b) shows the resulting prediction of the model based
        on the data
      </p>
    </blockquote>
    <h2 id="conclusion">Conclusion</h2>
    <p>
      In the end, I proposed multiple models that all achieved high accuracy
      in finding the right channel for Wi-Fi transmission. These models
      could eventually be implemented in Wi-Fi access points to improve
      channel selection. My research got graded with a 5.0 out of 5.0, the
      highest possible grade.
    </p>
    <p>
      Maybe I will decide to return to university in the future to pursue
      this topic further, but for now, I am done with university. I hope you
      enjoyed reading about my thesis topic, and I hope I have described it
      in a way that was understandable to most, if not all, readers. If you
      have any comments or questions, please leave them in the comments
      below; I would love to read them!
    </p>
    <p>
      Special thanks to{" "}
      <a
        href="https://www.linkedin.com/in/grzegorz-bogdan/"
        target="_blank"
      >
        dr. inz. Gregorz Bogdan
      </a>{" "}
      for supervising my master's thesis.
    </p>
  </>
);
