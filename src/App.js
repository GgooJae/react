import './App.css';
import{useState,useEffect} from 'react';

import eplLogo from './lloggo/eplLogo.jpg';
import serieLogo from './lloggo/serieLogo.jpg';
import laligaLogo from './lloggo/laligaLogo.jpg';
import bundesligaLogo from './lloggo/bundesligaLogo.jpg';
import chamsLogo from './lloggo/chamsLogo.jpg';





import arsnalLogo from './lloggo/arsnalLogo.jpg';
import astonbillaLogo from './lloggo/astonbillaLogo.jpg';
import brentfordLogo from './lloggo/brentfordLogo.jpg';
import brightonLogo from './lloggo/brightonLogo.jpg';
import fulhamLogo from './lloggo/fulhamLogo.jpg';
import liverpoolLogo from './lloggo/liverpoolLogo.jpg';
import mancityLogo from './lloggo/mancityLogo.jpg';
import manuLogo from './lloggo/manuLogo.jpg';
import newcastleLogo from './lloggo/newcastleLogo.jpg';
import palaceLogo from './lloggo/palaceLogo.jpg';
import chelseaLogo from './lloggo/chelseaLogo.jpg';
import westhamLogo from './lloggo/westhamLogo.jpg';
import woverhamtonLogo from './lloggo/woverhamtonLogo.jpg';
import tottenhamLogo from './lloggo/tottenhamLogo.jpg';
import bournemouthLogo from './lloggo/bournemouthLogo.jpg';
import nottinghamLogo from './lloggo/nottinghamLogo.jpg';
import evertonLogo from './lloggo/evertonLogo.jpg';
import leisterLogo from './lloggo/leisterLogo.jpg';
import leedsLogo from './lloggo/leedsLogo.jpg';
import southhamtonLogo from './lloggo/southhamtonLogo.jpg';

import napoliLogo from './lloggo/napoliLogo.jpg';
import lazioLogo from './lloggo/lazioLogo.jpg';
import interLogo from './lloggo/interLogo.jpg';
import atalantaLogo from './lloggo/atalantaLogo.jpg';
import millanLogo from './lloggo/millanLogo.jpg';
import romeLogo from './lloggo/romeLogo.jpg';
import juventusLogo from './lloggo/juventusLogo.jpg';
import torinoLogo from './lloggo/torinoLogo.jpg';
import fiolentinaLogo from './lloggo/fiolentinaLogo.jpg';
import monzaLogo from './lloggo/monzaLogo.jpg';
import bolognaLogo from './lloggo/bolognaLogo.jpg';
import udineseLogo from './lloggo/udineseLogo.jpg';
import sassuoloLogo from './lloggo/sassuoloLogo.jpg';
import empoliLogo from './lloggo/empoliLogo.jpg';
import salernitanaLogo from './lloggo/salernitanaLogo.jpg';
import recceLogo from './lloggo/recceLogo.jpg';
import speziaLogo from './lloggo/speziaLogo.jpg';
import veronaLogo from './lloggo/veronaLogo.jpg';
import cremoneseLogo from './lloggo/cremoneseLogo.jpg';
import sampdoriaLogo from './lloggo/sampdoriaLogo.jpg';

import barcelronaLogo from './lloggo/barcelronaLogo.jpg';
import madridLogo from './lloggo/madridLogo.jpg';
import atmLogo from './lloggo/atmLogo.jpg';
import sociedadLogo from './lloggo/sociedadLogo.jpg';
import villarrealLogo from './lloggo/villarrealLogo.jpg';
import betisLogo from './lloggo/betisLogo.jpg';
import osasunaLogo from './lloggo/osasunaLogo.jpg';
import bilbaoLogo from './lloggo/bilbaoLogo.jpg';
import gironaLogo from './lloggo/gironaLogo.jpg';
import vallecanoLogo from './lloggo/vallecanoLogo.jpg';
import sevillaLogo from './lloggo/sevillaLogo.jpg';
import mallorcaLogo from './lloggo/mallorcaLogo.jpg';
import cadizLogo from './lloggo/cadizLogo.jpg';
import getafeLogo from './lloggo/getafeLogo.jpg';
import valenciaLogo from './lloggo/valenciaLogo.jpg';
import almeriaLogo from './lloggo/almeriaLogo.jpg';
import celtavigoLogo from './lloggo/celtavigoLogo.jpg';
import valladolidLogo from './lloggo/valladolidLogo.jpg';
import espanyolLogo from './lloggo/espanyolLogo.jpg';
import elcheLogo from './lloggo/elcheLogo.jpg';

