import React, { createContext, useState, useEffect } from 'react';
import * as auth from '../services/auth';
import api from '../services/api';
import History from '../history';

interface AuthContextData {
    signed: boolean;
    user: object | null;
    loading: boolean;
    signIn(data:any): Promise<void>;
    authRegister(data:any): Promise<void>;
    signOut(): any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const storageUser = localStorage.getItem('user');
            const storageToken = localStorage.getItem('token');

            

            if(storageUser && storageToken) {
                api.defaults.headers.Authorization = `Bearer ${storageToken}`;
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
        }
        
        loadStorageData();
    }, []);

    async function signIn(data:any) {
        const response = await auth.signIn(data);
        setUser(response.user);

        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        api.defaults.headers.Authorization = `Bearer ${response.token}`;
        History.push('/');
    }

    async function authRegister(data:any) {
        const response = await auth.authRegister(data);
        setUser(response.user);

        localStorage.setItem('user', JSON.stringify(response.user));
        localStorage.setItem('token', response.token);
        api.defaults.headers.Authorization = `Bearer ${response.token}`;
        History.push('/');
    }

    function signOut() {
        localStorage.clear();
        api.defaults.headers.Authorization = undefined;
        setUser(null);
        History.push('/');
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, loading, signIn, authRegister, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;