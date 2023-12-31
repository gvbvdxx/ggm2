var http = require("http");
var startServerButton = document.getElementById("previewBrowser");
var startServerButtonText = startServerButton.innerHTML;
var gameCode = `
<!DOCTYPE HTML>
<html>
<head>
<title>Gvbvdxx Game Maker 2 - Preview Of Game</title>
		<style>
			/* The animation code */
			@keyframes logo {
			  0%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			  50%  {width:300px;margin-left:-150px;filter: brightness(1);transition: 0.01s;}
			  100%   {width:350px;margin-left:-175px;filter: brightness(1.6);}
			}
			/* The element to apply the animation to */
			#logo {
			  animation: rotation 0 linear;
			  animation-name: logo;
			  animation-duration: 2s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  transition: 0.5s;
			}
			/* The animation code */
			@keyframes example {
			  0%   {transform: rotate(0deg);}
			  100%  {transform: rotate(360deg);}
			}
			/* The element to apply the animation to */
			.loading {
			  width: 100px;
			  height: 100px;
			  animation: rotation 8s infinite linear;
			  animation-name: example;
			  animation-duration: 0.5s;
			  animation-delay: 0s;
			  animation-iteration-count: infinite;
			  position:fixed;
			  top:50%;
			  left:50%;
			  margin-top:-50px;
			  margin-left:-50px;
			  transition: 0.5s;
			}
		</style>
</head>
<body style="background:black;">

<img id="loading" class="loading" selectable=false draggable=false src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4NyIgaGVpZ2h0PSI4NyIgdmlld0JveD0iMCwwLDg3LDg3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk2LjUsLTEzNi41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjAxLjUsMTgwYzAsLTIxLjI2Mjk2IDE3LjIzNzA0LC0zOC41IDM4LjUsLTM4LjVjMjEuMjYyOTYsMCAzOC41LDE3LjIzNzA0IDM4LjUsMzguNWMwLDIxLjI2Mjk2IC0xNy4yMzcwNCwzOC41IC0zOC41LDM4LjVjLTIxLjI2Mjk2LDAgLTM4LjUsLTE3LjIzNzA0IC0zOC41LC0zOC41eiIgc3Ryb2tlPSIjZmZmZmZmIi8+PHBhdGggZD0iTTIwNi40MjE0NiwxOTguNDQxOTdjLTMuMTM3NzgsLTUuNDE1MzggLTQuOTIxNDYsLTExLjYyOTE3IC00LjkyMTQ2LC0xOC4yMzYwNmMwLC0xMC4wNzQ3NSA0LjE0NzU2LC0xOS4yMzU0NyAxMC45MTk0NywtMjYuMDQ0OTIiIHN0cm9rZT0iI2E3YTdhNyIvPjwvZz48L2c+PC9zdmc+">
<div id="app" hidden>
		<!--<img id="logo" style="position:fixed;top:50%;left:50%;margin-left:-150px;margin-top:-100px;" width=300 height=200 src="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMDMuOTEwNDYiIGhlaWdodD0iMTEwLjM3NzExIiB2aWV3Qm94PSIwLDAsMzAzLjkxMDQ2LDExMC4zNzcxMSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIxMzUuMjgzMTEiIHkxPSIxMzUuMTQzOTUiIHgyPSIxMzUuMjgzMTEiIHkyPSIyMzIuODcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjYjBiMGIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTY1ZTYzIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEyOC42MTY0NSIgeTE9IjEyOC4xNDM5NSIgeDI9IjEyOC42MTY0NSIgeTI9IjIyNS44NzA2NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNlZmYwZjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MThkOTQiLz48L2xpbmVhckdyYWRpZW50PjxyYWRpYWxHcmFkaWVudCBjeD0iMTQ3Ljc0NTYxIiBjeT0iMTM1LjMzMzMzIiByPSI2LjUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMyI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZmZmZmIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmZmZmIiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjEzLjk0OTc4IiB5MT0iMTM0Ljk3NzI4IiB4Mj0iMjEzLjk0OTc4IiB5Mj0iMjMyLjcwMzk5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2IwYjBiMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2NWU2MyIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyMDguNjE2NDUiIHkxPSIxMjguNjQzOTUiIHgyPSIyMDguNjE2NDUiIHkyPSIyMjYuMzcwNjYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItNSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZWZmMGYwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjODE4ZDk0Ii8+PC9saW5lYXJHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjIyNi40MTIyOCIgY3k9IjEzNiIgcj0iNi41IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTYiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmZmZmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI3My41Njk3MyIgeTE9IjE5Ny41MDY0NiIgeDI9IjI3My41Njk3MyIgeTI9IjIzMS4wMDY0NiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci03Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiMGIwYjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM1NjVlNjMiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjY5LjkwMzA3IiB5MT0iMTkyLjUwNjQ2IiB4Mj0iMjY5LjkwMzA3IiB5Mj0iMjI2LjAwNjQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTgiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2VmZjBmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgxOGQ5NCIvPjwvbGluZWFyR3JhZGllbnQ+PHJhZGlhbEdyYWRpZW50IGN4PSIzODAuNzQ1NjEiIGN5PSIxMzciIHI9IjYuNSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci05Ij48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmZmZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmZmZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC05MS4wNTMxNSwtMTI0LjYyOTM1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48Zz48cGF0aCBkPSJNMTAxLjQwODU3LDE3Mi4wNjIxYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM2LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDQsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMiwtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik05NC43NDE5MSwxNjUuMDYyMWMyLjEyODM0LC0xNC40ODAzNiAxMy45MzAzNiwtMjguNjQyODEgMjUuMzM5MzIsLTMzLjIzNDE3YzE2LjM5MzIzLC02LjU5NzE5IDM0LjA3MTg0LC0yLjMyMTQ3IDM0LjA3MTg0LC0yLjMyMTQ3bDAuMTYyODcsMTcuNTEzOTZjMCwwIC0xNy4xNTcyMiwtMC4xNzk0NyAtMjkuNDMwNzgsNC41ODQwNGMtNy4yMTc1MiwyLjgwMTIgLTEyLjA5MjA0LDguMjkzMDEgLTEyLjU0ODE4LDEzLjkwNzA0Yy0wLjcyNTc2LDguOTMyNDcgLTIuMTgwNjcsMjQuNTc0MiA2LjI1MDk4LDMzLjQ3NzIxYzUuMTE0NCw1LjQwMDMyIDIzLjY3Mzc1LDYuNTg2NzkgMjMuNjczNzUsNi41ODY3OWwtMC4zNDk0NSwtMTguODk3MTRsLTIwLjA5MTM0LDAuNDY4MzNsMC42NzY4NywtMTkuOTM4NWw0MS4xODE5MywtMC42MjU1MmwtMC41MjY2Niw1OC45MjM3OWwtMzEuNDYyMTQsMC4zNjMwN2MwLDAgLTQ2LjA0MDUsMS4wNDcxNCAtMzYuOTQ5MDIsLTYwLjgwNzQzeiIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTEzOC4xNjY2NiwxMzcuNWMwLC0zLjU4OTg1IDIuOTEwMTUsLTYuNSA2LjUsLTYuNWMzLjU4OTg1LDAgNi41LDIuOTEwMTUgNi41LDYuNWMwLDMuNTg5ODUgLTIuOTEwMTUsNi41IC02LjUsNi41Yy0zLjU4OTg1LDAgLTYuNSwtMi45MTAxNSAtNi41LC02LjV6IiBmaWxsPSJ1cmwoI2NvbG9yLTMpIi8+PHBhdGggZD0iTTE0My44Njg0MiwxMzUuNTYxNGMwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc2LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0xODAuMDc1MjQsMTcxLjg5NTQzYzIuMTI4MzQsLTE0LjQ4MDM2IDEzLjkzMDM3LC0yOC42NDI4MSAyNS4zMzkzMiwtMzMuMjM0MTdjMTYuMzkzMjMsLTYuNTk3MTkgMzQuMDcxODQsLTIuMzIxNDcgMzQuMDcxODQsLTIuMzIxNDdsMC4xNjI4NywxNy41MTM5NmMwLDAgLTE3LjE1NzIyLC0wLjE3OTQ3IC0yOS40MzA3OCw0LjU4NDA0Yy03LjIxNzUyLDIuODAxMiAtMTIuMDkyMDUsOC4yOTMwMSAtMTIuNTQ4MTgsMTMuOTA3MDRjLTAuNzI1NzYsOC45MzI0NyAtMi4xODA2NywyNC41NzQyIDYuMjUwOTgsMzMuNDc3MjFjNS4xMTQ0LDUuNDAwMzIgMjMuNjczNzUsNi41ODY3OSAyMy42NzM3NSw2LjU4Njc5bC0wLjM0OTQ1LC0xOC44OTcxNGwtMjAuMDkxMzQsMC40NjgzM2wwLjY3Njg3LC0xOS45Mzg1bDQxLjE4MTkzLC0wLjYyNTUybC0wLjUyNjY2LDU4LjkyMzc5bC0zMS40NjIxNCwwLjM2MzA3YzAsMCAtNDYuMDQwNSwxLjA0NzE0IC0zNi45NDkwMywtNjAuODA3NDN6IiBmaWxsPSJ1cmwoI2NvbG9yLTQpIiBzdHJva2U9IiM0MjQyNDIiIHN0cm9rZS13aWR0aD0iNSIvPjxwYXRoIGQ9Ik0xNzQuNzQxOTEsMTY1LjU2MjFjMi4xMjgzNCwtMTQuNDgwMzYgMTMuOTMwMzcsLTI4LjY0MjgxIDI1LjMzOTMyLC0zMy4yMzQxN2MxNi4zOTMyMywtNi41OTcxOSAzNC4wNzE4NCwtMi4zMjE0NyAzNC4wNzE4NCwtMi4zMjE0N2wwLjE2Mjg3LDE3LjUxMzk2YzAsMCAtMTcuMTU3MjIsLTAuMTc5NDcgLTI5LjQzMDc4LDQuNTg0MDRjLTcuMjE3NTIsMi44MDEyIC0xMi4wOTIwNSw4LjI5MzAxIC0xMi41NDgxOCwxMy45MDcwNGMtMC43MjU3Niw4LjkzMjQ3IC0yLjE4MDY3LDI0LjU3NDIgNi4yNTA5OCwzMy40NzcyMWM1LjExNDQsNS40MDAzMiAyMy42NzM3NSw2LjU4Njc5IDIzLjY3Mzc1LDYuNTg2NzlsLTAuMzQ5NDUsLTE4Ljg5NzE0bC0yMC4wOTEzNCwwLjQ2ODMzbDAuNjc2ODcsLTE5LjkzODVsNDEuMTgxOTMsLTAuNjI1NTJsLTAuNTI2NjYsNTguOTIzNzlsLTMxLjQ2MjE0LDAuMzYzMDdjMCwwIC00Ni4wNDA1LDEuMDQ3MTQgLTM2Ljk0OTAzLC02MC44MDc0M3oiIGZpbGw9InVybCgjY29sb3ItNSkiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSI1Ii8+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yMTYuODMzMzMsMTM4LjE2NjY3YzAsLTMuNTg5ODUgMi45MTAxNSwtNi41IDYuNSwtNi41YzMuNTg5ODUsMCA2LjUsMi45MTAxNSA2LjUsNi41YzAsMy41ODk4NSAtMi45MTAxNSw2LjUgLTYuNSw2LjVjLTMuNTg5ODUsMCAtNi41LC0yLjkxMDE1IC02LjUsLTYuNXoiIGZpbGw9InVybCgjY29sb3ItNikiLz48cGF0aCBkPSJNMjIyLjUzNTA5LDEzNi4yMjgwN2MwLC0wLjY3MDEyIDEuMzY2NDIsLTAuNDAxODUgMS43ODcxLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzUsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzQsMC4zNzgwNCAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM0LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MiwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTcsLTEuODI3MzFjLTAuNjA4MzIsLTAuNDY5MTggLTEuNzg2MDksMC4wODkxNyAtMS43ODYwOSwtMC43Mzg0N3oiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjxnPjxwYXRoIGQ9Ik0yNTUuODE5NzMsMjMyLjUwNjQ2bDU5LjE1ODcxLC04OS44OTUyNmMwLDAgMy40NDE2MywtMTAuOTE4OTMgMTUuMDgwMTgsLTEwLjQ2ODI3YzkuNTYyMywwLjM3MDI2IDcuOTYyNTUsNjAuOTg4OTggNy45NjI1NSw2MC45ODg5OGMwLDAgOC44OTc1MiwtMTMuNTUxOTIgMTcuNzMwMDEsLTI4LjI2Njg0YzkuNTQxNTQsLTE1Ljg5NjIyIDE1LjQyNDY5LC0zMi4wNjYxNiAyNS42NTM4NywtMzIuNjMwNTljMy45MjgxOCwtMC4yMTY3NSAxMC40MzM2OSw5LjM3NzY1IDEwLjQzMzY5LDkuMzc3NjVsMC42MDgxMSw4OC4zODI5NmwtMTkuNzk1NSwwLjU3NTAzbDEuMTY4MzksLTYwLjA2MzY2bC0yOC40NjU3OCw0NS41MjY5MWMwLDAgLTEzLjAzNzQ5LDE2LjI4MDYxIC0xNy4xMzE1NywxNi4xMjE3MmMtOS4zMjA3NiwtMC4zNjE3NSAtMTIuOTM5MzUsLTExLjM1ODE4IC0xMi45MzkzNSwtMTEuMzU4MThsLTAuNDY3MzgsLTQ3LjY1MjgzbC0zNi45OTU5Myw1OS4zNjIzOHoiIGZpbGw9InVybCgjY29sb3ItNykiIHN0cm9rZT0iIzQyNDI0MiIgc3Ryb2tlLXdpZHRoPSI1Ii8+PHBhdGggZD0iTTI1Mi4xNTMwNywyMjcuNTA2NDZsNTkuMTU4NzEsLTg5Ljg5NTI2YzAsMCAzLjQ0MTYzLC0xMC45MTg5MyAxNS4wODAxOCwtMTAuNDY4MjdjOS41NjIzLDAuMzcwMjYgNy45NjI1NSw2MC45ODg5OCA3Ljk2MjU1LDYwLjk4ODk4YzAsMCA4Ljg5NzUyLC0xMy41NTE5MiAxNy43MzAwMSwtMjguMjY2ODRjOS41NDE1NCwtMTUuODk2MjIgMTUuNDI0NjksLTMyLjA2NjE2IDI1LjY1Mzg3LC0zMi42MzA1OWMzLjkyODE4LC0wLjIxNjc1IDEwLjQzMzY5LDkuMzc3NjUgMTAuNDMzNjksOS4zNzc2NWwwLjYwODExLDg4LjM4Mjk2bC0xOS43OTU1LDAuNTc1MDNsMS4xNjgzOSwtNjAuMDYzNjZsLTI4LjQ2NTc4LDQ1LjUyNjkxYzAsMCAtMTMuMDM3NDksMTYuMjgwNjEgLTE3LjEzMTU3LDE2LjEyMTcyYy05LjMyMDc2LC0wLjM2MTc1IC0xMi45MzkzNSwtMTEuMzU4MTggLTEyLjkzOTM1LC0xMS4zNTgxOGwtMC40NjczOCwtNDcuNjUyODNsLTM2Ljk5NTkzLDU5LjM2MjM4eiIgZmlsbD0idXJsKCNjb2xvci04KSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjUiLz48ZyBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCI+PHBhdGggZD0iTTM3MS4xNjY2NywxMzkuMTY2NjdjMCwtMy41ODk4NSAyLjkxMDE1LC02LjUgNi41LC02LjVjMy41ODk4NSwwIDYuNSwyLjkxMDE1IDYuNSw2LjVjMCwzLjU4OTg1IC0yLjkxMDE1LDYuNSAtNi41LDYuNWMtMy41ODk4NSwwIC02LjUsLTIuOTEwMTUgLTYuNSwtNi41eiIgZmlsbD0idXJsKCNjb2xvci05KSIvPjxwYXRoIGQ9Ik0zNzYuODY4NDIsMTM3LjIyODA3YzAsLTAuNjcwMTIgMS4zNjY0MywtMC40MDE4NSAxLjc4NzExLC0wLjg1ODg2YzAuNDY4OSwtMC41MDkzOSAwLjAzMTc1LC0xLjcwNjkzIDAuNzc4NjgsLTEuNzA2OTNjMC45NDg1MSwwIDAuNDgyMzYsMC45NzY5OCAwLjkyNjQsMS43NDIzYzAuMjE5MzUsMC4zNzgwNSAxLjYzOTM5LDAuMzU0OTUgMS42MzkzOSwwLjgyMzQ5YzAsMS4wMTYzIC0wLjY4MzM1LDAuNDE1MjMgLTEuNTQwMzEsMC44MzA3MWMtMC4zMzc5MSwwLjE2MzgzIC0wLjYyNDc0LDEuNzM1MDggLTEuMDI1NDgsMS43MzUwOGMtMC41ODk0MSwwIC0wLjM0NjQ4LC0xLjQ5MzE5IC0wLjc3OTY5LC0xLjgyNzMyYy0wLjYwODMxLC0wLjQ2OTE3IC0xLjc4NjEsMC4wODkxNyAtMS43ODYxLC0wLjczODQ3eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz4=">-->
	<center id="text">
	<h1 style="font-family:arial;color:white;position:fixed;top:50%;left:50%;margin-left:-150px;margin-top:100px;">
		please click to play</h1>
	</center>
	<center>
		<canvas id="gameScreen" hidden width=600 height=360 style="width:88.5%;height:calc(100vh - 20px);image-rendering:pixelated;"></canvas>
	</center>
</div>

<script src="vm.js"></script>
<script src="script.js"></script>
</body>

</html>
`;

