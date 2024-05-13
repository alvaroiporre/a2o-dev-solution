import Problem from '../components/Problem';

interface ProblemPageProps {
  id: number
}

function ProblemPage({id}: ProblemPageProps) {
  return (
    <div className="container mx-auto px-10 max-w-6xl">
      <h1 className="text-3xl font-bold mb-4">Problem {id}</h1>
      <Problem id={id}/>
    </div>
  );
}

export default ProblemPage;