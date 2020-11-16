import './inputText.css';

function InputText({
  value,
  isDisabled,
  onChange,
  onBlur,
  classNames
}) {
  var styleNames = "text-input " + classNames;

  return (
    <div className={styleNames} >
        <input type="text"
            value = {value} 
            disabled={isDisabled}
            onChange = {onChange}
            onBlur = {onBlur}
        />
    </div>
  );
}

export default InputText;
