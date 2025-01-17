// Test successful payment
const testPayment = {
    amount: 2000,
    currency: 'usd',
    payment_method: 'card',
    card: {
        number: '4242424242424242', // Test working card number
        exp_month: 12,
        exp_year: 2024,
        cvc: '123'
    }
};

// Response
const successfulPaymentResponse = {
    id: 'ch_1J2e5e2eZvKYlo2C9ZJ7L8e2',
    amount: 2000,
    currency: 'usd',
    status: 'succeeded'
};

// Test payment declined
const declinedPayment = {
    amount: 2000,
    currency: 'usd',
    payment_method: 'card',
    card: {
        number: '4000000000000002', // Test declined card number
        exp_month: 12,
        exp_year: 2024,
        cvc: '123'
    }
};