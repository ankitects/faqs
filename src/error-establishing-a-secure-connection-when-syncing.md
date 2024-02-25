# "Error establishing a secure connection." when syncing

This error happens when Anki tries to make a connection to AnkiWeb, and receives an invalid response. It can be caused by:

- antivirus or firewall software on your machine
- a filtered network connection, common on work and school networks
- an unreliable network connection

**Antivirus/firewall/VPN/proxy**

Antivirus, firewall and VPN programs can often cause problems when they filter network traffic.

The first thing to try is to add an exception for Anki.

If that doesn't work, try disabling your antivirus temporarily.

Unfortunately some antivirus programs do not completely stop themselves when disabled. We have seen cases where the only way to resolve the problem was to completely uninstall the antivirus program. We do not expect you to stop using your antivirus program just to run Anki, but if the previous suggestions have not helped, it is worth uninstalling and restarting your computer to see if it resolves the problem. If it does, then please contact your antivirus company to report the issue to them.

**Unreliable internet**

If your wifi or internet connection is experiencing troubles, the messages from AnkiWeb may arrive corrupted or not at all, which can cause this error message to occur. It may be worth checking for packet loss:

<https://faqs.ankiweb.net/syncing-failed-connection-timed-out-errors-when-syncing.html>
