import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Axios from 'axios';

Axios.defaults.baseURL = 'http://laravel-api.miquelcastro.com/api/';
Axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNzJhYzE0ZjBlODg4NjA0MWZjZmJiMzFlNjlhMTcxNDcyOGE1YWVhZWJhNjk4MjU1YjRlMTRhMmEzNTA2MTNiM2NiNWQ1YzY0YmViZDQ4NGYiLCJpYXQiOjE2MTAzMDc3ODYsIm5iZiI6MTYxMDMwNzc4NiwiZXhwIjoxNjQxODQzNzg2LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.F3FhoFBoVioQo4KDxudvJSe3HTEf86HYPuC5SdgmaWqQbqE735dZVkgzEEkrVZiWcmKQ8nWxuY3SNuLkQFPROOnw4BN8EtwYT9l2Px-Yhzjqz2PWckVK-5ayfoG8tVBwZ6cJP0rbPc9bWeSU22UjHU-Rg9fyuB2MyN7X_C8Ek82-C7AX_As0r6TCdnN7Q5oX1lYHzGHDXewZVLYPdNqQlRpO03QdZv7tZQM2vzQ-b-PycwvnST8Rkk4gMUfY_93cOJ_C_CyzEIpCpfCSXk726yMjNzfDz6iYV8A_9LktvXcM_MI_n4Io4WzhzPg2FBDeNwV8b6Dw6Y5kw7YL4HNr-V2TY0O0vIzSnKKpF8180BawLJYukhV4yUSvnbN5zvvz2SpcHgoP4P0GNkJAd0_I9aOfSO9b2DUVA6QTdgUqwhBnZgwC55-i2wBjqZZV0goBB-BNlrLETNn8NGhXpx98X_i-QAQLHl5U85POA15qQ2m-esw0HIUmk38hREzPUjjzZSM-nDGlWMJ7uwRkM24QgGKL87V19lqJhiNa1AN-cvJJI5MbiBQz-ilWh8bIrVxB2C8d-NJwTpJsIWfOKByA34qy38Jh8onNSWmPWKp-Y6iuiP9y7h4fFDT68DD4SeIvjKAUpublQK59CW1ljgAbLBK75tqW43FF3-A6uMyvbFI';
Axios.defaults.headers.post['Content-Type'] = 'application/json';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);