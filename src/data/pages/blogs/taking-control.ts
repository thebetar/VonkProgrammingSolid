import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "28",
	numericId: 28,
	slug: "taking-control",
	title: "Taking back control 💪",
	description: "Reliance on big companies has become more and more of a concern as of recently, for me as well. So the last couple of months I have been looking into how to host some of the most important services for me myself. In this blog post I describe my journey into starting.",
	date: "2025-08-08",
	link: "https://vonkprogramming.nl/blogs/taking-control",
	content: `
Over the last few weeks I've been working on
self-hosting (https://en.wikipedia.org/wiki/Self-hosting_(web_services))
some of my own services using a
Raspberry Pi (https://www.raspberrypi.com/)
and have been amazed by how easy it can be.

I got inspired after reading a LinkedIn post about someone breaking
GitHub's rules (https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct)
and getting locked out of their account. For those who are not
developers this is the equivalent to losing access to your OneDrive
(or Dropbox or Google Drive) that has all your work stored on it
without being able to get access to it ever again.

While I don't want to get in to if locking this person out of
their account was fair or not; it did make me think what kind of
impact it would have if this were to happen to me. This made me look
into a way to reduce my dependency on these companies and their
policies.

What I found was that running things like workflow automations, backup
software and local network storage is quite easy to setup nowadays, I
think anyone with minimal experience using the terminal can do it.

## Reducing Dependency on Big Tech

The tools we use every day, such as Word, Excel, email, cloud storage,
and many others, have made reading, writing, storing, and sharing
information easier than ever before. But while we used to buy software
once and keep it safely on our own devices, those days are long gone.
Subscriptions have taken over, and while they make perfect business
sense by providing companies with a steady stream of income, they also
leave us dependent on their goodwill. At any moment, your access could
be revoked, not because you have done anything wrong, but simply
because you do not own the service. You are renting it.

Now, I am not saying we should all expect to wake up one day locked
out of our Google Drive (I hope that never happens), but knowing it
could happen is reason enough to prepare. That is where self-hosting
comes in. By running free, open-source software on your own hardware,
you keep control of your tools and your data. And with something as
small, cheap, and energy-efficient as a Raspberry Pi Zero 2W, there
has never been a better time to start. Even a simple setup can give
you a safe backup of your important files and reduce your reliance on
big tech companies.

[Image: Big Tech]

  Big Tech CEOs, picture taken from NOS (https://nos.nl)

## Outline

In this blog post, I'll explain how to set up a workflow automation
tool on a small, affordable, and energy-efficient device.

The workflow automation tool we'll be using is
N8N (https://n8n.io/)
, a powerful automation platform with a visual interface that lets you
build workflows by connecting different services together. It supports
a wide range of integrations, enough to cover most (if not all) of
your automation needs. N8N is also one of the most popular workflow
automation tools that offers a free, self-hosted version. So perfect
for our use case.

We will will run this tool on a Raspberry Pi Zero 2W,
one of the cheapest single-board computers available. You can find it
for around €17 at stores like
Kiwi Electronics (https://www.kiwi-electronics.com/nl/raspberry-pi-zero-2-w-10770)
. You’ll still need a microSD card, but even a 16GB or 32GB card will
be more than enough for this setup. These can often be found at
discounter stores or just general stores for less than €10.

[Image: Raspberry Pi Zero 2W]

  The Raspberry Pi Zero 2W as displayed on the website of
  Raspberry Pi (https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/)

A Raspberry Pi is essentially a tiny computer that runs quietly in the
background while consuming very little power. Think of it like a
stripped-down laptop with modest specs but far lower energy usage. It
comes in a compact form factor, making it easy to place anywhere in
your home or office.

What you’ll need:

- Raspberry Pi Zero 2W

- MicroSD card (16GB or larger)

- Power supply (Micro USB)

- Internet connection (Wi-Fi or Ethernet)

What we'll do:

- Install an operating system on the Raspberry Pi.

- Access the Raspberry Pi remotely.

- Install N8N on the Raspberry Pi using Docker.

## Advantages of using N8N

N8N is a powerful tool that allows you to automate tasks and connect
different services without writing code. It provides a visual
interface where you can create workflows by connecting various
integrations.

[Image: N8N workflow example]

  Example of a workflow in N8N, image taken from my own blog
  subscriber workflow

N8N provides easy integrations with all kinds of tools, a small list
of all of these integrations is:

- Gmail  integration to read e-mails

- Notion  integration to read and write to Notion

- Google Calendar  integration to read and write to your calendar

- E-mail  integration to send and receive e-mails (if you do not use Gmail)

- OpenAI  integration to send your data to ChatGPT and receive responses

- Discord  integration to send messages to Discord channels

- Excel  and Google Sheets  integration to read and write to spreadsheets

NOTE: For a list of all possible options click here

For instance, you could set up a simple workflow that reads your
e-mails from Gmail every hour for new e-mails containing specific
text. Those e-mails could then be sent to OpenAI to generate a summary
or pull out key details, which are then saved into an Excel sheet.

Don't worry since it is self-hosted no one will be able to access your
data unless you give them explicit permission to your local network.

Another option could be to monitor an online spreadsheet every hour.
Whenever new data is added, the workflow could create a daily summary
of the fresh entries and send it as an email notification.

NOTE: If you do not feel like reading through the whole tutorial you can skip to the conclusion by clicking here

## Step 1: Setting up the Raspberry Pi

To setup the raspberry pi you need to flash an operating system to the
SD card.

An operating system is something that describes how the hardware
should work and how you can interact with it, well-known examples are
Windows and MacOS.

To install an operating system on the Raspberry Pi take the following
steps:

- Raspberry Pi offers an easy installer that you'll need to install an operating system. This installer can be found here.

- Plug-in the SD card to the device you have downloaded the installer on

- After downloading the installer from the Raspberry Pi website and inserting the SD card, run the installer by clicking on the file that got downloaded.

- Within the installer click Choose Device here there should be an option for the Raspberry Pi Zero 2W, select it.

- After selecting the right device click Choose OS. Within the options the best operating system for this use case is Raspberry Pi OS lite which can be found under Raspberry Pi OS (other). This is a lighter version of the normal Raspberry Pi OS. Raspberry Pi OS is mainly used for the bigger brothers of the zero 2W, the raspberry pi 4 or 5.

- After selecting the right OS click Choose Storage and select the SD card you have inserted.

- After selecting these options you can proceed one step further where you will be asked if you want to customise the OS. Here you should choose to Edit settings

- Within these settings you should enable Set hostname and enter a hostname that is familiar to you

- After select the option to set a Username and Password and enter a username and password that you will remember. The Raspberry Pi will not be public facing so the values you enter can be quite simple.

- Another important step is to setup the Wi-Fi connectivity. This will be important to be able to connect to the Raspberry Pi once it is turned on.

- Next go to service and select the option to be able to SSH with password authentication.

- Close the window and click next and wait for the operating system to be flashed onto the SD card

- Congratulations your Raspberry Pi is now ready to be used! The only steps that are left is to insert the SD card into the Raspberry Pi and give it some power using a Micro USB cable.

If anything went wrong during setup don't hesitate to contact me
to figure out what went wrong.

NOTE: Step 2: Connecting to the Raspberry Pi After the Raspberry Pi has successfully booted the operating system you can connect to it via SSH. This can be done using PuTTy  on Windows or using the ssh command in the terminal when using MacOS or Linux. Using any of these tools you can use the hostname, username and password that you used during the setup of your Raspberry Pi to connect to the Raspberry Pi. This step varies a lot between different operating systems but is quite simple to perform so I suggest using ChatGPT, Gemini or a different LLM to figure out how to complete this step, you can see it as a little challenge from me. An image in the terminal how to open the SSH connection Step 3: Installing Docker You have several options for running N8N. While some methods might seem simpler if you have never used Docker  before, it is the approach recommended by both me and N8N because of its simplicity to use after installation after getting familiar with it. Docker creates an isolated environment for your N8N instance, making it straightforward to run and preventing it from interfering with the rest of your system. Once installed, Docker makes starting, stopping, and updating N8N very easy, so you spend less time maintaining it and more time using it. Another advantage is that if you later decide to run other applications on your Raspberry Pi, you can do so without hassle since Docker will already be set up and ready to handle them. Docker can be installed by running the following commands: \`\`\` # Add Docker's official GPG key: sudo apt update sudo apt install ca-certificates curl sudo install - m 0755 -d /etc/apt/keyrings sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc sudo chmod a+r /etc/apt/keyrings/docker.asc # Add the repository to Apt sources: echo \\ "deb [arch=$(dpkg --print-architecture) \\ signed-by=/etc/apt/keyrings/docker.asc] \\ https://download.docker.com/linux/debian \\ $(./etc/os-release && echo "$VERSION_CODENAME") stable" | \\ sudo tee /etc/apt/sources.list.d/docker.list d/docker. list > /dev/null sudo apt update # Install all the Docker dependencies sudo apt install docker-ce docker-ce- cli containerd.io \\ docker-buildx-plugin docker-compose- plugin \`\`\` You can find all the possible things you can run using Docker at Docker Hub

## Step 4: Starting the N8N instance

You can start the N8N instance with some easy Docker commands. I
recommend however to write a small configuration file so you can
easily call that every time to start the program by just running a
single command.

Create a folder on the Raspberry Pi to store the N8N
application data. Within this folder create a file named
docker-compose.yml. This file will be used to store the
configuration. After this open the file and paste the following code
inside of it.

\`\`\`
services:

image: docker.n8n.io/n8nio/n8n

environment:

- N8N_SECURE_COOKIE=false

ports:

- "5678:5678"

volumes:

- n8n_data:/home/node/.n8n

restart: always

volumes:

n8n_data:

external: false
\`\`\`

After creating this configuration file open the folder that you put
this configuration file in using the terminal and run
docker compose up -d which will then spin up the N8N
instance making it accessible on the port 5678.

## Step 5: Setting up first workflow automation

Now everything is ready for use! So we can close the connection with
the Raspberry Pi and open the N8N application that it hosts. Open up a
browser (like Google Chrome) and enter the hostname with
:5678 behind it. For instance if you used the default
hostname raspberrypi.local you should enter
raspberrypi.local:5678 to open your N8N environment.

[Image: n8n website]

The interface you will see after creating your account

Once it opens create an account for your local N8N environment. After
this you will immediately be guided to N8N and can start creating your
first workflow by pressing the Create Workflow button at
the top right.

Now you are ready to start creating workflows using N8N. There are
many possibilities, you can create a trigger based on time that check
some specific data and sends you a message based on some condition, or
you can create a webhook that triggers when you receive and e-mail and
notifies you when it contains specific keywords. All these kinds of
use cases are possible within N8N.

Some interesting links to get started with your first workflow
automations:

- Basic introduction course provided by N8N, click here

- Advanced introduction course provided by N8N, click here

- Gmail to Slack automation, click here

## Conclusion

By following these steps, you can set up your first self-hosted
service! While the steps might seem complex and daunting at first. The
Raspberry Pi is now running and it has Docker installed! This means
that you can use it for all kinds of other tasks. Tasks like making
backups of your Cloud storage, because what if Google gets hacked and
loses all yours pictures!? Or an e-mail backup service for if you
suddenly lose access to all your e-mails. These all seem like low
probability events but they do happen every now and then, and with
just a few steps you can be protected against this and it will only
cost you a slight increase in electricity bill.

I am very curious what you thought of this blog, since this is my
first blog with a more advanced tutorial, did you like it? did you not
like it? Please let me know in the comments below and I will take all
suggestions for improvements seriously, that is my promise. If you
also have suggestions about future things I should look into, or
things that you would like to know more about please also let me know
in the comments. For now I will keep experimenting with self-hosting
and probably in a few weeks time another similar blog will pop-up
about another useful tool to self-host, see you then!
`,
};

export default blog;
