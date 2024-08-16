// import logo from './logo.svg';
import './App.css';
import CryptoPrices from './CryptoPrices';
import TimerComponent from './TimerComponent';
import InputWrapper from './InputWrapper';
import InputEl from './InputEl';
// import ButtonWithLogging from './components/hoc/ButtonWithLogging';
// import TypeBasedInput from './components/hoc/TypeBasedInput';

//added comment

const EnhancedInput = InputWrapper(InputEl);

function App() {
  const handleClick = (e) => {
    console.log(e);
    alert(e.target.innerHTML + ' clicked!');
  };
  return (
    <>
      <CryptoPrices />
      <TimerComponent />
      <div>
        <hr /> {/* to dra a line */}
        <h1>Dynamic Input Elements with HOC</h1>
        {/* <ButtonWithLogging label="Click Me" onClick={handleClick} />
        <TypeBasedInput type="button" role="admin" />
        <TypeBasedInput type="text" role="user" />
        <TypeBasedInput role="guest" /> */}

        {/* <InputWrapper type="text" placeholder="Enter text" />
        <InputWrapper type="select" options={['Option 1', 'Option 2']} />
        <InputWrapper type="checkbox" />
        <InputWrapper type="button" label="wrapper button" onClick={handleClick} /> */}

        <hr />
        {/* <h1>Another way of using this</h1> */}
        <EnhancedInput type="text" placeholder="Enter your name" />
        <EnhancedInput type="button" label="enhanced button" onClick={handleClick} />
        <EnhancedInput
          type="select"
          options={[
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
          ]}
        />
        <EnhancedInput
          type="radio"
          name="radioGroup"
          options={[
            { value: '1', label: 'Radio 1' },
            { value: '2', label: 'Radio 2' },
          ]}
        />

      </div>  
    </>
  );
}

export default App;
