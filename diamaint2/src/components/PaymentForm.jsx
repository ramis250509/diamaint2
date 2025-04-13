import React, { useState } from 'react';

function PaymentForm() {
    const [formData, setFormData] = useState({
        name: '',
        cardNumber: '',
        expiry: '',
        cvv: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('http://localhost:5000/api/processPayment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error('Ошибка обработки оплаты');
            }
            const result = await response.json();
            console.log('Оплата успешна:', result);
            alert('Оплата прошла успешно!');
        } catch (err) {
            console.error('Ошибка при оплате:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const bracket = ')'
    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded shadow">
            <h2 className="text-xl font-bold mb-4">Детали оплаты</h2>
            <div className="mb-4">
                <label className="block text-gray-700">Имя владельца карты</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введите имя владельца"
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Номер карты</label>
                <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="1234 5678 9012 3456"
                    className="w-full border px-3 py-2 rounded"
                    required
                />
            </div>
            <div className="mb-4 flex gap-4">
                <div className="flex-1">
                    <label className="block text-gray-700">Срок действия</label>
                    <input
                        type="text"
                        name="expiry"
                        value={formData.expiry}
                        onChange={handleChange}
                        placeholder="MM/YY"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
                <div className="flex-1">
                    <label className="block text-gray-700">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="123"
                        className="w-full border px-3 py-2 rounded"
                        required
                    />
                </div>
            </div>
            {error && <p className="text-green-700">{`Оплата прошла успешно:${bracket}`}</p>}
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded cursor-pointer hover:bg-amber-700 duration-300" disabled={loading}>
                {loading ? 'Обработка...' : 'Оплатить сейчас'}
            </button>
        </form>
    );
}

export default PaymentForm;