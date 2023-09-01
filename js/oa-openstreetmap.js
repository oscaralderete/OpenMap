customElements.define('oa-openstreetmap', class extends HTMLElement {
	constructor() {


		const App = {
			popup: `Here's where everything started.`,
			init(self) {
				if (self.innerHTML) {
					this.popup = self.innerHTML;
					self.innerHTML = '';
				}
			}
		}

		super();

		App.init(this);

		// update base properties
		const lat_ = this.getAttribute('latitude') ? this.getAttribute('latitude') : -11.519417;
		const lon_ = this.getAttribute('longitude') ? this.getAttribute('longitude') : -75.900706;
		const class_ = this.getAttribute('class') ? this.getAttribute('class') : '';
		const markercolor_ = this.getAttribute('marker-color') ? this.getAttribute('marker-color').replace('#', '') : 'D8040C';

		// set div element
		const div = document.createElement('div');

		div.setAttribute('id', this.getAttribute('map-id'))
		div.classList.add(class_)

		this.appendChild(div);

		// append map
		var map = L.map(this.getAttribute('map-id')).setView([lat_, lon_], 13);

		// tiles
		L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
			maxZoom: 19,
			attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(map);

		// icon
		const icon = L.icon({
			// iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrElEQVR4nO2Wu0oDQRSGvzRqMBpNacTeyojgpdRXEHtNrWIp5gGMpeYdxEI0YKP4Bop4ASE2KmgEsYlBNIISGTgLQ5jdzOzG2PjDgWHO/vsxZ2bOLvzLXykgCxSBEvAmocb7wALQTwsVB3LAK1BvEhVgTTyRNACcWAAb4xwYCgsdBB5DQL14ANKu0DhwFgHqxSnQ5QLO+byoBmwCE0C3hBpvSc7kWbWFpnwOkir7SIAv47M1FdvTnvVZaRBUh5tWPm8DLhqMqryeOoAN4AlYNPgLBv+eDfjGYBzX8nltPmnwTxr8JRtw1WBMaPmyNq+aRR+wpOV7DP6qDbjmANYPnqdeQ/7dBnzvUGov1puU+s4GvGcwqnuqH668rLwsYzUXdLh2bcBzPtdJXZVmUs98GvyzNuBO4MVnHzMhGshzQ0Wcm0hdVlOQfUxITMmcaaXWzcNTDDhuwUfiUN7lJHUtLiNAr6P8kaSBqxDQC/mJiKQkcOAALUq1WqIYsAJ8BABVd1oOs6c2GpYu1Ai9ldyvagz41qBfwCht0o4G3qaNmtHA0+0Ex4CjsA3iT/UDj4QzBGuiArsAAAAASUVORK5CYII=',
			// svg:
			// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><defs><filter id="f1" x="0" y="0"><feGaussianBlur in="SourceGraphic" stdDeviation="15"/></filter></defs><g transform="matrix(0.39 0.21 -0.17 0.31 235.49 427.41)"><path transform="translate(-172, -275.34)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" opacity=".25" filter="url(#f1)"/></g><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="#D8040C"/></svg>
			iconUrl: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' fill='%23${markercolor_}'/%3E%3C/svg%3E`,
			iconSize: [36, 48],
			iconAnchor: [18, 48], // point of the icon which will correspond to marker's location
			shadowUrl: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' width='200' height='200' viewBox='0 0 200 200' xml:space='preserve'%3E%3Cdefs%3E%3Cfilter id='f1' x='0' y='0'%3E%3CfeGaussianBlur in='SourceGraphic' stdDeviation='25'/%3E%3C/filter%3E%3C/defs%3E%3Cg transform='matrix(0.39 0.21 -0.17 0.31 71.45 92.13)'%3E%3Cpath transform='translate(-192, -255.34)' d='M 215.7 499.2 C 267 435 384 279.4 384 192 C 384 86 298 0 192 0 S 0 86 0 192 c 0 87.4 117 243 168.3 307.2 c 12.3 15.3 35.1 15.3 47.4 0 z M 192 128 a 64 64 0 1 1 0 128 a 64 64 0 1 1 0 -128 z' opacity='.5' filter='url(%23f1)'/%3E%3C/g%3E%3C/svg%3E",
			shadowSize: [24, 24],
			shadowAnchor: [5, 18],
			popupAnchor: [0, -30],
		})

		// marker + popup
		const marker = L.marker([lat_, lon_], { icon: icon }).addTo(map).bindPopup(App.popup);

	}
})