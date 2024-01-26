import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
	const [length, setLength] = useState(8);
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setcharAllowed] = useState(false);

	const [password, setPassword] = useState("");

	// useRef hook
	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numberAllowed) str += "1234567890";
		if (charAllowed) str += "!@#$%^&*()_+-=[]{},.<>;:/?|\"'`~";

		for (let len = 0; len <= length; len++) {
			let charIdx = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(charIdx);
		}

		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	const copyPasswordToClipboard = useCallback(()=>{
		console.log(passwordRef)
		passwordRef.current?.select();
		// passwordRef.current?.setSelectionRange(0,3);
		window.navigator.clipboard.writeText(password);
	},[password])


	useEffect(()=>{
		passwordGenerator();	
	}, [length, numberAllowed, charAllowed, passwordGenerator])

	return (
		<>
			<div className="main-container">
			<h2 className="main-heading">Password Generator</h2>
				<input 
				type="text" 
				value = {password}
				className="password-container"
				placeholder="password"
				readOnly
				ref = {passwordRef}
				/>
				<button 
				onClick={copyPasswordToClipboard}
				className="copy-btn">Copy</button>

				<div className="options-container">

					<div className="range-option">
						<input 
						type="range" 
						min = {6}
						max = {50}
						value = {length}
						onChange={(e)=> {setLength(e.target.value)}}
						/>
						<label>Length : {length}</label>
					</div>
					<div className="checkbox-div  number-checkbox">
						<input 
						type="checkbox" 
						defaultChecked = {numberAllowed}
						id = "numberInput"
						onChange={()=>{
							setNumberAllowed((prev)=>!prev);
						}}
						/>
						<label>Numbers</label>
					</div>

					<div className="checkbox-div character-checkbox">
						<input 
						type="checkbox" 
						defaultChecked = {charAllowed}
						id = "characterInput"
						onChange={()=>{
							setcharAllowed((prev)=>!prev);
						}}
						/>
						<label>Characters</label>
					</div>
				</div>
			</div>
			
		</>
	);
}

export default App;
