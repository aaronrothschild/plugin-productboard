// This file is automatically generated. Do not modify it manually.

const manifest = JSON.parse(`
{
    "id": "com.mattermost.productboard",
    "name": "ProductBoard Customer Feedback collector",
    "description": "Gather all your customer feedback in one place, generate customer notes from Mattermost posts.",
    "version": "0.1.0",
    "min_server_version": "5.12.0",
    "server": {
        "executables": {
            "linux-amd64": "server/dist/plugin-linux-amd64",
            "darwin-amd64": "server/dist/plugin-darwin-amd64",
            "windows-amd64": "server/dist/plugin-windows-amd64.exe"
        },
        "executable": ""
    },
    "webapp": {
        "bundle_path": "webapp/dist/main.js"
    },
    "settings_schema": {
        "header": "",
        "footer": "",
        "settings": [
            {
                "key": "ProductBoardAPIKey",
                "display_name": "ProductBoard API Key",
                "type": "text",
                "help_text": "Productboard API Key used to create notes",
                "placeholder": "",
                "default": null
            }
        ]
    }
}
`);

export default manifest;
export const id = manifest.id;
export const version = manifest.version;
