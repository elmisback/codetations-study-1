class PaymentProcessor {
    async processPayment(paymentDetails) {
        const apiKey = this.getApiKey('test');
        const response = await fetch('https://api.payment.com/v1/charge', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(paymentDetails)
        });
        return response.json();
    }
}