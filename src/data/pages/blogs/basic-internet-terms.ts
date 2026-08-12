import type { BlogEntry } from './types';

const blog: BlogEntry = {
	id: "35",
	numericId: 35,
	slug: "basic-internet-terms",
	title: "Making Sense of the Web, a guide to basic internet terms 🌐",
	description: "A beginner-friendly guide demystifying everyday internet terminology. Learn how networks, IP addresses, DNS, firewalls, HTTPS, and VPNs actually work to keep you connected and secure online.",
	date: "2026-04-26",
	link: "https://vonkprogramming.nl/blogs/basic-internet-terms",
	content: `
Recently I set up my own VPN and realized something. Despite the
  constant stream of advertisements from companies like NordVPN,
  ExpressVPN, and Surfshark, a lot of people still do not fully
  understand what a VPN actually does. The same goes for other common
  terms you see every now and then.

  What is a DNS? What does that little lock (HTTPS) in your browser
  address bar actually mean? What is an IP address and why does it look
  so strange? What does your firewall actually do? In this blog, I will
  explain these concepts in simple terms so you can understand the
  everyday technology you are already using.

## Networks

  Before we dive into the specific terms, it helps to understand what a
  network actually is. At its core, a network is simply a group of
  devices connected together to share information. We generally deal
  with two types: public networks and private networks. The internet
  itself is a massive public network. It contains all the public
  services and websites that anyone can connect to from anywhere in the
  world.

  On the other hand, you have a private network right inside your house.
  The device that provides your private network, usually called a router
  or access point, creates this private network. When you connect your
  computer, your phone, your wireless printer, and your smart home
  devices to this access point via Wi-Fi or a cable, they join your
  private network. Devices on a private network can easily talk to each
  other, but they are hidden from the outside world. You can usually
  only reach these devices when you are connected to the same home
  network, such as when you are connected via Wi-Fi to your access
  point. While not every single smart device works exactly this way, it
  is a great way to think about how your home technology stays separated
  from the public internet. A good example can be seen in the image
  below where all the devices shown are the devices in your network and
  the cloud is the public internet.

[Image: Network diagram]

    Example of a home network connected to the internet via the ISP
    modem, made by
    Practically Networked (https://www.practicallynetworked.com/)

## IP address

  An IP address is essentially your device's phone number on the
  internet. It is a unique string of numbers that allows other computers
  to find and communicate with yours. When the internet was first built,
  the creators designed a system to give every single connected device
  its own unique identity. The most common format from that original
  system is called IPv4, and it looks something like this: 192.168.1.1.

  You might wonder why it is specifically four numbers separated by
  dots, and why those numbers never go higher than 255. This comes down
  to how computers count using binary code, which only uses zeros and
  ones. Your computer stores an IPv4 address as a series of 32 zeros and
  ones, divided into four groups of eight. If you calculate all the
  possible combinations of eight zeros and ones, you get exactly 256
  possibilities. Since computers start counting at zero instead of one,
  the highest number you can display in any group is 255.

  When you put those four groups together, the system can create roughly
  4.3 billion unique addresses in total (which is 2 to the power of 32).
  Back in the early days of the internet, 4 billion seemed like an
  impossibly large number. When IPv4 was invented, the creators never
  imagined that every person on Earth would eventually be connected to
  it. They assumed the network would mostly be used by large
  universities and businesses, in which case 4.3 billion unique
  addresses would have been more than enough.

  To help handle the shortage of IP addresses, we use a clever trick
  involving the public and private networks we talked about earlier.
  Your router gets one single public IP address that the entire internet
  can see. Meanwhile, all the devices inside your house get their own
  local IP address on your private network. When your phone or laptop
  wants to access the public internet, it shares that single public IP
  address. This hides your specific devices and saves millions of
  addresses globally. This is why you might often see an IP address
  starting with 192.168.x.x. Devices within most home networks start
  with these numbers, while larger networks might use local addresses
  starting with 10.x.x.x. In these examples, the "x" simply
  represents any number between 0 and 255.

  Eventually, even that trick was not enough. To permanently solve the
  shortage, a newer format called IPv6 was introduced. Instead of just
  four small numbers, IPv6 uses a much longer string of both numbers and
  letters, separated by colons. An example looks something like this:
  2001:0db8:85a3:0000:0000:8a2e:0370:7334. This new format
  provides so many unique combinations that we could give an address to
  every single grain of sand on Earth and still have plenty left over.
  We might theoretically run out one day, but probably not in the next
  1000 years.

[Image: IP address with bits shown]

  Graphic showing an IP address and how it translates to bits, made by
  Zenarmor (https://www.zenarmor.com/)

## DNS

  Today, these addresses connect us to services and websites. But it
  would be very difficult to memorise a sequence of numbers every time
  you wanted to visit LinkedIn. To fix this, the DNS was invented. A DNS
  is essentially the phone book of the internet. Just like you would
  look up a person's name to find their phone number, a DNS matches
  the website names you know, like linkedin.com, google.com or
  vonkprogramming.nl, to their actual IP addresses. These website names
  are called domain names. When you type a domain name into your
  browser, it connects to a DNS server. The server does a quick lookup
  and returns the correct IP address so your computer can load the page.

[Image: Goudengids]

Old phonebook from the Netherlands

## Firewall

  A firewall is a tool that keeps your computer and network safe. The
  concept sounds complex, but it is actually quite straightforward. Now
  that you understand IP addresses, you can think of a firewall like a
  bouncer at a nightclub holding a guest list and a banned list. A
  firewall enforces rules about who is allowed in and who is kept out.
  The banned lists usually contain known IP addresses used by malicious
  sources. Alternatively, a firewall can be set up to block all traffic
  by default and only allow a specific handful of safe IP addresses to
  pass through.

## HTTPS and SSL

  The padlock icon at the top left of your browser is a sign that the
  data moving between you and a website is secure. This protection is
  created through encryption. In simple terms, encryption scrambles your
  message so that anyone who intercepts it just sees nonsense, while the
  intended recipient can unscramble and read it. This protects you from
  attackers who might try to steal your login details while those
  details travel across the network. A very basic example of encryption
  is the old Caesar cipher from Roman times. In this method, every
  letter in a message was shifted a certain number of spaces down the
  alphabet. Anyone who intercepted the message just saw random letters.
  But if the recipient knew the secret shifting rule, they could easily
  reverse the process and read the original text. Modern HTTPS and SSL
  use this same basic concept, just with far more complex math. For an
  example of how the Caesar cipher works, see the image below. Each
  letter from the outer circle is changed to the letter of the inner
  circle, the receiver who holds a similar disk can reverse the process
  and deciper the message.\\

[Image: Caesar Cipher Illustration]

  Graphic showing a Caesar cipher, provided by
  Crypto Museum (https://www.cryptomuseum.com/)

## VPN

  Finally, what is a VPN? A VPN acts as an intermediary point between
  you and the internet. Normally, when you visit a website, your
  computer sends a request directly to that site, and the site sends the
  web page right back to your device. When you use a VPN, you send your
  request to the VPN server first. The server then forwards your request
  to the website. When the website responds, it sends the data to the
  VPN, which finally passes it back to you. This is useful for a few
  reasons. First, the connection between your device and the VPN is
  encrypted, keeping your activity secure. Second, because you can
  connect to VPN servers all over the world, websites will think you are
  browsing from the server's physical location instead of your own.
  This allows people to bypass geographical blocks put in place by
  certain companies or governments, granting freer access to information
  regardless of local restrictions.

  Additionally, there are other ways to use a VPN. For instance, you can
  set up your own VPN server right in your home. When you are away, you
  can use this VPN to connect back to your own private home network.
  This means you can securely reach your home devices from anywhere. As
  an example, you could print a document on your home printer while
  sitting in a coffee shop, all without having to rely on a fancy app
  from the printer company.

[Image: VPN illustration]

  Graphic showing how a configured VPN changes your interaction with the
  internet, made by
  ByteByteGo (https://bytebytego.com/)

## Conclusion

  I hope this post was educational. This is just a brief introduction to
  the technology that makes the internet work, but understanding these
  basics means they no longer have to be secrets known only to software
  developers and network engineers.

  The world of networking holds many more interesting topics like BGP,
  which is used to find the server you are trying to reach using just
  its IP address; TCP, which ensures that once a packet of data is sent
  it is actually received correctly; NAT, which helps ensure all devices
  in your local network correctly share that single public IP address we
  discussed earlier; and much more. While there is always more to
  explore, these subjects go deeper than what you need to understand the
  basics as an everyday internet user.

  If you would like to know more about any of these concepts, be sure to
  ask in the comments!
`,
};

export default blog;
