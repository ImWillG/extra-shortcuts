import { App, Editor, MarkdownView, Plugin } from 'obsidian';

export default class MyExtraShortcutsPlugin extends Plugin {
	onload() {
		console.log("Extra Shortcuts Plugin loaded!");

		this.addCommand({
			id: "add-hover-note",
			name: "Add Hover Note",
			hotkeys: [
				{
					modifiers: ["Ctrl", "Shift"],
					key: "P",
				},
			],
			editorCallback: (editor) => {
				const selectedText = editor.getSelection();
				if (selectedText) {
					// Place the cursor between the double quotes
					const abbrText = `<abbr title="">${selectedText}</abbr>`;
					const cursorPosition = editor.getCursor();
					editor.replaceSelection(abbrText, "around"); // true as a string, not a boolean
					const newCursorPosition = {
						line: cursorPosition.line,
						ch: cursorPosition.ch - selectedText.length + 13 // 13 is the length of <abbr title="
					};

					// Set the cursor inside the title attribute
					editor.setCursor(newCursorPosition);

				}
			},
		}
	);
	this.addCommand({
		id: "add-underline",
		name: "Add Underline",
		hotkeys: [
			{
				modifiers: ["Ctrl", "Shift"],
				key: "U",
			},
		],
		editorCallback: (editor) => {
			const selectedText = editor.getSelection();
			if (selectedText) {
				const underlineText = `<u>${selectedText}</u>`;
				const cursorPosition = editor.getCursor();
				editor.replaceSelection(underlineText, "around"); // true as a string, not a boolean
				const newCursorPosition = {
					line: cursorPosition.line,
					ch: cursorPosition.ch - selectedText.length + 3 // 13 is the length of <abbr title="
				};

				// Set the cursor inside the title attribute
				editor.setCursor(newCursorPosition);

			}
		},
	}
);
	}

	onunload() {
		console.log("Unloading Extra Shortcuts Plugin");
	}
}
