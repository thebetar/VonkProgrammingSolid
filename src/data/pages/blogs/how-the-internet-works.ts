import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "22",
	numericId: 22,
	slug: "how-the-internet-works",
	title: "How the internet works 🌐",
	description: "",
	date: "2025-02-11",
	link: "https://vonkprogramming.nl/blogs/how-the-internet-works",
	content: `
Recently, I finished my third semester at Politechnika Warszawska.
  During this semester, one of my courses covered how computer networks
  function, and I found it very interesting. So, in this blog post, I
  will try to summarize how a packet is sent and received and highlight
  some interesting facts about networking.

## OSI Model

  The
  OSI model (https://en.wikipedia.org/wiki/OSI_model)
  describes the different layers involved in communication. The
  TCP/IP model (https://en.wikipedia.org/wiki/Internet_protocol_suite)
  also explains this but in a more simplified manner. For this blog
  post, I will focus on:

- The Physical Layer

- The Data Link Layer

- The Network Layer

- The Transport Layer

## Initial Sending

  When you try to visit a website, your device first needs to determine
  its IP address. This is done using a
  Domain Name System (DNS) (https://en.wikipedia.org/wiki/Domain_Name_System)
  server. A DNS server is a system that holds a large database of
  human-readable domain names like google.com and
  amazon.com and maps them to their respective IP
  addresses.

## How Is the DNS Server Found?

  Your device is typically configured with a default DNS server. Common
  examples include 1.1.1.1 for
  Cloudflare's (https://en.wikipedia.org/wiki/Cloudflare)
  DNS server and 8.8.8.8 for Google's DNS server.
  If a device does not have a DNS server manually set, it often receives
  one automatically from the network’s DHCP server.

## How Does the Request Reach the DNS Server?

  Before even reaching the DNS server, the request must pass through
  multiple layers of the OSI model:

- Application Layer:  Your browser generates the request.

- Transport Layer:  The request is wrapped in a protocol, typically UDP or TCP.

- Network Layer:  The request is assigned an IP header with source and destination addresses.

- Data Link & Physical Layers:  The request is encoded into bits and transmitted over a physical medium (wired or wireless).

  Once transmitted, the request travels through various routers. Each
  router examines the destination IP address and forwards the request
  toward the next router until it eventually reaches the DNS server. The
  DNS server then processes the request and sends back the corresponding
  IP address. But how does the response reach the sender?

## Sending a Response

  Each request packet contains additional information in its headers,
  including:

- Source IP Address: The address of the sender’s device.

- Destination IP Address: The address of the DNS server.

  When the DNS server sends back the response, it swaps these addresses,
  ensuring the data reaches the original sender.

## Protocols

  Data transmission can have different priorities, such as speed or
  reliability. There are two primary transport protocols:

- UDP (User Datagram Protocol):  Sends data in a continuous stream without waiting for acknowledgment. This makes it fast but unreliable since packets may be lost in transit. It is ideal for applications like video streaming or voice calls, where occasional packet loss (milliseconds of missing data) is negligible.

- TCP (Transmission Control Protocol):  Ensures reliable data delivery by sending packets one at a time and waiting for acknowledgment from the receiver before sending the next packet. If a packet is lost, it is retransmitted. This is useful for web browsing, file transfers, and applications where data integrity is crucial.

## Routing Protocols

  Routing protocols determine the best path for a packet to reach its
  destination. While I won’t go into detail in this blog post, it’s
  worth mentioning that there are multiple routing protocols, each with
  its own advantages in terms of efficiency, redundancy, and
  scalability.

## IP Addresses

  IP addresses can be either local or
  global:

- Local IP addresses  are used within private networks, such as your home or office (LAN – Local Area Network).

- Global IP addresses are unique and assigned to devices on the public internet.

  Since a home or office network often has multiple devices but only one
  public-facing IP address, a router uses
  Network Address Translation (NAT) to manage traffic.
  NAT allows multiple devices to share a single public IP address while
  keeping their internal local IPs separate.

## How Are IP Addresses Assigned?

  IP addresses are automatically assigned by a
  Dynamic Host Configuration Protocol (DHCP) server.
  This server ensures each device on a network receives a unique local
  IP address without conflicts.

## Final OSI Layers

The OSI model also describes three additional layers:

- Session Layer:  Maintains user sessions over multiple requests, ensuring continuous communication.

- Presentation Layer:  Handles data formatting, compression, and encryption for safe and efficient transmission.

- Application Layer:  Defines standards and protocols that applications use to interact with networks.

## Conclusion

  I hope this short summary describes in a simple and understandable way
  what I have learned in the past year and gives you a better
  understanding of how data is sent over the internet.
`,
};

export default blog;
