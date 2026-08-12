import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "30",
	numericId: 30,
	slug: "spectrum-sensing-cognitive-radio",
	title: "Spectrum Sensing using Cognitive Radio 📡",
	description: "Radio signal congestion in Wi-Fi networks is becoming a critical issue as current channel selection methods struggle to keep up with demand. A novel solution utilizes neural networks to \"listen\" to the frequency spectrum and intelligently identify the best available channels for data transmission. This approach, particularly when using a Convolutional Support Vector Machine, has demonstrated over 90% accuracy in optimizing wireless connectivity and reducing interference.",
	date: "2025-11-15",
	link: "https://vonkprogramming.nl/blogs/spectrum-sensing-cognitive-radio",
	content: `
## Introduction

Recently, I finished writing my master's thesis for the
Warsaw University of Technology (https://eng.pw.edu.pl/)
. I chose a topic that would challenge me in a new field, one I was
interested in but had little prior experience with:
Radio Signals! I discovered this topic after a
discussion with one of my favourite professors at the university, who
teaches this subject in addition to the neural network course I took
with him.

The world of radio signals is much deeper and more interesting than it
initially seems. There are many different frequencies used and many
different transmission methods, each bringing its own challenges.
However, one thing every expert on radio signals can tell you is that
the spectrum is slowly becoming congested! While some frequencies are
barely used, others are becoming increasingly crowded, for instance,
the frequencies used by the Wi-Fi in your house.

Wi-Fi can be transmitted across a spectrum around the 2.4GHz frequency
or around the 5GHz frequency. While the 5GHz frequency mitigates many
issues, not everyone uses it yet. With the number of data-transmitting
devices potentially increasing in the near future, even this might not
be enough soon!

## How it works?

Radio signals transmit data using radio waves, which utilize different
frequencies to send and receive information. First, two devices agree
on which frequency to use, and then they start sending data to each
other accordingly. However, if another pair of devices decides to send
data over the same frequency, interference occurs. This can cause
mistakes in the transmission.

Within the spectrum around 2.4GHz, there are only 4 non-overlapping
channels available to communicate data! This means that if 5 or more
devices are communicating at the same time, interference will occur,
and this is assuming everyone is properly using the free channels,
which is often not the case. This transmission chaos can be observed
in the diagram below, which is a basic scan of used channels in the
Wi-Fi 2.4GHz spectrum in my apartment while writing this blog.

[Image: Wi-Fi spectrum scan from residential apartment]

2.4GHz Wi-Fi spectrum in ordinary residential apartment

## What to do?

As described before, the additional 5GHz spectrum already alleviates
much of this problem. It contains 12 non-overlapping channels compared
to just 4. It can even reduce the width of its channels to include 25
non-overlapping options. However, this solution is more of a temporary
relief than a permanent fix. If the number of devices increases again,
we could run out of space once more, for instance, in high-density
urban areas where many apartments cover a small geographical area.

This is where my research topic comes in. Channel selection is often
done quite passively, resulting in a slow process of finding available
channels. This often leads to selecting channels that have become
occupied since the sensing began. Below is an image of how the
spectrum looks when recorded over time; frequencies with a strong
signal are drawn in red. In this diagram, it is clearly visible that
there is transmission around channel 8. While this is visible to the
naked eye, deriving this mathematically can be quite a challenge and
requires significant computing power.

[Image: Diagram showing transmission over Wi-Fi channel 7, 8, 9 and 10 centering around 8]

  Diagram showing transmission over Wi-Fi channel 7, 8 and 9 centering
  around 8

Old methods use mathematical models to derive which channel is
available and which isn't; however, they are not particularly fast
and are very vulnerable to background noise. A good solution for this
challenge would be to use a simple neural network that
"listens" to all the data being sent around a certain
frequency and attempts to classify which channel is best for
transmission. This pre-trained model would be simpler to run than
current methods, generate results faster, and be more resilient to
background noise. I’m not just saying this; I have the numbers to
prove it! If you want to read the proof, you can send me an email at
info@vonkprogramming.nl (mailto:info@vonkprogramming.nl).

## My findings

I tried using multiple neural network models to classify which channel
was optimal for transmitting data, or more specifically, to classify
which channels currently had other devices using them so those
channels could be avoided. The models used were:

- Support Vector Machine on time-based data

- Support Vector Machine on frequency-based data

- Convolutional Neural Network on time-based data

- Convolutional Support Vector Machine on time-based data

These models all performed surprisingly well, especially the last
model, which combined the advantages of feature extraction using
convolution with the classification strength of the Support Vector
Machine. These models achieved over 90% accuracy in a multitude of
experiments. Below, an example of a result can be seen. The quality of
the diagram is lower because it uses fewer data points, as it was
found that this still resulted in high accuracy.

[Image: Image showing model classification result based on data points]

  a) shows the transmission over a spectrum that contains only 4
  channels while b) shows the resulting prediction of the model based
  on the data

## Conclusion

In the end, I proposed multiple models that all achieved high accuracy
in finding the right channel for Wi-Fi transmission. These models
could eventually be implemented in Wi-Fi access points to improve
channel selection. My research got graded with a 5.0 out of 5.0, the
highest possible grade.

Maybe I will decide to return to university in the future to pursue
this topic further, but for now, I am done with university. I hope you
enjoyed reading about my thesis topic, and I hope I have described it
in a way that was understandable to most, if not all, readers. If you
have any comments or questions, please leave them in the comments
below; I would love to read them!

Special thanks to
dr. inz. Gregorz Bogdan (https://www.linkedin.com/in/grzegorz-bogdan/)
for supervising my master's thesis.
`,
};

export default blog;
