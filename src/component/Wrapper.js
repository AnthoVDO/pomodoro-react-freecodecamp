import Body from './Body';

const Wrapper = () => {

    

    return (
        <div className="wrapper" >
            <h1>Pomodoro</h1>
            <Body/>
            <h2 className="copyright">This Pomodoro is made by <a href="https://github.com/AnthoVDO" target="_blank" rel="noreferrer" className="copyright__name">AnthoVDO</a> for the FreeCodeCamp front end libraries project (25 + 5 Clock) </h2>
        </div>
    );
};

export default Wrapper;