import styled from 'styled-components';

export const LeftbarContainer = styled.div`
    flex: 3;
    height: calc(100vh - 50px);
    overflow-y: scroll;
    position: sticky;
    top: 50px;

    ::-webkit-scrollbar{
        width: 4px;
    }

    ::-webkit-scrollbar-track{
        background-color: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #d5d3d3; 
    }

    .sidebarWrapper{
        padding: 20px;

        .sidebarList{
            padding: 0;
            margin: 0;
            list-style: none;

            .sidebarListItem{
                display: flex;
                align-items: center;
                margin-bottom: 20px;


                .sidebarIcon{
                    margin-right: 15px;
                }
            }
        }

        .sidebarButton{
            width: 150px;
            border: none;
            padding: 10px;
            border-radius: 5px;
            font-weight: 600;
        }

        .sidebarHr{
            margin: 20px 0;
        }

        .sidebarFriendList{
            padding: 0;
            margin: 0;
            list-style: none;

        }
    }
`