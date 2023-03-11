# SecureAuth

SecureAuth is a resource for FiveM servers that detects blacklisted applications and prevents them from running. This helps ensure that players cannot cheat or use malicious software to gain an unfair advantage in the game.

## Installation

To use SecureAuth, follow these steps:

1. Download the latest content.
2. Extract the contents of the ZIP file to your server's `resources` folder.
3. Add `start secureauth` to your server's `server.cfg` file.
4. Restart your FiveM server.

## Usage

Once installed, SecureAuth will automatically run in the background and monitor for blacklisted applications. If it detects any, it will print a warning message to the server console and prevent the application from running.

You can customize the list of blacklisted applications by editing the `blacklisted_apps_detect` array in the `server.lua` file.

## License

SecureAuth is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more information.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Credits

SecureAuth was created by [Nic](https://github.com/Nic-223).

## Support

If you have any questions or issues with SecureAuth, please open an issue on the [GitHub repository](https://github.com/Nic-223/secureauth/issues).
