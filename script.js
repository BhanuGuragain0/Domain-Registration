function checkDomain() {
    const domainInput = document.getElementById('domainName');
    const loadingMessage = document.getElementById('loadingMessage');
    const resultMessage = document.getElementById('resultMessage');
    const suggestionsMessage = document.getElementById('suggestionsMessage');

    const domainName = domainInput.value.trim();
    if (domainName) {
        loadingMessage.style.display = 'block';
        resultMessage.style.display = 'none';
        suggestionsMessage.style.display = 'none';

        setTimeout(() => {
            loadingMessage.style.display = 'none';
            resultMessage.style.display = 'block';
            resultMessage.textContent = `The domain ${domainName} is available!`;
            resultMessage.style.color = '#27ae60';
        }, 2000);
    } else {
        alert('Please enter a domain name.');
    }
}
