# 'Syncing failed: Connection timed out' errors when syncing

**Antivirus/firewall software on Windows and corporate/school networks**

If syncing never appears to make any progress, it is possible that Anki is completely blocked from connecting to the internet. In that case, you may need to add an exception in your antivirus/firewall, or ask your network administrators for assistance. For more information, please see

<https://faqs.ankiweb.net/error-establishing-a-secure-connection-when-syncing.html>

**If the sync appears to make some progress**

When you sync, Anki sends messages to AnkiWeb, and these messages typically flow through a number of networks and countries before they reach AnkiWeb. If one of the networks between you and the AnkiWeb servers is experiencing issues, this can result in connections that run slowly or terminate abruptly.

A typical cause of this is when your internet provider experiences a problem with one of their international links. When this happens, you may find you can access most other sites without any problems, because those sites are hosted in different geographical locations, and thus your connections to them use different networks. Such problems typically take a few hours to a few days to clear up.

Sometimes the problems can be caused more locally. If you're on a distant or congested wifi network, that can also cause the connection to AnkiWeb to become unstable.

Unstable connections tend to become more apparent the more data you transfer. If you are experiencing packet loss you may find you can load ankiweb.net fine most of the time, but still have issues when syncing - especially if you have a lot of data to transfer.

**Working around the issue**

The best thing to do is try syncing on a different network - using your phone's cellular connection for example, or using your work or school's wifi network. In many cases you will find that resolves the problem, and after waiting a few hours to a few days, the problem with your home network should have gone away.

**Determining packet loss**

A tool called 'mtr' can be useful for determining packet loss.

- Windows: <https://sourceforge.net/projects/winmtr/>
- Mac: <https://www.reddit.com/r/TagPro/comments/2j6qx7/how_to_run_an_mtr_on_mac/>
- Linux: install 'mtr' from your package manager

Once installed, you should use mtr to access 'ankiweb.net', and let it run for about 15 minutes. If any of the steps between your device and the AnkiWeb servers show a packet loss above 0%, it indicates instability.

If you are seeing no packet loss at all but are still having problems syncing, you may be having a different problem - please contact us and let us know.
