import React, { useState, useEffect } from 'react';
import Onechams from './onechams';
function weights(teams) {
  let weight
  switch (teams) {
    case 'mancity':
        weight = 20;
        break;
      case 'arsnal':
        weight = 15;
        break;
      case 'manu':
        weight = 8;
        break;
      case 'newcastle':
        weight = 4;
        break;
      case 'napoli':
        weight = 20;
        break;
      case 'lazio':
        weight = 12;
        break;
      case 'inter':
        weight = 6;
        break;
      case 'millan':
        weight = 2;
        break;
      case 'barcelrona':
        weight = 20;
        break;
      case 'madrid':
        weight = 15;
        break;
      case 'atm':
        weight = 8;
        break;
      case 'sociedad':
        weight = 2;
        break;
      case 'munich':
        weight = 20;
        break;
      case 'dortmund':
        weight = 5;
        break;
      case 'leipzig':
        weight = 2;
        break;
      case 'berlin':
        weight = 1;
        break;
      case 'psg':
        weight = 20;
        break;
      case 'psv':
        weight = 1;
        break;
        case 'benfica':
            weight = 1;
            break;
  }
  return weight
}
function shuffleTeams(teams) {
  const weightedTeams = [];

  teams.forEach((team) => {
    let weight;
    switch (team) {
      case 'mancity':
        weight = 20;
        break;
      case 'arsnal':
        weight = 15;
        break;
      case 'manu':
        weight = 8;
        break;
      case 'newcastle':
        weight = 4;
        break;
      case 'napoli':
        weight = 20;
        break;
      case 'lazio':
        weight = 12;
        break;
      case 'inter':
        weight = 6;
        break;
      case 'millan':
        weight = 2;
        break;
      case 'barcelrona':
        weight = 20;
        break;
      case 'madrid':
        weight = 15;
        break;
      case 'atm':
        weight = 8;
        break;
      case 'sociedad':
        weight = 2;
        break;
      case 'munich':
        weight = 20;
        break;
      case 'dortmund':
        weight = 5;
        break;
      case 'leipzig':
        weight = 2;
        break;
      case 'berlin':
        weight = 1;
        break;
      case 'psg':
        weight = 20;
        break;
      case 'psv':
        weight = 1;
        break;
        case 'benfica':
            weight = 1;
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

function Zerochams({ a, b, score}) {
  const teams = ['mancity', 'arsnal', 'manu', 'newcastle', 'napoli', 'lazio', 'inter', 'millan', 'barcelrona', 'madrid', 'atm', 'sociedad', 'munich', 'dortmund', 'leipzig', 'berlin', 'psg', 'psv', 'benfica'];
  const [fixTeams, setFixTeams] = useState(() => shuffleTeams(teams));
  const [zeroscorechams, setZeroscorechams] = useState(0);
  useEffect(() => {
    if (a === fixTeams[0]) {
      setZeroscorechams((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[0],1))/2))
  }
  if (b === fixTeams[1]) {
    setZeroscorechams((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[1],2))/2))
  }
  

  }, []);
  score(zeroscorechams)

  
  
  

  const getRankColor = (index) => {
    if (index < 2) {
      return 'skyblue'; // 연두색 배경
    }
      else if (index < 4) {
      return 'lime'; // 연두색 배경
    } else if (index < 8) {
      return 'orange'; // 주황색 배경
    } else if (index < 16) {
      return 'pink'; // 빨간색 배경
    }
    return 'transparent';
  };
  const rank = (index) =>{
    if (index == 0){
      return 1
    }
    else if ( index ==1){
      return 2
    }
    else if(index<4){
      return 4
    }
    else if(index<8){
      return 8
    }
    else if(index<16){
      return 16
    }
    else {
      return 32
    }
  }
  const getRankProbability = (team, rank) => {
    const weight = weights(team);
    const totalWeight = teams.reduce((sum, team) => sum + weights(team), 0);
    const probability = weight / totalWeight;

    switch (rank) {
      case 1:
      return probability * 100;
    case 2:
      return (1-probability)*probability * 100; 
    default:
      return 0;
    }
  };
  return (
    <div className="club">
      {fixTeams.map((team, index) => (
        <React.Fragment key={team}>
          <div style={{ background: getRankColor(index) }}>
          { index==0 ?
                      <img src={require(`../../lloggo/chamstrophy.jpg`)} className='trophy'/>:
                      <p>{rank(index)}</p>
                      }
            <img src={require(`../../lloggo/${team}Logo.jpg`)} alt={`${team} logo`} />
            { index>0?
                        <p className='clubName'>{`${team}`}</p>:
                        <></>
                      }   
            <br />
          </div>
        </React.Fragment>
      ))}
      <h3>score: {zeroscorechams}</h3>
    </div>
  );
}

export default React.memo(Zerochams);