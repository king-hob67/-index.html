const generateIpButton = document.getElementById('generate-ip');
const ipAddressDiv = document.getElementById('ip-address');

generateIpButton.addEventListener('click', async () => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    const ipAddress = data.ip;
    ipAddressDiv.innerText = `Your IP Address is: ${ipAddress}`;
  } catch (error) {
    console.error(error);
  }
});
