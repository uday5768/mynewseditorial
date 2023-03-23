export default function Top(){
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const time = current.toLocaleTimeString("en-US");
    return (
      <div>
        <div className="date-time">
            <p>{time}</p>
            <p>{date}</p>
        </div>
        <hr />
      </div>
      
    )
}