import munichLogo from './lloggo/munichLogo.jpg';
import dortmundLogo from './lloggo/dortmundLogo.jpg';
import leipzigLogo from './lloggo/leipzigLogo.jpg';
import berlinLogo from './lloggo/berlinLogo.jpg';
import freiburgLogo from './lloggo/freiburgLogo.jpg';
import leverkusenLogo from './lloggo/leverkusenLogo.jpg';
import frankfurtLogo from './lloggo/frankfurtLogo.jpg';
import wolfsburgLogo from './lloggo/wolfsburgLogo.jpg';
import maianzLogo from './lloggo/maianzLogo.jpg';
import monchenLogo from './lloggo/monchenLogo.jpg';
import kolnLogo from './lloggo/kolnLogo.jpg';
import hoffenheimLogo from './lloggo/hoffenheimLogo.jpg';
import bremenLogo from './lloggo/bremenLogo.jpg';
import bochumLogo from './lloggo/bochumLogo.jpg';
import augsburgLogo from './lloggo/augsburgLogo.jpg';
import stuttgartLogo from './lloggo/stuttgartLogo.jpg';
import schalkeLogo from './lloggo/schalkeLogo.jpg';
import herthaLogo from './lloggo/herthaLogo.jpg';

import portoLogo from './lloggo/portoLogo.jpg';
import benficaLogo from './lloggo/benficaLogo.jpg';
import bruggeLogo from './lloggo/bruggeLogo.jpg';
import psgLogo from './lloggo/psgLogo.jpg';
import psvLogo from './lloggo/psvLogo.jpg';
import trophy2 from './lloggo/trophy2.png';
import trophy3 from './lloggo/trophy3.png';
import chamstrophy from './lloggo/chamstrophy.jpg';












import Oneepl from './history/epl/oneepl';
import Twoepl from './history/epl/twoepl';
import Threeepl from './history/epl/threeepl'
import Oneserie from './history/serie/oneserie';
import Twoserie from './history/serie/twoserie';
import Threeserie from './history/serie/threeserie';
import Onelaliga from './history/laliga/onelaliga';
import Twolaliga from './history/laliga/twolaliga';
import Threelaliga from './history/laliga/threelaliga';
import Onebundesliga from './history/budesliga/onebundesliga';
import Twobundesliga from './history/budesliga/twobundesliga';
import Threebundesliga from './history/budesliga/threebundesliga';
import Onechams from './history/chams/onechams';
import Twochams from './history/chams/twochams';
import Threechams from './history/chams/threechams';
import Zerochams from './history/chams/zerochams';






