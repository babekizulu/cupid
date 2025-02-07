//components
import Link from './Link';
//icons
import {FaHeart} from 'react-icons/fa';

function HeartBtn() {
    return (
        <Link className='button' href='/start'>
            <FaHeart className='icon'/>
        </Link>
    );
};

export default HeartBtn;