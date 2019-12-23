import React, {useState}from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import LoginForm from '../../components/Home/LoginForm';
import UserDashboard from '../../components/Home/UserDashboard';


const Home = props => {

    const[logged,setLogged]=useState(false)

    const loginHandler = ()=>{
        setLogged(!logged);
    }

    return (
        <div style={{
            height:'30vh',
            width:'30vw',
            margin:'10vh',
            textAlign:'center',
            }}
            >
            <Button onClick={()=>loginHandler()}>LOG</Button>

            {logged==false ? <><p>not logged</p><LoginForm/></>:
            <><p>logged</p><UserDashboard/></>}
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;