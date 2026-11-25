export const content = () => (
  <>
    <p>
      Recently, I finished my third semester at Politechnika Warszawska.
      During this semester, one of my courses covered how computer networks
      function, and I found it very interesting. So, in this blog post, I
      will try to summarize how a packet is sent and received and highlight
      some interesting facts about networking.
    </p>
    <h2 id="osi-model">OSI Model</h2>
    <p>
      The{" "}
      <a href="https://en.wikipedia.org/wiki/OSI_model" target="_blank">
        OSI model
      </a>{" "}
      describes the different layers involved in communication. The{" "}
      <a
        href="https://en.wikipedia.org/wiki/Internet_protocol_suite"
        target="_blank"
      >
        TCP/IP model
      </a>{" "}
      also explains this but in a more simplified manner. For this blog
      post, I will focus on:
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
      When you try to visit a website, your device first needs to determine
      its IP address. This is done using a{" "}
      <a
        href="https://en.wikipedia.org/wiki/Domain_Name_System"
        target="_blank"
      >
        Domain Name System (DNS)
      </a>{" "}
      server. A DNS server is a system that holds a large database of
      human-readable domain names like <code>google.com</code> and{" "}
      <code>amazon.com</code> and maps them to their respective IP
      addresses.
    </p>
    <h2 id="how-is-the-dns-server-found-">How Is the DNS Server Found?</h2>
    <p>
      Your device is typically configured with a default DNS server. Common
      examples include <strong>1.1.1.1</strong> for{" "}
      <a href="https://en.wikipedia.org/wiki/Cloudflare" target="_blank">
        Cloudflare&#39;s
      </a>{" "}
      DNS server and <strong>8.8.8.8</strong> for Google&#39;s DNS server.
      If a device does not have a DNS server manually set, it often receives
      one automatically from the network’s DHCP server.
    </p>
    <h2 id="how-does-the-request-reach-the-dns-server-">
      How Does the Request Reach the DNS Server?
    </h2>
    <p>
      Before even reaching the DNS server, the request must pass through
      multiple layers of the OSI model:
    </p>
    <ol>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Application_layer"
            target="_blank"
          >
            Application Layer:
          </a>{" "}
          Your browser generates the request.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Transport_layer"
            target="_blank"
          >
            Transport Layer:
          </a>{" "}
          The request is wrapped in a protocol, typically UDP or TCP.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Network_layer"
            target="_blank"
          >
            Network Layer:
          </a>{" "}
          The request is assigned an IP header with source and destination
          addresses.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Data_link_layer"
            target="_blank"
          >
            Data Link &amp; Physical Layers:
          </a>{" "}
          The request is encoded into bits and transmitted over a physical
          medium (wired or wireless).
        </p>
      </li>
    </ol>
    <p>
      Once transmitted, the request travels through various routers. Each
      router examines the destination IP address and forwards the request
      toward the next router until it eventually reaches the DNS server. The
      DNS server then processes the request and sends back the corresponding
      IP address. But how does the response reach the sender?
    </p>
    <h2 id="sending-a-response">Sending a Response</h2>
    <p>
      Each request packet contains additional information in its headers,
      including:
    </p>
    <ul>
      <li>
        <p>
          <strong>Source IP Address:</strong> The address of the sender’s
          device.
        </p>
      </li>
      <li>
        <p>
          <strong>Destination IP Address:</strong> The address of the DNS
          server.
        </p>
      </li>
    </ul>
    <p>
      When the DNS server sends back the response, it swaps these addresses,
      ensuring the data reaches the original sender.
    </p>
    <h2 id="protocols">Protocols</h2>
    <p>
      Data transmission can have different priorities, such as speed or
      reliability. There are two primary transport protocols:
    </p>
    <ul>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/User_Datagram_Protocol"
            target="_blank"
          >
            UDP (User Datagram Protocol):
          </a>{" "}
          Sends data in a continuous stream without waiting for
          acknowledgment. This makes it fast but unreliable since packets
          may be lost in transit. It is ideal for applications like video
          streaming or voice calls, where occasional packet loss
          (milliseconds of missing data) is negligible.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Transmission_Control_Protocol"
            target="_blank"
          >
            TCP (Transmission Control Protocol):
          </a>{" "}
          Ensures reliable data delivery by sending packets one at a time
          and waiting for acknowledgment from the receiver before sending
          the next packet. If a packet is lost, it is retransmitted. This is
          useful for web browsing, file transfers, and applications where
          data integrity is crucial.
        </p>
      </li>
    </ul>
    <h2 id="routing-protocols">Routing Protocols</h2>
    <p>
      Routing protocols determine the best path for a packet to reach its
      destination. While I won’t go into detail in this blog post, it’s
      worth mentioning that there are multiple routing protocols, each with
      its own advantages in terms of efficiency, redundancy, and
      scalability.
    </p>
    <h2 id="ip-addresses">IP Addresses</h2>
    <p>
      IP addresses can be either <strong>local</strong> or{" "}
      <strong>global</strong>:
    </p>
    <ul>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Private_network"
            target="_blank"
          >
            Local IP addresses
          </a>{" "}
          are used within private networks, such as your home or office (LAN
          – Local Area Network).
        </p>
      </li>
      <li>
        <p>
          <strong>Global IP addresses</strong> are unique and assigned to
          devices on the public internet.
        </p>
      </li>
    </ul>
    <p>
      Since a home or office network often has multiple devices but only one
      public-facing IP address, a router uses{" "}
      <strong>Network Address Translation (NAT)</strong> to manage traffic.
      NAT allows multiple devices to share a single public IP address while
      keeping their internal local IPs separate.
    </p>
    <h2 id="how-are-ip-addresses-assigned-">
      How Are IP Addresses Assigned?
    </h2>
    <p>
      IP addresses are automatically assigned by a{" "}
      <strong>Dynamic Host Configuration Protocol (DHCP)</strong> server.
      This server ensures each device on a network receives a unique local
      IP address without conflicts.
    </p>
    <h2 id="final-osi-layers">Final OSI Layers</h2>
    <p>The OSI model also describes three additional layers:</p>
    <ul>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Session_layer"
            target="_blank"
          >
            Session Layer:
          </a>{" "}
          Maintains user sessions over multiple requests, ensuring
          continuous communication.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Presentation_layer"
            target="_blank"
          >
            Presentation Layer:
          </a>{" "}
          Handles data formatting, compression, and encryption for safe and
          efficient transmission.
        </p>
      </li>
      <li>
        <p>
          <a
            href="https://en.wikipedia.org/wiki/Application_layer"
            target="_blank"
          >
            Application Layer:
          </a>{" "}
          Defines standards and protocols that applications use to interact
          with networks.
        </p>
      </li>
    </ul>
    <h2 id="conclusion">Conclusion</h2>
    <p>
      I hope this short summary describes in a simple and understandable way
      what I have learned in the past year and gives you a better
      understanding of how data is sent over the internet.
    </p>
  </>
);
