import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "26",
	numericId: 26,
	slug: "iot-hobby",
	title: "The wonderful world of IoT: The perfect hobby for tech enthusiasts 👨‍💻",
	description: "Over the last months I have been getting more and more interested in creating all kinds of IoT projects. It started with a christmas decoration last christmas but has turned into a full hobby. Home automations are already being built which will hopefully make life easier and more fun!",
	date: "2025-07-05",
	link: "https://vonkprogramming.nl/blogs/iot-hobby",
	content: `
Lately, I’ve been diving into all kinds of projects using
  microcontrollers. These are small boards with a processor and
  general-purpose input/output (GPIO) pins, which let you run code
  written in C or
  MicroPython (https://micropython.org/)
  . You can connect them to all sorts of components like temperature
  sensors, LED lights, buttons, buzzers, humidity sensors, and more.
  Using the GPIO pins, the microcontroller can communicate with these
  components by sending or receiving data.

  These kinds of projects are great for hobby use. They give you
  something fun and hands-on to do in your free time that isn’t
  work-related, but still scratches that programmer itch.

## My projects

  Over the last months I have worked on creating a
  christmas tree (https://github.com/thebetar/ArduinoChristmas)
  that blinks multiple different lights and plays a random christmas
  song every hour. A system that contains all kinds of sensors that
  sends the information of these sensors to my
  raspberry pi (https://www.raspberrypi.com/)
  which runs a web server to show the current situation in my house. A
  WiFi occupation scanner to monitor how active each WiFi channel is
  within my building and much more!

  All these projects use the same basic components, the
  ESP32 (https://www.espressif.com/en/products/socs/esp32)
  microcontrollers which is a cheap general purpose microcontroller that
  supports both WiFi and bluetooth, all kinds of sensors which can be
  bought in packages that contain all kinds of them, and a breadboard,
  breakout board or both.

## Understanding smart devices

  One advantage of working on these IoT projects is that I’ve gained a
  much better understanding of how the smart devices on the market
  actually work. What kinds of sensors they use, where the data goes,
  and what other components are involved. It’s interesting to learn and
  makes you more aware of the data being stored by manufacturers.

  Another big benefit is that many of these smart devices are
  surprisingly doable to build yourself, often at a much lower cost.
  Plus, since it’s your own creation, you can expand or modify it
  however you like.

  Finally, it also reduces the reliance on all kinds of external
  services that these commercial smart devices typically depend on.

## Simple example project

  I have found that a lot of people are interested in this topic but
  never take the step to actually get start, so lets change that! Here
  is a cheap way with clear and easy instructions to get started for
  less than 10 euros!

  I will describe a project which meassures temperature and humidity and
  shines a light based on if the temperature is too high or the humidity
  is too low.

## Step 1: get the physical components

For this projects the following components are needed

- ESP32 microcontroller (it can be any model)

- Male to male wires

- Breadboard

- DHT sensor  (it can be either the DHT11 or DHT22)

- LED lights

- 220-ohm resistors

  All these components can be bought on websites like
  AliExpress (https://www.aliexpress.com/)
  for less than 10 euros. The figure below shows this!

[Image: Aliexpress order]

Figure 1: Aliexpress order

## Step 2: Install Arduino IDE

  After getting these components you will need to download the Arduino
  IDE to start programming your ESP32! The Arduino IDE is one of
  multiple editors that can be used to program the ESP32 but I have
  found it to work the most convenient. It can be found
  here (https://www.arduino.cc/en/software/)
  .

## Step 3: Install the correct libraries

  To allow Arduino IDE to commmunicate with the board directly, the
  correct board manager has to be selected. There is a very good
  tutorial which describes this which can be found in the link below:

  https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/ (https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/)

## Step 4: Connecting the LED

  Once you have all the software installed and tested that your ESP32
  works as intended you can start to wire everything. I find it the
  easiest to first start with the simplest part of the project and then
  build up, so lets start there and only connect the LED to the ESP32.
  For the LED the Ground pin is needed and one of the GPIO pins. Connect
  the ground pin (marked with GND) to the breadboard and one of the pins
  of the red LED to a connecting lane in the breadboard. After this
  connect the other side of the LED with a 220-ohm resistor. This
  resistor is used to reduce the voltage. The default GPIO pin will send
  3.3V over the pin once a signal is send by the ESP32. This voltage is
  a little too high for the LED to handle and it might affect the
  longevity of the LED, by adding the 220-ohm resistor we reduce the
  voltage slightly so we still get a nice red color but reduce the
  voltage enough for the LED to survive for longer. After doing all this
  the breadboard should look something like the picture below

[Image: LED wiring]

Figure 2: LED wiring

## Step 5: Write some code

  Once the wiring is done we can start writing some code, first we have
  to set the pin that was used to connect the LED to output mode during
  the initialisation of the microcontroller, after this we can write a
  small loop with a one second delay that turns the light on and off,
  this project would need the following code

[Image: LED code]

Figure 3: LED code

  This code is quite simple but it is a good start to test if the LED
  works, the setup function is run when the microcontroller
  starts while the loop function is run on a loop.

## Step 6: Connecting the DHT sensor

  After confirming that the light starts blinking, you can move on to
  the second part of the project. This will be the final bit of wiring
  needed.

  Start by connecting the DHT sensor, which will measure temperature and
  humidity, to the breadboard. You'll need to hook up three pins:
  one to ground, one to the 5V pin, and one to the GPIO pin you plan to
  use for reading data.

  Below is an example of how to wire the sensor alongside the LED light.

[Image: Full circuit with LED and DHT sensor]

Figure 4: Full circuit with LED and DHT sensor

## Step 7: Write more code for the DHT sensor

  Luckily, the DHT sensor is a digital sensor. This means it sends its
  data as a stream of ones and zeros. There are also many sensors that
  work with analog signals. These are actually quite common, since the
  real world isn’t digital. Temperature, for example, isn’t just hot or
  cold. It can take on many different values.

  For analog sensors, you need something called an
  ADC (https://en.wikipedia.org/wiki/Analog-to-digital_converter)
  , which stands for Analog-to-Digital Converter. This is a small
  component that most microcontrollers support. It takes a single analog
  value and converts it into a digital value by breaking it down into
  multiple bits. But that’s a bit of a side note.

  Since we're using a digital DHT sensor, we don’t need to worry
  about ADCs. Now that the sensor is connected, we need to tell the
  ESP32 which pin will be used to read the data. Once that’s set up, we
  can use the values it receives to trigger actions. For example, we
  could turn on the LED when the temperature reaches 25 degrees Celsius.

  For the DHT sensor, the pin doesn’t need to be set to input or output
  manually. Instead, you just call dht.begin(). To make
  this work, you’ll need to install the
  Adafruit (https://www.adafruit.com/)
  DHT library. You can do this by opening the Library Manager in the
  Arduino IDE, searching for “DHT sensor library” by Adafruit, and
  clicking Install.

  Here’s an example of how to initialize the sensor and control the LED
  based on the temperature:

[Image: Full code with DHT sensor and LED]

Figure 5: Full code with DHT sensor and LED

## Step 6: Test the implementation

  After uploading and running the code, the project should be complete.
  It’s always a good idea to test it, though. Try warming up the sensor
  and see if the light turns on. One simple way to do this is by
  slightly lowering the temperature threshold in the code and then
  warming the sensor with your hand.

## Step 7: Enjoy your creation

  The most important part now is to enjoy what you have just made! You
  just created a temperature sensor with a small warning light that
  looks something like this

[Image: Final project with LED and DHT sensor]

Figure 6: Final project with LED and DHT sensor

  This project is just a small introduction into the wonderful world of
  IoT but it shows that with a couple of simple steps and for a very low
  budget you can create all kinds of things. My own setup for instance
  also contains sensors to meassure air quality, light, air pressure,
  humidity and temperature which it sends to my raspberry pi which plots
  these values out of time, this dashboard can be seen below, this is
  just another example what you could do, (almost) everything is
  possible!

[Image: Dashboard with all kinds of sensors]

Figure 7: Dashboard with all kinds of sensors

## Conclusion

  IoT is a fun side project for anyone with some programming and
  technical knowledge. Modern microcontrollers often also support
  micropython which makes it easier for people without experience in C
  to also delve into the IoT world. Many of these fun projects can be
  made and eventually you can start to automate things in your house,
  for instance connecting your air conditioning system or just your fan
  to your read temperature value, cooling your house only when it gets
  too hot, keeping your house nice and cool, while using less power
  since you only turn on the system when it is actually to warm.
`,
};

export default blog;
