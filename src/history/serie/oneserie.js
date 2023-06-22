import React, { useState, useEffect } from 'react';
function weights(a) {
  let weight;
    switch (a) {
        case 'napoli':
        weight = 1300;
        break;
      case 'lazio':
        weight = 700;
        break;
      case 'inter':
        weight = 600;
        break;
      case 'millan':
        weight = 500;
        break;
      case 'atalanta':
        weight = 300;
        break;
      case 'rome':
        weight = 270;
        break;
      case 'juventus':
        weight = 300;
        break;
      case 'fiolentina':
        weight = 50;
        break;
      case 'bologna':
        weight = 40;
        break;
      case 'torino':
        weight = 35;
        break;
      case 'monza':
        weight = 12;
        break;
      case 'udinese':
        weight = 8;
        break;
      case 'sassuolo':
        weight = 7;
        break;
      case 'empoli':
        weight = 7;
        break;
      case 'salernitana':
        weight = 6;
        break;
      case 'recce':
        weight = 6;
        break;
      case 'spezia':
        weight = 6;
        break;
      case 'verona':
        weight = 4;
        break;
      case 'cremonese':
        weight = 3;
        break;
      case 'sampdoria':
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
      case 'napoli':
        weight = 1300;
        break;
      case 'lazio':
        weight = 700;
        break;
      case 'inter':
        weight = 600;
        break;
      case 'millan':
        weight = 500;
        break;
      case 'atalanta':
        weight = 300;
        break;
      case 'rome':
        weight = 270;
        break;
      case 'juventus':
        weight = 300;
        break;
      case 'fiolentina':
        weight = 50;
        break;
      case 'bologna':
        weight = 40;
        break;
      case 'torino':
        weight = 35;
        break;
      case 'monza':
        weight = 12;
        break;
      case 'udinese':
        weight = 8;
        break;
      case 'sassuolo':
        weight = 7;
        break;
      case 'empoli':
        weight = 7;
        break;
      case 'salernitana':
        weight = 6;
        break;
      case 'recce':
        weight = 6;
        break;
      case 'spezia':
        weight = 6;
        break;
      case 'verona':
        weight = 4;
        break;
      case 'cremonese':
        weight = 3;
        break;
      case 'sampdoria':
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

function Oneserie({ a, b, c, d, e, setchamsoneserie, score}) {
  const teams = ['napoli', 'lazio', 'inter', 'millan', 'atalanta', 'rome', 'juventus', 'torino', 'fiolentina', 'monza', 'bologna', 'udinese', 'sassuolo', 'empoli', 'salernitana', 'recce', 'spezia', 'verona', 'cremonese', 'sampdoria'];

  const [fixTeams, setFixTeams] = useState(() => shuffleTeams(teams));
  const [onescoreserie, setOnescoreserie] = useState(0);
  const [cupWinner, setCupWinner] = useState(() => shuffleTeams(teams));
  useEffect(() => {
    if (a === fixTeams[0]) {
      setOnescoreserie((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[0],1))/2))
  }
  if (b === fixTeams[1]) {
    setOnescoreserie((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[1],2))/2))
  }
  if (c === fixTeams[2]) {
    setOnescoreserie((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[2],3))/2))
  }
  if (d === fixTeams[3]) {
    setOnescoreserie((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[3],4))/2))
  }
  if (e === cupWinner[0]) {
    setOnescoreserie((prevScore) => prevScore + Math.floor((100-getRankProbability(cupWinner[0],1))/2))
  }
  const chamsteams = fixTeams.slice(0, 4);
  setchamsoneserie(chamsteams)
  }, []);
  score(onescoreserie)


  

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
      <h3>score: {onescoreserie}</h3>
    </div>
  );
}

export default React.memo(Oneserie);