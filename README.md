# 🕹️ Loja Gamer

Aplicação Angular integrada com **JSON Server**, desenvolvida para **listagem e cadastro de produtos**.  
Este projeto demonstra o consumo de API REST fake via HTTP, o uso de **Angular Material**, **Bootstrap**, e a estrutura modular do Angular.

---

## 🚀 Tecnologias Utilizadas

- **Angular 17**
- **TypeScript**
- **Bootstrap 5**
- **Angular Material**
- **JSON Server**

---

## ⚙️ Como Executar o Projeto

### 1️⃣ Instalar as dependências
```bash
npm install

2️⃣ Iniciar o servidor JSON (API) | Start the JSON Server (API)
npx json-server --watch db.json --port 3000


📡 A API ficará disponível em | The API will be available at:
👉 http://localhost:3000/produtos

3️⃣ Iniciar a aplicação Angular | Start the Angular Application
ng serve

🌐 Acesse em | Access at:
👉 http://localhost:4200

🧩 Funcionalidades | Features

✅ Listagem de produtos — Consome dados da API JSON Server.
✅ Cadastro de produtos — Formulário conectado à API.
✅ Feedback visual após o cadastro.
✅ Design responsivo com Angular Material.
✅ Componentização modular (Home, Login, Footer, Lista e Cadastro).

✅ Product listing — Fetches data from the JSON Server API.
✅ Product registration — Form bound to API via service.
✅ Visual feedback after successful registration.
✅ Responsive design using Angular Material.
✅ Modular components (Home, Login, Footer, Product List, Product Register).

📊 Estrutura de Pastas | Project Structure
src/
 ├── app/
 │   ├── home/
 │   ├── login/
 │   ├── footer/
 │   ├── produtos-lista/
 │   ├── produtos-cadastro/
 │   └── services/
 ├── assets/
 └── public/

 📄 Diagrama de Caso de Uso | Use Case Diagram

📁 O diagrama visual do sistema encontra-se em:
The visual use case diagram is located at:
public/img/Diagrama.png

Equipe de Desenvolvimento | Development Team

Roberto Micaías — Documentação, Estrutura e Integração API
Documentation, Structure, and API Integration

🧱 Requisitos do Projeto | Project Requirements

✔️ Exibir lista de produtos consumindo API JSON Server
✔️ Cadastrar novos produtos via Service Angular
✔️ Layout modular e responsivo
✔️ Persistência em db.json

✔️ Display product list consuming JSON Server API
✔️ Register new products via Angular Service
✔️ Modular and responsive layout
✔️ Data persistence in db.json

Observações | Notes

O arquivo db.json deve conter pelo menos:
The db.json file must contain at least:

{
  "produtos": []
}


Caso apareça erro de tipos, instale:
If type definition errors appear, install:

npm install --save-dev @types/node

🏁 Versão Final | Final Version

Loja Gamer — versão funcional e estável (Outubro/2025)
Gamer Store — functional and stable release (October/2025)
Desenvolvido como parte da atividade de integração de APIs e Angular.
Developed as part of an academic project focused on API integration with Angular.

🧾 Licença | License

Este projeto é de uso educacional e livre para fins de estudo.
This project is open and free for educational purposes.