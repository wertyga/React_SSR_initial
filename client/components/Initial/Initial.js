import img from '../../../images/original-(1)-.png';

import './Initial.sass';

export default class Initial extends React.Component {
    render() {
        return (
            <div className="Initial">
                <h1>INITIAL</h1>
                <img src={img} alt="initial_image"/>
            </div>
        );
    };
};