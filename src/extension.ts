import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "file-nesting-explorer" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "file-nesting-explorer.helloWorld",
    () => {
      vscode.window.showInformationMessage(
        "Hello World from File nesting explorer!"
      );
    }
  );

  context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
