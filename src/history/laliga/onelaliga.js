import React, { useState, useEffect } from 'react';
function weights(a) {
  let weight;
  switch (a) {
    case 'barcelrona':
      weight = 5000;
      break;
    case 'madrid':
      weight = 5000;
      break;
    case 'atm':
      weight = 1000;
      break;
    case 'sociedad':
      weight = 100;
      break;
    case 'villarreal':
      weight = 80;
      break;
    case 'betis':
      weight = 30;
      break;
    case 'osasuna':
      weight = 30;
      break;
    case 'bilbao':
      weight = 30;
      break;
    case 'mallorca':
      weight = 30;
      break;
    case 'girona':
      weight = 23;
      break;
    case 'vallecano':
      weight = 23;
      break;
    case 'sevilla':
      weight = 100;
      break;
    case 'celtavigo':
      weight = 20;
      break;
    case 'cadiz':
      weight = 20;
      break;
    case 'getafe':
      weight = 18;
      break;
    case 'valencia':
      weight = 30;
      break;
    case 'almeria':
      weight = 15;
      break;
    case 'valladolid':
      weight = 7;
      break;
    case 'espanyol':
      weight = 4;
      break;
    case 'elche':
      weight = 2;
      break;
  }
  return weight
}
function shuffleTeams(teams) {
  const weightedTeams = [];

  teams.forEach((team) => {
    let weight;
    switch (team) {
        case 'barcelrona':
            weight = 5000;
            break;
          case 'madrid':
            weight = 5000;
            break;
          case 'atm':
            weight = 1000;
            break;
          case 'sociedad':
            weight = 100;
            break;
          case 'villarreal':
            weight = 80;
            break;
          case 'betis':
            weight = 30;
            break;
          case 'osasuna':
            weight = 30;
            break;
          case 'bilbao':
            weight = 30;
            break;
          case 'mallorca':
            weight = 30;
            break;
          case 'girona':
            weight = 23;
            break;
          case 'vallecano':
            weight = 23;
            break;
          case 'sevilla':
            weight = 100;
            break;
          case 'celtavigo':
            weight = 20;
            break;
          case 'cadiz':
            weight = 20;
            break;
          case 'getafe':
            weight = 18;
            break;
          case 'valencia':
            weight = 30;
            break;
          case 'almeria':
            weight = 15;
            break;
          case 'valladolid':
            weight = 7;
            break;
          case 'espanyol':
            weight = 4;
            break;
          case 'elche':
            weight = 2;
            break;
    }

    for (let i = 0; i < weight; i++) {
      weightedTeams.push(team);
    }
  });

  const shuffledTeams = [];

  for (let i = 0; i < teams.length; i++) {
    const randomIndex = Math.floor(Math.random() * weightedTeams.length);
    const selectedTeam = weightedTeams[randomIndex];

    shuffledTeams.push(selectedTeam);

    // 선택된 팀의 모든 weight을 삭제합니다.
    const teamIndices = [];
    for (let j = 0; j < weightedTeams.length; j++) {
      if (weightedTeams[j] === selectedTeam) {
        teamIndices.push(j);
      }
    }
    for (let k = teamIndices.length - 1; k >= 0; k--) {
      weightedTeams.splice(teamIndices[k], 1);
    }
  }

  return shuffledTeams;
}

function Onelaliga({ a, b, c, d, e, setchamsonelaliga, score}) {
  const teams = ['barcelrona', 'madrid', 'atm', 'sociedad', 'villarreal', 'betis', 'osasuna', 'bilbao', 'girona', 'vallecano', 'sevilla', 'mallorca', 'cadiz', 'getafe', 'valencia', 'almeria', 'celtavigo', 'valladolid', 'espanyol', 'elche'];

  const [fixTeams, setFixTeams] = useState(() => shuffleTeams(teams));
  const [onescorelaliga, setOnescorelaliga] = useState(0);
  const [cupWinner, setCupWinner] = useState(() => shuffleTeams(teams));
  useEffect(() => {
  
  if (a === fixTeams[0]) {
      setOnescorelaliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[0],1))/2))
  }
  if (b === fixTeams[1]) {
    setOnescorelaliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[1],2))/2))
  }
  if (c === fixTeams[2]) {
    setOnescorelaliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[2],3))/2))
  }
  if (d === fixTeams[3]) {
    setOnescorelaliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[3],4))/2))
  }
  if (e === cupWinner[0]) {
    setOnescorelaliga((prevScore) => prevScore + Math.floor((100-getRankProbability(cupWinner[0],1))/2))
  }
  const chamsteams = fixTeams.slice(0, 4);
  setchamsonelaliga(chamsteams)
  }, []);
  score(onescorelaliga)


  

  const getRankColor = (index) => {
    if (index < 4) {
      return 'skyblue'; // 하늘색 배경
    } else if (index < 6) {
      return 'lime'; // 연두색 배경
    } else if (index === 6) {
      return 'orange'; // 주황색 배경
    } else if (index > 16) {
      return 'pink'; // 빨간색 배경
    }
    return 'transparent';
  };

  const getRankProbability = (team, rank) => {
    const weight = weights(team);
    const totalWeight = teams.reduce((sum, team) => sum + weights(team), 0);
    const probability = weight / totalWeight;

    switch (rank) {
      case 1:
      return probability * 100;
    case 2:
      return (1-probability)*probability * 100; 
    case 3:
      return (1-probability)*(1-probability)*probability * 100; 
    case 4:
      return (1-probability)*(1-probability)*(1-probability)*probability * 100; 
    default:
      return 0;
    }
  };
  return (
    <div className="club">
      {fixTeams.map((team, index) => (
        <React.Fragment key={team}>
        <div style={{ background: getRankColor(index) }}>
          { 
            index == 0 ?
            <img src={require(`../../lloggo/trophy2.png`)} className='trophy' />:
            <p>{`${index + 1} `}</p>
          }
          <img src={require(`../../lloggo/${team}Logo.jpg`)} alt={`${team} logo`} />
          { 
              index > 0 ?
              <p className='clubName'>{`${team}`}</p>:
              <></>
            }
          {
           index == 0 ? 
           <div className='cupwinner'>
             <img src={require(`../../lloggo/trophy3.png`)} className='trophy' />
             <img src={require(`../../lloggo/${cupWinner[0]}Logo.jpg`)} />
           </div>: <></>
          }
          <br />
        </div>
      </React.Fragment>
      ))}
      <h3>score: {onescorelaliga}</h3>
    </div>
  );
}

export default React.memo(Onelaliga);