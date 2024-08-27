# Basic-WebServer-NodeJS-V1

### Requirements

This project requires:

- Node.js
- PC or Hosting Server Support Node.js or VPS Server or Dedicated Server or orther Server.

### Installation

Clone the repository:

```bash
$ git clone https://github.com/Happyuky7/Basic-WebServer-NodeJS-V1.git
```

Install npm dependencies

```bash
$ npm install
```

Configure server port in

```js
const port = 3000;
```

replace the port for your server port.

Start the server

```bash
$ npm start
```
OR
```bash
$ node .
```

In your browser using:

```bash
http://localhost:port/
```
default port
```bash
http://localhost:3000/
```

If using hosting or vps or dedicated, using your hosting ip address.
Note: if using vps or dedicated you need to configure the firewall open port using server.
- Example open port in `ufw` in ubuntu:
    ```bash
    $ ufw status
    $ ufw allow <port>
    ```

Example:
replace the ip address and port for your hosting
```bash
http://<ip-here>:<port-here>/
```

Example change ip address and port:
```bash
http://127.0.0.1:3000/
```

---

## Aditional Information 

[My website](https://happy7.xyz), My website

[Discord](https://discord.gg/3EebYUyeUX), Support My Server Discord

---

Happyuky7

## Special Thanks

- **Visual Studio Code** [Link](https://code.visualstudio.com/)
  ![Visual Studio Code Logo](./vscode.png)
  - Description: Visual Studio Code is a lightweight and powerful source code editor that provides excellent support for various programming languages, debugging, and version control integration.

Happy coding!