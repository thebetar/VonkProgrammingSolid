import Code from '@/components/blogs/Code';
import Note from '@/components/blogs/Note';

export const content = () => (
  <>
    <p>
      Over the last few weeks I&#39;ve been working on{" "}
      <a
        href="https://en.wikipedia.org/wiki/Self-hosting_(web_services)"
        target="_blank"
      >
        self-hosting
      </a>{" "}
      some of my own services using a{" "}
      <a href="https://www.raspberrypi.com/" target="_blank">
        Raspberry Pi
      </a>{" "}
      and have been amazed by how easy it can be.
    </p>
    <p>
      I got inspired after reading a LinkedIn post about someone breaking{" "}
      <a
        href="https://docs.github.com/en/site-policy/github-terms/github-community-code-of-conduct"
        target="_blank"
      >
        GitHub&#39;s rules
      </a>{" "}
      and getting locked out of their account. For those who are not
      developers this is the equivalent to losing access to your OneDrive
      (or Dropbox or Google Drive) that has all your work stored on it
      without being able to get access to it ever again.
    </p>
    <p>
      While I don&#39;t want to get in to if locking this person out of
      their account was fair or not; it did make me think what kind of
      impact it would have if this were to happen to me. This made me look
      into a way to reduce my dependency on these companies and their
      policies.
    </p>
    <p>
      What I found was that running things like workflow automations, backup
      software and local network storage is quite easy to setup nowadays, I
      think anyone with minimal experience using the terminal can do it.
    </p>

    <h2 id="dependency">Reducing Dependency on Big Tech</h2>

    <p>
      The tools we use every day, such as Word, Excel, email, cloud storage,
      and many others, have made reading, writing, storing, and sharing
      information easier than ever before. But while we used to buy software
      once and keep it safely on our own devices, those days are long gone.
      Subscriptions have taken over, and while they make perfect business
      sense by providing companies with a steady stream of income, they also
      leave us dependent on their goodwill. At any moment, your access could
      be revoked, not because you have done anything wrong, but simply
      because you do not own the service. You are renting it.
    </p>

    <p>
      Now, I am not saying we should all expect to wake up one day locked
      out of our Google Drive (I hope that never happens), but knowing it
      could happen is reason enough to prepare. That is where self-hosting
      comes in. By running free, open-source software on your own hardware,
      you keep control of your tools and your data. And with something as
      small, cheap, and energy-efficient as a Raspberry Pi Zero 2W, there
      has never been a better time to start. Even a simple setup can give
      you a safe backup of your important files and reduce your reliance on
      big tech companies.
    </p>

    <p>
      <img
        src="https://cdn.nos.nl/image/2023/02/03/939664/1024x576a.jpg"
        alt="Big Tech"
        width="1024"
        height="576"
      />
    </p>

    <blockquote>
      <p>
        Big Tech CEOs, picture taken from <a href="https://nos.nl">NOS</a>
      </p>
    </blockquote>

    <h2 id="outline">Outline</h2>

    <p>
      In this blog post, I'll explain how to set up a workflow automation
      tool on a small, affordable, and energy-efficient device.
    </p>

    <p>
      The workflow automation tool we'll be using is{" "}
      <a href="https://n8n.io/" target="_blank">
        N8N
      </a>
      , a powerful automation platform with a visual interface that lets you
      build workflows by connecting different services together. It supports
      a wide range of integrations, enough to cover most (if not all) of
      your automation needs. N8N is also one of the most popular workflow
      automation tools that offers a free, self-hosted version. So perfect
      for our use case.
    </p>

    <p>
      We will will run this tool on a <strong>Raspberry Pi Zero 2W</strong>,
      one of the cheapest single-board computers available. You can find it
      for around €17 at stores like{" "}
      <a
        href="https://www.kiwi-electronics.com/nl/raspberry-pi-zero-2-w-10770"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kiwi Electronics
      </a>
      . You’ll still need a microSD card, but even a 16GB or 32GB card will
      be more than enough for this setup. These can often be found at
      discounter stores or just general stores for less than €10.
    </p>

    <p>
      <img
        src="/assets/images/blogs/taking-control/raspberry-pi-zero.webp"
        alt="Raspberry Pi Zero 2W"
        width="1500"
        height="1000"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>
        The Raspberry Pi Zero 2W as displayed on the website of{" "}
        <a
          href="https://www.raspberrypi.com/products/raspberry-pi-zero-2-w/"
          target="_blank"
        >
          Raspberry Pi
        </a>
      </p>
    </blockquote>

    <p>
      A Raspberry Pi is essentially a tiny computer that runs quietly in the
      background while consuming very little power. Think of it like a
      stripped-down laptop with modest specs but far lower energy usage. It
      comes in a compact form factor, making it easy to place anywhere in
      your home or office.
    </p>

    <p>
      <strong>What you’ll need:</strong>
    </p>
    <ol>
      <li>Raspberry Pi Zero 2W</li>
      <li>MicroSD card (16GB or larger)</li>
      <li>Power supply (Micro USB)</li>
      <li>Internet connection (Wi-Fi or Ethernet)</li>
    </ol>

    <p>
      <strong>What we'll do:</strong>
    </p>
    <ol>
      <li>Install an operating system on the Raspberry Pi.</li>
      <li>Access the Raspberry Pi remotely.</li>
      <li>Install N8N on the Raspberry Pi using Docker.</li>
    </ol>

    <h2 id="n8n-overview">Advantages of using N8N</h2>
    <p>
      N8N is a powerful tool that allows you to automate tasks and connect
      different services without writing code. It provides a visual
      interface where you can create workflows by connecting various
      integrations.
    </p>

    <p>
      <img
        src="/assets/images/blogs/taking-control/n8n-example.png"
        alt="N8N workflow example"
        width="1167"
        height="414"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>
        Example of a workflow in N8N, image taken from my own blog
        subscriber workflow
      </p>
    </blockquote>

    <p>
      N8N provides easy integrations with all kinds of tools, a small list
      of all of these integrations is:
    </p>
    <ol>
      <li>
        <a
          href="https://n8n.io/integrations/builtin/gmail/"
          target="_blank"
        >
          Gmail
        </a>{" "}
        integration to read e-mails
      </li>
      <li>
        <a
          href="https://n8n.io/integrations/builtin/notion/"
          target="_blank"
        >
          Notion
        </a>{" "}
        integration to read and write to Notion
      </li>
      <li>
        <a
          href="https://n8n.io/integrations/builtin/google-calendar/"
          target="_blank"
        >
          Google Calendar
        </a>{" "}
        integration to read and write to your calendar
      </li>
      <li>
        <a
          href="https://n8n.io/integrations/builtin/email/"
          target="_blank"
        >
          E-mail
        </a>{" "}
        integration to send and receive e-mails (if you do not use Gmail)
      </li>
      <li>
        <a href="https://n8n.io/integrations/openai/" target="_blank">
          OpenAI
        </a>{" "}
        integration to send your data to ChatGPT and receive responses
      </li>
      <li>
        <a href="https://n8n.io/integrations/discord/" target="_blank">
          Discord
        </a>{" "}
        integration to send messages to Discord channels
      </li>
      <li>
        <a href="https://n8n.io/integrations/excel/" target="_blank">
          Excel
        </a>{" "}
        and{" "}
        <a
          href="https://n8n.io/integrations/google-sheets/"
          target="_blank"
        >
          Google Sheets
        </a>{" "}
        integration to read and write to spreadsheets
      </li>
    </ol>

    <Note>
      <p>
        For a list of all possible options click{" "}
        <a href="https://n8n.io/integrations/" target="_blank">
          here
        </a>
      </p>
    </Note>

    <p>
      For instance, you could set up a simple workflow that reads your
      e-mails from Gmail every hour for new e-mails containing specific
      text. Those e-mails could then be sent to OpenAI to generate a summary
      or pull out key details, which are then saved into an Excel sheet.
    </p>
    <p>
      Don't worry since it is self-hosted no one will be able to access your
      data unless you give them explicit permission to your local network.
    </p>
    <p>
      Another option could be to monitor an online spreadsheet every hour.
      Whenever new data is added, the workflow could create a daily summary
      of the fresh entries and send it as an email notification.
    </p>

    <Note>
      <p>
        If you do not feel like reading through the whole tutorial you can
        skip to the conclusion by clicking{" "}
        <a
          href="https://vonkprogramming.nl/blogs/taking-control#conclusion"
          target="_blank"
        >
          here
        </a>
      </p>
    </Note>

    <h2 id="setting-up-the-raspberry-pi">
      <u>Step 1:</u> Setting up the Raspberry Pi
    </h2>

    <p>
      To setup the raspberry pi you need to flash an operating system to the
      SD card.{" "}
    </p>

    <p>
      An operating system is something that describes how the hardware
      should work and how you can interact with it, well-known examples are
      Windows and MacOS.
    </p>

    <p>
      To install an operating system on the Raspberry Pi take the following
      steps:
    </p>

    <ol class="list-decimal">
      <li>
        <p>
          Raspberry Pi offers an easy installer that you'll need to install
          an operating system. This installer can be found{" "}
          <a href="https://www.raspberrypi.com/software/">here</a>.{" "}
        </p>
      </li>
      <li>
        <p>
          Plug-in the SD card to the device you have downloaded the
          installer on
        </p>
      </li>
      <li>
        <p>
          After downloading the installer from the Raspberry Pi website and
          inserting the SD card, run the installer by clicking on the file
          that got downloaded.
        </p>
      </li>
      <li>
        <p>
          Within the installer click <code>Choose Device</code> here there
          should be an option for the Raspberry Pi Zero 2W, select it.
        </p>
      </li>
      <li>
        <p>
          After selecting the right device click <code>Choose OS</code>.
          Within the options the best operating system for this use case is
          Raspberry Pi OS lite which can be found under{" "}
          <code>Raspberry Pi OS (other)</code>. This is a lighter version of
          the normal Raspberry Pi OS. Raspberry Pi OS is mainly used for the
          bigger brothers of the zero 2W, the raspberry pi 4 or 5.
        </p>
      </li>
      <li>
        <p>
          After selecting the right OS click <code>Choose Storage</code> and
          select the SD card you have inserted.
        </p>
      </li>
      <li>
        <p>
          After selecting these options you can proceed one step further
          where you will be asked if you want to customise the OS. Here you
          should choose to <code>Edit settings</code>
        </p>
      </li>
      <li>
        <p>
          Within these settings you should enable <code>Set hostname</code>{" "}
          and enter a hostname that is familiar to you
        </p>
      </li>
      <li>
        <p>
          After select the option to set a <code>Username</code> and{" "}
          <code>Password</code> and enter a username and password that you
          will remember. The Raspberry Pi will not be public facing so the
          values you enter can be quite simple.
        </p>
      </li>
      <li>
        <p>
          Another important step is to setup the Wi-Fi connectivity. This
          will be important to be able to connect to the Raspberry Pi once
          it is turned on.
        </p>
      </li>
      <li>
        <p>
          Next go to service and select the option to be able to SSH with
          password authentication.
        </p>
      </li>
      <li>
        <p>
          Close the window and click next and wait for the operating system
          to be flashed onto the SD card
        </p>
      </li>
      <li>
        <p>
          Congratulations your Raspberry Pi is now ready to be used! The
          only steps that are left is to insert the SD card into the
          Raspberry Pi and give it some power using a Micro USB cable.
        </p>
      </li>
    </ol>

    <p>
      If anything went wrong during setup don&#39;t hesitate to contact me
      to figure out what went wrong.
    </p>

    <Note text="The Raspberry Pi Zero 2W also has a bigger brother called the Raspberry Pi 5, this is the newest full size Raspberry Pi and offers a lot more power for more complex tasks like running your own home server" />

    <h2 id="connecting-to-the-raspberry-pi">
      <u>Step 2:</u> Connecting to the Raspberry Pi
    </h2>
    <p>
      After the Raspberry Pi has successfully booted the operating system
      you can connect to it via <strong>SSH</strong>. This can be done using{" "}
      <a href="https://www.chiark.greenend.org.uk/\~sgtatham/putty/latest.html">
        PuTTy
      </a>{" "}
      on Windows or using the <code>ssh</code> command in the terminal when
      using MacOS or Linux. Using any of these tools you can use the
      hostname, username and password that you used{" "}
      <strong>during the setup of your Raspberry Pi</strong> to connect to
      the Raspberry Pi. This step varies a lot between different operating
      systems but is quite simple to perform so I suggest using{" "}
      <a href="https://chat.openai.com/">ChatGPT</a>,{" "}
      <a href="https://gemini.google.com/">Gemini</a> or a different LLM to
      figure out how to complete this step, you can see it as a little
      challenge from me.
    </p>

    <img
      src="/assets/images/blogs/taking-control/terminal.png"
      alt="Terminal"
      width="545"
      height="27"
      loading="lazy"
      decoding="async"
    />

    <blockquote>
      <p>An image in the terminal how to open the SSH connection</p>
    </blockquote>

    <h2 id="installing-docker">
      <u>Step 3:</u> Installing Docker
    </h2>
    <p>
      You have several options for running N8N. While some methods might
      seem simpler if you have never used{" "}
      <a href="https://www.docker.com/" target="_blank">
        Docker
      </a>{" "}
      before, it is the approach recommended by both me and N8N because of
      its simplicity to use after installation after getting familiar with
      it. <strong>Docker</strong> creates an isolated environment for your
      N8N instance, making it straightforward to run and preventing it from
      interfering with the rest of your system. Once installed, Docker makes
      starting, stopping, and updating N8N very easy, so you spend less time
      maintaining it and more time using it. Another advantage is that if
      you later decide to run other applications on your{" "}
      <strong>Raspberry Pi</strong>, you can do so without hassle since
      Docker will already be set up and ready to handle them.
    </p>

    <p>Docker can be installed by running the following commands:</p>
    <Code>
      # Add Docker's official GPG key:
      <br />
      sudo apt update
      <br />
      sudo apt install ca-certificates curl
      <br />
      sudo install - m 0755 -d /etc/apt/keyrings
      <br />
      sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o
      /etc/apt/keyrings/docker.asc
      <br />
      sudo chmod a+r /etc/apt/keyrings/docker.asc <br />
      <br />
      # Add the repository to Apt sources: <br />
      echo \ <br />
      {"  "}"deb [arch=$(dpkg --print-architecture) \ <br />
      {"  "}signed-by=/etc/apt/keyrings/docker.asc] \ <br />
      {"  "}https://download.docker.com/linux/debian \ <br />
      $(./etc/os-release &amp;&amp; echo "$VERSION_CODENAME") stable" | \{" "}
      <br />
      sudo tee /etc/apt/sources.list.d/docker.list
      <span class="hljs-keyword">d</span>/docker.
      <span class="hljs-keyword">list</span> &gt; /dev/null sudo apt{" "}
      <span class="hljs-keyword">update</span>
      <br />
      <br />
      # Install all the Docker dependencies <br />
      sudo apt install docker-ce docker-ce-
      <span class="hljs-keyword">cli</span> containerd.io \ <br />
      docker-buildx-<span class="hljs-keyword">plugin</span> docker-compose-
      <span class="hljs-keyword">plugin</span>
    </Code>

    <Note>
      <p>
        You can find all the possible things you can run using Docker at{" "}
        <a href="https://hub.docker.com/" target="_blank">
          Docker Hub
        </a>
      </p>
    </Note>

    <h2 id="starting-the-n8n-instance">
      <u>Step 4:</u> Starting the N8N instance
    </h2>
    <p>
      You can start the N8N instance with some easy Docker commands. I
      recommend however to write a small configuration file so you can
      easily call that every time to start the program by just running a
      single command.
    </p>
    <p>
      Create a folder on the <strong>Raspberry Pi</strong> to store the N8N
      application data. Within this folder create a file named{" "}
      <code>docker-compose.yml</code>. This file will be used to store the
      configuration. After this open the file and paste the following code
      inside of it.
    </p>
    <Code>
      services:
      <br />
      {"  "}image: docker.n8n.io/n8nio/n8n
      <br />
      {"  "}environment:
      <br />
      {"    "}- N8N_SECURE_COOKIE=false
      <br />
      {"  "}ports:
      <br />
      {"    "}- "5678:5678"
      <br />
      {"  "}volumes:
      <br />
      {"    "}- n8n_data:/home/node/.n8n
      <br />
      {"  "}restart: always
      <br />
      <br />
      volumes:
      <br />
      {"  "}n8n_data:
      <br />
      {"    "}external: false
    </Code>

    <p>
      After creating this configuration file open the folder that you put
      this configuration file in using the terminal and run{" "}
      <code>docker compose up -d</code> which will then spin up the N8N
      instance making it accessible on the port 5678.
    </p>
    <h2>
      <u>Step 5:</u> Setting up first workflow automation
    </h2>
    <p>
      Now everything is ready for use! So we can close the connection with
      the Raspberry Pi and open the N8N application that it hosts. Open up a
      browser (like Google Chrome) and enter the hostname with{" "}
      <code>:5678</code> behind it. For instance if you used the default
      hostname <code>raspberrypi.local</code> you should enter
      <code>raspberrypi.local:5678</code> to open your N8N environment.
    </p>

    <p>
      <img
        src="/assets/images/blogs/taking-control/n8n-website.png"
        alt="n8n website"
        width="1600"
        height="798"
        loading="lazy"
        decoding="async"
      />
    </p>

    <blockquote>
      <p>The interface you will see after creating your account</p>
    </blockquote>

    <p>
      Once it opens create an account for your local N8N environment. After
      this you will immediately be guided to N8N and can start creating your
      first workflow by pressing the <code>Create Workflow</code> button at
      the top right.
    </p>
    <p>
      Now you are ready to start creating workflows using N8N. There are
      many possibilities, you can create a trigger based on time that check
      some specific data and sends you a message based on some condition, or
      you can create a webhook that triggers when you receive and e-mail and
      notifies you when it contains specific keywords. All these kinds of
      use cases are possible within N8N.
    </p>
    <p>
      Some interesting links to get started with your first workflow
      automations:
    </p>
    <ol>
      <li>
        Basic introduction course provided by N8N, click{" "}
        <a href="https://docs.n8n.io/courses/level-one/" target="_blank">
          here
        </a>
      </li>
      <li>
        Advanced introduction course provided by N8N, click{" "}
        <a href="https://docs.n8n.io/courses/level-two/" target="_blank">
          here
        </a>
      </li>
      <li>
        Gmail to Slack automation, click{" "}
        <a href="https://www.xray.tech/post/n8n-beginner" target="_blank">
          here
        </a>
      </li>
    </ol>

    <h2>Conclusion</h2>

    <p>
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
    </p>
    <p>
      I am very curious what you thought of this blog, since this is my
      first blog with a more advanced tutorial, did you like it? did you not
      like it? Please let me know in the comments below and I will take all
      suggestions for improvements seriously, that is my promise. If you
      also have suggestions about future things I should look into, or
      things that you would like to know more about please also let me know
      in the comments. For now I will keep experimenting with self-hosting
      and probably in a few weeks time another similar blog will pop-up
      about another useful tool to self-host, see you then!
    </p>
  </>
);
