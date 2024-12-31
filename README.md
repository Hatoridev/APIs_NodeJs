Desculpe pela confusão! Vou corrigir a versão do README para incluir o SQLite3, já que ele é parte essencial do seu projeto. Também removo o `express` que não era necessário, já que o foco aqui é o uso do SQLite3 com Node.js. Aqui está o README corrigido:

---

# APIs_NodeJs

Repository containing 8 lessons focused on creating APIs with Node.js and SQLite3. Each lesson covers a specific topic related to building back-end applications using Node.js and SQLite3.

## How to Run

### Termux (Android):

1. **Open the Termux app**.
2. **Update and install required packages** using the following commands:
   ```bash
   pkg update && pkg upgrade
   pkg install git
   pkg install nodejs
   pkg install sqlite
   ```

3. **Clone the repository**:
   ```bash
   git clone https://github.com/Hatoridev/APIs_NodeJs.git
   cd APIs_NodeJs
   ```

4. **Navigate to the desired directory** (example for Aula 01):
   ```bash
   cd aula01  # or cd aula02, cd aula03, etc.
   ```

5. **Install dependencies**:
   ```bash
   npm install
   ```

6. **Start the Node.js server**:
   ```bash
   node server.js
   ```

7. **Access the API in your browser or via Postman**:
   - **For specific routes** (e.g., `/api/users`):
     ```
     http://localhost:3000/api/users
     ```

   - To access from another device, replace `localhost` with the device's IP address:
     ```
     http://<your-device-ip>:3000/api/users
     ```

---

### Windows:

1. **Install Git**:  
   Download and install [Git for Windows](https://gitforwindows.org/).

2. **Clone the repository and navigate to the directory**:
   ```bash
   git clone https://github.com/Hatoridev/APIs_NodeJs.git
   cd APIs_NodeJs
   ```

3. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or cd aula02, cd aula03, etc.
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Start the Node.js server**:
   ```bash
   node server.js
   ```

6. **Access the API in your browser or via Postman**:
   - **For specific routes** (e.g., `/api/users`):
     ```
     http://localhost:3000/api/users
     ```

---

### Debian/Linux:

1. **Install required packages**:
   ```bash
   sudo apt update && sudo apt upgrade
   sudo apt install git
   sudo apt install nodejs
   sudo apt install sqlite3
   git clone https://github.com/Hatoridev/APIs_NodeJs.git
   cd APIs_NodeJs
   ```

2. **Navigate to the desired directory**:
   ```bash
   cd aula01  # or cd aula02, cd aula03, etc.
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the Node.js server**:
   ```bash
   node server.js
   ```

5. **Access the API in your browser or via Postman**:
   - **For specific routes** (e.g., `/api/users`):
     ```
     http://localhost:3000/api/users
     ```

---

## Languages

<div align="left">  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="60" alt="JavaScript logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="60" alt="Node.js logo" />  
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" height="60" alt="SQLite logo" />  
</div>

---

Agora, o README está ajustado corretamente para o uso de **SQLite3** e **Node.js** em todas as plataformas e inclui a instalação do **SQLite3** nas etapas.
