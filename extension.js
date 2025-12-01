const vscode = require("vscode");
const http = require("http");
const path = require("path");
const fs = require("fs");

let server;

function activate(context) {
  // Create status bar button
  const statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  statusBarItem.command = "goLive.startServer";
  statusBarItem.text = "$(play) Go Live";
  statusBarItem.tooltip = "Start local server";
  statusBarItem.show();

  // Register command
  const disposable = vscode.commands.registerCommand(
    "goLive.startServer",
    () => {
      if (server) {
        server.close();
        server = null;
        statusBarItem.text = "$(play) Go Live";
        vscode.window.showInformationMessage("Server stopped");
        return;
      }

      startServer();
      statusBarItem.text = "$(stop) Stop Server";
    }
  );

  context.subscriptions.push(disposable, statusBarItem);
}

function startServer() {
  const PORT = 3000;

  server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Go Live</title>
        <style>
          body { font-family: Arial; margin: 50px; text-align: center; }
          h1 { color: #333; }
        </style>
      </head>
      <body>
        <h1>Your local server is live! 🚀</h1>
      </body>
      </html>
    `);
  });

  server.listen(PORT, () => {
    vscode.window.showInformationMessage(
      `Server running at http://localhost:${PORT}/`
    );
    const openUrl = vscode.Uri.parse(`http://localhost:${PORT}/`);
    vscode.env.openExternal(openUrl);
  });

  server.on("error", (err) => {
    vscode.window.showErrorMessage(`Server error: ${err.message}`);
  });
}

function deactivate() {
  if (server) {
    server.close();
  }
}

module.exports = {
  activate,
  deactivate,
};
