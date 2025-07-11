import { NoteSvg } from '../components/Icons';

const BlogTags = {
	Productivity: 'productivity',
	Development: 'development',
	Lifestyle: 'lifestyle',
	Innovation: 'innovation',
	Business: 'business',
	Career: 'career',
	Guide: 'guide',
	Product: 'product',
};

export const blogTags = [
	{
		name: BlogTags.Productivity,
		color: 'green',
	},
	{
		name: BlogTags.Lifestyle,
		color: 'blue',
	},
	{
		name: BlogTags.Development,
		color: 'purple',
	},
	{
		name: BlogTags.Innovation,
		color: 'red',
	},
	{
		name: BlogTags.Business,
		color: 'orange',
	},
	{
		name: BlogTags.Career,
		color: 'cyan',
	},
	{
		name: BlogTags.Guide,
		color: 'yellow',
	},
	{
		name: BlogTags.Product,
		color: 'pink',
	},
];

export function getTagColor(tag) {
	const color = blogTags.find(blogTag => blogTag.name === tag)?.color;

	if (color === 'blue') {
		return 'indigo';
	}
	return color;
}

export const blogs = [
	{
		id: 27,
		title: 'How matrices took over the world 🌍',
		description: `
			Matrices are often considered as a pain during your studies, but they are actually used everywhere! 3D rendering, neural networks and simulations all use matrices to perform their calculations. In this blog I will explain how they work and where they are used.
		`,
		tags: [BlogTags.Innovation, BlogTags.Development],
		keywords: ['math', 'matrix', 'linear algebra'],
		date: '2025-07-11',
		link: '/blogs/matrices',
		content: (
			<>
				<p>
					If you&#39;ve studied computer science, math or any studies which has advanced math you have heard
					of them and probably have nightmares about doing manual calculations with them, MATRICES. During my
					studies I certainly experienced the same. I was always wondering why this mathematical concept was
					focussed on so much, but once the lessons about neural networks and computer graphics started it
					clicked! Matrices are used for so many things within computer science without most people realising
					it! All neural networks that you see from a simple model that can see if a picture is of a dog or a
					cat to the advanced models like ChatGPT; they all use matrix operations. Even the screen that you
					are currently reading this on has used matrix operations to display this information to you.
				</p>
				<h2 id="basics-of-matrix-multiplication">Basics of matrix multiplication</h2>
				<p>
					For those who don&#39;t know it yet, or where it&#39;s been years ago that they last touched a
					matrix a brief explanation.{' '}
				</p>
				<p>
					Matrix multiplication works by multiplying every cell in a row of one matrix to every cell in a
					column of another matrix and then taking the sum of these values to create a new value which will be
					placed in the resulting matrix. This continues by taking the same row and the next column till the
					end of the second matrix is reached after which you should continue to the next row and start over.
					Once you reach the end matrix you are all done! Below are two images to show how this works, taken
					from the amazing educational website <a href="https://www.mathsisfun.com">mathisfun</a> .
				</p>
				<p>
					<img
						src="https://www.mathsisfun.com/algebra/images/matrix-multiply-a.svg"
						alt="Matrix multiplication step 2"
					/>
				</p>
				<blockquote>
					<p>
						Image taken from{' '}
						<a href="https://www.mathsisfun.com/algebra/matrix-multiplying.html">Mathisfun</a>
					</p>
				</blockquote>
				<p>
					<img
						src="https://www.mathsisfun.com/algebra/images/matrix-multiply-b.svg"
						alt="Matrix multiplication step 2"
					/>
				</p>
				<blockquote>
					<p>
						Image taken from{' '}
						<a href="https://www.mathsisfun.com/algebra/matrix-multiplying.html">Mathisfun</a>
					</p>
				</blockquote>
				<h2 id="where-matrices-live">Where matrices live</h2>
				<p>
					Matrices were invented in the{' '}
					<a href="https://en.wikipedia.org/wiki/Matrix_(mathematics)#History">1850s</a> to solve linear
					transformations. This sounds more complicated than it is, it basically describes a transformation of
					an object in for instance a 2-dimensional space. Below is a simple example of such a transformation
					where the letter F is changed to a sheared version of itself.
				</p>
				<p>
					<img
						src="/assets/images/blogs/matrices/linear-transform.png"
						alt="Linear transformation example"
						class="max-w-md"
					/>
				</p>
				<blockquote>
					<p>
						Linear transformation in a 2-dimensional space, image taken from{' '}
						<a href="https://https://www.mathsisfun.com/algebra/matrix-transform.html">Mathisfun</a>
					</p>
				</blockquote>
				<p>
					This concept is more powerful than you would initially think, since this is the basis to describe
					any graphics rendering on your screen. On a website once you scroll the computer decides where all
					current things on your screen should go using these linear transformations. Every animation you see
					uses these linear transformations. Especially videogames use{' '}
					<a href="https://en.wikipedia.org/wiki/3D_rendering">3D rendering</a> where a large number of linear
					transformations are used to display the world.
				</p>
				<p>
					Neural networks also use this concept for training models and using models. While less convenient,
					matrices can describe all the weights of a neural network. It is also used to train the model using
					the backpropagation algorithm which heavily relies on matrix operations.
				</p>
				<h2 id="who-deals-with-matrices">Who deals with matrices</h2>
				<p>
					Your graphics card is your best friend when it comes to performing all these matrix operations. As
					you can imagine having to do all these multplications, additions, millions of times can be quite the
					challenge. Processors with 4 to 8 cores need to do all these operations with just 4 to 8
					calculations at a time! You can think of the cores in a processor as genius mathematicians who are
					able to do math computations very fast. But just imagine having to do millions of these
					multiplications every second just to show something on the screen. Processors have gotten so fast
					that it can easily handle this for every day tasks, but once you try to train any AI model or run a
					video game it starts to struggle. Because these 4 to 8 geniuses just cant handle the amount of
					computations. This is where the graphics card comes in it has a huge numbers of cores. The recently
					released RTX5050 which is the low end model of NVidia&#39;s new GPU line up already has 2560 cores!
					These cores are less efficient than these 4 to 8 cores of the processors however but you can imagine
					that 2560 high school children who are good at math will be faster than 4 to 8 math geniuses in
					doing millions of operations.
				</p>
				<p>
					For operations like training an AI model or playing a video games your PC notices that it needs to
					do a huge amount of calculations and starts to assign these tasks to the graphics card. This speeds
					up the process by a factor of 10, when running a language model locally this is the difference
					between having to wait for 10 seconds for an answer or just 1.
				</p>

				<div className="dark:bg-zinc-600 bg-zinc-300 rounded-md w-full px-4 py-3 my-4 flex">
					<div className="flex justify-center items-center pr-2">
						<NoteSvg width="24" height="24" />
					</div>
					<div className="flex-1 text-sm italic flex items-center">
						The name graphics card comes from the days where it was mainly used for 3D rendering. Nowadays
						it is used for way more than this.
					</div>
				</div>

				<h2 id="conclusion">Conclusion</h2>
				<p>
					Matrices are everywhere describing an ungodly amount of multiplications and additions at the same
					time. In the basis it&#39;s actually quite easy but the scale is unfathomable and can start to give
					you an admiration for how fast computers have actually become. I hope this blog has given you a
					basic understanding of how matrices work and how and where they are used so you can inpsire others
					next time you are talking with your colleagues at the coffee machine.
				</p>
			</>
		),
	},
	{
		id: 26,
		title: 'The wonderful world of IoT: The perfect hobby for tech enthusiasts 👨‍💻',
		description: `
			Over the last months I have been getting more and more interested in creating all kinds of IoT projects. It started with a christmas decoration last christmas but has turned into a full hobby. Home automations are already being built which will hopefully make life easier and more fun!
		`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: [
			'iot',
			'internet of things',
			'hobby',
			'home automation',
			'smart home',
			'arduino',
			'esp32',
			'raspberry pi',
		],
		date: '2025-07-05',
		link: '/blogs/iot-hobby',
		content: (
			<>
				<p>
					Lately, I’ve been diving into all kinds of projects using microcontrollers. These are small boards
					with a processor and general-purpose input/output (GPIO) pins, which let you run code written in C
					or{' '}
					<a href="https://micropython.org/" target="_blank">
						MicroPython
					</a>
					. You can connect them to all sorts of components like temperature sensors, LED lights, buttons,
					buzzers, humidity sensors, and more. Using the GPIO pins, the microcontroller can communicate with
					these components by sending or receiving data.
				</p>
				<p>
					These kinds of projects are great for hobby use. They give you something fun and hands-on to do in
					your free time that isn’t work-related, but still scratches that programmer itch.
				</p>
				<h2 id="my-projects">My projects</h2>
				<p>
					Over the last months I have worked on creating a{' '}
					<a href="https://github.com/thebetar/ArduinoChristmas" target="_blank">
						christmas tree
					</a>{' '}
					that blinks multiple different lights and plays a random christmas song every hour. A system that
					contains all kinds of sensors that sends the information of these sensors to my{' '}
					<a href="https://www.raspberrypi.com/" target="_blank">
						raspberry pi
					</a>{' '}
					which runs a web server to show the current situation in my house. A WiFi occupation scanner to
					monitor how active each WiFi channel is within my building and much more!
				</p>
				<p>
					All these projects use the same basic components, the{' '}
					<a href="https://www.espressif.com/en/products/socs/esp32" target="_blank">
						ESP32
					</a>{' '}
					microcontrollers which is a cheap general purpose microcontroller that supports both WiFi and
					bluetooth, all kinds of sensors which can be bought in packages that contain all kinds of them, and
					a breadboard, breakout board or both.
				</p>
				<h2 id="understanding-smart-devices">Understanding smart devices</h2>
				<p>
					One advantage of working on these IoT projects is that I’ve gained a much better understanding of
					how the smart devices on the market actually work. What kinds of sensors they use, where the data
					goes, and what other components are involved. It’s interesting to learn and makes you more aware of
					the data being stored by manufacturers.
				</p>
				<p>
					Another big benefit is that many of these smart devices are surprisingly doable to build yourself,
					often at a much lower cost. Plus, since it’s your own creation, you can expand or modify it however
					you like.
				</p>
				<p>
					Finally, it also reduces the reliance on all kinds of external services that these commercial smart
					devices typically depend on.
				</p>
				<h2 id="simple-example-project">Simple example project</h2>
				<p>
					I have found that a lot of people are interested in this topic but never take the step to actually
					get start, so lets change that! Here is a cheap way with clear and easy instructions to get started
					for less than 10 euros!
				</p>
				<p>
					I will describe a project which meassures temperature and humidity and shines a light based on if
					the temperature is too high or the humidity is too low.{' '}
				</p>
				<h3 id="step-1-get-the-physical-components">Step 1: get the physical components</h3>
				<p>For this projects the following components are needed</p>
				<ul>
					<li>
						<p>ESP32 microcontroller (it can be any model)</p>
					</li>
					<li>
						<p>Male to male wires</p>
					</li>
					<li>
						<p>Breadboard</p>
					</li>
					<li>
						<p>
							<a href="https://learn.adafruit.com/dht/overview" target="_blank">
								DHT sensor
							</a>{' '}
							(it can be either the DHT11 or DHT22)
						</p>
					</li>
					<li>
						<p>LED lights</p>
					</li>
					<li>
						<p>220-ohm resistors</p>
					</li>
				</ul>
				<p>
					All these components can be bought on websites like{' '}
					<a href="https://www.aliexpress.com/" target="_blank">
						AliExpress
					</a>{' '}
					for less than 10 euros. The figure below shows this!
				</p>
				<p>
					<img
						src="/assets/images/blogs/iot-hobby/aliexpress-order.png"
						alt="Aliexpress order"
						aria-label="Aliexpress order"
					/>
				</p>
				<blockquote>Figure 1: Aliexpress order</blockquote>

				<h3 id="step-2-install-arduino-ide">Step 2: Install Arduino IDE</h3>
				<p>
					After getting these components you will need to download the Arduino IDE to start programming your
					ESP32! The Arduino IDE is one of multiple editors that can be used to program the ESP32 but I have
					found it to work the most convenient. It can be found{' '}
					<a href="https://www.arduino.cc/en/software/" target="_blank">
						here
					</a>{' '}
					.
				</p>
				<h3 id="step-3-install-the-correct-libraries">Step 3: Install the correct libraries</h3>
				<p>
					To allow Arduino IDE to commmunicate with the board directly, the correct board manager has to be
					selected. There is a very good tutorial which describes this which can be found in the link below:
				</p>
				<p>
					<a href="https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/">
						https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/
					</a>{' '}
				</p>
				<h3 id="step-4-connecting-the-led">Step 4: Connecting the LED</h3>
				<p>
					Once you have all the software installed and tested that your ESP32 works as intended you can start
					to wire everything. I find it the easiest to first start with the simplest part of the project and
					then build up, so lets start there and only connect the LED to the ESP32. For the LED the Ground pin
					is needed and one of the GPIO pins. Connect the ground pin (marked with GND) to the breadboard and
					one of the pins of the red LED to a connecting lane in the breadboard. After this connect the other
					side of the LED with a 220-ohm resistor. This resistor is used to reduce the voltage. The default
					GPIO pin will send 3.3V over the pin once a signal is send by the ESP32. This voltage is a little
					too high for the LED to handle and it might affect the longevity of the LED, by adding the 220-ohm
					resistor we reduce the voltage slightly so we still get a nice red color but reduce the voltage
					enough for the LED to survive for longer. After doing all this the breadboard should look something
					like the picture below
				</p>
				<p>
					<img
						src="/assets/images/blogs/iot-hobby/led-circuit.png"
						alt="LED wiring"
						aria-label="LED wiring"
					/>
				</p>
				<blockquote>Figure 2: LED wiring</blockquote>

				<h3 id="step-5-write-some-code">Step 5: Write some code</h3>
				<p>
					Once the wiring is done we can start writing some code, first we have to set the pin that was used
					to connect the LED to output mode during the initialisation of the microcontroller, after this we
					can write a small loop with a one second delay that turns the light on and off, this project would
					need the following code
				</p>

				<p>
					<img src="/assets/images/blogs/iot-hobby/led-code.png" alt="LED code" aria-label="LED code" />
				</p>
				<blockquote>Figure 3: LED code</blockquote>

				<p>
					This code is quite simple but it is a good start to test if the LED works, the <code>setup</code>{' '}
					function is run when the microcontroller starts while the <code>loop</code> function is run on a
					loop.
				</p>
				<h3 id="step-6-connecting-the-dht-sensor">Step 6: Connecting the DHT sensor</h3>
				<p>
					After confirming that the light starts blinking, you can move on to the second part of the project.
					This will be the final bit of wiring needed.
				</p>
				<p>
					Start by connecting the DHT sensor, which will measure temperature and humidity, to the breadboard.
					You&#39;ll need to hook up three pins: one to ground, one to the 5V pin, and one to the GPIO pin you
					plan to use for reading data.
				</p>
				<p>Below is an example of how to wire the sensor alongside the LED light.</p>

				<p>
					<img
						src="/assets/images/blogs/iot-hobby/full-circuit.png"
						alt="Full circuit with LED and DHT sensor"
						aria-label="Full circuit with LED and DHT sensor"
					/>
				</p>
				<blockquote>Figure 4: Full circuit with LED and DHT sensor</blockquote>

				<h3 id="step-7-write-more-code-for-the-dht-sensor">Step 7: Write more code for the DHT sensor</h3>
				<p>
					Luckily, the DHT sensor is a digital sensor. This means it sends its data as a stream of ones and
					zeros. There are also many sensors that work with analog signals. These are actually quite common,
					since the real world isn’t digital. Temperature, for example, isn’t just hot or cold. It can take on
					many different values.
				</p>

				<p>
					For analog sensors, you need something called an{' '}
					<a href="https://en.wikipedia.org/wiki/Analog-to-digital_converter" target="_blank">
						ADC
					</a>
					, which stands for Analog-to-Digital Converter. This is a small component that most microcontrollers
					support. It takes a single analog value and converts it into a digital value by breaking it down
					into multiple bits. But that’s a bit of a side note.
				</p>

				<p>
					Since we&#39;re using a digital DHT sensor, we don’t need to worry about ADCs. Now that the sensor
					is connected, we need to tell the ESP32 which pin will be used to read the data. Once that’s set up,
					we can use the values it receives to trigger actions. For example, we could turn on the LED when the
					temperature reaches 25 degrees Celsius.
				</p>

				<p>
					For the DHT sensor, the pin doesn’t need to be set to input or output manually. Instead, you just
					call <code>dht.begin()</code>. To make this work, you’ll need to install the{' '}
					<a href="https://www.adafruit.com/" target="_blank">
						Adafruit
					</a>{' '}
					DHT library. You can do this by opening the Library Manager in the Arduino IDE, searching for “DHT
					sensor library” by Adafruit, and clicking Install.
				</p>

				<p>Here’s an example of how to initialize the sensor and control the LED based on the temperature:</p>

				<p>
					<img
						src="/assets/images/blogs/iot-hobby/full-code.png"
						alt="Full code with DHT sensor and LED"
						aria-label="Full code with DHT sensor and LED"
					/>
				</p>
				<blockquote>Figure 5: Full code with DHT sensor and LED</blockquote>

				<h3 id="step-6-test-the-implementation">Step 6: Test the implementation</h3>
				<p>
					After uploading and running the code, the project should be complete. It’s always a good idea to
					test it, though. Try warming up the sensor and see if the light turns on. One simple way to do this
					is by slightly lowering the temperature threshold in the code and then warming the sensor with your
					hand.
				</p>
				<h3 id="step-7-enjoy-your-creation">Step 7: Enjoy your creation</h3>
				<p>
					The most important part now is to enjoy what you have just made! You just created a temperature
					sensor with a small warning light that looks something like this
				</p>
				<p>
					<img
						src="/assets/images/blogs/iot-hobby/final-project.jpg"
						alt="Final project with LED and DHT sensor"
						aria-label="Final project with LED and DHT sensor"
					/>
				</p>
				<blockquote>Figure 6: Final project with LED and DHT sensor</blockquote>

				<p>
					This project is just a small introduction into the wonderful world of IoT but it shows that with a
					couple of simple steps and for a very low budget you can create all kinds of things. My own setup
					for instance also contains sensors to meassure air quality, light, air pressure, humidity and
					temperature which it sends to my raspberry pi which plots these values out of time, this dashboard
					can be seen below, this is just another example what you could do, (almost) everything is possible!
				</p>

				<p>
					<img
						src="/assets/images/blogs/iot-hobby/dashboard.jpg"
						alt="Dashboard with all kinds of sensors"
						aria-label="Dashboard with all kinds of sensors"
					/>
				</p>
				<blockquote>Figure 7: Dashboard with all kinds of sensors</blockquote>

				<h2 id="conclusion">Conclusion</h2>
				<p>
					IoT is a fun side project for anyone with some programming and technical knowledge. Modern
					microcontrollers often also support micropython which makes it easier for people without experience
					in C to also delve into the IoT world. Many of these fun projects can be made and eventually you can
					start to automate things in your house, for instance connecting your air conditioning system or just
					your fan to your read temperature value, cooling your house only when it gets too hot, keeping your
					house nice and cool, while using less power since you only turn on the system when it is actually to
					warm.
				</p>
			</>
		),
	},
	{
		id: 25,
		title: 'My operating system journey: From Windows to Linux 🐧',
		description: `In this blog post, I will share my journey of switching from Windows to Linux, the challenges I faced, and the benefits I have experienced since making the switch.`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['linux', 'windows', 'operating system', 'switching', 'productivity'],
		date: '2025-06-06',
		link: '/blogs/linux-journey',
		content: (
			<>
				<p>
					I&#39;ve used many different operating systems over the years. In the good old days, I started with
					the beloved{' '}
					<a href="https://en.wikipedia.org/wiki/Windows_XP" target="_blank">
						Windows XP
					</a>
					. Windows XP was known for its stability and was ahead of its time in user-friendliness and
					features; there was truly no competitor. In those days, operating systems like{' '}
					<a href="https://en.wikipedia.org/wiki/Linux" target="_blank">
						Linux
					</a>{' '}
					were primarily used by diehard programmers who preferred a simple interface over a more verbose
					experience. Things have changed, however.
				</p>
				<h2 id="current-state-of-operating-systems">Current state of operating systems</h2>
				<p>
					As Windows has progressed from Windows XP to{' '}
					<a href="https://en.wikipedia.org/wiki/Windows_Vista" target="_blank">
						Vista
					</a>
					, to{' '}
					<a href="https://en.wikipedia.org/wiki/Windows_7" target="_blank">
						Windows 7
					</a>
					, to{' '}
					<a href="https://en.wikipedia.org/wiki/Windows_10" target="_blank">
						Windows 10
					</a>
					, and now finally{' '}
					<a href="https://en.wikipedia.org/wiki/Windows_11" target="_blank">
						Windows 11
					</a>
					, other operating systems have also made significant improvements. The user interface of the desktop
					environment{' '}
					<a href="https://www.gnome.org/" target="_blank">
						Gnome
					</a>
					, which determines the interface you actually see on the, shas become very user friendly.I would
					even like to argue that it can be used by everyone nowadays, regardless of their technical
					savviness. Aside from this,{' '}
					<a href="https://en.wikipedia.org/wiki/MacOS" target="_blank">
						MacOS
					</a>{' '}
					has also evolved into an amazing operating system, even bridging the performance gap between
					MacBooks and other devices by introducing the M1 processors.
				</p>
				<p>
					<img
						src="https://news.microsoft.com/wp-content/uploads/prod/sites/58/2021/10/Wondows-11-Start.jpg"
						alt="Wondows-11-Start.jpg|700"
					/>
				</p>
				<blockquote>
					<p>Figure 1: Windows 11 desktop environment</p>
				</blockquote>
				<h2 id="my-journey">My journey</h2>
				<p>
					I&#39;ve stuck with Windows for a long time, even throughout getting my bachelor&#39;s degree. While
					I did briefly experiment with{' '}
					<a href="https://linuxmint.com/" target="_blank">
						Linux Mint
					</a>{' '}
					in 2018, the real shift began when I received my first work laptop from my employer, Quintor. It
					came with{' '}
					<a href="https://ubuntu.com/" target="_blank">
						Ubuntu
					</a>{' '}
					(Linux) by default! I decided to do some experiment with it and what I found is that the developer
					experience on Ubuntu is a lot better. Linux offers a lot more freedom in how you want to configure
					your environment. If you want to use Ubuntu but dont like how Gnome looks you can install a
					completely new desktop environment. Although I think gnome would fit most people&#39;s idea of what
					a desktop environment should provide. In the image below an example of how Ubuntu with Gnome looks
					like.
				</p>
				<p>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Ubuntu_25.04_Plucky_Puffin_Desktop_English.png"
						alt="Ubuntu_25.04_Plucky_Puffin_Desktop_English.png|700"
					/>
				</p>
				<blockquote>
					<p>Figure 2: Ubuntu desktop environment</p>
				</blockquote>
				<h2 id="diving-deeper-into-linux">Diving deeper into Linux</h2>
				<p>
					After discovering my love for Ubuntu, I grew curious about other operating systems. So, the summer
					after my initial experience with Ubuntu, I set up a dual boot. This prompts you to choose an
					operating system when starting your laptop and allowed me to choose between Debian and Ubuntu.
				</p>
				<p>
					<a href="https://www.debian.org/" target="_blank">
						Debian
					</a>{' '}
					is the underlying distribution that Ubuntu is built upon, which is why Ubuntu is referred to as a
					Debian-based distribution. This means that the original, open-source code of Debian was copied and
					then expanded upon to create Ubuntu. Beyond Debian, there are also distributions based on{' '}
					<a href="https://archlinux.org/" target="_blank">
						Arch
					</a>
					,{' '}
					<a href="https://www.fedoraproject.org/" target="_blank">
						Fedora
					</a>
					, and{' '}
					<a href="https://www.redhat.com/en" target="_blank">
						Red Hat
					</a>
					. In this diverse landscape, Debian is known for its stability and reliability, while Arch, for
					example, is known for its rapid development cycle and superior performance. Personally, I wanted a
					dependable distribution but wanted to explore one level deeper.
				</p>
				<p>
					When I switched to Debian, I also decided to experiment with a different desktop environment, aiming
					to fully commit to being productive. After some time with the{' '}
					<a href="https://i3wm.org/" target="_blank">
						I3 window manager
					</a>
					, I settled on <a href="https://regolith-desktop.com/">Regolith Desktop</a>. Regolith is a window
					manager that can be installed on either Ubuntu or Debian. It facilitates efficient window management
					primarily through keyboard shortcuts, minimizing the need for a mouse. What makes Regolith
					particularly appealing is that while it utilizes I3 under the hood, it comes with a wealth of
					pre-configured settings. This is a significant advantage, as configuring I3 from scratch can often
					be a time-consuming process. Below is an image what Regolith looks like
				</p>
				<p>
					<img
						src="https://regolith-desktop.com/images/v-tour/regolith-empty.png"
						alt="regolith-empty.png|700"
					/>
				</p>
				<blockquote>
					<p>Figure 3: Regolith desktop environment</p>
				</blockquote>
				<h2 id="trying-macos">Trying MacOS</h2>
				<p>
					During my experimentation I got an assignment to work at ING bank, where I got the choice: use a
					Windows laptop or try out a MacBook. Since MacOS is also part of the unix family, just like Linux, I
					decided to try it out. Since my experience with using Linux had been so amazing. I really liked the
					experience, it gave both the benefits of having good support like Windows, but also being able to
					use the terminal how I wanted to. The new M1 processor that was in my Macbook was also super fast! I
					did have to get used to the user experience and I found that Gnome was actually easier to get into
					than MacOS, but after a while I started to understand it and productivity started to pick up. While
					I did like my experience with MacOS and I do prefer it over windows I am still more a fan of Linux
					purely because it offers higher customisability and I am not locked into buying everything from
					Apple. Below is an image of what MacOS looks like
				</p>
				<p>
					<img
						src="https://512pixels.net/wp-content/uploads/2020/11/Big-Sur-About-This-Mac-scaled-1.jpg"
						alt="Big-Sur-About-This-Mac-scaled-1.jpg|700"
					/>
				</p>
				<blockquote>
					<p>Figure 4: MacOS desktop environment</p>
				</blockquote>
				<h2 id="problems-with-linux">Problems with Linux</h2>
				<p>
					I used this setup for about 1 to 2 years before getting a new laptop, which unfortunately started to
					run into issues with this setup. Some hardware in my new laptop did not have the proper drivers yet
					or existing drivers were not working properly. I tried reinstalling about 3 times and still the same
					issues kept occurring. The issue I ran into specifically was that my Wi-Fi was in random moments not
					turning on, sometimes it was when starting my laptop, other times once my laptop went into stand-by
					for even 1 second the Wi-Fi would just disappear and it would not be able to detect anything
					anymore. But Ubuntu and Debian keep getting updated so I thought this might be a temporary issue and
					decided to switch back to Windows until it would work, and it did! After about 5 to 6 months I
					installed Ubuntu again because I missed the experience and all the problems were gone.
				</p>
				<h2 id="my-current-setup">My current setup</h2>
				<p>
					Since I have run into these issues I have decided to use the most widely supported and used version
					of Linux which is Ubuntu. I am still hesistant to try and install another desktop environment like
					regolith, but I probably will try it again soon, luckily it should work even better when installed
					on top of ubuntu! But it will take some time to tweak everything and get up and running in a way
					that will actually improve my productivity. The important thing to acknowledge with using Linux,
					especially if you do decide to start tweaking your system is that, linux is free if you do not value
					your own time.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					While I do not necessarily say everyone should try to install Debian and play around with different
					desktop environments I do encourage everyone to at least try base Ubuntu. It is very user friendly
					and with all the problems and bugs that windows 11 has been running into lately I would like to
					argue that it is even more stable than Windows at this point. The only problem might be that some
					software is not as easy to install, but often the app store installed on ubuntu can be used to find
					an open-source replacement for it. So don&#39;t be shy and try it out!
				</p>
			</>
		),
	},
	{
		id: 24,
		title: 'ZenuNet: An easy way to create your own neural network',
		description:
			'ZenuNet is an application to learn all about neural networks. It uses algorithms written in Javascript by me to train simple neural networks models. If you are experienced in AI or a complete beginner, this application is for you! Be sure to check it out!',
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Product],
		keywords: ['neural network', 'machine learning', 'deep learning', 'ai', 'artificial intelligence'],
		date: '2025-04-18',
		link: '/blogs/zenunet',
		content: (
			<>
				<p>
					AI and neural networks are everywhere, but actually creating one yourself is still out of reach for
					most people. It usually means you need to know how to code or use expensive tools. I wanted to
					change that.
				</p>
				<p>
					ZenuwNet is a web app that lets you build and train your own neural network model without any
					programming skills.
				</p>
				<a href="https://zenunet.nl" target="_blank" rel="noreferrer">
					Check it out here
				</a>
				<h2 id="building-neural-networks-without-code-meet-zenuwnet">
					Building Neural Networks Without Code: Meet ZenuwNet
				</h2>
				<p>
					AI and neural networks are everywhere, but actually creating one yourself is still out of reach for
					most people. It usually means you need to know how to code or use expensive tools. I wanted to
					change that.
				</p>
				<p>
					ZenuwNet is a web app that lets you build and train your own neural network model without any
					programming skills.
				</p>
				<h2 id="creating-your-first-model">Creating your first model</h2>
				<p>
					In my previous blog post, I explained how neural networks work and which concepts are important to
					understand them. I’ve implemented all those ideas into this app. Creating your own neural network is
					pretty simple. Just follow these steps:
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
				<p>Inside ZenuwNet there are two main things to keep in mind: Datasets and Models.</p>
				<h3 id="datasets">Datasets</h3>
				<p>
					Datasets represent the training data. You can start by choosing one of the example datasets. Once
					you get the hang of it, you can even add your own.
				</p>
				<p>A dataset has:</p>
				<ul>
					<li>
						<p>
							Input features: these are the values that describe each row of data. For example, in the
							simple cat vs dog dataset, the features are weight and size of each animal
						</p>
					</li>
					<li>
						<p>
							Output classes: these are the categories each row belongs to. For the same dataset, it’s
							either “cat” or “dog”
						</p>
					</li>
					<li>
						<p>
							Total rows: the number of entries your dataset contains. In the cat vs dog example, it’s the
							number of animals that were measured and labeled
						</p>
					</li>
				</ul>
				<h3 id="models">Models</h3>
				<p>
					Models are the actual neural networks. You create a model based on a dataset. The input and output
					neurons are automatically set based on the dataset, but you can customize a few other things:
				</p>
				<ul>
					<li>
						<p>
							Number of hidden layers: how many layers the data passes through before a decision is made.
							For most problems, one hidden layer is enough
						</p>
					</li>
					<li>
						<p>
							Neurons per layer: how many neurons each layer has. A good rule of thumb is to have at least
							as many neurons as input features
						</p>
					</li>
					<li>
						<p>
							Activation function: this decides how the neuron values are scaled. It plays an important
							role in keeping the model stable during training
						</p>
					</li>
				</ul>
				<p>
					While training, the model also logs extra data like loss after each training iteration, accuracy,
					and a confusion matrix. You can view all of this on the analyse page to see how the training
					progressed.
				</p>
				<h2 id="future-plans">Future plans</h2>
				<p>
					Right now, the app only supports basic neural networks that use linear transformations. Here&#39;s
					what I want to add next:
				</p>
				<ul>
					<li>
						<p>More advanced model progression so you can build more complex networks as you learn</p>
					</li>
					<li>
						<p>
							Support for different layer types like convolution, dropout, and maybe even recurrent layers
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
		),
	},
	{
		id: 23,
		title: 'Neural Networks: A Beginner’s Guide 🧠',
		description:
			'Neural networks have become more and more important as of recent times. But how do they work? In this blog post I will try to explain it in a way that technical and non-technical people will understand',
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['neural networks', 'machine learning', 'deep learning', 'ai', 'artificial intelligence'],
		date: '2025-02-28',
		link: '/blogs/neural-networks',
		content: (
			<>
				<p>
					With the rise of AI, the concept of neural networks in computer science has grown significantly. But
					how do they actually work?
				</p>
				<p>
					Well, they’re quite simple at their core. However, when you put a lot of simple things together,
					they can start to seem overwhelming.
				</p>
				<h3 id="-the-first-neural-network-">
					<strong>The First Neural Network</strong>
				</h3>
				<p>
					The first neural network in IT was theorized by{' '}
					<a href="https://en.wikipedia.org/wiki/Frank_Rosenblatt" target="_blank">
						Frank Rosenblatt
					</a>
					. He wrote a book about the{' '}
					<a href="https://en.wikipedia.org/wiki/Perceptron" target="_blank">
						perceptron
					</a>{' '}
					functions which describes a simple neural network with a single layer of neurons that could learn to
					recognize basic shapes. It works as will be explain more in the next chapter by feeding in some
					input values and adjusting the weights of these inputs based on the errors it makes. In 1957, he
					even conducted experiments and managed to achieve basic shape detection in images. This was done by
					implementing the same kind of base logic that modern neural networks use. But with only a few
					neurons and a few layers, due to the limited computational power available at the time.
				</p>
				<p>
					This was the big challenge back then. Immense computational power for that time period was required
					to train such a model. But look at where we are today processors have evolved from a few transistors
					to{' '}
					<a href="https://en.wikipedia.org/wiki/Blackwell_(microarchitecture)" target="_blank">
						billions of them
					</a>
					. A budget phone today has more computational power than the computers that sent people to the moon.
				</p>
				<h3 id="-how-does-a-neural-network-work-">
					<strong>How Does a Neural Network Work?</strong>
				</h3>
				<p>
					As mentioned before, a neural network is fundamentally simple. It takes in input values performs
					some multiplication on these input values and gets an output value. For example let’s say we want to
					differentiate between a dog and a cat. The input features in this case could be observable
					characteristics like the number of legs, size, and weight.
				</p>
				<p>
					The neural network receives a lot of data about what is has to predict or classify; in this instance
					it is trained with many examples of cats and dogs, each described by their features (e.g., 4 legs,
					5kg, 45cm long). Initially, the network assigns random values to the weights, which describe how
					strong these features are taken into account for the output of the neural network. At first, the
					predictions will be wrong, but the network learns by adjusting these weights based on its errors and
					using some loss function to calculate a value to add or subtract from the weights.
				</p>
				<p>
					This process continues across all training examples until the network starts to recognize patterns.
					Some features, like the number of legs, may turn out to be less useful (since both cats and dogs
					have four), while others, like the weight-to-size ratio, could be more important. The network
					automatically assigns more importance to relevant features.
				</p>
				<p>
					Finally the network will output a value lets say in our example a value between 0 and 1 where 0 is a
					cat and 1 is a dog. The network will output a value based on the weights it has learned during
					training. This output value is the most important for calculating the adjustment value of the
					weights by the loss function. This is done by comparing the output value of the model to the
					expected value for instance when you give data about a dog and the model predicts it is a cat, you
					can adjust the weights that next time it gets similar features it will predict it is a dog.
				</p>
				<p>
					This is a simplified explanation, but it illustrates the core concept. There’s a lot more math
					behind how the network updates its weights this process is called backpropagation. If you’re
					interested in the details, search for{' '}
					<a href="https://en.wikipedia.org/wiki/Backpropagation" target="_blank">
						&quot;backpropagation&quot;
					</a>{' '}
					to learn more.
				</p>
				<h3 id="-ai-terms-">
					<strong>AI Terms</strong>
				</h3>
				<p>Now that we’ve covered the basics, let’s go over some key terms used in neural networks:</p>
				<ul>
					<li>
						<p>
							<strong>Input:</strong>
						</p>
						<ul>
							<li>
								<p>
									<strong>Input layer</strong>: This is the first layer of the network, where raw data
									is fed into the model. In our example, this includes the characteristics of an
									animal. In image classification, each pixel could be an input feature.
								</p>
							</li>
							<li>
								<p>
									<strong>Input feature</strong>: A piece of information used to make predictions or
									classifications.
								</p>
							</li>
							<li>
								<p>
									<strong>Training data:</strong> data that is used to define what features mean what
									class
								</p>
							</li>
							<li>
								<p>
									<strong>Test data:</strong> data to verify that the model makes accurate predictions
									after training, this is a separate dataset to prevent the model becoming to
									specialised on the training data
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
									<strong>Hidden layer</strong>: This is the intermediate layer where input values
									undergo transformations. The network applies mathematical operations to extract
									patterns and insights from the raw data.
								</p>
							</li>
							<li>
								<p>
									<strong>Weights</strong>: The values used to multiply input features, determining
									their importance. Weights are adjusted during training to improve accuracy.
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
									<strong>Output layer</strong>: This is the final layer that produces the network’s
									prediction or classification. Based on the transformed data from the hidden layers,
									it delivers the final result.
								</p>
							</li>
							<li>
								<p>
									<strong>Activation function</strong>: A function applied to outputs to help shape
									predictions, such as scaling values between 0 and 1.
								</p>
							</li>
							<li>
								<p>
									<strong>Class:</strong> Which value is the final output and what does it mean, in
									the example given the classes would be cat and dog
								</p>
							</li>
							<li>
								<p>
									<strong>Loss function:</strong> A function that calculates the difference between
									the predicted output and the actual output. This difference is used to adjust the
									weights.
								</p>
							</li>
						</ul>
					</li>
				</ul>
				<p>
					<img
						src="/assets/images/blogs/neural-networks/simple_neural_network.jpg"
						alt="Simple Neural Network"
					/>
				</p>
				<h3 id="-what-can-be-done-">
					<strong>What Can Be Done?</strong>
				</h3>
				<p>
					After reading this blog, you hopefully have a better understanding of neural networks and how they
					classify data. Even if you’re not a programmer, you might now feel more comfortable discussing the
					basics with others who work with AI.
				</p>
				<p>
					For those who do want to experiment, Python is a great starting point. With libraries like
					TensorFlow or PyTorch, you can build simple models and train them on datasets from platforms like
					Kaggle. Many beginner-friendly tutorials are available to guide you through the process step by
					step.
				</p>
				<p>
					Whether you just want to understand neural networks better or start experimenting with code, this
					knowledge gives you a solid foundation to explore further.
				</p>
				<h3 id="-conclusion-">
					<strong>Conclusion</strong>
				</h3>
				<p>
					I hope this blog has made neural networks easier to understand and has sparked your interest in
					training one yourself. This technology is set to revolutionize industries in the coming years, and
					understanding the fundamentals will help you grasp what is and isn’t possible. Now go out there and
					impress people with your new techy vocabulary!
				</p>
			</>
		),
	},
	{
		id: 22,
		title: 'How the internet works 🌐',
		description:
			'In this blog post, I will try to summarize how a packet is sent and received and highlight some interesting facts about networking.',
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['networking', 'internet', 'packet', 'routing', 'ip address'],
		date: '2025-02-11',
		link: '/blogs/how-the-internet-works',
		content: (
			<>
				<p>
					Recently, I finished my third semester at Politechnika Warszawska. During this semester, one of my
					courses covered how computer networks function, and I found it very interesting. So, in this blog
					post, I will try to summarize how a packet is sent and received and highlight some interesting facts
					about networking.
				</p>
				<h2 id="osi-model">OSI Model</h2>
				<p>
					The{' '}
					<a href="https://en.wikipedia.org/wiki/OSI_model" target="_blank">
						OSI model
					</a>{' '}
					describes the different layers involved in communication. The{' '}
					<a href="https://en.wikipedia.org/wiki/Internet_protocol_suite" target="_blank">
						TCP/IP model
					</a>{' '}
					also explains this but in a more simplified manner. For this blog post, I will focus on:
				</p>
				<ul>
					<li>
						<p>The Physical Layer</p>
					</li>
					<li>
						<p>The Data Link Layer</p>
					</li>
					<li>
						<p>The Network Layer</p>
					</li>
					<li>
						<p>The Transport Layer</p>
					</li>
				</ul>
				<h2 id="initial-sending">Initial Sending</h2>
				<p>
					When you try to visit a website, your device first needs to determine its IP address. This is done
					using a{' '}
					<a href="https://en.wikipedia.org/wiki/Domain_Name_System" target="_blank">
						Domain Name System (DNS)
					</a>{' '}
					server. A DNS server is a system that holds a large database of human-readable domain names like{' '}
					<code>google.com</code> and <code>amazon.com</code> and maps them to their respective IP addresses.
				</p>
				<h3 id="how-is-the-dns-server-found-">How Is the DNS Server Found?</h3>
				<p>
					Your device is typically configured with a default DNS server. Common examples include{' '}
					<strong>1.1.1.1</strong> for{' '}
					<a href="https://en.wikipedia.org/wiki/Cloudflare" target="_blank">
						Cloudflare&#39;s
					</a>{' '}
					DNS server and <strong>8.8.8.8</strong> for Google&#39;s DNS server. If a device does not have a DNS
					server manually set, it often receives one automatically from the network’s DHCP server.
				</p>
				<h3 id="how-does-the-request-reach-the-dns-server-">How Does the Request Reach the DNS Server?</h3>
				<p>
					Before even reaching the DNS server, the request must pass through multiple layers of the OSI model:
				</p>
				<ol>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Application_layer" target="_blank">
								Application Layer:
							</a>{' '}
							Your browser generates the request.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Transport_layer" target="_blank">
								Transport Layer:
							</a>{' '}
							The request is wrapped in a protocol, typically UDP or TCP.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Network_layer" target="_blank">
								Network Layer:
							</a>{' '}
							The request is assigned an IP header with source and destination addresses.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Data_link_layer" target="_blank">
								Data Link &amp; Physical Layers:
							</a>{' '}
							The request is encoded into bits and transmitted over a physical medium (wired or wireless).
						</p>
					</li>
				</ol>
				<p>
					Once transmitted, the request travels through various routers. Each router examines the destination
					IP address and forwards the request toward the next router until it eventually reaches the DNS
					server. The DNS server then processes the request and sends back the corresponding IP address. But
					how does the response reach the sender?
				</p>
				<h2 id="sending-a-response">Sending a Response</h2>
				<p>Each request packet contains additional information in its headers, including:</p>
				<ul>
					<li>
						<p>
							<strong>Source IP Address:</strong> The address of the sender’s device.
						</p>
					</li>
					<li>
						<p>
							<strong>Destination IP Address:</strong> The address of the DNS server.
						</p>
					</li>
				</ul>
				<p>
					When the DNS server sends back the response, it swaps these addresses, ensuring the data reaches the
					original sender.
				</p>
				<h2 id="protocols">Protocols</h2>
				<p>
					Data transmission can have different priorities, such as speed or reliability. There are two primary
					transport protocols:
				</p>
				<ul>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/User_Datagram_Protocol" target="_blank">
								UDP (User Datagram Protocol):
							</a>{' '}
							Sends data in a continuous stream without waiting for acknowledgment. This makes it fast but
							unreliable since packets may be lost in transit. It is ideal for applications like video
							streaming or voice calls, where occasional packet loss (milliseconds of missing data) is
							negligible.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol" target="_blank">
								TCP (Transmission Control Protocol):
							</a>{' '}
							Ensures reliable data delivery by sending packets one at a time and waiting for
							acknowledgment from the receiver before sending the next packet. If a packet is lost, it is
							retransmitted. This is useful for web browsing, file transfers, and applications where data
							integrity is crucial.
						</p>
					</li>
				</ul>
				<h2 id="routing-protocols">Routing Protocols</h2>
				<p>
					Routing protocols determine the best path for a packet to reach its destination. While I won’t go
					into detail in this blog post, it’s worth mentioning that there are multiple routing protocols, each
					with its own advantages in terms of efficiency, redundancy, and scalability.
				</p>
				<h2 id="ip-addresses">IP Addresses</h2>
				<p>
					IP addresses can be either <strong>local</strong> or <strong>global</strong>:
				</p>
				<ul>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Private_network" target="_blank">
								Local IP addresses
							</a>{' '}
							are used within private networks, such as your home or office (LAN – Local Area Network).
						</p>
					</li>
					<li>
						<p>
							<strong>Global IP addresses</strong> are unique and assigned to devices on the public
							internet.
						</p>
					</li>
				</ul>
				<p>
					Since a home or office network often has multiple devices but only one public-facing IP address, a
					router uses <strong>Network Address Translation (NAT)</strong> to manage traffic. NAT allows
					multiple devices to share a single public IP address while keeping their internal local IPs
					separate.
				</p>
				<h3 id="how-are-ip-addresses-assigned-">How Are IP Addresses Assigned?</h3>
				<p>
					IP addresses are automatically assigned by a{' '}
					<strong>Dynamic Host Configuration Protocol (DHCP)</strong> server. This server ensures each device
					on a network receives a unique local IP address without conflicts.
				</p>
				<h2 id="final-osi-layers">Final OSI Layers</h2>
				<p>The OSI model also describes three additional layers:</p>
				<ul>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Session_layer" target="_blank">
								Session Layer:
							</a>{' '}
							Maintains user sessions over multiple requests, ensuring continuous communication.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Presentation_layer" target="_blank">
								Presentation Layer:
							</a>{' '}
							Handles data formatting, compression, and encryption for safe and efficient transmission.
						</p>
					</li>
					<li>
						<p>
							<a href="https://en.wikipedia.org/wiki/Application_layer" target="_blank">
								Application Layer:
							</a>{' '}
							Defines standards and protocols that applications use to interact with networks.
						</p>
					</li>
				</ul>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					I hope this short summary describes in a simple and understandable way what I have learned in the
					past year and gives you a better understanding of how data is sent over the internet.
				</p>
			</>
		),
	},
	{
		id: 21,
		title: 'Getting back into studying 📚',
		description: `I have recently returned to university to pursue my master's degree after working for a three years. In this blog post, I'll share my experience and how working as a developer between my bachelor's and master's degrees has changed my perspective on studying and has made me a very motivated student.`,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['studying', 'productivity', 'learning', 'focus', 'motivation'],
		date: '2025-01-12',
		link: '/blogs/getting-back-into-studying',
		content: (
			<>
				<p>
					(Almost) everyone in the world goes to school when they are young. You go to elementary school, to
					high school, and often right after, you get into university. While some people take time before
					university to make money or travel, it is quite rare for people to work for a couple of years
					between their bachelor&#39;s and master&#39;s degrees. I think this is because people get used to
					having a salary and the comforts it provides. You are also building your career and probably
					experiencing exciting growth that you can achieve with a job requiring just a bachelor&#39;s degree.{' '}
				</p>
				<h3 id="getting-my-bachelor-s-degree">Getting my bachelor&#39;s degree</h3>
				<p>
					Most people, even if they had the intention to pursue a master&#39;s degree, end up not doing it. I
					would like to argue, however, that taking a break between your bachelor&#39;s and master&#39;s
					degrees to work and experience what working life is like can be a great way to find motivation when
					returning to studying. During my bachelor&#39;s, I struggled with finding motivation to study and
					spend time on university projects. Since I went straight from high school to university with only a
					summer break in between, it really felt like an extension of school. I was learning something more
					specialized, and yes, I liked it more since it was something I found interesting, but I still saw
					passing courses and studying as obligations rather than something I was passionate about. A lot of
					the knowledge I have attained while getting my bachelor&#39;s degree I have lost, sometimes I have
					to spend time refamiliarising myself with things that I had multiple courses about.
				</p>
				<h3 id="new-perspective-through-working">New perspective through working</h3>
				<p>
					After university, I started working right away. One big difference between work and university is
					that the effort you put in is more directly rewarded. If you work hard for a year, you are more
					likely to experience more growth be it in money or in growing towards your dream position than if
					you weren’t consistently giving your best. This tangible reward was motivating and made me want to
					become a better programmer. I started consuming all kinds of content from programmers who had become
					quite successful, and one quote stuck with me: “If you want to be great at something, you have to
					see it like a sport; the more you train, the better you become.” This perspective stuck with me, and
					I started viewing programming as something enjoyable, not just a skill but also a passion that
					contributes to my career growth.
				</p>
				<p>
					It’s not that I didn’t enjoy programming before, but I preferred playing video games or going for a
					beer with friends. Once I saw programming as something I enjoyed and that also contributed to my
					success, I started dedicating more time to it. This included being more focused at work, spending
					time on fun projects, and reading interesting articles. Of course I still spend time relaxing and
					playing some video games and having fun with friends, but I dialed it down a bit.
				</p>
				<h3 id="going-back-to-university">Going back to university</h3>
				<p>
					This mindset carried over when I returned to university for my master&#39;s, and it has made a huge
					difference. Compared to my bachelor&#39;s, I am much more motivated now to dive deeply into every
					subject. I take detailed notes so that when I encounter a problem at work requiring knowledge from a
					lecture, I can quickly retrieve it. I spend time not just learning enough to pass a test but wanting
					to understand the deeper workings of a subject. I want to know not just the facts but also why these
					facts are true and what they mean.
				</p>
				<h3 id="my-advice">My advice</h3>
				<p>
					If you have a bachelor&#39;s degree but not a master&#39;s, and you’re at a point in your life where
					big changes are still an option, I would encourage you to consider taking this step. Many companies
					are open to you working fewer hours or even quitting temporarily and returning in a couple of years.
					If you’re a good employee now, you’ll likely be a great hire again, with added knowledge and skills.
					If you’re feeling brave, you might even consider studying abroad in a different country (I chose
					Poland). It can broaden your perspective and help you develop a more global outlook.
				</p>
				<p>
					Taking a break to work between your bachelor&#39;s and master&#39;s can transform your attitude
					towards learning and help you get the most out of your studies. It’s a leap worth considering.
				</p>
			</>
		),
	},
	{
		id: 20,
		title: 'Over-Specialization in Development 🔨',
		description: `Specialization can feel like a strength, but is it always the best choice for developers? In this blog post, I'll discuss the benefits of broadening your focus and how over-specialization can limit your growth and opportunities.`,
		tags: [BlogTags.Development, BlogTags.Career],
		keywords: ['development', 'specialization', 'framework', 'tool', 'opportunities', 'growth'],
		date: '2024-12-06',
		link: '/blogs/over-specialization',
		content: (
			<>
				<p>
					The development world has changed significantly over the last few decades. The most popular tech
					stack has changed from the early days of C, through the rise of Java in the 80s and 90s, to Python
					becoming the most used language in the 2020s. As the number of developers has grown, so has the
					trend of specialization. Many developers now focus narrowly on one framework or tool. While
					businesses benefit from hiring specialists who can contribute immediately, is this always the best
					choice for developers themselves?
				</p>
				<h2 id="over-specialization">Over-Specialization</h2>
				<p>
					Specialisation is a strength. It allows you to get full control of a certain tool or framework,
					allowing you to create value more efficiently. But there's also a downside, over-specialization can
					limit your growth and opportunities. A React developer can easily learn Vue or Angular! A backend
					developer familiar with Spring can pick up Django or Flask in no time at all! Mobile developers who
					focus on Flutter can adapt to platforms like React Native or Ionic with ease!
				</p>
				<p>
					Broadening your focus can help you understand your field better, make you able to tackle more
					challenges and you can take advantage of more diverse opportunities.
				</p>
				<p>
					Even though specialization makes it easier to land specific roles, it can also limit your
					flexibility. Imagine your specialized framework or tool becoming less popular or being replaced
					altogether. If your entire career revolves around one skill, you might find it difficult to adapt
					when the market changes. By focusing only on what you know, you could miss out on roles or
					opportunities where your broader skills are just as applicable.
				</p>
				<p>
					Over-specialization can also lead to a narrow perspective. Experimenting with different frameworks
					can introduce new approaches and ideas, some of which may improve how you work with your primary
					tools. For example, a React developer who tries Svelte might discover simpler ways to handle
					components, while a backend developer learning Flask could find new methods to streamline APIs.
				</p>
				<p>
					It’s better to see yourself as a web developer, mobile developer, or backend developer, rather than
					as a specialist in one tool. This mindset opens doors and makes transitions between roles or
					technologies easier.
				</p>
				<h2 id="suggestions">Suggestions</h2>
				<p>Here are some ways I stay current and continually develop new skills:</p>
				<ul>
					<li>
						<p>
							<strong>Personal Projects</strong> I aim to create two to four personal projects every year.
							Every project must use a framework or tool I haven't used yet. These projects are not only
							fun but also push me to step out of my comfort zone and experiment with something new.
						</p>
					</li>
					<li>
						<p>
							<strong>Coding Challenges</strong> I love tackling coding challenges in programming
							languages I am unfamiliar with. For example, I am currently trying to complete the{' '}
							<em>Advent of Code</em> using a different programming language for each year. This year I
							will try Lua for the first time.
						</p>
					</li>
					<li>
						<p>
							<strong>Tutorials and Online Courses</strong> Tutorials and courses are great for getting a
							feel for new frameworks with minimal time commitment. Platforms like Udemy make it easy to
							learn at your own pace. Even a short 30 minute session every week adds up!
						</p>
					</li>
				</ul>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					Specialization has clear benefits. It allows you to work efficiently and create more stuff faster!
					But it can also trap you in a specific job market which only contains this one framework. What if
					this framework gets dropped? It is better to start seeing yourself as a frontend developer, backend
					developer, or mobile developer, rather than as a specialist in one tool. This mindset opens doors
					and makes transitions between roles or technologies easier.
				</p>
			</>
		),
	},
	{
		id: 19,
		title: 'Rebulding my personal website 🛠️',
		description: `
			Like every 1 to 2 years I recently decided to rebuild my website again using another framework. This time I chose to use Solid.js to replace my old Astro.js setup. In this blog post I will talk about my experience setting everything up and the reasons why I chose Solid.js.
		`,
		tags: [BlogTags.Development, BlogTags.Productivity],
		keywords: ['solid.js', 'astro.js', 'website', 'framework', 'rebuild'],
		date: '2024-11-24',
		link: '/blogs/rebuilding-website',
		content: (
			<>
				<p>
					I recently recreated my website in a different technology stack. I do this every 1 to 2 years as a
					mini challenge to try one of the new options that the technologies within the frontend world bring.
					This time I went from Astro.js to Solid.js.
				</p>
				<h3 id="why-solid-js">Why Solid.js</h3>
				<p>
					Solid.js is a very minimalist framework. I’ve seen many benchmarks over the years comparing the
					speeds of different frameworks, and Solid.js has always been at the top (Astro.js is also very
					highly rated). One of the benchmarks I use is this. I also encountered the problem with Astro.js
					that when problems arise, it can be difficult to find a forum post with someone who has the same
					issue. This is due to the community that works with Astro.js being smaller than frameworks like
					React.js or Vue.js.
				</p>
				<p>
					When starting with a fresh setup, you often don’t encounter big problems, so I can’t speak about
					this for Solid.js yet, but the community does seem bigger.
				</p>
				<h3 id="why-rebuilding">Why Rebuilding</h3>
				<p>
					A portfolio website is a very easy and simple project. It doesn’t require a deep understanding of a
					framework to build but just enough to be able to make some pretty cool stuff. This is why rebuilding
					your own website every now and then when you have some time is a great idea.
				</p>
				<p>
					It’s an easy sandbox environment to experiment with, the time to finish can be stretched as far as
					you want, and it will result in you being able to boast that you built your website in the newest,
					hottest, most modern stack.
				</p>
				<h3 id="lessons-learned">Lessons Learned</h3>
				<p>
					What really stood out with Solid.js this time around was how much optimization was included.
					Features like fine-grained reactivity and efficient rendering are already included automatically, so
					I didn’t have to spend extra time on enhancing performance. That alone made it feel like a step up
					from some of the other frameworks I’ve used before.
				</p>
				<p>
					Another big advantage was that Solid.js works with Vite by default. Having Vite as the default
					bundler made everything faster and easier, from setting up the project to adding plugins. Vite&#39;s
					ecosystem is quite big and makes it easy to find plugins that can enhance performance even more,
					like compressing your build files with gzip to make the files that need to be delivered to the
					client&#39;s browser just a little bit smaller.
				</p>
				<p>
					On top of that, I liked how familiar the syntax was, it’s very similar to React.js. It cost me less
					time to figure out how to do things and I could spend more time actually building.
				</p>
				<h3 id="conclusion">Conclusion</h3>
				<p>
					I think it’s good for all developers who have some free time on their hands to take these small
					challenges. They’re fun, increase your knowledge, and they give you another excuse to experiment
					with new tools in the development world. So, why not? Your future self will thank you, and your
					portfolio will look that much shinier in the process.
				</p>
			</>
		),
	},
	{
		id: 18,
		title: 'The magic of Large Language Models 🪄',
		description: `
            Large Language Models have taken the world by storm, but how do they actually work? In this blog post I will talk about the magic behind Large Language Models.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['development', 'abstraction', 'efficiency', 'cost', 'flexibility', 'performance'],
		date: '2024-11-12',
		link: '/blogs/large-language-models',
		content: (
			<>
				<p>
					Large language models, it is a very hot term right now. Since the release of ChatGPT the whole world
					has become enchanted by this technology, but how does it actually work? In this blog post I will try
					to explain how large language models work in a way that’s understandable for both technical and
					non-technical readers.
				</p>
				<h2 id="how-it-works">How It Works</h2>
				<p>
					To explain how a large language model works I will first very basically break down which steps are
					important to discuss and then go into each one in the following paragraphs. The steps that are
					important for a model are:
				</p>
				<ul>
					<li>
						<p>
							Training: The model is fed with a huge amount of text, where it learns patterns in words and
							relationships between concepts. For example, it learns how an apple seed grows into a tree
							that eventually produces more apples. By recognizing these patterns, the model can identify
							useful information later when it encounters similar content.
						</p>
					</li>
					<li>
						<p>
							Receiving input: The model takes in text from a user and converts it into a form that it can
							match with its training data.
						</p>
					</li>
					<li>
						<p>Responding to input: The model generates a response based on the user&#39;s input.</p>
					</li>
				</ul>
				<h3 id="training">Training</h3>
				<p>
					A large language model needs to be trained on a huge amount of data to be able to answer a wide
					range of questions. We want it to handle not just questions about cars but also about animals,
					fruits, cities, and more.
				</p>
				<p>
					This requires a lot of diverse data, gathered from all kinds of sources, which is then split into
					smaller parts called tokens. A token might be a sentence like &quot;Dogs are mammals,&quot; taken
					from a larger text about animals. These tokens are then converted into numerical values, because
					computers process numbers much more efficiently than text. These values are called vectors, which
					represent points in a multi-dimensional space. This sounds more complicated than it is, you can
					think about it as a row in an excel sheet where each column is a number in the vector and each row
					is a separate vector. A vector is just a combination of multiple numbers.
				</p>
				<h3 id="encoding">Encoding</h3>
				<p>
					When we give input to a language model, like “Explain how an apple grows on a tree,” it’s in human
					readable text. But computers are better with numbers, so encoding converts this input into numerical
					data that the model can process efficiently.
				</p>
				<h3 id="pattern-matching">Pattern matching</h3>
				<p>
					Once the input is converted to vectors (combinations of numbers), the model looks for patterns in
					these vectors to understand the context of the question. For example, it identifies the relationship
					between &quot;apple,&quot; &quot;grows,&quot; and &quot;tree.&quot; Then, based on similar patterns
					it has seen before, the model matches the question with relevant content from its training. If the
					model was trained on a book about growing fruits, it can pull knowledge from that to respond to the
					user.
				</p>
				<h3 id="decoding-">Decoding</h3>
				<p>
					The model’s response is initially generated as numerical data, which is better for computational
					purposes. But humans aren&#39;t great at reading long strings of numbers, so decoding converts this
					output back into readable text.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					This is a simplified look at how a large language model works, but it covers the basics. This
					incredible technology has transformed our world, giving everyone access to a personal assistant that
					knows a lot about all kinds of topics! While it’s not perfect, it’s excellent for simple tasks or
					for sharing information it’s been trained on.
				</p>
			</>
		),
	},
	{
		id: 17,
		title: 'Google Chrome tips & tricks 🔎',
		description: `
            Are you using Google Chrome for browsing the web? In this blog post I will show you some tips and tricks that will help you get the most out of your browsing experience
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle],
		keywords: ['chrome', 'tips', 'tricks', 'browser'],
		date: '2024-11-08',
		link: '/blogs/chrome-tips',
		content: (
			<>
				<p>
					Google Chrome is a widely used tool, the most used browser even. So with the power of deduction I
					can say that you, the reader, probably use it as well. But did you know Google Chrome also provides
					many easy to use shortcuts that could increase your productivity greatly?
				</p>
				<h2 id="vision">Vision</h2>
				<p>
					I&#39;ve already written a blog in the past about my view on shortcuts and that I think it&#39;s
					useful to read into which shortcuts exist for the tools you use on a daily basis, you can read about
					it <a href="https://vonkprogramming.nl/blogs/small-efficiencies/">here</a>. To summarise my previous
					blog every shortcut you know that saves you a little bit of time, can add up to a lot of time in the
					long run. Especially if you know many!
				</p>
				<h2 id="shortcuts">Shortcuts</h2>
				<p>
					What if you could navigate, manage tabs, and search through pages without even using your mouse?
					Chrome’s shortcuts enable you to interact with your browser via the keyboard in a much faster way.
					Mastering these can add up to minutes saved each day, which may seem small but accumulates over the
					long run.
				</p>
				<p>Below, I’ve put together a list of some of the most practical Chrome shortcuts:</p>
				<table>
					<thead>
						<tr>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<strong>Shortcut</strong>
							</td>
							<td>
								<strong>Explanation</strong>
							</td>
						</tr>
						<tr>
							<td>Ctrl + T</td>
							<td>Open new tab</td>
						</tr>
						<tr>
							<td>Ctrl + Shift + T</td>
							<td>Reopen most recently closed tab</td>
						</tr>
						<tr>
							<td>Ctrl + W</td>
							<td>Close tab</td>
						</tr>
						<tr>
							<td>Ctrl + Tab</td>
							<td>Go to next tab</td>
						</tr>
						<tr>
							<td>Ctrl + Shift + Tab</td>
							<td>Go to previous tab</td>
						</tr>
						<tr>
							<td>Ctrl + L</td>
							<td>Focus navigation bar</td>
						</tr>
						<tr>
							<td>Ctrl + R</td>
							<td>Reload page</td>
						</tr>
						<tr>
							<td>Ctrl + P</td>
							<td>Print</td>
						</tr>
						<tr>
							<td>Ctrl + 1,2,3,...</td>
							<td>Open specified tab</td>
						</tr>
						<tr>
							<td>Ctrl + N</td>
							<td>Open new window</td>
						</tr>
						<tr>
							<td>Ctrl + Shift + N</td>
							<td>Open new incognito window</td>
						</tr>
						<tr>
							<td>Ctrl + Shift + W</td>
							<td>Close current window</td>
						</tr>
						<tr>
							<td>Ctrl + F</td>
							<td>Search in current page</td>
						</tr>
						<tr>
							<td>Ctrl + H</td>
							<td>Open current history</td>
						</tr>
						<tr>
							<td>Home</td>
							<td>Go to start of page</td>
						</tr>
						<tr>
							<td>End</td>
							<td>Go to end of page</td>
						</tr>
					</tbody>
				</table>
				<h2 id="why-learn-these-shortcuts-">Why Learn These Shortcuts?</h2>
				<p>
					When you’re familiar with Chrome’s shortcuts, you’ll notice how naturally you can flow through your
					browser. Switching tabs, reopening accidentally closed ones, or quickly accessing your history
					becomes second nature, leaving you free to concentrate on your work.
				</p>
				<h2 id="one-step-further-advanced-">One step further (advanced)</h2>
				<p>
					The shortcuts that are offered by default already give all the tools needed for navigating and
					manipulating tabs and windows, but if you want to go one step further I recommend downloading the
					Google Chrome extension <a href="https://vimium.github.io/">Vimium</a> . This tool is not for the
					light hearted however and I would only recommend using this for people with advanced knowledge of
					interacting with computer like developers.
				</p>
				<p>
					Vimium offers the user a way to interact with the whole web page using the keyboard, for instance
					the character <code>f</code> transforms the web page and shows a two character label on each
					clickable element. These two characters can then be entered on the keyboard to click on this
					element.
				</p>
				<p>
					Vimium offers this and many more useful features if you want to completely stop using your mouse
					when interacting with your browser.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					This blog post shows one of the many examples of shortcuts for a tool that you probably use every
					day, spending some time on getting to know them and practising so they become second nature can
					increase your efficiency greatly!
				</p>
			</>
		),
	},
	{
		id: 16,
		title: 'Unlocking the Full Power of Version Control 🚀',
		description: `
            Version control is a powerful tool that can help you manage your codebase more effectively. In this blog post, I'll discuss some advanced version control techniques that can help you unlock the full power of version control and take your development workflow to the next level.
        `,
		tags: [BlogTags.Development, BlogTags.Productivity],
		keywords: ['development', 'version control', 'git', 'github', 'bitbucket', 'gitlab'],
		date: '2024-10-12',
		link: '/blogs/version-control',
		content: (
			<>
				<p>
					Version control is a tool that most developers use, but are we really using it to its full
					potential? It&#39;s not just about tracking changes. It&#39;s about having the power to turn back
					time when something breaks, or even rewriting history when needed.
				</p>
				<h2 id="the-basics">The Basics</h2>
				<p>
					At its core, version control is about creating a new version with every change. It’s not like saving
					your entire codebase all over again, it’s more efficient. It only saves the differences, making it
					super easy to roll back when things go wrong. This works amazing when trying to fix breaking changes
					or when you deleted an important file on accident.
				</p>
				<p>
					Another great strength of version control is the ability to collaborate on projects. Multiple people
					can work on the same project simultaneously without interfering with each others work. If you&#39;re
					working on different files, or even different parts of the same file, version control can merge the
					changes without overwriting any of your colleagues changes.
				</p>
				<h2 id="commit-messages-matter-">Commit Messages Matter!</h2>
				<p>
					When it comes to commits, it is important to be descriptive. A good commit message is like a little
					note to your future self or your collaborators. Instead of &quot;fixed bug,&quot; try
					&quot;fix(authentication): off-by-one error in user authentication.&quot; Trust me, your future self
					will thank you when you’re digging through a commit history trying to figure out what happened
					months ago.
				</p>
				<h2 id="naming-branches-like-a-pro">Naming Branches Like a Pro</h2>
				<p>
					Branch names are just as important. A clear branch name tells anyone looking at your project what’s
					going on. Is it a new feature? A bug fix? A refactor? Something like{' '}
					<code>feature/add-user-auth</code> or
					<code>bugfix/fix-login-error</code> is way more helpful than <code>stuff</code> or <code>wip</code>.
					It also makes it easier to organize and review code, especially in larger projects.
				</p>
				<h2 id="leveling-up-your-git-skills">Leveling Up Your Git Skills</h2>
				<p>
					After learning the basics of git there is still a lot of advantages to be had. There are more
					advanced topics that can still impact your efficiency with version control.
				</p>
				<ol>
					<li>
						<p>
							Rebasing vs merging, for example. If you&#39;re building a small feature, merging is often
							fine. It keeps everything neat, with a clear picture of what happened. But if you want every
							commit to show up on the main branch, or need a cleaner history, rebasing might be a better
							fit.
						</p>
					</li>
					<li>
						<p>
							Amending a commit is the process of adding some changes to the previous commit, this can be
							very helpful when you forgot to add something small to the previous commit and you do not
							want to make a whole new commit, this can be done by using <code>git commit --amend</code>
						</p>
					</li>
					<li>
						<p>
							Resetting some of the last commit, most people know how to use <code>git reset --hard</code>{' '}
							to reset to the last commit that was pushed to the remote repository but{' '}
							<code>git reset HEAD\~1</code> can be used to travel back one commit. This might be useful
							when you want to change something small in the last commit.
						</p>
					</li>
					<li>
						<p>
							If you want to clean up your commit history, maybe squash some commits together or even
							rename them,
							<code>git rebase -i</code> can work wonders. It is one of the most powerful tools to rewrite
							the history of your project, if you know how to use it.
						</p>
					</li>
					<li>
						<p>
							Stashing changes can be very helpful if you do not want to make a commit yet. It is a tool
							that is very easy to use but I see many people not using it, it is quite simple, if you want
							to move to another branch but not take your current changes with you just use{' '}
							<code>git stash</code> and all your changes will be stored in your stash, then after
							checking out the other branch and returning these changes can be redone by using
							<code>git stash --apply</code>
						</p>
					</li>
					<li>
						<p>Many many more</p>
					</li>
				</ol>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					By understanding the key concepts, you&#39;ll not only avoid a lot of common issues, but you&#39;ll
					also be using version control the way it’s meant to be used efficiently, cleanly, and with a plan.
					Once you get a good handle on it, don&#39;t be afraid to continue your learning process and
					understand the more advanced features, it will save you a lot of time in the long run.
				</p>
			</>
		),
	},
	{
		id: 15,
		title: 'The power of boredom 🤯',
		description: `
            Have you ever noticed that you come up with the best ideas when you are bored? In this blog post I will talk about the power of boredom and how you can use it to your advantage.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Productivity],
		keywords: ['boredom', 'productivity', 'creativity', 'motivation'],
		date: '2024-09-21',
		link: '/blogs/being-bored',
		content: (
			<>
				<p>
					Being bored doesn’t feel good, but with a smartphone in hand and endless ways to combat it, boredom
					has become a rarity. We can scroll through social media, watch videos on YouTube, or read the news.
					These are all convenient ways to avoid feeling bored. But is this actually a good thing?
				</p>
				<h3 id="the-benefits-of-being-bored">The Benefits of Being Bored</h3>
				<p>
					It might not feel great to be bored, but two amazing things happen when you allow yourself to be
					bored: you have time to think and be creative. Some of the greatest ideas in the world have come
					from moments of boredom. Boredom also creates motivation to finally pick up the tasks that you’ve
					been avoiding, like doing the dishes, cleaning the house, or finally picking up that book you’ve
					been meaning to finish.
				</p>
				<h3 id="accepting-boredom">Accepting Boredom</h3>
				<p>
					It&#39;s beneficial to be bored sometimes. Putting your phone away for a few hours when you have
					nothing to do and simply sitting with your thoughts might seem like wasting time at first. However,
					you&#39;ll likely find yourself doing something productive. And the best part? You’ll enjoy it
					because it’s a meaningful way to combat boredom.
				</p>
				<h3 id="combating-boredom-with-productive-activities">Combating Boredom with Productive Activities</h3>
				<p>
					This blog isn’t necessarily in favour of boredom. Rather, it’s about realising that fighting boredom
					with mindless scrolling or watching yet another random YouTube video isn’t the best solution.
					Instead, filling that time with something useful, something that engages your mind or helps you
					accomplish a task. It can lead to great things.
				</p>
				<h3 id="conclusion">Conclusion</h3>
				<p>
					I’ve already started to embrace this idea. Sometimes, I just sit and allow myself to be bored for a
					while. I’ll place my phone somewhere out of reach and live in my mind for a bit. This often gives
					creativity or motivation to tackle tasks I’ve been putting off. It’s a simple shift, but it can make
					a huge difference.
				</p>
			</>
		),
	},
	{
		id: 14,
		title: 'Connected world 🌐',
		description: `
            In today's interconnected world, having a strong network is as crucial as being skilled, as connections can open doors to opportunities that talent alone might not. By leveraging both local and digital networks, you can enhance your professional reach and position yourself for greater success.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['network', 'connections', 'local network', 'connections', 'value of connections'],
		date: '2024-08-31',
		link: '/blogs/connected-world',
		content: (
			<>
				<p>
					In today&#39;s interconnected world, having a strong network is more important than ever. Whether
					you&#39;re an entrepreneur looking to grow your business, search for a job and trying to land your
					dream role, or simply someone with a groundbreaking idea, connections can open doors that might
					otherwise remain closed. Social media like LinkedIn have revolutionized the way we expand our
					networks, allowing us to reach more people. However, it&#39;s important to remember that even
					without these digital tools, we&#39;re often more connected than we realize.
				</p>
				<h2 id="using-your-local-network">Using your local network</h2>
				<p>
					Many people underestimate the reach of their own local network. It&#39;s easy to forget just how
					many people are within arm&#39;s reach. You also don&#39;t just have access to the people you know
					directly. If your message resonates, it could ripple through your contacts to their connections, and
					beyond.
				</p>
				<p>
					Think about it, most people have direct access to their family, friends, coworkers, people they meet
					through hobbies, and old classmates. If you have something that captures the interest of these
					people your outreach can quickly grow. When each person shares your messges with just a small amount
					of people you could already reach hundreds, if not thousands, of potential supporters, clients, or
					partners.
				</p>
				<h2 id="being-connected-versus-being-good">Being connected versus being good</h2>
				<p>
					In a perfect world, the best person for the job would always have the easiest time getting the job.
					But the reality is often different. There are two main reasons for this disconnect.
				</p>
				<p>
					<strong>Firstly, human nature plays a role.</strong> Despite our best efforts to be rational and
					objective, we&#39;re emotional beings. We naturally prefer people we like, trust, and have had
					positive experiences with. Let&#39;s be honest, wouldn&#39;t you prefer to collaborate with someone
					you&#39;ve worked with before and enjoyed working with? Most of us would.
				</p>
				<p>
					<strong>
						Secondly, it&#39;s not just about the quality of work, but also about fitting into the team.
					</strong>{' '}
					A person might be incredibly skilled, but if they don’t fit well into the team, it can create
					challenges. When someone is already known and liked by one or some members of the team, there&#39;s
					a level of confidence that they will integrate well, making the decision to hire or collaborate with
					them much easier.
				</p>
				<p>
					These points highlight that being well-connected can be just as important as being good at what you
					do. Of course, the ideal scenario is to be great in both areas.
				</p>
				<h2 id="the-value-of-connections">The value of connections</h2>
				<p>
					Having a broad network of people who like you and the work you do is a significant asset. But how do
					you maintain and expand a network? The answer might be simpler than you think.
				</p>
				<p>
					One of the most effective ways to meet new people is by attending events. Whether it&#39;s a
					conference, a workshop, or a social gathering organized by your company, these events are full of
					opportunities to connect and meet new people. These environments are ideal for both entrepreneurs
					and professionals in the business world.
				</p>
				<p>
					<strong>For entrepreneurs,</strong> attending business events can be a goldmine for networking.
					These events are filled with potential clients, business partners, and even investors. It’s a
					numbers game in the end and by meeting enough people, you increase your chances of finding those who
					are a good fit for your business.
				</p>
				<p>
					<strong>For professionals working within a company,</strong> participating in social events or
					business wide meetings can be beneficial. Not only does it expand your internal network, but it can
					also enhance your work performance. Knowing people from different sections or levels of the company
					can improve communication and productivity.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					Humans are inherently social creatures, and throughout history, connections have played a vital role
					in personal and professional success. It might be disheartening to acknowledge, but sometimes being
					well-liked can be more advantageous than being highly skilled. However, imagine the possibilities if
					you can achieve both. By building strong relationships and continuously honing your skills, you can
					position yourself for success.
				</p>
				<p>
					So, start growing your network today, both online and offline. You never know which connection might
					be the one that sets you up for success.
				</p>
			</>
		),
	},
	{
		id: 13,
		title: 'Moving to Poland 🌍',
		description: `
            In this blog post I will describe my experience with moving from the Netherlands to Poland. I will describe the challenges I faced and how I tackled them and how I think someone else could tackle them just the same.
        `,
		tags: [BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['poland', 'life', 'work', 'move', 'netherlands', 'life advice'],
		date: '2024-08-10',
		link: '/blogs/moving-to-poland',
		content: (
			<>
				<p>
					From 2020 to 2023 I worked as a software developer and enjoyed my work a lot! I got to work on
					interesting projects for big companies, my income was sufficient to cover my expenses and I had
					great friends to hangout with on an almost daily basis. This might make you wonder, why did I choose
					to move to a different country, start studying again and give it all up!?
				</p>
				<p>
					Life is about experiencing and trying new things, and also making mistakes along the way, but I am
					convinced that people regret the things they did not try more than the mistakes they made and I have
					always had the dream of living abroad for a while.
				</p>
				<p>
					Many people are born in a country and accept that country as such an amazing place that they don't
					want to leave. I get it, I still agree that the Netherlands, which is my country of origin, is an
					amazing place to grow up and live. But my scientific brain wants proof of this and the best way to
					test this is to experience living in a country which is different to the one you were born in. In
					this blog post I will discuss my experiences moving to and living in Poland and the lessons I have
					learnt during my stay here.
				</p>
				<h2 id="moving-to-poland">Moving to Poland</h2>
				<p>
					Since I wanted to move to a country which would be decently different to the Netherlands but still
					close to home, I chose Poland. I have always had a fascination with central and eastern Europe and
					decided that Poland, a country which I already loved going to for holidays, was a good fit. In
					hindsight I didn&#39;t do a lot of research about my choice but I am happy that I made it since I
					enjoy life here now. Moving to any country will feel weird and different at the start, and feeling
					lonely at times is a guarantee.
				</p>
				<p>
					The reason that I had the courage to move to a different country alone is because I am a big
					believer in the adaptability of the human mind. Yes we do not like change and it feels very
					uncomfortable at times, but on the other hand once you throw yourself into the deep and force
					yourself to have no choice but to accept change that eventually this different way of life will
					start to feel normal. I even experienced this feeling when I moved from my hometown to Amsterdam
					after my studies. While this experience was less stressful than a whole different country. I have
					had moments in Poland where I was very close to quitting my studies and moving back home again, but
					that was a while ago now, but I think most of these feelings occur in the first 3 to 6 months of
					moving somewhere.
				</p>
				<h2 id="understanding-different-cultures">Understanding different cultures</h2>
				<p>
					After moving to Poland I noticed that the core values in most people are very similar, but there are
					also some key differences in how people and societies see the world. This of course is not a very
					groundbreaking conclusion but when experiencing it, it opens you up to the idea of challenging your
					own beliefs more and finding out that some of the things you considered as truth were mostly based
					on where you are from. This gives a new perspective that makes you able to more easily realise when
					you hold an idea based on what people around you think and not based on your own thoughts about it.
				</p>
				<p>
					Another very enriching experience with moving to a different country where you don&#39;t speak the
					language is that, you get a better understanding of how people feel in your own country that
					immigrated there. Since you know how it feels to be the outsider and not speak the language. Of
					course I am trying to learn Polish but as a person who does not speak any Slavic language it will
					take some time.
				</p>
				<p>
					By feeling like an outsider I don&#39;t mean that you are excluded from society however but more
					that in some situations it might be difficult while in your own country this would not happen for
					instance when ordering something, when trying to talk to or asking something from someone or when in
					a group of people that will start to speak a language that you do not understand. I don&#39;t feel
					sad about this though I see it more as a big motivation to try and learn the language faster, but I
					do completely understand how it might make people feel excluded and very lonely, I think everyone
					feels like this to a certain degree.
				</p>
				<h2 id="trying-new-things">Trying new things</h2>
				<p>
					I think life is about trying new things and I think having lived abroad for a while is one of the
					most enriching experiences. For me personally and most people I&#39;ve spoken to with a similar
					international adventure. I&#39;ve spoken to many people before I made the decision to move abroad
					that have lived abroad themselves during an exchange or even for multiple years for other reasons
					and they all conclusively told me that it broadens the way you view the world and makes you a more
					globalised person.
				</p>
				<p>
					I know for many people trying new things like this might seem scary and they will not dare to do it
					but I think the anxiety that is induced by making such decisions is something that you can overcome
					by exposure. I am not sure however because I, most of the time make the decision without giving it
					too much thought since I believe that with hard work and ambition any situation can be turned into a
					good situation.
				</p>
				<h2 id="how-to-feel-at-home">How to feel at home</h2>
				<p>
					In my experience when moving to new cities in the Netherlands but also when moving from Amsterdam to
					Warsaw the moment where I started to feel at home was triggered by the same things. They are all
					very logical but are often overlooked by people moving to a different city or country. These things
					for me are
				</p>
				<ul>
					<li>
						<p>
							Having a comfortable living situation: I think it is important to live somewhere that makes
							you feel comfortable and where you can retreat to after having a hard day of work or just
							when you want to relax.
						</p>
					</li>
					<li>
						<p>
							Having enough to do: longterm boredom feels horrible, it lowers your energy and it just
							feels bad. I always try to keep myself busy by at least having three things in my life which
							are, work or university, sports especially a sport where you can join a sports association
							and find friends to hangout with.
						</p>
					</li>
					<li>
						<p>
							Having friends: as mentioned above having friends is not only good to have something to do
							but are also important for those moments when you are not feeling good and want someone to
							hangout with. It might sound a bit cliche but I think having good friends is the single most
							important thing about feeling at home somewhere. A very good tip I have found to find
							friends is to join a sports association. It has consistently been my best way to meet new
							people that already have in common that you play the same sport. In Poland I have found
							friends through my waterpolo association, university and by meeting my wonderful girlfriend
							when going out.
						</p>
					</li>
				</ul>
				<h2 id="differences-in-opportunities">Differences in opportunities</h2>
				<p>
					Moving abroad is a great way to increase your opportunities on the global market as well, since you
					will meet people from different cultures and have a more broad and diverse network of people and
					businesses that you can get in contact with to try and find work or do business with. I have found
					that in some ways the world is already very connected, but in others it still is not. One thing that
					surprised me in Poland was that the job market can be tight at times, while in the Netherlands this
					is very rare. This in itself is already a business opportunity to connect people in Poland to
					companies in the Netherlands who are comfortable with their employees speaking English and working
					remotely from another country.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					Moving to another country for multiple years is not for anyone, I still think sometimes I&#39;m
					crazy for doing it. But I have become convinced that exchange programs like the Erasmus program is
					something that is recommended for anyone to try! It is only a one semester program of 4 to 6 months
					where the exchange program also grants you a certain amount of money, depending on which country you
					are from, to live and enjoy your time in the country of your choosing.
				</p>
			</>
		),
	},
	{
		id: 12,
		title: 'The degradation of code quality 📉',
		description: `
            Have you also noticed that software seems to have more and more bugs and big crashes seem to occur more often? In this blog post I will talk about the challenges that come with guaranteeing high code quality.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation],
		keywords: ['code', 'quality', 'degradation', 'agile', 'competition', 'quality assurance'],
		date: '2024-07-27',
		link: '/blogs/degradation-code-quality',
		content: (
			<>
				<p>
					Recently there was a big outage with the whole crowdstrike drama, but I think this was not one
					incident. I have noticed that over the years the quality of software has gone down a lot and I think
					there are some key mistakes that lead to these kind of problems. I think companies want to deliver
					features to fast and this has created an expectation from users to get this. This speed of
					development however has come at a cost, we have gone from quality of quantity to quantity over
					quality.
				</p>
				<p>I think the following four reason are the causes of the degradation of software</p>
				<ul>
					<li>
						<p>Agile working</p>
					</li>
					<li>
						<p>Competition</p>
					</li>
					<li>
						<p>Quality assurance</p>
					</li>
					<li>
						<p>Developer self confidence</p>
					</li>
				</ul>
				<h2 id="agile-working">Agile working</h2>
				<p>
					I think Agile working has a part to play in these problems because it creates a system where
					features are prioritised. The idea is to break up a project into small separate tasks which on their
					own provide delivarables. This causes two problems however.
				</p>
				<p>
					Firstly, getting stuck in an endless cycle of new requirements and user stories which cause the end
					product to never finish on time (or not at all). Secondly, the focus is on amount of story points
					burnt and features delivered. This causes a team to be seen as not performing well if they don&#39;t
					burn a lot of story points. This creates the insentive to rush things and not check the quality too
					much. This goes well most of the time since there are still checks and balances but the error rate
					does go up, even a decrease from 99% working code to 96% is already a 4 times increase in errors.
				</p>
				<p>
					I think Agile in it&#39;s base is not the issue here however, I think the meassuring of performance
					from a team in story points burnt is. The quality should always be checked and on release the
					development team has to be sure that nothing will break.
				</p>
				<h2 id="competition">Competition</h2>
				<p>
					The world is becoming more and more digitalised and every online product now has multiple options to
					choose from. This creates competition that might not have been there before.
				</p>
				<p>
					When the competition is pumping out features at a high speed it is a very logical thought that your
					product also should start doing this,since otherwise you will fall behind. But in my opinion there
					is no way to lose users faster than have a service that is not working. This should always be kept
					in mind.
				</p>
				<h2 id="quality-assurance">Quality assurance</h2>
				<p>
					Quality assurance experts are becoming more and more important nowadays, companies are starting to
					take notice of the problem. However in a lot of companies there is no one dedicated to this single
					task. I think having a good quality assurance expert who is only focussed on checking code from
					development teams is a must in todays world of development. A very important note to make of this
					comment is that the quality assurance expert should not write it&#39;s own features since reviewing
					your own code always happens less thoroughly.
				</p>
				<h2 id="developer-self-confidence">Developer self confidence</h2>
				<p>
					It is only logical that the business wants more and more features, it wants to beat the competition
					of course, as mentioned before. Their role is to push the development teams to try and create these
					many features. Developers saldy have a tendency to break under this pressure that the business puts
					on them and makes promises and timelines that are unachievable. This can be avoided by a simple no.
					This simple no is hard to say however because it has to be conclusively said by the whole team.
					Getting your team to unite and have a strong sense of self confidence to say no whenever the
					business asks for too much is vital. Otherwise the time per feature goes down which hurts the
					quality.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					I am afraid that this trend will continue into the future, luckily however some companies are
					switching to put more emphasis on having a culture where quality is put over quantity again. Where
					the reliablity and availability of the service is the key selling point and where they have the
					right people in place to guarantee that features that are published are of high quality and will not
					cause problems.
				</p>
			</>
		),
	},
	{
		id: 11,
		title: 'The abstraction spectrum 🌈',
		description: `
            Developers often prefer to solve all their problems using code, sometimes however using a paid service or a no code solution is a better way to solve your problem faster. In this blog post I will talk about the considerations I make when solving a problem and where I think using abstract solutions like no code are justified.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Business],
		keywords: ['development', 'abstraction', 'efficiency', 'cost', 'flexibility', 'performance'],
		date: '2024-07-20',
		link: '/blogs/abstraction-spectrum',
		content: (
			<>
				<p>
					Within development there are many levels of abstraction that can be used to create applications
					there are no-code, low-code and high-code solutions. Even high-code solutions using high-level
					programming languages can be considered abstract since they abstract away a lot of what is actually
					going on the hardware level. Making the decision which level of abstraction to use can be a
					challenge. Too abstract and you will not be flexibile, too low level and you will not be efficient,
					what is the sweet spot?
				</p>
				<h2 id="understanding-all-levels">Understanding all levels</h2>
				<p>
					I think as a developer it is important to have some experience in all levels of abstraction. This
					means as a frontend developer having experience using a content management system to create a
					website is just as important as knowing how to make a website in react. You will find out that using
					a content management system is the best solution for certain use cases. This also counts for less
					abstract levels, like understanding how the V8 engine in the chrome browser works and how your
					javascript code is translated to machine instructions. This will help to get a better understanding
					how to write the most efficient algorithms for example.
				</p>
				<h2 id="efficiency-and-cost-versus-flexibility-and-performance">
					Efficiency and cost versus flexibility and performance
				</h2>
				<p>
					Abstraction is a great way to make it easier and more time efficient to create things. Making a
					website using wordpress is way faster and more feature rich in less time. Of course the same can be
					done writing all the code yourself but it will take a lot more time and every feature has to be
					created manually. Is this trade off worth it? The best way to approach this is to start considering
					the most time efficient option like using a content management system for a website, but this can
					also be a SaaS for a piece of custom software. Will this solution fix your problem? Will it be able
					to tackle all or most potential changes? If the answer is yes it might be a good decision to go for
					the easier more abstract solution. Maybe the price tag of the service you will buy seems crazy but
					consider all the time you will have to pay a developer to create the same software and when the
					service is target build for your problem it will probably be a more feature rich and robust solution
					for a lower price. This is because a single developer or a team of developers can spent a lot of
					time on developing the service since it will service many clients.
				</p>
				<p>
					This blog is not an advertisement for these kind of services however since in a lot of cases custom
					software is necessary! For instance if a certain level of control or performance is needed or if you
					do not want to be reliant on a third party. I think the following points need to be considered to
					find out if paying for a service is the correct option:
				</p>
				<ul>
					<li>
						<p>
							Does the service offer all features that you need because if the service you are paying for
							does not offer a certain feature that you require it might take a while before they have
							time to work on it, while if you own the software yourself you can immediately start
							developing.
						</p>
					</li>
					<li>
						<p>
							Does the service offer the required performance you need? Because having unused extra
							features or no control over hosting the service yourself can offer lower performance than
							having a minimal service that is hosted on your own solution. Scaling performance also
							becomes easier and when it is self hosted however most services do offer performance
							packages, at a cost.
						</p>
					</li>
					<li>
						<p>
							Are you okay with being reliant on a third party and how important is it that this service
							always works or is in your control? If the service is very central to your organisation or
							project and the cost of developing it yourself (or paying someone else to develop it for
							you) is affordable for your company, is the added reliance worth it?
						</p>
					</li>
				</ul>
				<h2 id="the-overengineering-trap">The overengineering trap</h2>
				<p>
					Developers often avoid using no-code or low-code tools since they didn't spend hours learning how to
					develop computer programs to not use it, but I think this is a bad approach It is logical however
					that if you are trained to solve problems using code that your brain will only think of these
					options (when all you have is a hammer everything looks like a nail) Developers will also be less
					inclined to pay for a service they need for their own product if they can create it themselves for
					free using open source tools This consideration changes however when working for clients Although I
					understand the extra work and thus paid hours are nice, to give the best advice to a client you will
					also need to give them the option of using a paid service which offer fast time to production and
					might contain all the necessary features Part of being an expert in your field is giving the best
					solution for the problem and not only benefiting yourself.
				</p>
				<h2 id="how-to-find-the-best-solution-">How to find the best solution?</h2>
				<p>
					Being aware of all the possiblities that exist is very hard Often you will not know about some
					options that could help solve your problem, especially if it is a problem you have solved before.
					However there might be a new solution out there which can solve the problem more efficiently and
					cost effectively. My new preferred way of work is to ask one of the many large language models like
					chatgpt and gemini how they would solve the problem. Often they will come up with the same solution
					or a solution that I have already considered but made a conscious not to pursue. Sometimes however
					it will present a tool or way of work that is completely new for me and works a lot better.
				</p>
				<p>
					I have also found there are often hybrid solutions out there between low-code and high-code
					solutions. One good example is the content management system Strapi, which is a fully featured
					content management system that still offers all the freedom that a developer would normally get with
					developing their own solution completely.
				</p>
				<p>
					An example of this is a recent automation I have created using google services. After asking chatgpt
					it told me about Google App Script which is an amazing tool that can easily couple different google
					services together. If I did not know this I would have needed to rent a VPS somewhere and play
					around with API keys which would have been more costly in both time and money.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					It might feel wrong to use a service instead of creating your own as a developer but creating more
					robust solutions faster is even better. Using paid services for this might be the best solution.
					With this blog I am not trying to say that I am a huge fan of these paid services but I am trying to
					say that considering these options is very important.
				</p>
			</>
		),
	},
	{
		id: 10,
		title: 'The viability of monoliths 🤫',
		description: `
            Is kubernetes really the greatest invention of all time? Are AWS and Azure really going to scale infinetely? Maybe there is still a place in this world for monoliths and dedicated servers. In this blog I talk about my views on this topic and how I think that monoliths are still a viable option for a lot of companies.
        `,
		tags: [BlogTags.Development],
		keywords: ['monolith', 'cloud', 'hosting', 'cloud hosting', 'controversial'],
		date: '2024-07-13',
		link: '/blogs/viability-of-monoliths',
		content: (
			<>
				<p>
					Cloud services like AWS and Microsoft Azure are very popular nowadays and have almost completely
					taken over hosting. The complete set of tools and services they offer with the added bonus of high
					flexiblity in hosting offers a lot of benefits, but is it really the best solution for every use
					case? I would like to argue that the answer is no
				</p>
				<h2 id="over-architecting">Over architecting</h2>
				<p>
					Using multiple instances instead of one big instance is mostly because of the popularity of
					microservices. The idea of using microservices is great in splitting the logic of an application
					vertically instead of horizontally, which means that each feature and corresponding team maintains
					the whole chain from database to the client, ideally at least. In the past this used to be more
					split up. I think using microservices is great but I think it might be overdone a little. It
					introduces a lot of layers of complexity and most of the time every team gets to choose what stack
					they use. This often causes an application to become very cluttered with many different kinds of
					services using different technologies which depend on each other. There are even{' '}
					<a href="https://youtu.be/y8OnoxKotPQ?si=dQTDloEf93C7EPTV">jokes</a> about it nowadays, that to get
					a birthday from a customer you have to go through multiple services just to get this simple date
					displayed so the estimated time to develop this feature is over one year. This is an exageration of
					course but these kinds of problems are taking longer than necessary in a lot of cases.
				</p>
				<p>
					I think central services within an application should be managed by one big system, for instance
					handling database operations like a read or write, authentication and other basic operations.
				</p>
				<p>
					Another downside of this split is the added cost of running all these services atomically. Every
					service has to be managed and monitored.
				</p>
				<h2 id="over-scalability">Over scalability</h2>
				<p>
					I think the scalability that cloud providers offer is great; but how often do you really peak above
					mean load or have very low traffic on your platform. I think a combination of one big dedicated
					server which gets help from scaled instances can also offer this advantage. The advantage of this
					big dedicated server to handle mean load is that it is cheaper and you will get more control over
					your own server. Virtualising still runs on top of a hypervisor which a dedicated server does not
					need. This construction makes it so software that need kernel level drivers that are not there can
					not be installed, while they can on dedicated servers
				</p>
				<h2 id="over-specialisation">Over specialisation</h2>
				<p>
					The microservices landscape where each team works isolated on a specific number of services also
					reduces communication between different teams. Teams will be working on more isolated parts of the
					application. I think communication between teams is very important to not only have a more healthy
					social environment in a company but also to have more creativity that can be used to solve complex
					problems. Maybe a developer in another team has already fixed a similar problem that your team has
					been struggling with for weeks.
				</p>
				<h2 id="over-complication">Over complication</h2>
				<p>
					Using a scalable solution where the amount of instances can be scaled up and down also adds a new
					layer of complexity, which for a lot of companies is definetely needed, but for some is quite
					overkill. For a large scale organisation using kubernetes or similar tools is a must! But is it
					really necessary to run smaller projects in it, just a simple docker container using docker compose
					is enough for a lot of use cases in my opinion. I think we as developers get too drawn to feeling
					smart and wanting the best, most technically amazing solution, but sometimes the problem that has to
					be solved just does not require this big of a solution.
				</p>
				<h2 id="over-reliance">Over reliance</h2>
				<p>
					The best pricing and features are currently only available with the biggest companies right now,
					these are Google, Microsoft Azure and AWS. Where AWS and Microsoft Azure together control about 50%
					of this market. This raises concerns for me since this control of the market means that these
					companies have a lot of power. Sadly only one of these things can be solved by using a more
					monolithic approach which is the price. The amount of features you will have to develop yourself
					which is still a big obstacle. I do not have a solution for this problem, but I am concerned what
					this growing power of these companies will do.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					After reading the above you will probably get the idea that I am not a fan of all these modern
					auto-scaling and orhcestration tools, but on the contrary! I think this technology is amazing and
					have also tried Google Cloud, Microsoft Azure and AWS. I think it is good that these services and
					their competitors have changed the landscape of how servers run. My criticism is that you should not
					overdo it. I think it is not the perfect solution for every problem.
				</p>
				<p>
					I think reducing some of the servers to a dedicated server which can handle mean load, can reduce
					some of the complexity of a system and reduce running costs. If you don&#39;t believe me even
					companies like Amazon for hosting Amazon Prime has shifted to doing this, YES the same Amazon that
					tries to sell us AWS.
				</p>
			</>
		),
	},
	{
		id: 9,
		title: 'Why is context important? 🤔',
		description: `
            Development teams are often too focussed on the products they work on directly and don't stop to consider who the users are and where the product fits in to the bigger system and what stacks are used that are closely related to the product. In this blog post I will talk about how I deal with understanding this context and how I am often able to communicate with team that work in completely different stacks.
        `,
		tags: [BlogTags.Development, BlogTags.Business, BlogTags.Career],
		keywords: ['development', 'career', 'stack', 'improvement'],
		date: '2024-07-05',
		link: '/blogs/connected-stacks',
		content: (
			<>
				<p>
					It often happens that within larger organisations teams work on a product where the team itself is
					not aware of the placement of this product in the bigger system. They sometimes don&#39;t even know
					who the users are! In my opinion this is a big problem and should be avoided.
				</p>
				<p>
					This problem mainly consists of two separate problems which are &quot;The developer does not know
					who their user is&quot; and &quot;The developer does not know which systems the product interacts
					with and how they work&quot;. I think both of these problems need to be tackled but how?
				</p>
				<h2 id="what-is-the-context-">What is the context?</h2>
				<p>
					I think when a new person joins a team, bigger emphasis should be given to what the context of the
					products is that the team is currently working on. For instance where does it place itself in the
					system, what is it's input and what is it's output and what are the goals that this product is
					trying to achieve. This is very important to start understanding why certain logical decisions are
					made in the code. If this is not clear confusion might arise about what certain parts are meant to
					do. These questions sometimes cannot even be answered by most of the team members which is a shame.
				</p>
				<p>
					Another vital point which I think could be solved in a single onboarding meeting is who the end
					users are. I understand that meeting users will not be possible in many use cases but illustrating a
					basic profile of a user of the product is always helpful. Is it an internal co worker within the
					company or is it another companies' users or is the product meant for clients? This still applies
					when discussing non-client facing applications since the clients of these systems, which are other
					systems most of the time, still have certain characteristics and goals they aim to achieve. These
					are all important aspects that a team should know.
				</p>
				<h2 id="understanding-all-connected-stacks">Understanding all connected stacks</h2>
				<p>
					In my professional career I have often tried to not only get a good grasp of the stack that is used
					within my team, but also to get an understanding of the parts that our team does not necessarily
					have to modify but still interacts with. This could be a certain API written in another programming
					language, a pipeline that runs every release or a certain tool that is used during development. I
					think getting a certain basic understanding of how these tools work and how they are built is
					important. This goes further than just getting some slides about the overview, in my opinion when
					you interact with an API using Java it is very important to also at least know how a basic API is
					made using Java.
				</p>
				<p>
					The reason why I think getting a moderate understanding of all the connecting stacks is that
					communication between teams benefits greatly from developers who have certain overlap in their
					skills. If all developers would take the time to get a basic understanding of all the stacks
					connected to their teams products solving problems, where multiple teams using different stacks have
					to interact a lot, would become a lot more streamlined. It would also reduce the amount of meetings
					where teams talk past each other instead of with each other. An example of this is when frontend
					developers communicate with backend developers and backend developers start talking about threads.
					Threads are not often used within frontend development and this can cause a lot of confusion when
					the frontend development team has no experience with the backend stack that connects to their
					frontend.
				</p>
				<h2 id="enriching-experience">Enriching experience</h2>
				<p>
					Aside from the aforementioned advantages of greater efficiency in communication it also grants the
					opportunity to broaden your skillset with new tools and languages which means that eventually you
					might even get good enough at the connected stack that you can make it your main stack if you would
					want to. Many developers find it difficult to find time outside of their work to get experience
					using other stacks than they themselves use, well this is the perfect opportunity! Your work will
					probably even be excited when you propose to spend some time getting a better understanding of the
					API that your team&#39;s product calls every day.
				</p>
				<p>
					It also makes your work more diverse since you will be able to tackle different challenges using
					different languages and tools.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					While it might seem scary at first to learn new things, just imagine that you felt like this as well
					when first learning the stack you are currently using. I think every developer can benefit greatly
					from getting a basic understanding of all the connecting systems to the product they are working on.
				</p>
				<p>
					Creating a simple hello world application in a new language is always quite simple and straight to
					the point, have you already tried making one in all the languages that are contained in the stacks
					that are connected to your product?
				</p>
			</>
		),
	},
	{
		id: 8,
		title: 'The love of programming ❤️',
		description: `
            Do you have the feeling that programming full time as a job has reduced your appreciation of programming? Or are you just curious about the opinions of another lover of programming. In this blog I discuss why I love programming and how I will keep loving it.
        `,
		tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Innovation],
		keywords: ['development', 'innovation', 'love', 'learning'],
		date: '2024-06-28',
		link: '/blogs/love-programming',
		content: (
			<>
				<p>
					Do you still remember that first piece of code you wrote? I do, I was making a simple HTML website
					but it was so cool to see my work turn into an actual website. From that point on every new thing I
					learnt was another eye opening moment to the possiblities that programming offers nowadays. The
					amount of things there is to learn is almost endless and every time you learn something new you
					become better at what you do and a more valuable developer as a result of this. Isn&#39;t that
					amazing, you can do what you love and the more you do it the more you will probably get paid for it.
					Sadly not everyone thinks of it like this, but they did at one point. What happened?
				</p>
				<p>
					Most developers start programming out of their own interest. The first couple of projects that you
					code are amazing but somewhere down the line when it has to be done 8 hours a day as a job it might
					start to feel like a grind, which is sad since the concept is still so fun. How to fix this?
				</p>
				<h2 id="fun-programming">Fun programming</h2>
				<p>
					I like to spend time on my own projects where I build things using tools that might not even be
					useful for my job. I find some tool online or read about a new programming language that has become
					popular and start thinking &quot;what would be cool to make with this?&quot; and then I start
					building somewhere that week. The goal should not be to learn something from it, but just to feed
					the curiosity of how it works. These kind of programming projects are in my opinion super important
					to keep programming fun and even though the goal is not to learn new skills, you will anyway.
				</p>
				<p>
					This way I have also build up a decent portfolio on my Github with all different kinds of
					programming languages.
				</p>
				<h2 id="finding-what-to-make">Finding what to make</h2>
				<p>
					There are a lot of different projects to throw yourself into and it depends greatly on where your
					interests lie what kind of projects are fun. From my own experience the following list contains the
					majority of small projects I have made over the year
				</p>
				<ul>
					<li>
						<p>Trying a new programming language, just try to make something easy</p>
					</li>
					<li>
						<p>
							Trying a new framework, just make a small demo and compare it to how you would normally make
							it
						</p>
					</li>
					<li>
						<p>Contributing to an open source project you have used for a while</p>
					</li>
					<li>
						<p>Trying to create a simple proof of concept of a cool idea you had</p>
					</li>
					<li>
						<p>Doing an online programming challenge, advent of code is a great place to start</p>
					</li>
					<li>
						<p>Creating a tool to increase your productivity</p>
					</li>
				</ul>
				<p>
					These items can also be combined but I think at least one of these topics should give enough
					inspiration to start a new project for fun today!
				</p>
				<h2 id="sustainability">Sustainability</h2>
				<p>
					As discussed in one of my other blogs about{' '}
					<a href="https://www.amplenote.com/notes/a3815736-0c4b-11ef-844c-a6f126245c9e">
						learning sustainably
					</a>
					, I think another very important aspect about these projects is to not overdo it. If you have a very
					busy period where you cannot work on your project for 1 to 2 weeks or maybe a month that is fine.
					But I think everyone who says they do not have time at all over a long period of time is a liar.
					There is always an hour on sunday evening or somewhere else in the week where you could work on such
					projects. It is not about grinding it is about an adventure to feed your curiosity. So one hour
					every two weeks consistently is also fine, if that is enough to feed your curiosity of course.
				</p>
				<h2 id="why-">Why?</h2>
				<p>
					Doing projects that are in programming languages that you do not use professionally or using tools
					that your place of work will never touch might feel like a waste of time to some people, but I think
					doing these fun projects is never a waste of time. Even if you disregard all the skills you will
					gain, a very valuable advantage is that it might reignite your love of programming. It will make the
					enjoyment of writing code increase and make those long days feel a lot shorter, maybe because you
					are looking forward to coding your own project again, but most likely because programming will be
					fun again.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					Having fun projects is very important to not lose the love of programming, we all loved programming
					once and I find it sad to see this love fading in some developers. I think the best cure to losing
					this love is to make something you actually love and can call your own. It might not be a crazy
					advantages application, but a lot of pride can still be gained from something small that might be
					written in a crazy programming language or using a weird tool.
				</p>
			</>
		),
	},
	{
		id: 7,
		title: 'The benefit of believing in yourself 🤩',
		description: `
            Why are all these motivational guru's so successful in conveying their message. I have also had a period in my life where I was susceptible to these kind of voices and what I have noticed; Is that it works very well in achieving more in life! It might sound weird because a lot of the time they also try to sell you some weird course which does not work. But the effect of believing that you will be able to achieve greatness is a very powerful 
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['motivation', 'productivity', 'hard work', 'believe in yourself'],
		date: '2024-06-15',
		link: '/blogs/believe-yourself',
		content: (
			<>
				<p>
					Why are all these motivational guru&#39;s so successful in conveying their message. I have also had
					a period in my life where I was susceptible to these kind of voices and what I have noticed; Is that
					it works very well in achieving more in life! It might sound weird because a lot of the time they
					also try to sell you some weird course which does not work. But the effect of believing that you
					will be able to achieve greatness is a very powerful force.
				</p>
				<p>
					Of course there has to be some caveats put to this. You shouldn&#39;t start thinking you are more
					important than other people. Everyone has their own struggles and goals. But having the believe that
					you will achieve your own goals absolutely helps a lot with being motivated and finding the energy.
				</p>
				<h2 id="motivational-speaking">Motivational speaking</h2>
				<p>
					As said in the first chapter, motivational speaking works great by giving you extra motivation
					because you believe you can achieve your goals. However what can often be observed is that this
					effect is temporary. The belief in that you can be great has to be internal.
				</p>
				<p>
					I am a firm believer in what most motivational speakers try to convey which is, if you work hard to
					achieve your goals, you will most likely succeed. It might not be soon, but in the end it will
					happen. My rationalisation to this is that the best in the world have both talent and hard work, but
					people who are great can often have just average educational achievements but work very hard to be
					where they are at. This might sound like I&#39;m throwing shade their way, but this is actually very
					motivating! It means that with dedicated hard work it is possible. So to believe you can achieve
					this only means that you need to believe that you are at least slightly above average and very hard
					working.
				</p>
				<h2 id="finding-motivation">Finding motivation</h2>
				<p>
					Being hardworking can be very tiring and you can lose motivation. It is important to at first like
					what you are doing or where you are going. This is just how you look at things, most things have fun
					aspects. Secondly the power of boredom is often underestimated. If you don&#39;t feel like
					continuing just take a break, but NO PHONES. Once you are resting for 5-10 minutes you will start to
					feel bored, which is good. This boredom will transform into wanting to do something and you
					continuing your task.
				</p>
				<h2 id="selective-delusion">Selective delusion</h2>
				<p>
					Sometimes it is good to be slightly delusional. The &quot;sometimes&quot; is an important word here.
					For instance when going into a test knowing that you have studied well. Creating the delusion that
					you are going to easily pass and that this test is nothing to you, helps reducing anxiety which can
					often lead to a improved performance.
				</p>
				<p>
					In my opinion these kind of delusional thoughts can be very helpful. I think we&#39;ve all noticed
					the difference in performance when having the absolute belief that something is easy for you and
					when something is hard.
				</p>
				<p>
					This delusion can also help with self consciousness. Believing you are very important can help in
					certain situations.
				</p>
				<p>
					This strategy has to be used very selectively however, for instance believing the test will be easy
					before studying might result in spending less time studying. When interacting with people it can
					often result in them thinking you have a superiority complex, which is not good. After all everyone
					was created equal.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					Believing in yourself is a very powerful tool. It might sometimes feel like you are fooling yourself
					but if it leads to positive effects, why not!? I think having a belief in yourself based on knowing
					that you are good enough at what you choose to do with your life and being hard working is easy.
					Everyone is above average in what they do, otherwise you need to do something else. And once you
					find this thing working hard will get you very far. I believe this counts for everyone!
				</p>
				<p>So to end on, believe in yourself, even though it might sometimes seem or be delusional.</p>
			</>
		),
	},
	{
		id: 6,
		title: 'Divide & Conquer 🪖',
		description: `
            It happens to all of us that we encounter something that seems so complex that it cannot be grasped by our brains. But often after looking at the problem for a while and breaking it up into smaller pieces it becomes manageable. In this blog post I will discuss how I use the divide and conquer principle in my coding journey.
        `,
		tags: [BlogTags.Productivity, BlogTags.Development],
		keywords: ['productivity', 'programming', 'problem solving', 'code splitting'],
		date: '2024-06-07',
		link: '/blogs/divide-conquer',
		content: (
			<>
				<p>
					If you attended school this will sound very familiar to you. You learn about something new that
					sounds so complex that you cannot even imagine how you will ever wrap your head around it. But once
					you start slowly learning all the details you realise that the complex topic, is not that complex
					once you learn all the details. This is true for knowledge, computer systems and almost all things.
				</p>
				<p>
					Being able to break big problems down into smaller sub problems is very important to start solving
					them and breaking down how a complex system of systems work in each component is crucial to
					understanding what environment you are working in.
				</p>
				<h2 id="shame">Shame</h2>
				<p>
					Facing a problem which is difficult to understand can be frustrating and instill a sense of shame.
					This is very normal and most people have this feeling. It is important to know this because it makes
					it easier to accept that you do not understand it and that it is okay to not understand something.
					Because this frustration will make it more difficult. Once you have this frustration and shame
					tackled by accepting that it is a normal thing, the steps of breaking up the problem into the parts
					you do and do not understand can begin. By identifying the parts you do not understand you can ask
					targeted questions or read articles to fill in the gaps.
				</p>
				<h2 id="losing-overview">Losing overview</h2>
				<p>
					The reason that problems might seem complex is that the overview of all simple parts is not clear.
					Some information is missing which makes the whole seem difficult to understand. The best way to
					prevent this is to not try to understand the whole problem but to break it up into parts and try to
					understand each part.
				</p>
				<p>
					For instance trying to understand how authentication and authorisation of a user works needs many
					steps, but once you break it up into the steps of sending login credentials, getting the user with
					the same username from the database, comparing the result of hashing the sent password and the
					password hash stored in the database and based on this authenticate or not. It becomes quite clear
					per step what is going on. This is of course just a simple example of breaking something that can be
					considered complex into small easy to understand parts, but I have found that almost all things can
					be approached like this.
				</p>
				<p>
					For bigger problems where the overview is hard to grasp it helps to map it out. I love drawing
					simple diagrams to get a new visual representation of what the thing is I am trying to solve, and
					very often after I am done drawing it, it already seems very clear! Of course not every problem
					requires a diagram to be drawn, but the step of creating a visual representation of the problem
					helps to get this overview, even a simple drawing using a pencil and paper helps.
				</p>
				<h2 id="how-to-go-from-complex-to-simple">How to go from complex to simple</h2>
				<p>
					Sometimes it is hard to find where to start when breaking down a problem. In these instances
					it&#39;s good to start at the part of the problem that is understood and expanding this part. Most
					of the time while writing the logic for the parts that you do understand, the other parts that come
					before and after also become clear.
				</p>
				<p>
					If this is not possible, you can try to find a way to break up the problem into sub problems which
					can be more easily solved. I know that sometimes it feels like this is not possible, but often when
					a problem is analysed enough ways to split the problem will appear.
				</p>
				<p>
					Within programming all programs can be boiled down to a large systems of very basic operations. The
					complexity comes from the combination of many of these operations. Understanding this and not losing
					hope when something seems too complex is very important. It happens to all of us that something
					seems impossible to understand. The solutions that need to be created to fix a problem are also
					built on combining basic operations to create basic methods to create more and more complexity.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					We have all experienced the thought that we will never understand a concept or architecture. It is a
					normal feeling. The most important thing is to keep your head cool and slowly start breaking up the
					problem by creating a nice overview of the problem or splitting it up into nice sub problems which
					can be tackled. When combining these steps almost all problems can be fixed!
				</p>
			</>
		),
	},
	{
		id: 5,
		title: 'The right tool for the job 🔨',
		description: `
            Finding the right tool for the job can be difficult. Finding the optimal tool is even more difficult. In this blog post I go into my views on finding the right tool and what are important things to take into account.
        `,
		tags: [BlogTags.Development, BlogTags.Innovation, BlogTags.Productivity],
		keywords: ['tools', 'growth', 'efficiency', 'ubuntu', 'development', 'golang'],
		date: '2024-05-24',
		link: '/blogs/finding-tools',
		content: (
			<>
				<p>
					Within the world of development a lot of people have very strong opinions about what is the best
					tool or programming language. You&#39;ll hear them say things like &quot;the best code editor is
					X&quot;, or &quot;the best programming language is Y&quot;. I think this is a wrong approach to
					finding the best tool. Every tool be it a programming language, code editor, operating system, etc;
					has it&#39;s own ups and downsides. There is no tool that solves all problems in a good way. I have
					tried a lot of tools over the years to find out if I can find this impossible ideal tool. But
					eventually I found out that there is no ideal tool. In this article I will go into the aspects of
					choosing tools.
				</p>
				<h2 id="development-time-versus-optimal-choices">Development time versus optimal choices</h2>
				<p>
					Nowadays a lot of tools are built using tools that are to say it nicely, less than optimal. But the
					decision to use these is mostly time or money based. Developing an optimal tool will cost more time,
					be more difficult and overall cost more money. This can be best observed in most modern desktop
					application being developed in Electron or something similar. For people who do not know what
					electron is, it is a tool where a program can be written using the tools you would use to make a
					website. The resulting program will be a headless browser that runs this web application. The big
					advantage of this is that the developers that worked on the website can also easily work on the
					desktop application and that it is cross platform by default. A lot of code can even be reused.
					However chrome is known to be resource hungry and when running multiple of these desktop
					applications, your computer will quickly run out of available memory. But developing this entire
					tool in Java or C# would cost a lot more time and would require a company to hire new developers for
					this purpose, if they did not have these skills in house yet.
				</p>
				<p>
					Another example is since the ease of use of cloud hosting that was introduced by amazon web
					services, microsoft azure and others. It is now often the case that spending time and resources on
					creating an efficient service is more expensive than a service that can be made quickly but is not
					optimal and can be cheaply run on a server in the cloud. Since the cost of running a server is now
					so low, bad code is insentivised.
				</p>
				<h2 id="simple-problems-do-not-need-complex-solutions">
					Simple problems do not need complex solutions
				</h2>
				<p>
					While the above paragraph goes into a rise in non-optimal lower performance solutions. There are
					situations where the opposite applies. If the requirements don&#39;t require high performance, just
					do it the simple way. A lot of developers like building complex systems, but when someone asks for a
					solution to a simple problem. It is easier for both the developer and the person asking for his or
					her problem to be solved to have a simple solution. A simple portfolio website or webshop does not
					need to be built using react with a complex server using java. Wordpress or shopify will do the job
					and reduce the development time greatly. Since the performance difference and added flexibilty are
					not necessary. They should not be used (unless in the future it will be a requirement).
				</p>
				<p>
					However don&#39;t get stuck trying to fix all your solution using these easy to use tools, sometimes
					a problem does require a more complex, more performant tool to get the job done.
				</p>
				<h2 id="getting-stuck-in-your-comfort-zone">Getting stuck in your comfort zone</h2>
				<p>
					Since every problem has a specific set of tools which are best to fix the problem, efficiency or
					quality-wise. Many people choose one tool and keep using it for years, specialising and becoming
					very proficient in fixing that problem. Being familiar with a tool is great and can give many
					benefits, but don&#39;t get stuck using non-optimal tools just because you have been using it for a
					long time, times change and new ways to solve problems get released every day.
				</p>
				<p>
					Experimenting is important to finding the best tool. I also used notepad++ for development purposes
					longer than I am comfortable admitting, but the moment I switched to a more fully fledged
					developement environment I realised how many hours I had wasted using a tool with none of the
					niceties that these tools did have. It&#39;s the same with using linux for me. While I am not saying
					Linux is better than Windows, because it depends. I am saying that trying more than one operating
					system in your journey is good to see what other flavours are out there. You also don&#39;t taste
					one kind of food and because it is nice keep eating that for the rest of your life.
				</p>
				<p>
					What I am trying to say with this is that at your work it is good to specialise in a tool and become
					very good at it, but you should also spend some time experimenting with other tools that solve the
					same problem or diversify even more and learn how to solve other kinds of problems as well.
				</p>
				<h2 id="don-t-be-afraid-to-start-over">Don&#39;t be afraid to start over</h2>
				<p>
					Something else I have witnessed a couple of times and have also been guilty of myself is choosing a
					tool because it is exciting new technology and you want to try it. This is a good way to think, but
					when doing this be aware that it might turn out that the tool cannot solve the problem at all or not
					in a correct way. If this happens, that is fine, lessons were learnt. But do not be afraid to scrap
					the project and rebuild it using something that you know will work (not neccessarily that one tool
					you always use but something you are more comfortable with).
				</p>
				<p>
					I know it feels very bad to throw hard work into the trash, but it is part of the process. No one
					likes to do it, but it has to be done.
				</p>
				<h2 id="finding-the-right-tool">Finding the right tool</h2>
				<p>
					In programming solutions finding the right tool comes down to some aspects of the requirements. What
					is the complexity, what is the time and money constraint, what knowledge do the developers currently
					have. These are all the important ways to select a tool. I have tried many programming languages
					over the years and in my experience the following languages have the following advantages
				</p>
				<ul>
					<li>
						<p>
							Javascript: easy-to-use and very fast to ship to production, it is also very versatile when
							creating user applications. It can also be used to create server.
						</p>
					</li>
					<li>
						<p>
							Python: easy-to-use and very fast to ship to production, it is very versatile in creating
							scripts, machine learning setups and other things.
						</p>
					</li>
					<li>
						<p>
							C: more challenging to use and longer time to ship to production, but the performance is
							very high. If there is a problem which needs to run fast, this is the best choice
						</p>
					</li>
					<li>
						<p>
							Go: a good middle ground between easier languages and performant languages, it is fairly
							easy to use and for most cases has more than enough performance to solve the problem.
						</p>
					</li>
					<li>
						<p>
							Java: a solid language that has been around for a long time, if an advanced application has
							to be built and run for years without change, this might be the best solution
						</p>
					</li>
				</ul>
				<p>
					There are of course other languages but I think these would still fall into the category of being
					similar to the advantages listed here, for instance Rust has similar advantages to C. C# has similar
					advantages to Java, etc.
				</p>
				<p>
					These examples show that for different situations different solutions can be good and no solution is
					the best for all problems.
				</p>
				<h2 id="conclusion">Conclusion</h2>
				<p>
					While I think nowadays a lot of solutions are built less than optimal because getting more compute
					power using cloud hosting is cheap, this is fine for most cases. However it is good to keep thinking
					if the problem does not require a more performant solution and not always choose the same tool just
					because it is comfortable.
				</p>
			</>
		),
	},
	{
		id: 4,
		title: 'Taking notes, a real superpower 🦸',
		description: `
            Also experience forgetfulness every now and then? There is a solution! A superpower that is available to everyone, taking notes. In this blog post I will discuss how taking notes has changed my ability to remember.
        `,
		tags: [BlogTags.Productivity, BlogTags.Lifestyle],
		keywords: ['notes', 'code', 'superpower', 'productivity', 'second brain'],
		date: '2024-05-17',
		link: '/blogs/taking-notes',
		content: (
			<>
				<p>
					The human brain is very good at being creative, but not as good at remembering things. I have
					personally experienced this many times, when forgetting you should have done something or when not
					being able to recollect something important someone has told you. There is a solution however!
					Making notes. Writing things down on paper or in a note taking software permanently stores what you
					want. This can be very useful when learning new things or when there is a lot of things that you
					have to keep track off.
				</p>
				<p>
					Not only does writing stuff down store what you write down on paper or in storage of a device, but
					it also helps you remember things better. My personal favourite way is to summarise what I have
					learnt or have to remember in my own words since when reading them I do not only remember what I
					wrote down but also what I was thinking when I wrote things down.
				</p>
				<h2 id="never-forgetting-anything">Never forgetting anything</h2>
				<p>
					The most obvious but still very valuable advantage of taking a lot of notes is that you will not be
					able to forget anything. When someone tells you something and you write it down, you will not forget
					it. We have all experienced that we forgot something someone asked us to do earlier in the day or
					that someone who we asked to do something forget about it, if everyone would take notes this would
					happen a lot less. All this while taking notes is quite easy and non time consuming.
				</p>
				<h2 id="managing-thoughts">Managing thoughts</h2>
				<p>
					Taking notes about creative thoughts is also a great way to not lose ideas. I think we all have
					experienced that great idea when lying in bed at night, just to wake up next morning and not being
					able to recollect it. Or knowning that you still have to do something but can&#39;t remember what
					exactly.
				</p>
				<p>
					This can all be helped by writing down what you need to do in a nice to do list. This also counts
					for things you do not necessarily have to do today, tomorrow or this week. It might be an idea you
					want to pursue somewhere down the line, like a course you want to follow once you have the time, a
					person you want to reconnect with after your busy period at work is over or a new skill you want to
					attain.
				</p>
				<p>
					Writing these things down is a great way to get more out of your time since in the time spent doing
					nothing you can take a look at your to do list and find something that you still wanted to do. This
					however only works when you also write down fun things you want to pursue like researching a new
					technology you have read about.
				</p>
				<h2 id="summarising-knowledge">Summarising knowledge</h2>
				<p>
					With all this storage space available, what to write down? In my other blog post I wrote about
					learning consistently throughout a career. Taking notes is a very important part of this.
				</p>
				<p>
					Learning new skills is great but there is not much to gain if the new knowledge is lost over time.
					Writing down small summaries of knowledge not only helps remembering stuff but also gives a nice
					overview of all the knowledge that your brain contains. It&#39;s like creating an amazing library of
					your own mind it&#39;s contents, all with an easy search filter.
				</p>
				<h2 id="note-taking-applications">Note taking applications</h2>
				<p>
					After my university was done I used to write a lot of things down on paper. The big advantage of
					writing things down is that your brain remembers things better than when typing. However in the
					longterm the amount of notes start stacking up and becoming a big mess. That is why I recommend
					using a note taking app that fits your style.
				</p>
				<p>
					Computers are a lot better at storing massive amounts of data especially text. A single flash drive
					of 128GB can store a live time of notes in text format, even free cloud storage you can get with
					most notetaking applications is more than enough for extensive note taking. Another big advantage of
					a note taking application is that your notes are stored in the cloud. You can access them anywhere
					and write notes to your library on any device and share them easily with other people.
				</p>
				<h2 id="challenges-when-taking-notes">Challenges when taking notes</h2>
				<p>
					The biggest challenge when taking notes is to keep your notes organised. This is why I am a fan of
					using software to take notes and not paper, while paper can be very organised with the right system,
					software makes it easier for me, this however is just an opinion and paper has it&#39;s own
					advantages as described before.
				</p>
				<p>
					I have personally encountered this challenge after I started using the notetaking application{' '}
					<a href="https://notion.so/">Notion</a> and after a while running into the problem that organising
					my notes was harder and harder to achieve. In Notion you can order notes hierarchically which is
					amazing to start with, but after a while I started encountering that I had notes which would fit in
					multiple hierarchies. I started creating shared hierarchies and choosing the best of the two instead
					of being able to connect them to both.
				</p>
				<p>
					After a while this mess became bigger and bigger. I am not saying Notion is not good, for other use
					cases it is great and I still use it for taking notes for my university, but for writing down my
					knowledge about programming it did not work well for me.
				</p>
				<p>
					After this I got the advice to start using <a href="https://www.amplenote.com/">Amplenote</a> which
					organises notes based on tags which can be provided to a note which makes the notes work more as a
					big collection with easily searchable tags. This worked perfectly for my usecase and keeps my notes
					very well organised.
				</p>
				<p>
					Everytime I want to find a note I can just search for the category where this note falls into and
					easily find it back.
				</p>
				<p>
					What I am trying to say with this story is not to choose Amplenote over Notion but that the concept
					of organising ones notes is very important and that finding a way that suits your note taking style
					is very important or it can get very messy after a wihle.
				</p>
				<h2 id="what-to-use">What to use</h2>
				<p>
					In the end writing notes is the most important part not how it is done. If paper is your preferred
					way of writing notes, do that! Find a way that is convenient to use for you and that you enjoy
					using. It&#39;s no use if you stop using this amazing superpower after some time because of
					inconveniencies. As long as you are writing notes you can unlock the superpower of never forgetting
					anything!
				</p>
			</>
		),
	},
	{
		id: 3,
		title: 'Small efficiencies add up',
		description: `
            Working fast and efficient is important. Doing more in less time while impressing your colleagues is amazing. I will dive into what small and easy improvements every developer can make to work more efficiently and save time in the long run which can be spent on other things (most likely more coding!)
        `,
		tags: [BlogTags.Productivity, BlogTags.Development, BlogTags.Career],
		keywords: ['efficiency', 'programming', 'value', 'developer', 'productivity'],
		date: '2024-05-11',
		link: '/blogs/small-efficiencies',
		content: (
			<>
				<p>
					Being efficient is very important as a developer. There are many tools we love because they reduce
					the amount of time that we need to ship some software to production. Think about AI coding
					assistants making you code very mundane tasks a lot faster, or pipelines which transformed having to
					publish every time you finish a new version into just writing a pipeline template once and seeing
					the magic happen! While all these tools are great a lot of programmers still do not get the maximum
					value out of the possible efficiency boosts that exist.
				</p>
				<h2 id="the-heaven-of-efficiency">The heaven of efficiency</h2>
				<p>
					Maybe some of you know the tools that are most famous for efficiency but I will describe them in
					this article anyway and give my opinion on them. The main tools which many consider to maximise
					effienciency while writing code on your own system are:
				</p>
				<ul>
					<li>
						<p>TMUX</p>
					</li>
					<li>
						<p>NEOVIM</p>
					</li>
					<li>
						<p>I3</p>
					</li>
					<li>
						<p>fuzzyfinder</p>
					</li>
				</ul>
				<p>
					These tools all seem scary at first but they offer a big efficiency boost once they are controlled.
					However in my personal opinion when starting out with finding efficiencies these are not the tools
					you should go for. This is because some of them are hard to learn and this makes them scary. I am an
					avid proponent of learning in steps and finding which efficiencies can be found in your current
					workflow or with small adjustments that are quick to learn. From the list above I think TMUX and
					fuzzyfinder still fall into this category since they can be easily used in your current environment.
					While Neovim and i3 are very good to get the maximum value out of every hour spend programming, they
					do take a lot of time to configure and learn.
				</p>
				<h2 id="easy-efficiency-wins">Easy efficiency wins</h2>
				<p>
					As described above I don&#39;t want to make this article about what is the best way to increase
					efficiency and end up changing no one&#39;s workflow since the step to change is too big. I am
					currently still in the process of learning neovim myself and am still using visual studio code as my
					daily driver.
				</p>
				<p>
					The easiest win for every developer or even every person using a computer is to learn the shortcuts
					that the programs you use often provide. Even if you are using something like Microsoft word. I have
					started doing this a while ago, when trying to learn all the visual studio code shortcuts and it has
					increased my productivity tremendously! I can now switch between tabs, open workspaces, search
					files, open projects, select everything I want and more without ever touching my mouse. My personal
					rule is to &quot;<strong>try to reach a state where I do not need my mouse</strong>&quot;.
				</p>
				<p>
					Secondly I have tried to create pipelines for my own projects. I have done this using the very easy
					to set up tool of github actions. Using this has two big benefits. One, every time you publish a new
					version you do not have to follow all the steps of publishing. But more importantly benefit two, you
					will get experience writing pipelines which can be a very valuable skill in your career.
				</p>
				<p>
					Thirdly do not be afraid to experiment. This might sound weird since in the previous text I
					described trying new things to be scary but trying scary things and deciding they are not for you is
					still valuable. A good example for me is that I have tried i3 which is a very bare and mimimal
					tiling window manager and the pure minimalism was not for me. I like to have some basic things like
					a graphical interface to manage my settings. But after trying it I did see the great value in having
					a tiling window manager where switching between windows is only a shortcut instead of cycling
					through all your windows using <code>alt + tab</code>. So I am now trying regolith and enjoying it a
					lot.
				</p>
				<h2 id="ai-assistant">AI assistant</h2>
				<p>
					Using an AI assistant when writing code has become very popular in the last years. It can greatly
					reduce the time spent on writing code. Especially when writing more redundant code or when using a
					new programming language where the syntax is still unclear. The AI assistant tools takes a hint from
					what you are writing and generates what you most likely want to write which is more than often
					correct. This increases the speed of development greatly.
				</p>
				<p>
					However in recent years there has also been some criticism with the quality of code going down and
					when learning a new language it can obstruct the learning process since the AI assistant can write
					all the code just based on comments. This mostly works in popular languages like Javascript and
					Python. I think however that investing in an AI assistant is great value since the speed of writing
					code is greatly increased by almost 100%. This makes you able to do more work in less time and only
					for a couple of euros (or dollars) per month. The time saved to the cost of the tool greatly favours
					paying for the tool.
				</p>
				<h2 id="efficiency-mindset">Efficiency mindset</h2>
				<p>
					The mindset I have for efficiency is that I am willing to take some time to improve my efficiency if
					in the long run it will save me time. This is a fine balance between a tool taking a lot of hours to
					learn but not saving a lot of time and learning a shortcut taking up no time at all but having
					massive efficiency gains. This is also why I have up till now not taken the leap to start with
					neovim since the time spent on learning the tool and actually becoming more efficienct with it is in
					my perspective very big compared to when the efficiencies will pay off. Even though visual studio
					code loves to consume all the memory my laptop has and more.
				</p>
				<p>
					The constant mindset of improving as can also be read in my other blog posts is something very
					central to my developer journey, I try to always find new ways but in a way that I can stick to
					them.
				</p>
				<h2 id="some-of-my-favourite-shortcuts">Some of my favourite shortcuts</h2>
				<p>
					As described before I <strong>love</strong> shortcuts. They make my workflow a lot more efficient.
					Some of my favourite shortcuts for visual studio code are the following
				</p>
				<ul>
					<li>
						<p>
							<code>ctrl + p</code> to open a file
						</p>
					</li>
					<li>
						<p>
							<code>ctrl + r</code> to open a project
						</p>
					</li>
					<li>
						<p>
							<code>ctrl + n</code> to open a new tab
						</p>
					</li>
					<li>
						<p>
							<code>F2</code> rename symbol
						</p>
					</li>
					<li>
						<p>
							<strong>
								<code>ctrl + p</code>
							</strong>{' '}
							to open a file
						</p>
					</li>
					<li>
						<p>
							<code>ctrl + $(number)</code> switch to workspace
						</p>
					</li>
					<li>
						<p>
							<code>alt + $(number)</code> switch to file in workspace
						</p>
					</li>
				</ul>
				<p>Many more can be found here</p>
				<ul>
					<li>
						<p>
							Linux:{' '}
							<a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">
								https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf
							</a>
						</p>
					</li>
					<li>
						<p>
							Windows:{' '}
							<a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">
								https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
							</a>
						</p>
					</li>
					<li>
						<p>
							MacOS:{' '}
							<a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">
								https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf
							</a>
						</p>
					</li>
				</ul>
			</>
		),
	},
	{
		id: 2,
		title: 'Learning sustainably',
		description: `
            Continuous learning is very important in the world of software engineering. But a pitfall a lot of people encounter is that they cannot stick to it. In this blog post I will delve into my personal journey with learning and my findings and tips.
        `,
		tags: [BlogTags.Development, BlogTags.Lifestyle, BlogTags.Career],
		keywords: ['learning', 'programming', 'projects', 'career', 'experience', 'study', 'growth'],
		date: '2024-05-07',
		link: '/blogs/learning-sustainably',
		content: (
			<>
				<p>
					Learning is one of the cornerstones of becoming a good developer. A lot of developers go to
					university first to get a bachelor&#39;s degree or master&#39;s degree where a lot of knowledge is
					acquired. But in a lot of cases after the degree is attained and a couple of years of working
					experience is achieved the learning at home, fun side projects and overall love of code reduces or
					becomes null. I have found that the way to combat this is to make learning at home sustainable. This
					means that it should stay fun, it should not feel tedious.
				</p>
				<p>
					To go a little bit into my personal journey to get to my findings, after attaining my bachelor&#39;s
					degree I started a traineeship at Quintor. This is an IT consultancy firm which taught me a lot of
					valuable lessons during and after this initial traineeship. During this traineeship and after I also
					was an avid enjoyer of watching Udemy courses. I have completed dozens of them but eventually it
					started to feel like a grind. Which is why I quit for a while. After reading into some other fun
					projects and some friends of mine starting their own business I poured myself into a personal
					project which took up almost all of my free time during more than a year (the time during corona).
					After I didn&#39;t feel like I was enjoying the process but that I just wanted it to be over. I did
					realise however that through this journey I had learnt a lot! Which was very valuable. After
					thinking a while about it and hearing views of{' '}
					<a href="https://www.youtube.com/c/theprimeagen">theprimeagen</a> I changed my way to look at
					learning new things at home. I think consistency is key! As in most things. But this also means that
					it should be sustainable. If you don&#39;t feel like working on the project, don&#39;t do it! If
					this feeling keeps on for a week, just try to work on it in small increments of time which keep it
					fun!
				</p>
				<p>
					If this story above seems familiar to you I can guarantee you that finding a way to keep learning
					fun is very important. The lessons that are learnt at home are the most valuable and fun!
				</p>
				<h2 id="benefits-of-learning-what-you-like">Benefits of learning what you like</h2>
				<p>
					Aside from spending more time studying than your colleagues, and I know it is not a race but in the
					end some extra promotions wouldn&#39;t hurt. The biggest benefit I have noticed is that you get a
					lot of experience outside of the stack that might be used at your place of work. It happens too many
					times that people only have experience in the tools they work with, and once they start looking for
					work they have a very narrow window to look in to.
				</p>
				<p>
					Another big benefit is that different tools or programming languages force you to look at problems
					in a different way. This can also help with getting a new perspective on the problems that are
					currently facing the company you currently work for. An example of this is once I started learning C
					and how pointers and data types worked, I got a better understanding of what is happening under the
					hood of the language I used for my work (javascript). I got better at optimising my code and when I
					ran into quirks of the javascript language I was more able to deduce back to the way javascript is
					compiled to find a good solution.
				</p>
				<h2 id="love-of-programming">Love of programming</h2>
				<p>
					Of course learning new skills to have more tools in the toolbox and improving your current abilities
					is great, but I initially got into programming because I liked computers. The first time I wrote a
					program was magical, and there were times where I was so stuck in all the work I had to do that I
					lost this magic a little bit. That is why I think doing fun personal project, which maybe don&#39;t
					even teach you new things but are just fun are also very very important. They keep programming fun!
					And don&#39;t we all want to love our work?
				</p>
				<h2 id="my-personal-advice">My personal advice</h2>
				<p>
					If you feel like you want to learn more but you get burned out when throwing yourself into it. Here
					is what I do.
				</p>
				<p>
					I try to always have something I can work on, be it a personal project, some coding challenge
					(advent of code is great), some course or a side hustle. I do this because once I have some spare
					time where I get bored I can pick up where I left off and put some time into it. I also try to
					rotate between the aforementioned modes of learning to keep it fresh. After doing courses for a
					while it can get boring, and I also think that a course is great to get you introduced into a
					subject but not good for maintaining or deepening the knowledge. So doing a personal project with
					the new skills you have learnt is a great idea! Sometimes when I dont feel like all of the above I
					spent my time configuring my setup some more, what linux distro do I want to try, can I improve my
					TMUX setup, is there a nice desktop environment that looks cool!
				</p>
				<p>
					Most importantly you have to find a way that keeps learning fun for you and makes you able to stick
					to it long term, rome wasn&#39;t build in a day and your programming legacy won&#39;t either. It
					takes small steps but a lot of small steps is further than you will ever get sprinting for a short
					while.
				</p>
			</>
		),
	},
	{
		id: 1,
		title: 'How to achieve code excellence',
		description: `
            What are the key principles of code excellence? What rules to adhere to and what tools to use? This blog post will delve deep into the world of writing excellent code, click read more to find out.
        `,
		tags: [BlogTags.Development, BlogTags.Productivity, BlogTags.Career],
		keywords: [
			'code quality',
			'code excellence',
			'code splitting',
			'linting',
			'testing',
			'comments',
			'never nesting',
		],
		date: '2024-04-24',
		link: '/blogs/code-excellence',
		content: (
			<>
				<p>
					Being able to solve problems is a very important part of being a developer, but we have all ran into
					the problem that when we go back to our code 2 months later it can seem quite cryptic. Unless of
					course your code is excellent!
				</p>
				<p>In this blog I will go over my tricks to keep my code readable and the quality high!</p>
				<h2 id="introduction">Introduction</h2>
				<p>In this blog I will go over the following concepts:</p>
				<ul>
					<li>
						<p>Code splitting</p>
					</li>
					<li>
						<p>Never nesting</p>
					</li>
					<li>
						<p>Variable and function names</p>
					</li>
					<li>
						<p>Linting</p>
					</li>
					<li>
						<p>Testing</p>
					</li>
					<li>
						<p>Comments</p>
					</li>
					<li>
						<p>Fix problem quick and dirty, then refactor</p>
					</li>
				</ul>
				<p>
					In the end I will go into why I think having a sustainable plan for yourself is important, since
					following all rules religiously most likely will end up having you not follow them at all anymore in
					the long-term.
				</p>
				<h3 id="code-splitting">Code splitting</h3>
				<p>
					We have all learnt initially that functions used so logic does not have to repeated, this of course
					is a very important use case for functions!
				</p>
				<p>
					However functions can also greatly increase the readability of your code. Long if statements or big
					functions can become unreadable since a lot of context has to be remembered. While splitting it up
					in small readable and rememberable chunks makes it easier to understand.
				</p>
				<p>
					This can be done for instace by changing a big if statement like
					<code>
						person.age &gt; 65 &amp;&amp; person.nationality === &#39;NL&#39; &amp;&amp; person.working ===
						true
					</code>
					into a function by moving this if statement to a function and calling it
					<code> ifEligibleForDiscount</code>. This describes what you mean to do with this functionality and
					cleans up the code block of the function.
				</p>
				<p>
					When this is done over an entire code base it can keep the code more readable especially when going
					back to it after a while since function names are often more descriptive than code.
				</p>
				<h2 id="never-nesting">Never nesting</h2>
				<p>
					Never nesting is the concept of keeping the layers within your code as low as possible. This is to
					remove the complexity of reading over what a function performs. This can be done both by early
					returns and code splitting. When too many layers are used it can be easy to lose oversight of which
					layer is currently used.
				</p>
				<p>
					Early returns are the idea of instead of using{' '}
					<code>
						if(x === true ) {'{'} some_logic {'}'}
					</code>{' '}
					using
					<code>
						if(x === false) {'{'} return {'}'} some_logic
					</code>{' '}
					which does not add an extra layer of nesting.
				</p>
				<p>
					I recommend watching the video from
					<a href="https://www.youtube.com/watch?v=CFRhGnuXG-4"> CodeAesthetic</a> to know more!
				</p>
				<h3 id="variable-and-function-names">Variable and function names</h3>
				<p>
					Naming in programming should describe what the variable will be used for or what the function should
					do. Renaming variables and functions after the program is functional is an important part of keeping
					everything nice and readable. Variable names should include their context and what they are used
					for.
				</p>
				<h3 id="linting">Linting</h3>
				<p>
					Linting is an integral part of writing qualitative code. Using tools like <code>eslint</code> for
					javascript are amazing to achieve this task. It is important however to set the right linting tools
					and not be too nice on yourself when creating the configuration of this linter. Strict rules will
					reduce the speed at which you can write code but will in the longterm create better quality of code.
				</p>
				<h3 id="comments">Comments</h3>
				<p>
					Comments are important for describing function or variables which need more context than can be
					given in a single name. If the rules above are adhered however comments should not be necessary for
					every function and can be written for more complex function. It is best practise to write comments
					for all your code, but a sustainable way if there is a time constraint is to at least write it for
					all complex functions where the context might be a little unclear later on.
				</p>
				<h3 id="fix-problem-quick-and-dirty-then-refactor">Fix problem quick and dirty, then refactor</h3>
				<p>
					This is one of my favourite rules which I apply to almost all my problems. If there is a problem it
					is not a crime to create some code in the quick and dirty way to fix the problem. However the
					problem starts to arise when after the code works the steps to make the code of high quality and
					sustainable are not taken. It is very alluring to finish quickly and call it a day but the time
					investment to improve the code by using the rules described in this blog is most of the time minimal
					and will reduce time spend decyphering later.
				</p>
				<h2 id="sustainability">Sustainability</h2>
				<p>
					I have had many points where I tried to follow all the rules when writing my code. In my perspective
					writing perfect code is very hard and time consuming and I do not think it is a sustainable goal for
					most developers. That is why I think it is an important rule to find what works and is easy to apply
					so the maximum value to time ratio can be achieved. The rules described in this document are minimal
					but they are easy to implement and thus will be easier to stick to, which in the development world
					is very important. There will be many people out there telling you how to do it better, and maybe
					they will be right. But in the end having good rules which you can stick to is the most important.
				</p>
			</>
		),
	},
];

export default blogs;
