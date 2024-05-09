import './AppDownload.css'
import { assets } from '../../assets/assets';

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For better experience <br /> download our app</p>
            <div className="app-download-performs">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
            
        </div>
    );
};

export default AppDownload;