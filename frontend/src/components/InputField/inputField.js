import './inputField.css';

function InputField({
  type,
  label,
  value,
  isDisabled,
  onChange,
  onBlur,
  classNames
}) {
  var styleNames = "input-field " + classNames;

  return (
    <div className={styleNames}>
        <label>{label}</label>
        <input 
            type={type}
            value = {value} 
            disabled={isDisabled}
            onChange = {onChange}
            onBlur = {onBlur}
        />
    </div>
  );
}

export default InputField;
