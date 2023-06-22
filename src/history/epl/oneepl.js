import React, { useState, useEffect } from 'react';
function weights(a) {
  let weight;
    switch (a) {
      case 'mancity':
        weight = 1300;
        break;
      case 'arsnal':
        weight = 300;
        break;
      case 'manu':
        weight = 200;
        break;
      case 'newcastle':
        weight = 150;
        break;
      case 'liverpool':
        weight = 80;
        break;
      case 'brighton':
        weight = 12;
        break;
      case 'astonbilla':
        weight = 10;
        break;
      case 'tottenham':
        weight = 30;
        break;
      case 'brentford':
        weight = 8;
        break;
      case 'fulham':
        weight = 6;
        break;
      case 'palace':
        weight = 5;
        break;
      case 'chelsea':
        weight = 20;
        break;
      case 'woverhamton':
        weight = 5;
        break;
      case 'westham':
        weight = 2;
        break;
      case 'bournemouth':
        weight = 2;
        break;
      case 'nottingham':
        weight = 2;
        break;
      case 'everton':
        weight = 5;
        break;
      case 'leister':
        weight = 2;
        break;
      case 'leeds':
        weight = 2;
        break;
      case 'southhamton':
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
      case 'mancity':
        weight = 1300;
        break;
      case 'arsnal':
        weight = 300;
        break;
      case 'manu':
        weight = 200;
        break;
      case 'newcastle':
        weight = 150;
        break;
      case 'liverpool':
        weight = 80;
        break;
      case 'brighton':
        weight = 12;
        break;
      case 'astonbilla':
        weight = 10;
        break;
      case 'tottenham':
        weight = 30;
        break;
      case 'brentford':
        weight = 8;
        break;
      case 'fulham':
        weight = 6;
        break;
      case 'palace':
        weight = 5;
        break;
      case 'chelsea':
        weight = 20;
        break;
      case 'woverhamton':
        weight = 5;
        break;
      case 'westham':
        weight = 2;
        break;
      case 'bournemouth':
        weight = 2;
        break;
      case 'nottingham':
        weight = 2;
        break;
      case 'everton':
        weight = 5;
        break;
      case 'leister':
        weight = 2;
        break;
      case 'leeds':
        weight = 2;
        break;
      case 'southhamton':
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

function Oneepl({ a, b, c, d, e, setchamsoneepl, score}) {
  const teams = ['mancity', 'arsnal', 'manu', 'newcastle', 'liverpool', 'brighton', 'astonbilla', 'tottenham', 'brentford', 'fulham', 'palace', 'chelsea', 'woverhamton', 'westham', 'bournemouth', 'nottingham', 'everton', 'leister', 'leeds', 'southhamton'];

  const [fixTeams, setFixTeams] = useState(() => shuffleTeams(teams));
  const [onescoreepl, setOnescoreeepl] = useState(0);
  const [cupWinner, setCupWinner] = useState(() => shuffleTeams(teams));


  useEffect(() => {
    if (a === fixTeams[0]) {
      setOnescoreeepl((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[0],1))/2))
  }
  if (b === fixTeams[1]) {
    setOnescoreeepl((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[1],2))/2))
  }
  if (c === fixTeams[2]) {
    setOnescoreeepl((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[2],3))/2))
  }
  if (d === fixTeams[3]) {
    setOnescoreeepl((prevScore) => prevScore + Math.floor((100-getRankProbability(fixTeams[3],4))/2))
  }
  if (e === cupWinner[0]) {
    setOnescoreeepl((prevScore) => prevScore + Math.floor((100-getRankProbability(cupWinner[0],1))/2))
  }
  
    const chamsteams = fixTeams.slice(0, 4);
    setchamsoneepl(chamsteams)
    
  }, []);
  score(onescoreepl)
  
  

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
      <h3>score: {onescoreepl}</h3>
    </div>
  );
}

export default React.memo(Oneepl);


