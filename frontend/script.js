async function calculateProfit() {
    const schemeCode = document.getElementById('scheme_code').value;
    const startDate = document.getElementById('start_date').value;
    const endDate = document.getElementById('end_date').value;
    const capital = parseFloat(document.getElementById('capital').value);

    try {
        const response = await fetch(`https://mutual-fund-profit.vercel.app?scheme_code=${schemeCode}&start_date=${startDate}&end_date=${endDate}&capital=${capital}`, {
            method: 'GET',
            mode: 'cors'
        });

        
        if (response.ok) {

        const data = await response.json();
        document.getElementById('profit-value').innerText = data.profit;
        document.getElementById('success-message').style.display = 'block';
        document.getElementById('error-message').style.display = 'none';
       } else {
        throw new Error('Request failed');
    }

    } catch (error) {
        console.error('Error:', error);
        document.getElementById('error-text').innerText = 'An error occurred. Please try again.';
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('success-message').style.display = 'none';
    }
}
