import '../assets/style.css';

function Index() {
  return (
    <div className="App">
      <div className="App-home">

        <h1 className="home-text">
          If there's a <span style={blue}>Will</span>, <br/> start <span style={verde}>Building</span> Your
          <span style={rosa}>Dream</span><br/> and <span style={laranja}>Hack</span> your <span style={amarelo}>Way</span>.
        </h1>

        <br/>

        <div>
          <button class="button button1">COMECE AGORA</button>
          <button class="button button2">FALAR COM UM ESPECIALISTA</button>
        </div>

        <br/>
        <br/>

        <p class="p-home">
          Tenha um squad alta performance trabalhando para você <br/>
          descobrir, desenvolver e lançar seu negócio digital
        </p>

      </div>
    </div>
  );
}


const blue = {
  color: 'blue',
};

const verde = {
  color: 'green',
};

const rosa = {
  color: '#d8006f',
};

const laranja = {
  color: '#ff8530',
};

const amarelo = {
  color: '#fffe24',
};

export default Index;
