import React, {Fragment} from 'react';
import Icon from '&icons';
import SeoContainer from '&components/seo-container';
import DayMenu from './day-menu';
import {Drawer, Toast} from 'antd-mobile';
import Sider from './sider';
import moment from 'moment';
import axios from '&helpers/config/axios';
import './styles.less';

class FoodMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawer: {
                open: false,
            }
        };
        this.page = {
            pageNum: 1,
            pageSize: 15
        };
    }
    drawerMethods = {
        changeStatus: () => {
            const {drawer} = this.state;
            drawer.open = !drawer.open;
            this.setState({drawer});
        }
    };

    render() {
        const {drawer} = this.state;
        const {drawerMethods} = this;
        return (
            <SeoContainer title="颐嘉餐厅-菜谱">
                <nav className="nav-container">
                    <span className="nav-title">菜谱</span>
                    {
                        !drawer.open && (
                            <Icon type="icon-add" onClick={drawerMethods.changeStatus}/>
                        )
                    }
                </nav>
                <main className="food-menu-content">
                    <Drawer
                        sidebar={<Sider changeStatus={drawerMethods.changeStatus}/>}
                        open={drawer.open}
                        position="right">
                        <DayMenu/>
                    </Drawer>
                </main>
            </SeoContainer>
        )
    }
}

export default FoodMenu;