import Card from './Card/Card';
import './Landing-page.css'

function Landingpage(){
    return(
        <>
        <div className='home Container'>
            <div className=''>
                <h1>A journey to digital sovereignty</h1>
                <p>Hills VPN prioritizes security and data protection, leveraging the latest tech insights gained from industry experts.</p>
            </div>
            <div>
                <Card />
            </div>
        </div>
        </>
    )
}
export default Landingpage;