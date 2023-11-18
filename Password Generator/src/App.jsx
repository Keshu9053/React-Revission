import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [character, setCharacters] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef(null); 

  const copyClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenrator = useCallback(() => {
      let pass = '';
      let str = 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZCVBNM';
      str += character ? "~`!@#$%^&*()_+=-`}';><?/" :'';
      str += numbers ?  '1234567890' : '';
      
      for(let i = 1;i<=length;++i) {
        let char = Math.floor(Math.random() * str.length );
        pass += str.charAt(char);
      }
      setPassword(pass)
  },[length,numbers,character]); 

  useEffect(() => {
    passwordGenrator()
  }, [length, character, numbers, passwordGenrator]);

  return (
    <>
      <div className=' bg-black h-screen w-full flex justify-center items-center'>
        <div className=' max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
          <div className=' relative text-white text-3xl font-bold text-center m-4 flex flex-col gap-28'>Password Genrator</div>
            
            <div className='flex relative gap-2 mt-8'>
              <label htmlFor='password' className='text-white font-bold mt-5 flex-wrap'>Password:</label>
              <input  
              type='text'
              value= {password}
              className='w-[50%] sm:w-[60%] text-sm mt-4 ml-4 outline-hidden pl-1 rounded-lg   text-green-600'
              id='password'
              readOnly
              ref={passwordRef}
              />
              <button className='bg-blue-500 text-white mt-4 font-bold  w-14 hover:bg-white hover:text-black p-2 rounded-lg mr-2' onClick={copyClipBoard}>copy</button>
            </div>

            <div className='flex flex-wrap mt-8 items-center'>
              <label htmlFor="length " className='text-white font-bold  flex-wrap'>Length: <span className='text-green-400'>{length}</span></label>
              <input
              type='range' 
              min={6}
              max={50}
              value={length}
              onChange={(e) => {setLength(e.target.value)}}
              name='length'
              className='pt-2 pb-2 ml-2 mt-1 cursor-pointer'
              />
              
              <div className='flex'>
                <label htmlFor="numbers" className='text-white font-bold  ml-4 flex-wrap cursor-pointer'>Numbers   </label>
                <input
                type='checkbox' 
                value={numbers}
                onChange={(e) => {setNumbers(!numbers)}}
                name='numbers'
                id='numbers'
                className='pt-2 pb-2 ml-2 mt-1'
                />

                <label htmlFor="characters" className='text-white font-bold  ml-4 flex-wrap cursor-pointer'>Charachters  </label>
                <input
                type='checkbox' 
                value={character}
                onChange={(e) => {setCharacters(!character)}}
                name='characters'
                id='characters'
                className='pt-2 pb-2 ml-2 mt-1'
                />
              </div>
              
            </div>
            
        </div>
      </div>

      <div className='text-white absolute bottom-2 right-4 font-serif text-lg'>Made By Keshav Bhardwaj</div>
    </>
  )
}
export default App
