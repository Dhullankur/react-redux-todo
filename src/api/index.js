import axios from 'axios';


export const registerUser = async (user) => {
    try {
        const response = await fetch("https://todo-ankur.herokuapp.com/user", {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json();
        return data
    } catch (error) {
        return error;
    }
};

// export const LoginUser = async (user) => {
//     try {
//         alert("entered in try")
//         const response = await fetch("https://todo-ankur.herokuapp.com/user/login", {
//             method: 'POST',
//             body: JSON.stringify(user),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         const data = await response.json();
//         // localStorage.setItem("token", data.token);
//         // localStorage.setItem("user", JSON.stringify(data.user));
//     } catch (error) {
//         console.log(error);
//     }
// }

export const LoginUserApi = async (user) => {
    try {

        const response = await axios.post("https://todo-ankur.herokuapp.com/user/login", user);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Invalid Username or password');
    }
};

export async function getAllToDoApi(token) {
    const response = await fetch('https://todo-ankur.herokuapp.com/task/1/100', {
        method: 'GET',
        headers: {
            'authorization': token,
        },
    });
    const data = await response.json();
    console.log(data);
    return data;
};

export const addTodo = async (newTask, token) => {
    console.log(token);
    try {
        const response = await fetch('https://todo-ankur.herokuapp.com/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': token
            },
            body: JSON.stringify(newTask)
        });
        const data = await response.json();
        console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
};

export const deleteTodoApi = async (id, token) => {
    console.log(id)
    const response = await fetch('https://todo-ankur.herokuapp.com/task/' + id, {
        method: 'DELETE',
        headers: {
            'authorization': token
        },
    });
    // toDoList.splice(i, 1);
    // toDoListCopy = [...toDoList];
    // localStorage.setItem(loggedInUser.emailId, JSON.stringify(toDoListCopy));
}

export const editTodoApi = async (todo, token) => {
    const newTask = {
        description: todo.description,
        id: todo.id,
        title: todo.title
    }
    const response = await fetch('https://todo-ankur.herokuapp.com/task', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': token
        },
        body: JSON.stringify(newTask)
    });
    const editedData = await response.json();
    console.log(editedData);
    return editedData;
}