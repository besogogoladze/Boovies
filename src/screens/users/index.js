import React, {useState, useEffect} from 'react';
import './style.css';



function User({match}) {
  /* Get the element you want displayed in fullscreen */ 
  var elem = document.getElementById("myvideo");
  
  /* Function to open fullscreen mode */
  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    } else if (elem.requestFullscreen){
      elem.msRequestFullscreen()
    }
  }

    useEffect((match) => {
        fetchItem(match);
    },)

    const [item, setItem] = useState({
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(`http://localhost:3000/top100Films/${match.params.id}`)
        const item = await fetchItem.json()
        setItem(item)
    }
    
  return (
    <div>
      <h1>{item.title}</h1>
      <div className="w-100 d-flex justify-content-center align-items-center">
        <div className=" d-flex justify-content-center align-items-center" style={{ 
          backgroundImage: `url(${item.image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width:"80%",
          height:"600px"
        }}>
          <div className="w-50">
            <iframe id="myvideo" onClick={openFullscreen} className=".vid-card__fullscreen" width="100%" height="520px" title={item.id} src={item.video} alt={item.title}/>
          </div>
        </div>
      </div>
      <h1>{item.year}</h1>
    </div>
  );
}

export default User;
