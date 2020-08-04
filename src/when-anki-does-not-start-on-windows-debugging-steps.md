# When Anki doesn't start on Windows (debugging steps)

Please try the following:

- Ensure you're on the latest Anki 2.1 version.
- Go into the Windows Update settings, and make sure all updates have been installed.
- Restart your computer.

If problems continue after that, instead of running Anki directly, please use Start>Run and type cmd.exe. When a console window appears, please type

    cd \program files\anki & anki-console

Presumably Anki will fail to open like before. But it should give you some lines of debugging info; please copy&paste or screenshot the text and attach it to your support ticket.
