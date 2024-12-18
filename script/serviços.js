// Função para calcular a regra 50% 30% 20%
function calculate503020() {
    const salary = parseFloat(document.getElementById('salary').value);

    if (!isNaN(salary)) {
        const needs = salary * 0.50;
        const wants = salary * 0.30;
        const savings = salary * 0.20;

        const resultElement = document.getElementById('result-50-30-20');
        resultElement.innerHTML = `
            <p>50% para Necessidades: R$ ${needs.toFixed(2)}</p>
            <p>30% para Desejos: R$ ${wants.toFixed(2)}</p>
            <p>20% para Poupança/Investimentos: R$ ${savings.toFixed(2)}</p>
        `;
    } else {
        alert('Por favor, insira um valor válido para o salário.');
    }
}

// Função para calcular Juros Simples
function calculateSimpleInterest() {
    const capital = parseFloat(document.getElementById('capital').value);
    const rate = parseFloat(document.getElementById('rate').value);
    const time = parseFloat(document.getElementById('time').value);

    if (!isNaN(capital) && !isNaN(rate) && !isNaN(time)) {
        const interest = (capital * rate * time) / 100;

        const resultElement = document.getElementById('result-simple-interest');
        resultElement.innerHTML = `
            <p>Juros Simples: R$ ${interest.toFixed(2)}</p>
        `;
    } else {
        alert('Por favor, insira valores válidos para o capital, taxa e tempo.');
    }
}

// Função para calcular Juros Compostos
function calculateCompoundInterest() {
    const capital = parseFloat(document.getElementById('compound-capital').value);
    const rate = parseFloat(document.getElementById('compound-rate').value);
    const time = parseFloat(document.getElementById('compound-time').value);

    if (!isNaN(capital) && !isNaN(rate) && !isNaN(time)) {
        const amount = capital * Math.pow((1 + rate / 100), time);
        const interest = amount - capital;

        const resultElement = document.getElementById('result-compound-interest');
        resultElement.innerHTML = `
            <p>Montante: R$ ${amount.toFixed(2)}</p>
            <p>Juros Compostos: R$ ${interest.toFixed(2)}</p>
        `;
    } else {
        alert('Por favor, insira valores válidos para o capital, taxa e tempo.');
    }
}

// Função para converter moeda
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const currency = document.getElementById('currency').value;

    // Taxas de conversão atualizadas
    const rates = {
        usd: 1 / 5.79,  // 1 Real = 0,1727 USD (ou 1 USD = 5,79 BRL)
        eur: 1 / 6.09   // 1 Real = 0,1642 EUR (ou 1 EUR = 6,09 BRL)
    };

    if (!isNaN(amount)) {
        const conversionRate = rates[currency];
        const convertedAmount = amount * conversionRate;

        const resultElement = document.getElementById('result-currency');
        let currencySymbol = currency === 'usd' ? '$' : '€';
        resultElement.innerHTML = `
            <p>Valor Convertido: ${currencySymbol} ${convertedAmount.toFixed(2)}</p>
        `;
    } else {
        alert('Por favor, insira um valor válido para a conversão.');
    }
}


// Função para calcular o aporte mensal necessário para alcançar uma meta financeira
function calculateMonthlyGoal() {
    const goalAmount = parseFloat(document.getElementById('goal-amount').value);
    const goalTime = parseFloat(document.getElementById('goal-time').value);

    if (!isNaN(goalAmount) && !isNaN(goalTime)) {
        const monthlySavings = goalAmount / goalTime;

        const resultElement = document.getElementById('result-monthly-goal');
        resultElement.innerHTML = `
            <p>Você deve poupar R$ ${monthlySavings.toFixed(2)} por mês para alcançar sua meta.</p>
        `;
    } else {
        alert('Por favor, insira valores válidos para a meta financeira e o tempo.');
    }
}
function calculateFutureValue() {
    const pmt = parseFloat(document.getElementById('pmt').value);
    const rate = parseFloat(document.getElementById('rate-fv').value) / 100; // Converter para decimal
    const periods = parseInt(document.getElementById('periods').value);

    if (!isNaN(pmt) && !isNaN(rate) && !isNaN(periods)) {
        const futureValue = pmt * ((Math.pow(1 + rate, periods) - 1) / rate);

        const resultElement = document.getElementById('result-future-value');
        resultElement.innerHTML = `
            <p>Valor Futuro: R$ ${futureValue.toFixed(2)}</p>
        `;
    } else {
        alert('Por favor, insira valores válidos para o aporte, taxa e períodos.');
    }
}
