const chargingForm = document.getElementById('charging-form');
		const chargingResults = document.getElementById('charging-results');

		chargingForm.addEventListener('submit', function(event) {
			event.preventDefault();

			const batteryCapacity = parseFloat(document.getElementById('battery-capacity').value);
			const chargingSpeed = parseFloat(document.getElementById('charging-speed').value);
			const electricityRate = parseFloat(document.getElementById('electricity-rate').value);
            const stateOfCharge = document.getElementById('state-of-charge').value
			const targetStateOfCharge = document.getElementById('target-state-of-charge').value
			const difference = ((batteryCapacity * (targetStateOfCharge / 100)) - (batteryCapacity * (stateOfCharge / 100)))
			
			const chargingTime = difference / chargingSpeed;
			const chargingCost = difference * electricityRate;


			// calculate time
			let hours = chargingTime;
			let minutes = (hours.toFixed(0) * 60) - (chargingTime * 60);
			
			const resultsHtml = `
				Charging Time: ${Math.floor(hours)} hours : ${minutes} minutes
				Charging Cost: $${chargingCost.toFixed(2)}
			`;

			chargingResults.innerText = resultsHtml;
		});

        // update range
        // get range
        let range = document.getElementById('state-of-charge')
		let Trange = document.getElementById('target-state-of-charge')
        // store updated value
        // let updateRange = document.getElementById('demo')

        // update range
        range.oninput = function(){
            range.innerText = this.value
            document.getElementById('SOC').innerText = range.value
        }

		// update range
        Trange.oninput = function(){
            Trange.innerText = this.value
            document.getElementById('TSOC').innerText = Trange.value
        }