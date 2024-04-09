import { useState } from 'react'
import Button from './Button';

const App = () => {
  const colorArray = [
    'tomato', 'green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple', 'gray', 'wheat', 'black','pink'
  ];
  const [color, setColor] = useState('white');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl flex-nowrap overflow-x-auto">
          {
            colorArray.map(c => <Button key={c} setColor={setColor} color={c} />)
          }
        </div>
      </div>
    </div>
  )
}

export default App;
