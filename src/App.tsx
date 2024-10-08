import React, {useEffect} from 'react';
import './App.css';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {userSlice} from "./store/reducers/UserSlice";
import {fetchUsers} from "./store/reducers/ActionCreators";
import PostContainer from "./components/PostContainer";

function App() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    return (
        <div className="App">
            <PostContainer/>
        </div>
    );
}

export default App;
