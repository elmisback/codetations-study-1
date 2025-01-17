function CustomInput({ label, value, onChange, validation }) {
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const newValue = e.target.value;
        const validationResult = validation?.(newValue);
        setError(validationResult?.error);
        onChange(newValue);
    };

    return (
        <div className="input-wrapper">
            <label>{label}</label>
            <input value={value} onChange={handleChange} />
            {error && <span className="error">{error}</span>}
        </div>
    );
}