# AFK Arena CDN

This repository is used to store all the unit icons used in the game [AFK Arena](https://www.afkarena.com/). 
You can use this repository as a CDN.
Since the assets provided by Lilith are rather small, they all have been upscaled by using [waifu2x](https://github.com/nihui/waifu2x-ncnn-vulkan).
New units are automatically added when they are pushed on Lilith's CDN. 
All the assets have been converted to the webp format with a 90% quality to reduce their size.

## Usage
The file `index.json` contains the list of all the assets available in this repository. You can download it to know if an asset exists or not.
```
https://raw.githubusercontent.com/afk-mine/cdn/main/index.json
```
Then, there is two folders to download the assets: `unit_icon` and `unit_icon_by_id`. The first folder contains the assets with their original name, while the second folder contains the assets with their ID as name. 
The URL of an asset is 
```
https://raw.githubusercontent.com/afk-mine/cdn/main/<asset_name>
```
For example, the URL of the asset `unit_icon/Admiral.jpg` is `https://raw.githubusercontent.com/afk-mine/cdn/main/unit_icon/Admiral.webp`.
And if you know each unit ID, you can also use this URL: `https://raw.githubusercontent.com/afk-mine/cdn/main/unit_icon_by_id/171.webp`.

Many variants exists for the icons:
- `<name>.webp`: the original icon
- `<name>_Battle.webp`: the in battle icon (only for heroes)
- `<name>_<ID>.webp`: the ID is usually for skins
- `<name>_basic.webp`: the basic form icon (only for pets)

## Scaling
The assets have been upscaled by using [waifu2x](https://github.com/nihui/waifu2x-ncnn-vulkan). You just need to specify the `_2x` or `_4x` suffix to the asset name to get the upscaled version. Demo:

![Admiral](https://raw.githubusercontent.com/afk-mine/cdn/main/unit_icon/Admiral.webp)

![Admiral_2x](https://raw.githubusercontent.com/afk-mine/cdn/main/unit_icon/Admiral_2x.webp)

![Admiral_4x](https://raw.githubusercontent.com/afk-mine/cdn/main/unit_icon/Admiral_4x.webp)

