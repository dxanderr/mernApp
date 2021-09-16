import styled from 'styled-components';

export const RightbarFriend = styled.li`

    display: flex;
    align-items: center;
    margin-bottom: 15px;

    .rightbarProfileImgContainer{
        margin-right: 10px;
        position: relative;

        .rightbarProfileImg{
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }

        .rightbarOnline{
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: limegreen;
            position: absolute;
            top: -2px;
            right: 0;
            border: 2px solid white;
        }
    }

    .rightbarUsername{
        font-weight: 500;
    }
`