const date=new Date();
const dateName=date.getDate();
const monthName=date.getMonth();
const fullYearName=date.getFullYear();

// const name=['cat','dog'];
// const [cat,dog]=name;
function Card(props){
   const {titleText,descText}=props;
   return <div className='card'>
    <h3 className='cardTitle'>{titleText}</h3>
    <p className='cardDescription'>{descText}</p>
    <p className='cardDate'>{dateName+'/'+monthName+'/'+fullYearName}</p>
   </div>
}

export default Card;