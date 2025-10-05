<h1>Mini OLX Platform</h1>
<p>A small OLX-like application where users can register, log in, and perform CRUD operations (Create, Read, Update, Delete) on products.  
Built with Flutter (frontend) and Node.js + Express + MongoDB (backend)</p>
<h3>Steps to Setup</h3>
<h4>Clone the Repository</h4>
<p>git clone https://github.com/KashishShakya/Mini-OLX
  <br>
cd Mini-OLX></p>
<h4>Backend Setup</h4>
<p>
  cd backend
<br>
  npm install
</p>
<h4>
  Create a .env file</h4>
  <p>
  PORT=5000<br>
  MONGO_URI & JWT_SECRET
</p>
  npm start
</p>
<h4>Frontend Setup</h4>
<p>
  cd frontend
<br>
  flutter pub get
</p>
<p>
  In product_service.dart or auth_service.dart, make sure base URL matches the backend:
<br>
final String baseUrl = 'http://10.0.2.2:5000'; // for Android emulator
// or
final String baseUrl = 'http://localhost:5000'; // for web/desktop
</p>
<p>flutter run</p>