var VMCode = `/**
 * 2021 Gvbvdxx (C)
 * This Code Below Belongs To Gvbvdxx,
 * This Code HAS BEEN Compressed, To
 * Make It Load Faster.
 * This Is The FULL Game Engine for the Gvbvdxx Game Maker 2
*/
window.audioEngine={sfx:{audio:null,audioelements:[],play:function(t){this.audio=document.createElement("audio"),this.audio.src=t,this.audio.play(),this.audioelements.push(this.audio),this.audio.onended=function(){audioEngine.sfx.audioelements.indexOf(this.audio);var t,e=[];for(t in audioEngine.sfx.audioelements)audioEngine.sfx.audioelements&&e.push(audioEngine.sfx.audioelements[t]);audioEngine.sfx.audioelements=e}}},bgm:{audio:document.createElement("audio"),isPlaying:!1,play:function(){try{this.audio.play(),this.isPlaying=!0}catch(t){console.warn("[AudioEngine]:error ignored"+t)}},setSrc:function(t){this.audio.src=t}},stop:function(){try{for(var t in this.sfx.audio&&(this.sfx.audio.pause(),this.sfx.audio=null),this.bgm.isPlaying=!1,this.sfx.audioelements)this.sfx.audioelements[t].pause();this.sfx.audioelements=[]}catch(t){console.warn("[AudioEngine]:error ignored"+t)}},tickAudio:function(){1==window.audioEngine.bgm.isPlaying?window.audioEngine.bgm.audio.play():window.audioEngine.bgm.audio.pause()}},window.audioEngine.bgm.audio.loop=!0,setInterval(window.audioEngine.tickAudio,1),window.vm={idcounter:0,control:{start:function(a){if(!vm.audioEngine)throw Error("AudioEngine Must Be Attached");if(!vm.renderer)throw Error("Renderer Must Be Attached");vm.control.stop(),vm.control.running=!0,vm.idcounter=0,vm.project.monitors=[],window.vm.renderer.bg.src="";try{eval(vm.code)}catch(e){vm.console.error("Error in script:"+e)}},stop:function(){for(var t in vm.project.timeouts)clearTimeout(vm.project.timeouts[t]);vm.project.timeouts=[],vm.idcounter=0,vm.control.running=!1,vm.project.sprites=[],vm.project.events.tick=[],vm.project.sprites=[],vm.project.keysPressed=[],vm.audioEngine.stop();try{window.vm.onstop()}catch(t){console.error(t)}},running:!1},code:"",renderer:null,attachRenderer:function(t){return vm.renderer=t,vm.renderer.start(),t},attachAudioEngine:function(t){return vm.audioEngine=t},setCompiadiblityMode:function(t){this.compiadiblityMode=t},compiadiblityMode:!1,project:{mouseDown:!1,mouseX:0,mouseY:0,keysPressed:[],sprites:[],events:{tick:[]},monitors:[],resources:[],timeouts:[],block:{moveSteps:function(t,e){try{var o=e,i=90-t.direction,n=Math.cos(i*(Math.PI/180))*o,o=Math.sin(i*(Math.PI/180))*o,n=n+n;t.x=t.x+n,t.y=t.y+(o+o)}catch(t){vm.console.error("Error in script:"+t)}},deleteList:function(t,e){try{delete t[e];for(var o=0,i=[];t.length>o;)null!=t[o]&&i.push(t[o]),o+=1;return i}catch(t){vm.console.error("Error in script:"+t)}},makeSprite:function(){try{vm.idcounter+=1;var t={direction:90,x:0,y:0,width:32,height:32,image:null,flip:"none",id:vm.idcounter,ghost:0,clicked:[]};return this.showSprite(t),t}catch(t){}},makeMonitor:function(){try{var t={x:0,y:0,value:0,name:"monitor",visible:!0,clicked:[]};return window.vm.project.monitors.push(t),t}catch(t){vm.console.error("Error in script:"+t)}},showSprite:function(t){try{this.hideSprite(t),vm.project.sprites.push(t)}catch(t){vm.console.error("Error in script:"+t)}},hideSprite:function(t){try{var e=vm.project.sprites.indexOf(t);-1<e&&vm.project.sprites.splice(e,1)}catch(t){}},cos:function(t){try{return Math.cos(t*(Math.PI/180))}catch(t){vm.console.error(t)}},sin:function(t){try{return Math.sin(t*(Math.PI/180))}catch(t){vm.console.error(t)}},getMoseData:function(){try{return{x:vm.project.mouseX,y:vm.project.mouseY,down:vm.project.mouseDown}}catch(t){}},dataToImg:function(t){try{var e=document.createElement("img");return e.src=t,e.setAttribute("style","image-rendering: pixelated;"),e}catch(t){}},random:function(t,e){var o;return e<t&&(o=t,t=e,e=o),Math.floor(Math.random()*(e-t+1)+t)},isTouching:function(t,e,o){try{return vm.___CHECKCOLLIDE(t,e)}catch(t){vm.console.error("Error in script:"+t)}},getKeyPressed:function(t){try{return!!vm.project.keysPressed[t]}catch(t){}},wait:function(t,e){try{vm.project.timeouts.push(setTimeout(()=>{window.vm.control.running&&e()},1e3*t))}catch(t){}},getTouchMouse:function(t){return window.vm.___CHECKCOLLIDE({x:window.vm.project.mouseX,y:window.vm.project.mouseY,width:1,height:1},t)}}},variables:{canDrag:!1},vmTick:function(){if(vm.control.running){for(var t in vm.project.events.tick)try{vm.project.events.tick[t]()}catch(t){vm.console.error(t)}try{vm.renderer.tick(vm.project.sprites,vm.project.monitors)}catch(t){}this.ticks+=0;try{window.vm.ontick()}catch(t){console.error(t)}}else this.ticks=0;window.requestAnimationFrame(vm.vmTick)},start:function(){vm.control.start()},stop:function(){vm.control.stop()},setMousePos:function(t){this.project.mouseX=t.x,this.project.mouseY=t.y},setMouseDown:function(t){if(1==t)for(var e in vm.project.sprites)try{if(this.___CHECKCOLLIDE({x:this.project.mouseX,y:this.project.mouseY,width:1,height:1},vm.project.sprites[e])){var o,i=vm.project.sprites[e];for(o in i.clicked)try{i.clicked[o]()}catch(t){vm.console.error(t)}}}catch(t){console.error(t)}this.project.mouseDown=t},console:{log:function(t){console.log("[vm - program]: "+t)},error:function(t){console.error("[vm - program]: "+t),vm.stop()},clear:function(t){console.clear()}},simulateKey:function(t){t.down?this.project.keysPressed[t.key]=!0:this.project.keysPressed[t.key]=!1},collideWidth:0,collideHeight:0,___CHECKCOLLIDE:function(t,e){return!1},collideDiv:document.createElement("div"),addEventListener:function(t,e){this["on"+t]=e},ontick:function(){},onspritecreate:function(t){},onstop:function(){},__decodeDataBase64URI:function(t){return atob(t.split(";").pop().split(",").pop())}},vm.___CHECKCOLLIDE=function(t,e){function o(t,e,o,i,n){i=e-i/2;return{x:t-o/2-n.width/2,y:i-n.height/2}}var i=t.width/2,n=t.height,r=o(t.x,t.y,t.width/2,t.height,vm.renderer.canvas).x,c=o(t.x,t.y,t.width/2,t.height,vm.renderer.canvas).y,s=e.width/2,a=e.height,t=o(e.x,e.y,e.width/2,e.height,vm.renderer.canvas).x,e=o(e.x,e.y,e.width/2,e.height,vm.renderer.canvas).y;return t<=r+i&&r<=t+s&&e<=c+n&&c<=e+a},window.requestAnimationFrame(vm.vmTick),window.renderer={canvas:null,bg:document.createElement("img"),backgroundImg:null,start:function(){this.context=this.canvas.getContext("2d"),this.context.globalAlpha=1,this.context.strokeStyle=this.color,this.context.fillStyle=this.color,this.context.beginPath(),this.context.fillRect(0,0,this.canvas.width+2,this.canvas.height+2),this.context.stroke(),this.test=0,this.canvas.style.imageRendering="Pixelated"},tick:function(t,e){this.context.globalAlpha=1,this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.beginPath(),this.context.fillRect(0,0,this.canvas.width+2,this.canvas.height+2),this.context.stroke(),this.context.webkitImageSmoothingEnabled=!1,this.context.mozImageSmoothingEnabled=!1,this.context.imageSmoothingEnabled=!1;try{this.context.drawImage(this.bg,0,0,this.canvas.width,this.canvas.height)}catch(t){}for(var o in t)t[o],this._drawSprite(t[o]);for(var o in e)e[o],this._drawMonitor(e[o])},_drawSprite:function(t){this.context.save();try{var e=t.x,o=0-t.y,i=t.ghost;100<i&&(i=100),i<0&&(i=0),this.context.globalAlpha=1-i/100,this.context.translate(this.canvas.width/2+t.x+e,this.canvas.height/2+o),this.context.rotate((t.direction-90)*Math.PI/180),"hor"==t.flip?this.context.scale(-1,1):"ver"==t.flip&&this.context.scale(1,-1),this.context.drawImage(t.image,t.width/-2,t.height/-2,t.width,t.height)}catch(t){}this.context.restore()},_drawMonitor:function(t){this.context.save();try{if(t.visible){this.context.globalAlpha=1,this.context.translate(0,0),renderer.context.font="15px arial";var e=renderer.context.measureText(t.value).width,o=renderer.context.measureText(t.name).width-25;return this.context.globalAlpha=1,renderer.context.fillStyle="#868e96",renderer.context.fillRect(t.x-2,t.y-2,74+o+e,24),renderer.context.fillStyle="#ced4da",renderer.context.fillRect(t.x,t.y,70+o+e,20),renderer.context.fillStyle="#ff8c00",renderer.context.fillRect(t.x+60,t.y+3,5+o+e,15),renderer.context.fillStyle="white",renderer.context.fillText(t.value,t.x+60,t.y+15),renderer.context.fillStyle="black",renderer.context.fillText(t.name,t.x+6,t.y+15),{width:74+o+e,height:24,x:t.x,y:t.y}}}catch(t){console.error(t)}this.context.restore()},color:"#ffffff"};
`;
var scriptCode = `/**
 * 2021 Gvbvdxx (C)
 * This Code IS ONLY for the preview, NOT for exporting.
 * If you came here, please close this tab, its only the code
 * for running games.
 * DO NOT EDIT OR USE IN CODE
*/
(async function () {
	var a = await fetch("game/");
	var b = await a.text();
	var data = JSON.parse(b);
	var log = function (a,b) {
		console.log("["+a+"]: "+b);
	};
	console.log(data);
	log("Player","Fetched Game Data.");
	document.getElementById("loading").hidden = true;
	document.getElementById("app").hidden = false;
	document.onclick = function () {
		document.getElementById("text").hidden = true;
		document.getElementById("gameScreen").hidden = false;
		renderer.canvas = document.getElementById("gameScreen");
		vm.attachRenderer(renderer);
		vm.attachAudioEngine(audioEngine);
		function getMousePos(canvas, evt) {
			var rect = canvas.getBoundingClientRect();
			return {
				x: ((evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width)/2,
				y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
			};
		};
		function readFiles(files) {
			var index = 0;
			while (index < files.length) {
				window.vm.project.resources[files[index].name] = {
					name:files[index].name,
					data:files[index].data,
					type:files[index].type
				};
				index += 1;
			}
		};
		readFiles(data.files);
		document.getElementById("gameScreen").onmousedown = function (event) {
			event.preventDefault();
			vm.setMouseDown(true);
		};
		document.onmouseup = function (event) {
			event.preventDefault();
			vm.setMouseDown(false);
		};
		document.body.onkeydown = function (event) {
			vm.simulateKey({
				key:event.key,
				down:true
			});
			event.preventDefault();
		};
		document.body.onkeyup = function (event) {
			vm.simulateKey({
				key:event.key,
				down:false
			});
		};
		document.getElementById("gameScreen").onmousemove = function (event) {
			var pos = getMousePos(document.getElementById("gameScreen"), event);// get adjusted coordinates as above
			var x = Math.round(pos.x/1)-(document.getElementById("gameScreen").width/2)/2;
			var y = Math.round(pos.y*-1)+(document.getElementById("gameScreen").height/2);
			vm.setMousePos({
				x:x,
				y:y
			});
		};
		vm.code = data.code;
		vm.start();
		document.onclick = null;
	};
})()
`;
var serverHandler = function (req,res,opts) {
	if ((req.url == "/") || (req.url == "")) {
		res.writeHeader(200,{
			"content-type":"text/html"
		});
		res.end(gameCode);
		return;
	}
	if ((req.url == "/game") || (req.url == "/game/")) {
		res.writeHeader(200,{
			"content-type":"application/json"
		});
		res.end(opts.gameData)
		return;
	}
	if ((req.url == "/script.js") || (req.url == "/script.js/")) {
		res.writeHeader(200,{
			"content-type":"text/javascript"
		});
		res.end(scriptCode)
		return;
	}
	if ((req.url == "/vm.js") || (req.url == "/vm.js/")) {
		res.writeHeader(200,{
			"content-type":"text/javascript"
		});
		res.end(VMCode)
		return;
	}
	res.writeHeader(404,{});
	res.end(`Cannot ${req.method} ${req.url}`)
};;
startServerButton.onclick = function () {
	if (!(window.HTTPserver)) {
		try{
			window.HTTPserverOPTS = {gameData:gui.editorToJsonText()};
			window.HTTPserver = http.createServer(function (req,res) {
				serverHandler(req,res,HTTPserverOPTS);
			});
			HTTPserver.listen(8536);
			var previewWin = null;
			var url = `http://${require("ip").address(null,"ipv4")}:8536/`;
			var url2 = `http://localhost:8536/`;
			
			startServerButton.innerHTML = "Stop Preview";
			Blockly.confirm("open in web browser?",function (a) {
				console.log(a);
				if (a) {
					
					try{
						require("node:child_process").exec("start "+"http://localhost:8536/",() =>{});
					}catch(e){console.error(e);}
					previewWin.close();
				} else {
					previewWin = new electron.BrowserWindow({title:"Game Preview",icon:"./icon.png"});
					previewWin.loadURL(url2);
					previewWin.focus();previewWin.maximize();
				}
			});
			HTTPserver.on("close",function () {
				console.log("server closed");
				try{
					if (previewWin) {
						previewWin.close();
					}
				}catch(e){}
				window.HTTPserver = null;
				startServerButton.innerHTML = startServerButtonText;
			});
		} catch(e) {
			dialog.showErrorBox("unable to create preview server","Cannot create server, please make sure that this app has access to create a server.");
		}
	} else {
		Blockly.confirm("Stop preview server?",function (a) {
			if (a) {
				window.HTTPserver.close();
			}
		});
	}
};