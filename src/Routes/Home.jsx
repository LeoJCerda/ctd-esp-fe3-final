import Card from '../Components/Card'
import { useGlobalstates } from '../Context/Context'

const Home = () => {
  const {dentState} = useGlobalstates()

console.log('esto es el HOME')  
return (
    <main className="principal" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentState.dentistas.map((dent)=>(
        <Card key={dent.id} name={dent.name} username={dent.username} id={dent.id}/>))}
      </div>
    </main>
  )
}

export default Home