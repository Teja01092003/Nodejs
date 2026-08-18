const http = require('http');

const port = process.env.PORT || 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Azure Demo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #4b0082, #00008b);
            color: white;
            min-height: 100vh;
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            background: rgba(0,0,0,0.2);
        }

        nav h2 {
            color: white;
        }

        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        nav ul li {
            cursor: pointer;
        }

        .hero {
            text-align: center;
            padding: 100px 20px;
        }

        .hero h1 {
            font-size: 60px;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 24px;
            margin-bottom: 40px;
        }

        .btn {
            background: white;
            color: #4b0082;
            padding: 15px 35px;
            border-radius: 10px;
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
        }

        .cards {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            margin: 80px 20px;
        }

        .card {
            width: 300px;
            padding: 30px;
            background: rgba(255,255,255,0.1);
            border-radius: 15px;
            text-align: center;
        }

        .card h3 {
            margin-bottom: 15px;
        }

        footer {
            text-align: center;
            padding: 30px;
        }
    </style>
</head>
<body>

    <nav>
        <h2>Azure Demo</h2>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Contact</li>
        </ul>
    </nav>

    <section class="hero">
        <h1>Welcome to Azure App Service! V1</h1>
        <p>This is a simple Node.js application deployed on Azure.</p>
        <a href="#" class="btn">Get Started</a>
    </section>

    <section class="cards">
        <div class="card">
            <h3>⚡ Fast</h3>
            <p>Built with Node.js for high performance.</p>
        </div>

        <div class="card">
            <h3>☁️ Reliable</h3>
            <p>Powered by Azure App Service.</p>
        </div>

        <div class="card">
            <h3>🔒 Secure</h3>
            <p>Enterprise-grade security by Azure.</p>
        </div>
    </section>

    <footer>
        © 2026 Azure Demo. All rights reserved.
    </footer>

</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
