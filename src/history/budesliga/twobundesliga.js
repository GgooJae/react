import React, { useState, useEffect } from 'react';
function weights(a) {
  let weight
  switch (a) {
    case 'munich':
      weight = 20000;
      break;
    case 'dortmund':
      weight = 500;
      break;
    case 'leipzig':
      weight = 200;
      break;
    case 'berlin':
      weight = 70;
      break;
    case 'freiburg':
      weight = 70;
      break;
    case 'leverkusen':
      weight = 70;
      break;
    case 'frankfurt':
      weight = 60;
      break;
    case 'wolfsburg':
      weight = 60;
      break;
    case 'maianz':
      weight = 60;
      break;
    case 'monchen':
      weight = 50;
      break;
    case 'koln':
      weight = 40;
      break;
    case 'hoffenheim':
      weight = 40;
      break;
    case 'bremen':
      weight = 30;
      break;
    case 'bochum':
      weight = 10;
      break;
    case 'augsburg':
      weight = 30;
      break;
    case 'stuttgart':
      weight = 20;
      break;
    case 'schalke':
      weight = 5;
      break;
    case 'hertha':
      weight = 5;
      break;
  }
  return weight
}

function shuffleTeams(teams) {
  const weightedTeams = [];

  teams.forEach((team) => {
    let weight;
    switch (team) {
      case 'munich':
        weight = 20000;
        break;
      case 'dortmund':
        weight = 500;
        break;
      case 'leipzig':
        weight = 200;
        break;
      case 'berlin':
        weight = 70;
        break;
      case 'freiburg':
        weight = 70;
        break;
      case 'leverkusen':
        weight = 70;
        break;
      case 'frankfurt':
        weight = 60;
        break;
      case 'wolfsburg':
        weight = 60;
        break;
      case 'maianz':
        weight = 60;
        break;
      case 'monchen':
        weight = 50;
        break;
      case 'koln':
        weight = 40;
        break;
      case 'hoffenheim':
        weight = 40;
        break;
      case 'bremen':
        weight = 30;
        break;
      case 'bochum':
        weight = 10;
        break;
      case 'augsburg':
        weight = 30;
        break;
      case 'stuttgart':
        weight = 20;
        break;
      case 'schalke':
        weight = 5;
        break;
      case 'hertha':
        weight = 5;
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

function Twobundesliga({ a, b, c, d, e,setchamstwobundesliga, score}) {
    const teams = ['munich', 'dortmund', 'leipzig', 'berlin', 'freiburg', 'leverkusen', 'frankfurt', 'wolfsburg', 'maianz', 'monchen', 'koln', 'hoffenheim', 'bremen', 'bochum', 'augsburg', 'stuttgart', 'schalke', 'hertha'];

  const [fixTeams, setFixTeams] = useState(() => shuffleTeams(teams));
  const [twoscorebundesliga, setTwoscoreebundesliga] = useState(0);
  const [cupWinner, setCupWinner] = useState(() => shuffleTeams(teams));
  useEffect(() => {
    if (a === fixTeams[0]) {
      setTwoscoreebundesliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[0],1))/2))
  }
  if (b === fixTeams[1]) {
    setTwoscoreebundesliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[1],2))/2))
  }
  if (c === fixTeams[2]) {
    setTwoscoreebundesliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[2],3))/2))
  }
  if (d === fixTeams[3]) {
    setTwoscoreebundesliga((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[3],4))/2))
  }
  if (e === cupWinner[0]) {
    setTwoscoreebundesliga((prevScore) => prevScore + Math.floor((100-getRankProbability(cupWinner[0],1))/2))
  }
  const chamsteams = fixTeams.slice(0, 4);
  setchamstwobundesliga(chamsteams)
  }, []);
  score(twoscorebundesliga)


  const getRankColor = (index) => {
    if (index < 4) {
      return 'skyblue'; // 하늘색 배경
    } else if (index < 6) {
      return 'lime'; // 연두색 배경
    } else if (index === 6) {
      return 'orange'; // 주황색 배경
    } else if (index > 15) {
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
      <h3>score: {twoscorebundesliga}</h3>
    </div>
  );
}

export default React.memo(Twobundesliga);