function App() {
  const[userwinnerepl,setuserwinnerepl]=useState('')
  const inputWinnerepl=(e)=>{
    setuserwinnerepl(e.target.value)
  }
  const[usersecondepl,setusersecondepl]=useState('')
  const inputSecondepl=(e)=>{
    setusersecondepl(e.target.value)
  }
  const[userthirdepl,setuserthirdepl]=useState('')
  const inputThirdepl=(e)=>{
    setuserthirdepl(e.target.value)
  }
  const[userfourthepl,setuserfourthepl]=useState('')
  const inputFourthepl=(e)=>{
    setuserfourthepl(e.target.value)
  }
  const[usercupepl,setusercupepl]=useState('')
  const inputusercupepl=(e)=>{
    setusercupepl(e.target.value)
  }




  const[userwinnerlaliga,setuserwinnerlaliga]=useState('')
  const inputWinnerlaliga=(e)=>{
    setuserwinnerlaliga(e.target.value)
  }
  const[usersecondlaliga,setusersecondlaliga]=useState('')
  const inputSecondlaliga=(e)=>{
    setusersecondlaliga(e.target.value)
  }
  const[userthirdlaliga,setuserthirdlaliga]=useState('')
  const inputThirdlaliga=(e)=>{
    setuserthirdlaliga(e.target.value)
  }
  const[userfourthlaliga,setuserfourthlaliga]=useState('')
  const inputFourthlaliga=(e)=>{
    setuserfourthlaliga(e.target.value)
  }
  const[usercuplaliga,setusercuplaliga]=useState('')
  const inputusercuplaliga=(e)=>{
    setusercuplaliga(e.target.value)
  }


  const[userwinnerserie,setuserwinnerserie]=useState('')
  const inputWinnerserie=(e)=>{
    setuserwinnerserie(e.target.value)
  }
  const[usersecondserie,setusersecondserie]=useState('')
  const inputSecondserie=(e)=>{
    setusersecondserie(e.target.value)
  }
  const[userthirdserie,setuserthirdserie]=useState('')
  const inputThirdserie=(e)=>{
    setuserthirdserie(e.target.value)
  }
  const[userfourthserie,setuserfourthserie]=useState('')
  const inputFourthserie=(e)=>{
    setuserfourthserie(e.target.value)
  }
  const[usercupserie,setusercupserie]=useState('')
  const inputusercupserie=(e)=>{
    setusercupserie(e.target.value)
  }


  
  const[userwinnerbundesliga,setuserwinnerbundesliga]=useState('')
  const inputWinnerbundesliga=(e)=>{
    setuserwinnerbundesliga(e.target.value)
  }
  const[usersecondbundesliga,setusersecondbundesliga]=useState('')
  const inputSecondbundesliga=(e)=>{
    setusersecondbundesliga(e.target.value)
  }
  const[userthirdbundesliga,setuserthirdbundesliga]=useState('')
  const inputThirdbundesliga=(e)=>{
    setuserthirdbundesliga(e.target.value)
  }
  const[userfourthbundesliga,setuserfourthbundesliga]=useState('')
  const inputFourthbundesliga=(e)=>{
    setuserfourthbundesliga(e.target.value)
  }
  const[usercupbundesliga,setusercupbundesliga]=useState('')
  const inputusercupbundesliga=(e)=>{
    setusercupbundesliga(e.target.value)
  }



  const[userwinnerchams,setuserwinnerchams]=useState('')
  const inputWinnerchams=(e)=>{
    setuserwinnerchams(e.target.value)
  }
  const[usersecondchams,setusersecondchams]=useState('')
  const inputSecondchams=(e)=>{
    setusersecondchams(e.target.value)
  }



  const[cnt23,setcnt23]=useState(1)
  const[cnt24,setcnt24]=useState(1)
  const[cnt25,setcnt25]=useState(1)
  const[cnt26,setcnt26]=useState(1)

  const[cnt23chams,setcnt23chams]=useState(1)
  const[cnt24chams,setcnt24chams]=useState(1)
  const[cnt25chams,setcnt25chams]=useState(1)
  const[cnt26chams,setcnt26chams]=useState(1)

  const start23 = () => {
    setcnt23(cnt23+1)
  }
  const start24 = () => {
    setcnt24(cnt24+1)
  }
  const start25 = () => {
    setcnt25(cnt25+1)
    }
    const start26 = () => {
      setcnt26(cnt26+1)
      }

  const start23chams = () => {
    setcnt23chams(cnt23chams+1)
  }
  const start24chams = () => {
    setcnt24chams(cnt24chams+1)
  }
    const start25chams = () => {
      setcnt25chams(cnt25chams+1)
    }
  
    const start26chams = () => {
      setcnt26chams(cnt26chams+1)
    }
  const help = () => {
    alert('1.When click the logo you can check Team stat \n2.Win property: Team Stat/All Team Stat\n  Team stat is relative stat in league\n3.Not exist degradation\n4.Blue : CL, Green: EL, Orange:CFL, Pink:degrade\n5.Cup winner do not partcipate in champions league \n6 score = 100-properity');
  };
  const helpChams = () => {
    alert('1.There are 19 teams(4teams in each league + paris + psv + benfica) \n2.Team stat\n \t epl: 20 15 8 4 \n \t seire: 20 12 6 2 \n \t laliga: 20 15 8 2 \n \t bundesliga: 20 5 2 1 \n \t paris:20, psv:1 benfica:1 \n3.Winner +6, Second:+6');
  };

  const showinfo =(props) =>{
    alert(props)
  }

  const [chamsOnebundesliga, setchamsOnebundesliga] = useState([]);
  const [chamsTwobundesliga, setchamsTwobundesliga] = useState([]);
  const [chamsThreebundesliga, setchamsThreebundesliga] = useState([]);

  const [chamsOneepl, setchamsOneepl] = useState([]);
  const [chamsTwoepl, setchamsTwoepl] = useState([]);
  const [chamsThreeepl, setchamsThreeepl] = useState([]);

  const [chamsOnelaliga, setchamsOnelaliga] = useState([]);
  const [chamsTwolaliga, setchamsTwolaliga] = useState([]);
  const [chamsThreelaliga, setchamsThreelaliga] = useState([]);

  const [chamsOneserie, setchamsOneserie] = useState([]);
  const [chamsTwoserie, setchamsTwoserie] = useState([]);
  const [chamsThreeserie, setchamsThreeserie] = useState([]);
  
  const onechamsteam=[]
  for(var i=0;i<4;i++){
    onechamsteam.push(chamsOneepl[i])
    onechamsteam.push(chamsOneserie[i])
    onechamsteam.push(chamsOnelaliga[i])
    onechamsteam.push(chamsOnebundesliga[i])
  }

  const twochamsteam=[]
  for(var i=0;i<4;i++){
    twochamsteam.push(chamsTwoepl[i])
    twochamsteam.push(chamsTwoserie[i])
    twochamsteam.push(chamsTwolaliga[i])
    twochamsteam.push(chamsTwobundesliga[i])
  }

  const threechamsteam=[]
  for(var i=0;i<4;i++){
    threechamsteam.push(chamsThreeepl[i])
    threechamsteam.push(chamsThreeserie[i])
    threechamsteam.push(chamsThreelaliga[i])
    threechamsteam.push(chamsThreebundesliga[i])
  }

  const [score, setScore] = useState(0);

  const [eplonescore, seteplonescore] = useState(0);
  const [epltwoscore, setepltwoscore] = useState(0);
  const [eplthreescore, seteplthreescore] = useState(0);
  
  const [serieonescore, setserieonescore] = useState(0);
  const [serietwoscore, setserietwoscore] = useState(0);
  const [seriethreescore, setseriethreescore] = useState(0);
  
  const [laligaonescore, setlaligaonescore] = useState(0);
  const [laligatwoscore, setlaligatwoscore] = useState(0);
  const [laligathreescore, setlaligathreescore] = useState(0);

  const [bundesligaonescore, setbundesligaonescore] = useState(0);
  const [bundesligatwoscore, setbundesligatwoscore] = useState(0);
  const [bundesligathreescore, setbundesligathreescore] = useState(0);

  const [chamzeroscore, setchamzeroscore] = useState(0);
  const [chamonescore, setchamonescore] = useState(0);
  const [chamtwoscore, setchamtwoscore] = useState(0);
  const [chamthreescore, setchamthreescore] = useState(0);
  
  
  const showScore = () =>{
    setScore(eplonescore+epltwoscore+eplthreescore+serieonescore+serietwoscore+seriethreescore+laligaonescore+laligatwoscore+laligathreescore+
      bundesligaonescore+bundesligatwoscore+bundesligathreescore+chamonescore+chamtwoscore+chamthreescore+chamzeroscore)
  }
  
  console.log(eplonescore,epltwoscore,eplthreescore,serieonescore,serietwoscore,seriethreescore,laligaonescore,
              laligatwoscore,laligathreescore,bundesligaonescore,bundesligatwoscore,bundesligathreescore,chamzeroscore,chamonescore,chamtwoscore,chamthreescore)
  return (

    <><div className="App">
      <button className="help" onClick={help}>help</button>

      <img src={eplLogo} className='league'></img>
      <div class="input-container">
      <span className='input'>WINNER</span>
      <input type='text'
        value={userwinnerepl}
        onChange={inputWinnerepl}/>
      </div>
      
      <div class="input-container">
      <span className='input'>SECOND</span>
      <input type='text'
        value={usersecondepl}
        onChange={inputSecondepl}/>
      
      </div>

      <div class="input-container">
      <span className='input'>THIRD</span>
      <input type='text'
        value={userthirdepl}
        onChange={inputThirdepl}/>
      
      </div>

      <div class="input-container">
      <span className='input'>FOURTH</span>
      <input type='text'
        value={userfourthepl}
        onChange={inputFourthepl} />
      
      </div>

      <div class="input-container">
      <span className='input'>CUP</span>
      <input type='text'
        value={usercupepl}
        onChange={inputusercupepl} />
      </div>

      <br />
      <button onClick={start23}>23/24</button>
      <button onClick={start24}>24/25</button>
      <button onClick={start25}>25/26</button>

      <div className="epl">
        <div className="season">
          <h2>22/23</h2>
          <div className='club22'>
            <p>1</p><span ><img src={mancityLogo} onClick={() => showinfo('Team Stat:1300')} /> <p id="맨시티">mancity </p><br /></span>
            <p>2</p><span ><img src={arsnalLogo} onClick={() => showinfo('Team Stat:300')} /><p id="아스날">arsnal</p><br /></span>
            <p>3</p><span><img src={manuLogo} onClick={() => showinfo('Team Stat:200')} /><p id="맨유">manu</p><br /></span>
            <p>4</p><span ><img src={newcastleLogo} onClick={() => showinfo('Team Stat:150')} /><p id="뉴캐슬">newcastle</p><br /></span>
            <p>5</p><span ><img src={liverpoolLogo} onClick={() => showinfo('Team Stat:80')} /><p id="리버풀">liverpool</p><br /></span>
            <p>6</p><span><img src={brightonLogo} onClick={() => showinfo('Team Stat:15')} /><p id="브라이튼">brighton</p><br /></span>
            <p>7</p><span ><img src={astonbillaLogo} onClick={() => showinfo('Team Stat:10')} /><p id="아스톤빌라">astonbilla</p><br /></span>
            <p>8</p><span ><img src={tottenhamLogo} onClick={() => showinfo('Team Stat:30')} /><p id="토트넘">tottenham</p><br /></span>
            <p>9</p><span ><img src={brentfordLogo} onClick={() => showinfo('Team Stat:10')} /><p id="브렌트포드">brentford</p><br /></span>
            <p>10</p><span ><img src={fulhamLogo} onClick={() => showinfo('Team Stat:6')} /><p id="풀럼">fulham</p><br /></span>
            <p>11</p><span ><img src={palaceLogo} onClick={() => showinfo('Team Stat:5')} /><p id="팰리스">palace</p><br /></span>      
            <p>12</p><span ><img src={chelseaLogo} onClick={() => showinfo('Team Stat:20')} /><p id="첼시">chelsea</p><br /></span>      
            <p>13</p><span ><img src={woverhamtonLogo} onClick={() => showinfo('Team Stat:5')} /><p id="울버햄튼">woverhamton</p><br /></span>      
            <p>14</p><span ><img src={westhamLogo} onClick={() => showinfo('Team Stat:3')} /><p id="웨스트햄">westham</p><br /></span>      
            <p>15</p><span ><img src={bournemouthLogo} onClick={() => showinfo('Team Stat:3')} /><p id="본머스">bournemouth</p><br /></span>      
            <p>16</p><span ><img src={nottinghamLogo} onClick={() => showinfo('Team Stat:3')} /><p id="노팅엄">nottingham</p><br /></span>      
            <p>17</p><span ><img src={evertonLogo} onClick={() => showinfo('Team Stat:8')} /><p id="에버튼">everton</p><br /></span>      
            <p>18</p><span ><img src={leisterLogo} onClick={() => showinfo('Team Stat:3')} /><p id="레스터">liester</p><br /></span>      
            <p>19</p><span ><img src={leedsLogo} onClick={() => showinfo('Team Stat:3')} /><p id="리즈">leeds</p><br /></span>      
            <p>20</p><span ><img src={southhamtonLogo} onClick={() => showinfo('Team Stat:3')} /><p id="사우스햄튼">southhamton</p><br /></span>      
          </div>
          
        </div>
        <div className="season">
          <h2>23/24</h2>
          <div className='club'>
            {
              cnt23 > 1 ? 
              <Oneepl a={userwinnerepl} b={usersecondepl} c={userthirdepl} d={userfourthepl} e={usercupepl} setchamsoneepl={setchamsOneepl} score={seteplonescore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>24/25</h2>
          <div className='club'>
            {
              cnt24 > 1 ? 
              <Twoepl a={userwinnerepl} b={usersecondepl} c={userthirdepl} d={userfourthepl} e={usercupepl} setchamstwoepl={setchamsTwoepl} score={setepltwoscore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>25/26</h2>
          <div className='club'>
            {
              cnt25 > 1 ? 
              <Threeepl a={userwinnerepl} b={usersecondepl} c={userthirdepl} d={userfourthepl} e={usercupepl} setchamsthreeepl={setchamsThreeepl} score={seteplthreescore}/> : 
              <></>
            }
          </div>
        </div>
      </div>

      <img src={serieLogo} className='league'></img>
      <div class="input-container">
      <span className='input'>WINNER</span>
      <input type='text'
        value={userwinnerserie}
        onChange={inputWinnerserie}/>
        </div>

      <div class="input-container">
      <span className='input'>SECOND</span>
      <input type='text'
        value={usersecondserie}
        onChange={inputSecondserie}/>
        </div>
      
      <div class="input-container">
      <span className='input'>THIRD</span>
      <input type='text'
        value={userthirdserie}
        onChange={inputThirdserie}/>
        </div>
      
      <div class="input-container">
      <span className='input'>FOURTH</span>
      <input type='text'
        value={userfourthserie}
        onChange={inputFourthserie} />
        </div>
      <div class="input-container">
      <span className='input'>CUP</span>
      <input type='text'
        value={usercupserie}
        onChange={inputusercupserie} />
        </div>


      <br />
      <button onClick={start23}>23/24</button>
      <button onClick={start24}>24/25</button>
      <button onClick={start25}>25/26</button>

      <div className="serie">
        <div className="season">
          <h2>22/23</h2>
          <div className='club22'>
            <p>1</p><span ><img src={napoliLogo} onClick={() => showinfo('Team Stat:1300')} /> <p id="나폴리">napoli </p><br /></span>
            <p>2</p><span ><img src={lazioLogo} onClick={() => showinfo('Team Stat:700')} /><p id="라치오">lazio</p><br /></span>
            <p>3</p><span><img src={interLogo} onClick={() => showinfo('Team Stat:600')} /><p id="인터밀란">inter</p><br /></span>
            <p>4</p><span ><img src={millanLogo} onClick={() => showinfo('Team Stat:500')} /><p id="밀란">millan</p><br /></span>
            <p>5</p><span ><img src={atalantaLogo} onClick={() => showinfo('Team Stat:300')} /><p id="아틀란타">atalanta</p><br /></span>
            <p>6</p><span><img src={romeLogo} onClick={() => showinfo('Team Stat:270')} /><p id="로마">rome</p><br /></span>
            <p>7</p><span ><img src={juventusLogo} onClick={() => showinfo('Team Stat:300')} /><p id="유벤투스">juventus</p><br /></span>
            <p>8</p><span ><img src={fiolentinaLogo} onClick={() => showinfo('Team Stat:50')} /><p id="피오렌티나">fiolentina</p><br /></span>
            <p>9</p><span ><img src={bolognaLogo} onClick={() => showinfo('Team Stat:40')} /><p id="볼로냐">bologna</p><br /></span>
            <p>10</p><span ><img src={torinoLogo} onClick={() => showinfo('Team Stat:35')} /><p id="토리노">torino</p><br /></span>
            <p>11</p><span ><img src={monzaLogo} onClick={() => showinfo('Team Stat:12')} /><p id="몬자">monza</p><br /></span>
            <p>12</p><span ><img src={udineseLogo} onClick={() => showinfo('Team Stat:8')} /><p id="우디네세">udinese</p><br /></span>      
            <p>13</p><span ><img src={sassuoloLogo} onClick={() => showinfo('Team Stat:7')} /><p id="사수올로">sassuolo</p><br /></span>  
            <p>14</p><span ><img src={empoliLogo} onClick={() => showinfo('Team Stat:7')} /><p id="엠폴리">empoli</p><br /></span>      
            <p>15</p><span ><img src={salernitanaLogo} onClick={() => showinfo('Team Stat:10')} /><p id="살레르티나">salernitana</p><br /></span>      
            <p>16</p><span ><img src={recceLogo} onClick={() => showinfo('Team Stat:6')} /><p id="레체">recce</p><br /></span>      
            <p>17</p><span ><img src={speziaLogo} onClick={() => showinfo('Team Stat:6')} /><p id="스페치아">spezia</p><br /></span>      
            <p>18</p><span ><img src={veronaLogo} onClick={() => showinfo('Team Stat:4')} /><p id="베로나">verona</p><br /></span>      
            <p>19</p><span ><img src={cremoneseLogo} onClick={() => showinfo('Team Stat:3')} /><p id="크레모네세">cremonese</p><br /></span>      
            <p>20</p><span ><img src={sampdoriaLogo} onClick={() => showinfo('Team Stat:2')} /><p id="삼프도리아">sampdoria</p><br /></span>      
          </div>
          
        </div>
        <div className="season">
          <h2>23/24</h2>
          <div className='club'>
            {
              cnt23 > 1 ? 
              <Oneserie a={userwinnerserie} b={usersecondserie} c={userthirdserie} d={userfourthserie} e={usercupserie} setchamsoneserie={setchamsOneserie} score={setserieonescore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>24/25</h2>
          <div className='club'>
            {
              cnt24 > 1 ? 
              <Twoserie a={userwinnerserie} b={usersecondserie} c={userthirdserie} d={userfourthserie} e={usercupserie} setchamstwoserie={setchamsTwoserie} score={setserietwoscore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>25/26</h2>
          <div className='club'>
            {
              cnt25 > 1 ? 
              <Threeserie a={userwinnerserie} b={usersecondserie} c={userthirdserie} d={userfourthserie} e={usercupserie} setchamsthreeserie={setchamsThreeserie} score={setseriethreescore}/> : 
              <></>
            }
          </div>
        </div>
      </div>

      <img src={laligaLogo} className='league'></img>
      <div class="input-container">
      <span className='input'>WINNER</span>
      <input type='text'
        value={userwinnerlaliga}
        onChange={inputWinnerlaliga}/>
        </div>
        
      <div class="input-container">
      <span className='input'>SECOND</span>
      <input type='text'
        value={usersecondlaliga}
        onChange={inputSecondlaliga}/>
      </div>

      <div class="input-container">
      <span className='input'>THIRD</span>
      <input type='text'
        value={userthirdlaliga}
        onChange={inputThirdlaliga}/>
        </div>

      <div class="input-container">
      <span className='input'>FOURTH</span>
      <input type='text'
        value={userfourthlaliga}
        onChange={inputFourthlaliga} />
      </div>
      
      <div class="input-container">
      <span className='input'>CUP</span>
      <input type='text'
        value={usercuplaliga}
        onChange={inputusercuplaliga} />
      </div>
      

      <br />
      <button onClick={start23}>23/24</button>
      <button onClick={start24}>24/25</button>
      <button onClick={start25}>25/26</button>

      <div className="laliga">
        <div className="season">
          <h2>22/23</h2>
          <div className='club22'>
            <p>1</p><span ><img src={barcelronaLogo} onClick={() => showinfo('Team Stat:5000')} /> <p id="바르셀로나">barcelrona </p><br /></span>
            <p>2</p><span ><img src={madridLogo} onClick={() => showinfo('Team Stat:5000')} /><p id="레알">madrid</p><br /></span>
            <p>3</p><span><img src={atmLogo} onClick={() => showinfo('Team Stat:1000')} /><p id="아틀레티코">atm</p><br /></span>
            <p>4</p><span ><img src={sociedadLogo} onClick={() => showinfo('Team Stat:100')} /><p id="소시에다드">sociedad</p><br /></span>
            <p>5</p><span ><img src={villarrealLogo} onClick={() => showinfo('Team Stat:80')} /><p id="비야레알">villarreal</p><br /></span>
            <p>6</p><span><img src={betisLogo} onClick={() => showinfo('Team Stat:30')} /><p id="베티스">betis</p><br /></span>
            <p>7</p><span ><img src={osasunaLogo} onClick={() => showinfo('Team Stat:30')} /><p id="오사수나">osasuna</p><br /></span>
            <p>8</p><span ><img src={bilbaoLogo} onClick={() => showinfo('Team Stat:30')} /><p id="빌바오">bilbao</p><br /></span>
            <p>9</p><span ><img src={mallorcaLogo} onClick={() => showinfo('Team Stat:35')} /><p id="마요르카">mallorca</p><br /></span> 
            <p>10</p><span ><img src={gironaLogo} onClick={() => showinfo('Team Stat:23')} /><p id="지로나">girona</p><br /></span>
            <p>11</p><span ><img src={vallecanoLogo} onClick={() => showinfo('Team Stat:23')} /><p id="바요르카">vallecano</p><br /></span>
            <p>12</p><span ><img src={sevillaLogo} onClick={() => showinfo('Team Stat:100')} /><p id="세비야">sevilla</p><br /></span>      
            <p>13</p><span ><img src={celtavigoLogo} onClick={() => showinfo('Team Stat:20')} /><p id="셀타비고">celtavigo</p><br /></span>      
            <p>14</p><span ><img src={cadizLogo} onClick={() => showinfo('Team Stat:20')} /><p id="카디즈">cadiz</p><br /></span>  
            <p>15</p><span ><img src={getafeLogo} onClick={() => showinfo('Team Stat:18')} /><p id="헤타페">getafe</p><br /></span>      
            <p>16</p><span ><img src={valenciaLogo} onClick={() => showinfo('Team Stat:30')} /><p id="발렌시아">valencia</p><br /></span>      
            <p>17</p><span ><img src={almeriaLogo} onClick={() => showinfo('Team Stat:15')} /><p id="알메리아">almeria</p><br /></span>      
            <p>18</p><span ><img src={valladolidLogo} onClick={() => showinfo('Team Stat:7')} /><p id="바야돌리드">valladolid</p><br /></span>      
            <p>19</p><span ><img src={espanyolLogo} onClick={() => showinfo('Team Stat:4')} /><p id="에스파뇰">espanyol</p><br /></span>      
            <p>20</p><span ><img src={elcheLogo} onClick={() => showinfo('Team Stat:2')} /><p id="엘체">elche</p><br /></span>      
          </div>
          
        </div>
        <div className="season">
          <h2>23/24</h2>
          <div className='club'>
            {
              cnt23 > 1 ? 
              <Onelaliga a={userwinnerlaliga} b={usersecondlaliga} c={userthirdlaliga} d={userfourthlaliga} e={usercuplaliga} setchamsonelaliga={setchamsOnelaliga} score={setlaligaonescore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>24/25</h2>
          <div className='club'>
            {
              cnt24 > 1 ? 
              <Twolaliga a={userwinnerlaliga} b={usersecondlaliga} c={userthirdlaliga} d={userfourthlaliga} e={usercuplaliga} setchamstwolaliga={setchamsTwolaliga} score={setlaligatwoscore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>25/26</h2>
          <div className='club'>
            {
              cnt25 > 1 ? 
              <Threelaliga a={userwinnerlaliga} b={usersecondlaliga} c={userthirdlaliga} d={userfourthlaliga} e={usercuplaliga} setchamsthreelaliga={setchamsThreelaliga} score={setlaligathreescore}/> : 
              <></>
            }
          </div>
        </div>
      </div>

      <img src={bundesligaLogo} className='league'></img>
      <div class="input-container">
      <span className='input'>WINNER</span>
      <input type='text'
        value={userwinnerbundesliga}
        onChange={inputWinnerbundesliga}/>

      </div>
      
      <div class="input-container">
      <span className='input'>SECOND</span>
      <input type='text'
        value={usersecondbundesliga}
        onChange={inputSecondbundesliga}/>
      </div>
      
      <div class="input-container">
      <span className='input'>THIRD</span>
      <input type='text'
        value={userthirdbundesliga}
        onChange={inputThirdbundesliga}/>
      </div>
      
      <div class="input-container">
      <span className='input'>FOURTH</span>
      <input type='text'
        value={userfourthbundesliga}
        onChange={inputFourthbundesliga} />
      </div>
      
      <div class="input-container">
      <span className='input'>CUP</span>
      <input type='text'
        value={usercupbundesliga}
        onChange={inputusercupbundesliga} />
      </div>

      <br />
      <button onClick={start23}>23/24</button>
      <button onClick={start24}>24/25</button>
      <button onClick={start25}>25/26</button>

      <div className="bundesliga">
        <div className="season">
          <h2>22/23</h2>
          <div className='club22'>
            <p>1</p><span ><img src={munichLogo} onClick={() => showinfo('Team Stat:20000')} /> <p id="뮌헨">munich</p><br /></span>
            <p>2</p><span ><img src={dortmundLogo} onClick={() => showinfo('Team Stat:500')} /><p id="도르트문트">dortmund</p><br /></span>
            <p>3</p><span><img src={leipzigLogo} onClick={() => showinfo('Team Stat:200')} /><p id="라이프치히">leipzig</p><br /></span>
            <p>4</p><span ><img src={berlinLogo} onClick={() => showinfo('Team Stat:70')} /><p id="베를린">berlin </p><br /></span>
            <p>5</p><span ><img src={freiburgLogo} onClick={() => showinfo('Team Stat:70')} /><p id="프라이부르크">freiburg </p><br /></span>
            <p>6</p><span><img src={leverkusenLogo} onClick={() => showinfo('Team Stat:70')} /><p id="레버쿠젠">leverkusen</p><br /></span>
            <p>7</p><span ><img src={frankfurtLogo} onClick={() => showinfo('Team Stat:60')} /><p id="프랑크부르트">frankfurt </p><br /></span>
            <p>8</p><span ><img src={wolfsburgLogo} onClick={() => showinfo('Team Stat:60')} /><p id="볼프스부르크">wolfsburg </p><br /></span>
            <p>9</p><span ><img src={maianzLogo} onClick={() => showinfo('Team Stat:60')} /><p id="마인츠">maianz</p><br /></span>
            <p>10</p><span ><img src={monchenLogo} onClick={() => showinfo('Team Stat:50')} /><p id="묀헨">monchen</p><br /></span>
            <p>11</p><span ><img src={kolnLogo} onClick={() => showinfo('Team Stat:40')} /><p id="쾰른">koln</p><br /></span>
            <p>12</p><span ><img src={hoffenheimLogo} onClick={() => showinfo('Team Stat:40')} /><p id="호펜하임">hoffenheim</p><br /></span>      
            <p>13</p><span ><img src={bremenLogo} onClick={() => showinfo('Team Stat:30')} /><p id="브레멘">bremen</p><br /></span>      
            <p>14</p><span ><img src={bochumLogo} onClick={() => showinfo('Team Stat:10')} /><p id="보훔">bochum</p><br /></span>  
            <p>15</p><span ><img src={augsburgLogo} onClick={() => showinfo('Team Stat:30')} /><p id="아우크스부르크">augsburg</p><br /></span>      
            <p>16</p><span ><img src={stuttgartLogo} onClick={() => showinfo('Team Stat:20')} /><p id="슈트가르트">stuttgart</p><br /></span>      
            <p>17</p><span ><img src={schalkeLogo} onClick={() => showinfo('Team Stat:5')} /><p id="샬케">schalke</p><br /></span>      
            <p>18</p><span ><img src={herthaLogo} onClick={() => showinfo('Team Stat:5')} /><p id="헤르타">hertha</p><br /></span>      
          </div>
          
        </div>
        <div className="season">
          <h2>23/24</h2>
          <div className='club'>
            {
              cnt23 > 1 ? 
              <Onebundesliga a={userwinnerbundesliga} b={usersecondbundesliga} c={userthirdbundesliga} d={userfourthbundesliga} e={usercupbundesliga}  setchamsonebundesliga={setchamsOnebundesliga} score={setbundesligaonescore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>24/25</h2>
          <div className='club'>
            {
              cnt24 > 1 ? 
              <Twobundesliga a={userwinnerbundesliga} b={usersecondbundesliga} c={userthirdbundesliga} d={userfourthbundesliga} e={usercupbundesliga} setchamstwobundesliga={setchamsTwobundesliga} score={setbundesligatwoscore}/> : 
              <></>
            }
          </div>
        </div>

        <div className="season">
          <h2>25/26</h2>
          <div className='club'>
            {
              cnt25 > 1 ? 
              <Threebundesliga a={userwinnerbundesliga} b={usersecondbundesliga} c={userthirdbundesliga} d={userfourthbundesliga} e={usercupbundesliga} setchamsthreebundesliga={setchamsThreebundesliga} score={setbundesligathreescore}/> : 
              <></>
            }
          </div>
        </div>
      </div>
    

      <button className="help" onClick={helpChams}>help</button>  
      
      
      <img src={chamsLogo} className='league'></img>
      <div class="input-container">
      <span className='input'>WINNER</span>
      
      <input type='text'
        value={userwinnerchams}
        onChange={inputWinnerchams}/>

      </div>
      
      <div class="input-container">
      <span className='input'>SECOND</span>
      <input type='text'
        value={usersecondchams}
        onChange={inputSecondchams}/>
      </div>
      
      

      <br />
      <button onClick={start23}>23/24<br/>league</button>
      <button onClick={start24}>24/25<br/>league</button>
      <button onClick={start25}>25/26<br/>league</button>
      <br />
      <button onClick={start23chams}>23/24<br/>chams</button>
      <button onClick={start24chams}>24/25<br/>chams</button>
      <button onClick={start25chams}>25/26<br/>chams</button>
      <button onClick={start26chams}>26/27<br/>chams</button>
      </div>
      <div className="chams">
      
      <div className="season">
      <h2>23/24</h2>
      {
          cnt23chams > 1 ? 
          <Zerochams a={userwinnerchams} b={usersecondchams} score={setchamonescore}/> : 
          <></>
        }
      <div className='club'>
        
      </div>
      </div>



      <div className="season">
      <h2>24/25</h2>
      <div className='club'>
        {
          cnt24chams > 1 ? 
          <Onechams a={userwinnerchams} b={usersecondchams} team={onechamsteam} score={setchamonescore}/> : 
          <></>
        }
      </div>
      </div>

      <div className="season">
      <h2>25/26</h2>
      <div className='club'>
        {
          cnt25chams > 1 ? 
          <Twochams a={userwinnerchams} b={usersecondchams} team={twochamsteam} score={setchamtwoscore}/> : 
          <></>
        }
      </div>
      </div>

      <div className="season">
      <h2>26/27</h2>
      <div className='club'>
        {
          cnt26chams > 1 ? 
          <Threechams a={userwinnerchams} b={usersecondchams} team={threechamsteam} score={setchamthreescore}/> : 
          <></>
        }
      </div>
      </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button onClick={showScore}>score</button>
      </div>
      <h1>scrore:{score}</h1>
      </>
  );
}

export default App;
