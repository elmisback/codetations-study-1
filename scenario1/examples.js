// Test successful payment
const testPayment = {
    amount: 2000,
    currency: 'usd',
    payment_method: 'card',
    card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2024,
        cvc: '123'
    }
};

// Test payment declined
const declinedPayment = {
    amount: 2000,
    currency: 'usd',
    payment_method: 'card',
    card: {
        number: '4000000000000002',
        exp_month: 12,
        exp_year: 2024,
        cvc: '123'
    }
};