import { useCallback, useEffect, useState , useRef} from "react";
import "./App.css";

function App() {
  
  // declare variables
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  
  // function to generate a password
  const passwordGenerator = useCallback(() => {

	let pass = "";
	let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

	// numberAllowed
	if (numberAllowed) str += "0123456789";
	// char Allowed
	if (charAllowed) str += "!@#$%^&*()_+[]{}|;':\",.<>?/`~";

	// create a password of required length
	for (let len = 1; len <= length ; len++){
		const idx = Math.floor(Math.random()*(str.length));
		pass += str[idx];
	}

	// set the password to password
	setPassword(pass);

  },[length, numberAllowed, charAllowed, setPassword]);

  // function to copy password to clipboard
  const passwordRef = useRef(null);
  const copyPasswordToClipBoard = useCallback(()=>{
	passwordRef?.current?.select();
	window.navigator.clipboard.writeText(password);
  },[password]);


  // call function whenever the following dependencies changes
  // length, numberAllowed, charAllowed
  useEffect(()=>{
	passwordGenerator();
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
	<>
		<div className="main-container">

			<p className="container-heading">Password Generator</p>

			<div className="password-container">
				<input 
				type="text" 
				value={password}
				ref={passwordRef}
				readOnly
				/>
				<div 
				className="copy-btn"
				onClick={(e)=>{
					copyPasswordToClipBoard();
				}}
				>Copy</div>
			</div>

			<div className="options-container">

				<div className="range-option">
					<input 
					type="range" 
					min={6}
					max={30}
					value={length}
					onChange={(e)=> setLength(e.target.value)}
					/>
					<label>Length : {length}</label>
				</div>

				<div className="num-allowed-option">
					<input 
					type="checkbox" 
					defaultChecked = {numberAllowed}
					onClick={
						(e)=> setNumberAllowed(prev => !prev)
					}
					/>
					<label>Numbers</label>
				</div>
				<div className="char-allowed-option">
					<input 
					 type="checkbox" 
					 defaultChecked = {charAllowed}
					 onClick={
						(e) => setCharAllowed(prev => !prev)
					 }
					/>
					<label>Characters</label>
				</div>
			</div>

		</div>
	</>
  )
}

export default App;
