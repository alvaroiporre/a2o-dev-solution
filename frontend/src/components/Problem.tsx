import { useState } from 'react';
import { fetchProblemData } from '../services/api';
import toast from 'react-hot-toast';

interface ProblemProps {
  id: number;
}

function Problem({ id }: ProblemProps) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const res = await fetchProblemData(input, id);
    setLoading(false);
    if(res?.error) {
      toast.error(`Error: ${res.error}`);
    }
    setOutput(res?.output);
  };

  return (
    <>
      {
        loading ?
          <p>Loading . . .</p>
          :
          <div className='flex flex-col md:flex-row gap-5 justify-center items-center'>

            <textarea
              id={`input-${id}`}
              className="w-full h-40 border border-gray-300 rounded-md p-2 min-w-72"
              placeholder="Input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
            <textarea
              id={`output-${id}`}
              className="w-full h-40 border border-gray-300 rounded-md p-2 min-w-72"
              placeholder="Output"
              value={output}
              readOnly
            />
          </div>
      }
    </>
  );
}

export default Problem;