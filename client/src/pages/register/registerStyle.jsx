import styled from 'styled-components';

export const RegisterSection = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: center;

    .loginWrapper{
        width: 70%;
        height: 70%;
        display: flex;

        .loginLeft, .loginRight{
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .loginLeft{

            .loginLogo{
                font-size: 50px;
                font-weight: 800;
                color: #1775ee;
                margin-bottom: 10px;
            }

            .loginDesc{
                font-size: 24px;
            }
        }

        .loginRight{

            .loginBox{
                height: 400px;
                padding: 20px;
                background-color: #fff;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;


                .loginInput{
                    height: 50px;
                    border-radius: 10px;
                    border: 1px solid grey;
                    font-size: 18px;
                    padding-left: 20px;

                    &:focus{
                        outline: none;
                    }
                }

                .loginButton{
                    height: 50px;
                    border-radius: 10px;
                    border: none;
                    background-color: #1775ee;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 500;
                    cursor: pointer;
                }

                .loginForgot{
                    text-align: center;
                    color: #1775ee;
                }

                .loginRegisterButton{
                    width: 60%;
                    align-self: center;
                    height: 50px;
                    border-radius: 10px;
                    border: none;
                    background-color: #42b72a;
                    color: #fff;
                    font-size: 20px;
                    font-weight: 500;
                    cursor: pointer;
                }
            }
        }
    }

    
`