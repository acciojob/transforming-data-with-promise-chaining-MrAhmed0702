//your JS code here. If required.
const number = document.getElementById("ip");
const button = document.getElementById("btn");
const content = document.getElementById("output");

button.addEventListener('click', () => 
						{new Promise((resolve) => {
							setTimeout(() => {
								content.textContent = `Result: ${number.value}`;
								resolve(Number(number.value));
							}, 2000);
						}).then((mul) => {
							return new Promise((resolve) => {
								setTimeout(() => {
									content.innerHTML = '';
									let multiply = mul * 2;
									content.textContent = `Result: ${multiply}`;
									resolve(multiply)
								}, 2000);
							}).then((sub) => {
								return new Promise((resolve) => {
									setTimeout(() => {
										content.innerHTML = '';
										let subtraction = sub - 3;
										content.textContent = `Result: ${subtraction}`;
										resolve(subtraction)
									}, 1000);
							}).then((div) => {
									return new Promise((resolve) => {
										setTimeout(() => {
											content.innerHTML = '';
											let division = div/2;
											content.textContent = `Result: ${division}`;
											resolve(division);
										}, 1000);
									}).then((add) => {
										return new Promise((resolve) => {
										setTimeout(() => {
											content.innerHTML = '';
											let addition = add + 10;
											content.textContent = `Final Result: ${addition}`;
											resolve(addition)
										}, 1000);
									})
								});
							});
						});
					});
});