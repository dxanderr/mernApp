import styled from 'styled-components';

export const TopbarContainer = styled.div`
    height: 50px;
    width: 100%;
    background-color: #0d1e49;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`

export const TopbarCenter = styled.div`
    flex: 5;

    .searchbar{
        width: 100%;
        height: 30px;
        background-color: #fff;
        border-radius: 30px;
        display: flex;
        align-items: center;

        .searchIcon{
            font-size: 20px;
            margin-left: 10px;
        }

        .searchInput{
            border: none;
            width: 70%;
        }

        .searchInput:focus{
            outline: none;
        }
    }

`
export const TopbarLeft = styled.div`
    flex: 3;

    .logo{
      font-size: 24px;
      margin-left: 20px;
      font-weight: bold;
      color: #fff; 
      cursor: pointer; 
    }
`
export const TopbarRight = styled.div`
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #fff;

    .topbarLink{
        margin-right: 10px;
        font-size: 14px;
        cursor: pointer;
    }

    .topbarIcons{
        display: flex;

        .topbarIconItem{
            margin-right: 14px;
            cursor: pointer;
            position: relative;

            .topbarIconBadge{
                width: 15px;
                height: 15px;
                background-color: red;
                border-radius:50%;
                color: #fff;
                position: absolute;
                top: -5px;
                right: -5px;
                display: flex;
                justify-content: center;
                font-size: 12px;
            }
        }
    }

    .topbarImage{
        width:32px;
        height: 32px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
`