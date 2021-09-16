import styled from 'styled-components';

export const Posts = styled.div`
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    margin: 30px 0;

    .postWrapper{
        padding: 10px;

        .postTop{
            display: flex;
            align-items: center;
            justify-content: space-between;

            .postTopLeft{
                display: flex;
                align-items: center;


                .postProfileImg{
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    object-fit: cover;
                }

                .postUsername{
                    font-size: 15px;
                    font-weight:500;
                    margin: 0 10px;
                }

                .postDate{
                    font-size: 12px;
                }
            }
        }

        .postCenter{
            margin: 20px 0;

            .postImg{
                margin-top: 20px;
                width: 100%;
                max-height: 500px;
                object-fit: contain;
            }
        }

        .postBottom{
            display: flex;
            align-items: center;
            justify-content: space-between;

            .postBottomLeft{
                display: flex;
                align-items: center;

                .likeIcon, .heartIcon{
                    width: 24px;
                    height: 24px;
                    margin-right: 5px;
                    cursor: pointer;
                }

                .postLikeCounter{
                    font-size: 15px;
                }
            }

            .postBottomRight{

                .postCommentText{
                    cursor: pointer;
                    border-bottom: 1px dashed grey;
                    font-size: 15px;
                }
            }
        }
    }

`