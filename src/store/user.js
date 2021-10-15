import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const slice = createSlice({
    name: 'weather',
    initialState: {
        user: {},
        token: "",
        login: {
            loading: false,
            error: false,
            success: false,
            msg: ""
        },
        register: {
            loading: false,
            error: false,
            success: false,
            msg: ""
        },
        editProfile: {
            loading: false,
            error: false,
            success: false,
            msg: ""
        }
    },

    reducers: {
        setUserData: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.login.success = true
            localStorage.setItem("token", action.payload.token)
        },
        setRegisterData: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
            state.register.success = true
            localStorage.setItem("token", action.payload.token)
        },
        setRequestLoading: (state, action) => {
            state[action.payload.type].loading = action.payload.status
        },
        setResetState: (state, action) => {
            state[action.payload] = {
                loading: false,
                error: false,
                success: false,
                msg: ""
            }
        },
        setEditUser: (state, action) => {
            state.user = action.payload
            state.editProfile.success = true
        },
        setErrorRequest: (state, action) => {
            state[action.payload.type].loading = false
            state[action.payload.type].error = true
            state[action.payload.type].msg = action.payload.msg
        },
        setLogout: (state, action) => {
            state.user = {}
            state.token = ""
            localStorage.removeItem("token")
        }
    }
})

export default slice.reducer


//actions

const { setUserData, setRegisterData, setRequestLoading, setEditUser, setResetState, setErrorRequest, setLogout } = slice.actions

export const serverRender = () => async dispatch => {
    dispatch(setResetState('login'))
    const token = localStorage.getItem("token") 
    if(token) {
        dispatch(setRequestLoading({ type: "login", status: true }))
        try {
            const { data } = await axios.get('http://localhost:4001/api/user/' + token)
            if(data) {
                dispatch(setUserData(data))
                dispatch(setRequestLoading({ type: "login", status: false }))
            }
        } catch (err) {
            console.log(err)
        }
    }
}

export const login = (details) => async dispatch => {
    dispatch(setResetState('login'))
    dispatch(setRequestLoading({ type: "login", status: true }))
    try {
        const { data } = await axios.post('http://localhost:4001/api/user/', details)
        if(data) {
            dispatch(setUserData(data))
            dispatch(setRequestLoading({ type: "login", status: false }))
        }
    } catch (err) {
        const msg = err.response.data.msg
        dispatch(setErrorRequest({ type: 'login', msg }))
    }
}

export const register = (details) => async dispatch => {
    dispatch(setResetState('register'))
    dispatch(setRequestLoading({ type: "register", status: true }))
    try {
        const { data } = await axios.post('http://localhost:4001/api/user/create', details)
        if(data) {
            dispatch(setRegisterData(data))
            dispatch(setRequestLoading({ type: "register", status: false }))
        }
    } catch (err) {
        const msg = err.response.data.msg
        dispatch(setErrorRequest({ type: 'register', msg }))
    }
}

export const editProfile = (details) => async dispatch => {
    dispatch(setResetState('editProfile'))
    dispatch(setRequestLoading({ type: "editProfile", status: true }))
    try {
        const token = localStorage.getItem("token") 
        const { data } = await axios.put('http://localhost:4001/api/user/' + token, details)
        if(data) {
            dispatch(setEditUser(data))
            dispatch(setRequestLoading({ type: "editProfile", status: false }))
        }
    } catch (err) {
        console.log(err)
    }
}

export const resetState = (type) => async dispatch => {
    dispatch(setResetState(type))
}

export const logout = () => async dispatch => {
    dispatch(setLogout())
}