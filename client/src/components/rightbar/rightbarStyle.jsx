import styled from 'styled-components';

export const RightbarContainer = styled.div`
    flex: 3.5;

    .rightbarWrapper{
        padding: 20px 20px 0 0;


        .birthdayContainer{
            display: flex;
            align-items: center;

            .birthdayImg{
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }

            .birthdayText{
                font-weight: 300;
                font-size: 15px;
            }
        }

        .rightbarAd{
            width: 100%;
            border-radius: 10px;
            margin: 30px 0;
        }

        .rightbarTitle{
            margin-bottom: 20px;
            font-size: 18px;
            font-weight: 500;
        }

        .rightbarInfo{
            margin-bottom: 30px;

            .rightbarInfoItem{
                margin-bottom: 10px;

                .rightbarInfoKey{
                    font-weight: 600;
                    margin-right: 15px;
                    color: #555;
                }

                .rightbarInfoValue{
                    font-weight:300;
                }
            }
        }


        .rightbarFollowings{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            .rightbarFollowing{
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                cursor: pointer;

                .rightbarFollowingImg{
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 5px;
                }

            }

        }

        .rightbarFriendList{
            padding: 0;
            margin: 0;
            list-style: none;

        }

    }
`