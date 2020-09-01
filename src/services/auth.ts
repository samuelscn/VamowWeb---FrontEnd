
interface Response {
    token: string;
    user: {
        id: number,
        nome: string,
        sobrenome: string,
        email: string,
        avatar: string
    };
}

export function signIn(data:any): Promise<Response> {
    const { token } = data;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: token,
                user: {
                    id: data.getUserData[0].id,
                    nome: data.getUserData[0].nome,
                    sobrenome: data.getUserData[0].sobrenome,
                    email: data.getUserData[0].email,
                    avatar: data.getUserData[0].avatar
                },
            });
        }, 2000);
    });
}

export function authRegister(data:any): Promise<Response> {
    const { token } = data;
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: token,
                user: {
                    id: data.getUserData.id,
                    nome: data.getUserData.nome,
                    sobrenome: data.getUserData.sobrenome,
                    email: data.getUserData.email,
                    avatar: data.getUserData.avatar
                },
            });
        }, 2000);
    });
}