import styled from 'styled-components';

export const Share = styled.div`
    width: 100%100vh;
    height: 170px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;


    .shareWrapper{
        padding: 10px;

        .shareTop{
            display: flex;
            align-items: center;

            .shareProfileImg{
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
                margin-right: 10px;
            }

            .shareInput{
                border: none;
                width: 80%auto;

                &:focus{
                    outline: none;
                }
            }

        }

        .shareHr{
            margin: 20px;
        }

        .shareBottom{
            display: flex;
            align-items: center;
            justify-content: space-between;

            .shareOptions{
                display: flex;
                margin-left: 20px;

                .shareOption{
                    display: flex;
                    align-items: center;
                    margin-right: 15px;
                    cursor: pointer;

                    .shareIcon{
                        font-size: 18px;
                        margin-right: 3px;
                    }

                    .shareOptionText{
                        font-size: 14px;
                        font-weight: 500;
                    }
                }

            }

            .shareButton{
                border: none;
                padding: 7px;
                border-radius: 5px;
                background-color: green;
                font-weight: 500;
                margin-right: 20px;
                cursor: pointer;
                color: #fff;
            }

        }

    }
`